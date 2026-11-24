import AsyncStorage from '@react-native-async-storage/async-storage';
import { LANG, LangCode } from '../data/languages';
import type { Goal, Level, ProTrack } from '../data/curriculum';
import type { Card } from './srs';
import type { Intensity, Tone } from '../data/coachLines';

// Base locale (AsyncStorage : stockage natif sur mobile, localStorage sur le web).
// Le schéma reproduit celui d'un futur back-end : profils, progression par langue,
// tentatives (journal) et cartes de révision. Voir docs/DATA_MODEL.md.

export interface Parental {
  pinHash: string;
  dailyMinutes: number;       // 0 = illimité
  micAllowed: boolean;
}

export interface Settings {
  slowAudio: boolean;
  showRomanization: boolean;
  autoPlay: boolean;
  coachVoice: boolean;        // le compagnon lit les consignes à voix haute
  voice: 'auto' | 'f' | 'm' | 'device';            // voix intégrée (auto = genre du compagnon) ou voix du téléphone
  deviceVoices: Partial<Record<LangCode, string>>; // voix du téléphone choisie par langue
  teacher?: { tone: Tone; intensity: Intensity };  // mode professeur (défaut selon l'âge)
}

/** Objectifs dans le temps (le temps quotidien visé est dans Usage.dailyGoal). */
export interface Goals {
  weeklyDays: number;         // jours de pratique visés par semaine
  targetLevel?: Level;        // niveau à atteindre (toutes ses unités générales terminées)
  deadline?: string;          // date limite AAAA-MM-JJ
}

export interface Profile {
  id: string;
  name: string;
  birthYear: number;
  refLang: LangCode;          // langue des traductions et consignes
  targetLang: LangCode;
  goal: Goal;
  proTrack?: ProTrack;
  startLevel: Level;
  companionId: string;
  createdAt: number;
  parental?: Parental;
  settings: Settings;
  goals?: Goals;
  demo?: boolean;
}

export interface UnitResult { stars: number; best: number; completedAt: number; canDo?: 0 | 1 | 2; sticker?: string }
export interface Attempt { ts: number; kind: 'listen' | 'speak' | 'write' | 'order' | 'dialogue' | 'placement'; phraseId?: string; score: number }

export interface QuizResult { best: number; last: number; at: number; count: number }

export interface LangProgress {
  units: Record<string, UnitResult>;
  cards: Record<string, Card>;
  xp: number;
  placement?: { level: Level; score: number; at: number };
  quizzes?: Record<string, QuizResult>;
}

export interface Usage {
  streak: number; lastDay: string; today: string;
  minutesToday: number;       // décimal ; arrondi à l'affichage
  dailyGoal: number;          // minutes visées par jour
  history?: Record<string, number>; // minutes par jour (AAAA-MM-JJ)
}

export interface DB {
  version: 1;
  activeProfileId?: string;
  profiles: Profile[];
  progress: Record<string, Partial<Record<LangCode, LangProgress>>>;
  attempts: Record<string, Attempt[]>;
  usage: Record<string, Usage>;
}

const KEY = 'mlb.db.v1';

export const emptyDB = (): DB => ({ version: 1, profiles: [], progress: {}, attempts: {}, usage: {} });
export const emptyProgress = (): LangProgress => ({ units: {}, cards: {}, xp: 0 });
export const defaultSettings = (): Settings => ({
  slowAudio: false, showRomanization: true, autoPlay: true, coachVoice: true, voice: 'auto', deviceVoices: {},
});

export async function loadDB(): Promise<DB> {
  try {
    const raw = await AsyncStorage.getItem(KEY);
    if (raw) return migrate({ ...emptyDB(), ...JSON.parse(raw) } as DB);
  } catch {
    // stockage indisponible : base vide
  }
  return emptyDB();
}

/** Langues retirées de l'offre : les profils concernés basculent sur l'anglais (étudiée) ou le français (référence). */
export function migrate(db: DB): DB {
  const ok = (l: string) => !!LANG[l as LangCode];
  return {
    ...db,
    profiles: db.profiles.map((p) => ({
      ...p,
      targetLang: ok(p.targetLang) ? p.targetLang : p.refLang === 'en' ? 'fr' : 'en',
      refLang: ok(p.refLang) ? p.refLang : 'fr',
    })),
    progress: Object.fromEntries(Object.entries(db.progress).map(([pid, langs]) =>
      [pid, Object.fromEntries(Object.entries(langs ?? {}).filter(([l]) => ok(l)))])),
  };
}

export async function saveDB(db: DB): Promise<void> {
  try {
    await AsyncStorage.setItem(KEY, JSON.stringify(db));
  } catch {
    // on ignore : l'application continue en mémoire
  }
}

export const dayKey = (d = new Date()) => d.toISOString().slice(0, 10);

/** Hachage simple (FNV-1a) du code parental : on ne stocke jamais le code en clair. */
export function hashPin(pin: string, salt: string): string {
  let h = 0x811c9dc5;
  for (const ch of `${salt}:${pin}`) {
    h ^= ch.charCodeAt(0);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16);
}

export const uid = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
