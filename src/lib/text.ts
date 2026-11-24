import type { LangCode } from '../data/languages';
import type { Phrase } from '../data/phrases/types';

/** Texte affiché comme écriture principale pour une langue. */
export function scriptText(p: Phrase, lang: LangCode): string {
  return p.t[lang] ?? '';
}

/** Transcription secondaire (pinyin, rōmaji, translittération de l'arabe, RTGS pour le thaï). */
export function romanText(p: Phrase, lang: LangCode): string | undefined {
  return p.r?.[lang];
}

// ── Normalisation pour comparer une réponse ───────────────────────
const ARABIC_MARKS = /[\u064B-\u065F\u0670\u06D6-\u06ED\u0640]/g; // harakat, tatweel
const PUNCT = /[\s.,;:!?؟،؛¡¿"“”«»'’‘()\[\]\-–—…、。，．！？：；「」『』《》·]+/g;

export function normalize(text: string, lang: LangCode): string {
  let s = text.normalize('NFKC').toLowerCase();
  if (lang === 'ar') {
    s = s.replace(ARABIC_MARKS, '')
      .replace(/[أإآٱ]/g, 'ا').replace(/ى/g, 'ي').replace(/ة/g, 'ه')
      .replace(/ك/g, 'ک').replace(/ي/g, 'ی').replace(/\u200c/g, ' ');
  }
  if (['fr', 'en', 'es', 'it', 'pt'].includes(lang) || /[a-z]/.test(s)) {
    s = s.normalize('NFD').replace(/[̀-ͯ]/g, '');
  }
  return s.replace(PUNCT, ' ').trim().replace(/\s+/g, ' ');
}

export function tokens(text: string, lang: LangCode, segmented: boolean): string[] {
  const n = normalize(text, lang);
  if (!n) return [];
  return segmented ? n.split(' ') : Array.from(n.replace(/\s/g, ''));
}
