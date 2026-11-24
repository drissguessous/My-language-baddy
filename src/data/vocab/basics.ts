import type { ThemeSrc } from './types';

// Les bases : couleurs, nombres, temps, repères.
export const BASICS: ThemeSrc[] = [
  { id: 'colors', title: 'Couleurs', section: 'Les bases', level: 'A1', kids: true, words: `
red_square|rouge|red|rojo|rosso|vermelho|أحمر|aḥmar|红色|hóngsè|赤|aka
blue_square|bleu|blue|azul|blu|azul|أزرق|azraq|蓝色|lánsè|青|ao
green_square|vert|green|verde|verde|verde|أخضر|akhḍar|绿色|lǜsè|緑|midori
yellow_square|jaune|yellow|amarillo|giallo|amarelo|أصفر|aṣfar|黄色|huángsè|黄色|kiiro
orange_square|orange|orange|naranja|arancione|laranja|برتقالي|burtuqālī|橙色|chéngsè|オレンジ色|orenji-iro
purple_square|violet|purple|morado|viola|roxo|بنفسجي|banafsajī|紫色|zǐsè|紫|murasaki
black_large_square|noir|black|negro|nero|preto|أسود|aswad|黑色|hēisè|黒|kuro
white_large_square|blanc|white|blanco|bianco|branco|أبيض|abyaḍ|白色|báisè|白|shiro
brown_square|marron|brown|marrón|marrone|castanho|بني|bunnī|棕色|zōngsè|茶色|chairo
`, groups: `
blue_square|Le ciel est bleu.|The sky is blue.|El cielo es azul.|Il cielo è blu.|O céu é azul.|السماء زرقاء.|as-samāʾ zarqāʾ.|天空是蓝色的。|tiānkōng shì lánsè de.|空は青いです。|sora wa aoi desu.
red_square|une voiture rouge|a red car|un coche rojo|una macchina rossa|um carro vermelho|سيارة حمراء|sayyāra ḥamrāʾ|一辆红色的车|yí liàng hóngsè de chē|赤い車|akai kuruma
` },

  { id: 'numbers', title: 'Nombres', section: 'Les bases', level: 'A1', kids: true, words: `
keycap_0|zéro|zero|cero|zero|zero|صفر|ṣifr|零|líng|ゼロ|zero
keycap_1|un|one|uno|uno|um|واحد|wāḥid|一|yī|一|ichi
keycap_2|deux|two|dos|due|dois|اثنان|ithnān|二|èr|二|ni
keycap_3|trois|three|tres|tre|três|ثلاثة|thalātha|三|sān|三|san
keycap_4|quatre|four|cuatro|quattro|quatro|أربعة|arbaʿa|四|sì|四|yon
keycap_5|cinq|five|cinco|cinque|cinco|خمسة|khamsa|五|wǔ|五|go
keycap_6|six|six|seis|sei|seis|ستة|sitta|六|liù|六|roku
keycap_7|sept|seven|siete|sette|sete|سبعة|sabʿa|七|qī|七|nana
keycap_8|huit|eight|ocho|otto|oito|ثمانية|thamāniya|八|bā|八|hachi
keycap_9|neuf|nine|nueve|nove|nove|تسعة|tisʿa|九|jiǔ|九|kyū
keycap_10|dix|ten|diez|dieci|dez|عشرة|ʿashara|十|shí|十|jū
`, groups: `
keycap_3|un, deux, trois|one, two, three|uno, dos, tres|uno, due, tre|um, dois, três|واحد، اثنان، ثلاثة|wāḥid, ithnān, thalātha|一、二、三|yī, èr, sān|いち、に、さん|ichi, ni, san
cat|J’ai deux chats.|I have two cats.|Tengo dos gatos.|Ho due gatti.|Tenho dois gatos.|عندي قطتان.|ʿindī qiṭṭatān.|我有两只猫。|wǒ yǒu liǎng zhī māo.|猫を二匹飼っています。|neko o nihiki katte imasu.
` },

  { id: 'time', title: 'Le temps qui passe', section: 'Les bases', level: 'A1', kids: true, words: `
sunrise|le matin|morning|la mañana|la mattina|a manhã|الصباح|aṣ-ṣabāḥ|早上|zǎoshang|朝|asa
sunset|le soir|evening|la tarde|la sera|a tarde|المساء|al-masāʾ|晚上|wǎnshang|夕方|yūgata
night_with_stars|la nuit|night|la noche|la notte|a noite|الليل|al-layl|夜|yè|夜|yoru
watch|la montre|watch|el reloj de pulsera|l’orologio da polso|o relógio de pulso|ساعة يد|sāʿat yad|手表|shǒubiǎo|腕時計|udedokei
alarm_clock|le réveil|alarm clock|el despertador|la sveglia|o despertador|منبه|munabbih|闹钟|nàozhōng|目覚まし時計|mezamashi-dokei
mantelpiece_clock|l’horloge|clock|el reloj|l’orologio|o relógio|ساعة حائط|sāʿat ḥāʾiṭ|钟|zhōng|時計|tokei
hourglass_done|le sablier|hourglass|el reloj de arena|la clessidra|a ampulheta|ساعة رملية|sāʿa ramliyya|沙漏|shālòu|砂時計|sunadokei
calendar|le calendrier|calendar|el calendario|il calendario|o calendário|التقويم|at-taqwīm|日历|rìlì|カレンダー|karendā
stopwatch|le chronomètre|stopwatch|el cronómetro|il cronometro|o cronómetro|ساعة إيقاف|sāʿat īqāf|秒表|miǎobiǎo|ストップウォッチ|sutoppu-wotchi
`, groups: `
sunrise|Bonjour, bon matin !|Good morning!|¡Buenos días!|Buongiorno!|Bom dia!|صباح الخير!|ṣabāḥ al-khayr!|早上好！|zǎoshang hǎo!|おはようございます！|ohayō gozaimasu!
alarm_clock|Le réveil sonne à sept heures.|The alarm rings at seven.|El despertador suena a las siete.|La sveglia suona alle sette.|O despertador toca às sete.|المنبه يرن في السابعة.|al-munabbih yarinnu fī s-sābiʿa.|闹钟七点响。|nàozhōng qī diǎn xiǎng.|目覚ましは七時に鳴ります。|mezamashi wa shichiji ni narimasu.
` },

  { id: 'signs', title: 'Repères et signes', section: 'Les bases', level: 'A1', kids: true, words: `
left_arrow|la gauche|left|la izquierda|la sinistra|a esquerda|اليسار|al-yasār|左|zuǒ|左|hidari
right_arrow|la droite|right|la derecha|la destra|a direita|اليمين|al-yamīn|右|yòu|右|migi
up_arrow|le haut|up|arriba|su|para cima|فوق|fawq|上|shàng|上|ue
down_arrow|le bas|down|abajo|giù|para baixo|تحت|taḥt|下|xià|下|shita
red_question_mark|la question|question|la pregunta|la domanda|a pergunta|السؤال|as-suʾāl|问题|wèntí|質問|shitsumon
plus|plus|plus|más|più|mais|زائد|zāʾid|加|jiā|足す|tasu
minus|moins|minus|menos|meno|menos|ناقص|nāqiṣ|减|jiǎn|引く|hiku
check_mark_button|correct|correct|correcto|giusto|certo|صحيح|ṣaḥīḥ|对|duì|正しい|tadashii
cross_mark|faux|wrong|incorrecto|sbagliato|errado|خطأ|khaṭaʾ|错|cuò|間違い|machigai
`, groups: `
left_arrow|Tournez à gauche.|Turn left.|Gire a la izquierda.|Giri a sinistra.|Vire à esquerda.|انعطف يسارًا.|inʿaṭif yasāran.|向左转。|xiàng zuǒ zhuǎn.|左に曲がってください。|hidari ni magatte kudasai.
red_question_mark|J’ai une question.|I have a question.|Tengo una pregunta.|Ho una domanda.|Tenho uma pergunta.|عندي سؤال.|ʿindī suʾāl.|我有一个问题。|wǒ yǒu yí ge wèntí.|質問があります。|shitsumon ga arimasu.
` },
];
