import { P, Phrase } from './types';

// Niveau A1 + unité enfants. Formes au masculin par défaut quand la langue l'impose
// (le prénom de l'apprenant dans les dialogues est « Sami »).
export const A1: Phrase[] = [
  // ── Salutations ──────────────────────────────────────────────
  P('g1', 'c', {
    fr: 'Bonjour ! Comment allez-vous ?', en: 'Hello! How are you?', ar: 'مرحبًا! كيف حالك؟',
    es: '¡Hola! ¿Qué tal?', it: 'Buongiorno! Come sta?', pt: 'Olá! Como está?',
    zh: '你好！你好吗？', ja: 'こんにちは！お元気ですか？',
  }, { ar: 'marḥaban! kayfa ḥāluka?', zh: 'nǐ hǎo! nǐ hǎo ma?', ja: 'konnichiwa! o-genki desu ka?' }),
  P('g2', 'l', {
    fr: 'Très bien, merci. Et vous ?', en: 'Very well, thank you. And you?', ar: 'بخير، شكرًا. وأنت؟',
    es: 'Muy bien, gracias. ¿Y usted?', it: 'Molto bene, grazie. E Lei?', pt: 'Muito bem, obrigado. E o senhor?',
    zh: '很好，谢谢。你呢？', ja: 'とても元気です、ありがとう。あなたは？',
  }, { ar: 'bikhayr, shukran. wa-anta?', zh: 'hěn hǎo, xièxie. nǐ ne?', ja: 'totemo genki desu, arigatō. anata wa?' }),
  P('g3', 'c', {
    fr: 'Bien, merci. Bienvenue !', en: 'Fine, thanks. Welcome!', ar: 'بخير، شكرًا. أهلًا وسهلًا!',
    es: 'Bien, gracias. ¡Bienvenido!', it: 'Bene, grazie. Benvenuto!', pt: 'Bem, obrigado. Bem-vindo!',
    zh: '我也很好，谢谢。欢迎！', ja: '元気です、ありがとう。ようこそ！',
  }, { ar: 'bikhayr, shukran. ahlan wa-sahlan!', zh: 'wǒ yě hěn hǎo, xièxie. huānyíng!', ja: 'genki desu, arigatō. yōkoso!' }),
  P('g4', 'l', {
    fr: 'Merci beaucoup.', en: 'Thank you very much.', ar: 'شكرًا جزيلًا.',
    es: 'Muchas gracias.', it: 'Grazie mille.', pt: 'Muito obrigado.',
    zh: '非常感谢。', ja: 'どうもありがとうございます。',
  }, { ar: 'shukran jazīlan.', zh: 'fēicháng gǎnxiè.', ja: 'dōmo arigatō gozaimasu.' }),
  P('g5', 'c', {
    fr: 'Au revoir, à demain !', en: 'Goodbye, see you tomorrow!', ar: 'مع السلامة، إلى اللقاء غدًا!',
    es: '¡Adiós, hasta mañana!', it: 'Arrivederci, a domani!', pt: 'Adeus, até amanhã!',
    zh: '再见，明天见！', ja: 'さようなら、また明日！',
  }, { ar: 'maʿa as-salāma, ilā al-liqāʾ ghadan!', zh: 'zàijiàn, míngtiān jiàn!', ja: 'sayōnara, mata ashita!' }),
  P('g6', 'l', {
    fr: 'Au revoir, bonne journée !', en: 'Goodbye, have a nice day!', ar: 'مع السلامة، يومًا سعيدًا!',
    es: 'Adiós, ¡que tenga un buen día!', it: 'Arrivederci, buona giornata!', pt: 'Adeus, tenha um bom dia!',
    zh: '再见，祝你今天愉快！', ja: 'さようなら、良い一日を！',
  }, { ar: 'maʿa as-salāma, yawman saʿīdan!', zh: 'zàijiàn, zhù nǐ jīntiān yúkuài!', ja: 'sayōnara, yoi ichinichi o!' }),

  // ── Se présenter ─────────────────────────────────────────────
  P('i1', 'c', {
    fr: 'Comment vous appelez-vous ?', en: "What's your name?", ar: 'ما اسمك؟',
    es: '¿Cómo se llama?', it: 'Come si chiama?', pt: 'Como se chama?',
    zh: '你叫什么名字？', ja: 'お名前は何ですか？',
  }, { ar: 'mā ismuka?', zh: 'nǐ jiào shénme míngzi?', ja: 'o-namae wa nan desu ka?' }),
  P('i2', 'l', {
    fr: "Je m'appelle Sami.", en: 'My name is Sami.', ar: 'اسمي سامي.',
    es: 'Me llamo Sami.', it: 'Mi chiamo Sami.', pt: 'Chamo-me Sami.',
    zh: '我叫萨米。', ja: 'サミです。',
  }, { ar: 'ismī Sāmī.', zh: 'wǒ jiào Sàmǐ.', ja: 'Sami desu.' }),
  P('i3', 'c', {
    fr: "D'où venez-vous ?", en: 'Where are you from?', ar: 'من أين أنت؟',
    es: '¿De dónde es usted?', it: "Di dov'è Lei?", pt: 'De onde é?',
    zh: '你是哪国人？', ja: 'どちらから来ましたか？',
  }, { ar: 'min ayna anta?', zh: 'nǐ shì nǎ guó rén?', ja: 'dochira kara kimashita ka?' }),
  P('i4', 'l', {
    fr: "Je viens du Maroc, j'habite à Agadir.", en: "I'm from Morocco; I live in Agadir.", ar: 'أنا من المغرب، وأسكن في أكادير.',
    es: 'Soy de Marruecos, vivo en Agadir.', it: 'Vengo dal Marocco, abito ad Agadir.', pt: 'Sou de Marrocos, vivo em Agadir.',
    zh: '我来自摩洛哥，住在阿加迪尔。', ja: 'モロッコ出身で、アガディールに住んでいます。',
  }, { ar: 'anā min al-maghrib, wa-askunu fī Agādīr.', zh: 'wǒ láizì Mòluògē, zhù zài Ājiādí’ěr.',
    ja: 'Morokko shusshin de, Agadīru ni sunde imasu.' }),
  P('i5', 'c', {
    fr: 'Quelles langues parlez-vous ?', en: 'Which languages do you speak?', ar: 'ما اللغات التي تتكلمها؟',
    es: '¿Qué idiomas habla?', it: 'Quali lingue parla?', pt: 'Que línguas fala?',
    zh: '你会说什么语言？', ja: '何語を話しますか？',
  }, { ar: 'mā al-lughāt allatī tatakallamuhā?', zh: 'nǐ huì shuō shénme yǔyán?', ja: 'nani-go o hanashimasu ka?' }),
  P('i6', 'l', {
    fr: "Je parle arabe et français, et j'apprends le japonais.", en: "I speak Arabic and French, and I'm learning Japanese.",
    ar: 'أتكلم العربية والفرنسية، وأتعلم اليابانية.', es: 'Hablo árabe y francés, y estoy aprendiendo japonés.',
    it: 'Parlo arabo e francese, e sto imparando il giapponese.', pt: 'Falo árabe e francês, e estou a aprender japonês.',
    zh: '我会说阿拉伯语和法语，正在学日语。', ja: 'アラビア語とフランス語を話します。今、日本語を勉強しています。',
  }, { ar: 'atakallamu al-ʿarabiyya wa-l-faransiyya, wa-ataʿallamu al-yābāniyya.',
    zh: 'wǒ huì shuō Ālābóyǔ hé Fǎyǔ, zhèngzài xué Rìyǔ.',
    ja: 'Arabia-go to Furansu-go o hanashimasu. ima, Nihon-go o benkyō shite imasu.' }),

  // ── Nombres & heure ──────────────────────────────────────────
  P('n1', 'c', {
    fr: 'Quelle heure est-il ?', en: 'What time is it?', ar: 'كم الساعة؟',
    es: '¿Qué hora es?', it: 'Che ore sono?', pt: 'Que horas são?',
    zh: '现在几点？', ja: '今、何時ですか？',
  }, { ar: 'kam as-sāʿa?', zh: 'xiànzài jǐ diǎn?', ja: 'ima, nan-ji desu ka?' }),
  P('n2', 'l', {
    fr: 'Il est trois heures et demie.', en: "It's half past three.", ar: 'الساعة الثالثة والنصف.',
    es: 'Son las tres y media.', it: 'Sono le tre e mezza.', pt: 'São três e meia.',
    zh: '三点半。', ja: '三時半です。',
  }, { ar: 'as-sāʿa ath-thālitha wa-n-niṣf.', zh: 'sān diǎn bàn.', ja: 'san-ji han desu.' }),
  P('n3', 'l', {
    fr: 'Combien ça coûte ?', en: 'How much is it?', ar: 'كم الثمن؟',
    es: '¿Cuánto cuesta?', it: 'Quanto costa?', pt: 'Quanto custa?',
    zh: '多少钱？', ja: 'いくらですか？',
  }, { ar: 'kam ath-thaman?', zh: 'duōshao qián?', ja: 'ikura desu ka?' }),
  P('n4', 'c', {
    fr: 'Ça fait vingt euros.', en: "That's twenty euros.", ar: 'الثمن عشرون يورو.',
    es: 'Son veinte euros.', it: 'Sono venti euro.', pt: 'São vinte euros.',
    zh: '一共二十欧元。', ja: '二十ユーロです。',
  }, { ar: 'ath-thaman ʿishrūn yūrū.', zh: 'yígòng èrshí ōuyuán.', ja: 'nijū yūro desu.' }),
  P('n5', 'l', {
    fr: "J'ai rendez-vous lundi à dix heures.", en: 'I have an appointment on Monday at ten.', ar: 'عندي موعد يوم الاثنين في الساعة العاشرة.',
    es: 'Tengo una cita el lunes a las diez.', it: 'Ho un appuntamento lunedì alle dieci.', pt: 'Tenho uma marcação na segunda-feira às dez.',
    zh: '我星期一十点有预约。', ja: '月曜日の十時に予約があります。',
  }, { ar: 'ʿindī mawʿid yawm al-ithnayn fī as-sāʿa al-ʿāshira.', zh: 'wǒ xīngqīyī shí diǎn yǒu yùyuē.',
    ja: 'getsuyōbi no jū-ji ni yoyaku ga arimasu.' }),
  P('n6', 'c', {
    fr: 'Parfait, à lundi !', en: 'Perfect, see you on Monday!', ar: 'ممتاز، إلى اللقاء يوم الاثنين!',
    es: '¡Perfecto, hasta el lunes!', it: 'Perfetto, a lunedì!', pt: 'Perfeito, até segunda!',
    zh: '好的，星期一见！', ja: '分かりました。では、月曜日に！',
  }, { ar: 'mumtāz, ilā al-liqāʾ yawm al-ithnayn!', zh: 'hǎo de, xīngqīyī jiàn!', ja: 'wakarimashita. dewa, getsuyōbi ni!' }),

  // ── Au café ──────────────────────────────────────────────────
  P('f1', 'c', {
    fr: "Bonjour, qu'est-ce que vous désirez ?", en: 'Hello, what would you like?', ar: 'مرحبًا، ماذا تطلب؟',
    es: 'Hola, ¿qué desea?', it: 'Buongiorno, cosa desidera?', pt: 'Olá, o que deseja?',
    zh: '您好，您要点什么？', ja: 'いらっしゃいませ。ご注文は何になさいますか？',
  }, { ar: 'marḥaban, mādhā taṭlub?', zh: 'nín hǎo, nín yào diǎn shénme?', ja: 'irasshaimase. go-chūmon wa nani ni nasaimasu ka?' }),
  P('f2', 'l', {
    fr: "Un café et un jus d'orange, s'il vous plaît.", en: 'A coffee and an orange juice, please.', ar: 'قهوة وعصير برتقال من فضلك.',
    es: 'Un café y un zumo de naranja, por favor.', it: "Un caffè e una spremuta d'arancia, per favore.", pt: 'Um café e um sumo de laranja, por favor.',
    zh: '请给我一杯咖啡和一杯橙汁。', ja: 'コーヒーとオレンジジュースをお願いします。',
  }, { ar: 'qahwa wa-ʿaṣīr burtuqāl min faḍlik.', zh: 'qǐng gěi wǒ yì bēi kāfēi hé yì bēi chéngzhī.',
    ja: 'kōhī to orenji jūsu o onegai shimasu.' }),
  P('f3', 'c', {
    fr: 'Avec du sucre ?', en: 'With sugar?', ar: 'مع السكر؟',
    es: '¿Con azúcar?', it: 'Con zucchero?', pt: 'Com açúcar?',
    zh: '要加糖吗？', ja: 'お砂糖は入れますか？',
  }, { ar: 'maʿa as-sukkar?', zh: 'yào jiā táng ma?', ja: 'o-satō wa iremasu ka?' }),
  P('f4', 'l', {
    fr: 'Non, sans sucre, merci.', en: 'No, without sugar, thanks.', ar: 'لا، بدون سكر، شكرًا.',
    es: 'No, sin azúcar, gracias.', it: 'No, senza zucchero, grazie.', pt: 'Não, sem açúcar, obrigado.',
    zh: '不要糖，谢谢。', ja: 'いいえ、砂糖なしでお願いします。',
  }, { ar: 'lā, bidūn sukkar, shukran.', zh: 'bú yào táng, xièxie.', ja: 'iie, satō nashi de onegai shimasu.' }),
  P('f5', 'l', {
    fr: "L'addition, s'il vous plaît.", en: 'The bill, please.', ar: 'الحساب من فضلك.',
    es: 'La cuenta, por favor.', it: 'Il conto, per favore.', pt: 'A conta, por favor.',
    zh: '麻烦买单。', ja: 'お会計をお願いします。',
  }, { ar: 'al-ḥisāb min faḍlik.', zh: 'máfan mǎidān.', ja: 'o-kaikei o onegai shimasu.' }),
  P('f6', 'c', {
    fr: 'Voilà. Bonne journée !', en: 'Here you are. Have a nice day!', ar: 'تفضل. يومًا سعيدًا!',
    es: 'Aquí tiene. ¡Que tenga un buen día!', it: 'Ecco a Lei. Buona giornata!', pt: 'Aqui tem. Tenha um bom dia!',
    zh: '给您。祝您愉快！', ja: 'どうぞ。良い一日を！',
  }, { ar: 'tafaḍḍal. yawman saʿīdan!', zh: 'gěi nín. zhù nín yúkuài!', ja: 'dōzo. yoi ichinichi o!' }),

  // ── Se déplacer ──────────────────────────────────────────────
  P('d1', 'l', {
    fr: 'Excusez-moi, où est la gare ?', en: 'Excuse me, where is the train station?', ar: 'عفوًا، أين محطة القطار؟',
    es: 'Perdone, ¿dónde está la estación de tren?', it: "Scusi, dov'è la stazione?", pt: 'Desculpe, onde fica a estação de comboios?',
    zh: '请问，火车站在哪儿？', ja: 'すみません、駅はどこですか？',
  }, { ar: 'ʿafwan, ayna maḥaṭṭat al-qiṭār?', zh: 'qǐngwèn, huǒchēzhàn zài nǎr?', ja: 'sumimasen, eki wa doko desu ka?' }),
  P('d2', 'c', {
    fr: 'Allez tout droit, puis tournez à gauche.', en: 'Go straight ahead, then turn left.', ar: 'امشِ إلى الأمام، ثم انعطف يسارًا.',
    es: 'Siga recto y luego gire a la izquierda.', it: 'Vada dritto, poi giri a sinistra.', pt: 'Siga em frente e depois vire à esquerda.',
    zh: '一直走，然后左转。', ja: 'まっすぐ行って、左に曲がってください。',
  }, { ar: 'imshi ilā al-amām, thumma inʿaṭif yasāran.', zh: 'yìzhí zǒu, ránhòu zuǒ zhuǎn.',
    ja: 'massugu itte, hidari ni magatte kudasai.' }),
  P('d3', 'l', {
    fr: "C'est loin d'ici ?", en: 'Is it far from here?', ar: 'هل هي بعيدة من هنا؟',
    es: '¿Está lejos de aquí?', it: 'È lontano da qui?', pt: 'Fica longe daqui?',
    zh: '离这儿远吗？', ja: 'ここから遠いですか？',
  }, { ar: 'hal hiya baʿīda min hunā?', zh: 'lí zhèr yuǎn ma?', ja: 'koko kara tōi desu ka?' }),
  P('d4', 'c', {
    fr: "Non, c'est à cinq minutes à pied.", en: "No, it's five minutes on foot.", ar: 'لا، على بعد خمس دقائق سيرًا على الأقدام.',
    es: 'No, está a cinco minutos a pie.', it: 'No, è a cinque minuti a piedi.', pt: 'Não, fica a cinco minutos a pé.',
    zh: '不远，走路五分钟。', ja: 'いいえ、歩いて五分です。',
  }, { ar: 'lā, ʿalā buʿd khams daqāʾiq sayran ʿalā al-aqdām.', zh: 'bù yuǎn, zǒulù wǔ fēnzhōng.', ja: 'iie, aruite go-fun desu.' }),
  P('d5', 'l', {
    fr: 'Je peux prendre le bus ?', en: 'Can I take the bus?', ar: 'هل يمكنني ركوب الحافلة؟',
    es: '¿Puedo coger el autobús?', it: "Posso prendere l'autobus?", pt: 'Posso apanhar o autocarro?',
    zh: '我可以坐公交车吗？', ja: 'バスに乗れますか？',
  }, { ar: 'hal yumkinunī rukūb al-ḥāfila?', zh: 'wǒ kěyǐ zuò gōngjiāochē ma?', ja: 'basu ni noremasu ka?' }),
  P('d6', 'c', {
    fr: "Oui, le bus 12 s'arrête juste en face.", en: 'Yes, bus 12 stops right across the street.', ar: 'نعم، الحافلة رقم 12 تتوقف في الجهة المقابلة.',
    es: 'Sí, el autobús 12 para justo enfrente.', it: "Sì, l'autobus 12 si ferma proprio di fronte.", pt: 'Sim, o autocarro 12 para mesmo em frente.',
    zh: '可以，12路车就在对面停。', ja: 'はい、12番のバスが向かいに止まります。',
  }, { ar: 'naʿam, al-ḥāfila raqm ithnā ʿashar tatawaqqaf fī al-jiha al-muqābila.', zh: 'kěyǐ, shí’èr lù chē jiù zài duìmiàn tíng.',
    ja: 'hai, jūni-ban no basu ga mukai ni tomarimasu.' }),

  // ── Couleurs & animaux (parcours enfants, accessible à tous) ──
  P('k1', 'c', {
    fr: 'Quelle est ta couleur préférée ?', en: "What's your favourite colour?", ar: 'ما لونك المفضل؟',
    es: '¿Cuál es tu color favorito?', it: 'Qual è il tuo colore preferito?', pt: 'Qual é a tua cor preferida?',
    zh: '你最喜欢什么颜色？', ja: '好きな色は何？',
  }, { ar: 'mā lawnuka al-mufaḍḍal?', zh: 'nǐ zuì xǐhuan shénme yánsè?', ja: 'suki na iro wa nani?' }),
  P('k2', 'l', {
    fr: "J'aime le rouge et le jaune.", en: 'I like red and yellow.', ar: 'أحب الأحمر والأصفر.',
    es: 'Me gustan el rojo y el amarillo.', it: 'Mi piacciono il rosso e il giallo.', pt: 'Gosto do vermelho e do amarelo.',
    zh: '我喜欢红色和黄色。', ja: '赤と黄色が好き。',
  }, { ar: 'uḥibbu al-aḥmar wa-l-aṣfar.', zh: 'wǒ xǐhuan hóngsè hé huángsè.', ja: 'aka to kiiro ga suki.' }),
  P('k3', 'c', {
    fr: 'Tu as un animal ?', en: 'Do you have a pet?', ar: 'هل عندك حيوان أليف؟',
    es: '¿Tienes una mascota?', it: 'Hai un animale domestico?', pt: 'Tens um animal de estimação?',
    zh: '你有宠物吗？', ja: 'ペットを飼ってる？',
  }, { ar: 'hal ʿindaka ḥayawān alīf?', zh: 'nǐ yǒu chǒngwù ma?', ja: 'petto o katteru?' }),
  P('k4', 'l', {
    fr: "Oui, j'ai un chat qui s'appelle Mimi.", en: 'Yes, I have a cat called Mimi.', ar: 'نعم، عندي قطة اسمها ميمي.',
    es: 'Sí, tengo un gato que se llama Mimi.', it: 'Sì, ho un gatto che si chiama Mimi.', pt: 'Sim, tenho um gato que se chama Mimi.',
    zh: '有，我有一只猫，叫咪咪。', ja: 'うん、ミミという猫がいるよ。',
  }, { ar: 'naʿam, ʿindī qiṭṭa ismuhā Mīmī.', zh: 'yǒu, wǒ yǒu yì zhī māo, jiào Mīmī.', ja: 'un, Mimi to iu neko ga iru yo.' }),
  P('k5', 'c', {
    fr: 'On joue ensemble ?', en: 'Shall we play together?', ar: 'هل نلعب معًا؟',
    es: '¿Jugamos juntos?', it: 'Giochiamo insieme?', pt: 'Vamos brincar juntos?',
    zh: '我们一起玩吧？', ja: '一緒に遊ぼうか？',
  }, { ar: 'hal nalʿabu maʿan?', zh: 'wǒmen yìqǐ wán ba?', ja: 'issho ni asobō ka?' }),
  P('k6', 'l', {
    fr: "Oui ! C'est génial !", en: "Yes! That's great!", ar: 'نعم! هذا رائع!',
    es: '¡Sí! ¡Qué bien!', it: 'Sì! Che bello!', pt: 'Sim! Que bom!',
    zh: '好啊！太棒了！', ja: 'うん！やったー！',
  }, { ar: 'naʿam! hādhā rāʾiʿ!', zh: 'hǎo a! tài bàng le!', ja: 'un! yattā!' }),
];
