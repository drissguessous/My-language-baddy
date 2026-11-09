// Vérifie que tout le corpus passe le filtre (aucun faux positif) et que le filtre bloque bien.
import { ALL_PHRASES, UNITS, PHRASE } from '../src/data/curriculum';
import { LANGUAGES } from '../src/data/languages';
import { moderate } from '../src/lib/safety/filter';
import { scoreAttempt } from '../src/lib/scoring';
import { toTifinagh } from '../src/lib/text';

let fail = 0;
const ids = new Set<string>();
for (const p of ALL_PHRASES) {
  if (ids.has(p.id)) { console.error('ID dupliqué', p.id); fail++; }
  ids.add(p.id);
  for (const l of LANGUAGES) {
    const t = p.t[l.code];
    if (!t) continue;
    for (const age of [9, 30]) {
      const m = moderate(t, { age, langs: [l.code] });
      if (!m.ok || m.distress) { console.error(`Faux positif [${p.id}/${l.code}/âge ${age}]`, t, m.categories); fail++; }
    }
  }
}
for (const u of UNITS) for (const id of u.phrases) if (!PHRASE[id]) { console.error('Phrase manquante', u.id, id); fail++; }
const mustBlock: [string, number, string[]][] = [
  ['tu es un connard', 30, ['fr']], ['f u c k you', 30, ['en']], ['fuuuuck', 30, ['en']], ['sh1t', 30, ['en']],
  ['eres un gilipollas', 30, ['es']], ['يا قحبة', 30, ['ar']], ['你是傻逼', 30, ['zh']], ['je veux de la cocaïne', 30, ['fr']],
  ['une bière svp', 12, ['fr']], ['c\'est con', 30, ['fr']], ['vaffanculo', 30, ['it']], ['madarchod', 30, ['hi']],
];
for (const [t, age, langs] of mustBlock) {
  const m = moderate(t, { age, langs: langs as any });
  if (m.ok) { console.error('Non bloqué :', t); fail++; } else console.log('bloqué ✓', JSON.stringify(t), '→', m.masked);
}
const mustPass: [string, string[]][] = [
  ['Un café con leche', ['es']], ['Je visite Paris', ['fr']], ['Le train a du retard', ['fr']],
  ['un idiotisme', ['fr']], ['I live in Pakistan', ['en']], ['我住在酒店', ['zh']], ['こればかり', ['ja']],
  ['une bière', ['fr']], ['Nigeria is big', ['en']], ['nobody هیچ‌کس', ['fa']], ['the method', ['en']], ['le violon violet', ['fr']],
];
for (const [t, langs] of mustPass) {
  const m = moderate(t, { age: 30, langs: langs as any });
  if (!m.ok) { console.error('Faux positif :', t, m.categories); fail++; } else console.log('accepté ✓', t);
}
const d = moderate('I want to die', { age: 14, langs: ['en'] });
console.log('détresse →', d.distress);
console.log(toTifinagh('Azul! Mamk a tgit?'));
const s1 = scoreAttempt({ heard: ['bonjour comment allez vous'], target: 'Bonjour ! Comment allez-vous ?', lang: 'fr', durationMs: 1800 });
const s2 = scoreAttempt({ heard: ['bonjour comment'], target: 'Bonjour ! Comment allez-vous ?', lang: 'fr' });
const s3 = scoreAttempt({ heard: ['你好你好吗'], target: '你好！你好吗？', lang: 'zh' });
const s4 = scoreAttempt({ heard: 'merhaba keyfe haluk', target: 'مرحبًا! كيف حالك؟', lang: 'ar', alternatives: ['marḥaban! kayfa ḥāluka?'] });
console.log('scores', s1.score, s1.verdict, s2.score, JSON.stringify(s2.words), s3.score, s4.score);
console.log(fail ? `${fail} problème(s)` : 'Contenu OK :', ALL_PHRASES.length, 'phrases,', UNITS.length, 'unités');
process.exit(fail ? 1 : 0);
