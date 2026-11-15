import type { Level } from '../curriculum';
import type { LangCode } from '../languages';
import type { Phrase } from '../phrases/types';
import { BASICS } from './basics';
import { FOOD } from './food';
import { HOME } from './home';
import { LEISURE } from './leisure';
import { NATURE } from './nature';
import { PEOPLE } from './people';
import { CITY } from './city';
import type { ThemeSrc } from './types';

// Dictionnaire illustré : mots et groupes de mots par thème, chacun avec une illustration
// (Microsoft Fluent Emoji 3D, licence MIT), en 11 langues avec translittérations.
// Chaque entrée est une « phrase » du corpus : voix intégrées, analyse vocale, correction écrite,
// révision espacée. Les traductions sont recoupées avec les noms Unicode CLDR (docs/AUDIT_VOCABULAIRE.md).

export interface VocabEntry extends Phrase { img: string; theme: string; group?: boolean }
export interface Theme { id: string; title: string; section: string; level: Level; kids: boolean; img: string; words: string[]; groups: string[] }

/** Ordre des colonnes d'une ligne : illustration | fr | en | es | it | pt | ar | ar (latin) | fa | fa (latin)
 *  | hi | hi (latin) | zh | pinyin | ja | rōmaji | amazigh (facultatif, latin IRCAM). */
const COLS = ['img', 'fr', 'en', 'es', 'it', 'pt', 'ar', 'ar_r', 'fa', 'fa_r', 'hi', 'hi_r', 'zh', 'zh_r', 'ja', 'ja_r', 'ber'] as const;

function parse(rows: string, where: string): Record<(typeof COLS)[number], string>[] {
  return rows.split('\n').map((l) => l.trim()).filter(Boolean).map((l) => {
    const cells = l.split('|').map((c) => c.trim());
    if (cells.length < 16 || cells.length > 17) throw new Error(`Vocabulaire ${where} : ${cells.length} colonnes dans « ${l} »`);
    return Object.fromEntries(COLS.map((c, i) => [c, cells[i] ?? ''])) as Record<(typeof COLS)[number], string>;
  });
}

function toEntry(r: Record<(typeof COLS)[number], string>, id: string, theme: string, group: boolean): VocabEntry {
  const t: Partial<Record<LangCode, string>> = { fr: r.fr, en: r.en, es: r.es, it: r.it, pt: r.pt, ar: r.ar, fa: r.fa, hi: r.hi, zh: r.zh, ja: r.ja };
  if (r.ber) t.ber = r.ber;
  return { id, role: 'l', t, r: { ar: r.ar_r, fa: r.fa_r, hi: r.hi_r, zh: r.zh_r, ja: r.ja_r }, img: r.img, theme, group };
}

const entries: VocabEntry[] = [];
const themes: Theme[] = [];
for (const src of [...BASICS, ...FOOD, ...NATURE, ...PEOPLE, ...HOME, ...CITY, ...LEISURE] as ThemeSrc[]) {
  const words = parse(src.words, src.id).map((r) => toEntry(r, `${src.id}-${r.img}`, src.id, false));
  const groups = parse(src.groups ?? '', src.id).map((r, k) => toEntry(r, `${src.id}-g${k + 1}`, src.id, true));
  entries.push(...words, ...groups);
  themes.push({ id: src.id, title: src.title, section: src.section, level: src.level, kids: src.kids, img: words[0].img,
    words: words.map((w) => w.id), groups: groups.map((g) => g.id) });
}

export const VOCAB: VocabEntry[] = entries;
export const THEMES: Theme[] = themes;
export const SECTIONS: string[] = [...new Set(themes.map((t) => t.section))];
export const VOCAB_BY_ID: Record<string, VocabEntry> = Object.fromEntries(entries.map((e) => [e.id, e]));
export const THEME_BY_ID: Record<string, Theme> = Object.fromEntries(themes.map((t) => [t.id, t]));

/** Mots et groupes d'un thème disponibles dans la langue étudiée. */
export function themeItems(th: Theme, lang: LangCode) {
  return {
    words: th.words.filter((id) => VOCAB_BY_ID[id].t[lang]),
    groups: th.groups.filter((id) => VOCAB_BY_ID[id].t[lang]),
  };
}

/** Un thème est proposé s'il compte au moins 5 mots dans la langue étudiée. */
export function themeAvailable(th: Theme, lang: LangCode) {
  return themeItems(th, lang).words.length >= 5;
}
