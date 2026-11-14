// Base de données de simulation : profils de démonstration réalistes avec historique,
// pour les démos, les réunions R&D et le travail sur le front-end.
// Chargée depuis Profil › « Profils de démonstration ». Code parental des profils mineurs : 1234.

import { Attempt, DB, LangProgress, Profile, Usage, dayKey, defaultSettings, emptyProgress, hashPin } from '../lib/db';
import { review } from '../lib/srs';
import { UNIT, UNITS } from './curriculum';
import type { LangCode } from './languages';

function rng(seed: number) {
  let s = seed >>> 0;
  return () => { s = (Math.imul(s, 1664525) + 1013904223) >>> 0; return s / 2 ** 32; };
}

const year = new Date().getFullYear();
const DAY = 86_400_000;

interface Spec {
  profile: Omit<Profile, 'createdAt' | 'settings' | 'demo'> & { settings?: Partial<Profile['settings']> };
  done: string[];         // unités terminées
  days: number;           // ancienneté en jours
  streak: number;
  skill: number;          // niveau moyen des scores (0-1)
}

const SPECS: Spec[] = [
  { profile: { id: 'demo-yasmine', name: 'Yasmine', birthYear: year - 9, refLang: 'fr', targetLang: 'en', goal: 'formation',
      startLevel: 'A1', companionId: 'lina', settings: { teacher: { tone: 'funny', intensity: 2 } }, parental: { pinHash: hashPin('1234', 'demo-yasmine'), dailyMinutes: 20, micAllowed: true } },
    done: ['u-kids', 'u-greet', 'u-intro'], days: 18, streak: 6, skill: 0.82 },
  { profile: { id: 'demo-adam', name: 'Adam', birthYear: year - 15, refLang: 'fr', targetLang: 'es', goal: 'formation',
      startLevel: 'A1', companionId: 'omar', settings: { teacher: { tone: 'funny', intensity: 3 } }, parental: { pinHash: hashPin('1234', 'demo-adam'), dailyMinutes: 45, micAllowed: true } },
    done: ['u-greet', 'u-intro', 'u-time', 'u-cafe', 'u-dir', 'u-shop'], days: 41, streak: 12, skill: 0.76 },
  { profile: { id: 'demo-salma', name: 'Salma', birthYear: year - 24, refLang: 'fr', targetLang: 'ja', goal: 'remise',
      startLevel: 'A2', companionId: 'elena', settings: { teacher: { tone: 'friendly', intensity: 2 } } },
    done: ['u-shop', 'u-day'], days: 9, streak: 4, skill: 0.68 },
  { profile: { id: 'demo-karim', name: 'Karim', birthYear: year - 42, refLang: 'fr', targetLang: 'en', goal: 'pro', proTrack: 'logistics',
      startLevel: 'B2', companionId: 'karim', settings: { teacher: { tone: 'serious', intensity: 3 }, voice: 'm' } },
    done: ['u-nego', 'u-pro-logistics', 'u-debate'], days: 27, streak: 3, skill: 0.88 },
  { profile: { id: 'demo-helene', name: 'Hélène', birthYear: year - 35, refLang: 'en', targetLang: 'zh', goal: 'pro', proTrack: 'hospitality',
      startLevel: 'A1', companionId: 'nadia', settings: { slowAudio: true, teacher: { tone: 'normal', intensity: 1 } } },
    done: ['u-greet', 'u-pro-hospitality'], days: 14, streak: 9, skill: 0.71 },
];

export function buildSimulation(base: DB): DB {
  const db: DB = { ...base, profiles: [...base.profiles.filter((p) => !p.demo)], progress: { ...base.progress },
    attempts: { ...base.attempts }, usage: { ...base.usage } };
  const now = Date.now();
  SPECS.forEach((spec, k) => {
    const r = rng(1000 + k);
    const p: Profile = {
      ...spec.profile, createdAt: now - spec.days * DAY, demo: true,
      settings: { ...defaultSettings(), ...spec.profile.settings },
    };
    const prog: LangProgress = emptyProgress();
    const attempts: Attempt[] = [];
    spec.done.forEach((uid, i) => {
      const unit = UNIT[uid];
      const at = now - (spec.days - (i + 1) * (spec.days / (spec.done.length + 1))) * DAY;
      let total = 0;
      unit.phrases.forEach((pid) => {
        for (const kind of ['listen', 'speak', 'write'] as const) {
          const score = Math.round(Math.min(100, Math.max(30, (spec.skill + (r() - 0.5) * 0.35) * 100)));
          attempts.push({ ts: at + r() * 3_600_000, kind, phraseId: pid, score });
          total += score;
          prog.cards[pid] = review(prog.cards[pid], score, at);
        }
      });
      const best = Math.round(total / (unit.phrases.length * 3));
      prog.units[uid] = { best, stars: best >= 90 ? 3 : best >= 75 ? 2 : 1, completedAt: at };
      prog.xp += unit.phrases.length * 15 + best;
    });
    if (spec.profile.goal === 'remise') {
      prog.placement = { level: spec.profile.startLevel, score: 62, at: now - spec.days * DAY };
      attempts.push({ ts: now - spec.days * DAY, kind: 'placement', score: 62 });
    }
    // Une unité en cours de révision : quelques cartes échues aujourd'hui.
    Object.keys(prog.cards).slice(0, 4).forEach((id) => { prog.cards[id] = { ...prog.cards[id], due: now - 3_600_000 }; });

    const usage: Usage = { streak: spec.streak, lastDay: dayKey(), today: dayKey(), minutesToday: Math.round(r() * 12), dailyGoal: 15 };
    db.profiles.push(p);
    db.progress[p.id] = { [p.targetLang as LangCode]: prog };
    db.attempts[p.id] = attempts.sort((a, b) => a.ts - b.ts);
    db.usage[p.id] = usage;
  });
  db.activeProfileId = db.activeProfileId && db.profiles.some((p) => p.id === db.activeProfileId)
    ? db.activeProfileId : SPECS[0].profile.id;
  return db;
}

export const DEMO_IDS = SPECS.map((s) => s.profile.id);
export const UNIT_COUNT = UNITS.length;
