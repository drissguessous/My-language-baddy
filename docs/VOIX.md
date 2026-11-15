# Voix intégrées — rapport de validation

Généré automatiquement par le workflow « Voix ». Chaque enregistrement est retranscrit par Whisper
(large-v3-turbo) et comparé au texte attendu (taux d’erreur de caractères, CER ; pinyin pour le chinois,
hiragana pour le japonais). Un clip est conservé si CER ≤ 0,25 ; une voix est retenue si au moins 60 % de
ses clips sont validés. Sans clip validé, l’application utilise la voix du téléphone.

Taille totale des clips : 41.5 Mo.

| Langue | Voix retenues | Clips validés | Candidates (taux de réussite · CER moyen) |
|---|---|---|---|
| Anglais | bf_isabella, bm_george | 116/120 | bf_emma (95 % · 0.023), bf_isabella (97 % · 0.016), bm_george (96 % · 0.022), bm_fable (96 % · 0.025) |
| Espagnol | ef_dora, em_alex | 115/120 | ef_dora (96 % · 0.025), em_alex (96 % · 0.025), davefx (96 % · 0.035), sharvard (96 % · 0.029) |
| Persan | ganji, reza_ibrahim | 116/120 | amir (74 % · 0.207), ganji (93 % · 0.077), reza_ibrahim (80 % · 0.188) |
| Français | ff_siwis, gilles | 117/120 | siwis (95 % · 0.036), ff_siwis (95 % · 0.033), gilles (92 % · 0.054) |
| Hindi | hm_omega, hf_alpha | 115/120 | hf_alpha (94 % · 0.073), hf_beta (92 % · 0.078), hm_omega (95 % · 0.064), hm_psi (92 % · 0.08) |
| Italien | if_sara, im_nicola | 115/120 | if_sara (96 % · 0.026), paola (95 % · 0.038), im_nicola (96 % · 0.027) |
| Japonais | jf_alpha, jm_kumo | 114/120 | jf_alpha (95 % · 0.041), jf_gongitsune (94 % · 0.043), jm_kumo (95 % · 0.042) |
| Portugais | pf_dora, pm_alex | 116/120 | tugao (82 % · 0.139), pf_dora (97 % · 0.026), pm_alex (96 % · 0.027) |
| Chinois | zf_xiaobei, zm_yunjian | 117/120 | zf_xiaobei (98 % · 0.015), zf_xiaoxiao (98 % · 0.016), zm_yunjian (98 % · 0.015), zm_yunxi (98 % · 0.015) |

Répliques du compagnon (voix féminine, ff_siwis) : 298/302 validées.

Répliques du compagnon (voix masculine, gilles) : 247/300 validées.
