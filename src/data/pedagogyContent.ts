import type { LangCode } from './languages';

// Pictogrammes des phrases (cartes illustrées du mode enfant, niveaux A1-A2) : icônes Lucide (ISC).
// « CircleHelp » marque une question.
const Q = 'CircleHelp';
export const PICTO: Record<string, string[]> = {
  g1: ['Hand', 'Smile'], g2: ['ThumbsUp', 'Smile'], g3: ['HeartHandshake', 'School'], g4: ['HandHeart'], g5: ['Hand', 'Moon'], g6: ['Hand', 'Sun'],
  i1: [Q, 'IdCard'], i2: ['IdCard', 'User'], i3: [Q, 'Earth'], i4: ['MapPin', 'Building2'], i5: [Q, 'Languages'], i6: ['Languages', 'BookOpen'],
  n1: [Q, 'Clock3'], n2: ['Clock3'], n3: [Q, 'Coins'], n4: ['Euro'], n5: ['CalendarDays', 'Clock3'], n6: ['ThumbsUp', 'CalendarDays'],
  f1: [Q, 'Coffee'], f2: ['Coffee', 'Citrus'], f3: [Q, 'Candy'], f4: ['Ban', 'Candy'], f5: ['Receipt'], f6: ['Coffee', 'Sun'],
  d1: [Q, 'TrainFront'], d2: ['ArrowUp', 'ArrowLeft'], d3: [Q, 'Compass'], d4: ['Footprints'], d5: [Q, 'Bus'], d6: ['Bus', 'MapPin'],
  k1: [Q, 'Palette'], k2: ['Palette', 'Sparkles'], k3: [Q, 'PawPrint'], k4: ['Cat'], k5: ['Shapes', 'Smile'], k6: ['PartyPopper'],
  s1: [Q, 'Shirt'], s2: ['Shirt', 'Snowflake'], s3: [Q, 'Shirt', 'Check'], s4: ['Shirt', 'Check'], s5: ['DoorOpen'], s6: ['CreditCard'],
  r1: [Q, 'AlarmClock'], r2: ['AlarmClock', 'Croissant'], r3: [Q, 'Building2'], r4: ['TramFront'], r5: [Q, 'Sunset'], r6: ['Bike', 'BookOpen'],
  h1: ['Hotel', 'CalendarDays'], h2: ['BookUser'], h3: [Q, 'Croissant'], h4: ['Croissant', 'Clock3'], h5: ['ShowerHead', 'Snowflake'], h6: ['Wrench'],
};

export interface UnitNote {
  canDo: string;            // objectif « je peux… » (auto-évaluation de fin d'unité)
  guided: string;           // ados : consigne de repérage
  explicit: string[];       // adultes : explication du fonctionnement
  focus: string[];          // phrases à observer dans la langue étudiée
}

export const UNIT_NOTES: Record<string, UnitNote> = {
  'u-kids': { canDo: 'Je peux dire ce que j’aime et parler de mon animal.', guided: '', explicit: [], focus: ['k2', 'k4'] },
  'u-greet': {
    canDo: 'Je peux saluer, remercier et prendre congé poliment.',
    guided: 'Repère comment on dit « merci » et « au revoir ».',
    explicit: [
      'Les salutations sont des formules figées : on les apprend en bloc, sans les décomposer.',
      'La question « Comment allez-vous ? » appelle une réponse courte suivie de la même question en retour.',
      'Plusieurs langues du cours distinguent un registre poli et un registre familier ; ici, toutes les répliques sont au registre poli.',
    ],
    focus: ['g4', 'g6'],
  },
  'u-intro': {
    canDo: 'Je peux dire mon nom, mon origine et les langues que je parle.',
    guided: 'Repère la formule pour dire ton nom et celle pour dire d’où tu viens.',
    explicit: [
      'Trois informations de base : le nom, l’origine, les langues. Chacune repose sur une structure réutilisable : changez seulement le mot clé (le prénom, le pays, la langue).',
      'Les noms de pays et de langues changent de forme d’une langue à l’autre : apprenez ceux qui vous concernent.',
    ],
    focus: ['i2', 'i4'],
  },
  'u-time': {
    canDo: 'Je peux demander l’heure et un prix, et fixer un rendez-vous.',
    guided: 'Repère comment on demande l’heure et comment on demande un prix.',
    explicit: [
      'Les nombres servent à la fois pour l’heure, les prix et les dates : entraînez-vous à les dire à voix haute.',
      'Pour un rendez-vous, l’ordre habituel des informations est : le jour, puis l’heure.',
    ],
    focus: ['n1', 'n3'],
  },
  'u-cafe': {
    canDo: 'Je peux commander une boisson et demander l’addition.',
    guided: 'Repère l’équivalent de « s’il vous plaît ».',
    explicit: [
      'Commander = produit + formule de politesse. La formule « s’il vous plaît » se place souvent en fin de phrase.',
      'Pour refuser poliment, on combine « non » avec un remerciement.',
    ],
    focus: ['f2', 'f5'],
  },
  'u-dir': {
    canDo: 'Je peux demander mon chemin et comprendre une indication simple.',
    guided: 'Repère les mots « tout droit » et « à gauche ».',
    explicit: [
      'Pour aborder un inconnu, on commence par une formule d’excuse avant la question.',
      'Les indications utilisent l’impératif poli : « allez », « tournez ». Retenez les quatre repères : tout droit, à gauche, à droite, en face.',
    ],
    focus: ['d1', 'd2'],
  },
  'u-shop': {
    canDo: 'Je peux chercher un vêtement, demander à l’essayer et payer.',
    guided: 'Repère comment on demande la permission (« je peux… ? »).',
    explicit: [
      'La demande polie « je voudrais » adoucit la demande : c’est le conditionnel de politesse (ou son équivalent dans la langue).',
      '« Je peux… ? » suivi d’un verbe permet de demander presque tout : essayer, payer, regarder.',
    ],
    focus: ['s4', 's6'],
  },
  'u-day': {
    canDo: 'Je peux décrire ma journée et mes habitudes.',
    guided: 'Repère les mots qui indiquent le moment de la journée.',
    explicit: [
      'Les habitudes s’expriment au présent, accompagné d’un repère temporel (à sept heures, le soir).',
      'Les connecteurs « puis », « et », « avant de » enchaînent les actions dans l’ordre chronologique.',
    ],
    focus: ['r2', 'r6'],
  },
  'u-hotel': {
    canDo: 'Je peux m’enregistrer à l’hôtel et signaler un problème poliment.',
    guided: 'Repère comment on signale un problème.',
    explicit: [
      'Une réclamation efficace décrit le fait (« il n’y a pas d’eau chaude ») sans reproche : la réponse attendue est une excuse et une solution.',
      'La forme négative (« il n’y a pas ») est très productive : changez seulement l’objet.',
    ],
    focus: ['h1', 'h5'],
  },
  'u-opinion': {
    canDo: 'Je peux donner mon avis et exprimer un accord ou un désaccord nuancé.',
    guided: 'Repère comment on introduit un avis et comment on exprime un désaccord.',
    explicit: [
      'Introduire son avis : « à mon avis », « selon moi ». Nuancer le désaccord : « pas tout à fait d’accord ».',
      'L’opposition se marque avec « mais » : on reconnaît un point positif avant de critiquer.',
    ],
    focus: ['o2', 'o3'],
  },
  'u-job': {
    canDo: 'Je peux présenter mon parcours et mes motivations en entretien.',
    guided: 'Repère les verbes au passé qui décrivent l’expérience.',
    explicit: [
      'Le parcours se raconte au passé : un temps pour le fait terminé (« j’ai travaillé trois ans »), un autre pour les tâches habituelles (« je préparais »).',
      'La motivation se justifie avec « parce que » suivi d’un lien entre l’entreprise et vos objectifs.',
    ],
    focus: ['w2', 'w4'],
  },
  'u-nego': {
    canDo: 'Je peux négocier une offre et poser des conditions.',
    guided: 'Repère comment on pose une condition (« si… », « à condition que… »).',
    explicit: [
      'La condition s’exprime avec « si » (hypothèse) ou « à condition que » (exigence).',
      'Contre-proposer sans fermer la porte : reconnaître l’offre (« c’est un premier pas »), puis justifier (« compte tenu du volume »).',
    ],
    focus: ['m3', 'm4'],
  },
  'u-debate': {
    canDo: 'Je peux défendre une position et répondre à une objection.',
    guided: 'Repère les connecteurs « pourtant » et « c’est pourquoi ».',
    explicit: [
      'Un argument tient en trois temps : position, justification (« car »), conséquence (« c’est pourquoi »).',
      'Introduire l’objection avec « pourtant » ou « cependant » ; y répondre en proposant un compromis.',
    ],
    focus: ['a2', 'a4'],
  },
  'u-present': {
    canDo: 'Je peux présenter des résultats et répondre aux questions d’un public.',
    guided: 'Repère comment on annonce le plan et comment on explique une cause.',
    explicit: [
      'Un exposé s’ouvre par un remerciement et l’annonce de l’objet.',
      'Expliquer une cause : « grâce à » pour une cause positive, « s’explique par » ou « en raison de » pour une cause neutre ou négative.',
    ],
    focus: ['p1', 'p4'],
  },
  'u-nuance': {
    canDo: 'Je peux nuancer une critique et comprendre un proverbe courant.',
    guided: 'Repère comment une critique est adoucie.',
    explicit: [
      'Les proverbes ne se traduisent pas mot à mot : chaque langue a son équivalent culturel.',
      'Adoucir une critique : la concession (« bien écrit, quoique… ») et la reformulation en suggestion.',
    ],
    focus: ['x1', 'x5'],
  },
  'u-pro-business': {
    canDo: 'Je peux découvrir les besoins d’un client et proposer une démonstration.',
    guided: 'Repère la question ouverte qui lance l’entretien.',
    explicit: ['Commencez par une question ouverte sur le problème du client, puis reformulez avant de présenter la solution.'],
    focus: ['pb1', 'pb3'],
  },
  'u-pro-hospitality': {
    canDo: 'Je peux accueillir un client et répondre à une demande particulière.',
    guided: 'Repère la formule d’accueil et la proposition de service.',
    explicit: ['Le registre de service combine accueil, prise en compte (« c’est noté ») et proposition concrète (« je vous réserve… ? »).'],
    focus: ['ph1', 'ph5'],
  },
  'u-pro-tech': {
    canDo: 'Je peux rendre compte d’un incident technique et proposer une action.',
    guided: 'Repère la cause, l’impact et l’action corrective.',
    explicit: ['Un compte rendu d’incident suit l’ordre : cause, impact chiffré, rétablissement, action pour éviter la récidive.'],
    focus: ['pt2', 'pt4'],
  },
  'u-pro-health': {
    canDo: 'Je peux accueillir un patient, évaluer sa douleur et le rassurer.',
    guided: 'Repère la question sur l’échelle de douleur.',
    explicit: ['Questionner (où, depuis quand, quelle intensité), puis annoncer clairement l’action suivante pour rassurer.'],
    focus: ['ps1', 'ps3'],
  },
  'u-pro-logistics': {
    canDo: 'Je peux faire le point sur une expédition et relancer un document manquant.',
    guided: 'Repère le vocabulaire du transport et de la douane.',
    explicit: ['Situer (où en est l’expédition), expliquer (la cause du retard), anticiper (le document manquant, le coût du retard).'],
    focus: ['pl2', 'pl4'],
  },
};

// Conseils propres à chaque langue (faits vérifiables, affichés aux ados et aux adultes).
export const LANG_TIPS: Record<LangCode, string[]> = {
  fr: ['Les lettres finales sont souvent muettes (« vous », « beaucoup »).', 'La liaison relie deux mots : « vous‿allez ».'],
  en: ['L’orthographe ne suit pas toujours la prononciation : écoutez avant de lire.', 'L’accent tonique porte sur une syllabe par mot : « reMEMber ».'],
  es: ['L’espagnol se prononce presque comme il s’écrit.', '« Usted » est la forme polie ; on conjugue le verbe à la troisième personne.'],
  it: ['Les consonnes doubles se prononcent plus longues : « gra-zie », « mil-le ».', '« Lei » (avec majuscule à l’écrit) est la forme polie.'],
  pt: ['Ce cours suit le portugais d’Europe (« autocarro », « pequeno-almoço »).', 'Les voyelles non accentuées sont très réduites à l’oral.'],
  ar: ['L’arabe s’écrit de droite à gauche ; les voyelles brèves ne sont généralement pas écrites.', 'Ce cours enseigne l’arabe standard moderne, compris dans tout le monde arabe.'],
  ber: ['Le tifinagh est l’écriture officielle de l’amazigh au Maroc (standard IRCAM) ; la transcription latine aide à la lecture.', 'Ce cours suit le tamazight standard marocain.'],
  fa: ['Le persan utilise l’alphabet arabe avec quatre lettres en plus : پ چ ژ گ.', 'L’ezâfe (-e) relie le nom à son complément : « esm-e man » (mon nom).'],
  hi: ['Le hindi s’écrit en devanagari, de gauche à droite.', 'Le verbe se place en fin de phrase : « मैं … रहता हूँ ».'],
  zh: ['Le mandarin a quatre tons et un ton neutre : le ton change le sens du mot.', 'Le pinyin note la prononciation ; les tons sont marqués par les accents (ā á ǎ à).'],
  ja: ['Le japonais combine trois écritures : hiragana, katakana et kanji.', 'La forme en « -masu / desu » est la forme polie à utiliser par défaut.'],
};
