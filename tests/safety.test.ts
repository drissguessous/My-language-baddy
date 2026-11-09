import { test } from 'node:test';
import assert from 'node:assert/strict';
import { moderate } from '../src/lib/safety/filter';
import { ALL_PHRASES } from '../src/data/curriculum';
import { LANGUAGES } from '../src/data/languages';

const blocked = (t: string, langs: any[], age = 30) => !moderate(t, { age, langs }).ok;

test('le corpus ne déclenche aucun faux positif, quel que soit l’âge', () => {
  for (const p of ALL_PHRASES) for (const l of LANGUAGES) {
    const t = p.t[l.code]; if (!t) continue;
    for (const age of [8, 15, 35]) {
      const m = moderate(t, { age, langs: [l.code] });
      assert.ok(m.ok && !m.distress, `${p.id}/${l.code} : ${t} → ${m.categories}`);
    }
  }
});

test('insultes bloquées dans plusieurs langues et écritures', () => {
  for (const [t, l] of [['tu es un connard', 'fr'], ['what the fuck', 'en'], ['eres un gilipollas', 'es'], ['vaffanculo', 'it'],
    ['caralho', 'pt'], ['يا قحبة', 'ar'], ['احمق', 'fa'], ['चूतिया', 'hi'], ['你是傻逼', 'zh'], ['死ね', 'ja'], ["c'est con", 'fr']] as const) {
    assert.ok(blocked(t, [l]), t);
  }
});

test('contournements : espaces, ponctuation, leetspeak, lettres répétées', () => {
  for (const t of ['f u c k', 'f.u.c.k', 'sh1t', 'fuuuuuck', 'C0NNARD', 'merdeee']) assert.ok(blocked(t, ['en', 'fr']), t);
});

test('aucun faux positif sur des mots ordinaires proches', () => {
  for (const [t, l] of [['Un café con leche', 'es'], ['Con piacere', 'it'], ['Je visite Paris', 'fr'], ['Le train a du retard', 'fr'],
    ['un idiotisme', 'fr'], ['I live in Pakistan', 'en'], ['Nigeria', 'en'], ['the method', 'en'], ['le violon violet', 'fr'],
    ['我住在酒店', 'zh'], ['こればかり', 'ja'], ['هیچ‌کس نیامد', 'fa'], ['spicy food', 'en'], ['un crapaud', 'fr'], ['Abdelkader', 'ar']] as const) {
    assert.ok(!blocked(t, [l]), t);
  }
});

test('alcool : bloqué pour un mineur, autorisé pour un adulte', () => {
  assert.ok(blocked('une bière', ['fr'], 12));
  assert.ok(!blocked('une bière', ['fr'], 30));
});

test('détresse : jamais bloquée mais signalée', () => {
  const m = moderate('I want to die', { age: 14, langs: ['en'] });
  assert.ok(m.distress);
});

test('masquage : le terme interdit n’apparaît plus', () => {
  const m = moderate('tu es un connard', { age: 30, langs: ['fr'] });
  assert.ok(!m.masked.includes('connard'));
  assert.ok(m.masked.startsWith('tu es un'));
});
