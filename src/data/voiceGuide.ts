export type OsKind = 'android' | 'samsung' | 'ios' | 'windows' | 'macos' | 'chromeos' | 'linux' | 'other';

/** Détection du système à partir de l'agent utilisateur (version web). */
export function detectFromUA(ua: string, maxTouchPoints = 0): OsKind {
  if (/SM-|Samsung/i.test(ua) && /Android/i.test(ua)) return 'samsung';
  if (/Android/i.test(ua)) return 'android';
  if (/iPhone|iPad|iPod/i.test(ua) || (/Macintosh/i.test(ua) && maxTouchPoints > 1)) return 'ios';
  if (/Windows/i.test(ua)) return 'windows';
  if (/CrOS/i.test(ua)) return 'chromeos';
  if (/Macintosh|Mac OS X/i.test(ua)) return 'macos';
  if (/Linux/i.test(ua)) return 'linux';
  return 'other';
}

export const OS_LABEL: Record<OsKind, string> = {
  android: 'Android', samsung: 'Samsung Galaxy (Android)', ios: 'iPhone / iPad', windows: 'Windows',
  macos: 'Mac', chromeos: 'Chromebook', linux: 'Linux', other: 'votre appareil',
};

export interface VoiceGuide { steps: string[]; note?: string; source: string }

// Chemins vérifiés dans la documentation officielle (voir docs/VOIX.md, section « Sources »).
export const VOICE_GUIDE: Record<OsKind, VoiceGuide> = {
  android: {
    steps: [
      'Ouvrez Paramètres › Accessibilité › Synthèse vocale (« Text-to-speech output »).',
      'Moteur préféré : choisissez « Services vocaux Google » (Speech Services by Google).',
      'Touchez l’icône ⚙ du moteur › Installer les données vocales, puis la langue voulue.',
      'Choisissez une voix de la liste et téléchargez-la (de préférence en Wi-Fi).',
      'Revenez ici et touchez « Actualiser » : la voix apparaît dans « Voix de l’appareil ».',
    ],
    note: 'Selon la marque, le menu peut se trouver dans Paramètres › Système › Langues et saisie.',
    source: 'https://support.google.com/accessibility/android/answer/6006983',
  },
  samsung: {
    steps: [
      'Ouvrez Paramètres › Gestion globale › Synthèse vocale.',
      'Moteur préféré : choisissez le moteur Samsung ou Google.',
      'Touchez l’icône ⚙ à côté du moteur › Installer les données vocales.',
      'Téléchargez la langue voulue (icône de téléchargement), puis choisissez-la dans « Langue ».',
      'Revenez ici et touchez « Actualiser ».',
    ],
    source: 'https://www.samsung.com/us/support/answer/ANS10003701/',
  },
  ios: {
    steps: [
      'Ouvrez Réglages › Accessibilité › Lire et énoncer (iOS 17 : « Contenu énoncé ») › Voix.',
      'Choisissez la langue, puis une voix marquée « Premium » (ou « Améliorée » à défaut).',
      'Touchez-la pour la télécharger, puis revenez ici et touchez « Actualiser ».',
    ],
    note: 'Les voix « Siri » ne sont pas utilisables par les applications.',
    source: 'https://www.comaps.app/news/ios-hq-voices/',
  },
  windows: {
    steps: [
      'Ouvrez Paramètres › Heure et langue › Voix.',
      'Section « Gérer les voix » › Ajouter des voix, puis choisissez la langue.',
      'Sinon : Heure et langue › Langue et région › Ajouter une langue, en cochant « Synthèse vocale ».',
      'Rechargez cette page. Astuce : le navigateur Microsoft Edge propose des voix naturelles en ligne.',
    ],
    source: 'https://geekrewind.com/how-to-install-text-to-speech-voices-in-windows-11-speech-settings/',
  },
  macos: {
    steps: [
      'Menu Apple › Réglages Système › Accessibilité › Lire et énoncer.',
      'Cliquez sur le bouton ⓘ à côté de « Voix du système ».',
      'Choisissez la langue, puis la voix, et cliquez sur Télécharger.',
      'Rechargez cette page : la voix apparaît dans « Voix de l’appareil ».',
    ],
    source: 'https://support.apple.com/guide/mac-help/mchlp2290',
  },
  chromeos: {
    steps: ['Ouvrez les paramètres d’accessibilité du Chromebook, rubrique synthèse vocale, et installez la langue voulue.', 'Rechargez cette page.'],
    source: 'https://developer.mozilla.org/docs/Web/API/SpeechSynthesis',
  },
  linux: {
    steps: ['Les voix dépendent du navigateur. Chrome et Edge proposent des voix en ligne de bonne qualité.'],
    source: 'https://developer.mozilla.org/docs/Web/API/SpeechSynthesis',
  },
  other: {
    steps: ['Ouvrez les réglages d’accessibilité de l’appareil, rubrique synthèse vocale, et téléchargez une voix pour la langue étudiée.'],
    source: 'https://developer.mozilla.org/docs/Web/API/SpeechSynthesis',
  },
};
