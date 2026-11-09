// Langues proposées par My Language Baddy.
// `tts` / `stt` : locales BCP-47 essayées dans l'ordre pour la synthèse et la reconnaissance vocale.
// `segmented` : la langue sépare ses mots par des espaces (exercices « remettre dans l'ordre »).

export type LangCode =
  | 'fr' | 'en' | 'ar' | 'es' | 'it' | 'pt' | 'zh' | 'ja' | 'ber' | 'fa' | 'hi';

export interface Language {
  code: LangCode;
  name: string;          // nom en français
  native: string;        // nom dans la langue
  emblem: string;        // court glyphe affiché dans la pastille
  rtl: boolean;
  segmented: boolean;
  romanization?: string; // nom du système de translittération
  tts: string[];
  stt: string[];
  color: string;
  note?: string;         // remarque affichée à l'apprenant
}

export const LANGUAGES: Language[] = [
  { code: 'en', name: 'Anglais', native: 'English', emblem: 'En', rtl: false, segmented: true,
    tts: ['en-GB', 'en-US'], stt: ['en-GB', 'en-US'], color: '#2F5D8A' },
  { code: 'fr', name: 'Français', native: 'Français', emblem: 'Fr', rtl: false, segmented: true,
    tts: ['fr-FR', 'fr-CA'], stt: ['fr-FR'], color: '#3B5BA9' },
  { code: 'es', name: 'Espagnol', native: 'Español', emblem: 'Es', rtl: false, segmented: true,
    tts: ['es-ES', 'es-MX', 'es-US'], stt: ['es-ES'], color: '#C2452D' },
  { code: 'it', name: 'Italien', native: 'Italiano', emblem: 'It', rtl: false, segmented: true,
    tts: ['it-IT'], stt: ['it-IT'], color: '#2E7D5B' },
  { code: 'pt', name: 'Portugais', native: 'Português', emblem: 'Pt', rtl: false, segmented: true,
    tts: ['pt-PT', 'pt-BR'], stt: ['pt-PT', 'pt-BR'], color: '#1F7A6E' },
  { code: 'ar', name: 'Arabe (standard)', native: 'العربية', emblem: 'ع', rtl: true, segmented: true,
    romanization: 'translittération', tts: ['ar-SA', 'ar-EG', 'ar-MA', 'ar'], stt: ['ar-SA', 'ar-MA'], color: '#8A5A2B' },
  { code: 'ber', name: 'Amazigh (tamazight)', native: 'ⵜⴰⵎⴰⵣⵉⵖⵜ', emblem: 'ⵣ', rtl: false, segmented: true,
    romanization: 'latin IRCAM', tts: ['zgh-MA', 'tzm-MA'], stt: [], color: '#B07A1E',
    note: "Tamazight standard marocain, écrit en tifinagh avec sa transcription latine. Peu d'appareils disposent d'une voix amazighe : les exercices oraux passent en auto-évaluation tant que les enregistrements natifs ne sont pas intégrés." },
  { code: 'fa', name: 'Persan (farsi)', native: 'فارسی', emblem: 'ف', rtl: true, segmented: true,
    romanization: 'translittération', tts: ['fa-IR'], stt: ['fa-IR'], color: '#6B3E75' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी', emblem: 'हि', rtl: false, segmented: true,
    romanization: 'translittération', tts: ['hi-IN'], stt: ['hi-IN'], color: '#C76A12' },
  { code: 'zh', name: 'Chinois (mandarin)', native: '中文', emblem: '中', rtl: false, segmented: false,
    romanization: 'pinyin', tts: ['zh-CN', 'zh-TW'], stt: ['zh-CN', 'cmn-Hans-CN'], color: '#B3262E' },
  { code: 'ja', name: 'Japonais', native: '日本語', emblem: '日', rtl: false, segmented: false,
    romanization: 'rōmaji', tts: ['ja-JP'], stt: ['ja-JP'], color: '#A23B57' },
];

export const LANG: Record<LangCode, Language> = Object.fromEntries(
  LANGUAGES.map((l) => [l.code, l]),
) as Record<LangCode, Language>;

/** Langues dans lesquelles l'interface affiche les traductions de référence. */
export const REFERENCE_LANGS: LangCode[] = ['fr', 'en', 'ar', 'es'];
