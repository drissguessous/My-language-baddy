// Compagnons : des personnes illustrées (jamais des robots), choisies selon la tranche d'âge.
// Les avatars sont dessinés en SVG dans src/components/Avatar.tsx à partir de ces paramètres.

export type AgeBand = 'kid' | 'teen' | 'adult';

export interface AvatarSpec {
  skin: string;
  hair: string;
  hairStyle: 'short' | 'curly' | 'long' | 'bun' | 'ponytail' | 'hijab' | 'bald' | 'waves';
  outfit: string;
  accent: string;
  glasses?: boolean;
  beard?: boolean;
  earrings?: boolean;
}

export interface Companion {
  id: string;
  name: string;
  band: AgeBand;
  age: number;
  role: string;
  bio: string;
  voice: { pitch: number; rate: number; gender: 'f' | 'm' };
  avatar: AvatarSpec;
  cheers: string[];      // encouragements après une bonne réponse
  nudges: string[];      // relances après une erreur
  greeting: string;
}

export const COMPANIONS: Companion[] = [
  // ── Enfants (6-12 ans) : des animateurs bienveillants, ton simple et joyeux ──
  { id: 'lina', name: 'Lina', band: 'kid', age: 24, role: 'Animatrice d’atelier de langues',
    bio: 'Elle adore les chansons, les devinettes et les dessins. Avec elle, chaque mot devient un jeu.',
    voice: { pitch: 1.2, rate: 0.9, gender: 'f' },
    avatar: { skin: '#C68A62', hair: '#2B1B14', hairStyle: 'ponytail', outfit: '#F2A541', accent: '#3FA7A3', earrings: true },
    cheers: ['Bravo, super travail !', 'Waouh, tu es trop fort !', 'Génial, on continue ?'],
    nudges: ['Presque ! On réessaie ensemble ?', 'Pas grave, écoute-moi encore une fois.'],
    greeting: 'Coucou ! Je suis Lina. Prêt pour une aventure en langues ?' },
  { id: 'yanis', name: 'Yanis', band: 'kid', age: 27, role: 'Conteur et moniteur',
    bio: 'Il raconte des histoires du monde entier et connaît plein de jeux de mots.',
    voice: { pitch: 1.05, rate: 0.9, gender: 'm' },
    avatar: { skin: '#8D5A3B', hair: '#1A1210', hairStyle: 'curly', outfit: '#5B8DEF', accent: '#F6C445' },
    cheers: ['Excellent, champion !', 'Tu progresses à toute vitesse !', 'Trop bien !'],
    nudges: ['On y est presque, encore un essai !', 'Écoute bien, tu vas y arriver.'],
    greeting: 'Salut ! Moi c’est Yanis. On part à la découverte des langues ?' },

  // ── Adolescents (13-17 ans) : jeunes étudiants, ton détendu ──
  { id: 'ines', name: 'Inès', band: 'teen', age: 20, role: 'Étudiante en langues, fan de musique',
    bio: 'Elle apprend avec les chansons, les séries et les voyages. Toujours partante pour pratiquer.',
    voice: { pitch: 1.1, rate: 0.95, gender: 'f' },
    avatar: { skin: '#E0AC88', hair: '#4A2C1D', hairStyle: 'long', outfit: '#8E6CEF', accent: '#FF8A65', earrings: true },
    cheers: ['Nickel, bien joué !', 'Trop fort, ça sonne naturel !', 'Carrément bien !'],
    nudges: ['Pas mal, mais on peut faire mieux. Encore ?', 'Écoute l’accent, puis vas-y.'],
    greeting: 'Hey ! Moi c’est Inès. On s’entraîne ensemble ?' },
  { id: 'omar', name: 'Omar', band: 'teen', age: 21, role: 'Étudiant, sportif et gamer',
    bio: 'Il a appris l’anglais et le japonais en jouant et en voyageant avec son club.',
    voice: { pitch: 1.0, rate: 1.0, gender: 'm' },
    avatar: { skin: '#A86B47', hair: '#120D0B', hairStyle: 'short', outfit: '#2FB67C', accent: '#FFD166' },
    cheers: ['Bien joué, niveau validé !', 'Propre ! On enchaîne.', 'Ça, c’est du solide.'],
    nudges: ['Respawn ! Un autre essai ?', 'Presque, garde le rythme.'],
    greeting: 'Salut ! Omar ici. Prêt à monter de niveau ?' },
  { id: 'mei', name: 'Mei', band: 'teen', age: 19, role: 'Étudiante en arts, dessine des mangas',
    bio: 'Elle parle mandarin et japonais, et adore expliquer les caractères avec des dessins.',
    voice: { pitch: 1.15, rate: 0.95, gender: 'f' },
    avatar: { skin: '#F1C9A5', hair: '#16161D', hairStyle: 'bun', outfit: '#E85D75', accent: '#6BC4E8', glasses: true },
    cheers: ['Super, c’était parfait !', 'Bravo, très clair !', 'Joli travail !'],
    nudges: ['On recommence doucement ?', 'Regarde bien l’écriture, puis répète.'],
    greeting: 'Coucou, je suis Mei ! On dessine des mots ensemble ?' },

  // ── Adultes (18 ans et plus) : coachs et professionnels ──
  { id: 'nadia', name: 'Nadia', band: 'adult', age: 38, role: 'Coach linguistique certifiée',
    bio: 'Quinze ans de formation en entreprise. Méthodique, exigeante et chaleureuse.',
    voice: { pitch: 1.05, rate: 0.95, gender: 'f' },
    avatar: { skin: '#C99272', hair: '#3A2318', hairStyle: 'waves', outfit: '#1F6F78', accent: '#E9B44C', earrings: true },
    cheers: ['Très bien, prononciation claire.', 'Excellent, c’est naturel.', 'Parfait, on passe à la suite.'],
    nudges: ['Reprenons ce passage, plus lentement.', 'Bonne base ; corrigeons le détail.'],
    greeting: 'Bonjour, je suis Nadia, votre coach. Quel est votre objectif aujourd’hui ?' },
  { id: 'karim', name: 'Karim', band: 'adult', age: 46, role: 'Consultant en commerce international',
    bio: 'Il a négocié sur quatre continents et partage les codes culturels de chaque pays.',
    voice: { pitch: 0.95, rate: 0.95, gender: 'm' },
    avatar: { skin: '#B07A55', hair: '#5A5550', hairStyle: 'short', outfit: '#2E3A59', accent: '#C9A227', beard: true, glasses: true },
    cheers: ['Convaincant, bien joué.', 'Très professionnel.', 'Voilà qui inspire confiance.'],
    nudges: ['Reformulons pour être plus précis.', 'Encore une fois, avec assurance.'],
    greeting: 'Bonjour, Karim. Préparons votre prochaine réunion internationale.' },
  { id: 'elena', name: 'Elena', band: 'adult', age: 33, role: 'Interprète de conférence',
    bio: 'Elle travaille en espagnol, italien, portugais et anglais. Sensible aux nuances.',
    voice: { pitch: 1.1, rate: 1.0, gender: 'f' },
    avatar: { skin: '#E8B996', hair: '#7A3E1D', hairStyle: 'curly', outfit: '#B5446E', accent: '#F4D35E' },
    cheers: ['Magnifique, quelle fluidité.', 'Exactement le bon registre.', 'Bravo, très juste.'],
    nudges: ['Écoutez la mélodie de la phrase.', 'Presque : attention à l’accent tonique.'],
    greeting: 'Bonjour ! Elena. Travaillons la musique de la langue.' },
  { id: 'raj', name: 'Raj', band: 'adult', age: 31, role: 'Ingénieur logiciel, polyglotte',
    bio: 'Il parle hindi, anglais et persan, et aime les méthodes efficaces et mesurables.',
    voice: { pitch: 1.0, rate: 1.0, gender: 'm' },
    avatar: { skin: '#8A5A3C', hair: '#0F0B0A', hairStyle: 'short', outfit: '#3D5A80', accent: '#EE6C4D', beard: true },
    cheers: ['Validé. Score solide.', 'Très bien, régulier et précis.', 'Clean ! Suivant.'],
    nudges: ['On isole le mot difficile et on recommence.', 'Petit écart ; essayez à nouveau.'],
    greeting: 'Salut, Raj. On optimise votre progression ?' },
  { id: 'amina', name: 'Amina', band: 'adult', age: 52, role: 'Professeure de lettres et d’arabe',
    bio: 'Passionnée de calligraphie et de poésie, patiente et précise sur la prononciation.',
    voice: { pitch: 1.0, rate: 0.9, gender: 'f' },
    avatar: { skin: '#B98463', hair: '#2E5E4E', hairStyle: 'hijab', outfit: '#6A4C93', accent: '#E8C547', glasses: true },
    cheers: ['Bravo, c’est très bien dit.', 'Belle articulation.', 'Parfait, continuons.'],
    nudges: ['Prenons le temps de bien articuler.', 'Écoutez encore, puis répétez calmement.'],
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
