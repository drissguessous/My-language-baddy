import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ALL_PHRASES, PHRASE, UNITS, unitAvailable } from '../src/data/curriculum';
import { COMPANIONS, bandOf, companionsFor } from '../src/data/companions';
import { LANGUAGES } from '../src/data/languages';
import { buildPractice, buildUnitLesson } from '../src/lib/lesson';
import { dueCards, review } from '../src/lib/srs';
import { buildSimulation } from '../src/data/simulation';
import { emptyDB, hashPin } from '../src/lib/db';

test('identifiants uniques et unités complètes', () => {
  assert.equal(new Set(ALL_PHRASES.map((p) => p.id)).size, ALL_PHRASES.length);
  for (const u of UNITS) for (const id of u.phrases) assert.ok(PHRASE[id], `${u.id} → ${id}`);
});

test('toutes les langues sauf l’amazigh couvrent toutes les unités', () => {
  for (const l of LANGUAGES.filter((x) => x.code !== 'ber')) for (const u of UNITS) assert.ok(unitAvailable(u, l.code), `${u.id}/${l.code}`);
  assert.ok(unitAvailable(UNITS.find((u) => u.id === 'u-greet')!, 'ber'));
});

test('pinyin et rōmaji présents partout', () => {
  for (const p of ALL_PHRASES) { assert.ok(p.r?.zh, `pinyin ${p.id}`); assert.ok(p.r?.ja, `rōmaji ${p.id}`); }
});

test('compagnons par tranche d’âge', () => {
  assert.equal(bandOf(9), 'kid'); assert.equal(bandOf(13), 'teen'); assert.equal(bandOf(18), 'adult');
  assert.ok(companionsFor(9).every((c) => c.band === 'kid') && companionsFor(9).length >= 2);
  assert.ok(companionsFor(15).every((c) => c.band === 'teen'));
  assert.ok(companionsFor(40).every((c) => c.band === 'adult'));
  assert.equal(new Set(COMPANIONS.map((c) => c.id)).size, COMPANIONS.length);
});

test('leçon : chaque phrase découverte puis évaluée ; pas d’écriture non latine pour un enfant', () => {
  const steps = buildUnitLesson('u-greet', 'ja', 'kid', UNITS[1].phrases);
  assert.equal(steps.filter((s) => s.kind === 'discover').length, 6);
  assert.equal(steps.filter((s) => s.kind === 'write').length, 0);
  assert.ok(steps.some((s) => s.kind === 'speak'));
  for (const s of steps) if ('options' in s) assert.ok(s.options.includes(s.pid) && new Set(s.options).size === s.options.length);
  assert.ok(buildUnitLesson('u-greet', 'en', 'adult', UNITS[1].phrases).some((s) => s.kind === 'write'));
});

test('séances de pratique bornées', () => {
  assert.ok(buildPractice('speak', UNITS.flatMap((u) => u.phrases), 'es', UNITS[1].phrases).length <= 8);
});

test('révision espacée : progression et rechute', () => {
  const now = 1_000_000;
  let c = review(undefined, 95, now); assert.equal(c.box, 1);
  c = review(c, 95, now); assert.equal(c.box, 2);
  c = review(c, 30, now); assert.equal(c.box, 1);
  assert.deepEqual(dueCards({ a: { ...c, due: now - 1 }, b: { ...c, due: now + 1 } }, now), ['a']);
});

test('base de simulation : 5 profils exploitables, mineurs protégés par code', () => {
  const db = buildSimulation(emptyDB());
  assert.equal(db.profiles.length, 5);
  for (const p of db.profiles) {
    assert.ok(db.attempts[p.id].length > 10, p.name);
    assert.ok(Object.keys(db.progress[p.id][p.targetLang]!.units).length > 0);
    if (bandOf(new Date().getFullYear() - p.birthYear) !== 'adult') assert.equal(p.parental?.pinHash, hashPin('1234', p.id));
  }
  assert.equal(buildSimulation(db).profiles.length, 5, 'rechargement idempotent');
});
