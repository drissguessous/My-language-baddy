# Pédagogie et mode professeur

Les choix pédagogiques sont codés dans [`src/data/pedagogy.ts`](../src/data/pedagogy.ts) (profil par âge),
[`src/lib/lesson.ts`](../src/lib/lesson.ts) (déroulé des leçons) et [`src/lib/teacher.ts`](../src/lib/teacher.ts) (mode professeur).
Chaque choix renvoie à un résultat de recherche ou à un référentiel.

## Déroulé d'une leçon

1. **Découverte** de chaque phrase : écoute normale ou lente, transcription, traduction.
2. **Compréhension immédiate** : choisir le sens, l'écrit entendu ou, chez l'enfant, l'image.
3. **Point de langue** : guidé (ados) ou explicite (adultes), avec des phrases à observer.
4. **Structuration** : remettre les mots dans l'ordre.
5. **Production orale** analysée par reconnaissance vocale.
6. **Production écrite**.
7. **Récupération finale** : deux phrases redemandées sans aide.
8. **Auto-évaluation « je peux… »** (ados, adultes) et révisions espacées des phrases ratées.

## Profil par âge

| | 6-12 ans | 13-17 ans | Adultes |
|---|---|---|---|
| Écoute avant l'écrit | oui (le texte apparaît après l'écoute) | oui | non |
| Compréhension | cartes illustrées | traduction | traduction |
| Point de langue | aucun métalangage | guidé (repérage) | explicite (règle + exemples) |
| Écriture | 1 exercice court, aucun dans les écritures non latines | 2 (1 en écriture non latine) | 2 |
| Retour sur la prononciation | étoiles | score détaillé | score détaillé |
| Récompense | autocollants | défis, séries | progression, objectifs CECRL |
| Vitesse audio par défaut | 0,85 | 0,95 | 1 |
| Adresse | tutoiement | tutoiement | vouvoiement |

## Fondements

| Choix | Résultat de recherche |
|---|---|
| Récupération finale, exercices de rappel plutôt que relecture | Roediger & Karpicke (2006), *Test-enhanced learning*, Psychological Science 17(3) |
| Révisions espacées (boîtes de Leitner) | Cepeda et al. (2006), *Distributed practice in verbal recall tasks*, Psychological Bulletin 132(3) |
| Grammaire explicite chez l'adulte | Norris & Ortega (2000), Language Learning 50(3) ; Spada & Tomita (2010), Language Learning 60(2) |
| Plus d'exposition orale chez l'enfant, plus d'analyse chez l'adulte | Muñoz (éd., 2006), *Age and the Rate of Foreign Language Learning*, Multilingual Matters : à exposition égale, les apprenants plus âgés progressent plus vite en contexte scolaire, les plus jeunes ont besoin d'une exposition longue |
| Équilibre écoute / production / langue / aisance | Nation (2007), *The four strands*, Innovation in Language Learning and Teaching 1(1) |
| Objectifs « je peux » | Conseil de l'Europe (2020), *CECR – Volume complémentaire* |
| Retours portant sur la tâche plutôt que sur la personne | Hattie & Timperley (2007), *The power of feedback*, Review of Educational Research 77(1) |
| Humour modéré et lié au contenu (mode Comique) | Banas, Dunbar, Rodriguez & Liu (2011), *A review of humor in educational settings*, Communication Education 60(1) |

## Mode professeur

Réglable dans **Profil › Mode professeur** : ton × intensité.

| Ton | Effet |
|---|---|
| Sérieux | consignes précises, retours factuels ; barre de réussite relevée (« bien » à partir de 70, 75 ou 80 selon l'intensité) |
| Normal | consignes et retours neutres |
| Sympathique | encouragements chaleureux |
| Comique | humour adapté à l'âge (jeux pour les enfants, culture jeu vidéo pour les ados, clins d'œil pour les adultes) |

| Intensité | Le compagnon intervient… |
|---|---|
| Un peu | seulement pour féliciter, corriger et conclure |
| Normal | aussi pour donner les consignes |
| Beaucoup | consignes, retours et une anecdote ou astuce une fois sur deux après une bonne réponse |

Valeurs par défaut : Sympathique · Normal pour les moins de 18 ans, Normal · Normal pour les adultes.
Toutes les répliques ([`src/data/coachLines.ts`](../src/data/coachLines.ts)) sont tutoyées pour les mineurs, vouvoyées pour les adultes,
neutres en genre, filtrées par le contrôle de langage (tests automatiques) et pré-enregistrées avec les voix intégrées.
