import type { AgeBand } from './companions';

// Profil pédagogique par tranche d'âge. Les choix sont justifiés dans docs/PEDAGOGIE.md.

export interface Pedagogy {
  /** L'audio précède l'écrit : le texte n'apparaît qu'après la première écoute. */
  audioFirst: boolean;
  /** Choix du sens par cartes illustrées (pictogrammes) plutôt que par traduction écrite. */
  pictureCards: boolean;
  /** Nombre d'exercices d'écriture par leçon (langues à alphabet latin / autres écritures). */
  writeLatin: number;
  writeOther: number;
  /** Nombre de phrases à remettre dans l'ordre et longueur maximale (en mots). */
  orderCount: number;
  orderMaxWords: number;
  /** Deuxième passage de récupération en fin de leçon (pratique de rappel). */
  retrievalRound: boolean;
  /** Présentation du point de langue : aucune, guidée (repérage), explicite (règle + exemples). */
  grammar: 'none' | 'guided' | 'explicit';
  /** Affichage détaillé des mesures de prononciation. */
  detailedMetrics: boolean;
  /** Récompense mise en avant. */
  reward: 'stickers' | 'challenge' | 'progress';
  /** Auto-évaluation « je peux… » en fin d'unité (descripteurs CECRL). */
  canDo: boolean;
  /** Vitesse de lecture par défaut (1 = naturelle). */
  audioRate: number;
}

export const PEDAGOGY: Record<AgeBand, Pedagogy> = {
  kid: {
    audioFirst: true, pictureCards: true, writeLatin: 1, writeOther: 0, orderCount: 1, orderMaxWords: 6,
    retrievalRound: true, grammar: 'none', detailedMetrics: false, reward: 'stickers', canDo: false, audioRate: 0.85,
  },
  teen: {
    audioFirst: true, pictureCards: false, writeLatin: 2, writeOther: 1, orderCount: 2, orderMaxWords: 10,
    retrievalRound: true, grammar: 'guided', detailedMetrics: true, reward: 'challenge', canDo: true, audioRate: 0.95,
  },
  adult: {
    audioFirst: false, pictureCards: false, writeLatin: 2, writeOther: 2, orderCount: 2, orderMaxWords: 11,
    retrievalRound: true, grammar: 'explicit', detailedMetrics: true, reward: 'progress', canDo: true, audioRate: 1,
  },
};

export const STICKERS = ['🦁', '🐬', '🦊', '🐼', '🦉', '🐢', '🦋', '🐙', '🦄', '🐝', '🐧', '🦒', '🐸', '🐨', '🦜', '🐳', '🦔', '🐞', '🐿️', '🦩'];
