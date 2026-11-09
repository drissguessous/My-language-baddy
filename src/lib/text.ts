import type { LangCode } from '../data/languages';
import type { Phrase } from '../data/phrases/types';

// ── Tifinagh ──────────────────────────────────────────────────────
// Conversion du latin IRCAM vers le tifinagh standard (Unicode, bloc 2D30).
const TIFI: [string, string][] = [
  ['gʷ', 'ⴳⵯ'], ['kʷ', 'ⴽⵯ'], ['ḍ', 'ⴹ'], ['ṭ', 'ⵟ'], ['ṛ', 'ⵕ'], ['ṣ', 'ⵚ'], ['ẓ', 'ⵥ'],
  ['ḥ', 'ⵃ'], ['ɛ', 'ⵄ'], ['ɣ', 'ⵖ'], ['ʷ', 'ⵯ'],
  ['a', 'ⴰ'], ['b', 'ⴱ'], ['c', 'ⵛ'], ['d', 'ⴷ'], ['e', 'ⴻ'], ['f', 'ⴼ'], ['g', 'ⴳ'], ['h', 'ⵀ'],
  ['i', 'ⵉ'], ['j', 'ⵊ'], ['k', 'ⴽ'], ['l', 'ⵍ'], ['m', 'ⵎ'], ['n', 'ⵏ'], ['o', 'ⵓ'], ['p', 'ⴱ'],
  ['q', 'ⵇ'], ['r', 'ⵔ'], ['s', 'ⵙ'], ['t', 'ⵜ'], ['u', 'ⵓ'], ['v', 'ⴼ'], ['w', 'ⵡ'], ['x', 'ⵅ'],
  ['y', 'ⵢ'], ['z', 'ⵣ'],
];

export function toTifinagh(latin: string): string {
  let s = latin.toLowerCase();
  let out = '';
  outer: for (let i = 0; i < s.length; ) {
    for (const [from, to] of TIFI) {
      if (s.startsWith(from, i)) { out += to; i += from.length; continue outer; }
    }
    out += s[i]; i += 1;
  }
  return out;
}

/** Texte affiché comme écriture principale pour une langue. */
export function scriptText(p: Phrase, lang: LangCode): string {
  const t = p.t[lang] ?? '';
  return lang === 'ber' ? toTifinagh(t) : t;
}

/** Transcription secondaire (pinyin, rōmaji, latin pour l'amazigh…). */
export function romanText(p: Phrase, lang: LangCode): string | undefined {
  if (lang === 'ber') return p.t.ber;
  return p.r?.[lang];
}

// ── Normalisation pour comparer une réponse ───────────────────────
const ARABIC_MARKS = /[\u064B-\u065F\u0670\u06D6-\u06ED\u0640]/g; // harakat, tatweel
const PUNCT = /[\s.,;:!?؟،؛¡¿"“”«»'’‘()\[\]\-–—…、。，．！？：；「」『』《》·]+/g;

export function normalize(text: string, lang: LangCode): string {
  let s = text.normalize('NFKC').toLowerCase();
  if (lang === 'ar' || lang === 'fa') {
    s = s.replace(ARABIC_MARKS, '')
      .replace(/[أإآٱ]/g, 'ا').replace(/ى/g, 'ي').replace(/ة/g, 'ه')
      .replace(/ك/g, 'ک').replace(/ي/g, 'ی').replace(/\u200c/g, ' ');
  }
  if (lang === 'ber') s = s.replace(/[ⴰ-⵿]/g, (c) => c); // tifinagh conservé tel quel
  if (['fr', 'en', 'es', 'it', 'pt', 'ber'].includes(lang) || /[a-z]/.test(s)) {
    s = s.normalize('NFD').replace(/[̀-ͯ]/g, '');
  }
  return s.replace(PUNCT, ' ').trim().replace(/\s+/g, ' ');
}

export function tokens(text: string, lang: LangCode, segmented: boolean): string[] {
  const n = normalize(text, lang);
  if (!n) return [];
  return segmented ? n.split(' ') : Array.from(n.replace(/\s/g, ''));
}
