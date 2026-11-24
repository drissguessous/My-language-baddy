import type { Level } from '../curriculum';

/**
 * Source d'un thème : une ligne par mot, colonnes séparées par « | » :
 * illustration (nom Unicode CLDR) | fr | en | es | it | pt | ar | ar latin | zh | pinyin | ja | rōmaji.
 * Langues romanes : article défini pour mémoriser le genre. Thaï : src/data/vocab/th.ts.
 */
export interface ThemeSrc {
  id: string;
  title: string;
  section: string;
  level: 'A1' | 'A2' | 'B1' | Level;
  kids: boolean;
  words: string;
  groups?: string;
}
