# Revue des phrases signalées par l'audit (14/11/2026)

Chaque phrase signalée dans `AUDIT_TRADUCTIONS.md` a été examinée à partir des preuves du rapport
(similarité LaBSE, rétro-traduction NLLB). Seules les corrections justifiées par ces preuves ont été faites.

## Corrigées

| id | langue | avant | après | preuve |
|---|---|---|---|---|
| f1 | ar | مرحبًا، ماذا تريد؟ | مرحبًا، ماذا تطلب؟ | « تريد » rétro-traduit en « Que voulez-vous ? » : trop direct pour un serveur |
| a6 | ar | بالتعويض بمرونة… | بالتعويض عن ذلك بمرونة… | rétro « rémunération » : « التعويض » seul est ambigu |
| n4 | zh | 二十欧元。 | 一共二十欧元。 | rétro sans rapport : phrase trop elliptique pour « Ça fait » |
| f5 | zh | 请结账。 | 麻烦买单。 | rétro « déposez votre facture » : 请结账 peut s'adresser au client |
| h4 | zh | 含，… | 包含，… | rétro sans rapport : 含 isolé est ambigu |
| ph1 | zh | 欢迎光临。… | 欢迎入住本酒店。… | rétro « Bienvenue à la maison » : l'hôtel manquait |
| ph3 | zh | …您所有的餐食都要注意。 | …您的每一餐都会特别注意。 | rétro « vous devez faire attention » : sujet inversé |
| pl5 | ja | デマレージ | 滞船料 | rétro « démarrage » : le terme japonais usuel est 滞船料 |

## Conservées (fausse alerte)

- **Rétro-traduction incomplète** (seule la 1re phrase est rendue) : la plupart des alertes en, es, it, pt, fa, hi,
  ja (a2, p1, o3, pt4, n6…) et zh (ph5, o6). La similarité directe LaBSE est bonne.
- **Proverbes (x1)** : rendus par l'équivalent culturel de chaque langue, différent mot à mot par nature.
- **Formules d'usage** : « L'addition » → 会計 / الحساب ; « Voilà » → どうぞ / 给您 / تفضل ; formes de politesse
  (es/it « se llama / si chiama »).
- **Termes métier corrects** : pt « sobre-estadia », zh 滞期费, hi « डेमरेज », fa « اتاق پرو », ja 路面電車 (tramway).

## Amazigh : audit non concluant

Le modèle de rétro-traduction (NLLB-200) ne connaît pas le tachelhit en écriture latine : ses rétro-traductions
amazighes sont sans rapport avec le texte (ex. « Tanmmirt bahra » → « L'expérience est très intéressante »).
Ces 21 alertes ne prouvent donc rien, dans un sens ou dans l'autre ; aucune phrase amazighe n'a été modifiée.
La validation de l'amazigh nécessite une relecture humaine (locuteur ou enseignant IRCAM).

> NLLB-200 est sous licence non commerciale : il sert uniquement à cet audit interne et n'est pas distribué
> dans l'application.
