# Modèle de données

Base locale unique (clé `mlb.db.v1`, AsyncStorage sur mobile, localStorage sur le web), définie dans [`src/lib/db.ts`](../src/lib/db.ts). Le schéma est celui d'un futur back-end.

| Table | Clé | Contenu |
|---|---|---|
| `profiles` | id | prénom, année de naissance, langue de référence et cible, objectif, filière, niveau de départ, compagnon, réglages, contrôle parental (`pinHash`, `dailyMinutes`, `micAllowed`) |
| `progress[profileId][langue]` | — | unités terminées (étoiles, meilleur score, date), cartes de révision (boîte Leitner, échéance), XP, résultat du test de positionnement |
| `attempts[profileId]` | ts | journal des tentatives : type (`listen`, `speak`, `write`, `order`, `dialogue`, `placement`), phrase, score (2000 dernières) |
| `usage[profileId]` | — | série de jours, minutes du jour, objectif quotidien |

## Base de simulation

[`src/data/simulation.ts`](../src/data/simulation.ts) génère de façon déterministe 5 profils avec historique (bouton « Découvrir avec des profils de démonstration » ou Profil › Profils démo) :

| Profil | Âge | Apprend | Objectif | Particularité |
|---|---|---|---|---|
| Yasmine | 9 | anglais | formation | enfant, code parental 1234, limite 20 min |
| Adam | 15 | espagnol | formation | ado, code 1234, A1 terminé |
| Salma | 24 | japonais | mise à niveau | test de positionnement A2 |
| Karim | 42 | anglais | pro · logistique | B2, négociation |
| Hélène | 35 | chinois | pro · accueil | interface en anglais, audio ralenti |
