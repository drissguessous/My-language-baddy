import * as Speech from 'expo-speech';
import { LANG, LangCode } from '../data/languages';
import { coachClip, phraseClip, playClip, stopClip, voiceIndex } from './audio';

// Préférences de voix du profil actif (mises à jour par le store).
export interface VoicePrefs {
  mode: 'auto' | 'f' | 'm' | 'device';       // voix intégrée (auto = genre du compagnon) ou voix du téléphone
  deviceVoices: Partial<Record<LangCode, string>>;  // voix du téléphone choisie par langue
  rate: number;                              // vitesse de base selon l'âge
}
let prefs: VoicePrefs = { mode: 'auto', deviceVoices: {}, rate: 1 };
export function setVoicePrefs(p: VoicePrefs) { prefs = p; }
export function getVoicePrefs() { return prefs; }

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

export async function deviceVoices(lang: LangCode): Promise<Speech.Voice[]> {
  const all = await voices();
  return all.filter((v) => {
    const l = (v.language || '').replace('_', '-').toLowerCase();
    return LANG[lang].tts.some((loc) => l === loc.toLowerCase() || l.startsWith(loc.split('-')[0].toLowerCase() + '-') || l === loc.split('-')[0].toLowerCase());
  });
}

async function pickVoice(lang: LangCode, gender?: 'f' | 'm'): Promise<{ voice?: string; language: string } | null> {
  const all = await voices();
  const chosen = prefs.deviceVoices[lang] && all.find((v) => v.identifier === prefs.deviceVoices[lang]);
  if (chosen) return { voice: chosen.identifier, language: chosen.language.replace('_', '-') };
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

type SpeakOpts = {
  pid?: string; slow?: boolean; pitch?: number; rate?: number; gender?: 'f' | 'm';
  forceDevice?: boolean; onDone?: () => void; onStart?: () => void;
};

/** Lit une phrase : enregistrement intégré validé si disponible, sinon voix du téléphone. */
export async function speak(text: string, lang: LangCode, opts: SpeakOpts = {}): Promise<boolean> {
  const rate = (opts.rate ?? prefs.rate) * (opts.slow ? 0.7 : 1);
  if (opts.pid && prefs.mode !== 'device' && !opts.forceDevice) {
    const gender = prefs.mode === 'auto' ? opts.gender : prefs.mode;
    const src = phraseClip(opts.pid, lang, voiceIndex(lang, gender));
    if (src !== undefined) {
      await Speech.stop();
      if (await playClip(src, { rate, onDone: opts.onDone, onStart: opts.onStart })) return true;
    }
  }
  return speakDevice(text, lang, { ...opts, rate: opts.rate ?? prefs.rate });
}

export async function speakDevice(text: string, lang: LangCode, opts: SpeakOpts = {}): Promise<boolean> {
  const v = await pickVoice(lang, opts.gender);
  if (!v) { opts.onDone?.(); return false; }
  stopClip();
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
export async function speakCoach(text: string, gender: 'f' | 'm', pitch: number, onDone?: () => void) {
  if (prefs.mode !== 'device') {
    const src = coachClip(text, gender);
    if (src !== undefined) {
      await Speech.stop();
      if (await playClip(src, { onDone })) return true;
    }
  }
  return speakDevice(text, 'fr', { gender, pitch, onDone });
}

export function stopSpeaking() {
  stopClip();
  return Speech.stop();
}
