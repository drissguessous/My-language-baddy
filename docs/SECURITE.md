# Sécurité, âge et vie privée

## Politique par tranche d'âge

| | Enfant (6-12 ans) | Ado (13-17 ans) | Adulte |
|---|---|---|---|
| Création du profil | par un parent : code à 4 chiffres + consentement obligatoires | code parental recommandé (facultatif) | libre |
| Compagnons | Lina, Yanis | Inès, Omar, Mei | Nadia, Karim, Elena, Raj, Amina |
| Contenus | parcours enfants, A1-A2 | jusqu'à C2 ; filières métier si objectif « pro » | tout |
| Filtre de langage | insultes, haine, sexe, drogues **+ alcool, jeux d'argent, armes** | idem enfant | insultes, haine, sexe, drogues |
| Espace parent | durée quotidienne (20 min par défaut), micro, compagnon, âge, changement de profil | idem si un code existe | — |

Moins de 6 ans : inscription refusée. Changer l'année de naissance d'un profil protégé exige le code ; le compagnon est réaligné automatiquement sur la nouvelle tranche.

## Filtre de langage

[`src/lib/safety/filter.ts`](../src/lib/safety/filter.ts) et [`lexicon.ts`](../src/lib/safety/lexicon.ts) s'appliquent à **tout ce que l'apprenant produit** : prénom, réponses écrites, transcriptions vocales (affichage en direct compris). Un terme interdit n'est jamais affiché : il est remplacé par `•••` et le compagnon rappelle la règle avec un message adapté à l'âge.

- Normalisation : majuscules, accents, leetspeak (`sh1t`), lettres répétées (`fuuuck`), lettres espacées (`f u c k`), variantes de l'alphabet arabe/persan.
- Entrées limitées à une langue (`fr:con`) pour éviter les faux positifs (« con » = « avec » en espagnol et en italien).
- Mots de détresse (suicide, harcèlement…) : jamais bloqués ; message de soutien orientant vers un adulte de confiance et les urgences.
- Garde-fous automatiques : `npm test` vérifie que les 120 phrases × 11 langues ne déclenchent aucun faux positif et qu'une liste d'insultes et de contournements est bien bloquée.

Le lexique doit être enrichi et validé par des locuteurs natifs, en particulier pour l'amazigh, le persan et le hindi.

## Vie privée (loi 09-08 / CNDP, RGPD)

- Aucun compte, aucun serveur : profils, progression et historique restent dans le stockage local de l'appareil ; « Effacer toutes les données » supprime tout.
- Le code parental est stocké haché, jamais en clair.
- **Reconnaissance vocale** : selon l'appareil, l'audio peut être traité par le service du système (Google sur Android, Apple sur iOS, le navigateur sur le web). C'est expliqué au parent à l'inscription ; le micro peut être coupé dans l'espace parent (les exercices oraux passent alors en auto-évaluation).
- Avant une publication sur les stores : déclaration CNDP si des données sont un jour centralisées, fiche « Data safety » (Google Play) et « App Privacy » (Apple), catégorie *Kids* le cas échéant.
