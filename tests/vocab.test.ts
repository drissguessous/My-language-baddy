import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { THEMES, VOCAB, VOCAB_BY_ID, themeAvailable, themeItems } from '../src/data/vocab';
import { buildVocabLesson } from '../src/lib/lesson';
import { masteryOf, themeProgress } from '../src/lib/vocabProgress';
import { review } from '../src/lib/srs';

const MAIN = ['fr', 'en', 'es', 'it', 'pt', 'ar', 'fa', 'hi', 'zh', 'ja'] as const;

test('dictionnaire : entre 500 et 1000 mots dans chaque langue principale', () => {
  for (const l of MAIN) {
    const n = VOCAB.filter((v) => !v.group && v.t[l]).length;
    assert.ok(n >= 500 && n <= 1000, `${l} : ${n} mots`);
  }
});

test('dictionnaire : chaque entrée a son illustration et ses translittérations', () => {
  for (const v of VOCAB) {
    assert.ok(existsSync(`assets/vocab/${v.img}.webp`), `illustration ${v.img}`);
    for (const l of ['ar', 'fa', 'hi', 'zh', 'ja'] as const) assert.ok(v.r?.[l], `${v.id} : translittération ${l}`);
  }
  assert.equal(new Set(VOCAB.map((v) => v.id)).size, VOCAB.length, 'identifiants uniques');
});

test('dictionnaire : pas de doublon de mot dans un même thème', () => {
  for (const th of THEMES) for (const l of MAIN) {
    const words = th.words.map((id) => VOCAB_BY_ID[id].t[l]);
    assert.equal(new Set(words).size, words.length, `${th.id}/${l}`);
  }
});

test('séance de vocabulaire : découverte, reconnaissance, oral, écrit, groupes de mots', () => {
  for (const band of ['kid', 'adult'] as const) {
    const steps = buildVocabLesson('fruits', 'es', band);
    const kinds = new Set(steps.map((s) => s.kind));
    for (const k of ['discover', 'picture', 'speak', 'write']) assert.ok(kinds.has(k as never), `${band} : ${k}`);
    for (const s of steps) if ('options' in s) assert.ok(s.options.includes(s.pid) && s.options.length === 4);
  }
  assert.ok(buildVocabLesson('fruits', 'ja', 'adult').some((s) => s.kind === 'name'));
});

test('amazigh : les thèmes proposés ont assez de mots', () => {
  for (const th of THEMES.filter((t) => themeAvailable(t, 'ber'))) assert.ok(themeItems(th, 'ber').words.length >= 5);
});

test('maîtrise d’un mot et avancement d’un thème', () => {
  const th = THEMES[0];
  const id = th.words[0];
  assert.equal(masteryOf(undefined), 'new');
  let card = review(undefined, 95);
  assert.equal(masteryOf(card), 'learning');
  for (let i = 0; i < 3; i++) card = review(card, 95);
  assert.equal(masteryOf(card), 'known');
  const p = themeProgress(th, 'en', { [id]: card });
  assert.equal(p.known, 1);
  assert.ok(p.ratio > 0);
});
