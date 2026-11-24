// Paramètres des objectifs et des quiz (valeurs par défaut, modifiables sans toucher au code des écrans).

export const GOAL_PARAMS = {
  dailyMinutes: 15,                       // temps quotidien visé par défaut
  dailyChoices: [5, 10, 15, 20, 30, 45, 60],
  weeklyDays: 5,                          // jours de pratique visés par semaine
  weeklyChoices: [3, 4, 5, 6, 7],
  deadlineMonths: [1, 3, 6, 12],          // échéances proposées
  minutesPerUnit: 12,                     // durée estimée d'une unité (leçon + dialogue), pour le calcul du rythme
  sessionMaxMinutes: 30,                  // plafond d'une séance comptée (évite de compter un écran resté ouvert)
  historyDays: 90,                        // historique conservé (minutes par jour)
  paceWindowDays: 14,                     // fenêtre de mesure du rythme réel
};

export const QUIZ_PARAMS = {
  questions: 10,                          // questions par quiz
  passScore: 80,                          // score de réussite (%)
  write: { kid: 1, teen: 2, adult: 2 },   // questions d'écriture par quiz
  levelUnitsMin: 1,                       // unités ouvertes nécessaires pour proposer le quiz d'un niveau
};
