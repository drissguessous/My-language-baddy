import type { LangCode } from '../../data/languages';
import { Category, LEXICON } from './lexicon';

const CJK = /[぀-ヿ㐀-鿿ｦ-ﾟ]/;
const LEET: Record<string, string> = { '0': 'o', '1': 'i', '3': 'e', '4': 'a', '5': 's', '7': 't', '8': 'b', '@': 'a', '$': 's', '!': 'i', '€': 'e' };

function base(s: string): string {
  return s
    .normalize('NFKC')
    .toLowerCase()
    .replace(/[ً-ٰٟـ]/g, '')
    .replace(/[أإآٱ]/g, 'ا').replace(/ى/g, 'ي').replace(/ة/g, 'ه').replace(/ك/g, 'ک').replace(/ي/g, 'ی')
    .replace(/‌/g, ' ')
    .normalize('NFD').replace(/[̀-ͯ]/g, '').normalize('NFC');
}

const splitWords = (s: string) => s.split(/[^\p{L}\p{M}\p{N}@$€!]+/u).filter(Boolean);

function variants(tok: string): string[] {
  const out = new Set<string>([tok]);
  const leet = tok.replace(/[0134578@$!€]/g, (c) => LEET[c] ?? c);
  for (const t of [tok, leet]) {
    out.add(t);
    out.add(t.replace(/(.)\1{2,}/g, '$1'));     // fuuuuck → fuck
    out.add(t.replace(/(.)\1{2,}/g, '$1$1'));   // niiiggger → niigger
    out.add(t.replace(/[@$!€]/g, ''));
  }
  return [...out];
}

interface Entry { cat: Category; word: string; prefix: boolean; multi: boolean; cjk: boolean; langs?: string[] }

const ENTRIES: Entry[] = (Object.keys(LEXICON) as Category[]).flatMap((cat) =>
  LEXICON[cat].map((raw) => {
    let w = raw;
    let langs: string[] | undefined;
    const m = /^([a-z]{2,3}):(.+)$/.exec(w);
    if (m) { langs = [m[1]]; w = m[2]; }
    const prefix = w.endsWith('*');
    if (prefix) w = w.slice(0, -1);
    return { cat, word: base(w), prefix, multi: w.includes(' '), cjk: CJK.test(w), langs };
  }),
);

export interface ModerationResult {
  ok: boolean;               // false si le texte contient un terme interdit pour ce profil
  categories: Category[];    // catégories détectées (y compris « distress »)
  masked: string;            // texte d'origine avec les termes masqués
  distress: boolean;         // afficher un message de soutien
}

/**
 * Vérifie un texte saisi ou dicté.
 * @param age   âge du profil (les mineurs ont un filtrage renforcé)
 * @param langs langue(s) dans laquelle le texte est écrit (les entrées « fr:… » ne s’appliquent qu’au français)
 */
export function moderate(text: string, opts: { age: number; langs: LangCode[] }): ModerationResult {
  const blocked = new Set<Category>(['insult', 'slur', 'sexual', 'drugs']);
  if (opts.age < 18) blocked.add('adult');
  const ctx = new Set<string>(opts.langs);

  const norm = base(text);
  const words = splitWords(norm);
  // Lettres isolées enchaînées (« f u c k », « c.o.n ») : on les recolle.
  const glued: string[] = [];
  for (let i = 0; i < words.length; ) {
    let j = i;
    while (j < words.length && words[j].length === 1) j++;
    if (j - i >= 3) glued.push(words.slice(i, j).join(''));
    i = j > i ? j : i + 1;
  }
  const spaced = ` ${words.join(' ')} `;
  const compact = norm.replace(/\s+/g, '');

  const found = new Set<Category>();
  const flaggedTokens = new Set<string>();
  const flaggedSubs: string[] = [];

  for (const e of ENTRIES) {
    if (e.langs && !e.langs.some((l) => ctx.has(l))) continue;
    if (e.cjk) {
      if (compact.includes(e.word)) { found.add(e.cat); flaggedSubs.push(e.word); }
      continue;
    }
    if (e.multi) {
      if (spaced.includes(` ${e.word} `)) { found.add(e.cat); e.word.split(' ').forEach((w) => flaggedTokens.add(w)); }
      continue;
    }
    for (const w of [...words, ...glued]) {
      if (variants(w).some((v) => (e.prefix ? v.startsWith(e.word) : v === e.word))) {
        found.add(e.cat);
        flaggedTokens.add(w);
      }
    }
  }

  const categories = [...found];
  const ok = !categories.some((c) => blocked.has(c));
  const distress = found.has('distress');

  // Masquage sur le texte d'origine.
  let masked = text;
  if (!ok) {
    masked = text.split(/(\s+)/).map((chunk) => {
      const toks = splitWords(base(chunk));
      return toks.some((t) => flaggedTokens.has(t)) ? '•••' : chunk;
    }).join('');
    for (const sub of flaggedSubs) masked = masked.split(sub).join('•••');
    if (glued.some((g) => flaggedTokens.has(g))) masked = '•••';
  }
  return { ok, categories, masked, distress };
}

export const DISTRESS_MESSAGE =
  'Tu sembles traverser un moment difficile. Tu n’es pas seul·e : parles-en à un adulte ou à une personne de confiance. ' +
  'Si tu es en danger, contacte tout de suite les services d’urgence de ton pays.';

export const BLOCK_MESSAGE: Record<'kid' | 'teen' | 'adult', string> = {
  kid: 'Oups ! Ce mot n’est pas gentil. Essayons avec de jolis mots 😊',
  teen: 'Ce terme n’est pas accepté ici. Reformule avec un vocabulaire respectueux.',
  adult: 'Ce terme n’est pas autorisé dans My Language Baddy. Merci de reformuler.',
};
