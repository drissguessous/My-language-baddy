import { test } from 'node:test';
import assert from 'node:assert/strict';
import { COACH_LINES, TONES, allCoachTexts } from '../src/data/coachLines';
import { UNITS } from '../src/data/curriculum';
import { PICTO, UNIT_NOTES } from '../src/data/pedagogyContent';
import { buildUnitLesson } from '../src/lib/lesson';
import { moderate } from '../src/lib/safety/filter';
import { line, speaks, teacherFor, thresholds, verdictOf } from '../src/lib/teacher';
import { fnv } from '../src/lib/hash';

const pool = UNITS.flatMap((u) => u.phrases);

test('mode professeur : chaque âge × ton × catégorie a au moins une réplique', () => {
  for (const band of ['kid', 'teen', 'adult'] as const) for (const t of TONES) {
    for (const [cat, list] of Object.entries(COACH_LINES[band][t.id])) assert.ok(list.length >= 1, `${band}/${t.id}/${cat}`);
  }
});

test('répliques du professeur : aucun terme interdit pour l’âge concerné', () => {
  const ages = { kid: 9, teen: 15, adult: 30 } as const;
  for (const band of ['kid', 'teen', 'adult'] as const) for (const t of TONES) for (const list of Object.values(COACH_LINES[band][t.id])) {
    for (const l of list) assert.ok(moderate(l, { age: ages[band], langs: ['fr'] }).ok, `${band}/${t.id} : ${l}`);
  }
});

test('enfants et ados sont tutoyés, adultes vouvoyés', () => {
  for (const t of TONES) {
    for (const band of ['kid', 'teen'] as const) for (const l of Object.values(COACH_LINES[band][t.id]).flat()) assert.ok(!/\b(vous|votre|vos)\b/i.test(l), l);
    for (const l of Object.values(COACH_LINES.adult[t.id]).flat()) assert.ok(!/\b(tu|ton|ta|tes|toi)\b/i.test(l), l);
  }
});

test('intensité : « un peu » se limite aux retours, « beaucoup » ajoute des anecdotes', () => {
  const low = teacherFor('adult', { intensity: 1 }), high = teacherFor('adult', { intensity: 3 });
  assert.equal(speaks(low, 'speak'), false);
  assert.equal(speaks(low, 'cheer'), true);
  assert.equal(speaks(high, 'extra', 0.1), true);
  assert.equal(speaks(teacherFor('adult'), 'extra', 0.1), false);
});

test('le mode sérieux est plus exigeant', () => {
  const serious = teacherFor('adult', { tone: 'serious', intensity: 3 });
  assert.ok(thresholds(serious).good > thresholds(teacherFor('adult')).good);
  assert.equal(verdictOf(72, teacherFor('adult')), 'good');
  assert.equal(verdictOf(72, serious), 'retry');
});

test('défauts par âge et choix de réplique stable', () => {
  assert.equal(teacherFor('kid').tone, 'friendly');
  assert.equal(teacherFor('adult').tone, 'normal');
  assert.equal(line('kid', teacherFor('kid'), 'cheer', 0), COACH_LINES.kid.friendly.cheer[0]);
});

test('enfant : cartes illustrées, pas de grammaire, récupération finale', () => {
  const steps = buildUnitLesson('u-greet', 'en', 'kid', pool);
  assert.ok(steps.some((s) => s.kind === 'picture'));
  assert.ok(!steps.some((s) => s.kind === 'grammar'));
  const last = steps[steps.length - 1];
  assert.ok(last.kind === 'picture' && last.recall);
  for (const s of steps) if (s.kind === 'picture') for (const o of s.options) assert.ok(PICTO[o], o);
});

test('ado : point de langue guidé ; adulte : explicite', () => {
  assert.ok(buildUnitLesson('u-cafe', 'es', 'teen', pool).some((s) => s.kind === 'grammar' && s.mode === 'guided'));
  assert.ok(buildUnitLesson('u-cafe', 'es', 'adult', pool).some((s) => s.kind === 'grammar' && s.mode === 'explicit'));
});

test('chaque unité a son objectif « je peux » et des phrases d’observation valides', () => {
  for (const u of UNITS) {
    const n = UNIT_NOTES[u.id];
    assert.ok(n?.canDo, u.id);
    for (const id of n.focus) assert.ok(u.phrases.includes(id), `${u.id} → ${id}`);
  }
});

test('hachage identique au pipeline Python', () => {
  assert.equal(fnv('C’est parti !'), fnv('C’est parti !'));
  assert.equal(fnv('a'), 'e40c292c');
  assert.ok(allCoachTexts().length > 200);
});
