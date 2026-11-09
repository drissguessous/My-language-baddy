import { PHRASE, UNIT } from '../data/curriculum';
import { LANG, LangCode } from '../data/languages';
import type { AgeBand } from '../data/companions';
import { normalize } from './text';

export type Step =
  | { kind: 'discover'; pid: string }
  | { kind: 'meaning'; pid: string; audio: boolean; options: string[] }   // choisir la traduction
  | { kind: 'pick'; pid: string; options: string[] }                      // entendre et choisir l'écrit
  | { kind: 'order'; pid: string; tiles: string[] }                       // remettre les mots dans l'ordre
  | { kind: 'speak'; pid: string }                                        // répéter, analyse vocale
  | { kind: 'write'; pid: string };                                       // traduire par écrit

function shuffle<T>(a: T[], seed = Math.random): T[] {
  const r = [...a];
  for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(seed() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; }
  return r;
}

function distractors(pid: string, pool: string[], lang: LangCode, n = 3): string[] {
  const others = shuffle(pool.filter((id) => id !== pid && PHRASE[id]?.t[lang]));
  return shuffle([pid, ...others.slice(0, n)]);
}

export function orderTiles(text: string, lang: LangCode): string[] | null {
  if (!LANG[lang].segmented) return null;
  const words = text.split(/\s+/).filter(Boolean);
  if (words.length < 3 || words.length > 11) return null;
  return words;
}

const nonLatin = (lang: LangCode) => ['ar', 'zh', 'ja', 'fa', 'hi', 'ber'].includes(lang);

/** Construit une leçon complète à partir d'une unité. */
export function buildUnitLesson(unitId: string, lang: LangCode, band: AgeBand, pool: string[]): Step[] {
  const unit = UNIT[unitId];
  const ids = unit.phrases.filter((id) => PHRASE[id]?.t[lang]);
  const all = [...new Set([...ids, ...pool])];
  const steps: Step[] = [];
  ids.forEach((pid, i) => {
    steps.push({ kind: 'discover', pid });
    steps.push(i % 2 === 0
      ? { kind: 'meaning', pid, audio: true, options: distractors(pid, all, lang) }
      : nonLatin(lang)
        ? { kind: 'pick', pid, options: distractors(pid, all, lang) }
        : { kind: 'meaning', pid, audio: false, options: distractors(pid, all, lang) });
  });
  const learner = ids.filter((id) => PHRASE[id].role === 'l');
  const orderable = shuffle(ids).filter((id) => orderTiles(PHRASE[id].t[lang]!, lang)).slice(0, 2);
  orderable.forEach((pid) => steps.push({ kind: 'order', pid, tiles: shuffle(orderTiles(PHRASE[pid].t[lang]!, lang)!) }));
  learner.forEach((pid) => steps.push({ kind: 'speak', pid }));
  const writeCount = band === 'kid' && nonLatin(lang) ? 0 : band === 'kid' ? 1 : 2;
  shuffle(ids).filter((id) => (PHRASE[id].t[lang] ?? '').length <= 60).slice(0, writeCount)
    .forEach((pid) => steps.push({ kind: 'write', pid }));
  return steps;
}

/** Séances d'entraînement ciblées (onglet Pratiquer). */
export function buildPractice(mode: 'review' | 'listen' | 'speak' | 'write', ids: string[], lang: LangCode, pool: string[]): Step[] {
  const sel = shuffle(ids.filter((id) => PHRASE[id]?.t[lang])).slice(0, mode === 'review' ? 10 : 8);
  return sel.flatMap((pid, i): Step[] => {
    switch (mode) {
      case 'listen': return [i % 2 ? { kind: 'pick', pid, options: distractors(pid, pool, lang) } : { kind: 'meaning', pid, audio: true, options: distractors(pid, pool, lang) }];
      case 'speak': return [{ kind: 'speak', pid }];
      case 'write': return [{ kind: 'write', pid }];
      default: {
        const kinds: Step[] = [
          { kind: 'meaning', pid, audio: true, options: distractors(pid, pool, lang) },
          { kind: 'speak', pid },
          { kind: 'write', pid },
        ];
        return [kinds[i % 3]];
      }
    }
  });
}

/** Le texte saisi correspond-il à l'ordre attendu ? */
export function sameText(a: string, b: string, lang: LangCode) {
  return normalize(a, lang) === normalize(b, lang);
}
