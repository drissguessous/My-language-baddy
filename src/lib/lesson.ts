import { PHRASE, UNIT } from '../data/curriculum';
import { LANG, LangCode } from '../data/languages';
import type { AgeBand } from '../data/companions';
import { PEDAGOGY } from '../data/pedagogy';
import { PICTO, UNIT_NOTES } from '../data/pedagogyContent';
import { THEME_BY_ID, VOCAB_BY_ID, themeItems } from '../data/vocab';
import { normalize } from './text';

export type Step =
  | { kind: 'discover'; pid: string }
  | { kind: 'meaning'; pid: string; audio: boolean; options: string[] }   // choisir la traduction
  | { kind: 'pick'; pid: string; options: string[] }                      // entendre et choisir l'écrit
  | { kind: 'order'; pid: string; tiles: string[] }                       // remettre les mots dans l'ordre
  | { kind: 'speak'; pid: string }                                        // répéter, analyse vocale
  | { kind: 'write'; pid: string }                                        // traduire par écrit
  | { kind: 'picture'; pid: string; options: string[]; recall?: boolean } // enfants : entendre et toucher l'image
  | { kind: 'grammar'; unitId: string; mode: 'guided' | 'explicit' }      // point de langue (ados, adultes)
  | { kind: 'name'; pid: string; options: string[] };                    // vocabulaire : voir l'image, choisir le mot écrit

function shuffle<T>(a: T[], seed = Math.random): T[] {
  const r = [...a];
  for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(seed() * (i + 1)); [r[i], r[j]] = [r[j], r[i]]; }
  return r;
}

function distractors(pid: string, pool: string[], lang: LangCode, n = 3): string[] {
  const others = shuffle(pool.filter((id) => id !== pid && PHRASE[id]?.t[lang]));
  return shuffle([pid, ...others.slice(0, n)]);
}

export function orderTiles(text: string, lang: LangCode, maxWords = 11): string[] | null {
  if (!LANG[lang].segmented) return null;
  const words = text.split(/\s+/).filter(Boolean);
  if (words.length < 3 || words.length > maxWords) return null;
  return words;
}

const nonLatin = (lang: LangCode) => ['ar', 'zh', 'ja', 'fa', 'hi', 'ber', 'th'].includes(lang);

/**
 * Construit une leçon à partir d'une unité, selon le profil pédagogique de l'âge (src/data/pedagogy.ts) :
 * découverte → compréhension → point de langue → structuration → production orale → production écrite
 * → récupération finale (rappel sans aide).
 */
export function buildUnitLesson(unitId: string, lang: LangCode, band: AgeBand, pool: string[]): Step[] {
  const ped = PEDAGOGY[band];
  const unit = UNIT[unitId];
  const ids = unit.phrases.filter((id) => PHRASE[id]?.t[lang]);
  const all = [...new Set([...ids, ...pool])];
  const pics = all.filter((id) => PICTO[id]);
  const usePictures = ped.pictureCards && ids.every((id) => PICTO[id]) && pics.length >= 4;
  const comprehension = (pid: string, i: number, recall = false): Step =>
    usePictures
      ? { kind: 'picture', pid, options: distractors(pid, pics, lang), recall }
      : i % 2 === 0 || recall
        ? { kind: 'meaning', pid, audio: true, options: distractors(pid, all, lang) }
        : nonLatin(lang)
          ? { kind: 'pick', pid, options: distractors(pid, all, lang) }
          : { kind: 'meaning', pid, audio: false, options: distractors(pid, all, lang) };

  const steps: Step[] = [];
  ids.forEach((pid, i) => {
    steps.push({ kind: 'discover', pid });
    steps.push(comprehension(pid, i));
  });
  const note = UNIT_NOTES[unitId];
  if (ped.grammar !== 'none' && note && (ped.grammar === 'explicit' ? note.explicit.length : note.guided)) {
    steps.push({ kind: 'grammar', unitId, mode: ped.grammar });
  }
  shuffle(ids).filter((id) => orderTiles(PHRASE[id].t[lang]!, lang, ped.orderMaxWords)).slice(0, ped.orderCount)
    .forEach((pid) => steps.push({ kind: 'order', pid, tiles: shuffle(orderTiles(PHRASE[pid].t[lang]!, lang)!) }));
  ids.filter((id) => PHRASE[id].role === 'l').forEach((pid) => steps.push({ kind: 'speak', pid }));
  const writeCount = nonLatin(lang) ? ped.writeOther : ped.writeLatin;
  shuffle(ids).filter((id) => (PHRASE[id].t[lang] ?? '').length <= (band === 'kid' ? 30 : 60)).slice(0, writeCount)
    .forEach((pid) => steps.push({ kind: 'write', pid }));
  if (ped.retrievalRound) shuffle(ids).slice(0, 2).forEach((pid, i) => steps.push(comprehension(pid, i, true)));
  return steps;
}

/** Séances d'entraînement ciblées (onglet Pratiquer). */
export function buildPractice(mode: 'review' | 'listen' | 'speak' | 'write', ids: string[], lang: LangCode, basePool: string[]): Step[] {
  const sel = shuffle(ids.filter((id) => PHRASE[id]?.t[lang])).slice(0, mode === 'review' ? 10 : 8);
  return sel.flatMap((pid, i): Step[] => {
    const pool = vocabPool(pid, lang) ?? basePool;
    if (VOCAB_BY_ID[pid] && !VOCAB_BY_ID[pid].group && mode !== 'speak' && mode !== 'write' && i % 3 === 0) {
      return [{ kind: 'picture', pid, options: distractors(pid, pool, lang) }];
    }
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

/** Pour un mot du vocabulaire, les distracteurs viennent du même thème (mots avec mots, groupes avec groupes). */
function vocabPool(pid: string, lang: LangCode): string[] | null {
  const v = VOCAB_BY_ID[pid];
  if (!v) return null;
  const items = themeItems(THEME_BY_ID[v.theme], lang);
  const same = v.group ? items.groups : items.words;
  return same.length >= 4 ? same : items.words;
}

/**
 * Séance de vocabulaire illustré : découverte (image, son, écrit) → reconnaissance (entendre et toucher
 * l'image, voir l'image et choisir le mot) → prononciation → écriture → groupes de mots → rappel final.
 */
export function buildVocabLesson(themeId: string, lang: LangCode, band: AgeBand, only?: string[]): Step[] {
  const ped = PEDAGOGY[band];
  const th = THEME_BY_ID[themeId];
  const { words, groups } = themeItems(th, lang);
  const pick = only?.length ? words.filter((w) => only.includes(w)) : words;
  const sel = pick.slice(0, band === 'kid' ? 6 : 8);
  const steps: Step[] = [];
  sel.forEach((pid, i) => {
    steps.push({ kind: 'discover', pid });
    steps.push(i % 2 === 0 || band === 'kid'
      ? { kind: 'picture', pid, options: distractors(pid, words, lang) }
      : { kind: 'name', pid, options: distractors(pid, words, lang) });
  });
  shuffle(sel).slice(0, band === 'kid' ? 3 : 4).forEach((pid) => steps.push({ kind: 'speak', pid }));
  const writeCount = nonLatin(lang) ? ped.writeOther : ped.writeLatin;
  shuffle(sel).slice(0, Math.max(2, writeCount)).forEach((pid) => steps.push({ kind: 'write', pid }));
  groups.slice(0, 2).forEach((pid) => {
    steps.push({ kind: 'discover', pid });
    const tiles = orderTiles(PHRASE[pid].t[lang]!, lang, ped.orderMaxWords);
    steps.push(tiles ? { kind: 'order', pid, tiles: shuffle(tiles) } : { kind: 'speak', pid });
  });
  shuffle(sel).slice(0, 2).forEach((pid) => steps.push(
    band === 'kid' ? { kind: 'picture', pid, options: distractors(pid, words, lang), recall: true } : { kind: 'name', pid, options: distractors(pid, words, lang) },
  ));
  return steps;
}

/** Le texte saisi correspond-il à l'ordre attendu ? */
export function sameText(a: string, b: string, lang: LangCode) {
  return normalize(a, lang) === normalize(b, lang);
}
