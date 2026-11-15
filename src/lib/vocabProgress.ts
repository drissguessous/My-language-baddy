import type { Card } from './srs';
import type { LangCode } from '../data/languages';
import { Theme, themeItems } from '../data/vocab';

export type Mastery = 'new' | 'learning' | 'known';

/** Niveau de maîtrise d'un mot d'après sa carte de révision (boîte de Leitner). */
export function masteryOf(card?: Card): Mastery {
  if (!card) return 'new';
  return card.box >= 3 ? 'known' : 'learning';
}

/** Avancement d'un thème : mots acquis et mots déjà travaillés. */
export function themeProgress(th: Theme, lang: LangCode, cards: Record<string, Card>) {
  const { words } = themeItems(th, lang);
  const known = words.filter((w) => masteryOf(cards[w]) === 'known').length;
  const seen = words.filter((w) => cards[w]).length;
  return { total: words.length, known, seen, ratio: words.length ? (known + (seen - known) * 0.4) / words.length : 0 };
}
