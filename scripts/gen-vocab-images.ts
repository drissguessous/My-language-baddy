// Copie les illustrations du vocabulaire (Microsoft Fluent Emoji 3D, licence MIT, paquet
// @lobehub/fluent-emoji-3d) dans assets/vocab et génère src/data/vocabImages.ts.
// Les illustrations sont désignées par leur nom Unicode CLDR (paquet unicode-emoji-json).
import { copyFileSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { VOCAB } from '../src/data/vocab';

const SRC = 'node_modules/@lobehub/fluent-emoji-3d/assets';
const DEST = 'assets/vocab';
const byEmoji = JSON.parse(readFileSync('node_modules/unicode-emoji-json/data-by-emoji.json', 'utf8')) as Record<string, { slug: string }>;
const slugToCode: Record<string, string> = {};
for (const [emoji, d] of Object.entries(byEmoji)) {
  const code = [...emoji].map((c) => c.codePointAt(0)!.toString(16)).join('-');
  slugToCode[d.slug] = code;
}
const file = (code: string) => [code, code.replace(/-fe0f/g, ''), `${code}-fe0f`].map((c) => `${SRC}/${c}.webp`).find(existsSync);

const slugs = [...new Set(VOCAB.map((v) => v.img))].sort();
rmSync(DEST, { recursive: true, force: true });
mkdirSync(DEST, { recursive: true });
let missing = 0;
const lines: string[] = [];
for (const s of slugs) {
  const code = slugToCode[s];
  const f = code && file(code);
  if (!f) { console.error('Illustration introuvable :', s); missing++; continue; }
  copyFileSync(f, `${DEST}/${s}.webp`);
  lines.push(`  ${JSON.stringify(s)}: require('../../assets/vocab/${s}.webp'),`);
}
writeFileSync('src/data/vocabImages.ts',
  `// Généré par scripts/gen-vocab-images.ts — ne pas modifier à la main.\n` +
  `// Illustrations : Microsoft Fluent Emoji 3D (licence MIT).\n` +
  `/* eslint-disable @typescript-eslint/no-require-imports */\n` +
  `export const VOCAB_IMG: Record<string, number> = {\n${lines.join('\n')}\n};\n`);
console.log(`${lines.length} illustrations copiées`);
process.exit(missing ? 1 : 0);
