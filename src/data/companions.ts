// Compagnons : des personnes illustrées (jamais des robots), choisies selon la tranche d'âge.
// Portraits : src/data/avatars.ts (générés par scripts/gen-avatars.cjs).

export type AgeBand = 'kid' | 'teen' | 'adult';

export interface Companion {
  id: string;
  name: string;
  band: AgeBand;
  age: number;
  role: string;
  bio: string;
  voice: { pitch: number; rate: number; gender: 'f' | 'm' };
  greeting: string;
}

export const COMPANIONS: Companion[] = [
  // ── Enfants (6-12 ans) : des animateurs bienveillants, ton simple et joyeux ──
  { id: 'lina', name: 'Lina', band: 'kid', age: 24, role: 'Animatrice d’atelier de langues',
    bio: 'Elle adore les chansons, les devinettes et les dessins. Avec elle, chaque mot prend vie.',
    voice: { pitch: 1.2, rate: 0.9, gender: 'f' },
    greeting: 'Coucou ! Je suis Lina. On découvre une nouvelle langue ensemble ?' },
  { id: 'yanis', name: 'Yanis', band: 'kid', age: 27, role: 'Conteur et moniteur',
    bio: 'Il raconte des histoires du monde entier et connaît plein de jeux de mots.',
    voice: { pitch: 1.05, rate: 0.9, gender: 'm' },
    greeting: 'Salut ! Moi c’est Yanis. On part à la découverte des langues ?' },

  // ── Adolescents (13-17 ans) : jeunes étudiants, ton détendu ──
  { id: 'ines', name: 'Inès', band: 'teen', age: 20, role: 'Étudiante en langues, fan de musique',
    bio: 'Elle apprend avec les chansons, les séries et les voyages. Toujours partante pour pratiquer.',
    voice: { pitch: 1.1, rate: 0.95, gender: 'f' },
    greeting: 'Hey ! Moi c’est Inès. On s’entraîne ensemble ?' },
  { id: 'omar', name: 'Omar', band: 'teen', age: 21, role: 'Étudiant, sportif et gamer',
    bio: 'Il a appris l’anglais et le japonais en voyageant avec son club de sport.',
    voice: { pitch: 1.0, rate: 1.0, gender: 'm' },
    greeting: 'Salut ! Omar ici. On progresse ensemble ?' },
  { id: 'mei', name: 'Mei', band: 'teen', age: 19, role: 'Étudiante en arts, dessine des mangas',
    bio: 'Elle parle mandarin et japonais, et adore expliquer les caractères avec des dessins.',
    voice: { pitch: 1.15, rate: 0.95, gender: 'f' },
    greeting: 'Coucou, je suis Mei ! On dessine des mots ensemble ?' },

  // ── Adultes (18 ans et plus) : coachs et professionnels ──
  { id: 'nadia', name: 'Nadia', band: 'adult', age: 38, role: 'Coach linguistique certifiée',
    bio: 'Quinze ans de formation en entreprise. Méthodique, exigeante et chaleureuse.',
    voice: { pitch: 1.05, rate: 0.95, gender: 'f' },
    greeting: 'Bonjour, je suis Nadia, votre coach. Quel est votre objectif aujourd’hui ?' },
  { id: 'karim', name: 'Karim', band: 'adult', age: 46, role: 'Consultant en commerce international',
    bio: 'Il a négocié sur quatre continents et partage les codes culturels de chaque pays.',
    voice: { pitch: 0.95, rate: 0.95, gender: 'm' },
    greeting: 'Bonjour, Karim. Préparons votre prochaine réunion internationale.' },
  { id: 'elena', name: 'Elena', band: 'adult', age: 33, role: 'Interprète de conférence',
    bio: 'Elle travaille en espagnol, italien, portugais et anglais. Sensible aux nuances.',
    voice: { pitch: 1.1, rate: 1.0, gender: 'f' },
    greeting: 'Bonjour ! Elena. Travaillons la musique de la langue.' },
  { id: 'raj', name: 'Raj', band: 'adult', age: 31, role: 'Ingénieur logiciel, polyglotte',
    bio: 'Il parle hindi, anglais et persan, et aime les méthodes efficaces et mesurables.',
    voice: { pitch: 1.0, rate: 1.0, gender: 'm' },
    greeting: 'Salut, Raj. On optimise votre progression ?' },
  { id: 'amina', name: 'Amina', band: 'adult', age: 52, role: 'Professeure de lettres et d’arabe',
    bio: 'Passionnée de calligraphie et de poésie, patiente et précise sur la prononciation.',
    voice: { pitch: 1.0, rate: 0.9, gender: 'f' },
    greeting: 'Bonjour, je suis Amina. Avançons ensemble, à votre rythme.' },
];

export const COMPANION: Record<string, Companion> = Object.fromEntries(COMPANIONS.map((c) => [c.id, c]));

export function ageOf(birthYear: number, now = new Date()) {
  return now.getFullYear() - birthYear;
}

export function bandOf(age: number): AgeBand {
  if (age < 13) return 'kid';
  if (age < 18) return 'teen';
  return 'adult';
}

export function companionsFor(age: number): Companion[] {
  const band = bandOf(age);
  return COMPANIONS.filter((c) => c.band === band);
}

export const BAND_LABEL: Record<AgeBand, string> = { kid: 'Enfant (6-12 ans)', teen: 'Ado (13-17 ans)', adult: 'Adulte' };
