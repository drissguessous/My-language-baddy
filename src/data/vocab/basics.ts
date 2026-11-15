import type { ThemeSrc } from './types';

// Les bases : couleurs, nombres, temps, repères.
export const BASICS: ThemeSrc[] = [
  { id: 'colors', title: 'Couleurs', section: 'Les bases', level: 'A1', kids: true, words: `
red_square|rouge|red|rojo|rosso|vermelho|أحمر|aḥmar|قرمز|qermez|लाल|lāl|红色|hóngsè|赤|aka|azggaɣ
blue_square|bleu|blue|azul|blu|azul|أزرق|azraq|آبی|âbi|नीला|nīlā|蓝色|lánsè|青|ao|
green_square|vert|green|verde|verde|verde|أخضر|akhḍar|سبز|sabz|हरा|harā|绿色|lǜsè|緑|midori|
yellow_square|jaune|yellow|amarillo|giallo|amarelo|أصفر|aṣfar|زرد|zard|पीला|pīlā|黄色|huángsè|黄色|kiiro|awraɣ
orange_square|orange|orange|naranja|arancione|laranja|برتقالي|burtuqālī|نارنجی|nâranji|नारंगी|nāraṅgī|橙色|chéngsè|オレンジ色|orenji-iro|
purple_square|violet|purple|morado|viola|roxo|بنفسجي|banafsajī|بنفش|banafsh|बैंगनी|baiṅganī|紫色|zǐsè|紫|murasaki|
black_large_square|noir|black|negro|nero|preto|أسود|aswad|سیاه|siyâh|काला|kālā|黑色|hēisè|黒|kuro|aberkan
white_large_square|blanc|white|blanco|bianco|branco|أبيض|abyaḍ|سفید|sefid|सफ़ेद|safed|白色|báisè|白|shiro|umlil
brown_square|marron|brown|marrón|marrone|castanho|بني|bunnī|قهوه‌ای|qahve-i|भूरा|bhūrā|棕色|zōngsè|茶色|chairo|
`, groups: `
blue_square|Le ciel est bleu.|The sky is blue.|El cielo es azul.|Il cielo è blu.|O céu é azul.|السماء زرقاء.|as-samāʾ zarqāʾ.|آسمان آبی است.|âsemân âbi ast.|आसमान नीला है।|āsmān nīlā hai.|天空是蓝色的。|tiānkōng shì lánsè de.|空は青いです。|sora wa aoi desu.|
red_square|une voiture rouge|a red car|un coche rojo|una macchina rossa|um carro vermelho|سيارة حمراء|sayyāra ḥamrāʾ|یک ماشین قرمز|yek mâshin-e qermez|एक लाल गाड़ी|ek lāl gāṛī|一辆红色的车|yí liàng hóngsè de chē|赤い車|akai kuruma|
` },

  { id: 'numbers', title: 'Nombres', section: 'Les bases', level: 'A1', kids: true, words: `
keycap_0|zéro|zero|cero|zero|zero|صفر|ṣifr|صفر|sefr|शून्य|śūnya|零|líng|ゼロ|zero|
keycap_1|un|one|uno|uno|um|واحد|wāḥid|یک|yek|एक|ek|一|yī|一|ichi|yan
keycap_2|deux|two|dos|due|dois|اثنان|ithnān|دو|do|दो|do|二|èr|二|ni|sin
keycap_3|trois|three|tres|tre|três|ثلاثة|thalātha|سه|se|तीन|tīn|三|sān|三|san|kraḍ
keycap_4|quatre|four|cuatro|quattro|quatro|أربعة|arbaʿa|چهار|chahâr|चार|chār|四|sì|四|yon|kkuẓ
keycap_5|cinq|five|cinco|cinque|cinco|خمسة|khamsa|پنج|panj|पाँच|pā̃c|五|wǔ|五|go|smmus
keycap_6|six|six|seis|sei|seis|ستة|sitta|شش|shesh|छह|chah|六|liù|六|roku|sḍis
keycap_7|sept|seven|siete|sette|sete|سبعة|sabʿa|هفت|haft|सात|sāt|七|qī|七|nana|sa
keycap_8|huit|eight|ocho|otto|oito|ثمانية|thamāniya|هشت|hasht|आठ|āṭh|八|bā|八|hachi|tam
keycap_9|neuf|nine|nueve|nove|nove|تسعة|tisʿa|نه|noh|नौ|nau|九|jiǔ|九|kyū|tẓa
keycap_10|dix|ten|diez|dieci|dez|عشرة|ʿashara|ده|dah|दस|das|十|shí|十|jū|mraw
`, groups: `
keycap_3|un, deux, trois|one, two, three|uno, dos, tres|uno, due, tre|um, dois, três|واحد، اثنان، ثلاثة|wāḥid, ithnān, thalātha|یک، دو، سه|yek, do, se|एक, दो, तीन|ek, do, tīn|一、二、三|yī, èr, sān|いち、に、さん|ichi, ni, san|yan, sin, kraḍ
cat|J’ai deux chats.|I have two cats.|Tengo dos gatos.|Ho due gatti.|Tenho dois gatos.|عندي قطتان.|ʿindī qiṭṭatān.|دو تا گربه دارم.|do tâ gorbe dâram.|मेरे पास दो बिल्लियाँ हैं।|mere pās do billiyā̃ haĩ.|我有两只猫。|wǒ yǒu liǎng zhī māo.|猫を二匹飼っています。|neko o nihiki katte imasu.|
` },

  { id: 'time', title: 'Le temps qui passe', section: 'Les bases', level: 'A1', kids: true, words: `
sunrise|le matin|morning|la mañana|la mattina|a manhã|الصباح|aṣ-ṣabāḥ|صبح|sobh|सुबह|subah|早上|zǎoshang|朝|asa|
sunset|le soir|evening|la tarde|la sera|a tarde|المساء|al-masāʾ|عصر|asr|शाम|śām|晚上|wǎnshang|夕方|yūgata|
night_with_stars|la nuit|night|la noche|la notte|a noite|الليل|al-layl|شب|shab|रात|rāt|夜|yè|夜|yoru|iḍ
watch|la montre|watch|el reloj de pulsera|l’orologio da polso|o relógio de pulso|ساعة يد|sāʿat yad|ساعت مچی|sâ'at-e mochi|घड़ी|ghaṛī|手表|shǒubiǎo|腕時計|udedokei|
alarm_clock|le réveil|alarm clock|el despertador|la sveglia|o despertador|منبه|munabbih|ساعت زنگ‌دار|sâ'at-e zangdâr|अलार्म घड़ी|alārm ghaṛī|闹钟|nàozhōng|目覚まし時計|mezamashi-dokei|
mantelpiece_clock|l’horloge|clock|el reloj|l’orologio|o relógio|ساعة حائط|sāʿat ḥāʾiṭ|ساعت دیواری|sâ'at-e divâri|दीवार घड़ी|dīvār ghaṛī|钟|zhōng|時計|tokei|
hourglass_done|le sablier|hourglass|el reloj de arena|la clessidra|a ampulheta|ساعة رملية|sāʿa ramliyya|ساعت شنی|sâ'at-e sheni|रेतघड़ी|retghaṛī|沙漏|shālòu|砂時計|sunadokei|
calendar|le calendrier|calendar|el calendario|il calendario|o calendário|التقويم|at-taqwīm|تقویم|taqvim|कैलेंडर|kaileṇḍar|日历|rìlì|カレンダー|karendā|
stopwatch|le chronomètre|stopwatch|el cronómetro|il cronometro|o cronómetro|ساعة إيقاف|sāʿat īqāf|کرنومتر|kronometr|स्टॉपवॉच|sṭŏpvŏc|秒表|miǎobiǎo|ストップウォッチ|sutoppu-wotchi|
`, groups: `
sunrise|Bonjour, bon matin !|Good morning!|¡Buenos días!|Buongiorno!|Bom dia!|صباح الخير!|ṣabāḥ al-khayr!|صبح بخیر!|sobh bekheyr!|सुप्रभात!|suprabhāt!|早上好！|zǎoshang hǎo!|おはようございます！|ohayō gozaimasu!|
alarm_clock|Le réveil sonne à sept heures.|The alarm rings at seven.|El despertador suena a las siete.|La sveglia suona alle sette.|O despertador toca às sete.|المنبه يرن في السابعة.|al-munabbih yarinnu fī s-sābiʿa.|ساعت هفت زنگ می‌زند.|sâ'at haft zang mizanad.|अलार्म सात बजे बजता है।|alārm sāt baje bajtā hai.|闹钟七点响。|nàozhōng qī diǎn xiǎng.|目覚ましは七時に鳴ります。|mezamashi wa shichiji ni narimasu.|
` },

  { id: 'signs', title: 'Repères et signes', section: 'Les bases', level: 'A1', kids: true, words: `
left_arrow|la gauche|left|la izquierda|la sinistra|a esquerda|اليسار|al-yasār|چپ|chap|बायाँ|bāyā̃|左|zuǒ|左|hidari|
right_arrow|la droite|right|la derecha|la destra|a direita|اليمين|al-yamīn|راست|râst|दायाँ|dāyā̃|右|yòu|右|migi|
up_arrow|le haut|up|arriba|su|para cima|فوق|fawq|بالا|bâlâ|ऊपर|ūpar|上|shàng|上|ue|
down_arrow|le bas|down|abajo|giù|para baixo|تحت|taḥt|پایین|pâyin|नीचे|nīce|下|xià|下|shita|
red_question_mark|la question|question|la pregunta|la domanda|a pergunta|السؤال|as-suʾāl|سؤال|so'âl|सवाल|savāl|问题|wèntí|質問|shitsumon|
plus|plus|plus|más|più|mais|زائد|zāʾid|به اضافه|be ezâfe|जोड़|joṛ|加|jiā|足す|tasu|
minus|moins|minus|menos|meno|menos|ناقص|nāqiṣ|منها|menhâ|घटा|ghaṭā|减|jiǎn|引く|hiku|
check_mark_button|correct|correct|correcto|giusto|certo|صحيح|ṣaḥīḥ|درست|dorost|सही|sahī|对|duì|正しい|tadashii|
cross_mark|faux|wrong|incorrecto|sbagliato|errado|خطأ|khaṭaʾ|غلط|ghalat|गलत|galat|错|cuò|間違い|machigai|
`, groups: `
left_arrow|Tournez à gauche.|Turn left.|Gire a la izquierda.|Giri a sinistra.|Vire à esquerda.|انعطف يسارًا.|inʿaṭif yasāran.|به چپ بپیچید.|be chap bepichid.|बाएँ मुड़िए।|bāẽ muṛie.|向左转。|xiàng zuǒ zhuǎn.|左に曲がってください。|hidari ni magatte kudasai.|
red_question_mark|J’ai une question.|I have a question.|Tengo una pregunta.|Ho una domanda.|Tenho uma pergunta.|عندي سؤال.|ʿindī suʾāl.|یک سؤال دارم.|yek so'âl dâram.|मेरा एक सवाल है।|merā ek savāl hai.|我有一个问题。|wǒ yǒu yí ge wèntí.|質問があります。|shitsumon ga arimasu.|
` },
];
