# Voix intégrées — rapport de validation

Généré automatiquement par le workflow « Voix ». Chaque enregistrement est retranscrit par Whisper
(large-v3-turbo) et comparé au texte attendu (taux d’erreur de caractères, CER ; pinyin pour le chinois,
hiragana pour le japonais). Un clip est conservé si CER ≤ 0,25 ; une voix est retenue si au moins 60 % de
ses clips sont validés. Sans clip validé, l’application utilise la voix du téléphone.

Taille totale des clips : 54.0 Mo.

| Langue | Voix retenues | Clips validés | Candidates (taux de réussite · CER moyen) |
|---|---|---|---|
| Anglais | bf_isabella, bm_george | 668/738 | bf_emma (15 % · 0.023), bf_isabella (82 % · 0.121), bm_george (78 % · 0.157), bm_fable (16 % · 0.025) |
| Espagnol | em_alex, ef_dora | 716/738 | ef_dora (96 % · 0.037), em_alex (96 % · 0.034), davefx (16 % · 0.035), sharvard (16 % · 0.029) |
| Persan | — | 0/738 | amir (12 % · 0.207), ganji (59 % · 0.28), reza_ibrahim (32 % · 0.467) |
| Français | ff_siwis | 696/738 | siwis (15 % · 0.036), ff_siwis (94 % · 0.042), gilles (41 % · 0.493) |
| Hindi | — | 0/738 | hf_alpha (50 % · 0.346), hf_beta (15 % · 0.078), hm_omega (52 % · 0.354), hm_psi (15 % · 0.08) |
| Italien | if_sara, im_nicola | 717/738 | if_sara (96 % · 0.031), paola (15 % · 0.038), im_nicola (94 % · 0.042) |
| Japonais | jf_alpha, jm_kumo | 601/738 | jf_alpha (77 % · 0.178), jf_gongitsune (15 % · 0.043), jm_kumo (63 % · 0.292) |
| Portugais | pm_alex, pf_dora | 671/738 | tugao (13 % · 0.139), pf_dora (87 % · 0.096), pm_alex (88 % · 0.092) |
| Chinois | zm_yunjian, zf_xiaobei | 673/738 | zf_xiaobei (77 % · 0.149), zf_xiaoxiao (16 % · 0.016), zm_yunjian (86 % · 0.096), zm_yunxi (16 % · 0.015) |

Répliques du compagnon (voix féminine, ff_siwis) : 298/302 validées.
