import { GOAL_PARAMS } from '../data/goals';
import { Level, UNITS, Unit, levelIndex } from '../data/curriculum';
import type { Goals, LangProgress } from './db';

const DAY = 86_400_000;
export const dayOf = (t: number) => new Date(t).toISOString().slice(0, 10);

/** Minutes des 7 derniers jours (le dernier élément est aujourd'hui). */
export function lastDays(history: Record<string, number> | undefined, n = 7, now = Date.now()) {
  return Array.from({ length: n }, (_, k) => {
    const t = now - (n - 1 - k) * DAY;
    const d = dayOf(t);
    return { day: d, weekday: new Date(t).getDay(), minutes: history?.[d] ?? 0 };
  });
}

/** Semaine en cours (lundi → aujourd'hui) : jours pratiqués et minutes. */
export function thisWeek(history: Record<string, number> | undefined, now = Date.now()) {
  const wd = (new Date(now).getDay() + 6) % 7; // 0 = lundi
  const days = lastDays(history, wd + 1, now);
  return { days: days.filter((d) => d.minutes >= 1).length, minutes: days.reduce((a, d) => a + d.minutes, 0), remainingDays: 7 - wd };
}

export type PlanStatus = 'none' | 'done' | 'late' | 'ahead' | 'on' | 'behind' | 'start';

export interface Plan {
  status: PlanStatus;
  remaining: Unit[];          // unités à terminer pour atteindre le niveau visé
  weeksLeft: number;
  unitsPerWeek: number;       // rythme nécessaire
  recentPerWeek: number;      // rythme réel (unités terminées sur la fenêtre de mesure)
  minutesPerDay: number;      // temps quotidien conseillé sur les jours de pratique visés
}

/**
 * Rythme nécessaire pour atteindre le niveau visé avant l'échéance.
 * « Atteindre B1 » = terminer toutes les unités générales du niveau actuel jusqu'à B1 inclus
 * (les niveaux inférieurs au niveau actuel — validés ou acquis au positionnement — ne comptent pas).
 */
export function goalPlan(goals: Goals | undefined, progress: LangProgress, eligible: (u: Unit) => boolean, from: Level = 'A1', now = Date.now()): Plan {
  const empty: Plan = { status: 'none', remaining: [], weeksLeft: 0, unitsPerWeek: 0, recentPerWeek: 0, minutesPerDay: 0 };
  if (!goals?.targetLevel || !goals.deadline) return empty;
  const target = levelIndex(goals.targetLevel);
  const remaining = UNITS.filter((u) => !u.pro && !u.kids && levelIndex(u.level) >= levelIndex(from) && levelIndex(u.level) <= target && eligible(u) && !progress.units[u.id]);
  const since = now - GOAL_PARAMS.paceWindowDays * DAY;
  const recent = Object.values(progress.units).filter((r) => r.completedAt >= since).length;
  const recentPerWeek = Math.round((recent / GOAL_PARAMS.paceWindowDays) * 7 * 10) / 10;
  if (!remaining.length) return { ...empty, status: 'done', recentPerWeek };
  const msLeft = new Date(`${goals.deadline}T23:59:59`).getTime() - now;
  if (msLeft <= 0) return { ...empty, status: 'late', remaining, recentPerWeek };
  const weeksLeft = Math.max(1 / 7, msLeft / (7 * DAY));
  const unitsPerWeek = Math.ceil((remaining.length / weeksLeft) * 10) / 10;
  const minutesPerDay = Math.ceil((unitsPerWeek * GOAL_PARAMS.minutesPerUnit) / Math.max(1, goals.weeklyDays));
  const status: PlanStatus = recent === 0 ? 'start' : recentPerWeek >= unitsPerWeek * 1.2 ? 'ahead' : recentPerWeek >= unitsPerWeek ? 'on' : 'behind';
  return { status, remaining, weeksLeft: Math.round(weeksLeft * 10) / 10, unitsPerWeek, recentPerWeek, minutesPerDay };
}

/** Date limite à N mois d'aujourd'hui. */
export function inMonths(n: number, now = Date.now()) {
  const d = new Date(now); d.setMonth(d.getMonth() + n);
  return dayOf(d.getTime());
}

export function frenchDate(iso: string) {
  const [y, m, d] = iso.split('-').map(Number);
  const months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  return `${d} ${months[m - 1]} ${y}`;
}

// ── Textes ──

export function paceText(n: number) {
  if (n >= 1) return `${n.toLocaleString('fr-FR')} unité${n >= 2 ? 's' : ''} par semaine`;
  return `1 unité tous les ${Math.max(2, Math.round(7 / Math.max(n, 0.01)))} jours`;
}

export function planLine(plan: Plan, target?: Level, deadline?: string, tu = false): string {
  switch (plan.status) {
    case 'none': return tu ? 'Choisis un niveau et une date pour calculer ton rythme.' : 'Choisissez un niveau et une date pour calculer le rythme nécessaire.';
    case 'done': return `Niveau ${target} atteint : toutes ses unités sont terminées.`;
    case 'late': return `Échéance dépassée : il reste ${plan.remaining.length} unité${plan.remaining.length > 1 ? 's' : ''} pour ${target}.`;
    default: return `${plan.remaining.length} unité${plan.remaining.length > 1 ? 's' : ''} d’ici le ${frenchDate(deadline!)} : ${paceText(plan.unitsPerWeek)}.`;
  }
}

/** Libellé et couleur (clé du thème) de l'état du rythme. */
export const STATUS: Record<Plan['status'], { label: string; tone: 'ok' | 'bad' | 'primary' | 'warn' | 'violet' } | null> = {
  none: null, done: { label: 'Atteint', tone: 'ok' }, late: { label: 'Échéance dépassée', tone: 'bad' },
  ahead: { label: 'En avance', tone: 'ok' }, on: { label: 'Dans les temps', tone: 'primary' },
  behind: { label: 'En retard', tone: 'warn' }, start: { label: 'À démarrer', tone: 'violet' },
};
