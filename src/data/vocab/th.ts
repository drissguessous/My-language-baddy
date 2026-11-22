// Thaï du dictionnaire illustré, avec transcription RTGS (Royal Thai General System ; tons non notés).
// Format : identifiant de l'entrée | thaï | transcription. Les traductions sont recoupées avec Unicode CLDR
// (scripts/audit/vocab-evidence.ts).
import { A } from './th-a';
import { B } from './th-b';
import { C } from './th-c';

export const TH_VOCAB: Record<string, [string, string]> = Object.fromEntries(
  [A, B, C].join('\n').trim().split('\n').map((l) => l.trim()).filter(Boolean)
    .map((l) => { const [id, th, r] = l.split('|'); return [id, [th, r]]; }),
);
