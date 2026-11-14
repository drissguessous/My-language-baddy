import React, { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { COMPANION, Companion, ageOf, bandOf, AgeBand } from '../data/companions';
import { LEVELS, Level, UNIT, UNITS, Unit, levelIndex, unitAvailable } from '../data/curriculum';
import { buildSimulation } from '../data/simulation';
import {
  Attempt, DB, LangProgress, Profile, Usage, dayKey, emptyDB, emptyProgress, hashPin, loadDB, saveDB, uid, defaultSettings,
} from './db';
import { review } from './srs';
import { setVoicePrefs } from './speech';
import { TeacherMode, teacherFor } from './teacher';
import { PEDAGOGY, Pedagogy, BADGE_COLORS } from '../data/pedagogy';

interface Store {
  ready: boolean;
  db: DB;
  profile?: Profile;
  age: number;
  band: AgeBand;
  companion: Companion;
  progress: LangProgress;
  usage: Usage;
  teacher: TeacherMode;
  pedagogy: Pedagogy;
  parentUnlocked: boolean;
  unlockParent: () => void;
  attempts: Attempt[];
  currentLevel: Level;
  unitState: (u: Unit) => 'locked' | 'open' | 'done' | 'soon' | 'hidden';
  createProfile: (p: Omit<Profile, 'id' | 'createdAt' | 'settings'> & { pin?: string }) => Promise<Profile>;
  updateProfile: (patch: Partial<Profile>) => void;
  switchProfile: (id: string) => void;
  deleteProfile: (id: string) => void;
  record: (a: Omit<Attempt, 'ts'>) => void;
  completeUnit: (unitId: string, best: number) => { stars: number; xp: number; sticker?: string };
  setCanDo: (unitId: string, v: 0 | 1 | 2) => void;
  setPlacement: (level: Level, score: number) => void;
  addMinutes: (m: number) => void;
  checkPin: (pin: string, profile?: Profile) => boolean;
  setPin: (pin: string) => void;
  loadDemo: () => void;
  resetAll: () => void;
  timeLeft: number | null;   // minutes restantes (contrôle parental), null = illimité
}

const Ctx = createContext<Store | null>(null);

const freshUsage = (): Usage => ({ streak: 0, lastDay: '', today: dayKey(), minutesToday: 0, dailyGoal: 15 });

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [db, setDb] = useState<DB>(emptyDB());
  const [ready, setReady] = useState(false);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => { loadDB().then((d) => { setDb(d); setReady(true); }); }, []);

  const commit = useCallback((fn: (d: DB) => DB) => {
    setDb((prev) => {
      const next = fn(prev);
      if (saveTimer.current) clearTimeout(saveTimer.current);
      saveTimer.current = setTimeout(() => saveDB(next), 250);
      return next;
    });
  }, []);

  const rawProfile = db.profiles.find((p) => p.id === db.activeProfileId);
  const profile = useMemo(() => (rawProfile ? { ...rawProfile, settings: { ...defaultSettings(), ...rawProfile.settings } } : undefined), [rawProfile]);
  const [parentUnlockedAt, setParentUnlockedAt] = useState(0);
  const age = profile ? ageOf(profile.birthYear) : 30;
  const band = bandOf(age);
  const companion = (profile && COMPANION[profile.companionId]) || COMPANION.nadia;
  const progress = (profile && db.progress[profile.id]?.[profile.targetLang]) || emptyProgress();
  const rawUsage = (profile && db.usage[profile.id]) || freshUsage();
  const usage: Usage = rawUsage.today === dayKey() ? rawUsage : { ...rawUsage, today: dayKey(), minutesToday: 0 };
  const attempts = (profile && db.attempts[profile.id]) || [];
  const teacher = teacherFor(band, profile?.settings.teacher);
  const pedagogy = PEDAGOGY[band];

  useEffect(() => {
    setVoicePrefs({
      mode: profile?.settings.voice ?? 'auto',
      deviceVoices: profile?.settings.deviceVoices ?? {},
      rate: (profile?.settings.slowAudio ? 0.85 : 1) * pedagogy.audioRate,
    });
  }, [profile?.settings.voice, profile?.settings.deviceVoices, profile?.settings.slowAudio, pedagogy.audioRate]);

  const currentLevel: Level = useMemo(() => {
    if (!profile) return 'A1';
    let lvl = Math.max(levelIndex(profile.startLevel), levelIndex(progress.placement?.level ?? 'A1'));
    // Un niveau est franchi quand toutes ses unités générales (hors filières pro) sont terminées.
    for (let i = lvl; i < LEVELS.length - 1; i++) {
      const units = UNITS.filter((u) => u.level === LEVELS[i] && !u.pro && !u.kids && unitAvailable(u, profile.targetLang) && u.ageMin <= age);
      if (units.length && units.every((u) => progress.units[u.id])) lvl = i + 1; else break;
    }
    return LEVELS[lvl];
  }, [profile, progress, age]);

  const unitState = useCallback((u: Unit) => {
    if (!profile) return 'locked' as const;
    if (u.ageMin > age) return 'hidden' as const;
    if (band === 'kid' && levelIndex(u.level) > levelIndex('A2')) return 'hidden' as const;
    if (u.kids && band === 'adult') return 'hidden' as const;
    if (u.pro && profile.goal !== 'pro' && band !== 'adult') return 'hidden' as const;
    if (!unitAvailable(u, profile.targetLang)) return 'soon' as const;
    if (progress.units[u.id]) return 'done' as const;
    if (u.pro && profile.goal === 'pro') return 'open' as const;
    return levelIndex(u.level) <= levelIndex(currentLevel) ? 'open' as const : 'locked' as const;
  }, [profile, age, band, progress, currentLevel]);

  const pid = profile?.id;
  const lang = profile?.targetLang;

  const patchProgress = useCallback((fn: (p: LangProgress) => LangProgress) => {
    if (!pid || !lang) return;
    commit((d) => {
      const cur = d.progress[pid]?.[lang] ?? emptyProgress();
      return { ...d, progress: { ...d.progress, [pid]: { ...d.progress[pid], [lang]: fn(cur) } } };
    });
  }, [pid, lang, commit]);

  const touchUsage = useCallback((fn: (u: Usage) => Usage) => {
    if (!pid) return;
    commit((d) => {
      let u = d.usage[pid] ?? freshUsage();
      const today = dayKey();
      if (u.today !== today) u = { ...u, today, minutesToday: 0 };
      return { ...d, usage: { ...d.usage, [pid]: fn(u) } };
    });
  }, [pid, commit]);

  const store: Store = {
    ready, db, profile, age, band, companion, progress, usage, attempts, currentLevel, unitState, teacher, pedagogy,
    parentUnlocked: Date.now() - parentUnlockedAt < 10 * 60_000,
    unlockParent: () => setParentUnlockedAt(Date.now()),
    timeLeft: profile?.parental?.dailyMinutes ? Math.max(0, profile.parental.dailyMinutes - usage.minutesToday) : null,

    createProfile: async ({ pin, ...p }) => {
      const id = uid();
      const prof: Profile = { ...p, id, createdAt: Date.now(), settings: { ...defaultSettings(), teacher: teacherFor(bandOf(ageOf(p.birthYear))) } };
      if (pin) prof.parental = { pinHash: hashPin(pin, id), dailyMinutes: bandOf(ageOf(p.birthYear)) === 'kid' ? 20 : 0, micAllowed: true };
      commit((d) => ({ ...d, profiles: [...d.profiles, prof], activeProfileId: id, usage: { ...d.usage, [id]: freshUsage() } }));
      return prof;
    },
    updateProfile: (patch) => {
      if (!pid) return;
      commit((d) => ({ ...d, profiles: d.profiles.map((p) => (p.id === pid ? { ...p, ...patch } : p)) }));
    },
    switchProfile: (id) => commit((d) => ({ ...d, activeProfileId: id })),
    deleteProfile: (id) => commit((d) => {
      const profiles = d.profiles.filter((p) => p.id !== id);
      const { [id]: _a, ...progress } = d.progress; const { [id]: _b, ...attempts } = d.attempts; const { [id]: _c, ...usage } = d.usage;
      return { ...d, profiles, progress, attempts, usage, activeProfileId: d.activeProfileId === id ? profiles[0]?.id : d.activeProfileId };
    }),
    record: (a) => {
      if (!pid) return;
      const at: Attempt = { ...a, ts: Date.now() };
      commit((d) => ({ ...d, attempts: { ...d.attempts, [pid]: [...(d.attempts[pid] ?? []), at].slice(-2000) } }));
      if (a.phraseId) patchProgress((p) => ({ ...p, cards: { ...p.cards, [a.phraseId!]: review(p.cards[a.phraseId!], a.score) } }));
    },
    completeUnit: (unitId, best) => {
      const stars = best >= 90 ? 3 : best >= 75 ? 2 : 1;
      const xp = (UNIT[unitId]?.phrases.length ?? 6) * 15 + best;
      const prevSticker = progress.units[unitId]?.sticker;
      const sticker = pedagogy.reward === 'badges' ? prevSticker ?? BADGE_COLORS[Object.keys(progress.units).length % BADGE_COLORS.length] : undefined;
      patchProgress((p) => {
        const prev = p.units[unitId];
        return { ...p, xp: p.xp + xp,
          units: { ...p.units, [unitId]: { ...prev, best: Math.max(best, prev?.best ?? 0), stars: Math.max(stars, prev?.stars ?? 0), completedAt: Date.now(), sticker } } };
      });
      touchUsage((u) => {
        const today = dayKey();
        if (u.lastDay === today) return u;
        const yesterday = dayKey(new Date(Date.now() - 86_400_000));
        return { ...u, lastDay: today, streak: u.lastDay === yesterday ? u.streak + 1 : 1 };
      });
      return { stars, xp, sticker };
    },
    setCanDo: (unitId, v) => patchProgress((p) => (p.units[unitId] ? { ...p, units: { ...p.units, [unitId]: { ...p.units[unitId], canDo: v } } } : p)),
    setPlacement: (level, score) => {
      patchProgress((p) => ({ ...p, placement: { level, score, at: Date.now() } }));
      if (pid) commit((d) => ({ ...d, profiles: d.profiles.map((p) => (p.id === pid ? { ...p, startLevel: level } : p)) }));
    },
    addMinutes: (m) => touchUsage((u) => ({ ...u, minutesToday: u.minutesToday + m })),
    checkPin: (pin, prof = profile) => !!prof?.parental && hashPin(pin, prof.id) === prof.parental.pinHash,
    setPin: (pin) => {
      if (!pid) return;
      commit((d) => ({ ...d, profiles: d.profiles.map((p) => (p.id === pid
        ? { ...p, parental: { dailyMinutes: 0, micAllowed: true, ...p.parental, pinHash: hashPin(pin, pid) } } : p)) }));
    },
    loadDemo: () => commit((d) => buildSimulation(d)),
    resetAll: () => commit(() => emptyDB()),
  };

  return <Ctx.Provider value={store}>{children}</Ctx.Provider>;
}

export function useStore(): Store {
  const s = useContext(Ctx);
  if (!s) throw new Error('useStore hors StoreProvider');
  return s;
}
