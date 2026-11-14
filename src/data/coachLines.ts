import type { AgeBand } from './companions';

// Répliques du compagnon selon la tranche d'âge et le ton choisi dans le mode professeur.
// Tutoiement pour les enfants et les ados, vouvoiement pour les adultes.
// Le niveau (un peu / normal / beaucoup) règle la fréquence : voir src/lib/teacher.ts.
// Toutes ces répliques sont pré-enregistrées (scripts/export-corpus.ts).

export type Tone = 'serious' | 'normal' | 'friendly' | 'funny';
export type Intensity = 1 | 2 | 3;
export type CoachCat =
  | 'start' | 'discover' | 'listen' | 'order' | 'speak' | 'write'
  | 'cheer' | 'nudge' | 'end_good' | 'end_retry' | 'extra';

export const TONES: { id: Tone; label: string; text: string }[] = [
  { id: 'serious', label: 'Sérieux', text: 'Précis et exigeant : corrections détaillées, barre de réussite plus haute.' },
  { id: 'normal', label: 'Normal', text: 'Clair et neutre, comme un bon professeur.' },
  { id: 'friendly', label: 'Sympathique', text: 'Chaleureux et encourageant.' },
  { id: 'funny', label: 'Comique', text: 'De l’humour et des clins d’œil pour apprendre en riant.' },
];
export const INTENSITIES: { id: Intensity; label: string }[] = [
  { id: 1, label: 'Un peu' }, { id: 2, label: 'Normal' }, { id: 3, label: 'Beaucoup' },
];

type Lib = Record<Tone, Record<CoachCat, string[]>>;

const KID: Lib = {
  serious: {
    start: ['On commence. Écoute bien.', 'On y va ? On travaille.'],
    discover: ['Écoute, puis regarde.', 'Écoute bien chaque mot.'],
    listen: ['Écoute et choisis.', 'Écoute bien, puis touche la bonne carte.'],
    order: ['Mets les mots dans le bon ordre.', 'Range les mots.'],
    speak: ['À toi. Répète clairement.', 'Répète la phrase.'],
    write: ['Écris la phrase.', 'Écris doucement, lettre par lettre.'],
    cheer: ['C’est juste.', 'Bien.', 'Correct.'],
    nudge: ['Pas encore. Écoute à nouveau.', 'Recommence.', 'Regarde bien la réponse.'],
    end_good: ['Leçon réussie. Bon travail.', 'Tu as réussi la leçon.'],
    end_retry: ['Leçon terminée. On revoit les phrases difficiles demain.', 'On refera cette leçon pour progresser.'],
    extra: ['Répéter souvent, c’est comme ça qu’on retient.', 'Écoute d’abord, parle ensuite.', 'Chaque jour un peu, c’est le secret.', 'Articule bien chaque mot.'],
  },
  normal: {
    start: ['C’est parti pour la leçon !', 'Allez, on commence !'],
    discover: ['Écoute cette phrase.', 'Voici une nouvelle phrase.'],
    listen: ['Écoute et choisis la bonne carte.', 'Qu’est-ce que tu entends ?'],
    order: ['Remets les mots dans l’ordre.', 'À toi de ranger les mots.'],
    speak: ['À toi de parler !', 'Répète après moi.'],
    write: ['Écris la phrase.', 'À toi d’écrire.'],
    cheer: ['Bravo !', 'Très bien !', 'Super !'],
    nudge: ['Presque ! Réessaie.', 'Écoute encore une fois.', 'Pas grave, on continue.'],
    end_good: ['Bravo, leçon réussie !', 'Super travail aujourd’hui !'],
    end_retry: ['Leçon terminée ! On revoit les phrases difficiles bientôt.', 'Bien essayé ! On recommencera.'],
    extra: ['Tu progresses à chaque leçon.', 'Répète la phrase à la maison !', 'Montre ce que tu as appris à quelqu’un.', 'Encore une et tu seras imbattable.'],
  },
  friendly: {
    start: ['Coucou ! On joue avec les mots ?', 'Quel plaisir de te voir ! On commence ?'],
    discover: ['Écoute bien, c’est une jolie phrase !', 'Ouvre grand tes oreilles !'],
    listen: ['Écoute et trouve la bonne image !', 'Tu entends quoi ? Touche la bonne carte !'],
    order: ['Range les mots comme un puzzle !', 'On fait un petit puzzle de mots ?'],
    speak: ['À toi ! Dis-le avec ta plus belle voix !', 'Vas-y, je t’écoute !'],
    write: ['À toi d’écrire, prends ton temps !', 'Écris doucement, tu vas y arriver !'],
    cheer: ['Bravo, tu assures !', 'Waouh, trop bien !', 'Quelle réussite !'],
    nudge: ['Presque ! On réessaie ensemble ?', 'Pas grave du tout, écoute encore !', 'Tu y es presque, courage !'],
    end_good: ['Bravo ! Tu as gagné une étoile !', 'Quelle belle leçon ! Bravo à toi !'],
    end_retry: ['Bien joué d’avoir essayé ! On recommencera ensemble.', 'Tu as bien travaillé ! La prochaine fois, ce sera encore mieux.'],
    extra: ['Tu sais quoi ? Tu apprends super vite !', 'Chante la phrase, c’est encore plus facile !', 'Fais un grand sourire, tu le mérites !', 'Tope là, bravo !'],
  },
  funny: {
    start: ['Attache ta ceinture, la fusée des mots décolle !', 'Trois, deux, un… c’est parti, moussaillon !'],
    discover: ['Ouvre tes oreilles de lapin !', 'Écoute bien, cette phrase est toute neuve !'],
    listen: ['Écoute et attrape la bonne carte !', 'Détective des oreilles, à toi de jouer !'],
    order: ['Oh non, les mots se sont mélangés ! Range-les vite !', 'Les mots font la sieste en désordre. Réveille-les dans le bon ordre !'],
    speak: ['À toi ! Parle comme un super-héros !', 'Micro ouvert : tu es la star !'],
    write: ['Tes doigts magiques vont écrire la phrase !', 'Écris, artiste des mots !'],
    cheer: ['Waouh ! Tu as des super-pouvoirs !', 'Bingo ! Même mon chat applaudit !', 'Trop fort ! Tu mérites une médaille en chocolat !'],
    nudge: ['Oups ! Même les pirates se trompent. Réessaie !', 'Presque ! Mon perroquet aussi a besoin de deux essais.', 'Raté, mais c’est rigolo ! On recommence ?'],
    end_good: ['Victoire ! Tu règnes sur les mots !', 'Mission réussie, capitaine !'],
    end_retry: ['Fin de l’aventure ! La prochaine fois, on bat le record.', 'On a bien rigolé ! On reviendra pour gagner.'],
    extra: ['Tu sais pourquoi les poissons sont bons en langues ? Parce qu’ils nagent dans les mots !', 'Ton cerveau grandit comme un gâteau au four !', 'Hop, une petite danse de la victoire !', 'Même les dinosaures apprenaient une phrase par jour. Enfin, je crois !'],
  },
};

const TEEN: Lib = {
  serious: {
    start: ['On commence. Objectif : maîtriser cette scène.', 'Concentration. On travaille cette unité à fond.'],
    discover: ['Écoute la phrase, puis lis-la.', 'Repère le sens et la prononciation.'],
    listen: ['Écoute et choisis la bonne réponse.', 'Compréhension orale : une seule écoute si tu peux.'],
    order: ['Reconstitue la phrase.', 'Remets la structure dans l’ordre.'],
    speak: ['Production orale. Répète avec précision.', 'Vise l’intonation exacte.'],
    write: ['Production écrite. Attention à l’orthographe.', 'Écris la phrase sans aide.'],
    cheer: ['Correct.', 'Bonne réponse.', 'Exact.'],
    nudge: ['Incorrect. Compare avec la réponse.', 'Erreur. Reprends la phrase modèle.', 'Pas encore. Analyse ce qui manque.'],
    end_good: ['Unité validée. Niveau solide.', 'Objectif atteint.'],
    end_retry: ['Unité terminée, mais à consolider. Les erreurs reviendront en révision.', 'Résultat insuffisant. On reprend demain.'],
    extra: ['Réviser demain double tes chances de retenir.', 'La régularité bat l’intensité.', 'Imite le rythme de la phrase, pas seulement les mots.', 'Repère les mots qui reviennent d’une phrase à l’autre.'],
  },
  normal: {
    start: ['C’est parti pour une nouvelle unité.', 'On attaque cette scène ?'],
    discover: ['Voici une nouvelle phrase.', 'Écoute et regarde.'],
    listen: ['Écoute et choisis.', 'Qu’est-ce que tu comprends ?'],
    order: ['Remets les mots dans l’ordre.', 'Reconstitue la phrase.'],
    speak: ['À toi de parler.', 'Répète la phrase.'],
    write: ['À toi d’écrire.', 'Écris la phrase.'],
    cheer: ['Bien joué !', 'Exact !', 'Très bien !'],
    nudge: ['Presque. Réessaie.', 'Regarde la bonne réponse.', 'Pas grave, la suite.'],
    end_good: ['Unité réussie, bien joué !', 'Belle série !'],
    end_retry: ['Unité terminée. Les phrases difficiles reviendront en révision.', 'On refera un tour pour consolider.'],
    extra: ['Tu peux rejouer la scène en dialogue.', 'Une révision demain et c’est acquis.', 'Essaie de dire la phrase sans regarder.', 'Ta série de jours continue !'],
  },
  friendly: {
    start: ['Hey ! On attaque une nouvelle scène ?', 'Content de te revoir ! On s’y met ?'],
    discover: ['Écoute ça, c’est utile !', 'Nouvelle phrase, tu vas l’adorer.'],
    listen: ['Écoute et choisis, tu gères.', 'À l’oreille, qu’est-ce que ça donne ?'],
    order: ['Petit puzzle de mots, à toi !', 'Remets tout ça dans l’ordre.'],
    speak: ['À toi, lance-toi !', 'Vas-y, je t’écoute.'],
    write: ['À toi d’écrire, tranquille.', 'Écris-la, prends ton temps.'],
    cheer: ['Nickel, bien joué !', 'Trop fort !', 'Carrément bien !'],
    nudge: ['Pas mal, on retente ?', 'Presque ! Tu vas l’avoir.', 'Pas de stress, on continue.'],
    end_good: ['Unité validée, bravo !', 'Franchement, super boulot !'],
    end_retry: ['Bien joué d’avoir tenu jusqu’au bout ! On consolide bientôt.', 'C’est en essayant qu’on progresse. On reviendra.'],
    extra: ['Tu progresses vraiment, ça se voit.', 'Essaie de placer la phrase avec tes potes.', 'Écoute une chanson dans cette langue ce soir.', 'Ta série de jours est impressionnante !'],
  },
  funny: {
    start: ['Nouvelle quête débloquée ! On y va ?', 'Chargement du cerveau… cent pour cent. C’est parti !'],
    discover: ['Nouvel objet légendaire : une phrase !', 'Écoute bien, c’est du contenu exclusif.'],
    listen: ['Mode détective activé. Écoute et choisis !', 'Tes oreilles passent au niveau supérieur.'],
    order: ['Les mots ont fait la fête, ils sont en vrac. Range-les !', 'Puzzle de mots, difficulté : légendaire.'],
    speak: ['Micro ouvert. Fais ton meilleur accent !', 'À toi ! Imagine que tu es dans une série.'],
    write: ['Clavier en feu ! Écris la phrase.', 'Écris-la comme si tu envoyais un message important.'],
    cheer: ['Coup critique ! Bonne réponse !', 'Combo réussi !', 'Même le boss final est impressionné !'],
    nudge: ['Respawn ! Nouvelle tentative.', 'Raté, mais c’était stylé. On recommence ?', 'Bug détecté. Correction en cours, réessaie.'],
    end_good: ['Niveau terminé ! Succès débloqué.', 'Victoire royale !'],
    end_retry: ['Fin de partie. Prochaine run, tu bats ton record.', 'Game over… mais avec une vie bonus en révision.'],
    extra: ['Fun fact : ton cerveau adore les révisions espacées.', 'Astuce de pro : parle à ton miroir, il ne juge pas.', 'Si tu répètes trois fois, ça devient un réflexe.', 'Ton accent passe de débutant à presque pro.'],
  },
};

const ADULT: Lib = {
  serious: {
    start: ['Commençons. Objectif : maîtriser cette situation.', 'Nous entamons l’unité. Concentration.'],
    discover: ['Écoutez attentivement, puis observez la structure.', 'Notez le sens et la prononciation.'],
    listen: ['Compréhension orale : choisissez la réponse exacte.', 'Écoutez et identifiez le sens.'],
    order: ['Reconstituez la phrase.', 'Rétablissez l’ordre syntaxique.'],
    speak: ['Production orale : reproduisez la phrase avec précision.', 'Soignez l’intonation et l’articulation.'],
    write: ['Production écrite : rédigez la phrase sans aide.', 'Attention à l’orthographe et à la ponctuation.'],
    cheer: ['Correct.', 'Exact.', 'Réponse juste.'],
    nudge: ['Incorrect. Comparez avec le modèle.', 'Inexact. Analysez l’écart.', 'Erreur. Reprenez la phrase modèle.'],
    end_good: ['Unité validée. Résultat satisfaisant.', 'Objectif atteint.'],
    end_retry: ['Unité terminée, résultat à consolider. Les points faibles reviendront en révision.', 'Résultat insuffisant. Nous reprendrons ces phrases.'],
    extra: ['La récupération active est plus efficace que la relecture.', 'Espacez vos révisions : demain, puis dans quelques jours.', 'Travaillez les phrases entières, pas les mots isolés.', 'Enregistrez-vous et comparez avec le modèle.'],
  },
  normal: {
    start: ['Commençons cette unité.', 'Voici la situation du jour.'],
    discover: ['Voici une nouvelle phrase.', 'Écoutez, puis lisez.'],
    listen: ['Écoutez et choisissez.', 'Que signifie cette phrase ?'],
    order: ['Remettez les mots dans l’ordre.', 'Reconstituez la phrase.'],
    speak: ['À vous de parler.', 'Répétez la phrase.'],
    write: ['À vous d’écrire.', 'Écrivez la phrase.'],
    cheer: ['Très bien.', 'Exact.', 'Parfait.'],
    nudge: ['Pas tout à fait. Réessayez.', 'Voici la bonne réponse.', 'Presque. Continuons.'],
    end_good: ['Unité réussie, bravo.', 'Très bon travail.'],
    end_retry: ['Unité terminée. Les phrases difficiles reviendront en révision.', 'Nous consoliderons ces points.'],
    extra: ['Rejouez la scène en dialogue pour l’ancrer.', 'Une révision demain fixera ces phrases.', 'Essayez de reformuler la phrase à votre façon.', 'Réutilisez une phrase dans la journée.'],
  },
  friendly: {
    start: ['Quel plaisir de vous retrouver. On commence ?', 'Bonjour ! Place à une nouvelle situation.'],
    discover: ['Écoutez cette phrase, elle vous servira.', 'Une nouvelle phrase, très utile au quotidien.'],
    listen: ['Écoutez et choisissez, vous allez y arriver.', 'Fiez-vous à votre oreille.'],
    order: ['Un petit puzzle de mots pour vous.', 'Remettez les mots en ordre, tranquillement.'],
    speak: ['À vous, lancez-vous !', 'Je vous écoute, prenez votre temps.'],
    write: ['À vous d’écrire, sans pression.', 'Écrivez la phrase à votre rythme.'],
    cheer: ['Bravo, c’est très bien !', 'Excellent, continuez !', 'Superbe !'],
    nudge: ['Presque ! On réessaie ?', 'Ce n’est rien, vous progressez.', 'Bonne tentative, regardez la réponse.'],
    end_good: ['Bravo, quelle belle progression !', 'Unité réussie, beau travail.'],
    end_retry: ['Merci pour vos efforts ! Nous consoliderons ensemble.', 'Chaque essai compte. On reprendra bientôt.'],
    extra: ['Vous progressez vraiment, continuez ainsi.', 'Pensez à placer cette phrase dans une vraie conversation.', 'Un petit quart d’heure par jour fait des merveilles.', 'Votre prononciation s’améliore nettement.'],
  },
  funny: {
    start: ['En piste ! Les mots n’attendent que vous.', 'Mesdames et messieurs, la leçon commence !'],
    discover: ['Nouvelle phrase, fraîchement livrée.', 'Écoutez bien, c’est garanti sans calories.'],
    listen: ['Tendez l’oreille, sans la froisser.', 'Écoutez et choisissez, l’oreille est votre meilleure alliée.'],
    order: ['Les mots ont pris un café de trop, ils sont dispersés.', 'Remettez de l’ordre, comme dans un tiroir à chaussettes.'],
    speak: ['Micro à vous. Imaginez un tonnerre d’applaudissements.', 'À vous ! Prenez votre plus belle voix de radio.'],
    write: ['À vos claviers, ce n’est pas une dictée de primaire, promis.', 'Écrivez, votre stylo virtuel est prêt.'],
    cheer: ['Bravo ! Je sors les confettis.', 'Exact ! Vous méritez une ola.', 'Magnifique, même mon café est impressionné.'],
    nudge: ['Raté, mais avec panache. On recommence ?', 'Presque ! Même les grands chefs ratent parfois la mayonnaise.', 'Petite sortie de route, on remet le contact.'],
    end_good: ['Unité réussie ! Champagne… sans alcool, bien sûr.', 'Bravo, rideau et ovation !'],
    end_retry: ['Fin de l’épisode. La saison deux sera meilleure.', 'Pas de panique, Rome ne s’est pas faite en un jour.'],
    extra: ['Une langue, c’est comme le vélo : on tombe, puis on file.', 'Votre cerveau vient de faire un peu de musculation.', 'Encore un effort et vous commanderez un café comme un local.', 'Promis, l’accent finit toujours par arriver.'],
  },
};

export const COACH_LINES: Record<AgeBand, Lib> = { kid: KID, teen: TEEN, adult: ADULT };

/** Ton et intensité par défaut selon l'âge. */
export const DEFAULT_TEACHER: Record<AgeBand, { tone: Tone; intensity: Intensity }> = {
  kid: { tone: 'friendly', intensity: 2 },
  teen: { tone: 'friendly', intensity: 2 },
  adult: { tone: 'normal', intensity: 2 },
};

export function allCoachTexts(): string[] {
  const out = new Set<string>();
  for (const band of Object.values(COACH_LINES)) for (const tone of Object.values(band)) for (const list of Object.values(tone)) list.forEach((t) => out.add(t));
  return [...out];
}
