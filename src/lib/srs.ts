// Révision espacée (système de Leitner à 5 boîtes).
export interface Card { box: number; due: number; seen: number; lastScore: number }

const DAY = 86_400_000;
const INTERVALS = [0, 1, 2, 4, 8, 16]; // en jours, indexé par boîte

export function review(card: Card | undefined, score: number, now = Date.now()): Card {
  const c = card ?? { box: 0, due: now, seen: 0, lastScore: 0 };
  const box = score >= 85 ? Math.min(5, c.box + 1) : score >= 65 ? Math.max(1, c.box) : 1;
  return { box, due: now + INTERVALS[box] * DAY, seen: c.seen + 1, lastScore: score };
}

export function dueCards(cards: Record<string, Card>, now = Date.now()): string[] {
  return Object.entries(cards)
    .filter(([, c]) => c.due <= now)
    .sort((a, b) => a[1].box - b[1].box || a[1].due - b[1].due)
    .map(([id]) => id);
}
