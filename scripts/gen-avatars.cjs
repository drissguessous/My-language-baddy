// Génère les portraits des compagnons (style « Notionists » de Zoish, CC0 1.0, via DiceBear).
// Deux états par compagnon : repos (bouche fermée) et parole (bouche ouverte).
// node scripts/gen-avatars.cjs  →  src/data/avatars.ts
const { createAvatar } = require('@dicebear/core');
const { notionists } = require('@dicebear/collection');
const fs = require('fs');
const v = (n) => 'variant' + String(n).padStart(2, '0');

const SPECS = {
  lina:  { hair: 45, body: 11, eyes: 4, brows: 3, nose: 2,  bg: 'fde7c8' },
  yanis: { hair: 20, body: 12, eyes: 2, brows: 6, nose: 5,  bg: 'd6ecf3' },
  ines:  { hair: 41, body: 9,  eyes: 5, brows: 2, nose: 3,  bg: 'eadcf8' },
  omar:  { hair: 55, body: 4,  eyes: 4, brows: 7, nose: 8,  bg: 'd3f0e2' },
  mei:   { hair: 48, body: 15, eyes: 2, brows: 1, nose: 1,  bg: 'fbd9d9', glasses: 11 },
  nadia: { hair: 28, body: 16, eyes: 4, brows: 4, nose: 4,  bg: 'd9ecea' },
  karim: { hair: 49, body: 20, eyes: 5, brows: 9, nose: 10, bg: 'e3e7f3', beard: 3, glasses: 8 },
  elena: { hair: 36, body: 19, eyes: 2, brows: 5, nose: 6,  bg: 'fbe4d8' },
  raj:   { hair: 52, body: 7,  eyes: 5, brows: 8, nose: 12, bg: 'e6eef9', beard: 7 },
  amina: { hair: 63, body: 5,  eyes: 4, brows: 2, nose: 9,  bg: 'efe6d6', glasses: 3 },
};

const out = {};
for (const [id, s] of Object.entries(SPECS)) {
  const opts = (lips) => ({
    seed: id, hair: [v(s.hair)], body: [v(s.body)], eyes: [v(s.eyes)], brows: [v(s.brows)], nose: [v(s.nose)], lips: [v(lips)],
    beard: s.beard ? [v(s.beard)] : undefined, beardProbability: s.beard ? 100 : 0,
    glasses: s.glasses ? [v(s.glasses)] : undefined, glassesProbability: s.glasses ? 100 : 0,
    gestureProbability: 0, bodyIconProbability: 0, backgroundColor: [s.bg], radius: 50,
  });
  out[id] = { idle: createAvatar(notionists, opts(3)).toString(), talk: createAvatar(notionists, opts(14)).toString(), bg: '#' + s.bg };
}
fs.writeFileSync('src/data/avatars.ts',
  '// Généré par scripts/gen-avatars.cjs — portraits « Notionists » (Zoish, CC0 1.0) via DiceBear (MIT).\n' +
  'export const AVATARS: Record<string, { idle: string; talk: string; bg: string }> = JSON.parse(' + JSON.stringify(JSON.stringify(out)) + ');\n');
console.log(Object.keys(out).length, 'portraits,', Math.round(fs.statSync('src/data/avatars.ts').size / 1024), 'Ko');
