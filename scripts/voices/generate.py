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


def worker(args, lang, cand, jobs):
    """Génère et vérifie les clips d'une voix ; chaque résultat est écrit dans le cache au fil de l'eau."""
    asr = None
    if lang in WHISPER_LANG:
        from faster_whisper import WhisperModel
        asr = WhisperModel(args.whisper, device='cpu', compute_type='int8')
    cdir = os.path.join(args.cache, lang, cand['id'])
    os.makedirs(cdir, exist_ok=True)
    tmp = tempfile.mkdtemp()
    synth = None
    for it in jobs:
        h = fnv(it['text'] + '|' + cand['id'] + '|' + args.whisper)
        cmp3, cjson = os.path.join(cdir, h + '.mp3'), os.path.join(cdir, h + '.json')
        if os.path.exists(cmp3) and os.path.exists(cjson):
            continue
        if synth is None:
            synth = Synth(cand)  # une erreur ici arrête le worker : la voix est signalée par le parent
        entry = {}
        try:
            wav = os.path.join(tmp, 'x.wav')
            synth.wav(it['text'], wav)
            encode(wav, cmp3)
            entry['bytes'] = os.path.getsize(cmp3)
            if asr:
                segs, _ = asr.transcribe(cmp3, language=WHISPER_LANG[lang], beam_size=1, condition_on_previous_text=False,
                                         vad_filter=False, without_timestamps=True)
                heard = ''.join(x.text for x in segs).strip()
                entry['heard'] = heard
                entry['cer'] = round(cer(it['text'], heard, lang), 3)
                entry['pass'] = entry['cer'] <= CER_PASS
            else:
                entry['pass'] = None
        except Exception as ex:  # erreur non mise en cache : le clip sera retenté à la prochaine génération
            if os.path.exists(cmp3):
                os.remove(cmp3)
            print(f"{cand['id']} {it['key']} {type(ex).__name__}: {ex}", flush=True)
            continue
        json.dump(entry, open(cjson, 'w', encoding='utf-8'), ensure_ascii=False)
        print(f"{cand['id']} {it['key']} {entry.get('cer')}", flush=True)


def run_watched(cmd, limit, stall):
    """Lance un worker ; l'arrête s'il dépasse `limit` secondes ou reste `stall` secondes sans produire de clip."""
    import selectors
    p = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True, bufsize=1)
    sel = selectors.DefaultSelector()
    sel.register(p.stdout, selectors.EVENT_READ)
    start = last = time.time()
    why = None
    while True:
        if sel.select(timeout=15):
            line = p.stdout.readline()
            if not line:
                break
            sys.stdout.write(line)
            last = time.time()
        now = time.time()
        if now - start > limit:
            why = f'limite de {round(limit / 60)} min atteinte'
        elif now - last > stall:
            why = f'aucun clip depuis {round(stall / 60)} min'
        if why:
            p.kill()
            break
    p.wait()
    return (None if why else p.returncode), why


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--lang', required=True)
    ap.add_argument('--corpus', default='build/corpus.json')
    ap.add_argument('--out', default='out/voices')
    ap.add_argument('--whisper', default='large-v3-turbo')
    ap.add_argument('--cache', default='cache/voices', help='clips déjà générés et vérifiés (réutilisés si le texte est inchangé)')
    ap.add_argument('--budget', type=float, default=270, help='minutes au total pour la langue')
    ap.add_argument('--stall', type=float, default=10, help='minutes sans nouveau clip avant d\'arrêter une voix bloquée')
    ap.add_argument('--worker', help=argparse.SUPPRESS)
    ap.add_argument('--kind', help=argparse.SUPPRESS)
    args = ap.parse_args()
    lang = args.lang
    corpus = json.load(open(args.corpus, encoding='utf-8'))
    items = [dict(key=p['id'], text=p['text']) for p in corpus['phrases'] if p['lang'] == lang]
    coach = [dict(key=c['key'], text=c['text'], gender=c['gender']) for c in corpus['coach']] if lang == 'fr' else []
    cands = {c['id']: c for c in CANDIDATES[lang]}

    def jobs_for(cand, kind):
        return items if kind == 'clips' else [it for it in coach if it['gender'] == cand['gender']]

    if args.worker:
        cand = cands[args.worker]
        worker(args, lang, cand, jobs_for(cand, args.kind))
        return

    # Chaque voix tourne dans un processus séparé avec une limite de temps : un moteur bloqué
    # n'empêche plus les autres voix ni la publication. Phrases des leçons d'abord, répliques ensuite.
    deadline = time.time() + args.budget * 60
    errors = {}
    for kind in ('clips', 'coach'):
        pending = [c for c in CANDIDATES[lang] if jobs_for(c, kind) and c['id'] not in errors]
        for n, cand in enumerate(pending):
            left = deadline - time.time()
            if left < 60:
                print(f"{lang}/{cand['id']} {kind} : budget épuisé", flush=True)
                continue
            share = left / (len(pending) - n)  # part équitable du temps restant
            t0 = time.time()
            cmd = [sys.executable, __file__, '--lang', lang, '--corpus', args.corpus, '--whisper', args.whisper,
                   '--cache', args.cache, '--worker', cand['id'], '--kind', kind]
            code, why = run_watched(cmd, share, args.stall * 60)
            if why:
                print(f"{lang}/{cand['id']} {kind} : arrêt ({why})", flush=True)
            if code not in (0, None) and kind == 'clips':
                errors[cand['id']] = why or f'processus terminé avec le code {code}'
            print(f"{lang}/{cand['id']} {kind} : {round(time.time() - t0)} s", flush=True)

    # Rassemblement : tout est lu dans le cache.
    results = {'lang': lang, 'validated': lang in WHISPER_LANG, 'candidates': []}
    for cand in CANDIDATES[lang]:
        rec = dict(cand, clips={}, coach={}, error=None)
        cdir = os.path.join(args.cache, lang, cand['id'])
        dest = os.path.join(args.out, lang, cand['id'])
        os.makedirs(dest, exist_ok=True)
        for kind in ('clips', 'coach'):
            for it in jobs_for(cand, kind):
                h = fnv(it['text'] + '|' + cand['id'] + '|' + args.whisper)
                cmp3, cjson = os.path.join(cdir, h + '.mp3'), os.path.join(cdir, h + '.json')
                if os.path.exists(cjson) and os.path.exists(cmp3):
                    e = json.load(open(cjson, encoding='utf-8'))
                    if not e.get('error'):
                        shutil.copy(cmp3, os.path.join(dest, ('coach-' if kind == 'coach' else '') + it['key'] + '.mp3'))
                    rec[kind][it['key']] = e
                elif kind == 'clips':
                    rec[kind][it['key']] = {'error': 'non généré', 'pass': False}
        if not any(not e.get('error') for e in rec['clips'].values()):
            rec['error'] = errors.get(cand['id']) or 'aucun clip généré'
        graded = [v for v in rec['clips'].values() if v.get('pass') is not None]
        rec['pass_rate'] = round(sum(1 for v in graded if v['pass']) / len(graded), 3) if graded else None
        cers = [v['cer'] for v in rec['clips'].values() if 'cer' in v]
        rec['mean_cer'] = round(sum(cers) / len(cers), 3) if cers else None
        rec['coach_missing'] = len(jobs_for(cand, 'coach')) - len(rec['coach'])
        print(f"{lang}/{cand['id']}: réussite {rec['pass_rate']} CER moyen {rec['mean_cer']} "
              f"(répliques manquantes {rec['coach_missing']}, erreur {rec['error']})", flush=True)
        results['candidates'].append(rec)

    os.makedirs(os.path.join(args.out, lang), exist_ok=True)
    json.dump(results, open(os.path.join(args.out, lang, 'results.json'), 'w', encoding='utf-8'), ensure_ascii=False, indent=1)


if __name__ == '__main__':
    main()
