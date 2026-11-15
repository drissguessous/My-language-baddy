# Voix intégrées — rapport de validation

Généré automatiquement par le workflow « Voix ». Chaque enregistrement est retranscrit par Whisper
(large-v3-turbo) et comparé au texte attendu (taux d’erreur de caractères, CER ; pinyin pour le chinois,
hiragana pour le japonais). Un clip est conservé si CER ≤ 0,25 ; une voix est retenue si au moins 60 % de
ses clips sont validés. Sans clip validé, l’application utilise la voix du téléphone.

Taille totale des clips : 38.2 Mo.

| Langue | Voix retenues | Clips validés | Candidates (taux de réussite · CER moyen) |
|---|---|---|---|
| Anglais | bf_isabella, bm_george | 115/120 | bf_emma (96 % · 0.021), bf_isabella (96 % · 0.018), bm_george (96 % · 0.02), bm_fable (96 % · 0.025) |
| Espagnol | ef_dora, em_alex | 115/120 | ef_dora (96 % · 0.025), em_alex (96 % · 0.025), davefx (96 % · 0.03), sharvard (96 % · 0.03) |
| Persan | ganji, reza_ibrahim | 118/120 | amir (68 % · 0.214), ganji (97 % · 0.068), reza_ibrahim (80 % · 0.176) |
| Français | ff_siwis, gilles | 117/120 | siwis (95 % · 0.035), ff_siwis (96 % · 0.029), gilles (92 % · 0.053) |
| Hindi | hm_omega, hf_alpha | 115/120 | hf_alpha (93 % · 0.078), hf_beta (92 % · 0.076), hm_omega (94 % · 0.07), hm_psi (92 % · 0.079) |
| Italien | if_sara, im_nicola | 115/120 | if_sara (96 % · 0.026), paola (95 % · 0.04), im_nicola (96 % · 0.028) |
| Japonais | jf_alpha, jm_kumo | 114/120 | jf_alpha (95 % · 0.041), jf_gongitsune (94 % · 0.045), jm_kumo (95 % · 0.044) |
| Portugais | pf_dora, pm_alex | 115/120 | tugao (81 % · 0.127), pf_dora (96 % · 0.025), pm_alex (95 % · 0.03) |
| Chinois | zf_xiaobei, zm_yunjian | 117/120 | zf_xiaobei (98 % · 0.014), zf_xiaoxiao (98 % · 0.015), zm_yunjian (98 % · 0.015), zm_yunxi (97 % · 0.017) |

Répliques du compagnon (voix féminine, ff_siwis) : 298/302 validées.

Répliques du compagnon (voix masculine, gilles) : 60/76 validées.
