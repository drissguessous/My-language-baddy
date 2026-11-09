import { test } from 'node:test';
import assert from 'node:assert/strict';
import { scoreAttempt, similarity } from '../src/lib/scoring';
import { normalize, toTifinagh } from '../src/lib/text';

test('réponse parfaite = 100, malgré ponctuation et majuscules', () => {
  const r = scoreAttempt({ heard: 'bonjour comment allez vous', target: 'Bonjour ! Comment allez-vous ?', lang: 'fr' });
  assert.equal(r.score, 100); assert.equal(r.verdict, 'excellent');
});

test('réponse partielle : mots manqués signalés', () => {
  const r = scoreAttempt({ heard: 'bonjour comment', target: 'Bonjour ! Comment allez-vous ?', lang: 'fr' });
  assert.ok(r.score < 85);
  assert.equal(r.words.find((w) => w.text === 'allez-vous')?.state, 'missed');
});

test('réponse vide = verdict à retravailler', () => {
  assert.equal(scoreAttempt({ heard: '', target: 'Hello', lang: 'en' }).verdict, 'retry');
});

test('chinois : comparaison caractère par caractère', () => {
  assert.equal(scoreAttempt({ heard: '你好你好吗', target: '你好！你好吗？', lang: 'zh' }).score, 100);
});

test('pinyin et rōmaji acceptés sans les accents', () => {
  assert.ok(scoreAttempt({ heard: 'ni hao ni hao ma', target: '你好！你好吗？', lang: 'zh', alternatives: ['nǐ hǎo! nǐ hǎo ma?'] }).score >= 95);
  assert.ok(scoreAttempt({ heard: 'konnichiwa', target: 'こんにちは！', lang: 'ja', alternatives: ['konnichiwa!'] }).score >= 95);
});

test('arabe : voyelles brèves et variantes d’alif ignorées', () => {
  assert.equal(normalize('مرحبًا! كيف حالك؟', 'ar'), normalize('مرحبا كيف حالك', 'ar'));
});

test('fluidité calculée seulement avec une durée', () => {
  const r = scoreAttempt({ heard: 'what time is it', target: 'What time is it?', lang: 'en', durationMs: 1600 });
  assert.ok(r.fluency !== undefined && r.fluency > 0.9);
  assert.equal(scoreAttempt({ heard: 'x', target: 'y', lang: 'en' }).fluency, undefined);
});

test('similarité bornée', () => {
  assert.equal(similarity('', ''), 1); assert.equal(similarity('abc', 'xyz'), 0);
});

test('tifinagh IRCAM', () => {
  assert.equal(toTifinagh('Azul! Mamk a tgit?'), 'ⴰⵣⵓⵍ! ⵎⴰⵎⴽ ⴰ ⵜⴳⵉⵜ?');
  assert.equal(toTifinagh('ɣ ḍ ɛ'), 'ⵖ ⴹ ⵄ');
});
