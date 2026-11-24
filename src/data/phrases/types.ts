import type { LangCode } from '../languages';

/** Qui prononce la réplique dans le dialogue de l'unité : le compagnon (c) ou l'apprenant (l). */
export type Role = 'c' | 'l';

export interface Phrase {
  id: string;
  role: Role;
  /** Texte dans chaque langue. */
  t: Partial<Record<LangCode, string>>;
  /** Translittération (pinyin, rōmaji, arabe, thaï). */
  r?: Partial<Record<LangCode, string>>;
}

export const P = (
  id: string,
  role: Role,
  t: Partial<Record<LangCode, string>>,
  r?: Partial<Record<LangCode, string>>,
): Phrase => ({ id, role, t, r });
