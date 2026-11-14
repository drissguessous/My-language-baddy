# Voix intégrées — rapport de validation

Généré automatiquement par le workflow « Voix ». Chaque enregistrement est retranscrit par Whisper
(large-v3-turbo) et comparé au texte attendu (taux d’erreur de caractères, CER ; pinyin pour le chinois,
hiragana pour le japonais). Un clip est conservé si CER ≤ 0,25 ; une voix est retenue si au moins 60 % de
ses clips sont validés. Sans clip validé, l’application utilise la voix du téléphone.

Taille totale des clips : 30.1 Mo.

| Langue | Voix retenues | Clips validés | Candidates (taux de réussite · CER moyen) |
|---|---|---|---|
| Amazigh | mms_shi | 36/36 | mms_shi (non vérifiable) |
| Anglais | bf_isabella, bm_george | 116/120 | bf_emma (95 % · 0.023), bf_isabella (97 % · 0.016), bm_george (96 % · 0.022), bm_fable (96 % · 0.025) |
| Espagnol | ef_dora, em_alex | 115/120 | ef_dora (96 % · 0.025), em_alex (96 % · 0.025), davefx (96 % · 0.034), sharvard (96 % · 0.028) |
| Persan | ganji, gyro | 118/120 | amir (70 % · 0.212), gyro (92 % · 0.103), ganji (93 % · 0.084), reza_ibrahim (77 % · 0.179) |
| Hindi | hm_omega, hf_alpha | 114/120 | hf_alpha (93 % · 0.071), hf_beta (92 % · 0.08), hm_omega (94 % · 0.07), hm_psi (92 % · 0.082), priyamvada (92 % · 0.104), pratham (91 % · 0.093) |
| Italien | if_sara, im_nicola | 115/120 | if_sara (96 % · 0.026), paola (94 % · 0.04), im_nicola (96 % · 0.028), riccardo (94 % · 0.053) |
| Japonais | jf_alpha, jm_kumo | 114/120 | jf_alpha (95 % · 0.039), jf_gongitsune (94 % · 0.045), jm_kumo (95 % · 0.043) |
| Portugais | pf_dora, pm_alex | 115/120 | tugao (84 % · 0.112), pf_dora (96 % · 0.026), pm_alex (94 % · 0.031) |
| Chinois | zm_yunjian, zf_xiaobei | 118/120 | zf_xiaobei (98 % · 0.016), zf_xiaoxiao (98 % · 0.018), zm_yunjian (98 % · 0.012), zm_yunxi (98 % · 0.016), huayan (98 % · 0.023) |

Amazigh : Whisper ne reconnaît pas l’amazigh ; les clips (modèle MMS tachelhit) sont intégrés sans vérification automatique.
