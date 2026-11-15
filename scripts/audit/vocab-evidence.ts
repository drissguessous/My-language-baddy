// Contrôle du dictionnaire illustré sur sources de référence (et non sur suppositions) :
//  1. Traductions : comparaison avec les noms et mots-clés Unicode CLDR de chaque illustration
//     (traductions humaines officielles, licence Unicode) pour fr, en, es, it, pt, ar, fa, hi, zh, ja ;
//  2. Pinyin : comparaison avec pinyin-pro ;
//  3. Rōmaji : comparaison avec la lecture kuromoji (kuroshiro).
// Résultat : docs/AUDIT_VOCABULAIRE.md et docs/audit-vocabulaire.json.
//
// Outils nécessaires (non embarqués dans l'application) :
//   npm i --no-save cldr-annotations-full cldr-annotations-derived-full pinyin-pro kuroshiro@1.2.1 kuroshiro-analyzer-kuromoji
//   npx tsx scripts/audit/vocab-evidence.ts
import { createRequire } from 'node:module';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { VOCAB } from '../../src/data/vocab';
import type { LangCode } from '../../src/data/languages';

const req = createRequire(process.env.EVIDENCE_MODULES ?? `${process.cwd()}/`);
const LANGS: LangCode[] = ['fr', 'en', 'es', 'it', 'pt', 'ar', 'fa', 'hi', 'zh', 'ja'];
const CLDR_LOC: Partial<Record<LangCode, string>> = { pt: 'pt-PT' };

const byEmoji = JSON.parse(readFileSync('node_modules/unicode-emoji-json/data-by-emoji.json', 'utf8')) as Record<string, { slug: string }>;
const emojiOf: Record<string, string> = {};
for (const [e, d] of Object.entries(byEmoji)) emojiOf[d.slug] = e;

type Ann = Record<string, { default?: string[]; tts?: string[] }>;
function loadCldr(lang: LangCode): Ann {
  const loc = CLDR_LOC[lang] ?? lang;
  const out: Ann = {};
  for (const [pkg, dir] of [['cldr-annotations-full', 'annotations'], ['cldr-annotations-derived-full', 'annotationsDerived']]) {
    for (const l of [lang, loc]) {
      const f = req.resolve(`${pkg}/package.json`).replace('package.json', `${dir}/${l}/annotations.json`);
      if (!existsSync(f)) continue;
      const j = JSON.parse(readFileSync(f, 'utf8'));
      Object.assign(out, (j.annotations ?? j.annotationsDerived).annotations);
    }
  }
  return out;
}

const ARTICLES: Partial<Record<LangCode, RegExp>> = {
  fr: /^(le|la|les|l[’']|un|une|des)\s*/, es: /^(el|la|los|las|un|una)\s+/, it: /^(il|lo|la|i|gli|le|l[’']|un|una|uno)\s*/,
  pt: /^(o|a|os|as|um|uma)\s+/, en: /^(the|a|an|to)\s+/,
};
function norm(s: string, lang: LangCode): string {
  let t = s.normalize('NFC').toLowerCase().replace(/[.,!?¿¡;:"«»()]/g, '').replace(/[’']/g, '’').trim();
  const a = ARTICLES[lang];
  if (a) t = t.replace(a, '');
  if (lang === 'ar') t = t.replace(/[ً-ْـ]/g, '').replace(/^ال/, '').replace(/[أإآ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي');
  if (lang === 'fa') t = t.replace(/‌/g, ' ').replace(/ي/g, 'ی').replace(/ك/g, 'ک').replace(/[ً-ْ]/g, '');
  if (lang === 'hi') t = t.replace(/़/g, '');
  return t.replace(/\s+/g, ' ').trim();
}

function agrees(word: string, cands: string[], lang: LangCode): boolean {
  const w = norm(word, lang);
  const cs = cands.map((c) => norm(c, lang)).filter(Boolean);
  const cjk = lang === 'zh' || lang === 'ja';
  const min = cjk ? 1 : 3;
  return cs.some((c) => c === w || (w.length >= min && c.includes(w)) || (c.length >= min && w.includes(c)));
}

async function main() {
  const words = VOCAB.filter((v) => !v.group);
  const report: Record<string, { agree: number; total: number; misses: { id: string; word: string; cldr: string; keys: string }[] }> = {};
  for (const lang of LANGS) {
    const ann = loadCldr(lang);
    const r = { agree: 0, total: 0, misses: [] as { id: string; word: string; cldr: string; keys: string }[] };
    for (const v of words) {
      const e = emojiOf[v.img];
      const a = e && (ann[e] ?? ann[e.replace(/️/g, '')]);
      const word = v.t[lang];
      if (!a || !word) continue;
      r.total++;
      const cands = [...(a.tts ?? []), ...(a.default ?? [])];
      if (agrees(word, cands, lang)) r.agree++;
      else r.misses.push({ id: v.id, word, cldr: (a.tts ?? []).join(' / '), keys: (a.default ?? []).slice(0, 6).join(', ') });
    }
    report[lang] = r;
  }

  // Pinyin
  const { pinyin } = req('pinyin-pro');
  const pyNorm = (s: string) => s.normalize('NFC').toLowerCase().replace(/[^a-zāáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜü]/g, '');
  const pyMiss: { id: string; zh: string; mine: string; ref: string }[] = [];
  let pyTotal = 0;
  for (const v of VOCAB) {
    const zh = v.t.zh, mine = v.r?.zh;
    if (!zh || !mine || /[A-Za-z]/.test(zh)) continue;
    pyTotal++;
    const ref = pinyin(zh, { toneType: 'symbol', type: 'string', nonZh: 'removed' }) as string;
    // Tons neutres et sandhi (一, 不) acceptés : comparaison sans les tons si la forme tonale diffère.
    const strip = (s: string) => pyNorm(s).normalize('NFD').replace(/[̀-ͯ]/g, '');
    if (pyNorm(ref) !== pyNorm(mine) && strip(ref) !== strip(mine)) pyMiss.push({ id: v.id, zh, mine, ref });
  }

  // Rōmaji
  const Kuroshiro = req('kuroshiro').default ?? req('kuroshiro');
  const Analyzer = req('kuroshiro-analyzer-kuromoji');
  const k = new Kuroshiro();
  await k.init(new Analyzer());
  const roNorm = (s: string) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z]/g, '')
    .replace(/ou/g, 'o').replace(/oo/g, 'o').replace(/uu/g, 'u').replace(/ei/g, 'e').replace(/ee/g, 'e').replace(/aa/g, 'a').replace(/ii/g, 'i');
  const jaMiss: { id: string; ja: string; mine: string; ref: string }[] = [];
  let jaTotal = 0;
  for (const v of VOCAB) {
    const ja = v.t.ja, mine = v.r?.ja;
    if (!ja || !mine) continue;
    jaTotal++;
    const ref = await k.convert(ja, { to: 'romaji', mode: 'spaced', romajiSystem: 'hepburn' });
    if (roNorm(ref) !== roNorm(mine)) jaMiss.push({ id: v.id, ja, mine, ref });
  }

  const pct = (a: number, b: number) => (b ? Math.round((a / b) * 100) : 0);
  let md = `# Audit du dictionnaire illustré\n\nGénéré par \`scripts/audit/vocab-evidence.ts\`. ${words.length} mots, ${VOCAB.length - words.length} groupes de mots.\n\n`;
  md += `## 1. Traductions comparées aux noms Unicode CLDR\n\nUn mot « concorde » quand il figure dans le nom ou les mots-clés CLDR de son illustration ` +
    `(traduction humaine officielle). Une non-concordance n'est pas forcément une erreur : le CLDR nomme le dessin (« pomme rouge », ` +
    `« visage endormi ») alors que le dictionnaire donne le mot usuel (« la pomme », « dormir »). Chaque non-concordance a été relue.\n\n` +
    `| Langue | Concordance |\n|---|---|\n` + LANGS.map((l) => `| ${l} | ${report[l].agree}/${report[l].total} (${pct(report[l].agree, report[l].total)} %) |`).join('\n') + '\n\n';
  md += `## 2. Pinyin comparé à pinyin-pro\n\n${pyTotal - pyMiss.length}/${pyTotal} identiques.\n\n`;
  if (pyMiss.length) md += '| id | chinois | pinyin saisi | référence |\n|---|---|---|---|\n' + pyMiss.map((m) => `| ${m.id} | ${m.zh} | ${m.mine} | ${m.ref} |`).join('\n') + '\n\n';
  md += `## 3. Rōmaji comparé à la lecture kuromoji\n\n${jaTotal - jaMiss.length}/${jaTotal} identiques (voyelles longues et espaces ignorés).\n\n`;
  if (jaMiss.length) md += '| id | japonais | rōmaji saisi | lecture kuromoji |\n|---|---|---|---|\n' + jaMiss.map((m) => `| ${m.id} | ${m.ja} | ${m.mine} | ${m.ref} |`).join('\n') + '\n\n';
  md += `## Amazigh\n\nLe CLDR ne couvre pas le tachelhit : les ${VOCAB.filter((v) => v.t.ber && !v.group).length} mots amazighs (formes courantes uniquement) ` +
    `doivent être relus par un locuteur ou un enseignant.\n`;
  md += '\nRelecture des écarts et corrections : [REVUE_VOCABULAIRE.md](REVUE_VOCABULAIRE.md).\n';
  writeFileSync('docs/AUDIT_VOCABULAIRE.md', md);
  writeFileSync('docs/audit-vocabulaire.json', JSON.stringify({ translations: report, pinyin: pyMiss, romaji: jaMiss }, null, 1));
  console.log(LANGS.map((l) => `${l} ${pct(report[l].agree, report[l].total)}%`).join(' · '), `| pinyin ${pyMiss.length} écarts | rōmaji ${jaMiss.length} écarts`);
}
main();
