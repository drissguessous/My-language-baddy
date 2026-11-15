# Voix intégrées — rapport de validation

Généré automatiquement par le workflow « Voix ». Chaque enregistrement est retranscrit par Whisper
(large-v3-turbo) et comparé au texte attendu (taux d’erreur de caractères, CER ; pinyin pour le chinois,
hiragana pour le japonais). Un clip est conservé si CER ≤ 0,25 ; une voix est retenue si au moins 60 % de
ses clips sont validés. Sans clip validé, l’application utilise la voix du téléphone.

Taille totale des clips : 65.3 Mo.

| Langue | Voix retenues | Clips validés | Candidates (réussite sur les phrases des leçons · sur le dictionnaire · CER moyen) |
|---|---|---|---|
| Anglais | bf_isabella, bm_fable | 608/738 | bf_emma (95 % · dictionnaire 0 % · 0.023), bf_isabella (97 % · dictionnaire 80 % · 0.121), bm_george (96 % · dictionnaire 74 % · 0.157), bm_fable (96 % · dictionnaire 0 % · 0.025) |
| Espagnol | sharvard, ef_dora | 705/738 | ef_dora (96 % · dictionnaire 96 % · 0.037), em_alex (96 % · dictionnaire 96 % · 0.034), davefx (96 % · dictionnaire 0 % · 0.035), sharvard (96 % · dictionnaire 0 % · 0.029) |
| Persan | ganji, reza_ibrahim | 475/738 | amir (74 % · dictionnaire 0 % · 0.207), ganji (93 % · dictionnaire 53 % · 0.28), reza_ibrahim (80 % · dictionnaire 23 % · 0.467) |
| Français | siwis, gilles | 310/738 | siwis (95 % · dictionnaire 0 % · 0.036), ff_siwis (95 % · dictionnaire 94 % · 0.042), gilles (92 % · dictionnaire 31 % · 0.493) |
| Hindi | hm_omega, hf_alpha | 445/738 | hf_alpha (94 % · dictionnaire 42 % · 0.346), hf_beta (92 % · dictionnaire 0 % · 0.078), hm_omega (95 % · dictionnaire 43 % · 0.354), hm_psi (92 % · dictionnaire 0 % · 0.08) |
| Italien | if_sara, im_nicola | 717/738 | if_sara (96 % · dictionnaire 96 % · 0.031), paola (95 % · dictionnaire 0 % · 0.038), im_nicola (96 % · dictionnaire 94 % · 0.042) |
| Japonais | jf_alpha, jm_kumo | 601/738 | jf_alpha (95 % · dictionnaire 73 % · 0.178), jf_gongitsune (94 % · dictionnaire 0 % · 0.043), jm_kumo (95 % · dictionnaire 56 % · 0.292) |
| Portugais | pf_dora, pm_alex | 671/738 | tugao (82 % · dictionnaire 0 % · 0.139), pf_dora (97 % · dictionnaire 86 % · 0.096), pm_alex (96 % · dictionnaire 87 % · 0.092) |
| Chinois | zm_yunxi, zf_xiaoxiao | 117/738 | zf_xiaobei (98 % · dictionnaire 74 % · 0.149), zf_xiaoxiao (98 % · dictionnaire 0 % · 0.016), zm_yunjian (98 % · dictionnaire 84 % · 0.096), zm_yunxi (98 % · dictionnaire 0 % · 0.015) |

Répliques du compagnon (voix féminine, siwis) : 296/302 validées.

Répliques du compagnon (voix masculine, gilles) : 247/300 validées.
