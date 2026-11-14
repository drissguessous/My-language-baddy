import type { AgeBand } from '../data/companions';
import { COACH_LINES, CoachCat, DEFAULT_TEACHER, Intensity, Tone } from '../data/coachLines';

export interface TeacherMode { tone: Tone; intensity: Intensity }

export function teacherFor(band: AgeBand, mode?: Partial<TeacherMode>): TeacherMode {
  return { ...DEFAULT_TEACHER[band], ...mode };
}

let counter = 0;
/** Choisit une réplique ; `seed` permet un choix stable dans les tests. */
export function line(band: AgeBand, mode: TeacherMode, cat: CoachCat, seed?: number): string {
  const list = COACH_LINES[band][mode.tone][cat];
  const i = seed ?? counter++;
  return list[Math.abs(i) % list.length];
}

/**
 * Le compagnon intervient-il à cette étape ?
 * Un peu : seulement les retours (bravo / réessaie) et la fin de leçon.
 * Normal : aussi les consignes. Beaucoup : consignes, retours et anecdotes (une fois sur deux).
 */
export function speaks(mode: TeacherMode, cat: CoachCat, seed = Math.random()): boolean {
  if (cat === 'extra') return mode.intensity === 3 && seed < 0.5;
  if (['cheer', 'nudge', 'end_good', 'end_retry'].includes(cat)) return true;
  return mode.intensity >= 2;
}

/** Seuils de verdict (excellent / bien) selon le ton : le mode sérieux est plus exigeant. */
export function thresholds(mode: TeacherMode): { excellent: number; good: number } {
  if (mode.tone === 'serious') return { excellent: 85 + mode.intensity * 2, good: 65 + mode.intensity * 5 };
  return { excellent: 85, good: 65 };
}

export function verdictOf(score: number, mode: TeacherMode): 'excellent' | 'good' | 'retry' {
  const t = thresholds(mode);
  return score >= t.excellent ? 'excellent' : score >= t.good ? 'good' : 'retry';
}
