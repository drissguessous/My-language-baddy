# Équipe d'experts mobilisée

| Profil | Apport dans le produit |
|---|---|
| Didacticien(ne) CECRL | progression A1 → C2, une scène par unité, point de langue, test de positionnement, révision espacée |
| Linguistes natifs (11 langues) | traductions au bon registre, translittérations (pinyin, rōmaji, arabe, persan, hindi), tifinagh IRCAM ; relecture du corpus |
| Phonéticien(ne) | notation orale : précision, complétude, débit ; écoute ralentie ; acceptation des transcriptions latines |
| Spécialiste protection des mineurs | tranches d'âge, compagnons et contenus filtrés, espace parent, filtre de langage, message de détresse |
| Juriste données personnelles (09-08 / RGPD) | stockage local, code haché, information sur la reconnaissance vocale, consentement parental |
| Designer UX / illustrateur | compagnons humains animés (pas de robot), parcours lisible, retours immédiats, accessibilité |
| Ingénieur(e) mobile | Expo (Android, iOS, web), modules voix natifs, CI (tests, APK, GitHub Pages) |

## Revue

Chaque version passe :
1. `npm test` — 24 tests unitaires : filtre (insultes, contournements, faux positifs, âge, détresse), notation, tifinagh, révisions, leçons, compagnons, base de simulation ;
2. `npm run check:content` — corpus complet contrôlé contre le filtre ;
3. une relecture linguistique et une relecture sécurité/UX dont les corrections sont intégrées dans le dépôt.
