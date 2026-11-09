import * as Speech from 'expo-speech';
import { LANG, LangCode } from '../data/languages';

// Synthèse vocale : on cherche une voix installée correspondant à la langue,
// en préférant les voix « enhanced » et le genre du compagnon quand l'information existe.

let voicesCache: Speech.Voice[] | null = null;
async function voices(): Promise<Speech.Voice[]> {
  if (voicesCache && voicesCache.length) return voicesCache;
  try {
    voicesCache = await Speech.getAvailableVoicesAsync();
  } catch {
    voicesCache = [];
  }
  return voicesCache;
}

const FEMALE = /(female|femme|woman|amelie|audrey|samantha|karen|moira|tessa|monica|paulina|alice|federica|joana|luciana|mei-?jia|ting-?ting|kyoko|o-?ren|lekha|maryam|laila|zira|hazel|susan|elsa|helena|sabina|google.*(fr|en|es|it|pt).*#female)/i;
const MALE = /(male|homme|\bman\b|thomas|daniel|alex|fred|diego|jorge|luca|reed|rishi|tarik|maged|otoya|majed|david|mark|george|pablo|google.*#male)/i;

async function pickVoice(lang: LangCode, gender?: 'f' | 'm'): Promise<{ voice?: string; language: string } | null> {
  const all = await voices();
  for (const loc of LANG[lang].tts) {
    const base = loc.split('-')[0].toLowerCase();
    const matches = all.filter((v) => {
      const l = (v.language || '').replace('_', '-').toLowerCase();
      return l === loc.toLowerCase() || l.startsWith(base + '-') || l === base;
    });
    if (matches.length) {
      const sorted = [...matches].sort((a, b) => {
        const score = (v: Speech.Voice) =>
          (v.language.replace('_', '-').toLowerCase() === loc.toLowerCase() ? 4 : 0) +
          (String(v.quality).toLowerCase().includes('enhanced') ? 2 : 0) +
          (gender === 'f' && FEMALE.test(v.name) ? 1 : 0) +
          (gender === 'm' && MALE.test(v.name) && !FEMALE.test(v.name) ? 1 : 0);
        return score(b) - score(a);
      });
      return { voice: sorted[0].identifier, language: loc };
    }
  }
  // Liste vide (fréquent sur le web avant chargement) : on tente la locale principale.
  if (!all.length && LANG[lang].tts.length && lang !== 'ber') return { language: LANG[lang].tts[0] };
  return null;
}

/** La langue dispose-t-elle d'une voix sur cet appareil ? */
export async function hasVoice(lang: LangCode): Promise<boolean> {
  return (await pickVoice(lang)) !== null;
}

export async function speak(
  text: string,
  lang: LangCode,
  opts: { slow?: boolean; pitch?: number; rate?: number; gender?: 'f' | 'm'; onDone?: () => void; onStart?: () => void } = {},
): Promise<boolean> {
  const v = await pickVoice(lang, opts.gender);
  if (!v) { opts.onDone?.(); return false; }
  await Speech.stop();
  const base = opts.rate ?? 1;
  const rate = opts.slow ? base * 0.65 : base * 0.92;
  // Certains navigateurs n'émettent jamais la fin de lecture : filet de sécurité selon la longueur du texte.
  let finished = false;
  const finish = () => { if (finished) return; finished = true; clearTimeout(guard); opts.onDone?.(); };
  const guard = setTimeout(finish, Math.max(2500, (text.length * 110) / rate) + 1500);
  Speech.speak(text, {
    language: v.language,
    voice: v.voice,
    pitch: opts.pitch ?? 1,
    rate,
    onStart: opts.onStart,
    onDone: finish,
    onStopped: finish,
    onError: finish,
  });
  return true;
}

/** Voix française du compagnon pour les consignes et encouragements. */
export function speakCoach(text: string, gender: 'f' | 'm', pitch: number, onDone?: () => void) {
  return speak(text, 'fr', { gender, pitch, onDone });
}

export function stopSpeaking() {
  return Speech.stop();
}
