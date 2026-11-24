import type { ThemeSrc } from './types';

// École, bureau, technologie, musique et arts, sports, jeux et fêtes.
export const LEISURE: ThemeSrc[] = [
  { id: 'school', title: 'École et bureau', section: 'École et loisirs', level: 'A1', kids: true, words: `
closed_book|le livre|book|el libro|il libro|o livro|كتاب|kitāb|书|shū|本|hon
notebook|le cahier|notebook|el cuaderno|il quaderno|o caderno|دفتر|daftar|笔记本|bǐjìběn|ノート|nōto
pen|le stylo|pen|el bolígrafo|la penna|a caneta|قلم|qalam|笔|bǐ|ペン|pen
pencil|le crayon|pencil|el lápiz|la matita|o lápis|قلم رصاص|qalam raṣāṣ|铅笔|qiānbǐ|鉛筆|enpitsu
crayon|le crayon de couleur|crayon|la cera de colores|il pastello|o lápis de cera|قلم تلوين|qalam talwīn|蜡笔|làbǐ|クレヨン|kureyon
straight_ruler|la règle|ruler|la regla|il righello|a régua|مسطرة|misṭara|直尺|zhíchǐ|定規|jōgi
scissors|les ciseaux|scissors|las tijeras|le forbici|a tesoura|مقص|miqaṣṣ|剪刀|jiǎndāo|はさみ|hasami
paperclip|le trombone|paper clip|el clip|la graffetta|o clipe|مشبك ورق|mishbak waraq|回形针|huíxíngzhēn|クリップ|kurippu
pushpin|la punaise|drawing pin|la chincheta|la puntina|o pionés|دبوس|dabbūs|图钉|túdīng|画びょう|gabyō
memo|la note|note|la nota|il promemoria|a nota|ملاحظة|mulāḥaẓa|便条|biàntiáo|メモ|memo
page_facing_up|la feuille de papier|sheet of paper|la hoja de papel|il foglio|a folha de papel|ورقة|waraqa|纸|zhǐ|紙|kami
file_folder|le dossier|folder|la carpeta|la cartella|a pasta|ملف|milaff|文件夹|wénjiànjiā|フォルダー|forudā
briefcase|la mallette|briefcase|el maletín|la valigetta|a pasta executiva|حقيبة أوراق|ḥaqībat awrāq|公文包|gōngwénbāo|ブリーフケース|burīfukēsu
calendar|l’agenda|diary|la agenda|l’agenda|a agenda|المفكرة|al-mufakkira|日程本|rìchéngběn|手帳|techō
clipboard|le porte-bloc|clipboard|el portapapeles|la cartellina|a prancheta|حافظة أوراق|ḥāfiẓat awrāq|写字板|xiězìbǎn|クリップボード|kurippubōdo
bar_chart|le graphique|chart|el gráfico|il grafico|o gráfico|رسم بياني|rasm bayānī|图表|túbiǎo|グラフ|gurafu
abacus|le boulier|abacus|el ábaco|l’abaco|o ábaco|المعداد|al-miʿdād|算盘|suànpán|そろばん|soroban
graduation_cap|le diplôme|graduation|la graduación|la laurea|a formatura|التخرج|at-takharruj|毕业|bìyè|卒業|sotsugyō
`, groups: `
closed_book|un livre et un stylo|a book and a pen|un libro y un bolígrafo|un libro e una penna|um livro e uma caneta|كتاب وقلم|kitāb wa-qalam|一本书和一支笔|yì běn shū hé yì zhī bǐ|本とペン|hon to pen
notebook|J’ouvre mon cahier.|I open my notebook.|Abro mi cuaderno.|Apro il mio quaderno.|Abro o meu caderno.|أفتح دفتري.|aftaḥu daftarī.|我打开笔记本。|wǒ dǎkāi bǐjìběn.|ノートを開きます。|nōto o hirakimasu.
` },

  { id: 'tech', title: 'Technologie', section: 'École et loisirs', level: 'A2', kids: false, words: `
laptop|l’ordinateur portable|laptop|el portátil|il portatile|o portátil|حاسوب محمول|ḥāsūb maḥmūl|笔记本电脑|bǐjìběn diànnǎo|ノートパソコン|nōto pasokon
desktop_computer|l’ordinateur|computer|el ordenador|il computer|o computador|حاسوب|ḥāsūb|电脑|diànnǎo|パソコン|pasokon
keyboard|le clavier|keyboard|el teclado|la tastiera|o teclado|لوحة المفاتيح|lawḥat al-mafātīḥ|键盘|jiànpán|キーボード|kībōdo
computer_mouse|la souris|mouse|el ratón|il mouse|o rato|فأرة الحاسوب|faʾrat al-ḥāsūb|鼠标|shǔbiāo|マウス|mausu
printer|l’imprimante|printer|la impresora|la stampante|a impressora|طابعة|ṭābiʿa|打印机|dǎyìnjī|プリンター|purintā
e_mail|le courriel|email|el correo electrónico|l’e-mail|o e-mail|البريد الإلكتروني|al-barīd al-iliktrūnī|电子邮件|diànzǐ yóujiàn|メール|mēru
satellite_antenna|l’antenne|antenna|la antena|l’antenna|a antena|هوائي|hawāʾī|天线|tiānxiàn|アンテナ|antena
video_camera|la caméra|video camera|la videocámara|la videocamera|a câmara de vídeo|كاميرا فيديو|kāmīrā fīdiyū|摄像机|shèxiàngjī|ビデオカメラ|bideo kamera
headphone|le casque audio|headphones|los auriculares|le cuffie|os auscultadores|سماعات الرأس|sammāʿāt ar-raʾs|耳机|ěrjī|ヘッドホン|heddohon
robot|le robot|robot|el robot|il robot|o robô|روبوت|rūbūt|机器人|jīqìrén|ロボット|robotto
satellite|le satellite|satellite|el satélite|il satellite|o satélite|قمر صناعي|qamar ṣināʿī|卫星|wèixīng|人工衛星|jinkō eisei
microscope|le microscope|microscope|el microscopio|il microscopio|o microscópio|مجهر|mijhar|显微镜|xiǎnwēijìng|顕微鏡|kenbikyō
telescope|le télescope|telescope|el telescopio|il telescopio|o telescópio|تلسكوب|tiliskūb|望远镜|wàngyuǎnjìng|望遠鏡|bōenkyō
`, groups: `
laptop|J’envoie un courriel.|I send an email.|Envío un correo electrónico.|Mando un’e-mail.|Envio um e-mail.|أرسل بريدًا إلكترونيًا.|ursilu barīdan iliktrūniyyan.|我发一封电子邮件。|wǒ fā yì fēng diànzǐ yóujiàn.|メールを送ります。|mēru o okurimasu.
computer_mouse|Clique sur le bouton.|Click on the button.|Haz clic en el botón.|Clicca sul pulsante.|Clica no botão.|انقر على الزر.|unqur ʿalā z-zirr.|点击按钮。|diǎnjī ànniǔ.|ボタンをクリックしてください。|botan o kurikku shite kudasai.
` },

  { id: 'music', title: 'Musique et arts', section: 'École et loisirs', level: 'A2', kids: true, words: `
musical_note|la musique|music|la música|la musica|a música|موسيقى|mūsīqā|音乐|yīnyuè|音楽|ongaku
guitar|la guitare|guitar|la guitarra|la chitarra|a guitarra|غيتار|ghītār|吉他|jítā|ギター|gitā
violin|le violon|violin|el violín|il violino|o violino|كمان|kamān|小提琴|xiǎotíqín|バイオリン|baiorin
musical_keyboard|le piano|piano|el piano|il pianoforte|o piano|بيانو|biyānū|钢琴|gāngqín|ピアノ|piano
drum|le tambour|drum|el tambor|il tamburo|o tambor|طبل|ṭabl|鼓|gǔ|太鼓|taiko
trumpet|la trompette|trumpet|la trompeta|la tromba|o trompete|بوق|būq|小号|xiǎohào|トランペット|toranpetto
saxophone|le saxophone|saxophone|el saxofón|il sassofono|o saxofone|ساكسفون|sāksafūn|萨克斯|sàkèsī|サックス|sakkusu
flute|la flûte|flute|la flauta|il flauto|a flauta|فلوت|flūt|笛子|dízi|笛|fue
accordion|l’accordéon|accordion|el acordeón|la fisarmonica|o acordeão|أكورديون|akūrdiyūn|手风琴|shǒufēngqín|アコーディオン|akōdion
microphone|le micro|microphone|el micrófono|il microfono|o microfone|ميكروفون|mīkrūfūn|麦克风|màikèfēng|マイク|maiku
artist_palette|la peinture|painting|la pintura|la pittura|a pintura|الرسم|ar-rasm|绘画|huìhuà|絵画|kaiga
paintbrush|le pinceau|paintbrush|el pincel|il pennello|o pincel|فرشاة الرسم|furshāt ar-rasm|画笔|huàbǐ|絵筆|efude
camera_with_flash|la photographie|photography|la fotografía|la fotografia|a fotografia|التصوير|at-taṣwīr|摄影|shèyǐng|写真|shashin
clapper_board|le cinéma|cinema|el cine|il cinema|o cinema|السينما|as-sīnimā|电影|diànyǐng|映画|eiga
performing_arts|le théâtre|theatre|el teatro|il teatro|o teatro|المسرح|al-masraḥ|戏剧|xìjù|演劇|engeki
`, groups: `
guitar|Je joue de la guitare.|I play the guitar.|Toco la guitarra.|Suono la chitarra.|Toco guitarra.|أعزف على الغيتار.|aʿzifu ʿalā l-ghītār.|我弹吉他。|wǒ tán jítā.|ギターを弾きます。|gitā o hikimasu.
musical_note|J’aime écouter de la musique.|I like listening to music.|Me gusta escuchar música.|Mi piace ascoltare la musica.|Gosto de ouvir música.|أحب الاستماع إلى الموسيقى.|uḥibbu l-istimāʿ ilā l-mūsīqā.|我喜欢听音乐。|wǒ xǐhuan tīng yīnyuè.|音楽を聴くのが好きです。|ongaku o kiku no ga suki desu.
` },

  { id: 'sports', title: 'Sports', section: 'École et loisirs', level: 'A2', kids: true, words: `
soccer_ball|le football|football|el fútbol|il calcio|o futebol|كرة القدم|kurat al-qadam|足球|zúqiú|サッカー|sakkā
basketball|le basket|basketball|el baloncesto|la pallacanestro|o basquetebol|كرة السلة|kurat as-salla|篮球|lánqiú|バスケットボール|basukettobōru
volleyball|le volley|volleyball|el voleibol|la pallavolo|o voleibol|الكرة الطائرة|al-kura aṭ-ṭāʾira|排球|páiqiú|バレーボール|barēbōru
tennis|le tennis|tennis|el tenis|il tennis|o ténis|التنس|at-tinis|网球|wǎngqiú|テニス|tenisu
ping_pong|le tennis de table|table tennis|el tenis de mesa|il ping-pong|o ténis de mesa|كرة الطاولة|kurat aṭ-ṭāwila|乒乓球|pīngpāngqiú|卓球|takkyū
badminton|le badminton|badminton|el bádminton|il badminton|o badminton|الريشة الطائرة|ar-rīsha aṭ-ṭāʾira|羽毛球|yǔmáoqiú|バドミントン|badominton
baseball|le baseball|baseball|el béisbol|il baseball|o beisebol|البيسبول|al-baysbūl|棒球|bàngqiú|野球|yakyū
rugby_football|le rugby|rugby|el rugby|il rugby|o râguebi|الرغبي|ar-raghbī|橄榄球|gǎnlǎnqiú|ラグビー|ragubī
boxing_glove|la boxe|boxing|el boxeo|il pugilato|o boxe|الملاكمة|al-mulākama|拳击|quánjī|ボクシング|bokushingu
martial_arts_uniform|les arts martiaux|martial arts|las artes marciales|le arti marziali|as artes marciais|الفنون القتالية|al-funūn al-qitāliyya|武术|wǔshù|武道|budō
person_swimming|la natation|swimming|la natación|il nuoto|a natação|السباحة|as-sibāḥa|游泳|yóuyǒng|水泳|suiei
skier|le ski|skiing|el esquí|lo sci|o esqui|التزلج|at-tazalluj|滑雪|huáxuě|スキー|sukī
ice_skate|le patinage|ice skating|el patinaje|il pattinaggio|a patinagem|التزلج على الجليد|at-tazalluj ʿalā l-jalīd|滑冰|huábīng|スケート|sukēto
person_surfing|le surf|surfing|el surf|il surf|o surf|ركوب الأمواج|rukūb al-amwāj|冲浪|chōnglàng|サーフィン|sāfin
horse_racing|l’équitation|horse riding|la equitación|l’equitazione|a equitação|الفروسية|al-furūsiyya|骑马|qímǎ|乗馬|jōba
person_golfing|le golf|golf|el golf|il golf|o golfe|الغولف|al-ghūlf|高尔夫球|gāo’ěrfūqiú|ゴルフ|gorufu
person_lifting_weights|la musculation|weightlifting|la halterofilia|il sollevamento pesi|o levantamento de pesos|رفع الأثقال|rafʿ al-athqāl|举重|jǔzhòng|重量挙げ|jūryōage
person_in_lotus_position|le yoga|yoga|el yoga|lo yoga|o ioga|اليوغا|al-yūghā|瑜伽|yújiā|ヨガ|yoga
trophy|la coupe|trophy|el trofeo|il trofeo|o troféu|الكأس|al-kaʾs|奖杯|jiǎngbēi|トロフィー|torofī
sports_medal|la médaille|medal|la medalla|la medaglia|a medalha|الميدالية|al-mīdāliyya|奖牌|jiǎngpái|メダル|medaru
goal_net|le but|goal|la portería|la porta|a baliza|المرمى|al-marmā|球门|qiúmén|ゴール|gōru
running_shirt|le maillot|jersey|la camiseta deportiva|la maglia|a camisola|القميص الرياضي|al-qamīṣ ar-riyāḍī|球衣|qiúyī|ユニフォーム|yunifōmu
`, groups: `
soccer_ball|Nous jouons au football.|We play football.|Jugamos al fútbol.|Giochiamo a calcio.|Jogamos futebol.|نلعب كرة القدم.|nalʿabu kurat al-qadam.|我们踢足球。|wǒmen tī zúqiú.|サッカーをします。|sakkā o shimasu.
trophy|Notre équipe a gagné !|Our team won!|¡Nuestro equipo ha ganado!|La nostra squadra ha vinto!|A nossa equipa ganhou!|فاز فريقنا!|fāza farīqunā!|我们队赢了！|wǒmen duì yíng le!|私たちのチームが勝ちました！|watashitachi no chīmu ga kachimashita!
` },

  { id: 'games', title: 'Jeux et fêtes', section: 'École et loisirs', level: 'A1', kids: true, words: `
game_die|le dé|dice|el dado|il dado|o dado|نرد|nard|骰子|tóuzi|サイコロ|saikoro
puzzle_piece|le puzzle|jigsaw|el rompecabezas|il puzzle|o quebra-cabeças|أحجية|uḥjiyya|拼图|pīntú|パズル|pazuru
chess_pawn|les échecs|chess|el ajedrez|gli scacchi|o xadrez|الشطرنج|ash-shiṭranj|国际象棋|guójì xiàngqí|チェス|chesu
video_game|le jeu vidéo|video game|el videojuego|il videogioco|o videojogo|لعبة فيديو|luʿbat fīdiyū|电子游戏|diànzǐ yóuxì|テレビゲーム|terebi gēmu
kite|le cerf-volant|kite|la cometa|l’aquilone|o papagaio de papel|طائرة ورقية|ṭāʾira waraqiyya|风筝|fēngzheng|凧|tako
yo_yo|le yo-yo|yo-yo|el yoyó|lo yo-yo|o ioió|يويو|yūyū|悠悠球|yōuyōuqiú|ヨーヨー|yōyō
party_popper|la fête|party|la fiesta|la festa|a festa|الحفلة|al-ḥafla|派对|pàiduì|パーティー|pātī
fireworks|le feu d’artifice|fireworks|los fuegos artificiales|i fuochi d’artificio|o fogo de artifício|الألعاب النارية|al-alʿāb an-nāriyya|烟花|yānhuā|花火|hanabi
confetti_ball|les confettis|confetti|el confeti|i coriandoli|os confetes|قصاصات الورق|quṣāṣāt al-waraq|彩纸|cǎizhǐ|紙吹雪|kamifubuki
ribbon|le ruban|ribbon|la cinta|il nastro|a fita|شريط|sharīṭ|丝带|sīdài|リボン|ribon
circus_tent|le cirque|circus|el circo|il circo|o circo|السيرك|as-sīrk|马戏团|mǎxìtuán|サーカス|sākasu
roller_coaster|les montagnes russes|roller coaster|la montaña rusa|le montagne russe|a montanha-russa|الأفعوانية|al-afʿuwāniyya|过山车|guòshānchē|ジェットコースター|jetto kōsutā
`, groups: `
game_die|C’est ton tour !|It’s your turn!|¡Te toca!|Tocca a te!|É a tua vez!|إنه دورك!|innahu dawruk!|轮到你了！|lún dào nǐ le!|あなたの番です！|anata no ban desu!
party_popper|Bonne fête !|Happy holidays!|¡Felices fiestas!|Buone feste!|Boas festas!|عيد سعيد!|ʿīd saʿīd!|节日快乐！|jiérì kuàilè!|楽しい休日を！|tanoshii kyūjitsu o!
` },
];
