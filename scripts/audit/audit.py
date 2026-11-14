"""Audit des traductions sur preuve (exécuté dans GitHub Actions).

Pour chaque phrase traduite :
  1. similarité sémantique LaBSE entre la source française et la traduction (multilingue, sans traduction) ;
  2. rétro-traduction vers le français par NLLB-200 (modèle indépendant), puis
     similarité LaBSE et chrF entre la rétro-traduction et la source.
Les phrases sous les seuils sont listées dans docs/AUDIT_TRADUCTIONS.md pour correction.

python scripts/audit/audit.py --corpus build/corpus.json
"""
import argparse
import json
import os

NLLB = {'en': 'eng_Latn', 'es': 'spa_Latn', 'it': 'ita_Latn', 'pt': 'por_Latn', 'ar': 'arb_Arab', 'fa': 'pes_Arab',
        'hi': 'hin_Deva', 'zh': 'zho_Hans', 'ja': 'jpn_Jpan', 'ber': 'tzm_Tfng'}
LABSE_LANGS = {'en', 'es', 'it', 'pt', 'ar', 'fa', 'hi', 'zh', 'ja'}  # l'amazigh n'est pas couvert par LaBSE
DIRECT_MIN = 0.75     # similarité LaBSE source ↔ traduction
BACK_MIN = 0.80       # similarité LaBSE source ↔ rétro-traduction


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--corpus', default='build/corpus.json')
    ap.add_argument('--model', default='facebook/nllb-200-distilled-1.3B')
    args = ap.parse_args()
    import torch
    from sacrebleu.metrics import CHRF
    from sentence_transformers import SentenceTransformer
    from transformers import AutoModelForSeq2SeqLM, AutoTokenizer

    rows = [p for p in json.load(open(args.corpus, encoding='utf-8'))['phrases'] if p['lang'] != 'fr']
    labse = SentenceTransformer('sentence-transformers/LaBSE')
    tok = AutoTokenizer.from_pretrained(args.model)
    mt = AutoModelForSeq2SeqLM.from_pretrained(args.model).eval()
    chrf = CHRF()
    fra = tok.convert_tokens_to_ids('fra_Latn')

    by_lang = {}
    for r in rows:
        by_lang.setdefault(r['lang'], []).append(r)
    out = []
    for lang, items in by_lang.items():
        src_texts = [r.get('tfng') or r['text'] for r in items]
        tok.src_lang = NLLB[lang]
        backs = []
        for i in range(0, len(src_texts), 16):
            batch = tok(src_texts[i:i + 16], return_tensors='pt', padding=True)
            with torch.no_grad():
                gen = mt.generate(**batch, forced_bos_token_id=fra, max_new_tokens=96, num_beams=4)
            backs += tok.batch_decode(gen, skip_special_tokens=True)
        fr = [r['fr'] for r in items]
        e_fr = labse.encode(fr, normalize_embeddings=True)
        e_back = labse.encode(backs, normalize_embeddings=True)
        e_tr = labse.encode([r['text'] for r in items], normalize_embeddings=True) if lang in LABSE_LANGS else None
        for k, r in enumerate(items):
            direct = float((e_fr[k] * e_tr[k]).sum()) if e_tr is not None else None
            back_sim = float((e_fr[k] * e_back[k]).sum())
            score = chrf.sentence_score(backs[k], [fr[k]]).score
            flag = (direct is not None and direct < DIRECT_MIN) or back_sim < BACK_MIN
            out.append(dict(id=r['id'], lang=lang, fr=fr[k], text=r['text'], back=backs[k], direct=round(direct, 3) if direct is not None else None,
                            back_sim=round(back_sim, 3), chrf=round(score, 1), flag=flag))
        print(lang, sum(o['flag'] for o in out if o['lang'] == lang), 'signalées /', len(items), flush=True)

    os.makedirs('docs', exist_ok=True)
    json.dump(out, open('docs/audit-traductions.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    lines = ['# Audit des traductions — rapport', '',
             'Généré par le workflow « Audit des traductions ». Mesures : similarité LaBSE entre la source française et la',
             f'traduction (seuil {DIRECT_MIN}), rétro-traduction NLLB-200 vers le français et similarité avec la source (seuil {BACK_MIN}), chrF.',
             'Une phrase signalée n’est pas forcément fausse : c’est une alerte à examiner.', '',
             '| Langue | Phrases | Signalées | LaBSE direct moyen | Rétro-traduction moyenne |', '|---|---|---|---|---|']
    for lang in by_lang:
        L = [o for o in out if o['lang'] == lang]
        d = [o['direct'] for o in L if o['direct'] is not None]
        direct = f"{sum(d) / len(d):.3f}" if d else '—'
        back = f"{sum(o['back_sim'] for o in L) / len(L):.3f}"
        lines.append(f"| {lang} | {len(L)} | {sum(o['flag'] for o in L)} | {direct} | {back} |")
    lines += ['', '## Phrases signalées', '', '| id | langue | source | traduction | rétro-traduction | LaBSE | rétro |', '|---|---|---|---|---|---|---|']
    for o in sorted((o for o in out if o['flag']), key=lambda o: (o['lang'], o['back_sim'])):
        lines.append(f"| {o['id']} | {o['lang']} | {o['fr']} | {o['text']} | {o['back']} | {o['direct'] if o['direct'] is not None else '—'} | {o['back_sim']} |")
    open('docs/AUDIT_TRADUCTIONS.md', 'w', encoding='utf-8').write('\n'.join(lines) + '\n')


if __name__ == '__main__':
    main()
