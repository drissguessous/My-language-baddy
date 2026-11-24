import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PHRASE, UNIT, UNITS } from '../src/data/curriculum';
import { QUIZ_PARAMS } from '../src/data/goals';
import { THEMES, themeItems } from '../src/data/vocab';
import { buildSimulation } from '../src/data/simulation';
import { emptyDB, emptyProgress, migrate, type DB, type Profile } from '../src/lib/db';
import { goalPlan, lastDays, thisWeek } from '../src/lib/goals';
import { buildQuiz } from '../src/lib/lesson';

const DAY = 86_400_000;
const general = (u: (typeof UNITS)[number]) => !u.pro && !u.kids;

test('quiz : questions notées uniquement, écriture limitée, sans doublon', () => {
  const ids = UNITS.filter(general).flatMap((u) => u.phrases);
  for (const band of ['kid', 'teen', 'adult'] as const) {
    const q = buildQuiz(ids, 'es', band);
    assert.equal(q.length, QUIZ_PARAMS.questions);
    assert.ok(q.every((s) => s.kind !== 'discover' && s.kind !== 'grammar'));
    assert.equal(q.filter((s) => s.kind === 'write').length, QUIZ_PARAMS.write[band]);
    const pids = q.map((s) => ('pid' in s ? s.pid : ''));
    assert.equal(new Set(pids).size, pids.length);
    for (const s of q) if ('options' in s) assert.ok(s.options.includes(s.pid) && s.options.length >= 2);
  }
});

test('quiz de thème : illustrations, distracteurs du même thème', () => {
  const th = THEMES.find((t) => t.id === 'fruits') ?? THEMES[0];
  const it = themeItems(th, 'ja');
  const q = buildQuiz([...it.words, ...it.groups], 'ja', 'adult');
  assert.ok(q.some((s) => s.kind === 'picture' || s.kind === 'name'));
  for (const s of q) if ('options' in s) assert.ok(s.options.every((o) => PHRASE[o]?.t.ja));
});

test('quiz d’une unité : 6 questions', () => {
  assert.equal(buildQuiz(UNIT['u-greet'].phrases, 'th', 'adult').length, 6);
});

test('objectifs : rythme nécessaire et état', () => {
  const now = Date.UTC(2026, 10, 24, 12);
  const deadline = new Date(now + 70 * DAY).toISOString().slice(0, 10); // 10 semaines
  const p = emptyProgress();
  const a1 = UNITS.filter((u) => general(u) && u.level === 'A1');
  const plan = goalPlan({ weeklyDays: 5, targetLevel: 'A1', deadline }, p, () => true, 'A1', now);
  assert.equal(plan.remaining.length, a1.length);
  assert.equal(plan.status, 'start');
  assert.ok(Math.abs(plan.unitsPerWeek - a1.length / 10) < 0.11);
  a1.forEach((u) => { p.units[u.id] = { best: 90, stars: 3, completedAt: now - DAY }; });
  assert.equal(goalPlan({ weeklyDays: 5, targetLevel: 'A1', deadline }, p, () => true, 'A1', now).status, 'done');
  const late = goalPlan({ weeklyDays: 5, targetLevel: 'B1', deadline: '2026-01-01' }, p, () => true, 'A1', now);
  assert.equal(late.status, 'late');
  const ahead = goalPlan({ weeklyDays: 5, targetLevel: 'A2', deadline: '2027-11-24' }, p, () => true, 'A1', now);
  assert.equal(ahead.status, 'ahead');
  assert.equal(goalPlan({ weeklyDays: 5 }, p, () => true, 'A1', now).status, 'none');
  // Placé en A2 : les unités A1 ne comptent pas.
  const fromA2 = goalPlan({ weeklyDays: 5, targetLevel: 'A2', deadline }, emptyProgress(), () => true, 'A2', now);
  assert.ok(fromA2.remaining.every((u) => u.level === 'A2'));
});

test('objectifs : semaine et 7 derniers jours', () => {
  const now = Date.UTC(2026, 10, 26, 12); // jeudi
  const h = { '2026-11-23': 12, '2026-11-24': 0.5, '2026-11-26': 20, '2026-11-20': 30 };
  const w = thisWeek(h, now);
  assert.equal(w.days, 2);
  assert.equal(w.minutes, 32.5);
  const d = lastDays(h, 7, now);
  assert.equal(d.length, 7);
  assert.equal(d[6].minutes, 20);
  assert.equal(d[0].day, '2026-11-20');
});

test('migration : langues retirées remplacées, progression retirée', () => {
  const db: DB = { ...emptyDB(), profiles: [{ id: 'x', refLang: 'fr', targetLang: 'hi' } as unknown as Profile, { id: 'y', refLang: 'fa', targetLang: 'en' } as unknown as Profile],
    progress: { x: { hi: emptyProgress(), es: emptyProgress() } as DB['progress'][string] } };
  const m = migrate(db);
  assert.equal(m.profiles[0].targetLang, 'en');
  assert.equal(m.profiles[1].refLang, 'fr');
  assert.deepEqual(Object.keys(m.progress.x), ['es']);
});

test('simulation : historique de temps et objectifs', () => {
  const db = buildSimulation(emptyDB());
  for (const p of db.profiles) assert.ok(Object.keys(db.usage[p.id].history ?? {}).length >= 1);
  assert.ok(db.profiles.some((p) => p.goals?.targetLevel));
});
