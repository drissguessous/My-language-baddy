import type { Level } from '../curriculum';

/**
 * Source d'un thème : une ligne par mot, colonnes séparées par « | » :
 * illustration (nom Unicode CLDR) | fr | en | es | it | pt | ar | ar latin | fa | fa latin | hi | hi latin
 * | zh | pinyin | ja | rōmaji | amazigh (facultatif).
 * Langues romanes : article défini pour mémoriser le genre. Amazigh (tachelhit, latin IRCAM) :
 * seulement les mots dont la forme est sûre ; ailleurs la colonne est omise.
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
