import { LANG, LangCode } from '../data/languages';
import { normalize, tokens } from './text';

export type TokenState = 'ok' | 'close' | 'missed';

export interface ScoreResult {
  score: number;          // 0-100, note globale
  accuracy: number;       // ressemblance caractère à caractère
  completeness: number;   // part des mots/caractères attendus retrouvés
  fluency?: number;       // débit comparé à un débit naturel (oral uniquement)
  words: { text: string; state: TokenState }[]; // cible annotée pour l'affichage
  heard: string;
  verdict: 'excellent' | 'good' | 'retry';
}

function lev(a: string, b: string): number {
  if (a === b) return 0;
  const m = a.length, n = b.length;
  if (!m) return n; if (!n) return m;
  let prev = Array.from({ length: n + 1 }, (_, j) => j);
  for (let i = 1; i <= m; i++) {
    const cur = [i];
    for (let j = 1; j <= n; j++) {
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    }
    prev = cur;
  }
  return prev[n];
}

export function similarity(a: string, b: string): number {
  const max = Math.max(a.length, b.length);
  return max ? 1 - lev(a, b) / max : 1;
}

/** Aligne les jetons attendus avec ceux entendus (programmation dynamique). */
function align(target: string[], heard: string[]): TokenState[] {
  const m = target.length, n = heard.length;
  const sim = (i: number, j: number) => similarity(target[i], heard[j]);
  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1] + sim(i - 1, j - 1));
    }
  }
  const states: TokenState[] = new Array(m).fill('missed');
  let i = m, j = n;
  while (i > 0 && j > 0) {
    const s = sim(i - 1, j - 1);
    if (Math.abs(dp[i][j] - (dp[i - 1][j - 1] + s)) < 1e-9 && s > 0.34) {
      states[i - 1] = s >= 0.85 ? 'ok' : 'close';
      i--; j--;
    } else if (dp[i - 1][j] >= dp[i][j - 1]) i--;
    else j--;
  }
  return states;
}

const NATURAL_RATE: Partial<Record<LangCode, number>> = { zh: 4.5, ja: 6.5 }; // caractères/s ; sinon mots/s

/**
 * Compare une production (transcription vocale ou saisie) à la phrase attendue.
 * `alternatives` : autres cibles acceptées (translittération, variantes).
 */
export function scoreAttempt(params: {
  heard: string | string[];
  target: string;
  lang: LangCode;
  alternatives?: string[];
  durationMs?: number;
}): ScoreResult {
  const { lang, durationMs } = params;
  const seg = LANG[lang].segmented;
  const heardList = (Array.isArray(params.heard) ? params.heard : [params.heard]).filter(Boolean);
  const targets = [params.target, ...(params.alternatives ?? [])].filter(Boolean);

  let best: ScoreResult | null = null;
  for (const target of targets) {
    for (const heard of heardList.length ? heardList : ['']) {
      const tT = tokens(target, lang, seg);
      const hT = tokens(heard, lang, seg);
      const nt = normalize(target, lang).replace(/\s/g, '');
      const nh = normalize(heard, lang).replace(/\s/g, '');
      const accuracy = similarity(nt, nh);
      const states = align(tT, hT);
      const completeness = tT.length
        ? states.reduce((s, st) => s + (st === 'ok' ? 1 : st === 'close' ? 0.5 : 0), 0) / tT.length
        : 0;
      let fluency: number | undefined;
      if (durationMs && durationMs > 300 && hT.length) {
        const rate = hT.length / (durationMs / 1000);
        const natural = NATURAL_RATE[lang] ?? 2.4;
        const ratio = rate / natural;
        fluency = ratio >= 0.55 && ratio <= 1.5 ? 1 : Math.max(0, 1 - Math.abs(Math.log(ratio / (ratio < 1 ? 0.55 : 1.5))) * 1.2);
      }
      const raw = fluency === undefined
        ? 0.65 * accuracy + 0.35 * completeness
        : 0.6 * accuracy + 0.3 * completeness + 0.1 * fluency;
      const score = Math.round(Math.max(0, Math.min(1, raw)) * 100);
      // Affichage : on découpe la cible d'origine (avec ponctuation) quand c'est possible.
      const display = seg ? target.split(/\s+/).filter(Boolean) : Array.from(target.replace(/\s/g, ''));
      const rank: Record<TokenState, number> = { ok: 0, close: 1, missed: 2 };
      let idx = 0;
      const words = display.map((text) => {
        const n = tokens(text, lang, seg).length;
        if (!n) return { text, state: 'ok' as TokenState };
        let st: TokenState = 'ok';
        for (let q = 0; q < n; q++) {
          const s = states[idx++] ?? 'missed';
          if (rank[s] > rank[st]) st = s;
        }
        return { text, state: st };
      });
      const res: ScoreResult = {
        score, accuracy, completeness, fluency, words, heard,
        verdict: score >= 85 ? 'excellent' : score >= 65 ? 'good' : 'retry',
      };
      if (!best || res.score > best.score) best = res;
    }
  }
  return best!;
}
