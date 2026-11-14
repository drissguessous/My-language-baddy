"""Sélectionne les meilleures voix sur preuve, copie les clips validés et écrit le manifeste.

python scripts/voices/assemble.py --in out/voices
Écrit assets/audio/**, src/data/audio/manifest.ts, docs/VOIX.md et docs/voix-report.json.
"""
import argparse
import glob
import json
import os
import shutil

LANG_NAMES = {'en': 'Anglais', 'fr': 'Français', 'es': 'Espagnol', 'it': 'Italien', 'pt': 'Portugais', 'ar': 'Arabe',
              'fa': 'Persan', 'hi': 'Hindi', 'zh': 'Chinois', 'ja': 'Japonais', 'ber': 'Amazigh'}
MIN_RATE = 0.6  # une voix n'est retenue que si au moins 60 % de ses clips sont validés


def rank(c):
    return (c.get('pass_rate') or 0, -(c.get('mean_cer') or 1))


def choose(cands, validated):
    ok = [c for c in cands if not c.get('error') and c['clips']]
    if not validated:
        return ok[:2]
    ok = [c for c in ok if (c.get('pass_rate') or 0) >= MIN_RATE]
    ok.sort(key=rank, reverse=True)
    if not ok:
        return []
    best = ok[0]
    other = next((c for c in ok[1:] if c['gender'] != best['gender']), None) or (ok[1] if len(ok) > 1 else None)
    return [best] + ([other] if other else [])


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--in', dest='inp', default='out/voices')
    args = ap.parse_args()
    shutil.rmtree('assets/audio', ignore_errors=True)
    os.makedirs('assets/audio/coach', exist_ok=True)
    voices, clips, coach, report = {}, [], [], {}

    for path in sorted(glob.glob(os.path.join(args.inp, '*', 'results.json'))):
        res = json.load(open(path, encoding='utf-8'))
        lang = res['lang']
        base = os.path.dirname(path)
        chosen = choose(res['candidates'], res['validated'])
        report[lang] = {'validated': res['validated'], 'candidates': [
            {k: c.get(k) for k in ('id', 'engine', 'name', 'gender', 'accent', 'license', 'pass_rate', 'mean_cer', 'error')}
            for c in res['candidates']], 'chosen': [c['id'] for c in chosen], 'clips_total': 0, 'clips_kept': 0, 'failed': []}
        voices[lang] = [dict(idx=i, name=c['name'], gender=c['gender'], engine=c['engine'], accent=c['accent'],
                             license=c['license'], passRate=c.get('pass_rate')) for i, c in enumerate(chosen)]
        os.makedirs(f'assets/audio/{lang}', exist_ok=True)
        keys = sorted({k for c in res['candidates'] for k in c['clips']})
        for key in keys:
            report[lang]['clips_total'] += 1
            kept = False
            for i, c in enumerate(chosen):
                e = c['clips'].get(key)
                if not e or e.get('error') or e.get('pass') is False:
                    continue
                shutil.copy(os.path.join(base, c['id'], key + '.mp3'), f'assets/audio/{lang}/{key}-{i}.mp3')
                clips.append((f'{lang}/{key}/{i}', f'{lang}/{key}-{i}.mp3'))
                kept = True
            if kept:
                report[lang]['clips_kept'] += 1
            else:
                report[lang]['failed'].append({'key': key, 'heard': {c['id']: c['clips'].get(key, {}).get('heard') for c in chosen}})
        if lang == 'fr':
            for g in ('f', 'm'):
                c = next((x for x in sorted(res['candidates'], key=rank, reverse=True)
                          if x['gender'] == g and not x.get('error') and (x.get('pass_rate') or 0) >= MIN_RATE), None)
                if not c:
                    continue
                for key, e in c['coach'].items():
                    if e.get('pass'):
                        shutil.copy(os.path.join(base, c['id'], 'coach-' + key + '.mp3'), f'assets/audio/coach/{key}.mp3')
                        coach.append(key)
                report['fr'][f'coach_{g}'] = {'voice': c['id'], 'kept': sum(1 for e in c['coach'].values() if e.get('pass')),
                                              'total': len(c['coach'])}

    os.makedirs('src/data/audio', exist_ok=True)
    with open('src/data/audio/manifest.ts', 'w', encoding='utf-8') as f:
        f.write('// Fichier généré par scripts/voices/assemble.py (workflow « Voix »). Ne pas modifier à la main.\n')
        f.write("import type { BundledVoice } from './types';\n\n")
        f.write('export const VOICES: Record<string, BundledVoice[]> = ' + json.dumps(voices, ensure_ascii=False, indent=1) + ';\n\n')
        f.write('export const CLIPS: Record<string, number> = {\n')
        for k, p in clips:
            f.write(f"  '{k}': require('../../../assets/audio/{p}'),\n")
        f.write('};\n\nexport const COACH: Record<string, number> = {\n')
        for k in coach:
            f.write(f"  '{k}': require('../../../assets/audio/coach/{k}.mp3'),\n")
        f.write('};\n')

    json.dump(report, open('docs/voix-report.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    size = sum(os.path.getsize(p) for p in glob.glob('assets/audio/**/*.mp3', recursive=True))
    lines = ['# Voix intégrées — rapport de validation', '',
             'Généré automatiquement par le workflow « Voix ». Chaque enregistrement est retranscrit par Whisper',
             '(large-v3-turbo) et comparé au texte attendu (taux d’erreur de caractères, CER ; pinyin pour le chinois,',
             'hiragana pour le japonais). Un clip est conservé si CER ≤ 0,25 ; une voix est retenue si au moins 60 % de',
             'ses clips sont validés. Sans clip validé, l’application utilise la voix du téléphone.', '',
             f'Taille totale des clips : {size / 1048576:.1f} Mo.', '',
             '| Langue | Voix retenues | Clips validés | Candidates (taux de réussite · CER moyen) |', '|---|---|---|---|']
    for lang, r in report.items():
        def desc(c):
            if c['error']:
                return f"{c['id']} (erreur)"
            if not r['validated']:
                return f"{c['id']} (non vérifiable)"
            return f"{c['id']} ({(c['pass_rate'] or 0) * 100:.0f} % · {c['mean_cer']})"
        cands = ', '.join(desc(c) for c in r['candidates'])
        lines.append(f"| {LANG_NAMES.get(lang, lang)} | {', '.join(r['chosen']) or '—'} | {r['clips_kept']}/{r['clips_total']} | {cands} |")
    if 'fr' in report:
        for g in ('f', 'm'):
            if f'coach_{g}' in report['fr']:
                c = report['fr'][f'coach_{g}']
                lines.append('')
                lines.append(f"Répliques du compagnon (voix {'féminine' if g == 'f' else 'masculine'}, {c['voice']}) : {c['kept']}/{c['total']} validées.")
    if 'ber' in report and not report['ber']['validated']:
        lines += ['', 'Amazigh : Whisper ne reconnaît pas l’amazigh ; les clips (modèle MMS tachelhit) sont intégrés sans vérification automatique.']
    open('docs/VOIX.md', 'w', encoding='utf-8').write('\n'.join(lines) + '\n')
    print('\n'.join(lines))


if __name__ == '__main__':
    main()
