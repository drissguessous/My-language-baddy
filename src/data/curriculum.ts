import { A1 } from './phrases/a1';
import { A2, B1 } from './phrases/a2b1';
import { B2, C1C2, PRO } from './phrases/b2c2pro';
import type { Phrase } from './phrases/types';
import type { LangCode } from './languages';

export type Level = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
export const LEVELS: Level[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

export const LEVEL_INFO: Record<Level, { label: string; can: string }> = {
  A1: { label: 'Découverte', can: 'Se présenter, saluer, commander, demander son chemin.' },
  A2: { label: 'Survie', can: 'Faire des achats, parler de sa journée, gérer un séjour.' },
  B1: { label: 'Seuil', can: 'Donner son avis, passer un entretien, raconter.' },
  B2: { label: 'Avancé', can: 'Négocier, argumenter, défendre une position.' },
  C1: { label: 'Autonome', can: 'Présenter en public, répondre à des questions pointues.' },
  C2: { label: 'Maîtrise', can: 'Jouer sur les nuances, les registres et les proverbes.' },
};

/** Objectif choisi à l'inscription. */
export type Goal = 'formation' | 'remise' | 'pro';
export const GOALS: { id: Goal; title: string; text: string }[] = [
  { id: 'formation', title: 'Formation', text: 'Apprendre une langue pas à pas, du niveau A1 jusqu’au C2.' },
  { id: 'remise', title: 'Mise à niveau', text: 'Un test de positionnement, puis reprise au bon niveau.' },
  { id: 'pro', title: 'Professionnalisation', text: 'La langue de votre métier : vente, accueil, tech, soins, logistique.' },
];

export type ProTrack = 'business' | 'hospitality' | 'tech' | 'health' | 'logistics';
export const PRO_TRACKS: { id: ProTrack; title: string; icon: string }[] = [
  { id: 'business', title: 'Vente & affaires', icon: '💼' },
  { id: 'hospitality', title: 'Tourisme & accueil', icon: '🛎️' },
  { id: 'tech', title: 'Tech & numérique', icon: '💻' },
  { id: 'health', title: 'Santé & soins', icon: '🩺' },
  { id: 'logistics', title: 'Logistique & international', icon: '🚢' },
];

export interface Unit {
  id: string;
  level: Level;
  pro?: ProTrack;
  kids?: boolean;
  title: string;
  scene: string;            // mise en situation lue par le compagnon
  counterpart: string;      // rôle joué par le compagnon dans le dialogue
  ageMin: number;
  phrases: string[];
  grammar?: string;         // point de langue mis en avant
}

export const UNITS: Unit[] = [
  { id: 'u-kids', level: 'A1', kids: true, title: 'Couleurs & animaux', ageMin: 0,
    scene: 'Tu fais connaissance avec un nouvel ami à l’école.', counterpart: 'un camarade',
    phrases: ['k1', 'k2', 'k3', 'k4', 'k5', 'k6'], grammar: 'Dire ce qu’on aime' },
  { id: 'u-greet', level: 'A1', title: 'Saluer', ageMin: 0,
    scene: 'Vous arrivez à l’accueil d’une école de langues.', counterpart: 'la personne de l’accueil',
    phrases: ['g1', 'g2', 'g3', 'g4', 'g5', 'g6'], grammar: 'Formules de politesse' },
  { id: 'u-intro', level: 'A1', title: 'Se présenter', ageMin: 0,
    scene: 'Premier jour de cours : on fait connaissance.', counterpart: 'un camarade de cours',
    phrases: ['i1', 'i2', 'i3', 'i4', 'i5', 'i6'], grammar: 'Le nom, l’origine, les langues' },
  { id: 'u-time', level: 'A1', title: 'Heures & prix', ageMin: 0,
    scene: 'À la boutique, puis au téléphone pour un rendez-vous.', counterpart: 'le vendeur',
    phrases: ['n1', 'n2', 'n3', 'n4', 'n5', 'n6'], grammar: 'Les nombres et l’heure' },
  { id: 'u-cafe', level: 'A1', title: 'Au café', ageMin: 0,
    scene: 'Vous commandez en terrasse.', counterpart: 'le serveur',
    phrases: ['f1', 'f2', 'f3', 'f4', 'f5', 'f6'], grammar: 'Commander poliment' },
  { id: 'u-dir', level: 'A1', title: 'Demander son chemin', ageMin: 0,
    scene: 'Vous êtes perdu en ville et cherchez la gare.', counterpart: 'un passant',
    phrases: ['d1', 'd2', 'd3', 'd4', 'd5', 'd6'], grammar: 'L’impératif et les directions' },
  { id: 'u-shop', level: 'A2', title: 'Faire des achats', ageMin: 0,
    scene: 'Vous cherchez une veste dans un magasin.', counterpart: 'la vendeuse',
    phrases: ['s1', 's2', 's3', 's4', 's5', 's6'], grammar: 'Le conditionnel de politesse' },
  { id: 'u-day', level: 'A2', title: 'Ma journée', ageMin: 0,
    scene: 'Un collègue vous pose des questions sur votre quotidien.', counterpart: 'un collègue',
    phrases: ['r1', 'r2', 'r3', 'r4', 'r5', 'r6'], grammar: 'Le présent d’habitude' },
  { id: 'u-hotel', level: 'A2', title: 'À l’hôtel', ageMin: 0,
    scene: 'Vous arrivez à l’hôtel le soir.', counterpart: 'le réceptionniste',
    phrases: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'], grammar: 'Réclamer avec courtoisie' },
  { id: 'u-opinion', level: 'B1', title: 'Donner son avis', ageMin: 10,
    scene: 'Vous sortez du cinéma avec un ami.', counterpart: 'un ami',
    phrases: ['o1', 'o2', 'o3', 'o4', 'o5', 'o6'], grammar: 'Exprimer l’accord et le désaccord' },
  { id: 'u-job', level: 'B1', title: 'Entretien d’embauche', ageMin: 15,
    scene: 'Entretien pour un poste dans une entreprise internationale.', counterpart: 'la recruteuse',
    phrases: ['w1', 'w2', 'w3', 'w4', 'w5', 'w6'], grammar: 'Le passé pour raconter son parcours' },
  { id: 'u-nego', level: 'B2', title: 'Négocier', ageMin: 15,
    scene: 'Négociation commerciale avec un fournisseur.', counterpart: 'le fournisseur',
    phrases: ['m1', 'm2', 'm3', 'm4', 'm5', 'm6'], grammar: 'La condition et la concession' },
  { id: 'u-debate', level: 'B2', title: 'Argumenter', ageMin: 13,
    scene: 'Débat sur le télétravail.', counterpart: 'une journaliste',
    phrases: ['a1', 'a2', 'a3', 'a4', 'a5', 'a6'], grammar: 'Connecteurs logiques' },
  { id: 'u-present', level: 'C1', title: 'Présenter en public', ageMin: 15,
    scene: 'Vous présentez les résultats trimestriels devant la direction.', counterpart: 'un membre du comité',
    phrases: ['p1', 'p2', 'p3', 'p4', 'p5', 'p6'], grammar: 'Structurer un exposé' },
  { id: 'u-nuance', level: 'C2', title: 'Nuances & registres', ageMin: 15,
    scene: 'Échange entre associés avant une signature.', counterpart: 'votre associée',
    phrases: ['x1', 'x2', 'x3', 'x4', 'x5', 'x6'], grammar: 'Proverbes, euphémismes, concession' },
  { id: 'u-pro-business', level: 'B1', pro: 'business', title: 'Rendez-vous client', ageMin: 15,
    scene: 'Découverte des besoins d’un client.', counterpart: 'le client',
    phrases: ['pb1', 'pb2', 'pb3', 'pb4', 'pb5', 'pb6'], grammar: 'Questions de découverte' },
  { id: 'u-pro-hospitality', level: 'A2', pro: 'hospitality', title: 'Accueillir un client', ageMin: 15,
    scene: 'Vous êtes à la réception, un client arrive.', counterpart: 'le client',
    phrases: ['ph1', 'ph2', 'ph3', 'ph4', 'ph5', 'ph6'], grammar: 'Le registre de service' },
  { id: 'u-pro-tech', level: 'B2', pro: 'tech', title: 'Gérer un incident', ageMin: 15,
    scene: 'Point d’équipe après une panne en production.', counterpart: 'la responsable technique',
    phrases: ['pt1', 'pt2', 'pt3', 'pt4', 'pt5', 'pt6'], grammar: 'Rendre compte d’un incident' },
  { id: 'u-pro-health', level: 'B1', pro: 'health', title: 'Accueillir un patient', ageMin: 15,
    scene: 'Un patient se présente aux urgences.', counterpart: 'le patient',
    phrases: ['ps1', 'ps2', 'ps3', 'ps4', 'ps5', 'ps6'], grammar: 'Questionner et rassurer' },
  { id: 'u-pro-logistics', level: 'B2', pro: 'logistics', title: 'Suivre une expédition', ageMin: 15,
    scene: 'Un client s’inquiète du retard de son conteneur.', counterpart: 'le client',
    phrases: ['pl1', 'pl2', 'pl3', 'pl4', 'pl5', 'pl6'], grammar: 'Vocabulaire du transport' },
];

export const ALL_PHRASES: Phrase[] = [...A1, ...A2, ...B1, ...B2, ...C1C2, ...PRO];
export const PHRASE: Record<string, Phrase> = Object.fromEntries(ALL_PHRASES.map((p) => [p.id, p]));
export const UNIT: Record<string, Unit> = Object.fromEntries(UNITS.map((u) => [u.id, u]));

/** Une unité est-elle disponible dans cette langue ? (toutes ses phrases traduites) */
export function unitAvailable(u: Unit, lang: LangCode): boolean {
  return u.phrases.every((id) => !!PHRASE[id]?.t[lang]);
}

export function levelIndex(l: Level) { return LEVELS.indexOf(l); }
