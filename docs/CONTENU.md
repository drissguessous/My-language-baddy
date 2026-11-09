# Contenu pédagogique

- Référentiel : CECRL (A1 → C2), une unité = une scène de 6 répliques jouée avec le compagnon, plus un point de langue.
- Corpus : [`src/data/phrases/`](../src/data/phrases/), unités : [`src/data/curriculum.ts`](../src/data/curriculum.ts).
- Chaque leçon enchaîne : découverte (écoute normale/lente, transcription, traduction) → compréhension (sens, ou reconnaissance de l'écrit pour les écritures non latines) → remise en ordre → expression orale analysée → expression écrite.

| Niveau | Unités |
|---|---|
| Enfants | Couleurs & animaux |
| A1 | Saluer · Se présenter · Heures & prix · Au café · Demander son chemin |
| A2 | Faire des achats · Ma journée · À l'hôtel |
| B1 | Donner son avis · Entretien d'embauche |
| B2 | Négocier · Argumenter |
| C1 | Présenter en public |
| C2 | Nuances & registres (proverbes rendus par leur équivalent) |
| Métiers | Vente & affaires · Tourisme & accueil · Tech & numérique · Santé & soins · Logistique & international |

## Ajouter une unité

1. Ajouter 6 `P(id, rôle, textes, translittérations)` dans un fichier de `phrases/` (rôle `c` = compagnon, `l` = apprenant ; amazigh en latin IRCAM, converti automatiquement en tifinagh).
2. Déclarer l'unité dans `UNITS` (niveau, scène, rôle du compagnon, âge minimum).
3. `npm test` : l'unité doit être complète et ne déclencher aucun faux positif du filtre.

## Validation linguistique

Traductions relues par un panel (voir [EXPERTS.md](EXPERTS.md)). L'amazigh reste à valider par un locuteur natif (IRCAM) avant publication ; les niveaux A2+ en amazigh sont à produire avec lui, idéalement avec des enregistrements audio natifs, car peu d'appareils ont une voix amazighe.
