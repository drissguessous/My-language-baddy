# My Language Baddy

Application mobile (Android, iOS) et web pour apprendre une langue **à l'oral et à l'écrit**, du niveau **A1 au C2** du CECRL, avec un **compagnon humain illustré** choisi selon l'âge de l'apprenant.

Trois objectifs : **formation** (parcours complet), **mise à niveau** (test de positionnement puis reprise au bon niveau) et **professionnalisation** (vente, accueil, tech, soins, logistique).

## Ce que fait l'application

| | |
|---|---|
| **11 langues** | anglais, français, espagnol, italien, portugais, arabe standard, amazigh (tamazight, tifinagh + latin), persan, hindi, chinois mandarin, japonais |
| **Écoute** | **voix neuronales intégrées** (2 par langue, sous licence compatible avec un usage commercial), chaque enregistrement vérifié par Whisper ; l'arabe et l'amazigh utilisent la voix de l'appareil faute de modèle commercialisable ([rapport](docs/VOIX.md)) ; sinon voix de l'appareil, avec un guide adapté au système détecté (Android, Samsung, iPhone, Windows, Mac) pour l'améliorer |
| **Analyse de la voix** | reconnaissance vocale (Android, iOS, Chrome/Edge) puis notation : précision, complétude, **débit** mesuré via le niveau sonore du micro ; mots justes, approximatifs ou manqués surlignés |
| **Écrit** | traduction libre, mots à remettre dans l'ordre ; pinyin, rōmaji et translittération acceptés |
| **Dialogues** | chaque unité est une scène jouée avec le compagnon : il parle, vous répondez au micro |
| **Révisions** | répétition espacée (Leitner) alimentée par chaque tentative |
| **Pédagogie par âge** | 6-12 ans : écoute avant l'écrit, cartes illustrées, autocollants ; 13-17 ans : point de langue guidé, défis ; adultes : grammaire explicite, auto-évaluation CECRL ; récupération finale et révisions espacées pour tous ([fondements](docs/PEDAGOGIE.md)) |
| **Mode professeur** | ton Sérieux / Normal / Sympathique / Comique × intensité Un peu / Normal / Beaucoup ; le mode Sérieux relève la barre de réussite |
| **Compagnons** | 10 personnes illustrées (pas de robot), animées quand elles parlent : 2 pour les 6-12 ans, 3 pour les 13-17 ans, 5 pour les adultes |
| **Protection** | filtre de langage multilingue (grossièretés, insultes, propos haineux, sexe, drogues bloqués pour tous ; alcool, jeux d'argent, armes bloqués pour les mineurs), message de soutien en cas de mots de détresse, contenus et compagnons filtrés par âge, espace parent protégé par code (durée quotidienne, micro, compagnon, âge) |
| **Données** | tout reste sur l'appareil, aucun compte, aucun serveur |
| **Simulation** | 5 profils de démonstration avec historique réaliste (bouton sur l'écran d'accueil ou dans Profil) |

Contenu actuel : 20 unités × 6 répliques = **120 phrases dans 11 langues**, de A1 à C2 plus 5 filières métier. L'amazigh couvre pour l'instant l'A1 et le parcours enfants ; les niveaux supérieurs sont marqués « bientôt ».

## Démarrer

```bash
npm install
npm run web          # navigateur (Chrome ou Edge pour la reconnaissance vocale)
npx expo run:android # build de développement sur appareil Android
npx expo run:ios     # build de développement sur iPhone (Mac requis)
```

La reconnaissance vocale utilise un module natif : elle **ne fonctionne pas dans Expo Go** (l'application bascule alors en auto-évaluation). Utilisez un build de développement ou l'APK.

Vérifications : `npm run typecheck` et `npm run check:content` (le corpus ne doit déclencher aucun faux positif du filtre, et le filtre doit bloquer une liste de cas connus).

## Obtenir l'application

- **Android (APK)** : chaque push sur `main` lance le workflow *Android — APK* ; l'APK est téléchargeable dans l'onglet *Actions* (artefact `my-language-baddy-apk`). Un tag `v1.0.0` le publie aussi dans une *Release*.
- **Web** : le workflow *Web* publie sur GitHub Pages. À activer une fois : *Settings › Pages › Source : GitHub Actions*. Adresse : `https://drissguessous.github.io/My-language-baddy/`.
- **iPhone** : Apple impose un compte développeur. Avec [EAS](https://docs.expo.dev/build/introduction/) : `npx eas-cli@latest build -p ios --profile preview` (installation interne) ou `--profile production` puis `eas submit` pour TestFlight / App Store.

## Architecture

```
src/
  app/                 écrans (expo-router)
    welcome.tsx        inscription : âge, espace parent, langues, objectif, niveau, compagnon
    (tabs)/            Parcours · Pratiquer · Converser · Profil
    lesson/[id].tsx    leçon d'unité ou séance (review, listen, speak, write)
    dialogue/[id].tsx  scène jouée avec le compagnon
    placement.tsx      test de positionnement CECRL
    parental.tsx       espace parent
  components/          Avatar (SVG animé), éléments d'interface, composants voix
  data/                langues, compagnons, curriculum, corpus (phrases/), simulation
  lib/                 synthèse vocale, reconnaissance, notation, révisions, base locale, filtre
docs/                  équipe d'experts, sécurité, modèle de données, contenu
scripts/               contrôle automatique du corpus et du filtre
```

Documentation détaillée : [docs/PEDAGOGIE.md](docs/PEDAGOGIE.md), [docs/VOIX.md](docs/VOIX.md), [docs/AUDIT_TRADUCTIONS.md](docs/AUDIT_TRADUCTIONS.md), [docs/REVUE_TRADUCTIONS.md](docs/REVUE_TRADUCTIONS.md), [docs/SECURITE.md](docs/SECURITE.md), [docs/DATA_MODEL.md](docs/DATA_MODEL.md), [docs/CONTENU.md](docs/CONTENU.md), [docs/EXPERTS.md](docs/EXPERTS.md).

## Contrôles automatiques (GitHub Actions)

| Workflow | Rôle |
|---|---|
| Web | types, 36 tests, contrôle du corpus, publication GitHub Pages |
| Android — APK | APK publié dans une Release à chaque version |
| Voix | génère les voix candidates sous licence commerciale (Kokoro, Piper), vérifie chaque clip avec Whisper, garde les 2 meilleures voix par langue |
| Audit des traductions | rétro-traduction NLLB-200 et similarité LaBSE de chaque phrase, rapport des écarts |
