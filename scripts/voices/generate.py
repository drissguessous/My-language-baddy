"""Génère et vérifie les enregistrements d'une langue.

python scripts/voices/generate.py --lang fr --corpus build/corpus.json --out out/voices
Produit out/voices/<lang>/<candidat>/<clé>.mp3 et out/voices/<lang>/results.json.
Pour le français, génère aussi les répliques du compagnon (mode professeur).
"""
import argparse
import json
import os
import subprocess
import sys
import tempfile
import time
import traceback
import wave

sys.path.insert(0, os.path.dirname(__file__))
import shutil  # noqa: E402
from common import CANDIDATES, CER_PASS, WHISPER_LANG, cer, fnv, to_mms_shi  # noqa: E402


def encode(wav_path: str, mp3_path: str):
    af = ('silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.05,areverse,'
          'silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.12,areverse,'
          'loudnorm=I=-18:TP=-2:LRA=11')
    subprocess.run(['ffmpeg', '-loglevel', 'error', '-y', '-i', wav_path, '-af', af, '-ac', '1', '-ar', '24000',
                    '-codec:a', 'libmp3lame', '-b:a', '48k', mp3_path], check=True)


def write_wav(path, samples, sr):
    import numpy as np
    a = np.clip(np.asarray(samples, dtype='float32'), -1, 1)
    with wave.open(path, 'wb') as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(sr)
        w.writeframes((a * 32767).astype('<i2').tobytes())


class Synth:
    def __init__(self, cand):
        self.c = cand
        e = cand['engine']
        if e == 'kokoro':
            from kokoro import KPipeline
            self.pipe = KPipeline(lang_code=cand['code'], repo_id='hexgrad/Kokoro-82M')
        elif e == 'piper':
            from huggingface_hub import hf_hub_download
            from piper import PiperVoice
            onnx = hf_hub_download('rhasspy/piper-voices', cand['model'] + '.onnx')
            hf_hub_download('rhasspy/piper-voices', cand['model'] + '.onnx.json')
            self.voice = PiperVoice.load(onnx)
        elif e == 'mms':
            import torch
            from transformers import AutoTokenizer, VitsModel
            self.torch = torch
            self.tok = AutoTokenizer.from_pretrained(cand['repo'])
            self.model = VitsModel.from_pretrained(cand['repo']).eval()

    def wav(self, text: str, path: str):
        e = self.c['engine']
        if e == 'kokoro':
            import numpy as np
            chunks = [np.asarray(a) for _, _, a in self.pipe(text, voice=self.c['id'], speed=1.0) if a is not None]
            if not chunks:
                raise RuntimeError('aucun audio')
            write_wav(path, np.concatenate(chunks), 24000)
        elif e == 'piper':
            with wave.open(path, 'wb') as w:
                if hasattr(self.voice, 'synthesize_wav'):
                    self.voice.synthesize_wav(text, w)
                else:
                    self.voice.synthesize(text, w)
        elif e == 'mms':
            if self.c['repo'].endswith('-shi'):
                text = to_mms_shi(text)
            self.torch.manual_seed(7)
            inputs = self.tok(text, return_tensors='pt')
            with self.torch.no_grad():
                out = self.model(**inputs).waveform[0].numpy()
            write_wav(path, out, self.model.config.sampling_rate)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--lang', required=True)
    ap.add_argument('--corpus', default='build/corpus.json')
    ap.add_argument('--out', default='out/voices')
    ap.add_argument('--whisper', default='large-v3-turbo')
    ap.add_argument('--cache', default='cache/voices', help='clips déjà générés et vérifiés (réutilisés si le texte est inchangé)')
    args = ap.parse_args()
    lang = args.lang
    corpus = json.load(open(args.corpus, encoding='utf-8'))
    items = [dict(key=p['id'], text=p['text']) for p in corpus['phrases'] if p['lang'] == lang]
    coach = [dict(key=c['key'], text=c['text'], gender=c['gender']) for c in corpus['coach']] if lang == 'fr' else []

    asr = None
    if lang in WHISPER_LANG:
        from faster_whisper import WhisperModel
        asr = WhisperModel(args.whisper, device='cpu', compute_type='int8')

    def transcribe(mp3):
        segs, _ = asr.transcribe(mp3, language=WHISPER_LANG[lang], beam_size=1, condition_on_previous_text=False,
                                 vad_filter=False, without_timestamps=True)
        return ''.join(s.text for s in segs).strip()

    results = {'lang': lang, 'validated': asr is not None, 'candidates': []}
    tmp = tempfile.mkdtemp()
    for cand in CANDIDATES[lang]:
        rec = dict(cand, clips={}, coach={}, error=None)
        t0 = time.time()
        synth = None
        cdir = os.path.join(args.cache, lang, cand['id'])
        os.makedirs(cdir, exist_ok=True)
        dest = os.path.join(args.out, lang, cand['id'])
        os.makedirs(dest, exist_ok=True)
        jobs = [('clips', it) for it in items]
        jobs += [('coach', it) for it in coach if it['gender'] == cand['gender']]
        for kind, it in jobs:
            mp3 = os.path.join(dest, ('coach-' if kind == 'coach' else '') + it['key'] + '.mp3')
            entry = {}
            h = fnv(it['text'] + '|' + cand['id'] + '|' + args.whisper)
            cmp3, cjson = os.path.join(cdir, h + '.mp3'), os.path.join(cdir, h + '.json')
            if os.path.exists(cmp3) and os.path.exists(cjson):
                shutil.copy(cmp3, mp3)
                rec[kind][it['key']] = json.load(open(cjson, encoding='utf-8'))
                continue
            if synth is None and rec['error'] is None:
                try:
                    synth = Synth(cand)
                except Exception as ex:  # modèle indisponible : on le signale et on continue
                    rec['error'] = f'{type(ex).__name__}: {ex}'
                    traceback.print_exc()
            if synth is None:
                rec[kind][it['key']] = {'error': rec['error'], 'pass': False}
                continue
            try:
                wav = os.path.join(tmp, 'x.wav')
                synth.wav(it['text'], wav)
                encode(wav, mp3)
                entry['bytes'] = os.path.getsize(mp3)
                if asr:
                    heard = transcribe(mp3)
                    entry['heard'] = heard
                    entry['cer'] = round(cer(it['text'], heard, lang), 3)
                    entry['pass'] = entry['cer'] <= CER_PASS
                else:
                    entry['pass'] = None
                shutil.copy(mp3, cmp3)
                json.dump(entry, open(cjson, 'w', encoding='utf-8'), ensure_ascii=False)
            except Exception as ex:
                entry = {'error': f'{type(ex).__name__}: {ex}', 'pass': False}
            rec[kind][it['key']] = entry
        rec['seconds'] = round(time.time() - t0)
        graded = [v for v in rec['clips'].values() if v.get('pass') is not None]
        rec['pass_rate'] = round(sum(1 for v in graded if v['pass']) / len(graded), 3) if graded else None
        cers = [v['cer'] for v in rec['clips'].values() if 'cer' in v]
        rec['mean_cer'] = round(sum(cers) / len(cers), 3) if cers else None
        print(f"{lang}/{cand['id']}: réussite {rec['pass_rate']} CER moyen {rec['mean_cer']} ({rec['seconds']} s)", flush=True)
        results['candidates'].append(rec)

    os.makedirs(os.path.join(args.out, lang), exist_ok=True)
    json.dump(results, open(os.path.join(args.out, lang, 'results.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)


if __name__ == '__main__':
    main()
