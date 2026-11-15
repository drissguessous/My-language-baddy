# Audit des traductions — rapport

Généré par le workflow « Audit des traductions ». Mesures : similarité LaBSE entre la source française et la
traduction (seuil 0.75), rétro-traduction NLLB-200 vers le français et similarité avec la source (seuil 0.8), chrF.
Une phrase signalée n’est pas forcément fausse : c’est une alerte à examiner.

| Langue | Phrases | Signalées | LaBSE direct moyen | Rétro-traduction moyenne |
|---|---|---|---|---|
| en | 738 | 186 | 0.846 | 0.905 |
| ar | 738 | 529 | 0.712 | 0.705 |
| es | 738 | 178 | 0.867 | 0.929 |
| it | 738 | 192 | 0.871 | 0.908 |
| pt | 738 | 208 | 0.846 | 0.922 |
| zh | 738 | 405 | 0.743 | 0.775 |
| ja | 738 | 509 | 0.730 | 0.686 |
| ber | 135 | 95 | — | 0.570 |
| fa | 738 | 435 | 0.777 | 0.723 |
| hi | 738 | 307 | 0.777 | 0.865 |

## Phrases signalées

| id | langue | source | traduction | rétro-traduction | LaBSE | rétro |
|---|---|---|---|---|---|---|
| birds-lady_beetle | ar | la coccinelle | دعسوقة | Je vous en prie. | 0.491 | 0.077 |
| plants-cactus | ar | le cactus | صبار | Un peu de patience. | 0.256 | 0.077 |
| school-paperclip | ar | le trombone | مشبك ورق | Une pince à papier. | 0.143 | 0.085 |
| fruits-tangerine | ar | la mandarine | يوسفي | Je vous en prie. | 0.107 | 0.143 |
| vegetables-cucumber | ar | le concombre | خيارة | C'est très bien. | 0.34 | 0.154 |
| sea-spiral_shell | ar | le coquillage | صدفة | C'est une coïncidence. | 0.318 | 0.162 |
| vegetables-eggplant | ar | l’aubergine | باذنجان | Avec deux paillettes. | 0.727 | 0.168 |
| farm-rooster | ar | le coq | ديك | Je vous en prie ! | 0.524 | 0.168 |
| bathroom-lotion_bottle | ar | la crème | كريم | C'est généreux ! | 0.844 | 0.18 |
| plants-sunflower | ar | le tournesol | عباد الشمس | Les adorateurs du soleil. | 0.524 | 0.181 |
| games-roller_coaster | ar | les montagnes russes | الأفعوانية | Le phénomène. | 0.305 | 0.181 |
| sports-badminton | ar | le badminton | الريشة الطائرة | Une plume volante. | 0.516 | 0.188 |
| body-tooth | ar | la dent | سن | - Je suis désolé. | 0.482 | 0.195 |
| wild-leopard | ar | le léopard | فهد | Il est mort ! | 0.376 | 0.198 |
| wild-koala | ar | le koala | كوالا | Je vous en prie ! | 0.735 | 0.204 |
| sports-person_lifting_weights | ar | la musculation | رفع الأثقال | Je soulève des poids. | 0.445 | 0.205 |
| fruits-kiwi_fruit | ar | le kiwi | كيوي | Je vous en prie ! | 0.724 | 0.214 |
| actions-person_swimming | ar | nager | سباحة | Je nage. | 0.299 | 0.218 |
| fruits-melon | ar | le melon | شمام | Une puanteur ! | 0.319 | 0.223 |
| objects-screwdriver | ar | le tournevis | مفك براغي | Une vis à vis ! | 0.389 | 0.224 |
| clothes-thong_sandal | ar | les tongs | شبشب | Une écharpe. | 0.384 | 0.228 |
| time-sunset | ar | le soir | المساء | Je vous en prie. | 0.799 | 0.231 |
| meals-honey_pot | ar | le miel | عسل | Je vous en prie. | 0.796 | 0.237 |
| sweets-popcorn | ar | le pop-corn | فشار | Je vous en prie ! | 0.328 | 0.24 |
| vegetables-leafy_green | ar | la laitue | خس | Les légumineuses ! | 0.374 | 0.245 |
| actions-open_book | ar | lire | قراءة | Je lis. | 0.858 | 0.25 |
| fruits-pear | ar | la poire | إجاصة | Une pause. | 0.267 | 0.262 |
| sweets-doughnut | ar | le beignet | دونات | Des donuts ! | 0.347 | 0.265 |
| actions-yawning_face | ar | bâiller | تثاؤب | Un bégaiement. | 0.443 | 0.265 |
| accessories-folding_hand_fan | ar | l’éventail | مروحة يدوية | Un ventilateur à main. | 0.329 | 0.266 |
| places-houses | ar | le quartier | حي | Il est vivant. | 0.691 | 0.271 |
| school-abacus | ar | le boulier | المعداد | Je suis prête. | 0.414 | 0.276 |
| meals-pot_of_food | ar | le ragoût | يخنة | Il trahit . | 0.39 | 0.277 |
| farm-baby_chick | ar | le poussin | كتكوت | Comme une poule. | 0.252 | 0.281 |
| school-clipboard | ar | le porte-bloc | حافظة أوراق | Un portefeuille. | 0.428 | 0.286 |
| games-game_die | ar | le dé | نرد | Nous répondons. | 0.406 | 0.287 |
| objects-package | ar | le colis | طرد | Il est renvoyé. | 0.34 | 0.291 |
| clothes-sari | ar | le sari | ساري | Je suis en train de marcher. | 0.634 | 0.298 |
| wild-elephant | ar | l’éléphant | فيل | Je suis Phil. | 0.329 | 0.301 |
| plants-seedling | ar | la jeune pousse | شتلة | Une graine. | 0.405 | 0.301 |
| school-pushpin | ar | la punaise | دبوس | Une épingle. | 0.414 | 0.304 |
| health-face_with_medical_mask | ar | le masque | كمامة | Une boucle. | 0.474 | 0.305 |
| x1 | ar | Il ne faut pas vendre la peau de l'ours avant de l'avoir tué. | لا تستبق الأحداث قبل أوانها. | Ne précipitez pas les événements. | 0.449 | 0.31 |
| signs-down_arrow | ar | le bas | تحت | En dessous ! | 0.47 | 0.314 |
| actions-person_climbing | ar | grimper | تسلق | Montez ! | 0.646 | 0.314 |
| wild-hippopotamus | ar | l’hippopotame | فرس النهر | Le cheval de rivière. | 0.396 | 0.317 |
| objects-electric_plug | ar | la prise | قابس | Une pince ! | 0.434 | 0.317 |
| body-ear | ar | l’oreille | أذن | Alors ? | 0.815 | 0.321 |
| signs-plus | ar | plus | زائد | Plus ou moins. | 0.902 | 0.322 |
| travel-stop_sign | ar | le panneau stop | إشارة قف | Le signal est là ! | 0.491 | 0.325 |
| colors-brown_square | ar | marron | بني | Mon fils ! | 0.814 | 0.326 |
| birds-swan | ar | le cygne | بجعة | Une bière ! | 0.4 | 0.327 |
| health-stethoscope | ar | le stéthoscope | سماعة الطبيب | L'oreille du docteur. | 0.444 | 0.327 |
| objects-locked | ar | le cadenas | قفل | Fermez ! | 0.676 | 0.333 |
| games-yo_yo | ar | le yo-yo | يويو | Je vous en prie ! | 0.666 | 0.335 |
| school-briefcase | ar | la mallette | حقيبة أوراق | Une sacoche de papier. | 0.373 | 0.337 |
| family-family_woman_girl | ar | la mère | أم | Je ne sais pas. | 0.787 | 0.338 |
| weather-cloud_with_lightning | ar | l’éclair | برق | Une foudre ! | 0.539 | 0.344 |
| birds-snail | ar | l’escargot | حلزون | Des escargots ! | 0.486 | 0.346 |
| meals-falafel | ar | les falafels | فلافل | Des paillettes ! | 0.67 | 0.347 |
| drinks-cup_with_straw | ar | la boisson fraîche | مشروب غازي | Un soda . | 0.567 | 0.349 |
| actions-ear | ar | écouter | استماع | Je vous en prie. | 0.892 | 0.351 |
| sea-coral | ar | le corail | مرجان | Elle est corallienne. | 0.474 | 0.353 |
| vegetables-hot_pepper | ar | le piment | فلفل حار | Les poivrons sont épicés. | 0.515 | 0.354 |
| bathroom-bucket | ar | le seau | دلو | Un seau ! | 0.492 | 0.358 |
| wild-zebra | ar | le zèbre | حمار وحشي | Un âne sauvage ! | 0.582 | 0.361 |
| jobs-construction_worker | ar | le maçon | عامل بناء | Un ouvrier du bâtiment. | 0.41 | 0.37 |
| games-confetti_ball | ar | les confettis | قصاصات الورق | Des morceaux de papier. | 0.382 | 0.372 |
| health-crutch | ar | la béquille | عكاز | Un bâton ! | 0.505 | 0.378 |
| time-stopwatch | ar | le chronomètre | ساعة إيقاف | Une heure d'arrêt. | 0.573 | 0.379 |
| music-drum | ar | le tambour | طبل | Une batterie. | 0.695 | 0.383 |
| weather-tornado | ar | la tornade | إعصار | Un ouragan ! | 0.706 | 0.385 |
| transport-canoe | ar | le canoë | زورق | Un bateau ! | 0.492 | 0.398 |
| signs-cross_mark | ar | faux | خطأ | C'est une erreur. | 0.6 | 0.401 |
| time-hourglass_done | ar | le sablier | ساعة رملية | Une horloge de sable. | 0.348 | 0.403 |
| wild-hedgehog | ar | le hérisson | قنفذ | Un écureuil ! | 0.425 | 0.416 |
| bathroom-razor | ar | le rasoir | موس الحلاقة | Le raton laveur. | 0.539 | 0.422 |
| meals-baguette_bread | ar | la baguette | خبز فرنسي | Le pain français. | 0.558 | 0.423 |
| family-people_hugging | ar | le câlin | عناق | Un câlin ! | 0.419 | 0.423 |
| farm-camel | ar | le dromadaire | جمل | Des chameaux. | 0.33 | 0.433 |
| games-kite | ar | le cerf-volant | طائرة ورقية | Un avion de ligne. | 0.532 | 0.435 |
| travel-vertical_traffic_light | ar | le feu tricolore | إشارة المرور | Le feu de circulation ! | 0.224 | 0.436 |
| fruits-blueberries | ar | les myrtilles | توت أزرق | Des baies bleues . | 0.474 | 0.437 |
| kitchen-canned_food | ar | la boîte de conserve | علبة مصبرات | Une boîte de pilules . | 0.682 | 0.438 |
| actions-clapping_hands | ar | applaudir | تصفيق | (Applaudissements) | 0.342 | 0.444 |
| sea-octopus | ar | la pieuvre | أخطبوط | Une pieuvre ! | 0.43 | 0.447 |
| vegetables-pea_pod | ar | les petits pois | بازلاء | Des pois ! | 0.398 | 0.448 |
| signs-minus | ar | moins | ناقص | Il manque. | 0.605 | 0.45 |
| vegetables-ear_of_corn | ar | le maïs | ذرة | Une pomme de terre. | 0.474 | 0.451 |
| bathroom-broom | ar | le balai | مكنسة | Une balayeuse. | 0.555 | 0.451 |
| plants-evergreen_tree | ar | le sapin | شجرة التنوب | Le pin. | 0.577 | 0.453 |
| sea-jellyfish | ar | la méduse | قنديل البحر | Une méduse ! | 0.395 | 0.454 |
| birds-flamingo | ar | le flamant rose | فلامنغو | Les flamants ! | 0.417 | 0.458 |
| body-bone | ar | l’os | عظم | Une osse. | 0.615 | 0.459 |
| meals-salt | ar | le sel | ملح | Le sel ! | 0.465 | 0.46 |
| numbers-keycap_1 | ar | un | واحد | Il y en a un. | 0.797 | 0.465 |
| kitchen-baby_bottle | ar | le biberon | زجاجة رضاعة | Une bouteille de lait. | 0.536 | 0.467 |
| sports-horse_racing | ar | l’équitation | الفروسية | La cavalerie . | 0.609 | 0.47 |
| farm-turkey | ar | la dinde | ديك رومي | Une dinde. | 0.27 | 0.473 |
| time-g1 | ar | Bonjour, bon matin ! | صباح الخير! | Je vous salue. | 0.872 | 0.475 |
| fruits-watermelon | ar | la pastèque | بطيخ | Le perroquet ! | 0.438 | 0.477 |
| plants-herb | ar | l’herbe aromatique | عشبة | Une herbe. | 0.555 | 0.479 |
| objects-battery | ar | la pile | بطارية | Une batterie. | 0.428 | 0.483 |
| signs-up_arrow | ar | le haut | فوق | À l'étage. | 0.731 | 0.484 |
| school-calendar | ar | l’agenda | المفكرة | Le cahier . | 0.436 | 0.484 |
| sports-ping_pong | ar | le tennis de table | كرة الطاولة | Une boule de table. | 0.714 | 0.484 |
| vegetables-garlic | ar | l’ail | ثوم | Des oignons. | 0.464 | 0.485 |
| farm-ox | ar | le bœuf | ثور | Un taureau ! | 0.458 | 0.485 |
| house-framed_picture | ar | le tableau | لوحة | Une peinture. | 0.787 | 0.487 |
| meals-french_fries | ar | les frites | بطاطا مقلية | Des pommes de terre. | 0.537 | 0.49 |
| feelings-worried_face | ar | inquiet | قلق | Je m'inquiète. | 0.822 | 0.492 |
| kitchen-fork_and_knife | ar | les couverts | أدوات المائدة | Les ustensiles de table . | 0.545 | 0.494 |
| drinks-glass_of_milk | ar | le lait | حليب | Il y a du lait. | 0.592 | 0.498 |
| signs-check_mark_button | ar | correct | صحيح | C'est vrai ! | 0.889 | 0.499 |
| meals-flatbread | ar | la galette | خبز مسطح | Le pain plat . | 0.56 | 0.5 |
| travel-construction | ar | les travaux | أشغال الطريق | Le travail de la route. | 0.582 | 0.502 |
| actions-face_savoring_food | ar | manger | أكل | Il mange. | 0.884 | 0.503 |
| clothes-jeans | ar | le jean | جينز | Des jeans ! | 0.635 | 0.503 |
| vegetables-bell_pepper | ar | le poivron | فلفل حلو | Le poivre est bon. | 0.608 | 0.505 |
| birds-owl | ar | la chouette | بومة | Un hibou ! | 0.504 | 0.505 |
| school-straight_ruler | ar | la règle | مسطرة | Une ligne. | 0.417 | 0.508 |
| drinks-beverage_box | ar | le jus | عصير | Un peu de jus. | 0.669 | 0.512 |
| feelings-crying_face | ar | pleurer | بكاء | Il pleurait. | 0.874 | 0.512 |
| weather-thermometer | ar | le thermomètre | ميزان الحرارة | L'équilibre thermique. | 0.814 | 0.514 |
| travel-tent | ar | la tente | خيمة | Une tente ! | 0.559 | 0.518 |
| places-stadium | ar | le stade | ملعب | Un terrain de jeu. | 0.764 | 0.52 |
| plants-palm_tree | ar | le palmier | نخلة | Une palme ! | 0.488 | 0.523 |
| actions-person_running | ar | courir | ركض | Il a couru ! | 0.519 | 0.523 |
| numbers-keycap_7 | ar | sept | سبعة | Il y en a sept. | 0.692 | 0.524 |
| vegetables-broccoli | ar | le brocoli | بروكلي | Il y a du brocoli. | 0.594 | 0.525 |
| health-drop_of_blood | ar | le sang | دم | Il y a du sang. | 0.692 | 0.525 |
| games-puzzle_piece | ar | le puzzle | أحجية | Une énigme. | 0.386 | 0.525 |
| family-bust_in_silhouette | ar | la personne | شخص | Quelqu'un . | 0.92 | 0.526 |
| school-pen | ar | le stylo | قلم | Une plume ! | 0.792 | 0.528 |
| birds-ant | ar | la fourmi | نملة | Une fourmi ! | 0.448 | 0.53 |
| games-ribbon | ar | le ruban | شريط | Une bande. | 0.765 | 0.534 |
| house-bed | ar | le lit | سرير | Un lit . | 0.361 | 0.537 |
| actions-speaking_head | ar | parler | كلام | Des mots ! | 0.797 | 0.538 |
| places-bridge_at_night | ar | le pont | جسر | Un pont ! | 0.663 | 0.539 |
| clothes-woman_s_boot | ar | les bottes | جزمة | Une chaussure ! | 0.369 | 0.54 |
| clothes-t_shirt | ar | le tee-shirt | قميص قصير الأكمام | Une chemise à manches courtes. | 0.628 | 0.542 |
| clothes-shorts | ar | le short | سروال قصير | Des shorts . | 0.615 | 0.543 |
| weather-cloud_with_rain | ar | la pluie | مطر | Il pleut ! | 0.717 | 0.544 |
| travel-airplane_departure | ar | le départ | المغادرة | Je pars. | 0.771 | 0.544 |
| sweets-lollipop | ar | la sucette | مصاصة | Une sucette ! | 0.539 | 0.546 |
| transport-kick_scooter | ar | la trottinette | سكوتر | Le scooter ! | 0.666 | 0.546 |
| feelings-smiling_face_with_sunglasses | ar | détendu | مسترخ | Il est détendu. | 0.517 | 0.551 |
| kitchen-chopsticks | ar | les baguettes | عيدان الأكل | Des bâtons à manger. | 0.382 | 0.552 |
| drinks-ice | ar | le glaçon | مكعب ثلج | Un glaçon ! | 0.557 | 0.553 |
| sea-shark | ar | le requin | قرش | Un requin ! | 0.405 | 0.553 |
| meals-bread | ar | le pain | خبز | Le pain ! | 0.458 | 0.554 |
| wild-deer | ar | le cerf | غزال | Un cerf ! | 0.542 | 0.554 |
| health-x_ray | ar | la radio | صورة الأشعة | Une radiographie . | 0.413 | 0.556 |
| house-light_bulb | ar | l’ampoule | مصباح | Une lampe ! | 0.67 | 0.556 |
| places-post_office | ar | la poste | مكتب البريد | Le bureau de poste. | 0.484 | 0.556 |
| numbers-keycap_9 | ar | neuf | تسعة | Il y en a neuf. | 0.719 | 0.557 |
| wild-fox | ar | le renard | ثعلب | Un renard ! | 0.361 | 0.557 |
| weather-fog | ar | le brouillard | ضباب | Il y a du brouillard. | 0.766 | 0.56 |
| f6 | ar | Voilà. Bonne journée ! | تفضل. يومًا سعيدًا! | Je vous souhaite une bonne journée. | 0.714 | 0.561 |
| music-camera_with_flash | ar | la photographie | التصوير | Le tournage. | 0.832 | 0.561 |
| health-face_with_head_bandage | ar | la blessure | جرح | Il est blessé. | 0.711 | 0.562 |
| wild-kangaroo | ar | le kangourou | كنغر | Un kangourou ! | 0.645 | 0.564 |
| feelings-hot_face | ar | avoir chaud | الشعور بالحر | La sensation de chaleur . | 0.412 | 0.564 |
| numbers-keycap_10 | ar | dix | عشرة | Une dizaine. | 0.837 | 0.568 |
| weather-snowflake | ar | la neige | ثلج | Il y a de la glace. | 0.886 | 0.568 |
| clothes-woman_s_hat | ar | le chapeau | قبعة واسعة | Le chapeau est large. | 0.66 | 0.569 |
| wild-monkey | ar | le singe | قرد | Un singe ! | 0.569 | 0.57 |
| kitchen-jar | ar | le bocal | برطمان | Une boîte. | 0.324 | 0.571 |
| feelings-face_with_tears_of_joy | ar | rire | ضحك | Il a ri. | 0.873 | 0.573 |
| birds-mosquito | ar | le moustique | بعوضة | Avec un moustique. | 0.473 | 0.576 |
| jobs-technologist | ar | le développeur | مبرمج | Je suis un programmeur. | 0.759 | 0.58 |
| objects-balloon | ar | le ballon de baudruche | بالون | Un ballon ! | 0.479 | 0.58 |
| travel-station | ar | la gare | محطة | Une gare. | 0.519 | 0.58 |
| kitchen-g2 | ar | Bon appétit ! | بالهناء والشفاء! | À la guérison ! | 0.563 | 0.581 |
| clothes-running_shoe | ar | les baskets | حذاء رياضي | Des chaussures de sport . | 0.563 | 0.581 |
| school-notebook | ar | le cahier | دفتر | Un livre. | 0.609 | 0.581 |
| bathroom-wastebasket | ar | la poubelle | سلة المهملات | Dans la poubelle. | 0.599 | 0.584 |
| jobs-firefighter | ar | le pompier | إطفائي | Les pompiers ! | 0.419 | 0.586 |
| colors-green_square | ar | vert | أخضر | Il est vert. | 0.838 | 0.587 |
| sweets-pancakes | ar | les crêpes | فطائر | Des tartes ! | 0.593 | 0.587 |
| wild-bear | ar | l’ours | دب | Un ours ! | 0.343 | 0.588 |
| objects-hammer | ar | le marteau | مطرقة | Un marteau ! | 0.649 | 0.59 |
| music-microphone | ar | le micro | ميكروفون | Un microphone ! | 0.632 | 0.59 |
| games-fireworks | ar | le feu d’artifice | الألعاب النارية | Des feux d'artifice. | 0.476 | 0.59 |
| places-ferris_wheel | ar | la grande roue | عجلة دوارة | Une roue. | 0.609 | 0.592 |
| actions-person_walking | ar | marcher | مشي | Vous marchez ? | 0.85 | 0.595 |
| feelings-star_struck | ar | émerveillé | منبهر | Je suis impressionné. | 0.731 | 0.596 |
| accessories-purse | ar | le porte-monnaie | محفظة نقود | Un portefeuille. | 0.798 | 0.603 |
| landscapes-rock | ar | le rocher | صخرة | Un rocher ! | 0.688 | 0.604 |
| objects-wrench | ar | la clé à molette | مفتاح ربط | Une clé de raccordement. | 0.759 | 0.605 |
| fruits-mango | ar | la mangue | مانجو | Une mangue ! | 0.711 | 0.607 |
| meals-egg | ar | l’œuf | بيضة | Un œuf ! | 0.627 | 0.607 |
| objects-wrapped_gift | ar | le cadeau | هدية | C'était un cadeau. | 0.869 | 0.608 |
| sports-goal_net | ar | le but | المرمى | Le but ! | 0.325 | 0.608 |
| drinks-teapot | ar | la théière | إبريق الشاي | Une tasse de thé. | 0.638 | 0.609 |
| sea-crab | ar | le crabe | سلطعون | Des crabes ! | 0.323 | 0.609 |
| farm-pig | ar | le cochon | خنزير | Un cochon ! | 0.693 | 0.611 |
| numbers-keycap_8 | ar | huit | ثمانية | Il y en a huit. | 0.926 | 0.612 |
| jobs-scientist | ar | le scientifique | عالم | Un savant ! | 0.574 | 0.613 |
| numbers-keycap_6 | ar | six | ستة | Il y en a six. | 0.958 | 0.614 |
| sweets-pie | ar | la tarte | فطيرة | Une tarte ! | 0.504 | 0.615 |
| body-foot | ar | le pied | قدم | Un pied ! | 0.781 | 0.615 |
| actions-microphone | ar | chanter | غناء | Le chant. | 0.714 | 0.615 |
| colors-red_square | ar | rouge | أحمر | Il est rouge. | 0.91 | 0.616 |
| meals-croissant | ar | le croissant | كرواسون | C'est une croissante. | 0.612 | 0.617 |
| birds-parrot | ar | le perroquet | ببغاء | Un perroquet ! | 0.643 | 0.617 |
| farm-cat | ar | le chat | قطة | Un chat ! | 0.525 | 0.618 |
| wild-chipmunk | ar | l’écureuil | سنجاب | Un écureuil ! | 0.375 | 0.618 |
| numbers-keycap_2 | ar | deux | اثنان | Il y en a deux. | 0.946 | 0.619 |
| health-sneezing_face | ar | le rhume | زكام | C'est le rhume. | 0.354 | 0.619 |
| school-memo | ar | la note | ملاحظة | Une remarque. | 0.771 | 0.619 |
| birds-fly | ar | la mouche | ذبابة | Une mouche ! | 0.511 | 0.621 |
| bathroom-soap | ar | le savon | صابون | Un peu de savon. | 0.766 | 0.621 |
| bathroom-sponge | ar | l’éponge | إسفنجة | Une éponge ! | 0.465 | 0.622 |
| landscapes-snow_capped_mountain | ar | le sommet enneigé | قمة مثلجة | Un sommet glacial . | 0.623 | 0.623 |
| actions-waving_hand | ar | saluer de la main | تلويح باليد | Un signe de la main. | 0.781 | 0.623 |
| weather-cloud | ar | le nuage | سحابة | Un nuage ! | 0.712 | 0.625 |
| transport-motorcycle | ar | la moto | دراجة نارية | Une moto ! | 0.699 | 0.625 |
| wild-frog | ar | la grenouille | ضفدع | Une grenouille ! | 0.491 | 0.626 |
| time-mantelpiece_clock | ar | l’horloge | ساعة حائط | Une horloge murale. | 0.675 | 0.627 |
| feelings-grinning_face | ar | heureux | سعيد | Je suis content. | 0.935 | 0.629 |
| birds-eagle | ar | l’aigle | نسر | Un aigle ! | 0.441 | 0.63 |
| sea-seal | ar | le phoque | فقمة | Un phoque ! | 0.58 | 0.63 |
| body-flexed_biceps | ar | le bras | ذراع | Un bras ! | 0.823 | 0.633 |
| vegetables-chestnut | ar | la châtaigne | كستناء | Des châtaignes. | 0.517 | 0.634 |
| wild-crocodile | ar | le crocodile | تمساح | Un crocodile ! | 0.293 | 0.639 |
| numbers-keycap_3 | ar | trois | ثلاثة | Il y en a trois. | 0.969 | 0.64 |
| farm-duck | ar | le canard | بطة | Un canard ! | 0.634 | 0.64 |
| clothes-billed_cap | ar | la casquette | قبعة | Un chapeau ! | 0.856 | 0.64 |
| wild-lion | ar | le lion | أسد | Un lion ! | 0.6 | 0.643 |
| feelings-fearful_face | ar | effrayé | خائف | Je suis effrayé. | 0.83 | 0.644 |
| sweets-cookie | ar | le biscuit | بسكويت | Des biscuits ! | 0.788 | 0.645 |
| numbers-keycap_5 | ar | cinq | خمسة | Il y en a cinq. | 0.956 | 0.646 |
| landscapes-camping | ar | le camping | مخيم | Le camp . | 0.773 | 0.646 |
| objects-magnet | ar | l’aimant | مغناطيس | Un aimant . | 0.454 | 0.646 |
| colors-white_large_square | ar | blanc | أبيض | Il est blanc. | 0.929 | 0.648 |
| farm-donkey | ar | l’âne | حمار | Un âne ! | 0.42 | 0.648 |
| feelings-cold_face | ar | avoir froid | الشعور بالبرد | Je sens le froid. | 0.711 | 0.648 |
| family-boy | ar | le garçon | ولد | C'était un garçon. | 0.737 | 0.649 |
| transport-ship | ar | le navire | سفينة | Un vaisseau ! | 0.9 | 0.651 |
| vegetables-peanuts | ar | les cacahuètes | فول سوداني | Des haricots. | 0.355 | 0.652 |
| weather-rainbow | ar | l’arc-en-ciel | قوس قزح | Un arc-en-ciel ! | 0.53 | 0.652 |
| feelings-pensive_face | ar | triste | حزين | Je suis triste. | 0.895 | 0.652 |
| tech-computer_mouse | ar | la souris | فأرة الحاسوب | La souris de l'ordinateur. | 0.402 | 0.653 |
| games-g2 | ar | Bonne fête ! | عيد سعيد! | Je vous souhaite un joyeux anniversaire ! | 0.811 | 0.653 |
| fruits-peach | ar | la pêche | خوخة | Des pêches ! | 0.456 | 0.655 |
| fruits-olive | ar | l’olive | زيتونة | Des olives ! | 0.653 | 0.655 |
| tech-headphone | ar | le casque audio | سماعات الرأس | Les écouteurs. | 0.721 | 0.655 |
| farm-ewe | ar | le mouton | خروف | Des moutons ! | 0.514 | 0.656 |
| health-nauseated_face | ar | malade | مريض | Il est malade. | 0.941 | 0.656 |
| transport-bus | ar | le bus | حافلة | Un bus ! | 0.85 | 0.656 |
| music-musical_keyboard | ar | le piano | بيانو | Un piano ! | 0.752 | 0.656 |
| health-syringe | ar | la piqûre | حقنة | Une piqûre. | 0.611 | 0.657 |
| body-raised_hand | ar | la main | يد | Une main ! | 0.892 | 0.658 |
| fruits-avocado | ar | l’avocat | أفوكادو | Des avocats ! | 0.492 | 0.659 |
| family-child | ar | l’enfant | طفل | Un bébé ! | 0.907 | 0.659 |
| actions-handshake | ar | serrer la main | مصافحة | Une poignée de main. | 0.465 | 0.66 |
| body-eye | ar | l’œil | عين | Un œil ! | 0.796 | 0.662 |
| jobs-cook | ar | le cuisinier | طباخ | Je suis cuisinier. | 0.682 | 0.662 |
| plants-fallen_leaf | ar | la feuille morte | ورقة يابسة | Une feuille sèche. | 0.538 | 0.665 |
| travel-airplane_arrival | ar | l’arrivée | الوصول | L'accès | 0.632 | 0.666 |
| school-graduation_cap | ar | le diplôme | التخرج | La remise des diplômes. | 0.717 | 0.666 |
| music-saxophone | ar | le saxophone | ساكسفون | Ils jouent du saxophone. | 0.807 | 0.666 |
| drinks-hot_beverage | ar | le café | قهوة | Une tasse de café. | 0.725 | 0.667 |
| sea-dolphin | ar | le dauphin | دلفين | Des dauphins ! | 0.675 | 0.667 |
| actions-telephone_receiver | ar | téléphoner | اتصال هاتفي | Un appel téléphonique. | 0.733 | 0.667 |
| sea-shrimp | ar | la crevette | جمبري | Des crevettes ! | 0.319 | 0.668 |
| weather-fire | ar | le feu | نار | Un feu ! | 0.861 | 0.668 |
| feelings-astonished_face | ar | surpris | متفاجئ | Je suis surpris. | 0.904 | 0.668 |
| actions-eyes | ar | regarder | نظر | Regardez ! | 0.709 | 0.669 |
| clothes-coat | ar | le manteau | معطف | Un manteau ! | 0.852 | 0.669 |
| farm-goat | ar | la chèvre | ماعز | Une chèvre ! | 0.333 | 0.67 |
| actions-sleeping_face | ar | dormir | نوم | Vous dormez ? | 0.891 | 0.67 |
| actions-man_dancing | ar | danser | رقص | Une danse ! | 0.884 | 0.67 |
| colors-black_large_square | ar | noir | أسود | Je suis noir. | 0.879 | 0.671 |
| transport-tractor | ar | le tracteur | جرار | Un tracteur ! | 0.743 | 0.672 |
| numbers-keycap_4 | ar | quatre | أربعة | Il y en a quatre. | 0.968 | 0.675 |
| wild-turtle | ar | la tortue | سلحفاة | Une tortue ! | 0.414 | 0.675 |
| transport-train | ar | le train | قطار | Un train ! | 0.864 | 0.675 |
| jobs-office_worker | ar | l’employé de bureau | موظف | Un employé. | 0.788 | 0.677 |
| landscapes-volcano | ar | le volcan | بركان | Un volcan ! | 0.496 | 0.678 |
| travel-compass | ar | la boussole | بوصلة | Une boussole. | 0.538 | 0.678 |
| transport-motor_scooter | ar | le scooter | سكوتر بمحرك | Un scooter à moteur. | 0.762 | 0.679 |
| health-adhesive_bandage | ar | le pansement | ضمادة لاصقة | Un pansement. | 0.392 | 0.68 |
| wild-snake | ar | le serpent | ثعبان | Un serpent ! | 0.459 | 0.681 |
| birds-peacock | ar | le paon | طاووس | Un paon . | 0.483 | 0.682 |
| places-playground_slide | ar | l’aire de jeux | ملعب الأطفال | Le terrain de jeux pour enfants. | 0.679 | 0.682 |
| objects-camera | ar | l’appareil photo | آلة تصوير | Une caméra. | 0.771 | 0.683 |
| sports-volleyball | ar | le volley | الكرة الطائرة | Le volley-ball . | 0.509 | 0.683 |
| clothes-scarf | ar | l’écharpe | وشاح | Une écharpe. | 0.564 | 0.685 |
| transport-delivery_truck | ar | le camion | شاحنة | Une camionnette ! | 0.805 | 0.686 |
| pl1 | ar | Où en est notre conteneur ? Il devait arriver lundi. | ما وضع حاويتنا؟ كان من المفترض أن تصل يوم الاثنين. | Le conteneur devait arriver lundi. | 0.679 | 0.687 |
| landscapes-national_park | ar | le parc naturel | محمية طبيعية | Une réserve naturelle. | 0.642 | 0.689 |
| jobs-mechanic | ar | le mécanicien | ميكانيكي | Je suis mécanicien. | 0.731 | 0.689 |
| actions-cooking | ar | cuisiner | طبخ | Je cuisine. | 0.855 | 0.689 |
| sports-skier | ar | le ski | التزلج | Je fais du ski. | 0.756 | 0.69 |
| farm-hamster | ar | le hamster | هامستر | Un hamster ! | 0.694 | 0.691 |
| sea-whale | ar | la baleine | حوت | Une baleine ! | 0.286 | 0.691 |
| plants-deciduous_tree | ar | l’arbre | شجرة | Un arbre ! | 0.822 | 0.691 |
| fruits-grapes | ar | le raisin | عنب | Des raisins. | 0.387 | 0.692 |
| clothes-dress | ar | la robe | فستان | Une robe ! | 0.689 | 0.693 |
| birds-honeybee | ar | l’abeille | نحلة | Une abeille ! | 0.455 | 0.694 |
| clothes-necktie | ar | la cravate | ربطة عنق | Une cravate. | 0.626 | 0.695 |
| house-elevator | ar | l’ascenseur | مصعد | Un ascenseur ! | 0.846 | 0.696 |
| travel-bellhop_bell | ar | la réception | الاستقبال | À la réception . | 0.816 | 0.697 |
| body-nose | ar | le nez | أنف | Le nez ! | 0.735 | 0.698 |
| transport-sailboat | ar | le voilier | مركب شراعي | Un voilier ! | 0.236 | 0.698 |
| music-artist_palette | ar | la peinture | الرسم | Le dessin . | 0.761 | 0.698 |
| vegetables-mushroom | ar | le champignon | فطر | Des champignons ! | 0.444 | 0.699 |
| weather-wind_face | ar | le vent | ريح | Le vent ! | 0.471 | 0.699 |
| sports-running_shirt | ar | le maillot | القميص الرياضي | Le maillot de sport . | 0.539 | 0.699 |
| farm-cow | ar | la vache | بقرة | Une vache ! | 0.678 | 0.7 |
| sports-trophy | ar | la coupe | الكأس | La coupe ! | 0.602 | 0.7 |
| sweets-birthday_cake | ar | le gâteau d’anniversaire | كعكة عيد الميلاد | Un gâteau de Noël . | 0.807 | 0.701 |
| kitchen-cooking | ar | la poêle | مقلاة | Une poêle ! | 0.753 | 0.702 |
| f5 | ar | L'addition, s'il vous plaît. | الحساب من فضلك. | Le compte, s'il vous plaît. | 0.608 | 0.703 |
| colors-purple_square | ar | violet | بنفسجي | Dans le violet. | 0.77 | 0.703 |
| family-baby | ar | le bébé | رضيع | Un bébé ! | 0.82 | 0.704 |
| jobs-farmer | ar | l’agriculteur | مزارع | Des fermiers. | 0.762 | 0.704 |
| school-file_folder | ar | le dossier | ملف | Un dossier . | 0.742 | 0.704 |
| sea-water_wave | ar | la vague | موجة | Une vague. | 0.764 | 0.706 |
| house-door | ar | la porte | باب | Une porte ! | 0.804 | 0.706 |
| transport-tram | ar | le tramway | ترام | Le tramway ! | 0.62 | 0.706 |
| family-couple_with_heart | ar | le couple | زوجان | Une paire. | 0.857 | 0.707 |
| actions-thinking_face | ar | réfléchir | تفكير | Une réflexion. | 0.893 | 0.707 |
| body-index_pointing_up | ar | le doigt | إصبع | Un doigt ! | 0.827 | 0.708 |
| wild-tiger | ar | le tigre | نمر | Un tigre ! | 0.351 | 0.709 |
| vegetables-g1 | ar | des carottes et des pommes de terre | جزر وبطاطا | Des îles et des pommes de terre. | 0.557 | 0.71 |
| weather-umbrella_with_rain_drops | ar | le parapluie | مظلة | Un parapluie . | 0.614 | 0.71 |
| farm-horse | ar | le cheval | حصان | Un cheval ! | 0.844 | 0.711 |
| jobs-judge | ar | le juge | قاض | Un juge ! | 0.46 | 0.711 |
| wild-gorilla | ar | le gorille | غوريلا | Une gorille ! | 0.67 | 0.713 |
| house-key | ar | la clé | مفتاح | Une clé ! | 0.808 | 0.713 |
| accessories-backpack | ar | le sac à dos | حقيبة ظهر | Un sac à dos. | 0.803 | 0.713 |
| birds-dove | ar | la colombe | حمامة | Une colombe. | 0.499 | 0.714 |
| school-page_facing_up | ar | la feuille de papier | ورقة | Une feuille. | 0.826 | 0.714 |
| ps1 | ar | Bonjour, je suis l'infirmier de garde. Où avez-vous mal ? | مرحبًا، أنا الممرض المناوب. أين تشعر بالألم؟ | Je suis l'infirmière de service. | 0.811 | 0.716 |
| meals-cooked_rice | ar | le riz | أرز | Le riz ! | 0.705 | 0.716 |
| plants-rose | ar | la rose | وردة | Une rose. | 0.643 | 0.716 |
| family-girl | ar | la fille | بنت | Une fille ! | 0.746 | 0.716 |
| family-man | ar | l’homme | رجل | Un homme ! | 0.9 | 0.716 |
| wild-wolf | ar | le loup | ذئب | Un loup ! | 0.602 | 0.717 |
| drinks-bubble_tea | ar | le thé aux perles | شاي الفقاعات | Le thé aux bulles. | 0.54 | 0.718 |
| jobs-pilot | ar | le pilote | طيار | Un pilote ! | 0.778 | 0.718 |
| g3 | ar | Bien, merci. Bienvenue ! | بخير، شكرًا. أهلًا وسهلًا! | Je vais bien, merci. | 0.877 | 0.719 |
| transport-ambulance | ar | l’ambulance | سيارة إسعاف | Une ambulance ! | 0.785 | 0.719 |
| vegetables-onion | ar | l’oignon | بصلة | Une oignon. | 0.412 | 0.72 |
| meals-bowl_with_spoon | ar | la soupe | حساء | Une soupe ! | 0.663 | 0.72 |
| farm-rabbit | ar | le lapin | أرنب | Un lapin ! | 0.733 | 0.72 |
| wild-rhinoceros | ar | le rhinocéros | وحيد القرن | Le rhinocéros ! | 0.309 | 0.72 |
| landscapes-wood | ar | le bois | خشب | Le bois ! | 0.763 | 0.72 |
| drinks-teacup_without_handle | ar | le thé | شاي | Un thé ! | 0.73 | 0.721 |
| wild-giraffe | ar | la girafe | زرافة | Une girafe ! | 0.635 | 0.721 |
| travel-luggage | ar | la valise | حقيبة سفر | Une valise. | 0.673 | 0.721 |
| transport-taxi | ar | le taxi | سيارة أجرة | Un taxi ! | 0.651 | 0.722 |
| birds-butterfly | ar | le papillon | فراشة | Un papillon ! | 0.773 | 0.723 |
| school-pencil | ar | le crayon | قلم رصاص | Un crayon . | 0.714 | 0.723 |
| family-old_woman | ar | la grand-mère | جدة | Une grand-mère ! | 0.265 | 0.724 |
| feelings-red_heart | ar | l’amour | الحب | Pour l'amour. | 0.924 | 0.725 |
| house-mirror | ar | le miroir | مرآة | Un miroir ! | 0.867 | 0.725 |
| bathroom-basket | ar | le panier | سلة | Un panier . | 0.78 | 0.725 |
| vegetables-beans | ar | les haricots | فاصوليا | Des haricots ! | 0.573 | 0.726 |
| drinks-droplet | ar | l’eau | ماء | Il y a de l'eau. | 0.886 | 0.726 |
| house-house_with_garden | ar | le jardin | حديقة | Un jardin ! | 0.878 | 0.726 |
| tech-satellite | ar | le satellite | قمر صناعي | Un satellite . | 0.497 | 0.727 |
| tech-telescope | ar | le télescope | تلسكوب | Un télescope ! | 0.807 | 0.727 |
| signs-left_arrow | ar | la gauche | اليسار | À gauche ! | 0.88 | 0.728 |
| objects-envelope | ar | l’enveloppe | ظرف | Une enveloppe. | 0.635 | 0.728 |
| travel-fuel_pump | ar | la station-service | محطة الوقود | À la station-service. | 0.603 | 0.728 |
| vegetables-potato | ar | la pomme de terre | بطاطا | Des pommes de terre ! | 0.668 | 0.729 |
| house-ladder | ar | l’échelle | سلم | Une échelle. | 0.704 | 0.729 |
| travel-ticket | ar | le billet | تذكرة | Un billet . | 0.752 | 0.729 |
| body-anatomical_heart | ar | le cœur | قلب | Un cœur ! | 0.93 | 0.73 |
| accessories-handbag | ar | le sac à main | حقيبة يد | Un sac à main. | 0.815 | 0.73 |
| transport-rocket | ar | la fusée | صاروخ | Une fusée ! | 0.747 | 0.73 |
| sweets-ice_cream | ar | la glace | مثلجات | Des glaces ! | 0.285 | 0.731 |
| plants-tulip | ar | la tulipe | توليب | Une tulipe ! | 0.595 | 0.731 |
| family-family_man_boy | ar | le père | أب | Mon père ! | 0.79 | 0.731 |
| signs-right_arrow | ar | la droite | اليمين | À droite ! | 0.895 | 0.732 |
| fruits-cherries | ar | les cerises | كرز | Des cerises ! | 0.594 | 0.732 |
| clothes-socks | ar | les chaussettes | جوارب | Des chaussettes ! | 0.791 | 0.732 |
| clothes-one_piece_swimsuit | ar | le maillot de bain | ملابس السباحة | Des maillots de bain. | 0.736 | 0.732 |
| kitchen-kitchen_knife | ar | le couteau | سكين | Un couteau ! | 0.781 | 0.733 |
| landscapes-desert | ar | le désert | صحراء | C'est le désert. | 0.868 | 0.733 |
| colors-blue_square | ar | bleu | أزرق | Le bleu ! | 0.937 | 0.735 |
| farm-chicken | ar | la poule | دجاجة | Une poule ! | 0.768 | 0.735 |
| actions-person_taking_bath | ar | prendre un bain | استحمام | Je prends une douche. | 0.827 | 0.735 |
| sea-fish | ar | le poisson | سمكة | Un poisson ! | 0.787 | 0.736 |
| bathroom-shower | ar | la douche | الدش | La douche ! | 0.541 | 0.736 |
| plants-potted_plant | ar | la plante | نبتة | Une plante. | 0.527 | 0.737 |
| school-closed_book | ar | le livre | كتاب | Un livre. | 0.821 | 0.738 |
| transport-airplane | ar | l’avion | طائرة | Un avion ! | 0.858 | 0.739 |
| sports-ice_skate | ar | le patinage | التزلج على الجليد | Le patinage sur glace. | 0.668 | 0.739 |
| colors-orange_square | ar | orange | برتقالي | Une orange. | 0.877 | 0.74 |
| vegetables-carrot | ar | la carotte | جزرة | Une carotte. | 0.389 | 0.74 |
| farm-dog | ar | le chien | كلب | Un chien ! | 0.828 | 0.74 |
| body-lungs | ar | les poumons | الرئتان | Les deux poumons. | 0.684 | 0.741 |
| colors-yellow_square | ar | jaune | أصفر | Le jaune ! | 0.857 | 0.742 |
| time-watch | ar | la montre | ساعة يد | Une montre . | 0.621 | 0.742 |
| places-fountain | ar | la fontaine | نافورة | Une fontaine. | 0.758 | 0.742 |
| actions-writing_hand | ar | écrire | كتابة | Une écriture. | 0.833 | 0.744 |
| ph2 | ar | Oui, merci. Mon fils est allergique aux arachides. | نعم، شكرًا. ابني لديه حساسية من الفول السوداني. | Mon fils est allergique aux cacahuètes. | 0.914 | 0.745 |
| birds-bird | ar | l’oiseau | طائر | Un oiseau ! | 0.769 | 0.745 |
| feelings-tired_face | ar | fatigué | متعب | Je suis fatigué. | 0.668 | 0.745 |
| body-mouth | ar | la bouche | فم | Une bouche ! | 0.537 | 0.746 |
| transport-helicopter | ar | l’hélicoptère | مروحية | Un hélicoptère ! | 0.655 | 0.746 |
| meals-sandwich | ar | le sandwich | شطيرة | Un sandwich . | 0.388 | 0.747 |
| body-brain | ar | le cerveau | دماغ | Un cerveau ! | 0.885 | 0.747 |
| jobs-g2 | ar | Elle est pilote. | هي طيارة. | C'est un avion. | 0.85 | 0.747 |
| objects-teddy_bear | ar | l’ours en peluche | دب محشو | Un ours en peluche . | 0.358 | 0.747 |
| places-office_building | ar | le bureau | مكتب | Un bureau . | 0.845 | 0.747 |
| actions-tumbler_glass | ar | boire | شرب | Une boisson. | 0.935 | 0.748 |
| places-department_store | ar | le grand magasin | متجر كبير | Une grande boutique. | 0.837 | 0.748 |
| sports-basketball | ar | le basket | كرة السلة | Le basket. | 0.497 | 0.748 |
| accessories-ring | ar | la bague | خاتم | Une bague ! | 0.735 | 0.749 |
| birds-penguin | ar | le pingouin | بطريق | Un pingouin ! | 0.263 | 0.75 |
| feelings-angry_face | ar | en colère | غاضب | Je suis en colère. | 0.881 | 0.75 |
| weather-star | ar | l’étoile | نجمة | Une étoile ! | 0.882 | 0.753 |
| school-scissors | ar | les ciseaux | مقص | Des ciseaux ! | 0.571 | 0.753 |
| jobs-astronaut | ar | l’astronaute | رائد فضاء | Un astronaute ! | 0.58 | 0.754 |
| transport-automobile | ar | la voiture | سيارة | Une voiture ! | 0.889 | 0.754 |
| meals-hamburger | ar | le hamburger | همبرغر | Des hamburgers ! | 0.565 | 0.755 |
| house-television | ar | la télévision | تلفاز | Une télé ! | 0.806 | 0.755 |
| transport-bicycle | ar | le vélo | دراجة | Une bicyclette. | 0.884 | 0.755 |
| family-woman | ar | la femme | امرأة | Une femme ! | 0.896 | 0.756 |
| tech-robot | ar | le robot | روبوت | Un robot ! | 0.852 | 0.756 |
| tech-microscope | ar | le microscope | مجهر | Un microscope ! | 0.488 | 0.756 |
| jobs-factory_worker | ar | l’ouvrier | عامل | Un travailleur. | 0.499 | 0.757 |
| travel-motorway | ar | l’autoroute | الطريق السريع | À l'autoroute. | 0.76 | 0.757 |
| school-bar_chart | ar | le graphique | رسم بياني | Un graphique . | 0.694 | 0.757 |
| music-trumpet | ar | la trompette | بوق | Une trompette ! | 0.377 | 0.757 |
| jobs-police_officer | ar | le policier | شرطي | Un officier de police. | 0.745 | 0.759 |
| jobs-artist | ar | l’artiste | فنان | Un artiste. | 0.826 | 0.761 |
| weather-snowman | ar | le bonhomme de neige | رجل الثلج | L'homme des neiges ! | 0.81 | 0.762 |
| music-flute | ar | la flûte | فلوت | La flûte ! | 0.629 | 0.762 |
| meals-pizza | ar | la pizza | بيتزا | Une pizza ! | 0.803 | 0.766 |
| sweets-candy | ar | le bonbon | حلوى | Des bonbons . | 0.785 | 0.766 |
| actions-person_raising_hand | ar | lever la main | رفع اليد | Levez la main ! | 0.82 | 0.766 |
| clothes-gloves | ar | les gants | قفازات | Des gants ! | 0.748 | 0.766 |
| places-hotel | ar | l’hôtel | فندق | Un hôtel. | 0.748 | 0.766 |
| tech-video_camera | ar | la caméra | كاميرا فيديو | Une caméra vidéo. | 0.805 | 0.766 |
| bathroom-bathtub | ar | la baignoire | حوض الاستحمام | Dans la baignoire. | 0.833 | 0.767 |
| places-castle | ar | le château | قلعة | Un château. | 0.845 | 0.767 |
| games-chess_pawn | ar | les échecs | الشطرنج | Les échecs ! | 0.52 | 0.767 |
| time-alarm_clock | ar | le réveil | منبه | Le réveil ! | 0.352 | 0.768 |
| family-old_man | ar | le grand-père | جد | Le grand-père ! | 0.552 | 0.769 |
| vegetables-ginger_root | ar | le gingembre | زنجبيل | Le gingembre ! | 0.727 | 0.771 |
| travel-world_map | ar | la carte | خريطة | Une carte. | 0.656 | 0.772 |
| sports-tennis | ar | le tennis | التنس | Le tennis ! | 0.776 | 0.773 |
| signs-red_question_mark | ar | la question | السؤال | La question est: | 0.877 | 0.774 |
| fruits-red_apple | ar | la pomme | تفاحة | Une pomme ! | 0.71 | 0.774 |
| places-convenience_store | ar | l’épicerie | بقالة | Une épicerie. | 0.838 | 0.774 |
| house-couch_and_lamp | ar | le canapé | أريكة | Un canapé . | 0.78 | 0.775 |
| jobs-singer | ar | le chanteur | مغن | Un chanteur. | 0.415 | 0.776 |
| s5 | ar | Bien sûr, les cabines sont au fond. | طبعًا، غرف القياس في الخلف. | Bien sûr, les salles de mesure sont à l'arrière. | 0.641 | 0.777 |
| jobs-health_worker | ar | le médecin | طبيب | Un docteur. | 0.911 | 0.777 |
| jobs-detective | ar | le détective | محقق | Un détective. | 0.698 | 0.777 |
| jobs-guard | ar | le gardien | حارس | Un gardien . | 0.879 | 0.778 |
| landscapes-globe_showing_europe_africa | ar | la Terre | الأرض | La terre ! | 0.903 | 0.779 |
| health-pill | ar | le médicament | دواء | Des médicaments. | 0.874 | 0.779 |
| games-party_popper | ar | la fête | الحفلة | La fête ! | 0.768 | 0.779 |
| fruits-strawberry | ar | la fraise | فراولة | Une fraise. | 0.515 | 0.78 |
| house-house | ar | la maison | بيت | Une maison. | 0.86 | 0.78 |
| house-chair | ar | la chaise | كرسي | Une chaise. | 0.845 | 0.781 |
| house-candle | ar | la bougie | شمعة | Une bougie. | 0.729 | 0.781 |
| farm-mouse | ar | la souris | فأر | Une souris. | 0.382 | 0.782 |
| bathroom-toilet | ar | les toilettes | المرحاض | Les toilettes ! | 0.771 | 0.782 |
| bathroom-roll_of_paper | ar | le papier toilette | ورق التواليت | Le papier toilette ! | 0.826 | 0.782 |
| objects-flashlight | ar | la lampe de poche | مصباح يدوي | Une lampe de poche. | 0.71 | 0.782 |
| x3 | ar | Dites-le-lui avec tact : il est très susceptible. | قل له ذلك بلباقة، فهو سريع الانفعال. | Dis-le-lui gentiment, il est tendu. | 0.772 | 0.783 |
| house-window | ar | la fenêtre | نافذة | Une fenêtre. | 0.871 | 0.783 |
| s4 | ar | Du M, mais je voudrais l'essayer. | مقاس متوسط، لكن أريد أن أجربها. | Une taille moyenne, mais je veux l'essayer. | 0.766 | 0.784 |
| a6 | ar | En compensant par plus de flexibilité sur les horaires. | بالتعويض عن ذلك بمرونة أكبر في أوقات العمل. | En contrepartie, des heures de travail plus flexibles. | 0.809 | 0.784 |
| places-cityscape | ar | la ville | مدينة | Une ville. | 0.761 | 0.784 |
| meals-meat_on_bone | ar | la viande | لحم | Une viande ! | 0.872 | 0.787 |
| objects-mobile_phone | ar | le téléphone portable | هاتف محمول | Un téléphone portable. | 0.873 | 0.787 |
| kitchen-fork_and_knife_with_plate | ar | l’assiette | طبق | Une assiette. | 0.676 | 0.788 |
| pt4 | ar | Environ huit cents, pendant quarante minutes ; le service est rétabli. | نحو ثمانمئة مستخدم لمدة أربعين دقيقة؛ وقد استُعيدت الخدمة. | Près de 800 utilisateurs pendant 40 minutes; le service est rétabli. | 0.808 | 0.789 |
| clothes-man_s_shoe | ar | les chaussures | حذاء | Des chaussures ! | 0.804 | 0.789 |
| accessories-glasses | ar | les lunettes | نظارة | Des lunettes ! | 0.791 | 0.79 |
| accessories-crown | ar | la couronne | تاج | Une couronne. | 0.739 | 0.79 |
| x6 | ar | Je le condenserai pour n'en garder que l'essentiel. | سأختصره لأحتفظ بالأساسي فقط. | Je vais raccourcir pour ne retenir que le fond. | 0.791 | 0.792 |
| fruits-pineapple | ar | l’ananas | أناناس | Des ananas ! | 0.626 | 0.792 |
| places-factory | ar | l’usine | مصنع | Une usine. | 0.865 | 0.792 |
| sports-person_in_lotus_position | ar | le yoga | اليوغا | Le yoga ! | 0.748 | 0.792 |
| weather-crescent_moon | ar | la lune | قمر | Une lune. | 0.666 | 0.793 |
| objects-radio | ar | la radio | مذياع | Une radio. | 0.313 | 0.793 |
| music-accordion | ar | l’accordéon | أكورديون | L'accordéon ! | 0.58 | 0.793 |
| jobs-teacher | ar | l’enseignant | معلم | Un professeur. | 0.878 | 0.795 |
| wild-panda | ar | le panda | باندا | Le panda ! | 0.665 | 0.796 |
| tech-laptop | ar | l’ordinateur portable | حاسوب محمول | Un ordinateur portable. | 0.824 | 0.796 |
| fruits-lemon | ar | le citron | ليمونة | Un citron. | 0.718 | 0.797 |
| landscapes-beach_with_umbrella | ar | la plage | شاطئ | Une plage. | 0.901 | 0.798 |
| actions-person_biking | ar | faire du vélo | ركوب الدراجة | À vélo. | 0.833 | 0.798 |
| school-crayon | ar | le crayon de couleur | قلم تلوين | Un crayon à colorier . | 0.822 | 0.798 |
| plants-hibiscus | ar | la fleur | زهرة | Une fleur. | 0.88 | 0.799 |
| meals-cheese_wedge | ar | le fromage | جبن | Le fromage ! | 0.745 | 0.801 |
| accessories-gem_stone | ar | la pierre précieuse | جوهرة | Une pierre précieuse. | 0.612 | 0.801 |
| games-circus_tent | ar | le cirque | السيرك | Le cirque ! | 0.603 | 0.807 |
| meals-spaghetti | ar | les pâtes | معكرونة | Des pâtes ! | 0.44 | 0.809 |
| tech-satellite_antenna | ar | l’antenne | هوائي | Une antenne. | 0.596 | 0.812 |
| sports-rugby_football | ar | le rugby | الرغبي | Le rugby ! | 0.309 | 0.812 |
| tech-e_mail | ar | le courriel | البريد الإلكتروني | Le courrier électronique. | 0.729 | 0.817 |
| meals-butter | ar | le beurre | زبدة | Le beurre ! | 0.691 | 0.819 |
| fruits-banana | ar | la banane | موزة | Une banane. | 0.567 | 0.829 |
| weather-sun | ar | le soleil | شمس | Le soleil ! | 0.676 | 0.83 |
| sports-person_surfing | ar | le surf | ركوب الأمواج | Le surf. | 0.616 | 0.831 |
| birds-g2 | ar | Les oiseaux chantent. | العصافير تغرد. | Les oiseaux tweetent. | 0.507 | 0.838 |
| meals-green_salad | ar | la salade | سلطة | Une salade. | 0.417 | 0.839 |
| transport-fire_engine | ar | le camion de pompiers | سيارة إطفاء | Une voiture de pompiers. | 0.729 | 0.842 |
| plants-g2 | ar | J’arrose les plantes. | أسقي النباتات. | Arrosez les plantes. | 0.725 | 0.848 |
| sports-boxing_glove | ar | la boxe | الملاكمة | La boxe . | 0.707 | 0.848 |
| fruits-coconut | ar | la noix de coco | جوز الهند | Des noix de coco. | 0.667 | 0.861 |
| music-guitar | ar | la guitare | غيتار | Une guitare. | 0.701 | 0.862 |
| sports-person_swimming | ar | la natation | السباحة | La natation . | 0.746 | 0.862 |
| family-people_holding_hands | ar | les amis | الأصدقاء | Les amis . | 0.719 | 0.869 |
| music-paintbrush | ar | le pinceau | فرشاة الرسم | Le pinceau . | 0.721 | 0.869 |
| sea-tropical_fish | ar | le poisson tropical | سمكة استوائية | Un poisson tropical. | 0.648 | 0.872 |
| wild-polar_bear | ar | l’ours polaire | الدب القطبي | L'ours polaire . | 0.562 | 0.875 |
| music-violin | ar | le violon | كمان | Le violon. | 0.316 | 0.896 |
| sea-g1 | ar | Le dauphin saute. | الدلفين يقفز. | Les dauphins sautent. | 0.739 | 0.908 |
| wild-g2 | ar | un grand éléphant gris | فيل كبير رمادي | Un grand éléphant gris. | 0.665 | 0.917 |
| sweets-g1 | ar | une glace au chocolat | مثلجات بالشوكولاتة | Une glace au chocolat. | 0.686 | 0.924 |
| time-g2 | ar | Le réveil sonne à sept heures. | المنبه يرن في السابعة. | L'alarme sonne à sept heures. | 0.731 | 0.931 |
| x4 | ar | Je vais formuler ma critique sous forme de suggestion. | سأصوغ نقدي في شكل اقتراح. | Je vais formuler ma critique sous la forme d'une proposition. | 0.716 | 0.973 |
| weather-g1 | ar | Il pleut. | إنها تمطر. | Il pleut. | 0.721 | 1.0 |
| bathroom-g2 | ar | Je prends une douche. | أستحم. | Je prends une douche. | 0.53 | 1.0 |
| accessories-g1 | ar | Où sont mes lunettes ? | أين نظارتي؟ | Où sont mes lunettes ? | 0.729 | 1.0 |
| music-g1 | ar | Je joue de la guitare. | أعزف على الغيتار. | Je joue de la guitare. | 0.567 | 1.0 |
| farm-donkey | ber | l’âne | aɣyul | C'est toujours le cas. | — | 0.2 |
| vegetables-garlic | ber | l’ail | tiskert | L'architecture | — | 0.21 |
| body-tooth | ber | la dent | axs | Je suis désolé. | — | 0.213 |
| colors-white_large_square | ber | blanc | umlil | L'héritage | — | 0.218 |
| wild-turtle | ber | la tortue | ifkr | Il l'a fait. | — | 0.221 |
| meals-salt | ber | le sel | tisnt | Ils sont morts. | — | 0.234 |
| farm-ewe | ber | le mouton | ikrri | Il est en train de mourir. | — | 0.244 |
| farm-rabbit | ber | le lapin | awtul | Il est mort. | — | 0.248 |
| farm-camel | ber | le dromadaire | alɣum | L'écriture | — | 0.249 |
| birds-honeybee | ber | l’abeille | tizwit | Première étape | — | 0.249 |
| farm-ox | ber | le bœuf | azgr | L'intermédiaire | — | 0.251 |
| wild-hedgehog | ber | le hérisson | insi | Je me souviens. | — | 0.254 |
| numbers-keycap_8 | ber | huit | tam | Famille | — | 0.255 |
| fruits-olive | ber | l’olive | azmmur | Droit d'auteur | — | 0.267 |
| house-house_with_garden | ber | le jardin | urti | Il n'y en a pas. | — | 0.267 |
| meals-meat_on_bone | ber | la viande | aysum | L'essoufflement | — | 0.274 |
| weather-wind_face | ber | le vent | aḍu | Il est mort. | — | 0.285 |
| colors-black_large_square | ber | noir | aberkan | L'avion | — | 0.286 |
| landscapes-rock | ber | le rocher | azru | Retour en arrière | — | 0.289 |
| jobs-farmer | ber | l’agriculteur | afllaḥ | En haut | — | 0.291 |
| farm-rooster | ber | le coq | ayaziḍ | C'est le cas. | — | 0.292 |
| body-flexed_biceps | ber | le bras | iɣil | Peut-être | — | 0.298 |
| plants-deciduous_tree | ber | l’arbre | aseklu | L'accouchement | — | 0.301 |
| landscapes-mountain | ber | la montagne | adrar | Répondre | — | 0.303 |
| meals-honey_pot | ber | le miel | tamment | L'héritage | — | 0.306 |
| travel-tent | ber | la tente | aqiṭun | Aquitaine | — | 0.318 |
| farm-horse | ber | le cheval | ayyis | Il est mort. | — | 0.319 |
| weather-cloud | ber | le nuage | asigna | L'expérience | — | 0.324 |
| vegetables-onion | ber | l’oignon | azalim | Le paysage | — | 0.332 |
| colors-yellow_square | ber | jaune | awraɣ | Je l'ai appelé. | — | 0.333 |
| farm-chicken | ber | la poule | tafullust | La polygamie | — | 0.34 |
| wild-fox | ber | le renard | abaɣuɣ | L'évangile | — | 0.34 |
| weather-cloud_with_rain | ber | la pluie | anzar | L'inconvénient | — | 0.341 |
| farm-mouse | ber | la souris | aɣrda | Le jardin | — | 0.344 |
| body-nose | ber | le nez | tinzar | Le théâtre | — | 0.345 |
| body-anatomical_heart | ber | le cœur | ul | Elle est morte. | — | 0.346 |
| f5 | ber | L'addition, s'il vous plaît. | Lḥsab, ttxil. | Le calcul, c'est bien. | — | 0.347 |
| meals-egg | ber | l’œuf | tamllalt | Blanche | — | 0.352 |
| colors-red_square | ber | rouge | azggaɣ | Le droit | — | 0.355 |
| body-bone | ber | l’os | iɣs | Peut-être | — | 0.363 |
| fruits-grapes | ber | le raisin | aḍil | L'héritage | — | 0.368 |
| body-tongue | ber | la langue | ils | Il est mort. | — | 0.377 |
| plants-palm_tree | ber | le palmier | tazdayt | La relation | — | 0.378 |
| g2 | ber | Très bien, merci. Et vous ? | Labas, tanmmirt. D kyyi? | Je vous en prie, mémoire. C'est qui ? | — | 0.384 |
| weather-snowflake | ber | la neige | adfl | Le changement | — | 0.389 |
| wild-lion | ber | le lion | izm | L'écriture | — | 0.39 |
| house-key | ber | la clé | tasarut | Le théâtre | — | 0.393 |
| birds-bird | ber | l’oiseau | agḍiḍ | Le reste | — | 0.394 |
| farm-goat | ber | la chèvre | taɣaṭṭ | La couleur | — | 0.397 |
| body-index_pointing_up | ber | le doigt | aḍaḍ | D'autres | — | 0.397 |
| time-night_with_stars | ber | la nuit | iḍ | Un autre | — | 0.403 |
| body-ear | ber | l’oreille | amẓẓuɣ | Le rouge | — | 0.406 |
| family-boy | ber | le garçon | afrux | L'arbre à fleurs | — | 0.409 |
| wild-snake | ber | le serpent | ifiɣr | Le chiffre | — | 0.423 |
| weather-g1 | ber | Il pleut. | Ikkat unzar. | Il avait le nez cassé. | — | 0.428 |
| farm-dog | ber | le chien | aydi | Qui est-ce ? | — | 0.43 |
| g4 | ber | Merci beaucoup. | Tanmmirt bahra. | L'expérience est très intéressante. | — | 0.439 |
| farm-cat | ber | le chat | amuccu | Le mouvement | — | 0.439 |
| music-drum | ber | le tambour | agwal | Le couteau | — | 0.444 |
| weather-fire | ber | le feu | timssi | L'entreprise | — | 0.446 |
| drinks-teacup_without_handle | ber | le thé | atay | Le choix | — | 0.447 |
| n4 | ber | Ça fait vingt euros. | Ɛacrin n uru. | Ils ont quitté l'Europe. | — | 0.458 |
| family-girl | ber | la fille | tafruxt | L'eau de pluie | — | 0.458 |
| body-eye | ber | l’œil | tiṭṭ | L'écriture | — | 0.458 |
| g3 | ber | Bien, merci. Bienvenue ! | Labas, tanmmirt. Ansuf! | S'il vous plaît, écoutez-moi. Je suis désolé ! | — | 0.472 |
| house-door | ber | la porte | tawwurt | Le pays | — | 0.473 |
| i3 | ber | D'où venez-vous ? | Manis d tkkit? | Qui est la victime ? | — | 0.481 |
| g5 | ber | Au revoir, à demain ! | Ar timlilit, ar azekka! | À la nuit tombée, à la tombée de la nuit ! | — | 0.487 |
| numbers-keycap_9 | ber | neuf | tẓa | Elle a neuf ans. | — | 0.489 |
| body-foot | ber | le pied | aḍar | L'autre | — | 0.496 |
| wild-frog | ber | la grenouille | agru | Le cerveau | — | 0.497 |
| farm-cow | ber | la vache | tafunast | Le feu | — | 0.503 |
| places-school | ber | l’école | aɣerbaz | L'armée | — | 0.509 |
| n1 | ber | Quelle heure est-il ? | Mnck a tga tasaɛt? | Est-ce que c'est une compétition ? | — | 0.511 |
| numbers-keycap_3 | ber | trois | kraḍ | Quelques-uns | — | 0.516 |
| meals-bread | ber | le pain | aɣrum | La ville | — | 0.522 |
| body-mouth | ber | la bouche | imi | L'homme | — | 0.523 |
| n5 | ber | J'ai rendez-vous lundi à dix heures. | Ɣuri lmuɛad ass n aynas g tasaɛt tis mraw. | Le jeune homme a travaillé aujourd'hui à dix heures. | — | 0.527 |
| d2 | ber | Allez tout droit, puis tournez à gauche. | Ddu nican, tɛddit s uzlmaḍ. | En arrivant à Nichan, elle tourne à gauche. | — | 0.529 |
| n6 | ber | Parfait, à lundi ! | Ifulki, ar aynas! | C'est bon, c'est comme ça ! | — | 0.541 |
| n3 | ber | Combien ça coûte ? | Mnck ayd isswa? | Qu'est-ce qu'il est devenu ? | — | 0.555 |
| k1 | ber | Quelle est ta couleur préférée ? | Man ini ayd tḥmmlt? | Qu'est-ce que vous avez pensé ? | — | 0.595 |
| health-pill | ber | le médicament | asafar | L'hôpital | — | 0.608 |
| body-raised_hand | ber | la main | afus | L'épaule | — | 0.616 |
| i4 | ber | Je viens du Maroc, j'habite à Agadir. | Nkki zg Lmɣrib, zdɣɣ g Agadir. | Nous étions en Afrique, j'habitais dans la forêt. | — | 0.623 |
| k2 | ber | J'aime le rouge et le jaune. | Ḥmmlɣ azggaɣ d uwraɣ. | J'ai pris la main droite et la gauche. | — | 0.637 |
| d1 | ber | Excusez-moi, où est la gare ? | Smḥ iyi, mani tlla lgar? | Dis-moi, où est l'arbre ? | — | 0.655 |
| house-g2 | ber | Où est la clé ? | Mani tasarut? | Quelle est la solution ? | — | 0.663 |
| d6 | ber | Oui, le bus 12 s'arrête juste en face. | Yah, ṭṭubis 12 ibedd ɣ tama ad. | Oui, l'hôtel 12 est situé à proximité. | — | 0.69 |
| f2 | ber | Un café et un jus d'orange, s'il vous plaît. | Yan lqhwa d yan lɛṣir n tlimunt, ttxil. | Une tasse de café et une tasse de citron ont été consommées. | — | 0.716 |
| d5 | ber | Je peux prendre le bus ? | Is zḍarɣ ad ddu s ṭṭubis? | Est-ce que je peux aller à Toulouse ? | — | 0.741 |
| weather-star | ber | l’étoile | itri | Étoile | — | 0.741 |
| f4 | ber | Non, sans sucre, merci. | Uhu, bla ssukkar, tanmmirt. | Oh, sans sucre, la mémoire. | — | 0.742 |
| g1 | ber | Bonjour ! Comment allez-vous ? | Azul! Mamk a tgit? | Allez ! Comment allez-vous ? | — | 0.771 |
| jobs-teacher | ber | l’enseignant | aslmad | Professeur | — | 0.8 |
| meals-honey_pot | en | le miel | honey | Je vous en prie. | 0.867 | 0.237 |
| school-paperclip | en | le trombone | paper clip | des pinces à papier | 0.231 | 0.265 |
| kitchen-canned_food | en | la boîte de conserve | tin | étain | 0.38 | 0.268 |
| school-memo | en | la note | note | Nom de l'établissement | 0.902 | 0.293 |
| games-yo_yo | en | le yo-yo | yo-yo | Je vous en prie. | 0.914 | 0.296 |
| school-pushpin | en | la punaise | drawing pin | épingle à dessin | 0.394 | 0.3 |
| actions-waving_hand | en | saluer de la main | to wave | à agiter | 0.421 | 0.355 |
| signs-red_question_mark | en | la question | question | Je vous en prie. | 0.942 | 0.356 |
| games-puzzle_piece | en | le puzzle | jigsaw | épingle à rouleaux | 0.688 | 0.369 |
| plants-seedling | en | la jeune pousse | seedling | semis | 0.628 | 0.371 |
| school-abacus | en | le boulier | abacus | abécus | 0.414 | 0.419 |
| signs-up_arrow | en | le haut | up | Levez-vous ! | 0.757 | 0.429 |
| bathroom-bucket | en | le seau | bucket | bouteille | 0.477 | 0.44 |
| family-people_hugging | en | le câlin | hug | Je t'embrasse. | 0.653 | 0.446 |
| transport-metro | en | le métro | underground | sous terre | 0.52 | 0.451 |
| school-clipboard | en | le porte-bloc | clipboard | le presse-papiers | 0.588 | 0.469 |
| sports-person_lifting_weights | en | la musculation | weightlifting | l'haltérophilie | 0.613 | 0.472 |
| time-g1 | en | Bonjour, bon matin ! | Good morning! | Je vous salue. | 0.791 | 0.475 |
| bathroom-broom | en | le balai | broom | éclaboussure | 0.661 | 0.481 |
| meals-flatbread | en | la galette | flatbread | pain plat | 0.691 | 0.487 |
| feelings-worried_face | en | inquiet | worried | Je m' inquiète . | 0.902 | 0.492 |
| family-baby | en | le bébé | baby | Je vous en prie, bébé. | 0.921 | 0.497 |
| sea-seal | en | le phoque | seal | le sceau | 0.4 | 0.5 |
| travel-station | en | la gare | station | station de métro | 0.609 | 0.502 |
| clothes-running_shoe | en | les baskets | trainers | entraîneurs | 0.558 | 0.503 |
| signs-right_arrow | en | la droite | right | C' est vrai. | 0.893 | 0.513 |
| jobs-construction_worker | en | le maçon | builder | constructeur | 0.568 | 0.518 |
| travel-vertical_traffic_light | en | le feu tricolore | traffic lights | feux de circulation | 0.425 | 0.518 |
| signs-cross_mark | en | faux | wrong | - C' est faux. | 0.727 | 0.523 |
| farm-camel | en | le dromadaire | camel | chameau | 0.595 | 0.53 |
| farm-baby_chick | en | le poussin | chick | poule | 0.541 | 0.538 |
| f6 | en | Voilà. Bonne journée ! | Here you are. Have a nice day! | Je vous en prie, passez une bonne journée. | 0.85 | 0.541 |
| sports-goal_net | en | le but | goal | objectif | 0.573 | 0.542 |
| time-hourglass_done | en | le sablier | hourglass | l'horloge à sable | 0.511 | 0.558 |
| sweets-candy | en | le bonbon | sweet | délicieux | 0.668 | 0.56 |
| sweets-popcorn | en | le pop-corn | popcorn | le maïs soufflé | 0.828 | 0.562 |
| objects-package | en | le colis | parcel | parcelles | 0.804 | 0.566 |
| house-framed_picture | en | le tableau | painting | peinture | 0.628 | 0.571 |
| school-calendar | en | l’agenda | diary | journaux | 0.699 | 0.572 |
| objects-electric_plug | en | la prise | plug | bouchon | 0.551 | 0.579 |
| sports-trophy | en | la coupe | trophy | le trophée | 0.556 | 0.585 |
| signs-down_arrow | en | le bas | down | vers le bas | 0.532 | 0.593 |
| health-sneezing_face | en | le rhume | cold | froid | 0.615 | 0.593 |
| birds-owl | en | la chouette | owl | oiseau | 0.72 | 0.602 |
| health-x_ray | en | la radio | X-ray | Radiographie | 0.483 | 0.603 |
| games-game_die | en | le dé | dice | dés | 0.469 | 0.606 |
| body-raised_hand | en | la main | hand | main | 0.912 | 0.611 |
| objects-battery | en | la pile | battery | batterie | 0.598 | 0.613 |
| feelings-star_struck | en | émerveillé | amazed | Je suis étonné. | 0.915 | 0.62 |
| x1 | en | Il ne faut pas vendre la peau de l'ours avant de l'avoir tué. | Don't count your chickens before they hatch. | Ne comptez pas vos poules avant qu'elles n'éclosent. | 0.582 | 0.624 |
| sweets-doughnut | en | le beignet | doughnut | le donut | 0.594 | 0.628 |
| clothes-jeans | en | le jean | jeans | Jeans | 0.685 | 0.629 |
| fruits-strawberry | en | la fraise | strawberry | les pommes de terre | 0.785 | 0.631 |
| sea-octopus | en | la pieuvre | octopus | poulpe | 0.525 | 0.637 |
| school-straight_ruler | en | la règle | ruler | régulateur | 0.692 | 0.638 |
| family-man | en | l’homme | man | Je suis un homme. | 0.933 | 0.644 |
| feelings-fearful_face | en | effrayé | scared | Je suis effrayé. | 0.884 | 0.644 |
| numbers-keycap_5 | en | cinq | five | Il y en a cinq. | 0.988 | 0.646 |
| health-adhesive_bandage | en | le pansement | plaster | le plâtre | 0.593 | 0.648 |
| clothes-thong_sandal | en | les tongs | flip-flops | chaussures à talons | 0.582 | 0.648 |
| kitchen-fork_and_knife_with_plate | en | l’assiette | plate | plaque | 0.859 | 0.65 |
| actions-microphone | en | chanter | to sing | Pour chanter | 0.717 | 0.651 |
| feelings-pensive_face | en | triste | sad | Je suis triste. | 0.968 | 0.652 |
| clothes-shorts | en | le short | shorts | Des shorts | 0.73 | 0.66 |
| objects-locked | en | le cadenas | padlock | porte-clés | 0.678 | 0.661 |
| wild-panda | en | le panda | panda | le panthéon | 0.921 | 0.662 |
| feelings-astonished_face | en | surpris | surprised | Je suis surpris. | 0.981 | 0.668 |
| plants-herb | en | l’herbe aromatique | herb | l'herbe | 0.653 | 0.67 |
| health-syringe | en | la piqûre | injection | injection | 0.673 | 0.673 |
| feelings-red_heart | en | l’amour | love | Je t'aime | 0.934 | 0.674 |
| actions-person_swimming | en | nager | to swim | à nager | 0.517 | 0.676 |
| sports-basketball | en | le basket | basketball | basket-ball | 0.646 | 0.676 |
| bathroom-lotion_bottle | en | la crème | lotion | crème hydratante | 0.595 | 0.68 |
| places-post_office | en | la poste | post office | bureau de poste | 0.711 | 0.685 |
| fruits-blueberries | en | les myrtilles | blueberries | les bleuets | 0.712 | 0.688 |
| drinks-ice | en | le glaçon | ice cube | cube de glace | 0.704 | 0.689 |
| drinks-cup_with_straw | en | la boisson fraîche | soft drink | boissons gazeuses | 0.789 | 0.692 |
| travel-construction | en | les travaux | roadworks | travaux routiers | 0.734 | 0.7 |
| transport-sailboat | en | le voilier | sailing boat | bateau à voile | 0.649 | 0.702 |
| house-elevator | en | l’ascenseur | lift | élévation | 0.793 | 0.705 |
| actions-man_dancing | en | danser | to dance | Pour danser . | 0.855 | 0.71 |
| travel-stop_sign | en | le panneau stop | stop sign | signe d'arrêt | 0.719 | 0.711 |
| ps1 | en | Bonjour, je suis l'infirmier de garde. Où avez-vous mal ? | Hello, I'm the nurse on duty. Where does it hurt? | Je suis l'infirmière de service. | 0.882 | 0.716 |
| kitchen-baby_bottle | en | le biberon | baby bottle | biberon pour bébés | 0.711 | 0.716 |
| sea-spiral_shell | en | le coquillage | shell | coquille | 0.653 | 0.72 |
| birds-flamingo | en | le flamant rose | flamingo | le flamant | 0.635 | 0.723 |
| feelings-face_with_tears_of_joy | en | rire | to laugh | Pour rire . | 0.911 | 0.723 |
| transport-kick_scooter | en | la trottinette | scooter | scooter | 0.723 | 0.723 |
| f5 | en | L'addition, s'il vous plaît. | The bill, please. | La note, s'il vous plaît. | 0.629 | 0.724 |
| vegetables-tomato | en | la tomate | tomato | pommes de terre | 0.932 | 0.727 |
| sweets-ice_cream | en | la glace | ice cream | crème glacée | 0.871 | 0.729 |
| sports-running_shirt | en | le maillot | jersey | le jersey | 0.716 | 0.729 |
| clothes-billed_cap | en | la casquette | cap | couvercle | 0.797 | 0.73 |
| pl1 | en | Où en est notre conteneur ? Il devait arriver lundi. | What's the status of our container? It was due on Monday. | Quel est l'état de notre conteneur ? | 0.739 | 0.733 |
| kitchen-chopsticks | en | les baguettes | chopsticks | bâtons à manger | 0.73 | 0.733 |
| games-roller_coaster | en | les montagnes russes | roller coaster | une montagne russe | 0.742 | 0.734 |
| transport-delivery_truck | en | le camion | lorry | véhicule routier | 0.809 | 0.736 |
| numbers-keycap_1 | en | un | one | Une . | 0.914 | 0.737 |
| feelings-tired_face | en | fatigué | tired | Je suis fatigué. | 0.964 | 0.745 |
| plants-potted_plant | en | la plante | plant | végétation | 0.872 | 0.748 |
| actions-telephone_receiver | en | téléphoner | to phone | au téléphone . | 0.914 | 0.756 |
| clothes-woman_s_boot | en | les bottes | boots | chaussures | 0.853 | 0.759 |
| places-department_store | en | le grand magasin | department store | magasin de détail | 0.764 | 0.759 |
| music-microphone | en | le micro | microphone | microphone | 0.762 | 0.762 |
| tech-headphone | en | le casque audio | headphones | écouteurs | 0.769 | 0.765 |
| numbers-keycap_4 | en | quatre | four | - Quatre. | 0.985 | 0.767 |
| vegetables-pea_pod | en | les petits pois | peas | les haricots | 0.701 | 0.773 |
| meals-falafel | en | les falafels | falafel | le falafel | 0.83 | 0.776 |
| objects-wrench | en | la clé à molette | spanner | porte-clés | 0.663 | 0.78 |
| vegetables-peanuts | en | les cacahuètes | peanuts | les arachides | 0.83 | 0.782 |
| ph2 | en | Oui, merci. Mon fils est allergique aux arachides. | Yes, thank you. My son is allergic to peanuts. | Mon fils est allergique aux arachides. | 0.94 | 0.784 |
| transport-motorcycle | en | la moto | motorbike | motocycle | 0.841 | 0.784 |
| sports-boxing_glove | en | la boxe | boxing | boxe | 0.853 | 0.784 |
| house-light_bulb | en | l’ampoule | light bulb | ampoule électrique | 0.808 | 0.786 |
| drinks-bubble_tea | en | le thé aux perles | bubble tea | thé à bulles | 0.768 | 0.788 |
| actions-yawning_face | en | bâiller | to yawn | à bâiller | 0.531 | 0.79 |
| health-crutch | en | la béquille | crutch | une béquille | 0.525 | 0.793 |
| meals-egg | en | l’œuf | egg | œuf | 0.886 | 0.794 |
| health-face_with_medical_mask | en | le masque | face mask | masque pour le visage | 0.792 | 0.794 |
| accessories-purse | en | le porte-monnaie | purse | portefeuille | 0.793 | 0.795 |
| school-briefcase | en | la mallette | briefcase | une mallette | 0.641 | 0.8 |
| farm-turkey | en | la dinde | turkey | de la dinde | 0.44 | 0.805 |
| kitchen-jar | en | le bocal | jar | bouteille | 0.682 | 0.815 |
| sea-jellyfish | en | la méduse | jellyfish | les méduses | 0.625 | 0.821 |
| transport-fire_engine | en | le camion de pompiers | fire engine | moteur de pompiers | 0.738 | 0.826 |
| bathroom-wastebasket | en | la poubelle | bin | une poubelle | 0.649 | 0.827 |
| sweets-lollipop | en | la sucette | lollipop | une sucette | 0.504 | 0.836 |
| sweets-pie | en | la tarte | pie | une tarte | 0.735 | 0.841 |
| birds-ant | en | la fourmi | ant | fourmi | 0.423 | 0.872 |
| transport-canoe | en | le canoë | canoe | canoë | 0.746 | 0.874 |
| jobs-firefighter | en | le pompier | firefighter | pompier | 0.708 | 0.881 |
| vegetables-chestnut | en | la châtaigne | chestnut | le châtaignier | 0.681 | 0.885 |
| objects-magnet | en | l’aimant | magnet | aimant | 0.612 | 0.886 |
| travel-fuel_pump | en | la station-service | petrol station | une station-service | 0.665 | 0.888 |
| fruits-grapes | en | le raisin | grapes | les raisins | 0.709 | 0.892 |
| weather-umbrella_with_rain_drops | en | le parapluie | umbrella | parapluie | 0.719 | 0.91 |
| objects-screwdriver | en | le tournevis | screwdriver | tournevis | 0.675 | 0.912 |
| landscapes-rock | en | le rocher | rock | la roche | 0.735 | 0.924 |
| vegetables-cucumber | en | le concombre | cucumber | les concombres | 0.643 | 0.932 |
| jobs-cook | en | le cuisinier | cook | cuisinier | 0.714 | 0.932 |
| sea-shrimp | en | la crevette | prawn | les crevettes | 0.602 | 0.934 |
| farm-ox | en | le bœuf | ox | bœuf | 0.711 | 0.94 |
| time-alarm_clock | en | le réveil | alarm clock | réveil | 0.635 | 0.943 |
| accessories-folding_hand_fan | en | l’éventail | fan | éventail | 0.561 | 0.943 |
| weather-rainbow | en | l’arc-en-ciel | rainbow | arc-en-ciel | 0.67 | 0.955 |
| objects-flashlight | en | la lampe de poche | torch | lampe de poche | 0.662 | 0.957 |
| transport-rocket | en | la fusée | rocket | fusée | 0.672 | 0.958 |
| house-ladder | en | l’échelle | ladder | échelle | 0.743 | 0.959 |
| games-chess_pawn | en | les échecs | chess | échecs | 0.699 | 0.962 |
| accessories-gem_stone | en | la pierre précieuse | gem | pierre précieuse | 0.723 | 0.969 |
| vegetables-garlic | en | l’ail | garlic | l'ail | 0.71 | 0.989 |
| fruits-avocado | en | l’avocat | avocado | l'avocat | 0.575 | 0.99 |
| wild-bear | en | l’ours | bear | l'ours | 0.464 | 0.993 |
| body-bone | en | l’os | bone | l'os | 0.686 | 0.995 |
| birds-snail | en | l’escargot | snail | l'escargot | 0.699 | 0.998 |
| numbers-keycap_7 | en | sept | seven | sept | 0.706 | 1.0 |
| fruits-watermelon | en | la pastèque | watermelon | la pastèque | 0.46 | 1.0 |
| fruits-pear | en | la poire | pear | la poire | 0.729 | 1.0 |
| fruits-peach | en | la pêche | peach | la pêche | 0.558 | 1.0 |
| vegetables-hot_pepper | en | le piment | chilli | le piment | 0.642 | 1.0 |
| vegetables-leafy_green | en | la laitue | lettuce | la laitue | 0.539 | 1.0 |
| meals-bread | en | le pain | bread | le pain | 0.584 | 1.0 |
| meals-salt | en | le sel | salt | le sel | 0.676 | 1.0 |
| meals-pot_of_food | en | le ragoût | stew | le ragoût | 0.686 | 1.0 |
| farm-cat | en | le chat | cat | le chat | 0.631 | 1.0 |
| farm-rooster | en | le coq | rooster | le coq | 0.631 | 1.0 |
| wild-monkey | en | le singe | monkey | le singe | 0.687 | 1.0 |
| wild-fox | en | le renard | fox | le renard | 0.642 | 1.0 |
| wild-deer | en | le cerf | deer | le cerf | 0.747 | 1.0 |
| wild-hedgehog | en | le hérisson | hedgehog | le hérisson | 0.659 | 1.0 |
| wild-frog | en | la grenouille | frog | la grenouille | 0.74 | 1.0 |
| birds-dove | en | la colombe | dove | la colombe | 0.669 | 1.0 |
| birds-swan | en | le cygne | swan | le cygne | 0.678 | 1.0 |
| birds-peacock | en | le paon | peacock | le paon | 0.661 | 1.0 |
| birds-lady_beetle | en | la coccinelle | ladybird | la coccinelle | 0.563 | 1.0 |
| birds-fly | en | la mouche | fly | la mouche | 0.527 | 1.0 |
| sea-shark | en | le requin | shark | le requin | 0.56 | 1.0 |
| sea-coral | en | le corail | coral | le corail | 0.727 | 1.0 |
| plants-evergreen_tree | en | le sapin | fir tree | le sapin | 0.73 | 1.0 |
| plants-sunflower | en | le tournesol | sunflower | le tournesol | 0.694 | 1.0 |
| actions-clapping_hands | en | applaudir | to clap | applaudir | 0.65 | 1.0 |
| house-bed | en | le lit | bed | le lit | 0.57 | 1.0 |
| clothes-necktie | en | la cravate | tie | la cravate | 0.731 | 1.0 |
| objects-hammer | en | le marteau | hammer | le marteau | 0.716 | 1.0 |
| travel-compass | en | la boussole | compass | la boussole | 0.695 | 1.0 |
| games-kite | en | le cerf-volant | kite | le cerf-volant | 0.584 | 1.0 |
| sports-person_lifting_weights | es | la musculation | la halterofilia | l'hypothyroïdie | 0.697 | 0.266 |
| actions-waving_hand | es | saluer de la main | saludar | Je vous salue. | 0.603 | 0.336 |
| clothes-jeans | es | le jean | los vaqueros | Les cow-boys | 0.45 | 0.365 |
| school-paperclip | es | le trombone | el clip | le clip | 0.346 | 0.379 |
| sports-goal_net | es | le but | la portería | le gardien de but | 0.519 | 0.444 |
| plants-seedling | es | la jeune pousse | el brote | l'épidémie | 0.645 | 0.456 |
| time-g1 | es | Bonjour, bon matin ! | ¡Buenos días! | Je vous salue. | 0.806 | 0.475 |
| fruits-watermelon | es | la pastèque | la sandía | le melon | 0.68 | 0.479 |
| signs-up_arrow | es | le haut | arriba | À l'étage. | 0.834 | 0.484 |
| games-kite | es | le cerf-volant | la cometa | la comète | 0.506 | 0.484 |
| school-pushpin | es | la punaise | la chincheta | le moustique | 0.58 | 0.489 |
| feelings-worried_face | es | inquiet | preocupado | Je m'inquiète. | 0.889 | 0.492 |
| kitchen-g2 | es | Bon appétit ! | ¡Buen provecho! | C'est une bonne affaire ! | 0.848 | 0.506 |
| actions-person_swimming | es | nager | nadar | faire de la natation | 0.583 | 0.506 |
| bathroom-bucket | es | le seau | el cubo | le cube | 0.472 | 0.513 |
| kitchen-jar | es | le bocal | el tarro | le pot | 0.507 | 0.517 |
| fruits-pineapple | es | l’ananas | la piña | le pin | 0.704 | 0.519 |
| meals-flatbread | es | la galette | el pan plano | le pain plat | 0.604 | 0.527 |
| sweets-lollipop | es | la sucette | la piruleta | la pâtisserie | 0.685 | 0.531 |
| farm-donkey | es | l’âne | el burro | le mulet | 0.572 | 0.539 |
| f6 | es | Voilà. Bonne journée ! | Aquí tiene. ¡Que tenga un buen día! | Je vous en prie, passez une bonne journée. | 0.826 | 0.541 |
| farm-baby_chick | es | le poussin | el pollito | le petit poulet | 0.653 | 0.546 |
| birds-lady_beetle | es | la coccinelle | la mariquita | la marionnette | 0.592 | 0.553 |
| time-hourglass_done | es | le sablier | el reloj de arena | l'horloge à sable | 0.499 | 0.558 |
| birds-flamingo | es | le flamant rose | el flamenco | le flamenco | 0.561 | 0.558 |
| objects-balloon | es | le ballon de baudruche | el globo | le globe | 0.684 | 0.564 |
| school-abacus | es | le boulier | el ábaco | l' abaque | 0.548 | 0.565 |
| sweets-popcorn | es | le pop-corn | las palomitas | les pommes de terre | 0.474 | 0.566 |
| drinks-cup_with_straw | es | la boisson fraîche | el refresco | le rafraîchissement | 0.677 | 0.572 |
| house-ladder | es | l’échelle | la escalera de mano | l'escalier à main | 0.566 | 0.573 |
| accessories-folding_hand_fan | es | l’éventail | el abanico | le ventilateur | 0.592 | 0.576 |
| sports-trophy | es | la coupe | el trofeo | le trophée | 0.58 | 0.585 |
| family-people_hugging | es | le câlin | el abrazo | l'étreinte | 0.64 | 0.59 |
| school-clipboard | es | le porte-bloc | el portapapeles | le porte-papiers | 0.609 | 0.605 |
| colors-purple_square | es | violet | morado | pourpre | 0.62 | 0.608 |
| signs-check_mark_button | es | correct | correcto | C'est vrai | 0.961 | 0.611 |
| numbers-keycap_6 | es | six | seis | Il y en a six. | 0.902 | 0.614 |
| objects-electric_plug | es | la prise | el enchufe | la prise électrique | 0.632 | 0.617 |
| sweets-doughnut | es | le beignet | el dónut | le donut | 0.638 | 0.628 |
| numbers-keycap_9 | es | neuf | nueve | Neuf ans | 0.785 | 0.632 |
| meals-french_fries | es | les frites | las patatas fritas | les pommes de terre | 0.832 | 0.633 |
| travel-vertical_traffic_light | es | le feu tricolore | el semáforo | le feu de circulation | 0.47 | 0.634 |
| weather-cloud_with_lightning | es | l’éclair | el relámpago | le coup de foudre | 0.6 | 0.636 |
| places-post_office | es | la poste | correos | courriers | 0.667 | 0.642 |
| feelings-fearful_face | es | effrayé | asustado | Je suis effrayé. | 0.919 | 0.644 |
| numbers-keycap_5 | es | cinq | cinco | Il y en a cinq. | 0.992 | 0.646 |
| feelings-star_struck | es | émerveillé | maravillado | Je suis émerveillé. | 0.914 | 0.646 |
| feelings-pensive_face | es | triste | triste | Je suis triste. | 1.0 | 0.652 |
| clothes-shorts | es | le short | los pantalones cortos | les pantalons courts | 0.671 | 0.669 |
| transport-ambulance | es | l’ambulance | la ambulancia | L'ambulance est arrivée. | 0.954 | 0.669 |
| signs-down_arrow | es | le bas | abajo | En bas | 0.577 | 0.674 |
| wild-hedgehog | es | le hérisson | el erizo | le renard | 0.637 | 0.683 |
| places-fountain | es | la fontaine | la fuente | la source | 0.78 | 0.683 |
| sports-running_shirt | es | le maillot | la camiseta deportiva | le t-shirt de sport | 0.693 | 0.683 |
| health-crutch | es | la béquille | la muleta | la croupe | 0.589 | 0.684 |
| games-game_die | es | le dé | el dado | le dés | 0.731 | 0.686 |
| fruits-blueberries | es | les myrtilles | los arándanos | les bleuets | 0.638 | 0.688 |
| meals-baguette_bread | es | la baguette | la barra de pan | la barre de pain | 0.725 | 0.692 |
| health-syringe | es | la piqûre | la inyección | l'injection | 0.722 | 0.697 |
| health-x_ray | es | la radio | la radiografía | la radiographie | 0.726 | 0.697 |
| vegetables-hot_pepper | es | le piment | la guindilla | l'épingle | 0.667 | 0.699 |
| f5 | es | L'addition, s'il vous plaît. | La cuenta, por favor. | Le compte, s'il vous plaît. | 0.704 | 0.703 |
| travel-stop_sign | es | le panneau stop | la señal de stop | le signal stop | 0.761 | 0.703 |
| clothes-thong_sandal | es | les tongs | las chanclas | les sandales | 0.712 | 0.709 |
| family-boy | es | le garçon | el chico | Le gamin | 0.952 | 0.71 |
| feelings-angry_face | es | en colère | enfadado | Il est en colère. | 0.926 | 0.712 |
| health-face_with_head_bandage | es | la blessure | la herida | la plaie | 0.846 | 0.714 |
| f1 | es | Bonjour, qu'est-ce que vous désirez ? | Hola, ¿qué desea? | Bonjour, que puis-je pour vous ? | 0.957 | 0.722 |
| meals-pizza | es | la pizza | la pizza | La pizza est là. | 1.0 | 0.723 |
| sea-spiral_shell | es | le coquillage | la caracola | l'escargot | 0.719 | 0.731 |
| health-adhesive_bandage | es | le pansement | la tirita | le bandage | 0.561 | 0.733 |
| clothes-scarf | es | l’écharpe | la bufanda | le foulard | 0.833 | 0.733 |
| birds-peacock | es | le paon | el pavo real | le paon rouge | 0.591 | 0.734 |
| objects-wrench | es | la clé à molette | la llave inglesa | la clé anglaise | 0.74 | 0.734 |
| drinks-ice | es | le glaçon | el cubito de hielo | le cube de glace | 0.742 | 0.737 |
| sea-octopus | es | la pieuvre | el pulpo | le poulpe | 0.721 | 0.745 |
| feelings-tired_face | es | fatigué | cansado | Je suis fatigué. | 0.977 | 0.745 |
| transport-kick_scooter | es | la trottinette | el patinete | le scooter | 0.862 | 0.75 |
| kitchen-baby_bottle | es | le biberon | el biberón | la bouteille | 0.962 | 0.751 |
| sports-basketball | es | le basket | el baloncesto | le basket-ball | 0.599 | 0.755 |
| pl1 | es | Où en est notre conteneur ? Il devait arriver lundi. | ¿Cómo va nuestro contenedor? Debía llegar el lunes. | Comment va notre conteneur ? | 0.848 | 0.756 |
| time-watch | es | la montre | el reloj de pulsera | la montre de poignet | 0.689 | 0.756 |
| s5 | es | Bien sûr, les cabines sont au fond. | Claro, los probadores están al fondo. | Bien sûr, les testeurs sont au fond. | 0.81 | 0.757 |
| transport-motor_scooter | es | le scooter | el ciclomotor | le cyclomoteur | 0.779 | 0.758 |
| travel-fuel_pump | es | la station-service | la gasolinera | la station d'essence | 0.686 | 0.76 |
| objects-flashlight | es | la lampe de poche | la linterna | la lanterne | 0.728 | 0.763 |
| numbers-keycap_10 | es | dix | diez | une dizaine | 0.901 | 0.766 |
| school-briefcase | es | la mallette | el maletín | la valise | 0.762 | 0.766 |
| bathroom-broom | es | le balai | la escoba | la balayeuse | 0.803 | 0.771 |
| tech-headphone | es | le casque audio | los auriculares | les écouteurs | 0.756 | 0.773 |
| sweets-pie | es | la tarte | el pastel | le gâteau | 0.729 | 0.778 |
| i1 | es | Comment vous appelez-vous ? | ¿Cómo se llama? | C'est quoi son nom ? | 0.853 | 0.781 |
| birds-owl | es | la chouette | el búho | le hibou | 0.727 | 0.783 |
| objects-locked | es | le cadenas | el candado | la serrure | 0.62 | 0.783 |
| school-crayon | es | le crayon de couleur | la cera de colores | la cire de couleurs | 0.786 | 0.785 |
| places-ferris_wheel | es | la grande roue | la noria | la roue | 0.538 | 0.79 |
| plants-fallen_leaf | es | la feuille morte | la hoja seca | la feuille sèche | 0.766 | 0.792 |
| actions-handshake | es | serrer la main | dar la mano | Prendre la main | 0.861 | 0.792 |
| actions-yawning_face | es | bâiller | bostezar | bâillonner | 0.489 | 0.796 |
| house-key | es | la clé | la llave | La clé ! | 0.942 | 0.797 |
| drinks-bubble_tea | es | le thé aux perles | el té de burbujas | le thé à bulles | 0.723 | 0.799 |
| kitchen-canned_food | es | la boîte de conserve | la lata | la boîte | 0.577 | 0.81 |
| games-puzzle_piece | es | le puzzle | el rompecabezas | le casse-tête | 0.668 | 0.823 |
| farm-turkey | es | la dinde | el pavo | le dindon | 0.42 | 0.825 |
| games-yo_yo | es | le yo-yo | el yoyó | le yoyo | 0.61 | 0.84 |
| fruits-peach | es | la pêche | el melocotón | le pêcher | 0.44 | 0.853 |
| accessories-lipstick | es | le rouge à lèvres | el pintalabios | la peinture à lèvres | 0.518 | 0.86 |
| games-chess_pawn | es | les échecs | el ajedrez | le jeu d'échecs | 0.667 | 0.865 |
| bathroom-toilet | es | les toilettes | el váter | la salle de bains | 0.522 | 0.867 |
| signs-cross_mark | es | faux | incorrecto | Faux | 0.705 | 0.88 |
| fruits-grapes | es | le raisin | las uvas | les raisins | 0.671 | 0.892 |
| fruits-avocado | es | l’avocat | el aguacate | l'avocat est | 0.606 | 0.896 |
| vegetables-carrot | es | la carotte | la zanahoria | les carottes | 0.745 | 0.896 |
| vegetables-pea_pod | es | les petits pois | los guisantes | les pois | 0.717 | 0.904 |
| fruits-olive | es | l’olive | la aceituna | les olives | 0.743 | 0.912 |
| clothes-billed_cap | es | la casquette | la gorra | le chapeau | 0.569 | 0.928 |
| places-playground_slide | es | l’aire de jeux | el parque infantil | le terrain de jeux | 0.743 | 0.962 |
| games-confetti_ball | es | les confettis | el confeti | le confetti | 0.655 | 0.972 |
| vegetables-garlic | es | l’ail | el ajo | l'ail | 0.691 | 0.989 |
| wild-bear | es | l’ours | el oso | l'ours | 0.586 | 0.993 |
| body-bone | es | l’os | el hueso | l'os | 0.742 | 0.995 |
| objects-magnet | es | l’aimant | el imán | l' aimant | 0.636 | 0.996 |
| vegetables-onion | es | l’oignon | la cebolla | l'oignon | 0.73 | 0.998 |
| birds-spider | es | l’araignée | la araña | l'araignée | 0.737 | 0.998 |
| vegetables-eggplant | es | l’aubergine | la berenjena | l'aubergine | 0.665 | 0.999 |
| wild-chipmunk | es | l’écureuil | la ardilla | l'écureuil | 0.745 | 0.999 |
| weather-rainbow | es | l’arc-en-ciel | el arcoíris | l'arc-en-ciel | 0.662 | 0.999 |
| objects-envelope | es | l’enveloppe | el sobre | l'enveloppe | 0.589 | 0.999 |
| numbers-keycap_7 | es | sept | siete | sept | 0.635 | 1.0 |
| fruits-banana | es | la banane | el plátano | la banane | 0.734 | 1.0 |
| fruits-pear | es | la poire | la pera | la poire | 0.747 | 1.0 |
| vegetables-cucumber | es | le concombre | el pepino | le concombre | 0.582 | 1.0 |
| vegetables-leafy_green | es | la laitue | la lechuga | la laitue | 0.635 | 1.0 |
| vegetables-mushroom | es | le champignon | la seta | le champignon | 0.471 | 1.0 |
| vegetables-beans | es | les haricots | las judías | les haricots | 0.554 | 1.0 |
| meals-bread | es | le pain | el pan | le pain | 0.62 | 1.0 |
| meals-croissant | es | le croissant | el cruasán | le croissant | 0.634 | 1.0 |
| meals-salt | es | le sel | la sal | le sel | 0.733 | 1.0 |
| meals-sandwich | es | le sandwich | el bocadillo | le sandwich | 0.744 | 1.0 |
| meals-pot_of_food | es | le ragoût | el guiso | le ragoût | 0.666 | 1.0 |
| sweets-cookie | es | le biscuit | la galleta | le biscuit | 0.693 | 1.0 |
| drinks-beverage_box | es | le jus | el zumo | le jus | 0.708 | 1.0 |
| farm-cat | es | le chat | el gato | le chat | 0.686 | 1.0 |
| farm-ox | es | le bœuf | el buey | le bœuf | 0.75 | 1.0 |
| farm-rooster | es | le coq | el gallo | le coq | 0.731 | 1.0 |
| farm-duck | es | le canard | el pato | le canard | 0.706 | 1.0 |
| farm-rabbit | es | le lapin | el conejo | le lapin | 0.741 | 1.0 |
| farm-hamster | es | le hamster | el hámster | le hamster | 0.73 | 1.0 |
| wild-zebra | es | le zèbre | la cebra | le zèbre | 0.579 | 1.0 |
| wild-monkey | es | le singe | el mono | le singe | 0.715 | 1.0 |
| wild-fox | es | le renard | el zorro | le renard | 0.637 | 1.0 |
| wild-frog | es | la grenouille | la rana | la grenouille | 0.592 | 1.0 |
| birds-parrot | es | le perroquet | el loro | le perroquet | 0.624 | 1.0 |
| birds-dove | es | la colombe | la paloma | la colombe | 0.741 | 1.0 |
| birds-butterfly | es | le papillon | la mariposa | le papillon | 0.709 | 1.0 |
| birds-ant | es | la fourmi | la hormiga | la fourmi | 0.673 | 1.0 |
| sea-shark | es | le requin | el tiburón | le requin | 0.57 | 1.0 |
| sea-shrimp | es | la crevette | la gamba | la crevette | 0.548 | 1.0 |
| sea-seal | es | le phoque | la foca | le phoque | 0.732 | 1.0 |
| sea-water_wave | es | la vague | la ola | la vague | 0.62 | 1.0 |
| plants-evergreen_tree | es | le sapin | el abeto | le sapin | 0.69 | 1.0 |
| weather-g1 | es | Il pleut. | Llueve. | Il pleut. | 0.703 | 1.0 |
| landscapes-snow_capped_mountain | es | le sommet enneigé | la cumbre nevada | le sommet enneigé | 0.698 | 1.0 |
| health-sneezing_face | es | le rhume | el resfriado | le rhume | 0.684 | 1.0 |
| jobs-construction_worker | es | le maçon | el albañil | le maçon | 0.654 | 1.0 |
| house-bed | es | le lit | la cama | le lit | 0.634 | 1.0 |
| house-candle | es | la bougie | la vela | la bougie | 0.573 | 1.0 |
| bathroom-soap | es | le savon | el jabón | le savon | 0.618 | 1.0 |
| bathroom-razor | es | le rasoir | la cuchilla de afeitar | le rasoir | 0.623 | 1.0 |
| bathroom-wastebasket | es | la poubelle | la papelera | la poubelle | 0.731 | 1.0 |
| bathroom-g2 | es | Je prends une douche. | Me ducho. | Je prends une douche. | 0.582 | 1.0 |
| clothes-necktie | es | la cravate | la corbata | la cravate | 0.713 | 1.0 |
| objects-screwdriver | es | le tournevis | el destornillador | le tournevis | 0.695 | 1.0 |
| transport-rocket | es | la fusée | el cohete | la fusée | 0.74 | 1.0 |
| travel-compass | es | la boussole | la brújula | la boussole | 0.657 | 1.0 |
| travel-station | es | la gare | la estación | la gare | 0.648 | 1.0 |
| travel-tent | es | la tente | la tienda de campaña | la tente | 0.535 | 1.0 |
| sports-badminton | es | le badminton | el bádminton | le badminton | 0.75 | 1.0 |
| objects-screwdriver | fa | le tournevis | پیچ‌گوشتی | Tu as fait une bouchée de viande. | 0.645 | 0.059 |
| objects-electric_plug | fa | la prise | دوشاخه | Elle est ridicule. | 0.415 | 0.104 |
| sports-badminton | fa | le badminton | بدمینتون | Je vous en prie. | 0.799 | 0.109 |
| fruits-peach | fa | la pêche | هلو | Je vous en prie. | 0.345 | 0.126 |
| birds-swan | fa | le cygne | قو | Je vous en prie. | 0.533 | 0.128 |
| sea-seal | fa | le phoque | فوک | Je vous en prie. | 0.728 | 0.135 |
| travel-compass | fa | la boussole | قطب‌نما | Le compas. | 0.503 | 0.138 |
| school-abacus | fa | le boulier | چرتکه | Ça craint. | 0.376 | 0.143 |
| birds-lady_beetle | fa | la coccinelle | کفشدوزک | Les chaussures sont brûlées. | 0.347 | 0.146 |
| jobs-construction_worker | fa | le maçon | بنّا | Je vous en prie. | 0.27 | 0.156 |
| sea-octopus | fa | la pieuvre | هشت‌پا | Il est à huit pattes. | 0.428 | 0.159 |
| school-paperclip | fa | le trombone | گیره | Il est coincé. | 0.307 | 0.161 |
| fruits-melon | fa | le melon | خربزه | C'est dégueulasse. | 0.513 | 0.168 |
| wild-zebra | fa | le zèbre | گورخر | Je vous en prie. | 0.519 | 0.168 |
| actions-yawning_face | fa | bâiller | خمیازه کشیدن | Ils sont en train de grincer des dents. | 0.511 | 0.174 |
| meals-croissant | fa | le croissant | کروسان | Je vous en prie. | 0.723 | 0.181 |
| places-bridge_at_night | fa | le pont | پل | Je vous en prie. | 0.8 | 0.181 |
| kitchen-cooking | fa | la poêle | ماهیتابه | Elle est naturelle. | 0.725 | 0.183 |
| clothes-thong_sandal | fa | les tongs | دمپایی | Je vous en prie. | 0.444 | 0.183 |
| time-stopwatch | fa | le chronomètre | کرنومتر | Je vous en prie. | 0.581 | 0.19 |
| school-pushpin | fa | la punaise | پونز | Je vous en prie. | 0.483 | 0.197 |
| fruits-watermelon | fa | la pastèque | هندوانه | Elle est indienne. | 0.395 | 0.198 |
| meals-pot_of_food | fa | le ragoût | خورش | Le soleil est là. | 0.658 | 0.207 |
| wild-hedgehog | fa | le hérisson | جوجه‌تیغی | Le poulet est cuit. | 0.484 | 0.219 |
| clothes-sari | fa | le sari | ساری | Je vous en prie. | 0.68 | 0.219 |
| tech-headphone | fa | le casque audio | هدفون | La cible. | 0.628 | 0.228 |
| plants-tulip | fa | la tulipe | لاله | Je vous en prie. | 0.702 | 0.229 |
| vegetables-garlic | fa | l’ail | سیر | Des céréales. | 0.647 | 0.231 |
| kitchen-fork_and_knife | fa | les couverts | قاشق و چنگال | Une cuillère et une fourchette. | 0.506 | 0.232 |
| meals-honey_pot | fa | le miel | عسل | Je vous en prie. | 0.796 | 0.237 |
| wild-tiger | fa | le tigre | ببر | Prends-le avec toi. | 0.487 | 0.239 |
| bathroom-lotion_bottle | fa | la crème | کرم | Le ver. | 0.851 | 0.239 |
| plants-seedling | fa | la jeune pousse | نهال | Je ne sais pas. | 0.561 | 0.243 |
| sports-person_lifting_weights | fa | la musculation | وزنه‌برداری | Je prends du poids. | 0.608 | 0.243 |
| signs-minus | fa | moins | منها | Elle est là. | 0.488 | 0.246 |
| games-roller_coaster | fa | les montagnes russes | ترن هوایی | Un train aérien. | 0.283 | 0.249 |
| bathroom-bathtub | fa | la baignoire | وان | Je vous en prie. | 0.539 | 0.251 |
| sea-jellyfish | fa | la méduse | عروس دریایی | Une mariée de mer. | 0.45 | 0.252 |
| transport-canoe | fa | le canoë | قایق پارویی | Un bateau à voile. | 0.393 | 0.253 |
| actions-handshake | fa | serrer la main | دست دادن | Ils ont perdu. | 0.462 | 0.257 |
| vegetables-eggplant | fa | l’aubergine | بادمجان | Une étoile. | 0.638 | 0.264 |
| sweets-lollipop | fa | la sucette | آب‌نبات چوبی | Des carottes. | 0.249 | 0.269 |
| kitchen-jar | fa | le bocal | شیشه مربا | Une vitre carrée. | 0.504 | 0.272 |
| time-alarm_clock | fa | le réveil | ساعت زنگ‌دار | La cloche sonne. | 0.447 | 0.273 |
| drinks-teapot | fa | la théière | قوری | Le Coran. | 0.496 | 0.274 |
| accessories-folding_hand_fan | fa | l’éventail | بادبزن | Ils soufflent. | 0.338 | 0.285 |
| objects-package | fa | le colis | بسته | Il est fermé. | 0.696 | 0.286 |
| places-convenience_store | fa | l’épicerie | بقالی | Le reste. | 0.502 | 0.289 |
| fruits-blueberries | fa | les myrtilles | بلوبری | Le bleu. | 0.366 | 0.291 |
| actions-person_climbing | fa | grimper | بالا رفتن | Ils sont montés. | 0.793 | 0.295 |
| clothes-shorts | fa | le short | شلوارک | Des sous-vêtements. | 0.484 | 0.296 |
| sports-ping_pong | fa | le tennis de table | پینگ‌پنگ | Je vous en prie, Ping-Pong. | 0.469 | 0.296 |
| games-yo_yo | fa | le yo-yo | یویو | Je vous en prie. | 0.64 | 0.296 |
| fruits-mango | fa | la mangue | انبه | Une grenade. | 0.529 | 0.298 |
| sweets-doughnut | fa | le beignet | دونات | Des donuts. | 0.347 | 0.298 |
| wild-elephant | fa | l’éléphant | فیل | Le Phil. | 0.699 | 0.299 |
| wild-hippopotamus | fa | l’hippopotame | اسب آبی | Le cheval bleu. | 0.413 | 0.3 |
| games-confetti_ball | fa | les confettis | کاغذ رنگی | Le papier à colorier. | 0.438 | 0.301 |
| family-old_woman | fa | la grand-mère | مادربزرگ | Je ne sais pas. | 0.894 | 0.303 |
| farm-turkey | fa | la dinde | بوقلمون | Les tortues. | 0.354 | 0.309 |
| health-crutch | fa | la béquille | عصای زیر بغل | Le bâton sous le bras. | 0.417 | 0.314 |
| travel-fuel_pump | fa | la station-service | پمپ بنزین | Une pompe à essence. | 0.514 | 0.315 |
| sweets-pie | fa | la tarte | پای | Les pieds. | 0.502 | 0.321 |
| health-stethoscope | fa | le stéthoscope | گوشی پزشکی | Le téléphone médical. | 0.376 | 0.322 |
| family-people_hugging | fa | le câlin | بغل | Une étreinte. | 0.581 | 0.328 |
| meals-butter | fa | le beurre | کره | La couronne. | 0.616 | 0.33 |
| sports-person_swimming | fa | la natation | شنا | Je vais nager. | 0.763 | 0.33 |
| signs-check_mark_button | fa | correct | درست | C'est tout à fait ça. | 0.932 | 0.331 |
| fruits-pear | fa | la poire | گلابی | Elle est rose. | 0.692 | 0.332 |
| plants-sunflower | fa | le tournesol | آفتابگردان | Les tourbillons de soleil. | 0.59 | 0.338 |
| actions-person_swimming | fa | nager | شنا کردن | Ils ont nagé. | 0.501 | 0.339 |
| body-nose | fa | le nez | بینی | Vous avez vu. | 0.805 | 0.34 |
| health-adhesive_bandage | fa | le pansement | چسب زخم | La plaie est collée. | 0.515 | 0.345 |
| school-briefcase | fa | la mallette | کیف اداری | Un sac à dos. | 0.367 | 0.353 |
| vegetables-hot_pepper | fa | le piment | فلفل تند | Des poivrons épicés. | 0.557 | 0.357 |
| x1 | fa | Il ne faut pas vendre la peau de l'ours avant de l'avoir tué. | جوجه را آخر پاییز می‌شمارند. | On compte les poulets à la fin de l'automne. | 0.294 | 0.359 |
| travel-vertical_traffic_light | fa | le feu tricolore | چراغ راهنمایی | Les feux de signalisation. | 0.394 | 0.362 |
| kitchen-chopsticks | fa | les baguettes | چوب غذاخوری | Un bâton à manger. | 0.433 | 0.364 |
| wild-rhinoceros | fa | le rhinocéros | کرگدن | Le crocodile. | 0.255 | 0.365 |
| numbers-keycap_9 | fa | neuf | نه | Je ne veux pas. | 0.617 | 0.371 |
| feelings-face_with_tears_of_joy | fa | rire | خندیدن | Ils rient. | 0.944 | 0.376 |
| school-straight_ruler | fa | la règle | خط‌کش | Le ligneur. | 0.416 | 0.378 |
| farm-donkey | fa | l’âne | الاغ | Le mulet. | 0.67 | 0.379 |
| vegetables-chestnut | fa | la châtaigne | شاه‌بلوط | Le roi des chênes. | 0.422 | 0.381 |
| time-hourglass_done | fa | le sablier | ساعت شنی | Une horloge à sable. | 0.482 | 0.388 |
| meals-falafel | fa | les falafels | فلافل | Des paillettes. | 0.67 | 0.389 |
| wild-deer | fa | le cerf | گوزن | Une biche. | 0.552 | 0.389 |
| numbers-keycap_0 | fa | zéro | صفر | Il n'y en a pas. | 0.905 | 0.392 |
| health-syringe | fa | la piqûre | آمپول | Une ampoule. | 0.375 | 0.396 |
| sports-ice_skate | fa | le patinage | اسکیت روی یخ | Il patine sur la glace. | 0.646 | 0.398 |
| school-calendar | fa | l’agenda | سررسید | Il est temps. | 0.351 | 0.399 |
| sports-goal_net | fa | le but | دروازه | La porte. | 0.43 | 0.403 |
| jobs-detective | fa | le détective | کارآگاه | Je vous en prie, inspecteur. | 0.733 | 0.404 |
| objects-locked | fa | le cadenas | قفل | Le verrou. | 0.676 | 0.405 |
| places-ferris_wheel | fa | la grande roue | چرخ و فلک | Des roues et des planches. | 0.652 | 0.405 |
| games-kite | fa | le cerf-volant | بادبادک | Le cyclone. | 0.552 | 0.405 |
| travel-stop_sign | fa | le panneau stop | تابلو ایست | Le tableau est là. | 0.579 | 0.406 |
| school-file_folder | fa | le dossier | پوشه | La boîte à outils. | 0.75 | 0.429 |
| vegetables-leafy_green | fa | la laitue | کاهو | Le cajou. | 0.424 | 0.431 |
| travel-airplane_arrival | fa | l’arrivée | ورود | À l'intérieur. | 0.707 | 0.433 |
| wild-lion | fa | le lion | شیر | Le lait. | 0.586 | 0.44 |
| family-man | fa | l’homme | مرد | Il est mort. | 0.928 | 0.44 |
| feelings-star_struck | fa | émerveillé | شگفت‌زده | Ça m'étonne. | 0.904 | 0.441 |
| signs-cross_mark | fa | faux | غلط | C'est pas vrai. | 0.778 | 0.45 |
| bathroom-broom | fa | le balai | جارو | Une balayeuse. | 0.471 | 0.451 |
| plants-evergreen_tree | fa | le sapin | کاج | Le pin. | 0.423 | 0.453 |
| meals-french_fries | fa | les frites | سیب‌زمینی سرخ‌کرده | Les pommes de terre sont grillées. | 0.542 | 0.455 |
| actions-waving_hand | fa | saluer de la main | دست تکان دادن | Ils se sont serrés la main. | 0.757 | 0.455 |
| sweets-popcorn | fa | le pop-corn | پاپ‌کورن | Des pommes de terre. | 0.621 | 0.461 |
| meals-flatbread | fa | la galette | نان لواش | Le pain à la levure. | 0.516 | 0.462 |
| drinks-cup_with_straw | fa | la boisson fraîche | نوشابه | Une soupe. | 0.648 | 0.462 |
| feelings-smiling_face_with_sunglasses | fa | détendu | آرام | Il est calme. | 0.847 | 0.464 |
| numbers-keycap_1 | fa | un | یک | Il y en a un. | 0.946 | 0.465 |
| kitchen-baby_bottle | fa | le biberon | شیشه شیر | Une bouteille de lait. | 0.555 | 0.467 |
| kitchen-g2 | fa | Bon appétit ! | نوش جان! | Vous buvez ! | 0.657 | 0.469 |
| fruits-tangerine | fa | la mandarine | نارنگی | Une orange. | 0.741 | 0.47 |
| signs-down_arrow | fa | le bas | پایین | En bas ! | 0.554 | 0.472 |
| vegetables-broccoli | fa | le brocoli | کلم بروکلی | Le chou au brocoli. | 0.597 | 0.472 |
| bathroom-bucket | fa | le seau | سطل | Un seau. | 0.469 | 0.473 |
| time-g1 | fa | Bonjour, bon matin ! | صبح بخیر! | Je vous salue. | 0.883 | 0.475 |
| farm-camel | fa | le dromadaire | شتر | Le chameau. | 0.551 | 0.477 |
| objects-battery | fa | la pile | باتری | Une batterie. | 0.522 | 0.483 |
| signs-up_arrow | fa | le haut | بالا | À l'étage. | 0.8 | 0.484 |
| health-sneezing_face | fa | le rhume | سرماخوردگی | C'était un rhume. | 0.618 | 0.485 |
| school-pen | fa | le stylo | خودکار | Une machine à écrire. | 0.371 | 0.487 |
| birds-snail | fa | l’escargot | حلزون | Des escargots. | 0.486 | 0.49 |
| school-clipboard | fa | le porte-bloc | تخته‌شاسی | Le châssis. | 0.485 | 0.491 |
| feelings-worried_face | fa | inquiet | نگران | Je m'inquiète. | 0.859 | 0.492 |
| clothes-dress | fa | la robe | پیراهن زنانه | Une chemise de femme. | 0.48 | 0.493 |
| farm-baby_chick | fa | le poussin | جوجه | Le poulet. | 0.457 | 0.494 |
| feelings-astonished_face | fa | surpris | متعجب | Ça m'étonne. | 0.847 | 0.495 |
| family-family_man_boy | fa | le père | پدر | Je vous en prie, papa. | 0.962 | 0.496 |
| games-game_die | fa | le dé | تاس | Le dés. | 0.429 | 0.498 |
| feelings-fearful_face | fa | effrayé | ترسیده | Elle a peur. | 0.903 | 0.5 |
| actions-face_savoring_food | fa | manger | خوردن | Il mange. | 0.894 | 0.503 |
| actions-clapping_hands | fa | applaudir | دست زدن | Ils applaudissent. | 0.512 | 0.506 |
| body-ear | fa | l’oreille | گوش | Je vous écoute. | 0.892 | 0.514 |
| meals-spaghetti | fa | les pâtes | ماکارونی | Des macaronis. | 0.546 | 0.519 |
| travel-world_map | fa | la carte | نقشه | Le plan. | 0.754 | 0.519 |
| vegetables-bell_pepper | fa | le poivron | فلفل دلمه‌ای | C'est du poivre. | 0.663 | 0.521 |
| numbers-keycap_7 | fa | sept | هفت | Il y en a sept. | 0.695 | 0.524 |
| health-drop_of_blood | fa | le sang | خون | Il y a du sang. | 0.785 | 0.525 |
| games-puzzle_piece | fa | le puzzle | پازل | Une énigme. | 0.659 | 0.525 |
| colors-brown_square | fa | marron | قهوه‌ای | Il est brun. | 0.885 | 0.536 |
| feelings-crying_face | fa | pleurer | گریه کردن | Ils pleuraient. | 0.876 | 0.539 |
| school-notebook | fa | le cahier | دفتر | Le bureau. | 0.609 | 0.54 |
| actions-person_walking | fa | marcher | راه رفتن | Ils marchent. | 0.916 | 0.544 |
| meals-salt | fa | le sel | نمک | Le sel. | 0.601 | 0.549 |
| weather-cloud_with_rain | fa | la pluie | باران | Il pleut. | 0.928 | 0.549 |
| farm-rooster | fa | le coq | خروس | Le lièvre. | 0.58 | 0.551 |
| clothes-billed_cap | fa | la casquette | کلاه لبه‌دار | Le chapeau au bord. | 0.677 | 0.555 |
| health-x_ray | fa | la radio | عکس رادیولوژی | Une radiographie. | 0.512 | 0.556 |
| places-post_office | fa | la poste | اداره پست | Le bureau de poste. | 0.603 | 0.556 |
| sports-horse_racing | fa | l’équitation | سوارکاری | À cheval. | 0.785 | 0.556 |
| sports-person_surfing | fa | le surf | موج‌سواری | Surfer sur les vagues. | 0.639 | 0.557 |
| family-boy | fa | le garçon | پسر | Ça va, mon garçon. | 0.909 | 0.56 |
| f6 | fa | Voilà. Bonne journée ! | بفرمایید. روز خوبی داشته باشید! | Je vous souhaite une bonne journée. | 0.692 | 0.561 |
| sports-running_shirt | fa | le maillot | پیراهن ورزشی | Une chemise de sport. | 0.644 | 0.562 |
| clothes-man_s_shoe | fa | les chaussures | کفش | Les souliers. | 0.911 | 0.564 |
| travel-construction | fa | les travaux | کار جاده‌ای | Des travaux routiers. | 0.608 | 0.564 |
| drinks-beverage_box | fa | le jus | آبمیوه | Le jus de fruits. | 0.593 | 0.566 |
| family-family_woman_girl | fa | la mère | مادر | Je vous en prie, maman. | 0.942 | 0.567 |
| numbers-keycap_10 | fa | dix | ده | Une dizaine. | 0.861 | 0.568 |
| birds-flamingo | fa | le flamant rose | فلامینگو | Le flamant. | 0.442 | 0.57 |
| bathroom-wastebasket | fa | la poubelle | سطل زباله | C'est une poubelle. | 0.774 | 0.571 |
| travel-airplane_departure | fa | le départ | پرواز خروجی | Le vol de sortie. | 0.611 | 0.573 |
| transport-kick_scooter | fa | la trottinette | اسکوتر پایی | Le scooter à pieds. | 0.334 | 0.575 |
| clothes-running_shoe | fa | les baskets | کفش ورزشی | Des chaussures de sport. | 0.652 | 0.581 |
| travel-tent | fa | la tente | چادر | Une tente. | 0.543 | 0.581 |
| colors-green_square | fa | vert | سبز | Il est vert. | 0.921 | 0.587 |
| clothes-jeans | fa | le jean | شلوار جین | Les sous-vêtements de Jean. | 0.605 | 0.588 |
| numbers-keycap_2 | fa | deux | دو | Ça fait deux. | 0.967 | 0.59 |
| games-fireworks | fa | le feu d’artifice | آتش‌بازی | Des feux d'artifice. | 0.761 | 0.59 |
| drinks-bubble_tea | fa | le thé aux perles | چای حبابی | Le thé aux haricots. | 0.736 | 0.6 |
| fruits-avocado | fa | l’avocat | آووکادو | C'est une avocate. | 0.521 | 0.602 |
| actions-telephone_receiver | fa | téléphoner | تلفن زدن | Ils ont appelé. | 0.968 | 0.602 |
| kitchen-canned_food | fa | la boîte de conserve | کنسرو | Une boîte. | 0.517 | 0.604 |
| colors-purple_square | fa | violet | بنفش | Elle est violette. | 0.881 | 0.606 |
| vegetables-pea_pod | fa | les petits pois | نخود فرنگی | Des haricots. | 0.529 | 0.606 |
| house-light_bulb | fa | l’ampoule | لامپ | Une lampe. | 0.745 | 0.607 |
| actions-man_dancing | fa | danser | رقصیدن | Ils dansaient. | 0.871 | 0.608 |
| objects-wrapped_gift | fa | le cadeau | هدیه | C'était un cadeau. | 0.91 | 0.608 |
| jobs-firefighter | fa | le pompier | آتش‌نشان | Des pompiers. | 0.652 | 0.609 |
| house-bed | fa | le lit | تخت | Le lit. | 0.507 | 0.609 |
| feelings-hot_face | fa | avoir chaud | گرم بودن | Ils étaient chauds. | 0.916 | 0.611 |
| numbers-keycap_8 | fa | huit | هشت | Il y en a huit. | 0.949 | 0.612 |
| school-graduation_cap | fa | le diplôme | فارغ‌التحصیلی | Je suis diplômé. | 0.753 | 0.612 |
| numbers-keycap_6 | fa | six | شش | Il y en a six. | 0.972 | 0.614 |
| actions-microphone | fa | chanter | آواز خواندن | Le chant. | 0.715 | 0.615 |
| actions-speaking_head | fa | parler | حرف زدن | Ils ont parlé. | 0.957 | 0.618 |
| actions-g1 | fa | Je cours dans le parc. | در پارک می‌دوم. | Dans le parc du 2 mai. | 0.798 | 0.618 |
| bathroom-razor | fa | le rasoir | تیغ | Le couteau. | 0.591 | 0.618 |
| farm-ox | fa | le bœuf | گاو نر | Un bœuf mâle. | 0.707 | 0.619 |
| actions-ear | fa | écouter | گوش دادن | Ils ont écouté. | 0.95 | 0.619 |
| s5 | fa | Bien sûr, les cabines sont au fond. | البته، اتاق پرو ته فروشگاه است. | Bien sûr, la chambre Pro est au fond du magasin. | 0.641 | 0.624 |
| time-mantelpiece_clock | fa | l’horloge | ساعت دیواری | Une horloge murale. | 0.732 | 0.627 |
| birds-ant | fa | la fourmi | مورچه | Une fourmi. | 0.433 | 0.627 |
| feelings-grinning_face | fa | heureux | خوشحال | Elle est heureuse. | 0.974 | 0.628 |
| actions-person_running | fa | courir | دویدن | Ils courent. | 0.913 | 0.632 |
| meals-bread | fa | le pain | نان | Le pain. | 0.551 | 0.634 |
| actions-eyes | fa | regarder | نگاه کردن | Ils ont regardé. | 0.97 | 0.634 |
| clothes-t_shirt | fa | le tee-shirt | تی‌شرت | Une chemise. | 0.824 | 0.635 |
| plants-fallen_leaf | fa | la feuille morte | برگ خشک | Des feuilles sèches. | 0.728 | 0.636 |
| colors-orange_square | fa | orange | نارنجی | Elle est orange. | 0.942 | 0.637 |
| bathroom-roll_of_paper | fa | le papier toilette | دستمال توالت | Une serviette de toilette. | 0.739 | 0.639 |
| numbers-keycap_3 | fa | trois | سه | Il y en a trois. | 0.921 | 0.64 |
| wild-bear | fa | l’ours | خرس | Un ours. | 0.418 | 0.641 |
| plants-herb | fa | l’herbe aromatique | سبزی معطر | Des légumes parfumés. | 0.67 | 0.641 |
| transport-motorcycle | fa | la moto | موتورسیکلت | Une moto. | 0.788 | 0.645 |
| colors-blue_square | fa | bleu | آبی | Il est bleu. | 0.923 | 0.646 |
| colors-black_large_square | fa | noir | سیاه | Il est noir. | 0.959 | 0.646 |
| numbers-keycap_5 | fa | cinq | پنج | Il y en a cinq. | 0.975 | 0.646 |
| landscapes-camping | fa | le camping | کمپ | Le camp. | 0.764 | 0.646 |
| objects-magnet | fa | l’aimant | آهنربا | Un aimant. | 0.397 | 0.646 |
| music-microphone | fa | le micro | میکروفون | Le microphone. | 0.718 | 0.647 |
| colors-white_large_square | fa | blanc | سفید | Il est blanc. | 0.974 | 0.648 |
| actions-cooking | fa | cuisiner | آشپزی کردن | Ils cuisinent. | 0.903 | 0.649 |
| objects-flashlight | fa | la lampe de poche | چراغ‌قوه | Une lampe. | 0.74 | 0.649 |
| feelings-cold_face | fa | avoir froid | سرد بودن | Ils étaient froids. | 0.94 | 0.65 |
| feelings-pensive_face | fa | triste | غمگین | Je suis triste. | 0.959 | 0.652 |
| family-old_man | fa | le grand-père | پدربزرگ | Il est grand-père. | 0.935 | 0.654 |
| school-crayon | fa | le crayon de couleur | مداد شمعی | Le crayon de la bougie. | 0.597 | 0.654 |
| vegetables-peanuts | fa | les cacahuètes | بادام زمینی | Des noix de pécan. | 0.658 | 0.655 |
| actions-thinking_face | fa | réfléchir | فکر کردن | Ils ont pensé | 0.963 | 0.655 |
| health-nauseated_face | fa | malade | بیمار | Il est malade. | 0.972 | 0.656 |
| meals-baguette_bread | fa | la baguette | نان باگت | Une baguette à pain. | 0.753 | 0.657 |
| actions-person_taking_bath | fa | prendre un bain | حمام کردن | Ils ont pris un bain. | 0.917 | 0.658 |
| farm-cat | fa | le chat | گربه | Le chat. | 0.651 | 0.66 |
| actions-person_raising_hand | fa | lever la main | دست بلند کردن | Ils ont levé la main. | 0.913 | 0.664 |
| birds-owl | fa | la chouette | جغد | Le hibou. | 0.537 | 0.665 |
| s6 | fa | Elle me va bien. Je peux payer par carte ? | اندازه‌ام است. می‌توانم با کارت پرداخت کنم؟ | C'est ma taille. Puis-je payer par carte de crédit ? | 0.753 | 0.666 |
| travel-bellhop_bell | fa | la réception | پذیرش | Acceptation | 0.807 | 0.666 |
| time-sunset | fa | le soir | عصر | Dans l'après-midi. | 0.756 | 0.668 |
| wild-monkey | fa | le singe | میمون | Des singes. | 0.612 | 0.672 |
| wild-giraffe | fa | la girafe | زرافه | C'est une girafe. | 0.544 | 0.673 |
| objects-wrench | fa | la clé à molette | آچار | La clé. | 0.486 | 0.674 |
| numbers-keycap_4 | fa | quatre | چهار | Il y en a quatre. | 0.977 | 0.675 |
| objects-g1 | fa | Mon téléphone n’a plus de batterie. | شارژ گوشی‌ام تمام شد. | Je n'ai plus de charge. | 0.763 | 0.676 |
| o3 | fa | Je ne suis pas tout à fait d'accord : la fin était logique. | کاملاً موافق نیستم؛ پایانش منطقی بود. | Je ne suis pas tout à fait d'accord. | 0.948 | 0.677 |
| jobs-office_worker | fa | l’employé de bureau | کارمند | Un employé. | 0.826 | 0.677 |
| actions-sleeping_face | fa | dormir | خوابیدن | Ils dorment. | 0.971 | 0.68 |
| ps1 | fa | Bonjour, je suis l'infirmier de garde. Où avez-vous mal ? | سلام، من پرستار کشیک هستم. کجایتان درد می‌کند؟ | Je suis l'infirmière du curé. | 0.923 | 0.682 |
| drinks-ice | fa | le glaçon | تکه یخ | Une glace. | 0.741 | 0.682 |
| objects-camera | fa | l’appareil photo | دوربین | Une caméra. | 0.822 | 0.683 |
| sports-volleyball | fa | le volley | والیبال | Le volley-ball. | 0.725 | 0.683 |
| sports-tennis | fa | le tennis | تنیس | Je joue au tennis. | 0.9 | 0.684 |
| clothes-scarf | fa | l’écharpe | شال‌گردن | Une écharpe. | 0.482 | 0.685 |
| health-face_with_thermometer | fa | la fièvre | تب | Elle a de la fièvre. | 0.688 | 0.686 |
| sea-spiral_shell | fa | le coquillage | صدف | Des coquillages. | 0.567 | 0.687 |
| feelings-angry_face | fa | en colère | عصبانی | Elle est en colère. | 0.937 | 0.688 |
| transport-airplane | fa | l’avion | هواپیما | L'avion est parti. | 0.929 | 0.688 |
| jobs-mechanic | fa | le mécanicien | مکانیک | Je suis mécanicien. | 0.803 | 0.689 |
| jobs-astronaut | fa | l’astronaute | فضانورد | Je suis un astronaute. | 0.832 | 0.689 |
| sports-skier | fa | le ski | اسکی | Je fais du ski. | 0.927 | 0.69 |
| fruits-grapes | fa | le raisin | انگور | Des raisins. | 0.641 | 0.692 |
| signs-plus | fa | plus | به اضافه | En plus. | 0.888 | 0.693 |
| bathroom-sponge | fa | l’éponge | اسفنج | Une éponge. | 0.638 | 0.693 |
| clothes-necktie | fa | la cravate | کراوات | Une cravate. | 0.567 | 0.695 |
| birds-fly | fa | la mouche | مگس | Une mouche. | 0.729 | 0.696 |
| landscapes-snow_capped_mountain | fa | le sommet enneigé | قله برفی | Le sommet de la neige. | 0.792 | 0.698 |
| drinks-glass_of_milk | fa | le lait | شیر | Le lait. | 0.713 | 0.699 |
| wild-frog | fa | la grenouille | قورباغه | Une grenouille. | 0.69 | 0.699 |
| weather-wind_face | fa | le vent | باد | Le vent ! | 0.777 | 0.699 |
| birds-eagle | fa | l’aigle | عقاب | Un aigle. | 0.672 | 0.7 |
| body-bone | fa | l’os | استخوان | Les os. | 0.653 | 0.701 |
| f5 | fa | L'addition, s'il vous plaît. | صورت‌حساب، لطفاً. | Le compte, s'il vous plaît. | 0.704 | 0.703 |
| objects-balloon | fa | le ballon de baudruche | بادکنک | Le ballon. | 0.537 | 0.703 |
| feelings-red_heart | fa | l’amour | عشق | L'amour est là. | 0.944 | 0.704 |
| school-memo | fa | la note | یادداشت | Une note. | 0.836 | 0.704 |
| weather-cloud_with_lightning | fa | l’éclair | آذرخش | Des éclairs. | 0.563 | 0.705 |
| bathroom-toothbrush | fa | la brosse à dents | مسواک | Une brosse. | 0.841 | 0.705 |
| accessories-purse | fa | le porte-monnaie | کیف پول | Le portefeuille. | 0.857 | 0.705 |
| sports-baseball | fa | le baseball | بیسبال | Je joue au baseball. | 0.888 | 0.705 |
| sea-water_wave | fa | la vague | موج | Une vague. | 0.812 | 0.706 |
| family-couple_with_heart | fa | le couple | زوج | Une paire. | 0.876 | 0.707 |
| wild-chipmunk | fa | l’écureuil | سنجاب | Un écureuil. | 0.375 | 0.708 |
| sweets-cookie | fa | le biscuit | بیسکویت | Des biscuits. | 0.838 | 0.709 |
| vegetables-onion | fa | l’oignon | پیاز | Des oignons. | 0.71 | 0.71 |
| birds-dove | fa | la colombe | کبوتر | Une colombe. | 0.566 | 0.714 |
| school-page_facing_up | fa | la feuille de papier | برگه | Une feuille. | 0.768 | 0.714 |
| plants-rose | fa | la rose | گل رز | Une rose. | 0.785 | 0.716 |
| body-tooth | fa | la dent | دندان | Une dent. | 0.863 | 0.716 |
| weather-cloud | fa | le nuage | ابر | Des nuages. | 0.767 | 0.717 |
| g3 | fa | Bien, merci. Bienvenue ! | خوبم، ممنون. خوش آمدید! | Je vais bien, merci. | 0.929 | 0.719 |
| transport-ambulance | fa | l’ambulance | آمبولانس | Une ambulance ! | 0.754 | 0.719 |
| jobs-technologist | fa | le développeur | برنامه‌نویس | Le programmeur. | 0.793 | 0.72 |
| travel-luggage | fa | la valise | چمدان | Une valise. | 0.826 | 0.721 |
| ph6 | fa | Avec plaisir, merci pour votre accueil. | با کمال میل، از پذیرایی‌تان ممنونم. | Merci beaucoup de m'avoir accueilli. | 0.809 | 0.723 |
| house-elevator | fa | l’ascenseur | آسانسور | Dans l'ascenseur. | 0.878 | 0.723 |
| weather-sun | fa | le soleil | خورشید | Le soleil est là. | 0.926 | 0.724 |
| drinks-droplet | fa | l’eau | آب | Il y a de l'eau. | 0.921 | 0.726 |
| objects-envelope | fa | l’enveloppe | پاکت نامه | Une enveloppe. | 0.669 | 0.728 |
| house-ladder | fa | l’échelle | نردبان | Une échelle. | 0.423 | 0.729 |
| travel-ticket | fa | le billet | بلیت | Un billet. | 0.826 | 0.729 |
| accessories-handbag | fa | le sac à main | کیف دستی | Un sac à main. | 0.875 | 0.73 |
| x3 | fa | Dites-le-lui avec tact : il est très susceptible. | با ملاحظه به او بگویید؛ خیلی زودرنج است. | Dites-lui gentiment, il est trop précoce. | 0.81 | 0.732 |
| bathroom-shower | fa | la douche | دوش | Dans la douche. | 0.862 | 0.732 |
| pl1 | fa | Où en est notre conteneur ? Il devait arriver lundi. | کانتینر ما در چه وضعی است؟ قرار بود دوشنبه برسد. | Quel est l'état de notre conteneur ? | 0.862 | 0.733 |
| farm-goat | fa | la chèvre | بز | Une chèvre. | 0.279 | 0.736 |
| body-raised_hand | fa | la main | دست | Une main. | 0.907 | 0.736 |
| plants-potted_plant | fa | la plante | گیاه | Une plante. | 0.897 | 0.737 |
| vegetables-carrot | fa | la carotte | هویج | Des carottes. | 0.615 | 0.738 |
| body-eye | fa | l’œil | چشم | Les yeux ! | 0.925 | 0.739 |
| meals-egg | fa | l’œuf | تخم‌مرغ | Des œufs. | 0.738 | 0.741 |
| time-watch | fa | la montre | ساعت مچی | Une montre. | 0.736 | 0.742 |
| places-fountain | fa | la fontaine | فواره | Une fontaine. | 0.462 | 0.742 |
| f1 | fa | Bonjour, qu'est-ce que vous désirez ? | سلام، چه میل دارید؟ | Bonjour, que puis-je vous offrir ? | 0.885 | 0.744 |
| clothes-gloves | fa | les gants | دستکش | Ses gants. | 0.768 | 0.744 |
| pl5 | fa | Relancez-le aujourd'hui, sinon nous paierons des frais de surestaries. | امروز پیگیری کنید، وگرنه باید هزینه دموراژ بپردازیم. | Suivez-le aujourd'hui, ou nous devrons payer le loyer. | 0.771 | 0.745 |
| landscapes-volcano | fa | le volcan | آتشفشان | Des volcans. | 0.6 | 0.745 |
| actions-open_book | fa | lire | خواندن | À lire. | 0.899 | 0.745 |
| feelings-tired_face | fa | fatigué | خسته | Je suis fatigué. | 0.957 | 0.745 |
| signs-red_question_mark | fa | la question | سؤال | Une question. | 0.887 | 0.746 |
| meals-sandwich | fa | le sandwich | ساندویچ | Un sandwich. | 0.811 | 0.747 |
| wild-turtle | fa | la tortue | لاک‌پشت | Une tortue. | 0.588 | 0.747 |
| sea-g1 | fa | Le dauphin saute. | دلفین می‌پرد. | Les dauphins chantent. | 0.766 | 0.747 |
| objects-teddy_bear | fa | l’ours en peluche | خرس عروسکی | Un ours en peluche. | 0.764 | 0.747 |
| plants-leaf_fluttering_in_wind | fa | la feuille | برگ | Des feuilles. | 0.836 | 0.748 |
| sports-basketball | fa | le basket | بسکتبال | Le basket. | 0.588 | 0.748 |
| farm-ewe | fa | le mouton | گوسفند | Des moutons. | 0.852 | 0.749 |
| places-hotel | fa | l’hôtel | هتل | À l'hôtel. | 0.904 | 0.749 |
| s4 | fa | Du M, mais je voudrais l'essayer. | سایز مدیوم، ولی می‌خواهم امتحانش کنم. | C'est une taille moyenne, mais je veux l'essayer. | 0.812 | 0.75 |
| vegetables-mushroom | fa | le champignon | قارچ | Des champignons. | 0.828 | 0.75 |
| clothes-g1 | fa | des chaussures noires | کفش مشکی | Des souliers noirs. | 0.907 | 0.755 |
| transport-bicycle | fa | le vélo | دوچرخه | Une bicyclette. | 0.888 | 0.755 |
| music-paintbrush | fa | le pinceau | قلم‌مو | Le crayon. | 0.702 | 0.755 |
| fruits-olive | fa | l’olive | زیتون | Des olives. | 0.855 | 0.757 |
| house-door | fa | la porte | در | À la porte. | 0.568 | 0.757 |
| sea-coral | fa | le corail | مرجان | Le corail. | 0.474 | 0.759 |
| plants-deciduous_tree | fa | l’arbre | درخت | Un arbre. | 0.924 | 0.761 |
| jobs-police_officer | fa | le policier | پلیس | La police. | 0.909 | 0.761 |
| games-video_game | fa | le jeu vidéo | بازی ویدیویی | Jeux vidéo. | 0.903 | 0.762 |
| accessories-gem_stone | fa | la pierre précieuse | جواهر | Des pierres précieuses. | 0.64 | 0.764 |
| farm-cow | fa | la vache | گاو | Une vache. | 0.831 | 0.765 |
| sweets-candy | fa | le bonbon | آب‌نبات | Des bonbons. | 0.421 | 0.766 |
| family-bust_in_silhouette | fa | la personne | شخص | Une personne. | 0.92 | 0.766 |
| sea-whale | fa | la baleine | نهنگ | Une baleine. | 0.478 | 0.769 |
| family-girl | fa | la fille | دختر | Une fille. | 0.928 | 0.769 |
| clothes-woman_s_boot | fa | les bottes | چکمه | Des bottes. | 0.664 | 0.77 |
| birds-honeybee | fa | l’abeille | زنبور عسل | Une abeille. | 0.782 | 0.771 |
| transport-tram | fa | le tramway | تراموا | Le tramway. | 0.638 | 0.771 |
| music-artist_palette | fa | la peinture | نقاشی | Des peintures. | 0.901 | 0.773 |
| fruits-kiwi_fruit | fa | le kiwi | کیوی | Le Kiwi. | 0.768 | 0.774 |
| weather-tornado | fa | la tornade | گردباد | Une tornade. | 0.562 | 0.774 |
| places-school | fa | l’école | مدرسه | À l'école. | 0.951 | 0.774 |
| games-g2 | fa | Bonne fête ! | جشنت مبارک! | Joyeux anniversaire ! | 0.894 | 0.774 |
| places-playground_slide | fa | l’aire de jeux | زمین بازی | Le terrain de jeu. | 0.764 | 0.775 |
| travel-customs | fa | la douane | گمرک | À la douane. | 0.844 | 0.775 |
| vegetables-cucumber | fa | le concombre | خیار | Des concombres. | 0.503 | 0.776 |
| meals-bowl_with_spoon | fa | la soupe | سوپ | Une soupe. | 0.864 | 0.776 |
| body-foot | fa | le pied | پا | Les pieds. | 0.895 | 0.776 |
| health-face_with_head_bandage | fa | la blessure | زخم | Une blessure. | 0.895 | 0.776 |
| games-party_popper | fa | la fête | جشن | Une fête. | 0.903 | 0.776 |
| jobs-farmer | fa | l’agriculteur | کشاورز | Le fermier. | 0.944 | 0.778 |
| fruits-strawberry | fa | la fraise | توت‌فرنگی | Des fraises. | 0.654 | 0.779 |
| sweets-birthday_cake | fa | le gâteau d’anniversaire | کیک تولد | Un gâteau de fête. | 0.909 | 0.779 |
| wild-gorilla | fa | le gorille | گوریل | Une gorille. | 0.78 | 0.779 |
| travel-g2 | fa | Un billet pour Rabat, s’il vous plaît. | یک بلیت به رباط لطفاً. | Un billet pour le robot, s'il vous plaît. | 0.824 | 0.779 |
| sea-shrimp | fa | la crevette | میگو | Des crevettes. | 0.551 | 0.78 |
| house-house | fa | la maison | خانه | Une maison. | 0.873 | 0.78 |
| bathroom-toilet | fa | les toilettes | توالت | Dans les toilettes. | 0.79 | 0.78 |
| sweets-g2 | fa | Joyeux anniversaire ! | تولدت مبارک! | Je vous souhaite un bon anniversaire. | 0.956 | 0.781 |
| house-chair | fa | la chaise | صندلی | Une chaise. | 0.86 | 0.781 |
| house-candle | fa | la bougie | شمع | Une bougie. | 0.738 | 0.781 |
| farm-mouse | fa | la souris | موش | Une souris. | 0.776 | 0.782 |
| places-hospital | fa | l’hôpital | بیمارستان | À l'hôpital. | 0.936 | 0.782 |
| tech-computer_mouse | fa | la souris | ماوس | Une souris. | 0.746 | 0.782 |
| house-window | fa | la fenêtre | پنجره | Une fenêtre. | 0.941 | 0.783 |
| wild-fox | fa | le renard | روباه | Le renard. | 0.65 | 0.787 |
| kitchen-fork_and_knife_with_plate | fa | l’assiette | بشقاب | Une assiette. | 0.759 | 0.788 |
| family-child | fa | l’enfant | کودک | Une enfant. | 0.938 | 0.788 |
| transport-taxi | fa | le taxi | تاکسی | Un taxi. | 0.898 | 0.789 |
| signs-left_arrow | fa | la gauche | چپ | À gauche. | 0.893 | 0.79 |
| wild-polar_bear | fa | l’ours polaire | خرس قطبی | Un ours polaire. | 0.657 | 0.791 |
| places-factory | fa | l’usine | کارخانه | Une usine. | 0.916 | 0.792 |
| objects-radio | fa | la radio | رادیو | Une radio. | 0.915 | 0.793 |
| signs-right_arrow | fa | la droite | راست | À droite. | 0.906 | 0.794 |
| birds-peacock | fa | le paon | طاووس | Le paon. | 0.483 | 0.794 |
| wild-kangaroo | fa | le kangourou | کانگورو | Le kangourou. | 0.819 | 0.795 |
| plants-cherry_blossom | fa | la fleur de cerisier | شکوفه گیلاس | Des fleurs de cerisier. | 0.765 | 0.795 |
| vegetables-potato | fa | la pomme de terre | سیب‌زمینی | Des pommes de terre. | 0.824 | 0.796 |
| tech-laptop | fa | l’ordinateur portable | لپ‌تاپ | Un ordinateur portable. | 0.827 | 0.796 |
| sea-shark | fa | le requin | کوسه | Le requin. | 0.507 | 0.797 |
| weather-snowflake | fa | la neige | برف | La neige ! | 0.918 | 0.797 |
| actions-person_biking | fa | faire du vélo | دوچرخه‌سواری | À vélo. | 0.841 | 0.798 |
| transport-rocket | fa | la fusée | موشک | Une fusée. | 0.751 | 0.798 |
| colors-red_square | fa | rouge | قرمز | Le rouge. | 0.943 | 0.799 |
| wild-koala | fa | le koala | کوآلا | Le koala. | 0.768 | 0.799 |
| plants-hibiscus | fa | la fleur | گل | Une fleur. | 0.846 | 0.799 |
| transport-helicopter | fa | l’hélicoptère | هلیکوپتر | Un hélicoptère. | 0.688 | 0.799 |
| sports-trophy | fa | la coupe | جام | La coupe. | 0.632 | 0.799 |
| meals-cooked_rice | fa | le riz | برنج | Le riz. | 0.739 | 0.801 |
| landscapes-rock | fa | le rocher | صخره | Le rocher. | 0.696 | 0.809 |
| sea-crab | fa | le crabe | خرچنگ | Le crabe. | 0.597 | 0.812 |
| pt1 | fa | Le déploiement d'hier a provoqué une panne en production. | استقرار دیروز باعث قطعی در محیط عملیاتی شد. | Le déploiement d'hier a provoqué une perturbation de l'environnement opérationnel. | 0.663 | 0.814 |
| weather-fog | fa | le brouillard | مه | Le brouillard. | 0.471 | 0.814 |
| music-trumpet | fa | la trompette | ترومپت | Une trompette. | 0.656 | 0.815 |
| objects-hammer | fa | le marteau | چکش | Le marteau. | 0.529 | 0.821 |
| transport-motor_scooter | fa | le scooter | اسکوتر | Le scooter. | 0.7 | 0.828 |
| fruits-banana | fa | la banane | موز | Une banane. | 0.71 | 0.829 |
| vegetables-beans | fa | les haricots | لوبیا | Des haricots. | 0.723 | 0.841 |
| wild-crocodile | fa | le crocodile | تمساح | Le crocodile. | 0.293 | 0.841 |
| sports-person_golfing | fa | le golf | گلف | Le golf. | 0.731 | 0.841 |
| fruits-cherries | fa | les cerises | گیلاس | Des cerises. | 0.671 | 0.843 |
| games-ribbon | fa | le ruban | روبان | Le ruban. | 0.629 | 0.846 |
| body-g1 | fa | Je me lave les mains. | دست‌هایم را می‌شویم. | Je me serre les mains. | 0.705 | 0.847 |
| ph4 | fa | Est-il possible de visiter la médina demain ? | آیا فردا می‌شود از شهر قدیمی دیدن کرد؟ | Est-il possible de visiter la vieille ville demain ? | 0.739 | 0.852 |
| music-drum | fa | le tambour | طبل | Le tambour. | 0.695 | 0.855 |
| sweets-pancakes | fa | les crêpes | پنکیک | Des crêpes. | 0.373 | 0.857 |
| weather-umbrella_with_rain_drops | fa | le parapluie | چتر | Le parapluie. | 0.619 | 0.858 |
| music-flute | fa | la flûte | فلوت | La flûte. | 0.629 | 0.86 |
| fruits-coconut | fa | la noix de coco | نارگیل | Des noix de coco. | 0.692 | 0.861 |
| music-accordion | fa | l’accordéon | آکاردئون | L'accordéon. | 0.559 | 0.865 |
| birds-mosquito | fa | le moustique | پشه | Le moustique. | 0.734 | 0.867 |
| farm-duck | fa | le canard | اردک | Le canard. | 0.689 | 0.868 |
| farm-hamster | fa | le hamster | همستر | Le hamster. | 0.655 | 0.868 |
| school-pencil | fa | le crayon | مداد | Le crayon. | 0.658 | 0.868 |
| clothes-coat | fa | le manteau | پالتو | Le manteau. | 0.575 | 0.869 |
| games-chess_pawn | fa | les échecs | شطرنج | Les échecs. | 0.664 | 0.869 |
| sea-dolphin | fa | le dauphin | دلفین | Le dauphin. | 0.729 | 0.872 |
| wild-snake | fa | le serpent | مار | Le serpent. | 0.661 | 0.873 |
| transport-sailboat | fa | le voilier | قایق بادبانی | Le voilier. | 0.568 | 0.873 |
| birds-parrot | fa | le perroquet | طوطی | Le perroquet. | 0.73 | 0.874 |
| farm-rabbit | fa | le lapin | خرگوش | Le lapin. | 0.685 | 0.878 |
| house-couch_and_lamp | fa | le canapé | مبل | Le canapé. | 0.721 | 0.878 |
| places-office_building | fa | le bureau | اداره | Le bureau. | 0.746 | 0.878 |
| games-circus_tent | fa | le cirque | سیرک | Le cirque. | 0.643 | 0.898 |
| tech-keyboard | fa | le clavier | صفحه‌کلید | Le clavier. | 0.738 | 0.9 |
| accessories-crown | fa | la couronne | تاج | La couronne. | 0.739 | 0.902 |
| travel-station | fa | la gare | ایستگاه | La gare | 0.595 | 0.915 |
| wild-leopard | fa | le léopard | پلنگ | Le léopard. | 0.463 | 0.922 |
| weather-rainbow | fa | l’arc-en-ciel | رنگین‌کمان | L'arc-en-ciel | 0.35 | 0.927 |
| plants-palm_tree | fa | le palmier | نخل | Le palmier | 0.537 | 0.96 |
| s1 | fa | Je peux vous aider ? | کمکی از دستم برمی‌آید؟ | Je peux t'aider ? | 0.737 | 0.998 |
| weather-g1 | fa | Il pleut. | باران می‌بارد. | Il pleut. | 0.748 | 1.0 |
| school-paperclip | hi | le trombone | पेपर क्लिप | clips de papier | 0.236 | 0.278 |
| sweets-lollipop | hi | la sucette | लॉलीपॉप | papillons | 0.268 | 0.281 |
| farm-turkey | hi | la dinde | टर्की | Turquie | 0.397 | 0.292 |
| school-pushpin | hi | la punaise | ड्राइंग पिन | épingle à dessin | 0.338 | 0.3 |
| kitchen-cooking | hi | la poêle | कड़ाही | étourdissement | 0.39 | 0.325 |
| farm-baby_chick | hi | le poussin | चूज़ा | étourderie | 0.497 | 0.333 |
| birds-flamingo | hi | le flamant rose | राजहंस | loup-garou | 0.393 | 0.334 |
| kitchen-chopsticks | hi | les baguettes | चॉपस्टिक | épingle à cheveux | 0.38 | 0.335 |
| x1 | hi | Il ne faut pas vendre la peau de l'ours avant de l'avoir tué. | पहले से ही ख़याली पुलाव मत पकाओ। | Ne préparez pas d'idées. | 0.458 | 0.337 |
| objects-wrench | hi | la clé à molette | पाना | trouver | 0.296 | 0.349 |
| fruits-tangerine | hi | la mandarine | कीनू | quinoa | 0.345 | 0.364 |
| vegetables-beans | hi | les haricots | राजमा | le roi | 0.372 | 0.365 |
| plants-seedling | hi | la jeune pousse | अंकुर | semis | 0.584 | 0.371 |
| transport-sailboat | hi | le voilier | पालनाव | élever | 0.415 | 0.384 |
| fruits-mango | hi | la mangue | आम | commun | 0.52 | 0.394 |
| meals-falafel | hi | les falafels | फलाफल | résultats | 0.525 | 0.394 |
| birds-swan | hi | le cygne | हंस | sourire | 0.63 | 0.399 |
| vegetables-leafy_green | hi | la laitue | सलाद पत्ता | feuille de salade | 0.322 | 0.4 |
| birds-peacock | hi | le paon | मोर | écorce | 0.539 | 0.404 |
| sweets-pie | hi | la tarte | पाई | pi | 0.512 | 0.408 |
| actions-yawning_face | hi | bâiller | जम्हाई लेना | se débarrasser | 0.478 | 0.41 |
| games-roller_coaster | hi | les montagnes russes | रोलर कोस्टर | rouleau roulant | 0.421 | 0.412 |
| fruits-melon | hi | le melon | ख़रबूज़ा | délicieux | 0.538 | 0.415 |
| wild-hedgehog | hi | le hérisson | साही | écrivain | 0.435 | 0.424 |
| family-couple_with_heart | hi | le couple | जोड़ा | ajouté | 0.616 | 0.426 |
| travel-fuel_pump | hi | la station-service | पेट्रोल पंप | pompe à essence | 0.441 | 0.427 |
| clothes-shorts | hi | le short | निकर | dégager | 0.453 | 0.431 |
| bathroom-bucket | hi | le seau | बाल्टी | bouteille | 0.398 | 0.44 |
| drinks-bubble_tea | hi | le thé aux perles | बबल टी | bulle t | 0.516 | 0.441 |
| sports-person_lifting_weights | hi | la musculation | भारोत्तोलन | levage de poids | 0.601 | 0.444 |
| feelings-smiling_face_with_sunglasses | hi | détendu | निश्चिंत | assurée | 0.769 | 0.446 |
| school-abacus | hi | le boulier | गिनतारा | compteur | 0.347 | 0.451 |
| fruits-peach | hi | la pêche | आड़ू | poireau | 0.395 | 0.452 |
| games-game_die | hi | le dé | पासा | jeu de dés | 0.418 | 0.452 |
| transport-bus | hi | le bus | बस | tout simplement | 0.842 | 0.455 |
| actions-sleeping_face | hi | dormir | सोना | l'or | 0.544 | 0.459 |
| objects-screwdriver | hi | le tournevis | पेचकस | écrouleuse | 0.486 | 0.461 |
| school-pen | hi | le stylo | कलम | plume | 0.781 | 0.464 |
| jobs-construction_worker | hi | le maçon | राजमिस्त्री | architecte | 0.408 | 0.465 |
| meals-flatbread | hi | la galette | नान | petit | 0.346 | 0.467 |
| clothes-jeans | hi | le jean | जींस | les gènes | 0.658 | 0.468 |
| bathroom-razor | hi | le rasoir | उस्तरा | éclaboussure | 0.502 | 0.469 |
| house-framed_picture | hi | le tableau | तस्वीर | le photographe | 0.588 | 0.473 |
| wild-hippopotamus | hi | l’hippopotame | दरियाई घोड़ा | cheval de mer | 0.356 | 0.474 |
| time-g1 | hi | Bonjour, bon matin ! | सुप्रभात! | Je vous salue. | 0.852 | 0.475 |
| birds-snail | hi | l’escargot | घोंघा | oiseau | 0.622 | 0.477 |
| sea-jellyfish | hi | la méduse | जेलीफ़िश | poisson-jelly | 0.355 | 0.48 |
| health-crutch | hi | la béquille | बैसाखी | baïsakhi | 0.601 | 0.486 |
| clothes-scarf | hi | l’écharpe | मफ़लर | muffler | 0.457 | 0.487 |
| vegetables-chestnut | hi | la châtaigne | शाहबलूत | écorce | 0.289 | 0.488 |
| clothes-woman_s_boot | hi | les bottes | बूट | démarrer | 0.796 | 0.494 |
| health-x_ray | hi | la radio | एक्स-रे | rayons X | 0.538 | 0.496 |
| sea-seal | hi | le phoque | सील | le sceau | 0.362 | 0.5 |
| weather-tornado | hi | la tornade | बवंडर | tourbillon | 0.513 | 0.501 |
| fruits-watermelon | hi | la pastèque | तरबूज़ | pomme de terre | 0.374 | 0.503 |
| school-clipboard | hi | le porte-bloc | क्लिपबोर्ड | Clipboard | 0.523 | 0.505 |
| transport-canoe | hi | le canoë | डोंगी | bateaux | 0.531 | 0.507 |
| travel-vertical_traffic_light | hi | le feu tricolore | ट्रैफ़िक लाइट | feux de circulation | 0.539 | 0.518 |
| vegetables-bell_pepper | hi | le poivron | शिमला मिर्च | poivre de schimla | 0.625 | 0.519 |
| bathroom-broom | hi | le balai | झाड़ू | balayage | 0.708 | 0.524 |
| weather-cloud_with_lightning | hi | l’éclair | बिजली | électricité | 0.586 | 0.525 |
| sweets-doughnut | hi | le beignet | डोनट | les donuts | 0.414 | 0.527 |
| farm-camel | hi | le dromadaire | ऊँट | chameau | 0.527 | 0.53 |
| school-briefcase | hi | la mallette | ब्रीफ़केस | boîte à lettres | 0.312 | 0.537 |
| kitchen-fork_and_knife | hi | les couverts | छुरी-काँटे | fourchette | 0.509 | 0.541 |
| health-adhesive_bandage | hi | le pansement | पट्टी | bandeau | 0.551 | 0.545 |
| school-straight_ruler | hi | la règle | पटरी | piste | 0.551 | 0.545 |
| sports-trophy | hi | la coupe | ट्रॉफ़ी | trophée | 0.491 | 0.548 |
| sea-spiral_shell | hi | le coquillage | सीप | l'oignon | 0.594 | 0.552 |
| games-kite | hi | le cerf-volant | पतंग | écureuil | 0.705 | 0.555 |
| sweets-candy | hi | le bonbon | टॉफ़ी | délicieux | 0.499 | 0.56 |
| sweets-popcorn | hi | le pop-corn | पॉपकॉर्न | pommes de terre | 0.824 | 0.56 |
| f6 | hi | Voilà. Bonne journée ! | यह लीजिए। आपका दिन शुभ हो! | Je vous souhaite une bonne journée. | 0.725 | 0.561 |
| objects-package | hi | le colis | पार्सल | parcelles | 0.773 | 0.566 |
| objects-electric_plug | hi | la prise | प्लग | le plug | 0.479 | 0.57 |
| school-calendar | hi | l’agenda | डायरी | journaux | 0.66 | 0.572 |
| school-notebook | hi | le cahier | कॉपी | copier | 0.413 | 0.575 |
| travel-station | hi | la gare | स्टेशन | les stations | 0.603 | 0.586 |
| sports-horse_racing | hi | l’équitation | घुड़सवारी | cavalier | 0.828 | 0.589 |
| signs-down_arrow | hi | le bas | नीचे | vers le bas | 0.53 | 0.593 |
| objects-locked | hi | le cadenas | ताला | verrouillage | 0.702 | 0.593 |
| time-alarm_clock | hi | le réveil | अलार्म घड़ी | horloge d'alarme | 0.505 | 0.594 |
| bathroom-lotion_bottle | hi | la crème | लोशन | lotion | 0.4 | 0.595 |
| drinks-ice | hi | le glaçon | बर्फ़ का टुकड़ा | morceau de neige | 0.67 | 0.599 |
| kitchen-baby_bottle | hi | le biberon | दूध की बोतल | bouteille de lait | 0.621 | 0.6 |
| birds-owl | hi | la chouette | उल्लू | oiseau | 0.637 | 0.602 |
| house-mirror | hi | le miroir | शीशा | éclair | 0.708 | 0.607 |
| x3 | hi | Dites-le-lui avec tact : il est très susceptible. | उसे नरमी से बताइए, वह बहुत जल्दी बुरा मान जाता है। | Dis-le doucement, il est trop facile de le prendre pour un méchant. | 0.703 | 0.609 |
| body-flexed_biceps | hi | le bras | बाँह | gauche | 0.782 | 0.61 |
| kitchen-jar | hi | le bocal | मर्तबान | récipient | 0.341 | 0.611 |
| body-raised_hand | hi | la main | हाथ | main | 0.912 | 0.611 |
| objects-battery | hi | la pile | बैटरी | batterie | 0.55 | 0.613 |
| clothes-thong_sandal | hi | les tongs | चप्पल | chaussettes | 0.616 | 0.614 |
| signs-minus | hi | moins | घटा | décroître | 0.796 | 0.622 |
| transport-kick_scooter | hi | la trottinette | किक स्कूटर | scooter à coups de pied | 0.551 | 0.623 |
| birds-dove | hi | la colombe | कबूतर | pigeon | 0.618 | 0.625 |
| sports-goal_net | hi | le but | गोल | butée | 0.5 | 0.626 |
| birds-lady_beetle | hi | la coccinelle | लेडीबग | le ladybug | 0.328 | 0.628 |
| signs-check_mark_button | hi | correct | सही | tout à fait | 0.942 | 0.629 |
| transport-g1 | hi | Je prends le bus. | मैं बस लेता हूँ। | Je prends juste. | 0.686 | 0.631 |
| family-people_hugging | hi | le câlin | गले मिलना | étreindre | 0.676 | 0.632 |
| transport-fire_engine | hi | le camion de pompiers | दमकल | incendie | 0.632 | 0.632 |
| sea-octopus | hi | la pieuvre | ऑक्टोपस | poulpe | 0.383 | 0.637 |
| house-light_bulb | hi | l’ampoule | बल्ब | lampe à incandescence | 0.728 | 0.637 |
| sea-water_wave | hi | la vague | लहर | vague | 0.792 | 0.64 |
| clothes-sari | hi | le sari | साड़ी | écharpe | 0.748 | 0.64 |
| plants-evergreen_tree | hi | le sapin | देवदार | le cèdre | 0.406 | 0.646 |
| landscapes-volcano | hi | le volcan | ज्वालामुखी | volcanisme | 0.675 | 0.649 |
| fruits-banana | hi | la banane | केला | pommes de terre | 0.584 | 0.65 |
| accessories-backpack | hi | le sac à dos | बस्ता | boîtier | 0.471 | 0.651 |
| travel-stop_sign | hi | le panneau stop | रुकने का संकेत | signe de s'arrêter | 0.614 | 0.651 |
| kitchen-fork_and_knife_with_plate | hi | l’assiette | थाली | plateau | 0.78 | 0.658 |
| transport-airplane | hi | l’avion | हवाई जहाज़ | aéronefs | 0.867 | 0.665 |
| kitchen-canned_food | hi | la boîte de conserve | डिब्बाबंद खाना | nourriture en conserve | 0.715 | 0.67 |
| health-syringe | hi | la piqûre | इंजेक्शन | injection | 0.618 | 0.673 |
| meals-pot_of_food | hi | le ragoût | स्ट्यू | le stew | 0.422 | 0.674 |
| places-castle | hi | le château | क़िला | forteresse | 0.513 | 0.676 |
| sports-basketball | hi | le basket | बास्केटबॉल | basket-ball | 0.526 | 0.676 |
| meals-spaghetti | hi | les pâtes | पास्ता | pâte à crêpes | 0.768 | 0.678 |
| places-department_store | hi | le grand magasin | डिपार्टमेंट स्टोर | magasins commerciaux | 0.647 | 0.68 |
| vegetables-pea_pod | hi | les petits pois | मटर | pétales | 0.542 | 0.685 |
| places-post_office | hi | la poste | डाकघर | bureau de poste | 0.639 | 0.685 |
| fruits-blueberries | hi | les myrtilles | ब्लूबेरी | les bleuets | 0.525 | 0.688 |
| vegetables-ear_of_corn | hi | le maïs | मक्का | céréales | 0.746 | 0.694 |
| body-bone | hi | l’os | हड्डी | osseux | 0.644 | 0.695 |
| time-stopwatch | hi | le chronomètre | स्टॉपवॉच | horloge d'arrêt | 0.492 | 0.696 |
| plants-herb | hi | l’herbe aromatique | जड़ी-बूटी | herbes | 0.668 | 0.696 |
| vegetables-eggplant | hi | l’aubergine | बैंगन | épinards | 0.733 | 0.698 |
| family-people_holding_hands | hi | les amis | दोस्त | ami | 0.864 | 0.699 |
| games-party_popper | hi | la fête | पार्टी | parti | 0.866 | 0.699 |
| jobs-farmer | hi | l’agriculteur | किसान | le paysan | 0.904 | 0.7 |
| travel-construction | hi | les travaux | सड़क का काम | travaux routiers | 0.674 | 0.7 |
| school-closed_book | hi | le livre | किताब | livre | 0.891 | 0.701 |
| ps1 | hi | Bonjour, je suis l'infirmier de garde. Où avez-vous mal ? | नमस्ते, मैं ड्यूटी पर तैनात नर्स हूँ। आपको कहाँ दर्द है? | Je suis une infirmière en service. | 0.883 | 0.702 |
| house-couch_and_lamp | hi | le canapé | सोफ़ा | couchette | 0.704 | 0.709 |
| birds-eagle | hi | l’aigle | बाज़ | oiseau | 0.335 | 0.71 |
| vegetables-hot_pepper | hi | le piment | मिर्च | poivre | 0.679 | 0.714 |
| farm-goat | hi | la chèvre | बकरी | mouton | 0.737 | 0.717 |
| g3 | hi | Bien, merci. Bienvenue ! | मैं भी ठीक हूँ, धन्यवाद। स्वागत है! | Je vais bien, merci. | 0.728 | 0.719 |
| f5 | hi | L'addition, s'il vous plaît. | बिल दीजिए, कृपया। | La note, s'il vous plaît. | 0.667 | 0.724 |
| sea-coral | hi | le corail | मूँगा | le corbeau | 0.553 | 0.728 |
| sweets-ice_cream | hi | la glace | आइसक्रीम | crème glacée | 0.755 | 0.729 |
| sports-running_shirt | hi | le maillot | जर्सी | le jersey | 0.619 | 0.729 |
| ph6 | hi | Avec plaisir, merci pour votre accueil. | ज़रूर, आपकी मेहमाननवाज़ी के लिए धन्यवाद। | Bien sûr, merci pour votre hospitalité. | 0.75 | 0.734 |
| accessories-ring | hi | la bague | अंगूठी | anneau | 0.858 | 0.734 |
| farm-pig | hi | le cochon | सूअर | porc | 0.571 | 0.735 |
| feelings-pensive_face | hi | triste | उदास | déprimé | 0.933 | 0.737 |
| places-ferris_wheel | hi | la grande roue | बड़ा झूला | grande balançoire | 0.813 | 0.741 |
| x6 | hi | Je le condenserai pour n'en garder que l'essentiel. | मैं इसे छोटा करके सिर्फ़ ज़रूरी बातें रखूँगा। | Je vais le réduire à l'essentiel. | 0.759 | 0.743 |
| jobs-factory_worker | hi | l’ouvrier | मज़दूर | ouvrière | 0.889 | 0.746 |
| feelings-hot_face | hi | avoir chaud | गर्मी लगना | chaleur | 0.867 | 0.747 |
| kitchen-g2 | hi | Bon appétit ! | खाने का आनंद लें! | Profitez de la nourriture! | 0.806 | 0.757 |
| games-puzzle_piece | hi | le puzzle | पहेली | casse-tête | 0.815 | 0.758 |
| pt6 | hi | D'accord, je rédige le post-mortem et j'ouvre un ticket aujourd'hui. | ठीक है, मैं आज ही पोस्ट-मॉर्टम लिखकर एक टिकट खोलता हूँ। | Je vais ouvrir un timbre aujourd'hui en écrivant une autopsie. | 0.885 | 0.759 |
| music-microphone | hi | le micro | माइक्रोफ़ोन | microphone | 0.746 | 0.762 |
| time-mantelpiece_clock | hi | l’horloge | दीवार घड़ी | horloge murale | 0.746 | 0.763 |
| pl5 | hi | Relancez-le aujourd'hui, sinon nous paierons des frais de surestaries. | आज ही उनसे पूछिए, वरना हमें डेमरेज शुल्क देना पड़ेगा। | Demandez-leur dès aujourd'hui, ou nous devrons payer des frais de déménagement. | 0.774 | 0.764 |
| tech-headphone | hi | le casque audio | हेडफ़ोन | écouteurs | 0.619 | 0.765 |
| s5 | hi | Bien sûr, les cabines sont au fond. | ज़रूर, ट्रायल रूम पीछे की तरफ़ हैं। | Bien sûr, les salles d'audience sont à l'arrière. | 0.734 | 0.766 |
| plants-fallen_leaf | hi | la feuille morte | सूखा पत्ता | feuille sèche | 0.676 | 0.768 |
| actions-clapping_hands | hi | applaudir | ताली बजाना | applaudissements | 0.773 | 0.769 |
| weather-wind_face | hi | le vent | हवा | l'air | 0.803 | 0.774 |
| a6 | hi | En compensant par plus de flexibilité sur les horaires. | काम के घंटों में ज़्यादा लचीलापन देकर इसकी भरपाई की जा सकती है। | Cela peut être compensé par une plus grande flexibilité dans les heures de travail. | 0.696 | 0.775 |
| signs-plus | hi | plus | जोड़ | ajouter | 0.779 | 0.78 |
| s4 | hi | Du M, mais je voudrais l'essayer. | मीडियम, लेकिन मैं इसे पहनकर देखना चाहता हूँ। | Médium, mais je veux essayer de le porter. | 0.715 | 0.781 |
| vegetables-peanuts | hi | les cacahuètes | मूंगफली | les arachides | 0.694 | 0.782 |
| time-watch | hi | la montre | घड़ी | horloge | 0.822 | 0.784 |
| actions-waving_hand | hi | saluer de la main | हाथ हिलाना | mouvement de la main | 0.807 | 0.784 |
| transport-motorcycle | hi | la moto | मोटरसाइकिल | motocycle | 0.802 | 0.784 |
| sports-boxing_glove | hi | la boxe | मुक्केबाज़ी | boxe | 0.644 | 0.784 |
| school-g2 | hi | J’ouvre mon cahier. | मैं अपनी कॉपी खोलता हूँ। | Je vais ouvrir ma copie. | 0.787 | 0.785 |
| clothes-running_shoe | hi | les baskets | जूते | chaussures | 0.78 | 0.791 |
| games-fireworks | hi | le feu d’artifice | आतिशबाज़ी | feux d'artifice | 0.679 | 0.792 |
| meals-egg | hi | l’œuf | अंडा | œuf | 0.798 | 0.794 |
| accessories-purse | hi | le porte-monnaie | बटुआ | portefeuille | 0.428 | 0.795 |
| school-file_folder | hi | le dossier | फ़ोल्डर | Les dossiers | 0.745 | 0.795 |
| jobs-technologist | hi | le développeur | प्रोग्रामर | programmeur | 0.787 | 0.797 |
| a5 | hi | Et comment garantir l'équité entre ceux qui peuvent télétravailler et les autres ? | और जो लोग घर से काम कर सकते हैं और जो नहीं कर सकते, उनके बीच निष्पक्षता कैसे सुनिश्चित करें? | Et comment assurer l'équité entre ceux qui peuvent travailler à domicile et ceux qui ne le peuvent pas ? | 0.773 | 0.799 |
| sports-volleyball | hi | le volley | वॉलीबॉल | volley-ball | 0.714 | 0.8 |
| fruits-pear | hi | la poire | नाशपाती | poireau | 0.594 | 0.801 |
| birds-ant | hi | la fourmi | चींटी | fourmis | 0.498 | 0.813 |
| sports-ice_skate | hi | le patinage | आइस स्केटिंग | patinage sur glace | 0.642 | 0.813 |
| travel-customs | hi | la douane | सीमा शुल्क | droits de douane | 0.735 | 0.814 |
| objects-balloon | hi | le ballon de baudruche | गुब्बारा | ballon | 0.697 | 0.824 |
| school-pencil | hi | le crayon | पेंसिल | crayons | 0.586 | 0.826 |
| school-crayon | hi | le crayon de couleur | क्रेयॉन | crayon | 0.426 | 0.832 |
| fruits-cherries | hi | les cerises | चेरी | cerisier | 0.613 | 0.833 |
| vegetables-mushroom | hi | le champignon | मशरूम | champignons | 0.748 | 0.84 |
| farm-rooster | hi | le coq | मुर्गा | coq | 0.736 | 0.841 |
| time-hourglass_done | hi | le sablier | रेतघड़ी | sablier | 0.563 | 0.847 |
| ph4 | hi | Est-il possible de visiter la médina demain ? | क्या कल पुराना शहर घूमना संभव है? | Est-il possible de visiter la vieille ville demain ? | 0.738 | 0.852 |
| school-graduation_cap | hi | le diplôme | दीक्षांत | diplômé | 0.563 | 0.859 |
| travel-luggage | hi | la valise | सूटकेस | valise | 0.686 | 0.862 |
| weather-snowman | hi | le bonhomme de neige | हिममानव | homme de neige | 0.544 | 0.863 |
| travel-tent | hi | la tente | तंबू | tente | 0.668 | 0.872 |
| sea-crab | hi | le crabe | केकड़ा | crabe | 0.748 | 0.875 |
| school-page_facing_up | hi | la feuille de papier | काग़ज़ | papier | 0.323 | 0.876 |
| jobs-firefighter | hi | le pompier | दमकलकर्मी | pompier | 0.68 | 0.881 |
| drinks-glass_of_milk | hi | le lait | दूध | lait | 0.74 | 0.884 |
| objects-magnet | hi | l’aimant | चुंबक | aimant | 0.597 | 0.886 |
| fruits-grapes | hi | le raisin | अंगूर | les raisins | 0.515 | 0.892 |
| travel-compass | hi | la boussole | कम्पास | boussole | 0.335 | 0.893 |
| meals-bread | hi | le pain | रोटी | pain | 0.562 | 0.894 |
| sea-shark | hi | le requin | शार्क | requin | 0.513 | 0.896 |
| sea-shrimp | hi | la crevette | झींगा | crevettes | 0.374 | 0.901 |
| clothes-necktie | hi | la cravate | टाई | cravate | 0.569 | 0.901 |
| weather-fog | hi | le brouillard | कोहरा | brouillard | 0.612 | 0.903 |
| farm-donkey | hi | l’âne | गधा | âne | 0.718 | 0.907 |
| sea-whale | hi | la baleine | व्हेल | baleine | 0.549 | 0.91 |
| weather-umbrella_with_rain_drops | hi | le parapluie | छाता | parapluie | 0.552 | 0.91 |
| fruits-strawberry | hi | la fraise | स्ट्रॉबेरी | les fraises | 0.674 | 0.913 |
| wild-crocodile | hi | le crocodile | मगरमच्छ | crocodile | 0.719 | 0.915 |
| wild-turtle | hi | la tortue | कछुआ | tortue | 0.7 | 0.918 |
| drinks-teapot | hi | la théière | चायदानी | théière | 0.639 | 0.92 |
| plants-cactus | hi | le cactus | कैक्टस | cactus | 0.725 | 0.92 |
| places-fountain | hi | la fontaine | फ़व्वारा | fontaine | 0.611 | 0.92 |
| wild-chipmunk | hi | l’écureuil | गिलहरी | écureuil | 0.733 | 0.923 |
| farm-cat | hi | le chat | बिल्ली | chat | 0.636 | 0.926 |
| bathroom-shower | hi | la douche | शावर | douche | 0.638 | 0.927 |
| games-confetti_ball | hi | les confettis | कंफ़ेटी | confetti | 0.635 | 0.927 |
| meals-hamburger | hi | le hamburger | बर्गर | les hamburgers | 0.703 | 0.928 |
| jobs-mechanic | hi | le mécanicien | मिस्त्री | mécanicien | 0.489 | 0.928 |
| travel-world_map | hi | la carte | नक़्शा | carte | 0.516 | 0.93 |
| vegetables-cucumber | hi | le concombre | खीरा | les concombres | 0.442 | 0.932 |
| jobs-cook | hi | le cuisinier | रसोइया | cuisinier | 0.448 | 0.932 |
| games-ribbon | hi | le ruban | रिबन | ruban | 0.734 | 0.932 |
| meals-cooked_rice | hi | le riz | चावल | riz | 0.734 | 0.935 |
| farm-duck | hi | le canard | बत्तख़ | canard | 0.538 | 0.935 |
| school-bar_chart | hi | le graphique | चार्ट | graphique | 0.743 | 0.935 |
| places-office_building | hi | le bureau | दफ़्तर | bureau | 0.745 | 0.938 |
| farm-ox | hi | le bœuf | बैल | bœuf | 0.715 | 0.94 |
| farm-rabbit | hi | le lapin | खरगोश | lapin | 0.734 | 0.942 |
| meals-croissant | hi | le croissant | क्रोसां | croissant | 0.655 | 0.943 |
| farm-mouse | hi | la souris | चूहा | souris | 0.733 | 0.943 |
| accessories-folding_hand_fan | hi | l’éventail | पंखा | éventail | 0.574 | 0.943 |
| pt2 | hi | J'ai consulté les journaux : une variable d'environnement manquait. | मैंने लॉग देखे: एक एनवायरनमेंट वेरिएबल ग़ायब था। | J'ai vu les journaux: une variable environnementale manquait. | 0.649 | 0.944 |
| bathroom-bathtub | hi | la baignoire | बाथटब | baignoire | 0.612 | 0.944 |
| objects-envelope | hi | l’enveloppe | लिफ़ाफ़ा | enveloppe | 0.501 | 0.944 |
| birds-butterfly | hi | le papillon | तितली | papillon | 0.707 | 0.947 |
| plants-sunflower | hi | le tournesol | सूरजमुखी | tournesol | 0.67 | 0.947 |
| music-flute | hi | la flûte | बाँसुरी | flûte | 0.702 | 0.947 |
| games-circus_tent | hi | le cirque | सर्कस | cirque | 0.603 | 0.947 |
| meals-baguette_bread | hi | la baguette | बैगेट | baguette | 0.732 | 0.948 |
| clothes-woman_s_hat | hi | le chapeau | हैट | chapeau | 0.546 | 0.948 |
| accessories-handbag | hi | le sac à main | हैंडबैग | sac à main | 0.579 | 0.948 |
| wild-gorilla | hi | le gorille | गोरिल्ला | gorille | 0.705 | 0.949 |
| meals-french_fries | hi | les frites | फ्रेंच फ्राइज़ | Les frites | 0.629 | 0.95 |
| tech-telescope | hi | le télescope | दूरबीन | télescope | 0.609 | 0.95 |
| plants-leaf_fluttering_in_wind | hi | la feuille | पत्ता | feuille | 0.622 | 0.951 |
| accessories-crown | hi | la couronne | मुकुट | couronne | 0.603 | 0.952 |
| bathroom-sponge | hi | l’éponge | स्पंज | éponge | 0.577 | 0.953 |
| birds-bird | hi | l’oiseau | चिड़िया | oiseau | 0.673 | 0.955 |
| weather-rainbow | hi | l’arc-en-ciel | इंद्रधनुष | arc-en-ciel | 0.673 | 0.955 |
| objects-flashlight | hi | la lampe de poche | टॉर्च | lampe de poche | 0.385 | 0.957 |
| transport-rocket | hi | la fusée | रॉकेट | fusée | 0.592 | 0.958 |
| plants-tulip | hi | la tulipe | ट्यूलिप | les tulipes | 0.734 | 0.959 |
| house-ladder | hi | l’échelle | सीढ़ी | échelle | 0.662 | 0.959 |
| objects-teddy_bear | hi | l’ours en peluche | टेडी बियर | ours en peluche | 0.401 | 0.959 |
| music-violin | hi | le violon | वायलिन | violon | 0.634 | 0.959 |
| wild-leopard | hi | le léopard | तेंदुआ | léopard | 0.509 | 0.96 |
| wild-polar_bear | hi | l’ours polaire | ध्रुवीय भालू | ours polaire | 0.642 | 0.961 |
| accessories-closed_umbrella | hi | le parapluie fermé | बंद छाता | parapluie fermée | 0.712 | 0.961 |
| house-elevator | hi | l’ascenseur | लिफ़्ट | ascenseur | 0.416 | 0.962 |
| places-houses | hi | le quartier | मोहल्ला | quartier | 0.557 | 0.962 |
| tech-satellite_antenna | hi | l’antenne | एंटीना | antenne | 0.693 | 0.962 |
| games-chess_pawn | hi | les échecs | शतरंज | échecs | 0.6 | 0.962 |
| birds-spider | hi | l’araignée | मकड़ी | araignée | 0.61 | 0.964 |
| places-factory | hi | l’usine | कारख़ाना | usine | 0.657 | 0.967 |
| fruits-pineapple | hi | l’ananas | अनानास | ananas | 0.724 | 0.968 |
| accessories-gem_stone | hi | la pierre précieuse | रत्न | pierre précieuse | 0.66 | 0.969 |
| clothes-one_piece_swimsuit | hi | le maillot de bain | स्विमसूट | maillot de bain | 0.629 | 0.971 |
| health-face_with_thermometer | hi | la fièvre | बुख़ार | fièvre | 0.494 | 0.977 |
| music-accordion | hi | l’accordéon | अकॉर्डियन | accordéon | 0.568 | 0.978 |
| sports-martial_arts_uniform | hi | les arts martiaux | मार्शल आर्ट | arts martiaux | 0.732 | 0.986 |
| vegetables-garlic | hi | l’ail | लहसुन | l'ail | 0.679 | 0.989 |
| fruits-avocado | hi | l’avocat | एवोकाडो | l'avocat | 0.519 | 0.99 |
| wild-bear | hi | l’ours | भालू | l'ours | 0.475 | 0.993 |
| health-g1 | hi | J’ai de la fièvre. | मुझे बुख़ार है। | J'ai une fièvre. | 0.695 | 0.995 |
| numbers-keycap_7 | hi | sept | सात | sept | 0.685 | 1.0 |
| signs-cross_mark | hi | faux | गलत | faux | 0.723 | 1.0 |
| vegetables-broccoli | hi | le brocoli | ब्रोकली | le brocoli | 0.703 | 1.0 |
| vegetables-ginger_root | hi | le gingembre | अदरक | le gingembre | 0.606 | 1.0 |
| meals-cheese_wedge | hi | le fromage | पनीर | le fromage | 0.691 | 1.0 |
| meals-salt | hi | le sel | नमक | le sel | 0.614 | 1.0 |
| sweets-pancakes | hi | les crêpes | पैनकेक | les crêpes | 0.404 | 1.0 |
| farm-hamster | hi | le hamster | हैम्स्टर | le hamster | 0.716 | 1.0 |
| wild-lion | hi | le lion | शेर | le lion | 0.75 | 1.0 |
| wild-zebra | hi | le zèbre | ज़ेबरा | le zèbre | 0.697 | 1.0 |
| wild-rhinoceros | hi | le rhinocéros | गैंडा | le rhinocéros | 0.472 | 1.0 |
| wild-monkey | hi | le singe | बंदर | le singe | 0.646 | 1.0 |
| wild-fox | hi | le renard | लोमड़ी | le renard | 0.505 | 1.0 |
| wild-deer | hi | le cerf | हिरण | le cerf | 0.603 | 1.0 |
| wild-frog | hi | la grenouille | मेंढक | la grenouille | 0.632 | 1.0 |
| birds-parrot | hi | le perroquet | तोता | le perroquet | 0.478 | 1.0 |
| sea-dolphin | hi | le dauphin | डॉल्फ़िन | le dauphin | 0.727 | 1.0 |
| plants-palm_tree | hi | le palmier | ताड़ का पेड़ | le palmier | 0.584 | 1.0 |
| weather-crescent_moon | hi | la lune | चाँद | la lune | 0.739 | 1.0 |
| weather-g1 | hi | Il pleut. | बारिश हो रही है। | Il pleut. | 0.704 | 1.0 |
| landscapes-rock | hi | le rocher | चट्टान | le rocher | 0.676 | 1.0 |
| body-lungs | hi | les poumons | फेफड़े | les poumons | 0.745 | 1.0 |
| health-sneezing_face | hi | le rhume | ज़ुकाम | le rhume | 0.668 | 1.0 |
| health-drop_of_blood | hi | le sang | ख़ून | le sang | 0.533 | 1.0 |
| actions-person_swimming | hi | nager | तैरना | nager | 0.503 | 1.0 |
| actions-microphone | hi | chanter | गाना | chanter | 0.716 | 1.0 |
| house-bed | hi | le lit | बिस्तर | le lit | 0.482 | 1.0 |
| objects-hammer | hi | le marteau | हथौड़ा | le marteau | 0.629 | 1.0 |
| music-trumpet | hi | la trompette | तुरही | la trompette | 0.478 | 1.0 |
| wild-hippopotamus | it | l’hippopotame | l’ippopotamo | On peut y aller. | 0.777 | 0.102 |
| sea-water_wave | it | la vague | l’onda | L'île de Londres | 0.793 | 0.263 |
| plants-evergreen_tree | it | le sapin | l’abete | Vous l'avez. | 0.721 | 0.267 |
| signs-down_arrow | it | le bas | giù | À terre ! | 0.542 | 0.298 |
| time-g1 | it | Bonjour, bon matin ! | Buongiorno! | Je vous en prie. | 0.8 | 0.305 |
| signs-check_mark_button | it | correct | giusto | C'est tout à fait ça. | 0.902 | 0.331 |
| actions-waving_hand | it | saluer de la main | salutare | en bonne santé | 0.577 | 0.368 |
| school-paperclip | it | le trombone | la graffetta | la greffe | 0.392 | 0.368 |
| fruits-grapes | it | le raisin | l’uva | La pluie | 0.684 | 0.371 |
| sports-goal_net | it | le but | la porta | La porte ! | 0.575 | 0.378 |
| farm-donkey | it | l’âne | l’asino | Le casino | 0.823 | 0.384 |
| signs-cross_mark | it | faux | sbagliato | C'est une erreur. | 0.703 | 0.401 |
| music-trumpet | it | la trompette | la tromba | la corne de bélier | 0.732 | 0.417 |
| sweets-lollipop | it | la sucette | il lecca-lecca | le jouet-jouet | 0.529 | 0.426 |
| time-hourglass_done | it | le sablier | la clessidra | l'accélérateur | 0.556 | 0.437 |
| signs-up_arrow | it | le haut | su | Ça y est ! | 0.559 | 0.446 |
| school-clipboard | it | le porte-bloc | la cartellina | le dossier | 0.522 | 0.452 |
| fruits-watermelon | it | la pastèque | l’anguria | l'oranger | 0.489 | 0.454 |
| actions-yawning_face | it | bâiller | sbadigliare | éternuer | 0.517 | 0.459 |
| clothes-shorts | it | le short | i pantaloncini | les sous-vêtements | 0.477 | 0.467 |
| meals-flatbread | it | la galette | la piadina | la petite plaine | 0.63 | 0.472 |
| x1 | it | Il ne faut pas vendre la peau de l'ours avant de l'avoir tué. | Non dire gatto se non ce l'hai nel sacco. | Ne dites pas "chat" si vous n'en avez pas dans le sac. | 0.485 | 0.473 |
| clothes-thong_sandal | it | les tongs | le infradito | les fraîchement | 0.385 | 0.473 |
| school-abacus | it | le boulier | l’abaco | L'abaque | 0.545 | 0.476 |
| colors-purple_square | it | violet | viola | Pourpre | 0.838 | 0.487 |
| travel-fuel_pump | it | la station-service | il distributore | le distributeur | 0.481 | 0.488 |
| feelings-worried_face | it | inquiet | preoccupato | Je m'inquiète. | 0.884 | 0.492 |
| games-kite | it | le cerf-volant | l’aquilone | L'épervier | 0.543 | 0.504 |
| health-syringe | it | la piqûre | l’iniezione | Injection | 0.706 | 0.505 |
| actions-person_swimming | it | nager | nuotare | faire de la natation | 0.495 | 0.506 |
| farm-camel | it | le dromadaire | il dromedario | le caméléon | 0.846 | 0.511 |
| transport-fire_engine | it | le camion de pompiers | l’autopompa | La pompe automatique | 0.567 | 0.514 |
| kitchen-jar | it | le bocal | il barattolo | le pot | 0.77 | 0.517 |
| family-people_hugging | it | le câlin | l’abbraccio | Je t'embrasse | 0.668 | 0.521 |
| body-bone | it | l’os | l’osso | Le bœuf | 0.787 | 0.522 |
| sweets-doughnut | it | le beignet | la ciambella | le donut. | 0.714 | 0.535 |
| health-crutch | it | la béquille | la stampella | le trépied | 0.702 | 0.537 |
| school-briefcase | it | la mallette | la valigetta | La valise. | 0.78 | 0.543 |
| plants-seedling | it | la jeune pousse | il germoglio | le germe | 0.703 | 0.545 |
| farm-baby_chick | it | le poussin | il pulcino | Le poulet | 0.759 | 0.548 |
| feelings-smiling_face_with_sunglasses | it | détendu | rilassato | Il est détendu. | 0.913 | 0.551 |
| sports-person_lifting_weights | it | la musculation | il sollevamento pesi | la levée de poids | 0.569 | 0.552 |
| f6 | it | Voilà. Bonne journée ! | Ecco a Lei. Buona giornata! | Je vous souhaite une bonne journée. | 0.814 | 0.561 |
| objects-electric_plug | it | la prise | la spina | l'épine | 0.585 | 0.564 |
| sweets-popcorn | it | le pop-corn | i popcorn | les pommes de terre | 0.741 | 0.566 |
| time-mantelpiece_clock | it | l’horloge | l’orologio | Montres électroniques | 0.97 | 0.571 |
| accessories-folding_hand_fan | it | l’éventail | il ventaglio | le ventilateur | 0.842 | 0.576 |
| health-adhesive_bandage | it | le pansement | il cerotto | le patch. | 0.67 | 0.577 |
| sports-trophy | it | la coupe | il trofeo | le trophée | 0.586 | 0.585 |
| school-memo | it | la note | il promemoria | le rappel | 0.655 | 0.586 |
| weather-tornado | it | la tornade | il tornado | Le tourbillon | 0.91 | 0.588 |
| games-confetti_ball | it | les confettis | i coriandoli | les coriandres | 0.505 | 0.594 |
| numbers-keycap_0 | it | zéro | zero | Nullement | 0.968 | 0.605 |
| school-pushpin | it | la punaise | la puntina | le point | 0.679 | 0.61 |
| games-game_die | it | le dé | il dado | le dés. | 0.698 | 0.611 |
| numbers-keycap_6 | it | six | sei | Il y en a six. | 0.824 | 0.614 |
| feelings-star_struck | it | émerveillé | meravigliato | Je suis étonné. | 0.943 | 0.62 |
| travel-tent | it | la tente | la tenda | le rideau | 0.759 | 0.622 |
| wild-hedgehog | it | le hérisson | il riccio | le ricin | 0.682 | 0.623 |
| meals-croissant | it | le croissant | il cornetto | le cornet | 0.607 | 0.624 |
| places-post_office | it | la poste | l’ufficio postale | Le bureau de poste | 0.682 | 0.626 |
| numbers-keycap_9 | it | neuf | nove | Neuf ans | 0.962 | 0.632 |
| travel-vertical_traffic_light | it | le feu tricolore | il semaforo | le feu de circulation | 0.529 | 0.634 |
| birds-flamingo | it | le flamant rose | il fenicottero | le flamboyant | 0.508 | 0.636 |
| weather-cloud_with_lightning | it | l’éclair | il fulmine | le coup de foudre | 0.737 | 0.636 |
| feelings-fearful_face | it | effrayé | spaventato | Je suis effrayé. | 0.915 | 0.644 |
| feelings-pensive_face | it | triste | triste | Je suis triste. | 1.0 | 0.652 |
| farm-cat | it | le chat | il gatto | Le chat. | 0.677 | 0.66 |
| feelings-astonished_face | it | surpris | sorpreso | Je suis surpris. | 0.957 | 0.668 |
| places-ferris_wheel | it | la grande roue | la ruota panoramica | la roue panoramique | 0.654 | 0.673 |
| time-watch | it | la montre | l’orologio da polso | l'horloge à poignet | 0.715 | 0.674 |
| feelings-red_heart | it | l’amour | l’amore | Je t'aime | 0.991 | 0.674 |
| meals-pizza | it | la pizza | la pizza | La pizza ! Je vous en prie ! | 1.0 | 0.678 |
| signs-red_question_mark | it | la question | la domanda | La demande | 0.863 | 0.681 |
| clothes-running_shoe | it | les baskets | le scarpe da ginnastica | chaussures de sport | 0.751 | 0.686 |
| pl1 | it | Où en est notre conteneur ? Il devait arriver lundi. | A che punto è il nostro container? Doveva arrivare lunedì. | Le conteneur devait arriver lundi. | 0.902 | 0.687 |
| transport-kick_scooter | it | la trottinette | il monopattino | le patin à roulettes | 0.603 | 0.69 |
| actions-eyes | it | regarder | guardare | Je regarde. | 0.992 | 0.696 |
| health-x_ray | it | la radio | la radiografia | la radiographie | 0.701 | 0.697 |
| travel-construction | it | les travaux | i lavori stradali | travaux routiers | 0.733 | 0.7 |
| f5 | it | L'addition, s'il vous plaît. | Il conto, per favore. | Le compte, s'il vous plaît. | 0.713 | 0.703 |
| birds-lady_beetle | it | la coccinelle | la coccinella | Le coq | 0.987 | 0.706 |
| clothes-jeans | it | le jean | i jeans | Les jeans | 0.676 | 0.707 |
| accessories-closed_umbrella | it | le parapluie fermé | l’ombrello chiuso | L'ombrelle est fermée. | 0.865 | 0.707 |
| family-boy | it | le garçon | il ragazzo | Le gamin | 0.977 | 0.71 |
| health-face_with_head_bandage | it | la blessure | la ferita | la plaie | 0.965 | 0.714 |
| sports-ping_pong | it | le tennis de table | il ping-pong | le ping-pong | 0.705 | 0.714 |
| travel-luggage | it | la valise | la valigia | La valise ! | 0.95 | 0.718 |
| feelings-face_with_tears_of_joy | it | rire | ridere | Pour rire. | 0.972 | 0.723 |
| actions-person_climbing | it | grimper | arrampicare | l'escalade | 0.771 | 0.732 |
| clothes-scarf | it | l’écharpe | la sciarpa | le foulard | 0.876 | 0.733 |
| s6 | it | Elle me va bien. Je peux payer par carte ? | Mi sta bene. Posso pagare con la carta? | Je peux payer par carte ? | 0.907 | 0.734 |
| objects-wrench | it | la clé à molette | la chiave inglese | la clé anglaise | 0.713 | 0.734 |
| drinks-ice | it | le glaçon | il cubetto di ghiaccio | le cube de glace | 0.715 | 0.737 |
| sea-octopus | it | la pieuvre | il polpo | le poulpe | 0.797 | 0.745 |
| feelings-tired_face | it | fatigué | stanco | Je suis fatigué. | 0.78 | 0.745 |
| travel-stop_sign | it | le panneau stop | il segnale di stop | le signal d'arrêt | 0.761 | 0.747 |
| family-baby | it | le bébé | il neonato | le nouveau-né | 0.888 | 0.749 |
| feelings-angry_face | it | en colère | arrabbiato | Je suis en colère. | 0.891 | 0.75 |
| kitchen-baby_bottle | it | le biberon | il biberon | la bouteille | 0.975 | 0.751 |
| house-door | it | la porte | la porta | La porte ! | 0.989 | 0.753 |
| sports-basketball | it | le basket | la pallacanestro | le basket-ball | 0.468 | 0.755 |
| games-fireworks | it | le feu d’artifice | i fuochi d’artificio | Les feux d'artifice | 0.799 | 0.755 |
| drinks-cup_with_straw | it | la boisson fraîche | la bibita | la boisson | 0.664 | 0.759 |
| school-calendar | it | l’agenda | l’agenda | L'ordre du jour | 1.0 | 0.76 |
| transport-motorcycle | it | la moto | la moto | le vélo | 1.0 | 0.766 |
| accessories-handbag | it | le sac à main | la borsa | le sac. | 0.861 | 0.769 |
| bathroom-broom | it | le balai | la scopa | la balayeuse | 0.614 | 0.771 |
| tech-headphone | it | le casque audio | le cuffie | les écouteurs | 0.674 | 0.773 |
| i1 | it | Comment vous appelez-vous ? | Come si chiama? | C'est quoi son nom ? | 0.833 | 0.781 |
| vegetables-peanuts | it | les cacahuètes | le arachidi | les arachides | 0.624 | 0.782 |
| birds-owl | it | la chouette | il gufo | le hibou | 0.726 | 0.783 |
| objects-locked | it | le cadenas | il lucchetto | la serrure | 0.655 | 0.783 |
| accessories-ring | it | la bague | l’anello | L'anneau | 0.917 | 0.784 |
| clothes-billed_cap | it | la casquette | il cappellino | Le chapeau. | 0.866 | 0.785 |
| vegetables-hot_pepper | it | le piment | il peperoncino | le poivron | 0.823 | 0.79 |
| sweets-g2 | it | Joyeux anniversaire ! | Buon compleanno! | Je vous souhaite un joyeux anniversaire. | 0.978 | 0.792 |
| plants-fallen_leaf | it | la feuille morte | la foglia secca | la feuille sèche | 0.796 | 0.792 |
| jobs-office_worker | it | l’employé de bureau | l’impiegato | L'employé | 0.794 | 0.793 |
| meals-egg | it | l’œuf | l’uovo | œuf | 0.902 | 0.794 |
| actions-clapping_hands | it | applaudir | applaudire | applaudissons | 0.969 | 0.795 |
| bathroom-toothbrush | it | la brosse à dents | lo spazzolino | le pinceau | 0.745 | 0.795 |
| house-key | it | la clé | la chiave | La clé ! | 0.979 | 0.797 |
| drinks-bubble_tea | it | le thé aux perles | il bubble tea | le thé à la bulle | 0.719 | 0.815 |
| accessories-purse | it | le porte-monnaie | il portamonete | le portefeuille | 0.712 | 0.841 |
| bathroom-wastebasket | it | la poubelle | il cestino dei rifiuti | le bac à ordures | 0.702 | 0.847 |
| school-crayon | it | le crayon de couleur | il pastello | le crayon | 0.638 | 0.854 |
| time-alarm_clock | it | le réveil | la sveglia | Le réveil. | 0.724 | 0.857 |
| bathroom-toilet | it | les toilettes | il gabinetto | Les toilettes. | 0.608 | 0.876 |
| r1 | it | À quelle heure vous levez-vous ? | A che ora si alza? | À quelle heure se lève-t-il ? | 0.74 | 0.877 |
| sports-volleyball | it | le volley | la pallavolo | le volleyball | 0.689 | 0.88 |
| vegetables-pea_pod | it | les petits pois | i piselli | les pois | 0.649 | 0.904 |
| wild-bear | it | l’ours | l’orso | L'ours | 0.578 | 0.916 |
| fruits-avocado | it | l’avocat | l’avocado | L'avocat | 0.644 | 0.923 |
| travel-customs | it | la douane | la dogana | les douanes | 0.747 | 0.931 |
| sea-shrimp | it | la crevette | il gambero | les crevettes | 0.724 | 0.934 |
| weather-umbrella_with_rain_drops | it | le parapluie | l’ombrello | Le parapluie | 0.74 | 0.951 |
| s3 | it | Quelle taille faites-vous ? | Che taglia porta? | Quelle taille portez-vous ? | 0.74 | 0.955 |
| objects-magnet | it | l’aimant | la calamita | le aimant | 0.467 | 0.967 |
| games-g1 | it | C’est ton tour ! | Tocca a te! | C'est votre tour ! | 0.699 | 0.995 |
| vegetables-onion | it | l’oignon | la cipolla | l'oignon | 0.736 | 0.998 |
| birds-snail | it | l’escargot | la lumaca | l'escargot | 0.695 | 0.998 |
| plants-g2 | it | J’arrose les plantes. | Annaffio le piante. | J'arrose les plantes. | 0.671 | 0.998 |
| wild-chipmunk | it | l’écureuil | lo scoiattolo | l'écureuil | 0.631 | 0.999 |
| objects-envelope | it | l’enveloppe | la busta | l'enveloppe | 0.684 | 0.999 |
| music-accordion | it | l’accordéon | la fisarmonica | l'accordéon | 0.548 | 0.999 |
| i3 | it | D'où venez-vous ? | Di dov'è Lei? | D'où venez-vous ? | 0.638 | 1.0 |
| numbers-keycap_2 | it | deux | due | deux | 0.612 | 1.0 |
| numbers-keycap_7 | it | sept | sette | sept | 0.606 | 1.0 |
| signs-minus | it | moins | meno | moins | 0.508 | 1.0 |
| fruits-red_apple | it | la pomme | la mela | la pomme | 0.724 | 1.0 |
| fruits-pear | it | la poire | la pera | la poire | 0.747 | 1.0 |
| fruits-cherries | it | les cerises | le ciliegie | les cerises | 0.74 | 1.0 |
| fruits-strawberry | it | la fraise | la fragola | la fraise | 0.747 | 1.0 |
| vegetables-cucumber | it | le concombre | il cetriolo | le concombre | 0.632 | 1.0 |
| vegetables-broccoli | it | le brocoli | i broccoli | le brocoli | 0.736 | 1.0 |
| vegetables-ear_of_corn | it | le maïs | il mais | le maïs | 0.719 | 1.0 |
| vegetables-leafy_green | it | la laitue | la lattuga | la laitue | 0.673 | 1.0 |
| vegetables-beans | it | les haricots | i fagioli | les haricots | 0.723 | 1.0 |
| meals-bread | it | le pain | il pane | le pain | 0.644 | 1.0 |
| meals-butter | it | le beurre | il burro | le beurre | 0.598 | 1.0 |
| meals-salt | it | le sel | il sale | le sel | 0.674 | 1.0 |
| meals-sandwich | it | le sandwich | il panino | le sandwich | 0.739 | 1.0 |
| meals-pot_of_food | it | le ragoût | lo stufato | le ragoût | 0.683 | 1.0 |
| meals-falafel | it | les falafels | i falafel | les falafels | 0.743 | 1.0 |
| sweets-pancakes | it | les crêpes | i pancake | les crêpes | 0.597 | 1.0 |
| sweets-pie | it | la tarte | la crostata | la tarte | 0.654 | 1.0 |
| farm-mouse | it | la souris | il topo | la souris | 0.553 | 1.0 |
| farm-hamster | it | le hamster | il criceto | le hamster | 0.613 | 1.0 |
| farm-turkey | it | la dinde | il tacchino | la dinde | 0.432 | 1.0 |
| wild-monkey | it | le singe | la scimmia | le singe | 0.744 | 1.0 |
| wild-fox | it | le renard | la volpe | le renard | 0.624 | 1.0 |
| wild-frog | it | la grenouille | la rana | la grenouille | 0.592 | 1.0 |
| birds-ant | it | la fourmi | la formica | la fourmi | 0.667 | 1.0 |
| birds-mosquito | it | le moustique | la zanzara | le moustique | 0.697 | 1.0 |
| sea-shark | it | le requin | lo squalo | le requin | 0.646 | 1.0 |
| sea-crab | it | le crabe | il granchio | le crabe | 0.735 | 1.0 |
| sea-seal | it | le phoque | la foca | le phoque | 0.732 | 1.0 |
| weather-g1 | it | Il pleut. | Piove. | Il pleut. | 0.697 | 1.0 |
| body-lungs | it | les poumons | i polmoni | les poumons | 0.71 | 1.0 |
| health-sneezing_face | it | le rhume | il raffreddore | le rhume | 0.645 | 1.0 |
| jobs-firefighter | it | le pompier | il vigile del fuoco | le pompier | 0.537 | 1.0 |
| house-bed | it | le lit | il letto | le lit | 0.693 | 1.0 |
| bathroom-bucket | it | le seau | il secchio | le seau | 0.676 | 1.0 |
| accessories-backpack | it | le sac à dos | lo zaino | le sac à dos | 0.744 | 1.0 |
| objects-flashlight | it | la lampe de poche | la torcia | la lampe de poche | 0.621 | 1.0 |
| objects-screwdriver | it | le tournevis | il cacciavite | le tournevis | 0.638 | 1.0 |
| transport-sailboat | it | le voilier | la barca a vela | le voilier | 0.734 | 1.0 |
| transport-rocket | it | la fusée | il razzo | la fusée | 0.564 | 1.0 |
| travel-station | it | la gare | la stazione | la gare | 0.686 | 1.0 |
| school-straight_ruler | it | la règle | il righello | la règle | 0.654 | 1.0 |
| sports-boxing_glove | it | la boxe | il pugilato | la boxe | 0.735 | 1.0 |
| birds-peacock | ja | le paon | クジャク | Je vous en prie, Kujak. | 0.285 | 0.076 |
| games-kite | ja | le cerf-volant | 凧 | Je vous en prie. | 0.586 | 0.076 |
| objects-electric_plug | ja | la prise | プラグ | Je vous en prie. | 0.445 | 0.102 |
| farm-turkey | ja | la dinde | 七面鳥 | Un oiseau à sept visages. | 0.258 | 0.113 |
| vegetables-mushroom | ja | le champignon | きのこ | Je vous en prie. | 0.68 | 0.114 |
| meals-pot_of_food | ja | le ragoût | シチュー | Je vous en prie. | 0.472 | 0.133 |
| games-game_die | ja | le dé | サイコロ | C'est une cyclo. | 0.281 | 0.133 |
| birds-parrot | ja | le perroquet | オウム | Je vous en prie. | 0.491 | 0.142 |
| meals-falafel | ja | les falafels | ファラフェル | Je vous en prie. | 0.675 | 0.144 |
| farm-donkey | ja | l’âne | ロバ | Je vous en prie. | 0.391 | 0.144 |
| fruits-grapes | ja | le raisin | ぶどう | Je vous en prie. | 0.634 | 0.146 |
| wild-deer | ja | le cerf | シカ | Je vous en prie. | 0.572 | 0.149 |
| house-ladder | ja | l’échelle | はしご | Je vous en prie. | 0.38 | 0.15 |
| fruits-avocado | ja | l’avocat | アボカド | C'est une pomme de terre. | 0.505 | 0.151 |
| bathroom-razor | ja | le rasoir | かみそり | Je vous en prie. | 0.412 | 0.152 |
| birds-butterfly | ja | le papillon | チョウ | Je vous en prie. | 0.439 | 0.154 |
| fruits-strawberry | ja | la fraise | いちご | Je vous en prie. | 0.726 | 0.158 |
| plants-cactus | ja | le cactus | サボテン | Je suis un saboteur. | 0.381 | 0.159 |
| vegetables-cucumber | ja | le concombre | きゅうり | Je vous en prie. | 0.411 | 0.16 |
| bathroom-broom | ja | le balai | ほうき | Je vous en prie. | 0.416 | 0.16 |
| farm-rooster | ja | le coq | おんどり | Je vous en prie. | 0.341 | 0.161 |
| wild-giraffe | ja | la girafe | キリン | Je vous en prie. | 0.411 | 0.162 |
| vegetables-garlic | ja | l’ail | にんにく | Je vous salue. | 0.542 | 0.163 |
| kitchen-chopsticks | ja | les baguettes | 箸 | Je vous en prie. | 0.533 | 0.163 |
| wild-zebra | ja | le zèbre | シマウマ | Je vous en prie. | 0.452 | 0.168 |
| vegetables-carrot | ja | la carotte | にんじん | Ça suffit. | 0.378 | 0.169 |
| sweets-lollipop | ja | la sucette | ペロペロキャンディー | Des bonbons à la pelle. | 0.027 | 0.17 |
| music-saxophone | ja | le saxophone | サックス | Je vous en prie. | 0.606 | 0.171 |
| fruits-watermelon | ja | la pastèque | スイカ | Je vous en prie. | 0.452 | 0.174 |
| school-abacus | ja | le boulier | そろばん | Je vous salue. | 0.241 | 0.177 |
| fruits-tangerine | ja | la mandarine | みかん | Je ne vois pas. | 0.414 | 0.178 |
| vegetables-hot_pepper | ja | le piment | 唐辛子 | C'est très épicé. | 0.571 | 0.179 |
| school-scissors | ja | les ciseaux | はさみ | Je vous en prie. | 0.398 | 0.179 |
| transport-police_car | ja | la voiture de police | パトカー | Je vous en prie. | 0.462 | 0.182 |
| vegetables-eggplant | ja | l’aubergine | なす | Je suis désolé. | 0.284 | 0.183 |
| school-paperclip | ja | le trombone | クリップ | Une vidéo. | 0.335 | 0.184 |
| clothes-scarf | ja | l’écharpe | マフラー | Tu sais quoi, Muffler ? | 0.449 | 0.185 |
| meals-honey_pot | ja | le miel | はちみつ | Je vous en supplie. | 0.444 | 0.19 |
| farm-baby_chick | ja | le poussin | ひよこ | Je vous en prie. | 0.294 | 0.19 |
| places-convenience_store | ja | l’épicerie | コンビニ | Je vous en prie. | 0.724 | 0.191 |
| sports-person_lifting_weights | ja | la musculation | 重量挙げ | Levez le poids. | 0.36 | 0.204 |
| actions-yawning_face | ja | bâiller | あくびする | Ça fait froid. | 0.528 | 0.209 |
| kitchen-fork_and_knife | ja | les couverts | ナイフとフォーク | Un couteau et une fourchette. | 0.237 | 0.21 |
| drinks-teapot | ja | la théière | 急須 | Je dois y aller. | 0.312 | 0.213 |
| farm-chicken | ja | la poule | めんどり | Je suis étourdi. | 0.309 | 0.218 |
| wild-polar_bear | ja | l’ours polaire | シロクマ | Le rhinocéros. | 0.304 | 0.221 |
| fruits-cherries | ja | les cerises | さくらんぼ | Je vous en prie. | 0.492 | 0.222 |
| vegetables-ginger_root | ja | le gingembre | しょうが | Je suis désolée. | 0.36 | 0.223 |
| school-pushpin | ja | la punaise | 画びょう | C'est une peinture. | 0.372 | 0.229 |
| games-confetti_ball | ja | les confettis | 紙吹雪 | Le vent de neige de papier. | 0.371 | 0.235 |
| school-clipboard | ja | le porte-bloc | クリップボード | Une planche à écrire. | 0.523 | 0.237 |
| actions-open_book | ja | lire | 読む | Je lis. | 0.901 | 0.25 |
| signs-minus | ja | moins | 引く | Je tire. | 0.393 | 0.252 |
| objects-wrench | ja | la clé à molette | スパナ | Je suis espagnol. | 0.206 | 0.254 |
| bathroom-basket | ja | le panier | かご | Je vous en prie. | 0.73 | 0.257 |
| accessories-backpack | ja | le sac à dos | リュック | Je vous en prie, Luke. | 0.751 | 0.26 |
| travel-compass | ja | la boussole | 方位磁針 | Une aiguille magnétique. | 0.331 | 0.261 |
| actions-person_climbing | ja | grimper | 登る | Je monte. | 0.717 | 0.262 |
| meals-flatbread | ja | la galette | ナン | Je ne sais pas. | 0.284 | 0.272 |
| vegetables-bell_pepper | ja | le poivron | ピーマン | Je vous en prie, Peaman. | 0.559 | 0.273 |
| plants-sunflower | ja | le tournesol | ひまわり | On tourne. | 0.613 | 0.274 |
| travel-vertical_traffic_light | ja | le feu tricolore | 信号 | Le signal est là. | 0.22 | 0.276 |
| plants-seedling | ja | la jeune pousse | 芽 | Des bourgeons. | 0.615 | 0.279 |
| farm-duck | ja | le canard | カモ | Les caméléons. | 0.576 | 0.282 |
| jobs-construction_worker | ja | le maçon | 建設作業員 | Des ouvriers du bâtiment. | 0.405 | 0.292 |
| wild-hippopotamus | ja | l’hippopotame | カバ | Le couteau. | 0.526 | 0.294 |
| clothes-shorts | ja | le short | 半ズボン | Des sous-vêtements. | 0.482 | 0.296 |
| games-yo_yo | ja | le yo-yo | ヨーヨー | Je vous en prie. | 0.763 | 0.296 |
| sweets-doughnut | ja | le beignet | ドーナツ | Des donuts. | 0.378 | 0.298 |
| travel-bellhop_bell | ja | la réception | フロント | À l'avant. | 0.55 | 0.299 |
| transport-kick_scooter | ja | la trottinette | キックボード | Une planche à coups de pied. | 0.395 | 0.3 |
| games-roller_coaster | ja | les montagnes russes | ジェットコースター | C'est une jet-coaster. | 0.199 | 0.305 |
| wild-rhinoceros | ja | le rhinocéros | サイ | Je suis un renard. | 0.214 | 0.311 |
| birds-eagle | ja | l’aigle | ワシ | Je le suis. | 0.578 | 0.314 |
| sea-octopus | ja | la pieuvre | タコ | Une citrouille. | 0.435 | 0.316 |
| clothes-sari | ja | le sari | サリー | Je vous en prie, Sally. | 0.686 | 0.319 |
| actions-clapping_hands | ja | applaudir | 拍手する | Je vous en remercie. | 0.758 | 0.322 |
| meals-croissant | ja | le croissant | クロワッサン | Je vous en prie, Croissant. | 0.71 | 0.324 |
| numbers-g1 | ja | un, deux, trois | いち、に、さん | Je vous en prie, monsieur. | 0.411 | 0.326 |
| birds-lady_beetle | ja | la coccinelle | テントウムシ | Une mouche de tente. | 0.386 | 0.327 |
| fruits-pineapple | ja | l’ananas | パイナップル | C'est une pomme de terre. | 0.706 | 0.329 |
| health-crutch | ja | la béquille | 松葉杖 | Une canne à sucre. | 0.254 | 0.329 |
| birds-swan | ja | le cygne | 白鳥 | Un oiseau blanc. | 0.395 | 0.331 |
| plants-herb | ja | l’herbe aromatique | ハーブ | Je ne sais pas, Herb. | 0.613 | 0.335 |
| jobs-mechanic | ja | le mécanicien | 整備士 | Le réparateur. | 0.505 | 0.336 |
| jobs-teacher | ja | l’enseignant | 先生 | Je vous en prie, monsieur. | 0.559 | 0.346 |
| vegetables-pea_pod | ja | les petits pois | えんどう豆 | Je vous en prie, les haricots. | 0.477 | 0.347 |
| actions-tumbler_glass | ja | boire | 飲む | Je bois. | 0.968 | 0.347 |
| objects-locked | ja | le cadenas | 錠 | Elle est verrouillée. | 0.514 | 0.356 |
| health-sneezing_face | ja | le rhume | 風邪 | Je suis constipé. | 0.59 | 0.357 |
| vegetables-chestnut | ja | la châtaigne | 栗 | Des fraises. | 0.527 | 0.362 |
| places-ferris_wheel | ja | la grande roue | 観覧車 | Une voiture de tourisme. | 0.484 | 0.369 |
| places-department_store | ja | le grand magasin | デパート | Le dépôt. | 0.361 | 0.37 |
| music-microphone | ja | le micro | マイク | Je vous en prie, Mike. | 0.707 | 0.38 |
| kitchen-cooking | ja | la poêle | フライパン | Des frites. | 0.797 | 0.381 |
| kitchen-g2 | ja | Bon appétit ! | いただきます！ | Je vous la donne ! | 0.563 | 0.385 |
| time-hourglass_done | ja | le sablier | 砂時計 | Une horloge à sable. | 0.451 | 0.388 |
| weather-cloud_with_lightning | ja | l’éclair | 稲妻 | Le coup de foudre. | 0.385 | 0.389 |
| numbers-keycap_0 | ja | zéro | ゼロ | Il n'y en a pas. | 0.954 | 0.392 |
| clothes-thong_sandal | ja | les tongs | ビーチサンダル | Des sandales de plage. | 0.456 | 0.397 |
| signs-cross_mark | ja | faux | 間違い | C'est une erreur. | 0.695 | 0.401 |
| sea-jellyfish | ja | la méduse | クラゲ | Des marécages. | 0.453 | 0.402 |
| actions-person_swimming | ja | nager | 泳ぐ | Je vais nager. | 0.509 | 0.406 |
| health-stethoscope | ja | le stéthoscope | 聴診器 | Un appareil auditif. | 0.602 | 0.407 |
| clothes-dress | ja | la robe | ワンピース | Une pièce. | 0.502 | 0.409 |
| meals-baguette_bread | ja | la baguette | バゲット | Je vous en prie, Baggett. | 0.768 | 0.418 |
| sports-ice_skate | ja | le patinage | スケート | Le patin à roulettes. | 0.643 | 0.418 |
| birds-snail | ja | l’escargot | カタツムリ | Les écureuils. | 0.526 | 0.419 |
| plants-evergreen_tree | ja | le sapin | モミの木 | Des cerisiers. | 0.654 | 0.419 |
| feelings-star_struck | ja | émerveillé | 感動した | Ça m'a émue. | 0.784 | 0.432 |
| sea-shrimp | ja | la crevette | エビ | Une grenouille. | 0.701 | 0.433 |
| jobs-judge | ja | le juge | 裁判官 | Je vous en prie, monsieur le juge. | 0.822 | 0.439 |
| birds-dove | ja | la colombe | ハト | Le renard. | 0.298 | 0.44 |
| sports-trophy | ja | la coupe | トロフィー | Le trophée. | 0.39 | 0.44 |
| birds-flamingo | ja | le flamant rose | フラミンゴ | Je vous en prie, Flamingo. | 0.593 | 0.443 |
| farm-camel | ja | le dromadaire | ラクダ | Un chameau. | 0.473 | 0.446 |
| wild-hedgehog | ja | le hérisson | ハリネズミ | Le raton laveur. | 0.539 | 0.447 |
| objects-screwdriver | ja | le tournevis | ドライバー | Le chauffeur. | 0.562 | 0.447 |
| school-notebook | ja | le cahier | ノート | Une note. | 0.599 | 0.45 |
| plants-palm_tree | ja | le palmier | ヤシの木 | Le sapin. | 0.524 | 0.451 |
| accessories-folding_hand_fan | ja | l’éventail | 扇子 | Le ventilateur. | 0.54 | 0.451 |
| bathroom-lotion_bottle | ja | la crème | ローション | Une lotion. | 0.356 | 0.453 |
| health-adhesive_bandage | ja | le pansement | 絆創膏 | Des bandages. | 0.538 | 0.454 |
| clothes-kimono | ja | le kimono | 着物 | Des vêtements. | 0.542 | 0.455 |
| feelings-grinning_face | ja | heureux | うれしい | Ça me fait plaisir. | 0.934 | 0.458 |
| sweets-popcorn | ja | le pop-corn | ポップコーン | Des pommes de terre. | 0.716 | 0.461 |
| sports-basketball | ja | le basket | バスケットボール | Je joue au basket. | 0.557 | 0.463 |
| x6 | ja | Je le condenserai pour n'en garder que l'essentiel. | 要点だけを残して簡潔にまとめます。 | Je vais vous résumer en quelques mots. | 0.657 | 0.464 |
| meals-cooked_rice | ja | le riz | ご飯 | Le repas. | 0.598 | 0.464 |
| kitchen-baby_bottle | ja | le biberon | 哺乳瓶 | Une bouteille de lait. | 0.607 | 0.467 |
| family-people_hugging | ja | le câlin | ハグ | Je vous embrasse. | 0.435 | 0.471 |
| a2 | ja | Dans une certaine mesure, car on perd moins de temps dans les transports. | ある程度はそうです。通勤時間が減りますから。 | Dans une certaine mesure, oui. | 0.815 | 0.472 |
| signs-down_arrow | ja | le bas | 下 | En bas ! | 0.516 | 0.472 |
| bathroom-bucket | ja | le seau | バケツ | Un seau. | 0.347 | 0.473 |
| time-g1 | ja | Bonjour, bon matin ! | おはようございます！ | Je vous salue. | 0.879 | 0.475 |
| family-old_man | ja | le grand-père | おじいさん | Je vous en prie, grand-père. | 0.809 | 0.476 |
| sea-spiral_shell | ja | le coquillage | 貝殻 | Une coquille. | 0.653 | 0.478 |
| actions-person_running | ja | courir | 走る | Je cours. | 0.909 | 0.481 |
| objects-battery | ja | la pile | 電池 | Une batterie. | 0.5 | 0.483 |
| signs-up_arrow | ja | le haut | 上 | À l'étage. | 0.732 | 0.484 |
| school-calendar | ja | l’agenda | 手帳 | Le cahier. | 0.518 | 0.484 |
| house-framed_picture | ja | le tableau | 絵 | Une peinture. | 0.638 | 0.487 |
| objects-package | ja | le colis | 小包 | Un petit paquet. | 0.669 | 0.488 |
| sports-person_swimming | ja | la natation | 水泳 | Pour nager. | 0.688 | 0.488 |
| meals-french_fries | ja | les frites | フライドポテト | Des pommes de terre. | 0.559 | 0.49 |
| feelings-worried_face | ja | inquiet | 心配 | Je m'inquiète. | 0.788 | 0.492 |
| family-family_man_boy | ja | le père | お父さん | Je vous en prie, papa. | 0.88 | 0.496 |
| family-baby | ja | le bébé | 赤ちゃん | Je vous en prie, bébé. | 0.889 | 0.497 |
| sea-crab | ja | le crabe | カニ | Des grenouilles. | 0.642 | 0.499 |
| objects-balloon | ja | le ballon de baudruche | 風船 | Une bulle. | 0.436 | 0.499 |
| fruits-pear | ja | la poire | 洋梨 | Des baies. | 0.577 | 0.5 |
| jobs-guard | ja | le gardien | 警備員 | Les gardes du corps. | 0.715 | 0.502 |
| transport-sailboat | ja | le voilier | ヨット | Le yacht. | 0.413 | 0.504 |
| bathroom-soap | ja | le savon | 石けん | Je ne veux pas de savon. | 0.338 | 0.505 |
| family-old_woman | ja | la grand-mère | おばあさん | Je vous en prie, grand-mère. | 0.798 | 0.506 |
| sports-martial_arts_uniform | ja | les arts martiaux | 武道 | Je suis martial. | 0.635 | 0.508 |
| sea-coral | ja | le corail | サンゴ | Des coraux. | 0.43 | 0.512 |
| signs-plus | ja | plus | 足す | Je vais ajouter. | 0.656 | 0.517 |
| drinks-beverage_box | ja | le jus | ジュース | Je veux du jus. | 0.762 | 0.517 |
| x1 | ja | Il ne faut pas vendre la peau de l'ours avant de l'avoir tué. | 捕らぬ狸の皮算用はやめましょう。 | Arrêtez de compter les peaux des mouches que vous n'avez pas prises. | 0.468 | 0.521 |
| k6 | ja | Oui ! C'est génial ! | うん！やったー！ | Je l'ai fait ! | 0.721 | 0.524 |
| numbers-keycap_7 | ja | sept | 七 | Il y en a sept. | 0.669 | 0.524 |
| travel-passport_control | ja | le contrôle des passeports | 入国審査 | Vérification d'entrée | 0.551 | 0.524 |
| vegetables-broccoli | ja | le brocoli | ブロッコリー | Il y a du brocoli. | 0.65 | 0.525 |
| health-drop_of_blood | ja | le sang | 血 | Il y a du sang. | 0.75 | 0.525 |
| sports-volleyball | ja | le volley | バレーボール | Je joue au volleyball. | 0.679 | 0.525 |
| games-puzzle_piece | ja | le puzzle | パズル | Une énigme. | 0.855 | 0.525 |
| s1 | ja | Je peux vous aider ? | 何かお探しですか？ | Vous cherchez quelque chose ? | 0.512 | 0.526 |
| family-people_holding_hands | ja | les amis | 友だち | Je vous en prie, mes amis. | 0.89 | 0.527 |
| actions-microphone | ja | chanter | 歌う | Je chante. | 0.689 | 0.534 |
| colors-brown_square | ja | marron | 茶色 | Il est brun. | 0.734 | 0.536 |
| numbers-keycap_10 | ja | dix | 十 | Il y en a dix. | 0.806 | 0.536 |
| actions-person_walking | ja | marcher | 歩く | Je marche. | 0.924 | 0.537 |
| n6 | ja | Parfait, à lundi ! | 分かりました。では、月曜日に！ | J'ai compris. Alors, lundi ! | 0.761 | 0.541 |
| x3 | ja | Dites-le-lui avec tact : il est très susceptible. | 彼はとても傷つきやすいので、言い方に気をつけてください。 | Il est très vulnérable, alors faites attention à ce que vous dites. | 0.623 | 0.542 |
| clothes-jeans | ja | le jean | ジーンズ | Des jeans. | 0.681 | 0.542 |
| places-houses | ja | le quartier | 住宅街 | Un quartier résidentiel. | 0.569 | 0.542 |
| signs-check_mark_button | ja | correct | 正しい | Vous avez raison. | 0.931 | 0.543 |
| f6 | ja | Voilà. Bonne journée ! | どうぞ。良い一日を！ | Je vous en prie, bonne journée. | 0.716 | 0.544 |
| fruits-blueberries | ja | les myrtilles | ブルーベリー | Des bleuets. | 0.538 | 0.546 |
| wild-monkey | ja | le singe | サル | Je suis un singe. | 0.522 | 0.546 |
| sports-ping_pong | ja | le tennis de table | 卓球 | Je joue au ping-pong. | 0.608 | 0.547 |
| meals-salt | ja | le sel | 塩 | Le sel. | 0.641 | 0.549 |
| drinks-bubble_tea | ja | le thé aux perles | タピオカミルクティー | Le thé au lait de tapioca. | 0.509 | 0.549 |
| weather-cloud_with_rain | ja | la pluie | 雨 | Il pleut. | 0.888 | 0.549 |
| actions-eyes | ja | regarder | 見る | Je vois. | 0.917 | 0.551 |
| school-pen | ja | le stylo | ペン | Une plume. | 0.662 | 0.555 |
| health-x_ray | ja | la radio | レントゲン | Une radiographie. | 0.339 | 0.556 |
| actions-waving_hand | ja | saluer de la main | 手を振る | Donnez un coup de main. | 0.785 | 0.556 |
| places-post_office | ja | la poste | 郵便局 | Le bureau de poste. | 0.603 | 0.556 |
| sports-horse_racing | ja | l’équitation | 乗馬 | À cheval. | 0.738 | 0.556 |
| numbers-keycap_9 | ja | neuf | 九 | Il y en a neuf. | 0.563 | 0.557 |
| drinks-ice | ja | le glaçon | 氷 | Il y a de la glace. | 0.798 | 0.558 |
| p1 | ja | Je vous remercie de votre présence ; je vais vous présenter nos résultats du trimestre. | お集まりいただきありがとうございます。今期の業績についてご報告いたします。 | Je vous remercie d'être venus. | 0.795 | 0.559 |
| transport-canoe | ja | le canoë | カヌー | Une canoë. | 0.673 | 0.559 |
| birds-owl | ja | la chouette | フクロウ | Le corbeau. | 0.47 | 0.56 |
| weather-fog | ja | le brouillard | 霧 | Il y a du brouillard. | 0.727 | 0.56 |
| places-office_building | ja | le bureau | オフィスビル | Un immeuble de bureaux. | 0.775 | 0.561 |
| health-face_with_head_bandage | ja | la blessure | けが | Il est blessé. | 0.771 | 0.562 |
| sports-running_shirt | ja | le maillot | ユニフォーム | Les uniformes. | 0.572 | 0.564 |
| landscapes-snow_capped_mountain | ja | le sommet enneigé | 雪山 | Une montagne de neige. | 0.579 | 0.565 |
| family-family_woman_girl | ja | la mère | お母さん | Je vous en prie, maman. | 0.885 | 0.567 |
| sea-seal | ja | le phoque | アザラシ | Le requin. | 0.345 | 0.568 |
| travel-airplane_departure | ja | le départ | 出発 | Nous partons. | 0.854 | 0.569 |
| feelings-astonished_face | ja | surpris | びっくりした | Ça m'a surpris. | 0.834 | 0.573 |
| jobs-technologist | ja | le développeur | プログラマー | Je suis un programmeur. | 0.818 | 0.58 |
| travel-tent | ja | la tente | テント | Une tente. | 0.712 | 0.581 |
| tech-satellite | ja | le satellite | 人工衛星 | Un satellite artificiel. | 0.647 | 0.581 |
| actions-face_savoring_food | ja | manger | 食べる | Je vais manger. | 0.89 | 0.586 |
| colors-green_square | ja | vert | 緑 | Il est vert. | 0.907 | 0.587 |
| actions-speaking_head | ja | parler | 話す | Je vous parle. | 0.966 | 0.587 |
| games-chess_pawn | ja | les échecs | チェス | Je joue aux échecs. | 0.507 | 0.59 |
| games-fireworks | ja | le feu d’artifice | 花火 | Des feux d'artifice. | 0.673 | 0.59 |
| jobs-factory_worker | ja | l’ouvrier | 工場労働者 | Des ouvriers d'usine. | 0.748 | 0.592 |
| feelings-smiling_face_with_sunglasses | ja | détendu | リラックスした | Je me suis détendu. | 0.76 | 0.593 |
| vegetables-potato | ja | la pomme de terre | じゃがいも | Les pommes de terre aussi. | 0.631 | 0.596 |
| music-musical_keyboard | ja | le piano | ピアノ | Je joue du piano. | 0.833 | 0.599 |
| time-stopwatch | ja | le chronomètre | ストップウォッチ | Le stopwatch. | 0.517 | 0.6 |
| colors-purple_square | ja | violet | 紫 | Elle est violette. | 0.82 | 0.606 |
| farm-ox | ja | le bœuf | 雄牛 | Le taureau. | 0.574 | 0.606 |
| family-bust_in_silhouette | ja | la personne | 人 | Des gens. | 0.836 | 0.606 |
| bathroom-shower | ja | la douche | シャワー | Je prends une douche. | 0.822 | 0.606 |
| objects-wrapped_gift | ja | le cadeau | プレゼント | C'était un cadeau. | 0.898 | 0.608 |
| travel-airplane_arrival | ja | l’arrivée | 到着 | Nous arrivons. | 0.643 | 0.608 |
| colors-white_large_square | ja | blanc | 白 | Elle est blanche. | 0.911 | 0.609 |
| house-bed | ja | le lit | ベッド | Le lit. | 0.511 | 0.609 |
| feelings-crying_face | ja | pleurer | 泣く | Je pleure. | 0.876 | 0.61 |
| numbers-keycap_8 | ja | huit | 八 | Il y en a huit. | 0.816 | 0.612 |
| school-graduation_cap | ja | le diplôme | 卒業 | Je suis diplômé. | 0.774 | 0.612 |
| numbers-keycap_6 | ja | six | 六 | Il y en a six. | 0.901 | 0.614 |
| wild-chipmunk | ja | l’écureuil | リス | Des écureuils. | 0.397 | 0.614 |
| plants-fallen_leaf | ja | la feuille morte | 落ち葉 | Les feuilles tombent. | 0.656 | 0.615 |
| actions-telephone_receiver | ja | téléphoner | 電話する | Je t'appelle. | 0.949 | 0.615 |
| colors-red_square | ja | rouge | 赤 | Il est rouge. | 0.916 | 0.616 |
| bathroom-wastebasket | ja | la poubelle | ゴミ箱 | Une poubelle. | 0.78 | 0.618 |
| actions-thinking_face | ja | réfléchir | 考える | Je vais y réfléchir. | 0.961 | 0.62 |
| numbers-keycap_2 | ja | deux | 二 | Deuxièmement. | 0.848 | 0.622 |
| weather-snowman | ja | le bonhomme de neige | 雪だるま | Les chevaux de neige. | 0.783 | 0.625 |
| jobs-detective | ja | le détective | 探偵 | Je suis un détective. | 0.817 | 0.625 |
| drinks-cup_with_straw | ja | la boisson fraîche | ソフトドリンク | Une boisson gazeuse. | 0.766 | 0.628 |
| feelings-red_heart | ja | l’amour | 愛 | Je vous aime. | 0.928 | 0.628 |
| school-briefcase | ja | la mallette | ブリーフケース | Une mallette. | 0.364 | 0.628 |
| signs-red_question_mark | ja | la question | 質問 | Je vous pose une question. | 0.835 | 0.629 |
| actions-ear | ja | écouter | 聞く | Je vous écoute. | 0.93 | 0.629 |
| weather-rainbow | ja | l’arc-en-ciel | 虹 | L'arc-en-ciel est là. | 0.557 | 0.63 |
| jobs-firefighter | ja | le pompier | 消防士 | Les pompiers. | 0.612 | 0.633 |
| meals-bread | ja | le pain | パン | Le pain. | 0.531 | 0.634 |
| meals-sandwich | ja | le sandwich | サンドイッチ | Je veux un sandwich. | 0.825 | 0.634 |
| school-closed_book | ja | le livre | 本 | Des livres. | 0.739 | 0.634 |
| s4 | ja | Du M, mais je voudrais l'essayer. | Mサイズですが、試着してもいいですか？ | C'est une taille M. Je peux l'essayer ? | 0.713 | 0.635 |
| pt4 | ja | Environ huit cents, pendant quarante minutes ; le service est rétabli. | 約八百人で、四十分間でした。サービスは復旧済みです。 | Il y avait environ 800 personnes. Le service a été rétabli. | 0.841 | 0.635 |
| clothes-t_shirt | ja | le tee-shirt | Tシャツ | Une chemise. | 0.877 | 0.635 |
| weather-fire | ja | le feu | 火 | Il y a un feu. | 0.861 | 0.636 |
| jobs-office_worker | ja | l’employé de bureau | 会社員 | Je suis un employé. | 0.639 | 0.636 |
| colors-orange_square | ja | orange | オレンジ色 | Elle est orange. | 0.932 | 0.637 |
| family-family_man_woman_boy | ja | les parents | 両親 | Mes parents sont là. | 0.912 | 0.637 |
| feelings-fearful_face | ja | effrayé | 怖い | Je suis effrayée. | 0.799 | 0.64 |
| wild-bear | ja | l’ours | クマ | Un ours. | 0.447 | 0.641 |
| feelings-hot_face | ja | avoir chaud | 暑い | Il fait chaud. | 0.788 | 0.642 |
| f5 | ja | L'addition, s'il vous plaît. | お会計をお願いします。 | Les comptes, s'il vous plaît. | 0.521 | 0.644 |
| family-boy | ja | le garçon | 男の子 | Je suis un garçon. | 0.897 | 0.645 |
| feelings-face_with_tears_of_joy | ja | rire | 笑う | Je suis en train de rire. | 0.946 | 0.645 |
| transport-motorcycle | ja | la moto | オートバイ | Une moto. | 0.642 | 0.645 |
| colors-blue_square | ja | bleu | 青 | Il est bleu. | 0.801 | 0.646 |
| colors-black_large_square | ja | noir | 黒 | Il est noir. | 0.954 | 0.646 |
| numbers-keycap_5 | ja | cinq | 五 | Il y en a cinq. | 0.873 | 0.646 |
| objects-magnet | ja | l’aimant | 磁石 | Un aimant. | 0.458 | 0.646 |
| s5 | ja | Bien sûr, les cabines sont au fond. | もちろんです。試着室は奥にあります。 | Bien sûr. La salle d'essai est à l'arrière. | 0.746 | 0.647 |
| tech-headphone | ja | le casque audio | ヘッドホン | Des écouteurs. | 0.757 | 0.651 |
| vegetables-ear_of_corn | ja | le maïs | とうもろこし | Il y a du maïs. | 0.318 | 0.652 |
| feelings-pensive_face | ja | triste | 悲しい | Je suis triste. | 0.949 | 0.652 |
| sports-goal_net | ja | le but | ゴール | Le but. | 0.528 | 0.652 |
| actions-man_dancing | ja | danser | 踊る | Je danse. | 0.88 | 0.653 |
| wild-panda | ja | le panda | パンダ | Je suis un panda. | 0.82 | 0.655 |
| plants-cherry_blossom | ja | la fleur de cerisier | 桜 | Des cerisiers. | 0.724 | 0.656 |
| health-nauseated_face | ja | malade | 病気 | Il est malade. | 0.826 | 0.656 |
| health-syringe | ja | la piqûre | 注射 | Une piqûre. | 0.612 | 0.657 |
| farm-cat | ja | le chat | 猫 | Le chat. | 0.612 | 0.66 |
| transport-airplane | ja | l’avion | 飛行機 | C'était un avion. | 0.852 | 0.66 |
| jobs-cook | ja | le cuisinier | 料理人 | Je suis cuisinier. | 0.812 | 0.662 |
| kitchen-jar | ja | le bocal | 瓶 | Une bouteille. | 0.745 | 0.669 |
| fruits-mango | ja | la mangue | マンゴー | Une mangue. | 0.718 | 0.671 |
| jobs-artist | ja | l’artiste | 芸術家 | Je suis artiste. | 0.898 | 0.671 |
| actions-writing_hand | ja | écrire | 書く | Je l'écris. | 0.956 | 0.671 |
| house-elevator | ja | l’ascenseur | エレベーター | Il y a un ascenseur. | 0.804 | 0.671 |
| transport-taxi | ja | le taxi | タクシー | Je prends un taxi. | 0.88 | 0.672 |
| school-file_folder | ja | le dossier | フォルダー | Dans le dossier. | 0.614 | 0.672 |
| sports-boxing_glove | ja | la boxe | ボクシング | Je fais de la boxe. | 0.783 | 0.674 |
| m4 | ja | Cela nous intéresse, à condition que les délais de livraison soient garantis. | 納期を保証していただけるなら、興味があります。 | Je suis intéressé si vous pouvez me garantir la livraison. | 0.739 | 0.678 |
| numbers-keycap_4 | ja | quatre | 四 | Quatrième. | 0.881 | 0.679 |
| fruits-kiwi_fruit | ja | le kiwi | キウイ | Je suis Kiwi. | 0.683 | 0.679 |
| travel-station | ja | la gare | 駅 | À la gare. | 0.656 | 0.68 |
| birds-g1 | ja | Le papillon vole. | チョウが飛んでいます。 | Il y a des oiseaux qui volent. | 0.811 | 0.682 |
| objects-camera | ja | l’appareil photo | カメラ | Une caméra. | 0.841 | 0.683 |
| tech-robot | ja | le robot | ロボット | Je suis un robot. | 0.887 | 0.683 |
| sports-tennis | ja | le tennis | テニス | Je joue au tennis. | 0.922 | 0.684 |
| family-couple_with_heart | ja | le couple | カップル | Un couple. | 0.895 | 0.686 |
| health-face_with_thermometer | ja | la fièvre | 熱 | Elle a de la fièvre. | 0.8 | 0.686 |
| birds-ant | ja | la fourmi | アリ | Les fourmis. | 0.474 | 0.687 |
| r4 | ja | En tramway ; le trajet dure vingt minutes. | 路面電車で行きます。二十分かかります。 | Je prends le métro. Ça prend 20 minutes. | 0.744 | 0.689 |
| weather-snowflake | ja | la neige | 雪 | Il y a de la neige. | 0.865 | 0.689 |
| jobs-astronaut | ja | l’astronaute | 宇宙飛行士 | Je suis un astronaute. | 0.764 | 0.689 |
| actions-handshake | ja | serrer la main | 握手する | Je vous serre la main. | 0.808 | 0.689 |
| actions-cooking | ja | cuisiner | 料理する | Je cuisine. | 0.878 | 0.689 |
| transport-helicopter | ja | l’hélicoptère | ヘリコプター | C'est un hélicoptère. | 0.535 | 0.689 |
| sports-skier | ja | le ski | スキー | Je fais du ski. | 0.917 | 0.69 |
| actions-sleeping_face | ja | dormir | 寝る | Je vais dormir. | 0.974 | 0.691 |
| o3 | ja | Je ne suis pas tout à fait d'accord : la fin était logique. | 完全には同意できません。結末は筋が通っていました。 | Je ne suis pas entièrement d'accord. | 0.848 | 0.692 |
| school-straight_ruler | ja | la règle | 定規 | C'est une règle. | 0.752 | 0.692 |
| bathroom-sponge | ja | l’éponge | スポンジ | Une éponge. | 0.644 | 0.693 |
| music-guitar | ja | la guitare | ギター | Je joue de la guitare. | 0.918 | 0.694 |
| clothes-necktie | ja | la cravate | ネクタイ | Une cravate. | 0.738 | 0.695 |
| ph6 | ja | Avec plaisir, merci pour votre accueil. | ぜひお願いします。温かいおもてなしをありがとうございます。 | Je vous en prie. Merci pour votre chaleureuse hospitalité. | 0.741 | 0.696 |
| birds-fly | ja | la mouche | ハエ | Une mouche. | 0.376 | 0.696 |
| feelings-cold_face | ja | avoir froid | 寒い | Il fait froid. | 0.847 | 0.697 |
| drinks-glass_of_milk | ja | le lait | 牛乳 | Le lait. | 0.618 | 0.699 |
| wild-frog | ja | la grenouille | カエル | Une grenouille. | 0.636 | 0.699 |
| clothes-running_shoe | ja | les baskets | スニーカー | Des chaussures. | 0.731 | 0.7 |
| body-bone | ja | l’os | 骨 | Les os. | 0.641 | 0.701 |
| jobs-farmer | ja | l’agriculteur | 農家 | Des fermiers. | 0.876 | 0.704 |
| school-memo | ja | la note | メモ | Une note. | 0.775 | 0.704 |
| accessories-purse | ja | le porte-monnaie | 財布 | Le portefeuille. | 0.756 | 0.705 |
| sports-baseball | ja | le baseball | 野球 | Je joue au baseball. | 0.704 | 0.705 |
| numbers-keycap_3 | ja | trois | 三 | Le troisième. | 0.87 | 0.706 |
| sea-water_wave | ja | la vague | 波 | Une vague. | 0.713 | 0.706 |
| sports-person_surfing | ja | le surf | サーフィン | Je fais du surf. | 0.806 | 0.706 |
| sweets-cookie | ja | le biscuit | クッキー | Des biscuits. | 0.761 | 0.709 |
| vegetables-onion | ja | l’oignon | 玉ねぎ | Des oignons. | 0.702 | 0.71 |
| weather-umbrella_with_rain_drops | ja | le parapluie | 傘 | Un parapluie. | 0.625 | 0.71 |
| music-flute | ja | la flûte | 笛 | Une flûte. | 0.658 | 0.712 |
| sweets-pie | ja | la tarte | パイ | Une tarte. | 0.496 | 0.716 |
| plants-rose | ja | la rose | バラ | Une rose. | 0.58 | 0.716 |
| sports-badminton | ja | le badminton | バドミントン | Je joue au badminton. | 0.828 | 0.716 |
| weather-cloud | ja | le nuage | 雲 | Des nuages. | 0.761 | 0.717 |
| x4 | ja | Je vais formuler ma critique sous forme de suggestion. | 批判は提案という形で伝えます。 | Les critiques sont présentées sous forme de propositions. | 0.725 | 0.718 |
| fruits-peach | ja | la pêche | 桃 | Des pêches. | 0.343 | 0.719 |
| pt6 | ja | D'accord, je rédige le post-mortem et j'ouvre un ticket aujourd'hui. | 了解です。今日中に事後報告書を書いて、チケットを起票します。 | J'ai bien compris. Je vais écrire un rapport et voter pour les billets d'ici la fin de la journée. | 0.837 | 0.72 |
| birds-mosquito | ja | le moustique | 蚊 | Des moustiques. | 0.672 | 0.721 |
| travel-luggage | ja | la valise | スーツケース | Une valise. | 0.665 | 0.721 |
| m5 | ja | Nous pouvons l'inscrire dans le contrat, avec des pénalités en cas de retard. | 契約書に明記し、遅延の場合は違約金を設けます。 | Dans le cas d'un retard, une amende est prévue dans le contrat. | 0.745 | 0.722 |
| plants-deciduous_tree | ja | l’arbre | 木 | Des arbres. | 0.769 | 0.724 |
| weather-sun | ja | le soleil | 太陽 | Le soleil est là. | 0.906 | 0.724 |
| drinks-droplet | ja | l’eau | 水 | Il y a de l'eau. | 0.881 | 0.726 |
| wild-elephant | ja | l’éléphant | ゾウ | Des éléphants. | 0.595 | 0.728 |
| objects-envelope | ja | l’enveloppe | 封筒 | Une enveloppe. | 0.727 | 0.728 |
| body-tooth | ja | la dent | 歯 | Des dents. | 0.84 | 0.73 |
| a6 | ja | En compensant par plus de flexibilité sur les horaires. | 勤務時間をより柔軟にすることで補えます。 | Nous pouvons compléter cela par une plus grande souplesse dans nos horaires de travail. | 0.813 | 0.732 |
| travel-fuel_pump | ja | la station-service | ガソリンスタンド | Une station-service. | 0.594 | 0.733 |
| actions-person_taking_bath | ja | prendre un bain | お風呂に入る | Je vais prendre un bain. | 0.866 | 0.734 |
| school-crayon | ja | le crayon de couleur | クレヨン | Le crayon. | 0.417 | 0.734 |
| music-camera_with_flash | ja | la photographie | 写真 | Une photo. | 0.805 | 0.734 |
| farm-goat | ja | la chèvre | ヤギ | Une chèvre. | 0.562 | 0.736 |
| body-raised_hand | ja | la main | 手 | Une main. | 0.885 | 0.736 |
| numbers-keycap_1 | ja | un | 一 | Une. | 0.852 | 0.737 |
| actions-person_biking | ja | faire du vélo | 自転車に乗る | Je vais faire du vélo. | 0.927 | 0.737 |
| f1 | ja | Bonjour, qu'est-ce que vous désirez ? | いらっしゃいませ。ご注文は何になさいますか？ | Bienvenue. Que voulez-vous commander ? | 0.656 | 0.74 |
| sports-person_golfing | ja | le golf | ゴルフ | Je joue au golf. | 0.915 | 0.74 |
| s6 | ja | Elle me va bien. Je peux payer par carte ? | ぴったりです。カードで払えますか？ | C'est parfait. Vous pouvez payer par carte ? | 0.767 | 0.741 |
| meals-egg | ja | l’œuf | 卵 | Des œufs. | 0.77 | 0.741 |
| farm-hamster | ja | le hamster | ハムスター | Des hamsters. | 0.805 | 0.741 |
| time-watch | ja | la montre | 腕時計 | Une montre. | 0.689 | 0.742 |
| sweets-chocolate_bar | ja | le chocolat | チョコレート | C'est du chocolat. | 0.904 | 0.742 |
| places-fountain | ja | la fontaine | 噴水 | Une fontaine. | 0.649 | 0.742 |
| pl5 | ja | Relancez-le aujourd'hui, sinon nous paierons des frais de surestaries. | 今日中に催促してください。でないと、滞船料が発生します。 | S'il vous plaît dépêchez-vous d'ici aujourd'hui. Sinon, il y aura des frais d'expédition. | 0.735 | 0.744 |
| places-bridge_at_night | ja | le pont | 橋 | Le pont. | 0.745 | 0.744 |
| feelings-tired_face | ja | fatigué | 疲れた | Je suis fatigué. | 0.893 | 0.745 |
| actions-person_raising_hand | ja | lever la main | 手を挙げる | Levez vos mains. | 0.927 | 0.746 |
| wild-turtle | ja | la tortue | カメ | Une tortue. | 0.644 | 0.747 |
| objects-teddy_bear | ja | l’ours en peluche | テディベア | Un ours en peluche. | 0.249 | 0.747 |
| plants-leaf_fluttering_in_wind | ja | la feuille | 葉 | Des feuilles. | 0.818 | 0.748 |
| farm-ewe | ja | le mouton | 羊 | Des moutons. | 0.796 | 0.749 |
| places-hotel | ja | l’hôtel | ホテル | À l'hôtel. | 0.915 | 0.749 |
| k5 | ja | On joue ensemble ? | 一緒に遊ぼうか？ | Tu veux jouer avec moi ? | 0.918 | 0.75 |
| drinks-g2 | ja | un verre d’eau | 水を一杯 | Un verre d'eau, s'il vous plaît. | 0.845 | 0.75 |
| feelings-angry_face | ja | en colère | 怒っている | Je suis en colère. | 0.889 | 0.75 |
| transport-delivery_truck | ja | le camion | トラック | Une camionnette. | 0.744 | 0.75 |
| farm-horse | ja | le cheval | 馬 | Des chevaux. | 0.778 | 0.751 |
| body-index_pointing_up | ja | le doigt | 指 | Des doigts. | 0.817 | 0.751 |
| vegetables-leafy_green | ja | la laitue | レタス | Le laitue. | 0.578 | 0.752 |
| house-door | ja | la porte | ドア | La porte ! | 0.911 | 0.753 |
| landscapes-national_park | ja | le parc naturel | 国立公園 | Parcs nationaux | 0.756 | 0.754 |
| plants-hibiscus | ja | la fleur | 花 | Des fleurs. | 0.831 | 0.755 |
| transport-bicycle | ja | le vélo | 自転車 | Une bicyclette. | 0.874 | 0.755 |
| music-paintbrush | ja | le pinceau | 絵筆 | Le crayon. | 0.75 | 0.755 |
| fruits-melon | ja | le melon | メロン | Des melons. | 0.737 | 0.756 |
| fruits-olive | ja | l’olive | オリーブ | Des olives. | 0.756 | 0.757 |
| jobs-student | ja | l’étudiant | 学生 | Des étudiants. | 0.861 | 0.757 |
| house-light_bulb | ja | l’ampoule | 電球 | Une ampoule. | 0.622 | 0.758 |
| jobs-police_officer | ja | le policier | 警察官 | Un officier de police. | 0.888 | 0.759 |
| landscapes-globe_showing_europe_africa | ja | la Terre | 地球 | La planète. | 0.852 | 0.76 |
| kitchen-canned_food | ja | la boîte de conserve | 缶詰 | Une boîte en conserve. | 0.727 | 0.761 |
| accessories-gem_stone | ja | la pierre précieuse | 宝石 | Les pierres précieuses. | 0.686 | 0.762 |
| games-video_game | ja | le jeu vidéo | テレビゲーム | Jeux vidéo. | 0.767 | 0.762 |
| body-nose | ja | le nez | 鼻 | Le nez. | 0.82 | 0.764 |
| farm-cow | ja | la vache | 牛 | Une vache. | 0.712 | 0.765 |
| sweets-candy | ja | le bonbon | キャンディー | Des bonbons. | 0.421 | 0.766 |
| tech-video_camera | ja | la caméra | ビデオカメラ | Une caméra vidéo. | 0.831 | 0.766 |
| family-child | ja | l’enfant | 子ども | Les enfants. | 0.894 | 0.767 |
| m6 | ja | Très bien, envoyez-nous la proposition et nous signerons cette semaine. | 承知しました。提案書を送っていただければ、今週中に署名します。 | J'ai accepté. Si vous pouvez nous envoyer une proposition, je la signerai dans la semaine. | 0.756 | 0.769 |
| kitchen-fork_and_knife_with_plate | ja | l’assiette | 皿 | Les assiettes. | 0.826 | 0.769 |
| sea-whale | ja | la baleine | クジラ | Une baleine. | 0.392 | 0.769 |
| family-girl | ja | la fille | 女の子 | Une fille. | 0.9 | 0.769 |
| clothes-woman_s_boot | ja | les bottes | ブーツ | Des bottes. | 0.776 | 0.77 |
| time-sunset | ja | le soir | 夕方 | Dans la soirée. | 0.81 | 0.771 |
| birds-honeybee | ja | l’abeille | ミツバチ | Une abeille. | 0.487 | 0.771 |
| transport-tram | ja | le tramway | 路面電車 | Le tramway. | 0.685 | 0.771 |
| sports-person_in_lotus_position | ja | le yoga | ヨガ | Je fais du yoga. | 0.903 | 0.771 |
| travel-world_map | ja | la carte | 地図 | Une carte. | 0.691 | 0.772 |
| o2 | ja | À mon avis, l'histoire était originale, mais la fin m'a déçu. | 話は斬新でしたが、結末にはがっかりしました。 | C'était une nouvelle histoire, mais j'ai été déçue de la fin. | 0.77 | 0.773 |
| weather-wind_face | ja | le vent | 風 | Le vent. | 0.711 | 0.773 |
| weather-tornado | ja | la tornade | 竜巻 | Une tornade. | 0.696 | 0.774 |
| places-school | ja | l’école | 学校 | À l'école. | 0.898 | 0.774 |
| pt1 | ja | Le déploiement d'hier a provoqué une panne en production. | 昨日のデプロイで本番環境に障害が発生しました。 | Il y a eu une perturbation dans l'environnement de déploiement hier. | 0.648 | 0.775 |
| sea-dolphin | ja | le dauphin | イルカ | Des dauphins. | 0.411 | 0.775 |
| places-playground_slide | ja | l’aire de jeux | 遊び場 | Le terrain de jeu. | 0.884 | 0.775 |
| meals-bowl_with_spoon | ja | la soupe | スープ | Une soupe. | 0.856 | 0.776 |
| farm-g1 | ja | un petit chat | 小さい猫 | C'est un petit chat. | 0.883 | 0.776 |
| landscapes-volcano | ja | le volcan | 火山 | Un volcan. | 0.657 | 0.776 |
| body-foot | ja | le pied | 足 | Les pieds. | 0.84 | 0.776 |
| games-party_popper | ja | la fête | パーティー | Une fête. | 0.858 | 0.776 |
| birds-bird | ja | l’oiseau | 鳥 | Les oiseaux. | 0.85 | 0.777 |
| wild-gorilla | ja | le gorille | ゴリラ | Une gorille. | 0.715 | 0.779 |
| house-house | ja | la maison | 家 | Une maison. | 0.85 | 0.78 |
| house-chair | ja | la chaise | 椅子 | Une chaise. | 0.841 | 0.781 |
| house-candle | ja | la bougie | ろうそく | Une bougie. | 0.718 | 0.781 |
| farm-mouse | ja | la souris | ネズミ | Une souris. | 0.7 | 0.782 |
| objects-flashlight | ja | la lampe de poche | 懐中電灯 | Une lampe de poche. | 0.695 | 0.782 |
| places-hospital | ja | l’hôpital | 病院 | À l'hôpital. | 0.858 | 0.782 |
| tech-computer_mouse | ja | la souris | マウス | Une souris. | 0.778 | 0.782 |
| house-house_with_garden | ja | le jardin | 庭 | Dans le jardin. | 0.805 | 0.783 |
| house-window | ja | la fenêtre | 窓 | Une fenêtre. | 0.901 | 0.783 |
| g3 | ja | Bien, merci. Bienvenue ! | 元気です、ありがとう。ようこそ！ | Je vais bien, merci. Bienvenue ! | 0.797 | 0.784 |
| transport-ship | ja | le navire | 船 | Le vaisseau. | 0.901 | 0.784 |
| clothes-billed_cap | ja | la casquette | 帽子 | Le chapeau. | 0.843 | 0.785 |
| wild-fox | ja | le renard | キツネ | Le renard. | 0.501 | 0.787 |
| jobs-scientist | ja | le scientifique | 科学者 | Des scientifiques. | 0.883 | 0.787 |
| time-sunrise | ja | le matin | 朝 | Dans la matinée. | 0.814 | 0.789 |
| school-page_facing_up | ja | la feuille de papier | 紙 | Le papier. | 0.769 | 0.789 |
| signs-left_arrow | ja | la gauche | 左 | À gauche. | 0.878 | 0.79 |
| house-key | ja | la clé | 鍵 | Les clés. | 0.802 | 0.79 |
| transport-ambulance | ja | l’ambulance | 救急車 | Une ambulance. | 0.812 | 0.79 |
| family-man | ja | l’homme | 男性 | Un homme. | 0.741 | 0.791 |
| health-g1 | ja | J’ai de la fièvre. | 熱があります。 | Elle a de la fièvre. | 0.816 | 0.791 |
| sweets-g2 | ja | Joyeux anniversaire ! | お誕生日おめでとう！ | Je vous souhaite un joyeux anniversaire. | 0.955 | 0.792 |
| weather-star | ja | l’étoile | 星 | Les étoiles. | 0.8 | 0.792 |
| places-factory | ja | l’usine | 工場 | Une usine. | 0.843 | 0.792 |
| travel-motorway | ja | l’autoroute | 高速道路 | Une autoroute. | 0.731 | 0.792 |
| objects-radio | ja | la radio | ラジオ | Une radio. | 0.878 | 0.793 |
| music-artist_palette | ja | la peinture | 絵画 | Les peintures. | 0.804 | 0.793 |
| signs-right_arrow | ja | la droite | 右 | À droite. | 0.87 | 0.794 |
| body-ear | ja | l’oreille | 耳 | Des oreilles. | 0.834 | 0.794 |
| wild-kangaroo | ja | le kangourou | カンガルー | Le kangourou. | 0.782 | 0.795 |
| tech-laptop | ja | l’ordinateur portable | ノートパソコン | Un ordinateur portable. | 0.844 | 0.796 |
| sea-shark | ja | le requin | サメ | Le requin. | 0.383 | 0.797 |
| bathroom-bathtub | ja | la baignoire | 浴槽 | Une baignoire. | 0.798 | 0.798 |
| transport-rocket | ja | la fusée | ロケット | Une fusée. | 0.564 | 0.798 |
| wild-koala | ja | le koala | コアラ | Le koala. | 0.685 | 0.799 |
| kitchen-spoon | ja | la cuillère | スプーン | Une cuillère. | 0.537 | 0.806 |
| birds-spider | ja | l’araignée | クモ | Une araignée. | 0.488 | 0.807 |
| vegetables-g1 | ja | des carottes et des pommes de terre | にんじんとじゃがいも | Des mouches et des pommes de terre. | 0.342 | 0.809 |
| landscapes-rock | ja | le rocher | 岩 | Le rocher. | 0.613 | 0.809 |
| accessories-ring | ja | la bague | 指輪 | Une bague. | 0.698 | 0.81 |
| tech-satellite_antenna | ja | l’antenne | アンテナ | Une antenne. | 0.711 | 0.812 |
| music-trumpet | ja | la trompette | トランペット | Une trompette. | 0.559 | 0.815 |
| wild-leopard | ja | le léopard | ヒョウ | Un léopard. | 0.55 | 0.817 |
| objects-hammer | ja | le marteau | ハンマー | Le marteau. | 0.471 | 0.821 |
| kitchen-g1 | ja | Passe-moi la cuillère, s’il te plaît. | スプーンを取ってください。 | Prenez une cuillère, s'il vous plaît. | 0.555 | 0.823 |
| transport-motor_scooter | ja | le scooter | スクーター | Le scooter. | 0.731 | 0.828 |
| fruits-red_apple | ja | la pomme | りんご | Une pomme. | 0.698 | 0.829 |
| travel-stop_sign | ja | le panneau stop | 一時停止の標識 | Le panneau d'arrêt. | 0.577 | 0.832 |
| landscapes-wood | ja | le bois | 木材 | Le bois. | 0.718 | 0.835 |
| travel-ticket | ja | le billet | 切符 | Le billet. | 0.428 | 0.84 |
| vegetables-beans | ja | les haricots | 豆 | Des haricots. | 0.657 | 0.841 |
| wild-crocodile | ja | le crocodile | ワニ | Le crocodile. | 0.464 | 0.841 |
| places-mosque | ja | la mosquée | モスク | Une mosquée. | 0.73 | 0.843 |
| games-ribbon | ja | le ruban | リボン | Le ruban. | 0.724 | 0.846 |
| clothes-one_piece_swimsuit | ja | le maillot de bain | 水着 | Le maillot de bain. | 0.618 | 0.851 |
| places-stadium | ja | le stade | スタジアム | Le stade. | 0.711 | 0.851 |
| vegetables-peanuts | ja | les cacahuètes | ピーナッツ | Des cacahuètes. | 0.698 | 0.853 |
| music-drum | ja | le tambour | 太鼓 | Le tambour. | 0.71 | 0.855 |
| time-alarm_clock | ja | le réveil | 目覚まし時計 | Le réveil. | 0.652 | 0.857 |
| sweets-pancakes | ja | les crêpes | パンケーキ | Des crêpes. | 0.599 | 0.857 |
| plants-tulip | ja | la tulipe | チューリップ | Des tulipes. | 0.624 | 0.858 |
| body-tongue | ja | la langue | 舌 | La langue. | 0.672 | 0.862 |
| clothes-woman_s_hat | ja | le chapeau | ハット | Le chapeau. | 0.58 | 0.862 |
| farm-pig | ja | le cochon | 豚 | Le cochon. | 0.691 | 0.864 |
| music-accordion | ja | l’accordéon | アコーディオン | L'accordéon. | 0.589 | 0.865 |
| school-pencil | ja | le crayon | 鉛筆 | Le crayon. | 0.714 | 0.868 |
| clothes-coat | ja | le manteau | コート | Le manteau. | 0.64 | 0.869 |
| wild-snake | ja | le serpent | ヘビ | Le serpent. | 0.624 | 0.873 |
| farm-rabbit | ja | le lapin | ウサギ | Le lapin. | 0.619 | 0.878 |
| i2 | ja | Je m'appelle Sami. | サミです。 | Je suis Sammy. | 0.555 | 0.881 |
| tech-telescope | ja | le télescope | 望遠鏡 | Le télescope. | 0.717 | 0.882 |
| wild-tiger | ja | le tigre | トラ | Le tigre. | 0.644 | 0.885 |
| bathroom-roll_of_paper | ja | le papier toilette | トイレットペーパー | Le papier toilette. | 0.748 | 0.885 |
| meals-cheese_wedge | ja | le fromage | チーズ | Le fromage. | 0.708 | 0.888 |
| clothes-gloves | ja | les gants | 手袋 | Les gants. | 0.652 | 0.888 |
| transport-metro | ja | le métro | 地下鉄 | Le métro. | 0.726 | 0.889 |
| kitchen-kitchen_knife | ja | le couteau | 包丁 | Le couteau. | 0.39 | 0.892 |
| music-violin | ja | le violon | バイオリン | Le violon. | 0.74 | 0.896 |
| games-circus_tent | ja | le cirque | サーカス | Le cirque. | 0.516 | 0.898 |
| places-castle | ja | le château | 城 | Le château. | 0.587 | 0.9 |
| accessories-crown | ja | la couronne | 王冠 | La couronne. | 0.738 | 0.902 |
| wild-wolf | ja | le loup | オオカミ | Le loup. | 0.538 | 0.906 |
| sea-g1 | ja | Le dauphin saute. | イルカがジャンプします。 | Les dauphins sautent. | 0.663 | 0.908 |
| birds-penguin | ja | le pingouin | ペンギン | Le pingouin. | 0.736 | 0.916 |
| school-g2 | ja | J’ouvre mon cahier. | ノートを開きます。 | Je vais ouvrir mon carnet. | 0.718 | 0.936 |
| n5 | ja | J'ai rendez-vous lundi à dix heures. | 月曜日の十時に予約があります。 | J'ai rendez-vous lundi à dix heures. | 0.715 | 1.0 |
| weather-g1 | ja | Il pleut. | 雨が降っています。 | Il pleut. | 0.726 | 1.0 |
| meals-flatbread | pt | la galette | o pão sírio | le pain syrien | 0.546 | 0.264 |
| signs-check_mark_button | pt | correct | certo | C'est tout à fait ça. | 0.839 | 0.331 |
| school-briefcase | pt | la mallette | a pasta executiva | le dossier exécutif | 0.376 | 0.338 |
| farm-baby_chick | pt | le poussin | o pintainho | Le petit doigt. | 0.735 | 0.376 |
| school-paperclip | pt | le trombone | o clipe | le clip | 0.363 | 0.379 |
| school-clipboard | pt | le porte-bloc | a prancheta | le tableau | 0.475 | 0.433 |
| vegetables-hot_pepper | pt | le piment | a malagueta | le lièvre d'écorce | 0.438 | 0.441 |
| fruits-peach | pt | la pêche | o pêssego | le poivre | 0.609 | 0.458 |
| objects-screwdriver | pt | le tournevis | a chave de fendas | la clé de fente | 0.548 | 0.458 |
| travel-fuel_pump | pt | la station-service | a bomba de gasolina | la pompe à essence | 0.455 | 0.463 |
| clothes-shorts | pt | le short | os calções | les sous-vêtements | 0.502 | 0.467 |
| school-pushpin | pt | la punaise | o pionés | le pionnier | 0.641 | 0.473 |
| time-g1 | pt | Bonjour, bon matin ! | Bom dia! | Je vous salue. | 0.813 | 0.475 |
| clothes-jeans | pt | le jean | as calças de ganga | les sous-vêtements | 0.496 | 0.478 |
| fruits-watermelon | pt | la pastèque | a melancia | le melon | 0.502 | 0.479 |
| vegetables-chestnut | pt | la châtaigne | a castanha | le noir | 0.774 | 0.483 |
| transport-tram | pt | le tramway | o elétrico | l'électrique | 0.502 | 0.483 |
| birds-lady_beetle | pt | la coccinelle | a joaninha | La petite fille | 0.531 | 0.491 |
| feelings-worried_face | pt | inquiet | preocupado | Je m'inquiète. | 0.889 | 0.492 |
| health-adhesive_bandage | pt | le pansement | o penso rápido | le bandage rapide | 0.269 | 0.495 |
| sports-person_lifting_weights | pt | la musculation | o levantamento de pesos | le levage de poids | 0.476 | 0.495 |
| time-hourglass_done | pt | le sablier | a ampulheta | l'ampoule | 0.481 | 0.496 |
| farm-turkey | pt | la dinde | o peru | le poulet | 0.48 | 0.497 |
| plants-seedling | pt | la jeune pousse | o rebento | le rejeton | 0.575 | 0.5 |
| actions-person_swimming | pt | nager | nadar | faire de la natation | 0.583 | 0.506 |
| sports-goal_net | pt | le but | a baliza | le marqueur | 0.543 | 0.509 |
| x1 | pt | Il ne faut pas vendre la peau de l'ours avant de l'avoir tué. | Não deites foguetes antes da festa. | Ne lancez pas de fusées avant la fête. | 0.505 | 0.511 |
| objects-electric_plug | pt | la prise | a ficha | le fichier | 0.566 | 0.514 |
| games-game_die | pt | le dé | o dado | le chiffre | 0.72 | 0.518 |
| plants-cactus | pt | le cactus | o cato | le chat | 0.584 | 0.524 |
| f6 | pt | Voilà. Bonne journée ! | Aqui tem. Tenha um bom dia! | Je vous en prie, passez une bonne journée. | 0.829 | 0.541 |
| sea-jellyfish | pt | la méduse | a alforreca | la carpe | 0.373 | 0.552 |
| drinks-cup_with_straw | pt | la boisson fraîche | o refrigerante | le réfrigérant | 0.644 | 0.553 |
| games-kite | pt | le cerf-volant | o papagaio de papel | le papillon de papier | 0.531 | 0.557 |
| school-abacus | pt | le boulier | o ábaco | l'abaque | 0.591 | 0.565 |
| sweets-popcorn | pt | le pop-corn | as pipocas | les pommes de terre | 0.572 | 0.566 |
| drinks-teapot | pt | la théière | o bule | le bouillon | 0.491 | 0.571 |
| accessories-folding_hand_fan | pt | l’éventail | o leque | le ventilateur | 0.455 | 0.576 |
| sports-trophy | pt | la coupe | o troféu | le trophée | 0.616 | 0.585 |
| family-people_hugging | pt | le câlin | o abraço | l' étreinte | 0.68 | 0.59 |
| signs-down_arrow | pt | le bas | para baixo | vers le bas | 0.516 | 0.593 |
| weather-tornado | pt | la tornade | o tornado | le tourbillon | 0.846 | 0.606 |
| kitchen-fork_and_knife | pt | les couverts | os talheres | les ustensiles de cuisine | 0.794 | 0.615 |
| farm-mouse | pt | la souris | o rato | le rat | 0.668 | 0.621 |
| tech-computer_mouse | pt | la souris | o rato | le rat | 0.668 | 0.621 |
| wild-hedgehog | pt | le hérisson | o ouriço | l'oursin | 0.682 | 0.625 |
| sweets-doughnut | pt | le beignet | o dónute | le donut | 0.46 | 0.628 |
| actions-yawning_face | pt | bâiller | bocejar | le bâillement | 0.524 | 0.629 |
| objects-locked | pt | le cadenas | o cadeado | le verrou | 0.884 | 0.631 |
| meals-french_fries | pt | les frites | as batatas fritas | les pommes de terre | 0.83 | 0.633 |
| travel-vertical_traffic_light | pt | le feu tricolore | o semáforo | le feu de circulation | 0.465 | 0.634 |
| objects-package | pt | le colis | a encomenda | la commande | 0.616 | 0.635 |
| weather-cloud_with_lightning | pt | l’éclair | o relâmpago | le coup de foudre | 0.663 | 0.636 |
| games-confetti_ball | pt | les confettis | os confetes | les confitures | 0.767 | 0.637 |
| feelings-fearful_face | pt | effrayé | assustado | Je suis effrayé. | 0.877 | 0.644 |
| feelings-face_with_tears_of_joy | pt | rire | rir | Je suis en train de rire. | 0.966 | 0.645 |
| feelings-star_struck | pt | émerveillé | maravilhado | Je suis émerveillé. | 0.931 | 0.646 |
| bathroom-broom | pt | le balai | a vassoura | le broyeur | 0.63 | 0.65 |
| feelings-pensive_face | pt | triste | triste | Je suis triste. | 1.0 | 0.652 |
| places-post_office | pt | la poste | os correios | les bureaux de poste | 0.759 | 0.661 |
| feelings-astonished_face | pt | surpris | surpreendido | Je suis surpris. | 0.96 | 0.668 |
| time-watch | pt | la montre | o relógio de pulso | l'horloge à poignet | 0.739 | 0.674 |
| objects-wrapped_gift | pt | le cadeau | o presente | le présent | 0.726 | 0.674 |
| g3 | pt | Bien, merci. Bienvenue ! | Bem, obrigado. Bem-vindo! | Je vous remercie. | 0.985 | 0.676 |
| places-fountain | pt | la fontaine | a fonte | la source | 0.769 | 0.683 |
| health-crutch | pt | la béquille | a muleta | la croupe | 0.526 | 0.684 |
| fruits-blueberries | pt | les myrtilles | os mirtilos | les bleuets | 0.87 | 0.688 |
| health-syringe | pt | la piqûre | a injeção | l' injection | 0.71 | 0.697 |
| health-x_ray | pt | la radio | a radiografia | la radiographie | 0.697 | 0.697 |
| f5 | pt | L'addition, s'il vous plaît. | A conta, por favor. | Le compte, s'il vous plaît. | 0.703 | 0.703 |
| actions-waving_hand | pt | saluer de la main | acenar | Faire un signe de la main | 0.315 | 0.703 |
| actions-person_climbing | pt | grimper | escalar | échafaudage | 0.77 | 0.705 |
| clothes-thong_sandal | pt | les tongs | os chinelos | les sandales | 0.808 | 0.709 |
| feelings-angry_face | pt | en colère | zangado | Il est en colère. | 0.931 | 0.712 |
| health-face_with_head_bandage | pt | la blessure | a ferida | la plaie | 0.953 | 0.714 |
| transport-ambulance | pt | l’ambulance | a ambulância | l'ambulance est arrivée. | 0.929 | 0.714 |
| ps1 | pt | Bonjour, je suis l'infirmier de garde. Où avez-vous mal ? | Olá, sou o enfermeiro de serviço. Onde lhe dói? | Je suis l'infirmière de service. | 0.918 | 0.716 |
| f1 | pt | Bonjour, qu'est-ce que vous désirez ? | Olá, o que deseja? | Bonjour, que puis-je pour vous ? | 0.973 | 0.722 |
| fruits-mango | pt | la mangue | a manga | le manche | 0.723 | 0.723 |
| birds-flamingo | pt | le flamant rose | o flamingo | le flamant | 0.645 | 0.723 |
| house-ladder | pt | l’échelle | o escadote | l'escalier | 0.475 | 0.725 |
| games-roller_coaster | pt | les montagnes russes | a montanha-russa | le roller coaster | 0.862 | 0.726 |
| pl1 | pt | Où en est notre conteneur ? Il devait arriver lundi. | Qual é a situação do nosso contentor? Devia chegar na segunda-feira. | Quel est l'état de notre conteneur ? | 0.827 | 0.733 |
| clothes-scarf | pt | l’écharpe | o cachecol | le foulard | 0.727 | 0.733 |
| s6 | pt | Elle me va bien. Je peux payer par carte ? | Fica-me bem. Posso pagar com cartão? | Je peux payer par carte ? | 0.869 | 0.734 |
| objects-wrench | pt | la clé à molette | a chave inglesa | la clé anglaise | 0.732 | 0.734 |
| travel-stop_sign | pt | le panneau stop | o sinal de stop | le signe stop | 0.762 | 0.736 |
| pl5 | pt | Relancez-le aujourd'hui, sinon nous paierons des frais de surestaries. | Insista com ele hoje, senão vamos pagar sobre-estadia. | Insistez avec lui aujourd'hui, ou nous allons payer sur place. | 0.809 | 0.737 |
| drinks-ice | pt | le glaçon | o cubo de gelo | le cube de glace | 0.702 | 0.737 |
| birds-dove | pt | la colombe | a pomba | le pigeon | 0.631 | 0.739 |
| sea-octopus | pt | la pieuvre | o polvo | le poulpe | 0.623 | 0.745 |
| transport-kick_scooter | pt | la trottinette | a trotinete | le scooter | 0.822 | 0.75 |
| kitchen-baby_bottle | pt | le biberon | o biberão | la bouteille | 0.945 | 0.751 |
| sports-basketball | pt | le basket | o basquetebol | le basket-ball | 0.611 | 0.755 |
| s5 | pt | Bien sûr, les cabines sont au fond. | Claro, os provadores ficam ao fundo. | Bien sûr, les testeurs sont au fond. | 0.742 | 0.757 |
| colors-brown_square | pt | marron | castanho | noir | 0.877 | 0.761 |
| farm-goat | pt | la chèvre | a cabra | la chienne | 0.912 | 0.762 |
| clothes-running_shoe | pt | les baskets | as sapatilhas | les souliers | 0.855 | 0.764 |
| transport-motorcycle | pt | la moto | a mota | le vélo | 0.749 | 0.766 |
| actions-eyes | pt | regarder | olhar | Je regarde | 0.968 | 0.768 |
| house-light_bulb | pt | l’ampoule | a lâmpada | la lampe | 0.804 | 0.773 |
| tech-headphone | pt | le casque audio | os auscultadores | les écouteurs | 0.644 | 0.773 |
| signs-red_question_mark | pt | la question | a pergunta | La question est: | 0.963 | 0.774 |
| meals-falafel | pt | les falafels | o faláfel | le falafel | 0.704 | 0.776 |
| sweets-pie | pt | la tarte | a tarte | le gâteau | 0.974 | 0.778 |
| birds-owl | pt | la chouette | a coruja | le hibou | 0.738 | 0.783 |
| kitchen-jar | pt | le bocal | o frasco | le flacon | 0.833 | 0.788 |
| sweets-g2 | pt | Joyeux anniversaire ! | Feliz aniversário! | Je vous souhaite un joyeux anniversaire. | 0.991 | 0.792 |
| plants-fallen_leaf | pt | la feuille morte | a folha seca | la feuille sèche | 0.809 | 0.792 |
| vegetables-peanuts | pt | les cacahuètes | os amendoins | les noix de pécan | 0.62 | 0.797 |
| meals-spaghetti | pt | les pâtes | a massa | la pâte | 0.524 | 0.809 |
| drinks-bubble_tea | pt | le thé aux perles | o chá de bolhas | le thé aux bulles | 0.746 | 0.817 |
| sea-spiral_shell | pt | le coquillage | a concha | la coquille | 0.65 | 0.819 |
| fruits-olive | pt | l’olive | a azeitona | l'huile d'olive | 0.602 | 0.837 |
| kitchen-cooking | pt | la poêle | a frigideira | la casserole | 0.527 | 0.838 |
| games-yo_yo | pt | le yo-yo | o ioió | le yoyo | 0.677 | 0.84 |
| objects-balloon | pt | le ballon de baudruche | o balão | le ballon | 0.687 | 0.841 |
| vegetables-bell_pepper | pt | le poivron | o pimento | le poivre | 0.669 | 0.848 |
| games-chess_pawn | pt | les échecs | o xadrez | le jeu d'échecs | 0.562 | 0.865 |
| meals-sandwich | pt | le sandwich | a sandes | à sandwiches | 0.594 | 0.872 |
| colors-purple_square | pt | violet | roxo | couleur violette | 0.683 | 0.877 |
| fruits-tangerine | pt | la mandarine | a tangerina | le tangerine | 0.679 | 0.879 |
| signs-cross_mark | pt | faux | errado | Faux | 0.722 | 0.88 |
| sweets-lollipop | pt | la sucette | o chupa-chupa | le sucetteur | 0.622 | 0.883 |
| school-graduation_cap | pt | le diplôme | a formatura | l'obtention du diplôme | 0.628 | 0.89 |
| fruits-grapes | pt | le raisin | as uvas | les raisins | 0.672 | 0.892 |
| vegetables-carrot | pt | la carotte | a cenoura | les carottes | 0.674 | 0.896 |
| vegetables-pea_pod | pt | les petits pois | as ervilhas | les pois | 0.694 | 0.904 |
| colors-black_large_square | pt | noir | preto | Noir | 0.739 | 0.917 |
| clothes-billed_cap | pt | la casquette | o boné | le chapeau | 0.503 | 0.928 |
| travel-customs | pt | la douane | a alfândega | les douanes | 0.637 | 0.931 |
| jobs-detective | pt | le détective | o detetive | Le détective | 0.689 | 0.95 |
| sea-g2 | pt | Je nage dans la mer. | Nado no mar. | Je nage dans l'océan. | 0.475 | 0.974 |
| vegetables-garlic | pt | l’ail | o alho | l'ail | 0.75 | 0.989 |
| fruits-avocado | pt | l’avocat | o abacate | l'avocat | 0.502 | 0.99 |
| wild-bear | pt | l’ours | o urso | l'ours | 0.581 | 0.993 |
| meals-egg | pt | l’œuf | o ovo | l'œuf | 0.52 | 0.994 |
| objects-magnet | pt | l’aimant | o íman | l' aimant | 0.493 | 0.996 |
| birds-spider | pt | l’araignée | a aranha | l'araignée | 0.599 | 0.998 |
| vegetables-eggplant | pt | l’aubergine | a beringela | l'aubergine | 0.454 | 0.999 |
| farm-donkey | pt | l’âne | o burro | l'âne | 0.567 | 0.999 |
| weather-rainbow | pt | l’arc-en-ciel | o arco-íris | l'arc-en-ciel | 0.731 | 0.999 |
| numbers-keycap_7 | pt | sept | sete | sept | 0.661 | 1.0 |
| fruits-pear | pt | la poire | a pera | la poire | 0.561 | 1.0 |
| fruits-cherries | pt | les cerises | as cerejas | les cerises | 0.734 | 1.0 |
| vegetables-cucumber | pt | le concombre | o pepino | le concombre | 0.552 | 1.0 |
| vegetables-leafy_green | pt | la laitue | a alface | la laitue | 0.449 | 1.0 |
| vegetables-mushroom | pt | le champignon | o cogumelo | le champignon | 0.681 | 1.0 |
| meals-bread | pt | le pain | o pão | le pain | 0.662 | 1.0 |
| meals-salt | pt | le sel | o sal | le sel | 0.737 | 1.0 |
| meals-pot_of_food | pt | le ragoût | o guisado | le ragoût | 0.676 | 1.0 |
| sweets-cookie | pt | le biscuit | a bolacha | le biscuit | 0.585 | 1.0 |
| sweets-shortcake | pt | le gâteau | o bolo | le gâteau | 0.691 | 1.0 |
| sweets-candy | pt | le bonbon | o rebuçado | le bonbon | 0.574 | 1.0 |
| sweets-pancakes | pt | les crêpes | as panquecas | les crêpes | 0.734 | 1.0 |
| drinks-beverage_box | pt | le jus | o sumo | le jus | 0.611 | 1.0 |
| kitchen-kitchen_knife | pt | le couteau | a faca | le couteau | 0.692 | 1.0 |
| kitchen-chopsticks | pt | les baguettes | os pauzinhos | les baguettes | 0.729 | 1.0 |
| farm-cat | pt | le chat | o gato | le chat | 0.694 | 1.0 |
| farm-ox | pt | le bœuf | o boi | le bœuf | 0.706 | 1.0 |
| farm-rooster | pt | le coq | o galo | le coq | 0.585 | 1.0 |
| farm-duck | pt | le canard | o pato | le canard | 0.516 | 1.0 |
| farm-rabbit | pt | le lapin | o coelho | le lapin | 0.587 | 1.0 |
| wild-monkey | pt | le singe | o macaco | le singe | 0.704 | 1.0 |
| wild-koala | pt | le koala | o coala | le koala | 0.744 | 1.0 |
| wild-fox | pt | le renard | a raposa | le renard | 0.623 | 1.0 |
| wild-deer | pt | le cerf | o veado | le cerf | 0.614 | 1.0 |
| wild-snake | pt | le serpent | a cobra | le serpent | 0.677 | 1.0 |
| wild-frog | pt | la grenouille | a rã | la grenouille | 0.503 | 1.0 |
| birds-parrot | pt | le perroquet | o papagaio | le perroquet | 0.67 | 1.0 |
| birds-swan | pt | le cygne | o cisne | le cygne | 0.599 | 1.0 |
| birds-butterfly | pt | le papillon | a borboleta | le papillon | 0.579 | 1.0 |
| birds-ant | pt | la fourmi | a formiga | la fourmi | 0.57 | 1.0 |
| birds-g1 | pt | Le papillon vole. | A borboleta voa. | Le papillon vole. | 0.621 | 1.0 |
| sea-dolphin | pt | le dauphin | o golfinho | le dauphin | 0.717 | 1.0 |
| sea-shark | pt | le requin | o tubarão | le requin | 0.591 | 1.0 |
| sea-crab | pt | le crabe | o caranguejo | le crabe | 0.749 | 1.0 |
| sea-seal | pt | le phoque | a foca | le phoque | 0.718 | 1.0 |
| sea-water_wave | pt | la vague | a onda | la vague | 0.379 | 1.0 |
| plants-evergreen_tree | pt | le sapin | o abeto | le sapin | 0.707 | 1.0 |
| plants-tulip | pt | la tulipe | a túlipa | la tulipe | 0.49 | 1.0 |
| weather-snowflake | pt | la neige | a neve | la neige | 0.61 | 1.0 |
| weather-crescent_moon | pt | la lune | a lua | la lune | 0.535 | 1.0 |
| health-sneezing_face | pt | le rhume | a constipação | le rhume | 0.548 | 1.0 |
| jobs-construction_worker | pt | le maçon | o pedreiro | le maçon | 0.64 | 1.0 |
| house-bed | pt | le lit | a cama | le lit | 0.639 | 1.0 |
| house-candle | pt | la bougie | a vela | la bougie | 0.581 | 1.0 |
| bathroom-toilet | pt | les toilettes | a sanita | les toilettes | 0.634 | 1.0 |
| bathroom-soap | pt | le savon | o sabonete | le savon | 0.717 | 1.0 |
| bathroom-razor | pt | le rasoir | a lâmina de barbear | le rasoir | 0.746 | 1.0 |
| bathroom-bucket | pt | le seau | o balde | le seau | 0.637 | 1.0 |
| bathroom-basket | pt | le panier | o cesto | le panier | 0.685 | 1.0 |
| bathroom-g2 | pt | Je prends une douche. | Tomo duche. | Je prends une douche. | 0.338 | 1.0 |
| clothes-necktie | pt | la cravate | a gravata | la cravate | 0.677 | 1.0 |
| clothes-g2 | pt | Je mets mon manteau. | Visto o casaco. | Je mets mon manteau. | 0.584 | 1.0 |
| transport-rocket | pt | la fusée | o foguetão | la fusée | 0.68 | 1.0 |
| travel-luggage | pt | la valise | a mala | la valise | 0.598 | 1.0 |
| travel-ticket | pt | le billet | o bilhete | le billet | 0.735 | 1.0 |
| travel-station | pt | la gare | a estação | la gare | 0.668 | 1.0 |
| school-straight_ruler | pt | la règle | a régua | la règle | 0.66 | 1.0 |
| school-scissors | pt | les ciseaux | a tesoura | les ciseaux | 0.576 | 1.0 |
| school-file_folder | pt | le dossier | a pasta | le dossier | 0.511 | 1.0 |
| sports-tennis | pt | le tennis | o ténis | le tennis | 0.699 | 1.0 |
| sports-ping_pong | pt | le tennis de table | o ténis de mesa | le tennis de table | 0.726 | 1.0 |
| sports-baseball | pt | le baseball | o beisebol | le baseball | 0.711 | 1.0 |
| sports-rugby_football | pt | le rugby | o râguebi | le rugby | 0.679 | 1.0 |
| sports-boxing_glove | pt | la boxe | o boxe | la boxe | 0.701 | 1.0 |
| games-ribbon | pt | le ruban | a fita | le ruban | 0.436 | 1.0 |
| birds-fly | zh | la mouche | 苍蝇 | Je vous en prie. | 0.566 | 0.108 |
| vegetables-mushroom | zh | le champignon | 蘑菇 | Je vous en prie. | 0.791 | 0.114 |
| sea-crab | zh | le crabe | 螃蟹 | Je vous en prie. | 0.73 | 0.114 |
| birds-eagle | zh | l’aigle | 鹰 | Je vous en prie. | 0.707 | 0.125 |
| sea-shrimp | zh | la crevette | 虾 | Je vous en prie. | 0.591 | 0.134 |
| birds-parrot | zh | le perroquet | 鹦鹉 | Je vous en prie. | 0.679 | 0.142 |
| wild-leopard | zh | le léopard | 豹 | Je vous en prie. | 0.631 | 0.154 |
| health-adhesive_bandage | zh | le pansement | 创可贴 | Créer et publier | 0.298 | 0.167 |
| body-flexed_biceps | zh | le bras | 胳膊 | Je vous en prie. | 0.876 | 0.179 |
| meals-flatbread | zh | la galette | 馕 | Je vous en prie. | 0.57 | 0.182 |
| vegetables-leafy_green | zh | la laitue | 生菜 | Les légumes crus | 0.306 | 0.183 |
| fruits-pineapple | zh | l’ananas | 菠萝 | Je vous en prie. | 0.783 | 0.187 |
| birds-ant | zh | la fourmi | 蚂蚁 | Je vous en prie. | 0.349 | 0.189 |
| farm-chicken | zh | la poule | 母鸡 | Les mères célibataires | 0.735 | 0.199 |
| house-candle | zh | la bougie | 蜡烛 | Je vous en prie. | 0.757 | 0.207 |
| vegetables-ginger_root | zh | le gingembre | 姜 | Je vous en prie. | 0.692 | 0.21 |
| fruits-lemon | zh | le citron | 柠檬 | Je vous en prie. | 0.848 | 0.222 |
| meals-bowl_with_spoon | zh | la soupe | 汤 | Je vous en prie. | 0.791 | 0.225 |
| plants-rose | zh | la rose | 玫瑰 | Je vous en prie. | 0.825 | 0.229 |
| vegetables-hot_pepper | zh | le piment | 辣椒 | Je vous en prie. | 0.614 | 0.244 |
| school-paperclip | zh | le trombone | 回形针 | Une aiguille tournante | 0.284 | 0.246 |
| meals-french_fries | zh | les frites | 薯条 | La dépression | 0.661 | 0.256 |
| family-old_man | zh | le grand-père | 爷爷 | Je vous en prie. | 0.82 | 0.257 |
| sports-person_in_lotus_position | zh | le yoga | 瑜伽 | Je vous en prie. | 0.858 | 0.26 |
| kitchen-cooking | zh | la poêle | 平底锅 | Le sol est plat. | 0.574 | 0.261 |
| actions-yawning_face | zh | bâiller | 打哈欠 | Il pleure. | 0.38 | 0.276 |
| accessories-closed_umbrella | zh | le parapluie fermé | 收起的伞 | La collecte des moustiques | 0.665 | 0.279 |
| family-family_woman_girl | zh | la mère | 妈妈 | Je vous en prie. | 0.828 | 0.282 |
| fruits-avocado | zh | l’avocat | 牛油果 | Les fruits à l'huile de coco | 0.23 | 0.283 |
| school-pushpin | zh | la punaise | 图钉 | Des clous | 0.315 | 0.286 |
| f5 | zh | L'addition, s'il vous plaît. | 麻烦买单。 | Je n'arrive pas à payer. | 0.36 | 0.288 |
| sports-person_lifting_weights | zh | la musculation | 举重 | Levez le poids | 0.388 | 0.295 |
| family-family_man_boy | zh | le père | 爸爸 | Je ne sais pas. | 0.814 | 0.311 |
| wild-hedgehog | zh | le hérisson | 刺猬 | Les embryons | 0.475 | 0.319 |
| farm-turkey | zh | la dinde | 火鸡 | Une torche | 0.3 | 0.32 |
| plants-sunflower | zh | le tournesol | 向日葵 | Les rayons du soleil | 0.563 | 0.321 |
| fruits-watermelon | zh | la pastèque | 西瓜 | La citrouille | 0.428 | 0.324 |
| farm-baby_chick | zh | le poussin | 小鸡 | Les petits oiseaux | 0.437 | 0.327 |
| objects-hammer | zh | le marteau | 锤子 | Les singes | 0.659 | 0.327 |
| fruits-coconut | zh | la noix de coco | 椰子 | Les singes | 0.81 | 0.331 |
| objects-electric_plug | zh | la prise | 插头 | Le plug-in | 0.379 | 0.333 |
| time-hourglass_done | zh | le sablier | 沙漏 | Une fuite de sable | 0.465 | 0.335 |
| objects-wrench | zh | la clé à molette | 扳手 | Le tueur | 0.695 | 0.335 |
| games-yo_yo | zh | le yo-yo | 悠悠球 | Le jeu | 0.338 | 0.338 |
| objects-locked | zh | le cadenas | 锁 | Fermeture | 0.684 | 0.341 |
| sweets-lollipop | zh | la sucette | 棒棒糖 | Le sucre est génial. | 0.423 | 0.342 |
| clothes-sari | zh | le sari | 纱丽 | Elle est jolie. | 0.551 | 0.345 |
| kitchen-jar | zh | le bocal | 罐子 | Les singes | 0.716 | 0.35 |
| actions-ear | zh | écouter | 听 | Je vous en prie. | 0.834 | 0.351 |
| games-confetti_ball | zh | les confettis | 彩纸 | Le papier à colorier | 0.431 | 0.356 |
| kitchen-spoon | zh | la cuillère | 勺子 | Les singes | 0.781 | 0.361 |
| meals-falafel | zh | les falafels | 炸豆丸子 | Des boulettes de pommes de terre | 0.198 | 0.363 |
| wild-hippopotamus | zh | l’hippopotame | 河马 | Le cheval de rivière | 0.526 | 0.364 |
| fruits-blueberries | zh | les myrtilles | 蓝莓 | Le bleu | 0.498 | 0.365 |
| school-memo | zh | la note | 便条 | Des pâtes | 0.465 | 0.365 |
| school-clipboard | zh | le porte-bloc | 写字板 | La planche à écrire | 0.395 | 0.365 |
| plants-herb | zh | l’herbe aromatique | 香草 | Le vanille | 0.606 | 0.376 |
| actions-person_swimming | zh | nager | 游泳 | La natation | 0.341 | 0.378 |
| time-alarm_clock | zh | le réveil | 闹钟 | Les cloches | 0.456 | 0.379 |
| clothes-kimono | zh | le kimono | 和服 | Des vêtements et des vêtements | 0.563 | 0.379 |
| birds-lady_beetle | zh | la coccinelle | 瓢虫 | Les punaises de lit | 0.556 | 0.384 |
| games-game_die | zh | le dé | 骰子 | Les singes | 0.245 | 0.388 |
| jobs-construction_worker | zh | le maçon | 建筑工人 | Les ouvriers du bâtiment | 0.435 | 0.392 |
| plants-cactus | zh | le cactus | 仙人掌 | Le palmier à canne à sucre | 0.525 | 0.4 |
| travel-construction | zh | les travaux | 道路施工 | Construction de routes | 0.492 | 0.401 |
| school-straight_ruler | zh | la règle | 直尺 | Légère | 0.359 | 0.406 |
| kitchen-canned_food | zh | la boîte de conserve | 罐头 | Le canon | 0.677 | 0.407 |
| jobs-mechanic | zh | le mécanicien | 机修工 | Maîtrise de l'aéronautique | 0.708 | 0.408 |
| bathroom-bucket | zh | le seau | 水桶 | Une cuve | 0.338 | 0.408 |
| x1 | zh | Il ne faut pas vendre la peau de l'ours avant de l'avoir tué. | 不要高兴得太早。 | Ne vous réjouissez pas trop tôt. | 0.363 | 0.409 |
| travel-bellhop_bell | zh | la réception | 前台 | À l'avant | 0.566 | 0.413 |
| signs-check_mark_button | zh | correct | 对 | Oui, tout à fait. | 0.798 | 0.419 |
| fruits-tangerine | zh | la mandarine | 橘子 | Les singes | 0.677 | 0.419 |
| meals-croissant | zh | le croissant | 牛角面包 | Le pain à la corne de bœuf | 0.518 | 0.42 |
| feelings-pensive_face | zh | triste | 难过 | Je suis désolé. | 0.804 | 0.421 |
| music-trumpet | zh | la trompette | 小号 | Le petit | 0.34 | 0.423 |
| meals-pot_of_food | zh | le ragoût | 炖菜 | Les légumineuses | 0.564 | 0.429 |
| clothes-thong_sandal | zh | les tongs | 人字拖 | Des traînées de mots | 0.381 | 0.432 |
| school-abacus | zh | le boulier | 算盘 | Le compteur | 0.347 | 0.434 |
| health-stethoscope | zh | le stéthoscope | 听诊器 | Les appareils auditifs | 0.591 | 0.439 |
| fruits-strawberry | zh | la fraise | 草莓 | La paille | 0.682 | 0.443 |
| signs-cross_mark | zh | faux | 错 | C'est pas vrai. | 0.665 | 0.45 |
| vegetables-garlic | zh | l’ail | 大蒜 | Le mur | 0.597 | 0.455 |
| family-people_hugging | zh | le câlin | 拥抱 | Une étreinte | 0.562 | 0.455 |
| sea-seal | zh | le phoque | 海豹 | La plage | 0.43 | 0.462 |
| time-g1 | zh | Bonjour, bon matin ! | 早上好！ | Je vous salue. | 0.898 | 0.475 |
| music-saxophone | zh | le saxophone | 萨克斯 | Sachs | 0.543 | 0.476 |
| fruits-melon | zh | le melon | 甜瓜 | Les carottes | 0.582 | 0.477 |
| actions-sleeping_face | zh | dormir | 睡觉 | Je dors. | 0.929 | 0.477 |
| actions-person_running | zh | courir | 跑步 | Je cours. | 0.791 | 0.481 |
| school-notebook | zh | le cahier | 笔记本 | Un ordinateur portable | 0.723 | 0.481 |
| house-framed_picture | zh | le tableau | 画 | Peinture | 0.64 | 0.482 |
| kitchen-chopsticks | zh | les baguettes | 筷子 | Les singes | 0.574 | 0.484 |
| birds-dove | zh | la colombe | 鸽子 | Les singes | 0.456 | 0.486 |
| colors-purple_square | zh | violet | 紫色 | Pourpre | 0.845 | 0.487 |
| actions-microphone | zh | chanter | 唱歌 | Ils chantent. | 0.683 | 0.487 |
| clothes-socks | zh | les chaussettes | 袜子 | Les singes | 0.802 | 0.491 |
| actions-person_climbing | zh | grimper | 攀爬 | Ils grimpent. | 0.73 | 0.492 |
| feelings-fearful_face | zh | effrayé | 害怕 | Ils ont peur. | 0.735 | 0.493 |
| numbers-keycap_0 | zh | zéro | 零 | Il est nul. | 0.919 | 0.499 |
| weather-cloud_with_lightning | zh | l’éclair | 闪电 | La foudre | 0.681 | 0.499 |
| sports-trophy | zh | la coupe | 奖杯 | Le trophée | 0.486 | 0.499 |
| sea-octopus | zh | la pieuvre | 章鱼 | L'octopus | 0.322 | 0.502 |
| bathroom-lotion_bottle | zh | la crème | 乳液 | Les lotions | 0.63 | 0.502 |
| d6 | zh | Oui, le bus 12 s'arrête juste en face. | 可以，12路车就在对面停。 | Il est possible de s'arrêter à l'autre bout de la rue. | 0.865 | 0.504 |
| objects-screwdriver | zh | le tournevis | 螺丝刀 | Le couteau à vis | 0.505 | 0.507 |
| birds-flamingo | zh | le flamant rose | 火烈鸟 | L'oiseau de feu | 0.399 | 0.508 |
| birds-owl | zh | la chouette | 猫头鹰 | Les oiseaux | 0.509 | 0.509 |
| sweets-doughnut | zh | le beignet | 甜甜圈 | Les doughnuts | 0.498 | 0.511 |
| accessories-folding_hand_fan | zh | l’éventail | 扇子 | Le ventilateur | 0.54 | 0.513 |
| time-mantelpiece_clock | zh | l’horloge | 钟 | La cloche | 0.717 | 0.514 |
| travel-ticket | zh | le billet | 票 | Le vote | 0.745 | 0.523 |
| sweets-popcorn | zh | le pop-corn | 爆米花 | Des pommes de terre | 0.58 | 0.525 |
| actions-waving_hand | zh | saluer de la main | 挥手 | Ils brandissent la main. | 0.729 | 0.526 |
| travel-stop_sign | zh | le panneau stop | 停车标志 | Signe de stationnement | 0.482 | 0.527 |
| kitchen-baby_bottle | zh | le biberon | 奶瓶 | Une bouteille de lait | 0.639 | 0.529 |
| wild-giraffe | zh | la girafe | 长颈鹿 | Le cerf-volant | 0.582 | 0.539 |
| kitchen-fork_and_knife | zh | les couverts | 餐具 | Les ustensiles de cuisine | 0.651 | 0.54 |
| fruits-kiwi_fruit | zh | le kiwi | 猕猴桃 | Les cerises | 0.6 | 0.541 |
| fruits-mango | zh | la mangue | 芒果 | Les pommes | 0.657 | 0.542 |
| health-face_with_thermometer | zh | la fièvre | 发烧 | Fièvre | 0.817 | 0.543 |
| actions-person_walking | zh | marcher | 走路 | Ils marchent. | 0.761 | 0.544 |
| games-roller_coaster | zh | les montagnes russes | 过山车 | Voiture de montagne | 0.619 | 0.544 |
| objects-battery | zh | la pile | 电池 | La batterie | 0.482 | 0.547 |
| bathroom-broom | zh | le balai | 扫帚 | Le balayage | 0.626 | 0.548 |
| farm-rooster | zh | le coq | 公鸡 | Le renard | 0.58 | 0.551 |
| birds-swan | zh | le cygne | 天鹅 | Les tiques | 0.615 | 0.561 |
| farm-duck | zh | le canard | 鸭子 | Les singes | 0.725 | 0.562 |
| objects-envelope | zh | l’enveloppe | 信封 | Le courrier | 0.661 | 0.562 |
| farm-camel | zh | le dromadaire | 骆驼 | Le chameau | 0.583 | 0.568 |
| meals-pizza | zh | la pizza | 比萨饼 | Les pâtisseries | 0.717 | 0.57 |
| signs-minus | zh | moins | 减 | Réduction | 0.76 | 0.572 |
| sweets-pie | zh | la tarte | 馅饼 | Des gâteaux | 0.642 | 0.573 |
| travel-vertical_traffic_light | zh | le feu tricolore | 红绿灯 | Le feu rouge et vert | 0.466 | 0.574 |
| games-kite | zh | le cerf-volant | 风筝 | Le tourbillon | 0.623 | 0.574 |
| wild-turtle | zh | la tortue | 乌龟 | Les corbeaux | 0.669 | 0.576 |
| travel-airplane_departure | zh | le départ | 出发 | En route | 0.834 | 0.577 |
| sea-whale | zh | la baleine | 鲸鱼 | Le requin | 0.601 | 0.579 |
| plants-evergreen_tree | zh | le sapin | 松树 | Le pin | 0.6 | 0.583 |
| actions-clapping_hands | zh | applaudir | 鼓掌 | Applaudissements | 0.659 | 0.583 |
| feelings-worried_face | zh | inquiet | 担心 | Je m'inquiète | 0.772 | 0.586 |
| f6 | zh | Voilà. Bonne journée ! | 给您。祝您愉快！ | Je vous souhaite une bonne journée ! | 0.604 | 0.591 |
| farm-rabbit | zh | le lapin | 兔子 | Les singes | 0.709 | 0.591 |
| meals-spaghetti | zh | les pâtes | 意大利面 | Les pommes de terre | 0.555 | 0.596 |
| transport-motor_scooter | zh | le scooter | 小型摩托车 | Une petite moto | 0.588 | 0.597 |
| places-office_building | zh | le bureau | 办公楼 | Bâtiment de bureaux | 0.757 | 0.597 |
| vegetables-bell_pepper | zh | le poivron | 甜椒 | Les pommes de terre | 0.65 | 0.599 |
| x3 | zh | Dites-le-lui avec tact : il est très susceptible. | 跟他说的时候委婉一点，他很敏感。 | Il est très sensible quand on lui parle. | 0.673 | 0.6 |
| places-convenience_store | zh | l’épicerie | 便利店 | Les magasins de détail | 0.658 | 0.603 |
| feelings-star_struck | zh | émerveillé | 惊叹 | Je suis stupéfait. | 0.797 | 0.604 |
| ph5 | zh | Oui, une visite guidée part à neuf heures ; je vous réserve deux places ? | 可以，九点有导游带团出发，要帮您预订两个位子吗？ | Pourriez-vous m'aider à réserver deux places ? | 0.793 | 0.606 |
| birds-peacock | zh | le paon | 孔雀 | Le faucon | 0.53 | 0.61 |
| feelings-crying_face | zh | pleurer | 哭 | Je pleure. | 0.87 | 0.61 |
| sports-horse_racing | zh | l’équitation | 骑马 | À cheval | 0.744 | 0.612 |
| places-department_store | zh | le grand magasin | 百货商店 | Magasins de détail | 0.641 | 0.616 |
| time-stopwatch | zh | le chronomètre | 秒表 | Le compteur de secondes | 0.644 | 0.622 |
| sports-ice_skate | zh | le patinage | 滑冰 | Le patin à glace | 0.749 | 0.625 |
| landscapes-snow_capped_mountain | zh | le sommet enneigé | 雪山 | Les montagnes de neige | 0.579 | 0.626 |
| places-post_office | zh | la poste | 邮局 | Le bureau de poste | 0.621 | 0.626 |
| h4 | zh | Oui, de sept heures à dix heures, au rez-de-chaussée. | 包含，早上七点到十点，在一楼。 | Il s'agit d'une manifestation qui s'est déroulée entre 7 et 10 heures du matin, au premier étage. | 0.757 | 0.628 |
| farm-ox | zh | le bœuf | 公牛 | Le taureau | 0.597 | 0.629 |
| feelings-grinning_face | zh | heureux | 高兴 | Je suis content. | 0.888 | 0.629 |
| numbers-keycap_9 | zh | neuf | 九 | Neuf ans | 0.563 | 0.632 |
| wild-crocodile | zh | le crocodile | 鳄鱼 | Le requin | 0.711 | 0.632 |
| numbers-keycap_8 | zh | huit | 八 | Huit | 0.816 | 0.635 |
| actions-handshake | zh | serrer la main | 握手 | Ils se serrent la main. | 0.718 | 0.635 |
| clothes-dress | zh | la robe | 连衣裙 | Les robes de mariée | 0.661 | 0.639 |
| health-x_ray | zh | la radio | X光片 | La radiographie | 0.339 | 0.64 |
| feelings-hot_face | zh | avoir chaud | 热 | Il fait chaud. | 0.709 | 0.642 |
| clothes-running_shoe | zh | les baskets | 运动鞋 | Chaussures de sport | 0.681 | 0.643 |
| birds-snail | zh | l’escargot | 蜗牛 | Le cerf | 0.487 | 0.644 |
| feelings-astonished_face | zh | surpris | 惊讶 | Je suis étonné. | 0.923 | 0.644 |
| feelings-face_with_tears_of_joy | zh | rire | 笑 | Je suis en train de rire. | 0.896 | 0.645 |
| colors-black_large_square | zh | noir | 黑色 | Il est noir. | 0.895 | 0.646 |
| jobs-office_worker | zh | l’employé de bureau | 职员 | Le personnel | 0.696 | 0.647 |
| drinks-ice | zh | le glaçon | 冰块 | Un bloc de glace | 0.741 | 0.649 |
| clothes-jeans | zh | le jean | 牛仔裤 | Des jeans | 0.388 | 0.65 |
| sports-basketball | zh | le basket | 篮球 | Le basket-ball | 0.505 | 0.65 |
| drinks-beverage_box | zh | le jus | 果汁 | Le jus de fruits | 0.635 | 0.656 |
| health-nauseated_face | zh | malade | 生病 | Il est malade. | 0.822 | 0.656 |
| school-briefcase | zh | la mallette | 公文包 | Le paquet | 0.406 | 0.656 |
| clothes-shorts | zh | le short | 短裤 | Des shorts | 0.633 | 0.66 |
| drinks-cup_with_straw | zh | la boisson fraîche | 饮料 | Les boissons | 0.654 | 0.662 |
| sports-ping_pong | zh | le tennis de table | 乒乓球 | Jeu de ping-pong | 0.646 | 0.663 |
| actions-eyes | zh | regarder | 看 | Regardez ! | 0.847 | 0.669 |
| clothes-billed_cap | zh | la casquette | 鸭舌帽 | Le chapeau à lèvres | 0.67 | 0.67 |
| x6 | zh | Je le condenserai pour n'en garder que l'essentiel. | 我会把它压缩一下，只保留重点。 | Je vais le compresser un peu, en gardant l'accent. | 0.773 | 0.671 |
| signs-down_arrow | zh | le bas | 下 | En bas | 0.516 | 0.674 |
| feelings-red_heart | zh | l’amour | 爱 | Je t'aime | 0.921 | 0.674 |
| feelings-angry_face | zh | en colère | 生气 | Ils sont en colère. | 0.851 | 0.677 |
| plants-fallen_leaf | zh | la feuille morte | 落叶 | Les feuilles tombent | 0.56 | 0.678 |
| weather-tornado | zh | la tornade | 龙卷风 | Les ouragans | 0.714 | 0.68 |
| vegetables-pea_pod | zh | les petits pois | 豌豆 | Les haricots | 0.588 | 0.681 |
| actions-speaking_head | zh | parler | 说话 | Ils parlent. | 0.904 | 0.681 |
| places-ferris_wheel | zh | la grande roue | 摩天轮 | La roue à moteur | 0.603 | 0.681 |
| drinks-teapot | zh | la théière | 茶壶 | Une tasse de thé | 0.712 | 0.683 |
| meals-g2 | zh | La soupe est chaude. | 汤很热。 | Les pommes de terre sont très chaudes. | 0.895 | 0.686 |
| vegetables-eggplant | zh | l’aubergine | 茄子 | Les oignons | 0.695 | 0.69 |
| clothes-scarf | zh | l’écharpe | 围巾 | Le foulard | 0.671 | 0.693 |
| jobs-firefighter | zh | le pompier | 消防员 | Les pompiers | 0.613 | 0.695 |
| vegetables-broccoli | zh | le brocoli | 西兰花 | Les citrouilles | 0.39 | 0.697 |
| feelings-cold_face | zh | avoir froid | 冷 | Il fait froid. | 0.77 | 0.697 |
| health-face_with_head_bandage | zh | la blessure | 受伤 | Les blessés | 0.756 | 0.702 |
| health-crutch | zh | la béquille | 拐杖 | Le bâton | 0.449 | 0.705 |
| objects-balloon | zh | le ballon de baudruche | 气球 | Les ballons | 0.636 | 0.706 |
| s4 | zh | Du M, mais je voudrais l'essayer. | 中号，不过我想试一下。 | Je ne suis pas d'accord, mais j'aimerais essayer. | 0.841 | 0.707 |
| transport-kick_scooter | zh | la trottinette | 滑板车 | Le scooter | 0.649 | 0.709 |
| music-accordion | zh | l’accordéon | 手风琴 | L'orgue | 0.677 | 0.71 |
| plants-cherry_blossom | zh | la fleur de cerisier | 樱花 | Les fleurs d'érable | 0.789 | 0.712 |
| s3 | zh | Quelle taille faites-vous ? | 您穿多大号？ | Quel est votre numéro ? | 0.794 | 0.714 |
| pl6 | zh | C'est fait, il m'a promis de l'envoyer avant midi. | 已经催了，他答应中午前发过来。 | Il a promis de revenir à minuit. | 0.754 | 0.716 |
| family-couple_with_heart | zh | le couple | 情侣 | Les conjoints | 0.849 | 0.716 |
| sweets-pancakes | zh | les crêpes | 煎饼 | Des gâteaux | 0.707 | 0.719 |
| s6 | zh | Elle me va bien. Je peux payer par carte ? | 很合身。可以刷卡吗？ | C'est très bien. Je peux changer ma carte ? | 0.638 | 0.721 |
| fruits-g2 | zh | J’aime les fraises. | 我喜欢草莓。 | J'aime beaucoup la paille. | 0.877 | 0.721 |
| vegetables-peanuts | zh | les cacahuètes | 花生 | Des noix de pécan | 0.587 | 0.721 |
| places-hotel | zh | l’hôtel | 酒店 | Hôtels | 0.794 | 0.721 |
| colors-yellow_square | zh | jaune | 黄色 | Jaune | 0.895 | 0.722 |
| feelings-smiling_face_with_sunglasses | zh | détendu | 放松 | Détendez-vous | 0.857 | 0.727 |
| games-fireworks | zh | le feu d’artifice | 烟花 | Des feux d'artifice | 0.619 | 0.729 |
| o6 | zh | Oui, surtout pour la musique et les acteurs. | 会的，特别是因为音乐和演员。 | Je pense qu'il est important que les gens se sentent à l'aise, surtout à cause de la musique et des acteurs. | 0.906 | 0.73 |
| tech-headphone | zh | le casque audio | 耳机 | Les écouteurs | 0.707 | 0.733 |
| actions-tumbler_glass | zh | boire | 喝 | Boire de l'alcool | 0.913 | 0.734 |
| actions-person_taking_bath | zh | prendre un bain | 洗澡 | Je prends une douche. | 0.807 | 0.735 |
| pl3 | zh | Les documents pour la douane sont-ils prêts ? | 报关单据准备好了吗？ | Vous êtes prêts à déposer vos dossiers ? | 0.83 | 0.736 |
| numbers-keycap_10 | zh | dix | 十 | Le dixième | 0.806 | 0.738 |
| meals-baguette_bread | zh | la baguette | 法棍 | Le bâton | 0.455 | 0.74 |
| actions-thinking_face | zh | réfléchir | 思考 | Réfléchissez | 0.911 | 0.741 |
| clothes-t_shirt | zh | le tee-shirt | T恤 | T-shirts | 0.839 | 0.741 |
| p3 | zh | Comment expliquez-vous la baisse de la marge ? | 利润率下降的原因是什么？ | Qu'est-ce qui explique la baisse des taux de profit ? | 0.674 | 0.742 |
| numbers-keycap_2 | zh | deux | 二 | Deuxième | 0.848 | 0.742 |
| objects-camera | zh | l’appareil photo | 照相机 | Une caméra | 0.829 | 0.743 |
| health-syringe | zh | la piqûre | 打针 | Une piqûre | 0.645 | 0.744 |
| actions-cooking | zh | cuisiner | 做饭 | La cuisine | 0.803 | 0.744 |
| n4 | zh | Ça fait vingt euros. | 一共二十欧元。 | Le prix total est de vingt euros. | 0.79 | 0.745 |
| feelings-tired_face | zh | fatigué | 累 | Je suis fatigué. | 0.792 | 0.745 |
| x4 | zh | Je vais formuler ma critique sous forme de suggestion. | 我会把批评换成建议的方式说出来。 | Je vais essayer de transformer les critiques en recommandations. | 0.782 | 0.748 |
| pt4 | zh | Environ huit cents, pendant quarante minutes ; le service est rétabli. | 大约八百人，持续了四十分钟，服务已经恢复。 | Il y a environ 800 personnes et le service a été rétabli après une quarantaine de minutes. | 0.879 | 0.749 |
| objects-magnet | zh | l’aimant | 磁铁 | Les aimants | 0.389 | 0.749 |
| music-microphone | zh | le micro | 麦克风 | Le microphone | 0.598 | 0.75 |
| colors-brown_square | zh | marron | 棕色 | Le brun | 0.861 | 0.753 |
| travel-tent | zh | la tente | 帐篷 | Les tentes | 0.569 | 0.753 |
| landscapes-national_park | zh | le parc naturel | 国家公园 | Parcs nationaux | 0.766 | 0.754 |
| house-bed | zh | le lit | 床 | Le lit | 0.458 | 0.756 |
| pt6 | zh | D'accord, je rédige le post-mortem et j'ouvre un ticket aujourd'hui. | 好的，我今天写事故复盘报告并提交工单。 | Bon, j'ai écrit le rapport d'accident aujourd'hui et j'ai déposé le formulaire. | 0.762 | 0.765 |
| meals-bread | zh | le pain | 面包 | Le pain | 0.387 | 0.765 |
| plants-seedling | zh | la jeune pousse | 幼苗 | Les jeunes plants | 0.686 | 0.766 |
| actions-person_biking | zh | faire du vélo | 骑自行车 | Je fais du vélo. | 0.863 | 0.767 |
| games-puzzle_piece | zh | le puzzle | 拼图 | Le casse-tête | 0.651 | 0.767 |
| numbers-keycap_3 | zh | trois | 三 | Troisième | 0.87 | 0.768 |
| bathroom-wastebasket | zh | la poubelle | 垃圾桶 | Les poubelles | 0.721 | 0.769 |
| objects-g2 | zh | un cadeau pour toi | 给你的礼物 | Je t'offre un cadeau. | 0.84 | 0.772 |
| a6 | zh | En compensant par plus de flexibilité sur les horaires. | 可以用更灵活的工作时间来弥补。 | Il est possible de compenser avec des heures de travail plus flexibles. | 0.769 | 0.774 |
| kitchen-g1 | zh | Passe-moi la cuillère, s’il te plaît. | 请把勺子递给我。 | S'il vous plaît, passez-moi le chapeau. | 0.887 | 0.774 |
| accessories-purse | zh | le porte-monnaie | 钱包 | Le portefeuille | 0.801 | 0.774 |
| signs-up_arrow | zh | le haut | 上 | En haut | 0.732 | 0.776 |
| transport-motorcycle | zh | la moto | 摩托车 | Une moto | 0.756 | 0.776 |
| kitchen-g2 | zh | Bon appétit ! | 祝你好胃口！ | Je vous souhaite un bon appétit ! | 0.895 | 0.777 |
| jobs-guard | zh | le gardien | 警卫 | Les gardes | 0.67 | 0.777 |
| ph3 | zh | C'est noté ; je préviens le chef pour tous vos repas. | 好的，已经记下了，我会通知厨师，您的每一餐都会特别注意。 | Bon, j'ai bien noté, j'informe le cuisinier et je fais attention à chaque repas que vous préparez. | 0.826 | 0.778 |
| wild-frog | zh | la grenouille | 青蛙 | Les grenouilles | 0.624 | 0.779 |
| ph6 | zh | Avec plaisir, merci pour votre accueil. | 好的，谢谢你们的热情接待。 | Bien, merci pour votre accueil chaleureux. | 0.778 | 0.782 |
| g3 | zh | Bien, merci. Bienvenue ! | 我也很好，谢谢。欢迎！ | Je vais bien, merci. Bienvenue ! | 0.737 | 0.784 |
| accessories-ring | zh | la bague | 戒指 | L'anneau | 0.748 | 0.784 |
| signs-red_question_mark | zh | la question | 问题 | Le problème | 0.814 | 0.785 |
| school-calendar | zh | l’agenda | 日程本 | Le calendrier | 0.771 | 0.785 |
| school-graduation_cap | zh | le diplôme | 毕业 | Diplômé | 0.739 | 0.786 |
| travel-airplane_arrival | zh | l’arrivée | 到达 | À l'arrivée | 0.813 | 0.788 |
| actions-man_dancing | zh | danser | 跳舞 | La danse | 0.749 | 0.789 |
| music-artist_palette | zh | la peinture | 绘画 | Peinture | 0.825 | 0.79 |
| house-light_bulb | zh | l’ampoule | 灯泡 | L'ampoule électrique | 0.737 | 0.791 |
| wild-monkey | zh | le singe | 猴子 | Les singes | 0.587 | 0.792 |
| signs-right_arrow | zh | la droite | 右 | À droite. | 0.87 | 0.794 |
| school-file_folder | zh | le dossier | 文件夹 | Les dossiers | 0.684 | 0.795 |
| weather-umbrella_with_rain_drops | zh | le parapluie | 雨伞 | Un parapluie | 0.624 | 0.796 |
| bathroom-roll_of_paper | zh | le papier toilette | 卫生纸 | Le papier hygiénique | 0.776 | 0.796 |
| jobs-technologist | zh | le développeur | 程序员 | Le programmeur | 0.751 | 0.798 |
| clothes-man_s_shoe | zh | les chaussures | 皮鞋 | Des chaussures en cuir | 0.796 | 0.798 |
| pl5 | zh | Relancez-le aujourd'hui, sinon nous paierons des frais de surestaries. | 今天就催一下，不然我们要付滞期费。 | Si vous ne le faites pas aujourd'hui, nous devrons payer les frais de retard. | 0.771 | 0.799 |
| farm-g1 | zh | un petit chat | 一只小猫 | Un chaton | 0.871 | 0.8 |
| vegetables-onion | zh | l’oignon | 洋葱 | Les oignons | 0.665 | 0.801 |
| transport-ship | zh | le navire | 轮船 | Les bateaux | 0.745 | 0.803 |
| body-bone | zh | l’os | 骨头 | Les os | 0.617 | 0.804 |
| bathroom-sponge | zh | l’éponge | 海绵 | Les éponges | 0.663 | 0.804 |
| wild-chipmunk | zh | l’écureuil | 松鼠 | Les écureuils | 0.558 | 0.811 |
| birds-mosquito | zh | le moustique | 蚊子 | Les moustiques | 0.727 | 0.811 |
| places-fountain | zh | la fontaine | 喷泉 | Une fontaine | 0.721 | 0.813 |
| sea-spiral_shell | zh | le coquillage | 贝壳 | Les coquillages | 0.643 | 0.814 |
| school-crayon | zh | le crayon de couleur | 蜡笔 | Le crayon | 0.631 | 0.814 |
| farm-donkey | zh | l’âne | 驴 | Les ânes | 0.685 | 0.816 |
| s5 | zh | Bien sûr, les cabines sont au fond. | 当然，试衣间在里面。 | Bien sûr, les vestiaires sont à l'intérieur. | 0.713 | 0.817 |
| landscapes-camping | zh | le camping | 营地 | Le camp | 0.745 | 0.817 |
| school-bar_chart | zh | le graphique | 图表 | Graphique | 0.715 | 0.818 |
| vegetables-chestnut | zh | la châtaigne | 栗子 | Le châtaignier | 0.538 | 0.821 |
| travel-world_map | zh | la carte | 地图 | Carte | 0.666 | 0.822 |
| farm-goat | zh | la chèvre | 山羊 | Les chèvres | 0.715 | 0.825 |
| games-chess_pawn | zh | les échecs | 国际象棋 | Jeux d'échecs | 0.451 | 0.825 |
| farm-cat | zh | le chat | 猫 | Le chat | 0.612 | 0.826 |
| games-video_game | zh | le jeu vidéo | 电子游戏 | Jeux vidéo | 0.687 | 0.826 |
| sea-water_wave | zh | la vague | 海浪 | Les vagues | 0.69 | 0.827 |
| drinks-bubble_tea | zh | le thé aux perles | 珍珠奶茶 | Le thé au lait de perle | 0.692 | 0.829 |
| sports-volleyball | zh | le volley | 排球 | Le volley-ball | 0.49 | 0.83 |
| meals-sandwich | zh | le sandwich | 三明治 | Des sandwichs | 0.68 | 0.832 |
| farm-cow | zh | la vache | 奶牛 | Les vaches | 0.706 | 0.834 |
| transport-sailboat | zh | le voilier | 帆船 | Les voiliers | 0.643 | 0.836 |
| meals-salt | zh | le sel | 盐 | Le sel | 0.574 | 0.838 |
| accessories-gem_stone | zh | la pierre précieuse | 宝石 | Les pierres précieuses | 0.686 | 0.839 |
| transport-canoe | zh | le canoë | 独木舟 | Le canoë | 0.36 | 0.841 |
| fruits-peach | zh | la pêche | 桃子 | Les pêches | 0.359 | 0.845 |
| fruits-pear | zh | la poire | 梨 | Les poires | 0.669 | 0.846 |
| birds-honeybee | zh | l’abeille | 蜜蜂 | Les abeilles | 0.743 | 0.846 |
| weather-wind_face | zh | le vent | 风 | Le vent | 0.686 | 0.847 |
| travel-fuel_pump | zh | la station-service | 加油站 | Une station-service | 0.62 | 0.847 |
| fruits-grapes | zh | le raisin | 葡萄 | Les raisins | 0.582 | 0.855 |
| birds-spider | zh | l’araignée | 蜘蛛 | Les araignées | 0.73 | 0.859 |
| vegetables-carrot | zh | la carotte | 胡萝卜 | Les carottes | 0.705 | 0.86 |
| drinks-glass_of_milk | zh | le lait | 牛奶 | Le lait | 0.64 | 0.862 |
| wild-zebra | zh | le zèbre | 斑马 | Les zèbres | 0.49 | 0.863 |
| transport-taxi | zh | le taxi | 出租车 | Un taxi | 0.687 | 0.864 |
| sports-sports_medal | zh | la médaille | 奖牌 | Médaille | 0.698 | 0.871 |
| objects-flashlight | zh | la lampe de poche | 手电筒 | Une lampe de poche | 0.582 | 0.874 |
| tech-telescope | zh | le télescope | 望远镜 | Les télescopes | 0.726 | 0.875 |
| health-sneezing_face | zh | le rhume | 感冒 | Le rhume | 0.564 | 0.879 |
| sports-goal_net | zh | le but | 球门 | Le but | 0.366 | 0.879 |
| clothes-necktie | zh | la cravate | 领带 | La cravate | 0.67 | 0.88 |
| sea-jellyfish | zh | la méduse | 水母 | La méduse | 0.49 | 0.881 |
| vegetables-cucumber | zh | le concombre | 黄瓜 | Les concombres | 0.573 | 0.884 |
| vegetables-potato | zh | la pomme de terre | 土豆 | Les pommes de terre | 0.738 | 0.885 |
| fruits-red_apple | zh | la pomme | 苹果 | Les pommes | 0.667 | 0.887 |
| meals-hamburger | zh | le hamburger | 汉堡包 | Des hamburgers | 0.713 | 0.889 |
| sweets-candy | zh | le bonbon | 糖果 | Les bonbons | 0.738 | 0.89 |
| wild-koala | zh | le koala | 考拉 | Le koala | 0.655 | 0.89 |
| sea-shark | zh | le requin | 鲨鱼 | Le requin | 0.481 | 0.896 |
| vegetables-tomato | zh | la tomate | 西红柿 | Les tomates | 0.738 | 0.903 |
| transport-helicopter | zh | l’hélicoptère | 直升机 | Hélicoptère | 0.732 | 0.904 |
| sea-coral | zh | le corail | 珊瑚 | Le corail | 0.517 | 0.907 |
| places-bridge_at_night | zh | le pont | 桥 | Le pont | 0.718 | 0.914 |
| travel-station | zh | la gare | 车站 | La gare | 0.552 | 0.915 |
| wild-bear | zh | l’ours | 熊 | L'ours | 0.447 | 0.916 |
| objects-radio | zh | la radio | 收音机 | La radio | 0.554 | 0.916 |
| transport-tram | zh | le tramway | 有轨电车 | Le tramway | 0.586 | 0.916 |
| travel-compass | zh | la boussole | 指南针 | La boussole | 0.613 | 0.918 |
| time-watch | zh | la montre | 手表 | La montre | 0.682 | 0.919 |
| travel-luggage | zh | la valise | 行李箱 | La valise | 0.699 | 0.92 |
| wild-deer | zh | le cerf | 鹿 | Le cerf | 0.669 | 0.922 |
| house-ladder | zh | l’échelle | 梯子 | L'échelle | 0.614 | 0.922 |
| weather-fog | zh | le brouillard | 雾 | Le brouillard | 0.725 | 0.924 |
| weather-rainbow | zh | l’arc-en-ciel | 彩虹 | L'arc-en-ciel | 0.573 | 0.927 |
| games-ribbon | zh | le ruban | 丝带 | Le ruban | 0.673 | 0.927 |
| house-elevator | zh | l’ascenseur | 电梯 | L'ascenseur | 0.733 | 0.928 |
| bathroom-razor | zh | le rasoir | 剃须刀 | Le rasoir | 0.709 | 0.928 |
| numbers-keycap_7 | zh | sept | 七 | Sept | 0.669 | 0.93 |
| meals-cooked_rice | zh | le riz | 米饭 | Le riz | 0.594 | 0.93 |
| music-drum | zh | le tambour | 鼓 | Le tambour | 0.728 | 0.93 |
| wild-fox | zh | le renard | 狐狸 | Le renard | 0.608 | 0.933 |
| music-flute | zh | la flûte | 笛子 | La flûte | 0.67 | 0.933 |
| plants-tulip | zh | la tulipe | 郁金香 | Les tulipes | 0.734 | 0.935 |
| travel-motorway | zh | l’autoroute | 高速公路 | L'autoroute | 0.733 | 0.935 |
| sports-running_shirt | zh | le maillot | 球衣 | Le maillot | 0.705 | 0.936 |
| wild-rhinoceros | zh | le rhinocéros | 犀牛 | Le rhinocéros | 0.532 | 0.937 |
| bathroom-toilet | zh | les toilettes | 马桶 | Les toilettes | 0.676 | 0.937 |
| places-stadium | zh | le stade | 体育场 | Le stade | 0.662 | 0.937 |
| vegetables-beans | zh | les haricots | 豆子 | Les haricots | 0.722 | 0.938 |
| transport-bus | zh | le bus | 公共汽车 | Le bus | 0.626 | 0.938 |
| sports-person_surfing | zh | le surf | 冲浪 | Le surf | 0.744 | 0.939 |
| school-scissors | zh | les ciseaux | 剪刀 | Les ciseaux | 0.71 | 0.94 |
| clothes-gloves | zh | les gants | 手套 | Les gants | 0.748 | 0.942 |
| sea-dolphin | zh | le dauphin | 海豚 | Le dauphin | 0.629 | 0.943 |
| body-tongue | zh | la langue | 舌头 | La langue | 0.615 | 0.944 |
| bathroom-shower | zh | la douche | 淋浴 | La douche | 0.684 | 0.944 |
| travel-customs | zh | la douane | 海关 | La douane | 0.73 | 0.944 |
| meals-honey_pot | zh | le miel | 蜂蜜 | Le miel | 0.724 | 0.945 |
| sports-martial_arts_uniform | zh | les arts martiaux | 武术 | Les arts martiaux | 0.712 | 0.945 |
| sports-person_swimming | zh | la natation | 游泳 | La natation | 0.714 | 0.945 |
| music-performing_arts | zh | le théâtre | 戏剧 | Le théâtre | 0.749 | 0.947 |
| school-pencil | zh | le crayon | 铅笔 | Le crayon | 0.683 | 0.949 |
| sports-badminton | zh | le badminton | 羽毛球 | Le badminton | 0.624 | 0.95 |
| wild-kangaroo | zh | le kangourou | 袋鼠 | Le kangourou | 0.388 | 0.951 |
| sports-boxing_glove | zh | la boxe | 拳击 | La boxe | 0.632 | 0.951 |
| house-couch_and_lamp | zh | le canapé | 沙发 | Le canapé | 0.721 | 0.953 |
| music-musical_keyboard | zh | le piano | 钢琴 | Le piano | 0.7 | 0.953 |
| sports-tennis | zh | le tennis | 网球 | Le tennis | 0.689 | 0.953 |
| farm-pig | zh | le cochon | 猪 | Le cochon | 0.625 | 0.954 |
| school-pen | zh | le stylo | 笔 | Le stylo | 0.745 | 0.955 |
| vegetables-ear_of_corn | zh | le maïs | 玉米 | Le maïs | 0.717 | 0.956 |
| farm-mouse | zh | la souris | 老鼠 | La souris | 0.724 | 0.957 |
| transport-rocket | zh | la fusée | 火箭 | La fusée | 0.623 | 0.957 |
| landscapes-wood | zh | le bois | 木头 | Le bois | 0.745 | 0.958 |
| health-face_with_medical_mask | zh | le masque | 口罩 | Le masque | 0.623 | 0.959 |
| sports-rugby_football | zh | le rugby | 橄榄球 | Le rugby | 0.479 | 0.959 |
| wild-panda | zh | le panda | 熊猫 | Le panda | 0.626 | 0.96 |
| objects-teddy_bear | zh | l’ours en peluche | 泰迪熊 | L'ours en peluche | 0.609 | 0.962 |
| wild-polar_bear | zh | l’ours polaire | 北极熊 | L'ours polaire | 0.665 | 0.963 |
| landscapes-volcano | zh | le volcan | 火山 | Le volcan | 0.657 | 0.963 |
| farm-hamster | zh | le hamster | 仓鼠 | Le hamster | 0.579 | 0.964 |
| meals-butter | zh | le beurre | 黄油 | Le beurre | 0.655 | 0.966 |
| landscapes-rock | zh | le rocher | 岩石 | Le rocher | 0.619 | 0.967 |
| games-circus_tent | zh | le cirque | 马戏团 | Le cirque | 0.54 | 0.967 |
| wild-gorilla | zh | le gorille | 大猩猩 | Le gorille | 0.585 | 0.968 |
| accessories-crown | zh | la couronne | 王冠 | La couronne | 0.738 | 0.968 |
| music-violin | zh | le violon | 小提琴 | Le violon | 0.653 | 0.975 |
| wild-tiger | zh | le tigre | 老虎 | Le tigre | 0.711 | 0.976 |
| places-mosque | zh | la mosquée | 清真寺 | La mosquée | 0.597 | 0.978 |
| birds-penguin | zh | le pingouin | 企鹅 | Le pingouin | 0.707 | 0.98 |
| s1 | zh | Je peux vous aider ? | 有什么可以帮您的吗？ | Est-ce que je peux vous aider ? | 0.743 | 0.992 |
