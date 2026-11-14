// Exporte le corpus et les répliques du compagnon pour la génération des voix (CI).
import { writeFileSync, mkdirSync } from 'node:fs';
import { ALL_PHRASES } from '../src/data/curriculum';
import { COMPANIONS } from '../src/data/companions';
import { COACH_FIXED } from '../src/data/coach';
import { allCoachTexts } from '../src/data/coachLines';
import { fnv } from '../src/lib/hash';
import { toTifinagh } from '../src/lib/text';

const phrases = ALL_PHRASES.flatMap((p) =>
  Object.entries(p.t).map(([lang, text]) => ({
    id: p.id, lang, text, roman: p.r?.[lang as keyof typeof p.r], fr: p.t.fr,
    ...(lang === 'ber' ? { tfng: toTifinagh(text!) } : {}),
  })),
);
const coach = new Map<string, { key: string; gender: string; text: string }>();
const add = (text: string, gender: string) => {
  const key = `${fnv(text)}-${gender}`;
  coach.set(key, { key, gender, text });
};
for (const c of COMPANIONS) add(c.greeting, c.voice.gender);
for (const text of [...allCoachTexts(), ...COACH_FIXED]) for (const g of ['f', 'm']) add(text, g);
mkdirSync('build', { recursive: true });
writeFileSync('build/corpus.json', JSON.stringify({ phrases, coach: [...coach.values()] }, null, 1));
console.log(`${phrases.length} phrases, ${coach.size} répliques du compagnon`);
