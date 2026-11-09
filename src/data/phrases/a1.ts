import { P, Phrase } from './types';

// Niveau A1 + unité enfants. Formes au masculin par défaut quand la langue l'impose
// (le prénom de l'apprenant dans les dialogues est « Sami »).

export const A1: Phrase[] = [
  // ── Salutations ──────────────────────────────────────────────
  P('g1', 'c', {
    fr: 'Bonjour ! Comment allez-vous ?', en: 'Hello! How are you?', ar: 'مرحبًا! كيف حالك؟',
    es: '¡Hola! ¿Qué tal?', it: 'Buongiorno! Come sta?', pt: 'Olá! Como está?',
    zh: '你好！你好吗？', ja: 'こんにちは！お元気ですか？', ber: 'Azul! Mamk a tgit?',
    fa: 'سلام! حال شما چطور است؟', hi: 'नमस्ते! आप कैसे हैं?',
  }, { ar: 'marḥaban! kayfa ḥāluka?', zh: 'nǐ hǎo! nǐ hǎo ma?', ja: 'konnichiwa! o-genki desu ka?',
    fa: 'salâm! hâl-e shomâ chetor ast?', hi: 'namaste! āp kaise haĩ?' }),
  P('g2', 'l', {
    fr: 'Très bien, merci. Et vous ?', en: 'Very well, thank you. And you?', ar: 'بخير، شكرًا. وأنت؟',
    es: 'Muy bien, gracias. ¿Y usted?', it: 'Molto bene, grazie. E Lei?', pt: 'Muito bem, obrigado. E o senhor?',
    zh: '很好，谢谢。你呢？', ja: 'とても元気です、ありがとう。あなたは？', ber: 'Labas, tanmmirt. D kyyi?',
    fa: 'خیلی خوبم، ممنون. و شما؟', hi: 'बहुत अच्छा, धन्यवाद। और आप?',
  }, { ar: 'bikhayr, shukran. wa-anta?', zh: 'hěn hǎo, xièxie. nǐ ne?', ja: 'totemo genki desu, arigatō. anata wa?',
    fa: 'kheyli khubam, mamnun. va shomâ?', hi: 'bahut acchā, dhanyavād. aur āp?' }),
  P('g3', 'c', {
    fr: 'Bien, merci. Bienvenue !', en: 'Fine, thanks. Welcome!', ar: 'بخير، شكرًا. أهلًا وسهلًا!',
    es: 'Bien, gracias. ¡Bienvenido!', it: 'Bene, grazie. Benvenuto!', pt: 'Bem, obrigado. Bem-vindo!',
    zh: '我也很好，谢谢。欢迎！', ja: '元気です、ありがとう。ようこそ！', ber: 'Labas, tanmmirt. Ansuf!',
    fa: 'خوبم، ممنون. خوش آمدید!', hi: 'मैं भी ठीक हूँ, धन्यवाद। स्वागत है!',
  }, { ar: 'bikhayr, shukran. ahlan wa-sahlan!', zh: 'wǒ yě hěn hǎo, xièxie. huānyíng!', ja: 'genki desu, arigatō. yōkoso!',
    fa: 'khubam, mamnun. khosh âmadid!', hi: 'maĩ bhī ṭhīk hū̃, dhanyavād. svāgat hai!' }),
  P('g4', 'l', {
    fr: 'Merci beaucoup.', en: 'Thank you very much.', ar: 'شكرًا جزيلًا.',
    es: 'Muchas gracias.', it: 'Grazie mille.', pt: 'Muito obrigado.',
    zh: '非常感谢。', ja: 'どうもありがとうございます。', ber: 'Tanmmirt bahra.',
    fa: 'خیلی ممنون.', hi: 'बहुत-बहुत धन्यवाद।',
  }, { ar: 'shukran jazīlan.', zh: 'fēicháng gǎnxiè.', ja: 'dōmo arigatō gozaimasu.', fa: 'kheyli mamnun.', hi: 'bahut-bahut dhanyavād.' }),
  P('g5', 'c', {
    fr: 'Au revoir, à demain !', en: 'Goodbye, see you tomorrow!', ar: 'مع السلامة، إلى اللقاء غدًا!',
    es: '¡Adiós, hasta mañana!', it: 'Arrivederci, a domani!', pt: 'Adeus, até amanhã!',
    zh: '再见，明天见！', ja: 'さようなら、また明日！', ber: 'Ar timlilit, ar azekka!',
    fa: 'خداحافظ، تا فردا!', hi: 'अलविदा, कल मिलते हैं!',
  }, { ar: 'maʿa as-salāma, ilā al-liqāʾ ghadan!', zh: 'zàijiàn, míngtiān jiàn!', ja: 'sayōnara, mata ashita!',
    fa: 'khodâhâfez, tâ fardâ!', hi: 'alvidā, kal milte haĩ!' }),
  P('g6', 'l', {
    fr: 'Au revoir, bonne journée !', en: 'Goodbye, have a nice day!', ar: 'مع السلامة، يومًا سعيدًا!',
    es: 'Adiós, ¡que tenga un buen día!', it: 'Arrivederci, buona giornata!', pt: 'Adeus, tenha um bom dia!',
    zh: '再见，祝你今天愉快！', ja: 'さようなら、良い一日を！', ber: 'Ar timlilit, ass ifulkin!',
    fa: 'خداحافظ، روز خوبی داشته باشید!', hi: 'अलविदा, आपका दिन शुभ हो!',
  }, { ar: 'maʿa as-salāma, yawman saʿīdan!', zh: 'zàijiàn, zhù nǐ jīntiān yúkuài!', ja: 'sayōnara, yoi ichinichi o!',
    fa: 'khodâhâfez, ruz-e khubi dâshte bâshid!', hi: 'alvidā, āpkā din śubh ho!' }),

  // ── Se présenter ─────────────────────────────────────────────
  P('i1', 'c', {
    fr: 'Comment vous appelez-vous ?', en: "What's your name?", ar: 'ما اسمك؟',
    es: '¿Cómo se llama?', it: 'Come si chiama?', pt: 'Como se chama?',
    zh: '你叫什么名字？', ja: 'お名前は何ですか？', ber: 'Ma d isem nnk?',
    fa: 'اسم شما چیست؟', hi: 'आपका नाम क्या है?',
  }, { ar: 'mā ismuka?', zh: 'nǐ jiào shénme míngzi?', ja: 'o-namae wa nan desu ka?', fa: 'esm-e shomâ chist?', hi: 'āpkā nām kyā hai?' }),
  P('i2', 'l', {
    fr: "Je m'appelle Sami.", en: 'My name is Sami.', ar: 'اسمي سامي.',
    es: 'Me llamo Sami.', it: 'Mi chiamo Sami.', pt: 'Chamo-me Sami.',
    zh: '我叫萨米。', ja: 'サミです。', ber: 'Isem inu Sami.',
    fa: 'اسم من سامی است.', hi: 'मेरा नाम सामी है।',
  }, { ar: 'ismī Sāmī.', zh: 'wǒ jiào Sàmǐ.', ja: 'Sami desu.', fa: 'esm-e man Sâmi ast.', hi: 'merā nām Sāmī hai.' }),
  P('i3', 'c', {
    fr: "D'où venez-vous ?", en: 'Where are you from?', ar: 'من أين أنت؟',
    es: '¿De dónde es usted?', it: "Di dov'è Lei?", pt: 'De onde é?',
    zh: '你是哪国人？', ja: 'どちらから来ましたか？', ber: 'Manis d tkkit?',
    fa: 'اهل کجا هستید؟', hi: 'आप कहाँ से हैं?',
  }, { ar: 'min ayna anta?', zh: 'nǐ shì nǎ guó rén?', ja: 'dochira kara kimashita ka?', fa: 'ahl-e kojâ hastid?', hi: 'āp kahā̃ se haĩ?' }),
  P('i4', 'l', {
    fr: "Je viens du Maroc, j'habite à Agadir.", en: "I'm from Morocco; I live in Agadir.", ar: 'أنا من المغرب، وأسكن في أكادير.',
    es: 'Soy de Marruecos, vivo en Agadir.', it: 'Vengo dal Marocco, abito ad Agadir.', pt: 'Sou de Marrocos, vivo em Agadir.',
    zh: '我来自摩洛哥，住在阿加迪尔。', ja: 'モロッコ出身で、アガディールに住んでいます。', ber: 'Nkki zg Lmɣrib, zdɣɣ g Agadir.',
    fa: 'من اهل مراکش هستم و در آگادیر زندگی می‌کنم.', hi: 'मैं मोरक्को से हूँ और अगादीर में रहता हूँ।',
  }, { ar: 'anā min al-maghrib, wa-askunu fī Agādīr.', zh: 'wǒ láizì Mòluògē, zhù zài Ājiādí’ěr.',
    ja: 'Morokko shusshin de, Agadīru ni sunde imasu.', fa: 'man ahl-e Marâkesh hastam va dar Âgâdir zendegi mikonam.',
    hi: 'maĩ Morakko se hū̃ aur Agādīr mẽ rahtā hū̃.' }),
  P('i5', 'c', {
    fr: 'Quelles langues parlez-vous ?', en: 'Which languages do you speak?', ar: 'ما اللغات التي تتكلمها؟',
    es: '¿Qué idiomas habla?', it: 'Quali lingue parla?', pt: 'Que línguas fala?',
    zh: '你会说什么语言？', ja: '何語を話しますか？', ber: 'Man tutlayin a ttsawalt?',
    fa: 'به چه زبان‌هایی صحبت می‌کنید؟', hi: 'आप कौन-सी भाषाएँ बोलते हैं?',
  }, { ar: 'mā al-lughāt allatī tatakallamuhā?', zh: 'nǐ huì shuō shénme yǔyán?', ja: 'nani-go o hanashimasu ka?',
    fa: 'be che zabân-hâyi sohbat mikonid?', hi: 'āp kaun-sī bhāṣāẽ bolte haĩ?' }),
  P('i6', 'l', {
    fr: "Je parle arabe et français, et j'apprends le japonais.", en: "I speak Arabic and French, and I'm learning Japanese.",
    ar: 'أتكلم العربية والفرنسية، وأتعلم اليابانية.', es: 'Hablo árabe y francés, y estoy aprendiendo japonés.',
    it: 'Parlo arabo e francese, e sto imparando il giapponese.', pt: 'Falo árabe e francês, e estou a aprender japonês.',
    zh: '我会说阿拉伯语和法语，正在学日语。', ja: 'アラビア語とフランス語を話します。今、日本語を勉強しています。',
    ber: 'Ttsawalɣ taɛrabt d tafransist, ar lmmdɣ tajabunit.',
    fa: 'عربی و فرانسوی صحبت می‌کنم و ژاپنی یاد می‌گیرم.', hi: 'मैं अरबी और फ़्रेंच बोलता हूँ, और जापानी सीख रहा हूँ।',
  }, { ar: 'atakallamu al-ʿarabiyya wa-l-faransiyya, wa-ataʿallamu al-yābāniyya.',
    zh: 'wǒ huì shuō Ālābóyǔ hé Fǎyǔ, zhèngzài xué Rìyǔ.',
    ja: 'Arabia-go to Furansu-go o hanashimasu. ima, Nihon-go o benkyō shite imasu.',
    fa: 'arabi va farânsavi sohbat mikonam va zhâponi yâd migiram.', hi: 'maĩ arabī aur frẽc boltā hū̃, aur jāpānī sīkh rahā hū̃.' }),

  // ── Nombres & heure ──────────────────────────────────────────
  P('n1', 'c', {
    fr: 'Quelle heure est-il ?', en: 'What time is it?', ar: 'كم الساعة؟',
    es: '¿Qué hora es?', it: 'Che ore sono?', pt: 'Que horas são?',
    zh: '现在几点？', ja: '今、何時ですか？', ber: 'Mnck a tga tasaɛt?',
    fa: 'ساعت چند است؟', hi: 'कितने बजे हैं?',
  }, { ar: 'kam as-sāʿa?', zh: 'xiànzài jǐ diǎn?', ja: 'ima, nan-ji desu ka?', fa: "sâ'at chand ast?", hi: 'kitne baje haĩ?' }),
  P('n2', 'l', {
    fr: 'Il est trois heures et demie.', en: "It's half past three.", ar: 'الساعة الثالثة والنصف.',
    es: 'Son las tres y media.', it: 'Sono le tre e mezza.', pt: 'São três e meia.',
    zh: '三点半。', ja: '三時半です。', ber: 'Tga tasaɛt kraḍ d uzgn.',
    fa: 'ساعت سه و نیم است.', hi: 'साढ़े तीन बजे हैं।',
  }, { ar: 'as-sāʿa ath-thālitha wa-n-niṣf.', zh: 'sān diǎn bàn.', ja: 'san-ji han desu.', fa: "sâ'at se va nim ast.", hi: 'sāṛhe tīn baje haĩ.' }),
  P('n3', 'l', {
    fr: 'Combien ça coûte ?', en: 'How much is it?', ar: 'كم الثمن؟',
    es: '¿Cuánto cuesta?', it: 'Quanto costa?', pt: 'Quanto custa?',
    zh: '多少钱？', ja: 'いくらですか？', ber: 'Mnck ayd isswa?',
    fa: 'قیمتش چند است؟', hi: 'यह कितने का है?',
  }, { ar: 'kam ath-thaman?', zh: 'duōshao qián?', ja: 'ikura desu ka?', fa: 'qeymatash chand ast?', hi: 'yah kitne kā hai?' }),
  P('n4', 'c', {
    fr: 'Ça fait vingt euros.', en: "That's twenty euros.", ar: 'الثمن عشرون يورو.',
    es: 'Son veinte euros.', it: 'Sono venti euro.', pt: 'São vinte euros.',
    zh: '二十欧元。', ja: '二十ユーロです。', ber: 'Ɛacrin n uru.',
    fa: 'بیست یورو می‌شود.', hi: 'बीस यूरो हुए।',
  }, { ar: 'ath-thaman ʿishrūn yūrū.', zh: 'èrshí ōuyuán.', ja: 'nijū yūro desu.', fa: 'bist yuro mishavad.', hi: 'bīs yūro hue.' }),
  P('n5', 'l', {
    fr: "J'ai rendez-vous lundi à dix heures.", en: 'I have an appointment on Monday at ten.', ar: 'عندي موعد يوم الاثنين في الساعة العاشرة.',
    es: 'Tengo una cita el lunes a las diez.', it: 'Ho un appuntamento lunedì alle dieci.', pt: 'Tenho uma marcação na segunda-feira às dez.',
    zh: '我星期一十点有预约。', ja: '月曜日の十時に予約があります。', ber: 'Ɣuri lmuɛad ass n aynas g tasaɛt tis mraw.',
    fa: 'دوشنبه ساعت ده قرار دارم.', hi: 'सोमवार को दस बजे मेरी अपॉइंटमेंट है।',
  }, { ar: 'ʿindī mawʿid yawm al-ithnayn fī as-sāʿa al-ʿāshira.', zh: 'wǒ xīngqīyī shí diǎn yǒu yùyuē.',
    ja: 'getsuyōbi no jū-ji ni yoyaku ga arimasu.', fa: "doshanbe sâ'at-e dah qarâr dâram.", hi: 'somvār ko das baje merī apŏiṇṭmeṇṭ hai.' }),
  P('n6', 'c', {
    fr: 'Parfait, à lundi !', en: 'Perfect, see you on Monday!', ar: 'ممتاز، إلى اللقاء يوم الاثنين!',
    es: '¡Perfecto, hasta el lunes!', it: 'Perfetto, a lunedì!', pt: 'Perfeito, até segunda!',
    zh: '好的，星期一见！', ja: '分かりました。では、月曜日に！', ber: 'Ifulki, ar aynas!',
    fa: 'عالی است، تا دوشنبه!', hi: 'बढ़िया, सोमवार को मिलते हैं!',
  }, { ar: 'mumtāz, ilā al-liqāʾ yawm al-ithnayn!', zh: 'hǎo de, xīngqīyī jiàn!', ja: 'wakarimashita. dewa, getsuyōbi ni!',
    fa: 'âli ast, tâ doshanbe!', hi: 'baṛhiyā, somvār ko milte haĩ!' }),

  // ── Au café ──────────────────────────────────────────────────
  P('f1', 'c', {
    fr: "Bonjour, qu'est-ce que vous désirez ?", en: 'Hello, what would you like?', ar: 'مرحبًا، ماذا تريد؟',
    es: 'Hola, ¿qué desea?', it: 'Buongiorno, cosa desidera?', pt: 'Olá, o que deseja?',
    zh: '您好，您要点什么？', ja: 'いらっしゃいませ。ご注文は何になさいますか？', ber: 'Azul, ma trit?',
    fa: 'سلام، چه میل دارید؟', hi: 'नमस्ते, आप क्या लेंगे?',
  }, { ar: 'marḥaban, mādhā turīd?', zh: 'nín hǎo, nín yào diǎn shénme?', ja: 'irasshaimase. go-chūmon wa nani ni nasaimasu ka?',
    fa: 'salâm, che meyl dârid?', hi: 'namaste, āp kyā lẽge?' }),
  P('f2', 'l', {
    fr: "Un café et un jus d'orange, s'il vous plaît.", en: 'A coffee and an orange juice, please.', ar: 'قهوة وعصير برتقال من فضلك.',
    es: 'Un café y un zumo de naranja, por favor.', it: "Un caffè e una spremuta d'arancia, per favore.", pt: 'Um café e um sumo de laranja, por favor.',
    zh: '请给我一杯咖啡和一杯橙汁。', ja: 'コーヒーとオレンジジュースをお願いします。', ber: 'Yan lqhwa d yan lɛṣir n tlimunt, ttxil.',
    fa: 'یک قهوه و یک آب‌پرتقال، لطفاً.', hi: 'एक कॉफ़ी और एक संतरे का जूस, कृपया।',
  }, { ar: 'qahwa wa-ʿaṣīr burtuqāl min faḍlik.', zh: 'qǐng gěi wǒ yì bēi kāfēi hé yì bēi chéngzhī.',
    ja: 'kōhī to orenji jūsu o onegai shimasu.', fa: 'yek qahve va yek âb-porteqâl, lotfan.', hi: 'ek kŏfī aur ek santare kā jūs, kṛpayā.' }),
  P('f3', 'c', {
    fr: 'Avec du sucre ?', en: 'With sugar?', ar: 'مع السكر؟',
    es: '¿Con azúcar?', it: 'Con zucchero?', pt: 'Com açúcar?',
    zh: '要加糖吗？', ja: 'お砂糖は入れますか？', ber: 'S ssukkar?',
    fa: 'با شکر؟', hi: 'चीनी के साथ?',
  }, { ar: 'maʿa as-sukkar?', zh: 'yào jiā táng ma?', ja: 'o-satō wa iremasu ka?', fa: 'bâ shekar?', hi: 'cīnī ke sāth?' }),
  P('f4', 'l', {
    fr: 'Non, sans sucre, merci.', en: 'No, without sugar, thanks.', ar: 'لا، بدون سكر، شكرًا.',
    es: 'No, sin azúcar, gracias.', it: 'No, senza zucchero, grazie.', pt: 'Não, sem açúcar, obrigado.',
    zh: '不要糖，谢谢。', ja: 'いいえ、砂糖なしでお願いします。', ber: 'Uhu, bla ssukkar, tanmmirt.',
    fa: 'نه، بدون شکر، ممنون.', hi: 'नहीं, बिना चीनी के, धन्यवाद।',
  }, { ar: 'lā, bidūn sukkar, shukran.', zh: 'bú yào táng, xièxie.', ja: 'iie, satō nashi de onegai shimasu.',
    fa: 'na, bedun-e shekar, mamnun.', hi: 'nahī̃, binā cīnī ke, dhanyavād.' }),
  P('f5', 'l', {
    fr: "L'addition, s'il vous plaît.", en: 'The bill, please.', ar: 'الحساب من فضلك.',
    es: 'La cuenta, por favor.', it: 'Il conto, per favore.', pt: 'A conta, por favor.',
    zh: '请结账。', ja: 'お会計をお願いします。', ber: 'Lḥsab, ttxil.',
    fa: 'صورت‌حساب، لطفاً.', hi: 'बिल दीजिए, कृपया।',
  }, { ar: 'al-ḥisāb min faḍlik.', zh: 'qǐng jiézhàng.', ja: 'o-kaikei o onegai shimasu.', fa: 'surat-hesâb, lotfan.', hi: 'bil dījie, kṛpayā.' }),
  P('f6', 'c', {
    fr: 'Voilà. Bonne journée !', en: 'Here you are. Have a nice day!', ar: 'تفضل. يومًا سعيدًا!',
    es: 'Aquí tiene. ¡Que tenga un buen día!', it: 'Ecco a Lei. Buona giornata!', pt: 'Aqui tem. Tenha um bom dia!',
    zh: '给您。祝您愉快！', ja: 'どうぞ。良い一日を！', ber: 'Ha t. Ass ifulkin!',
    fa: 'بفرمایید. روز خوبی داشته باشید!', hi: 'यह लीजिए। आपका दिन शुभ हो!',
  }, { ar: 'tafaḍḍal. yawman saʿīdan!', zh: 'gěi nín. zhù nín yúkuài!', ja: 'dōzo. yoi ichinichi o!',
    fa: 'befarmâyid. ruz-e khubi dâshte bâshid!', hi: 'yah lījie. āpkā din śubh ho!' }),

  // ── Se déplacer ──────────────────────────────────────────────
  P('d1', 'l', {
    fr: 'Excusez-moi, où est la gare ?', en: 'Excuse me, where is the train station?', ar: 'عفوًا، أين محطة القطار؟',
    es: 'Perdone, ¿dónde está la estación de tren?', it: "Scusi, dov'è la stazione?", pt: 'Desculpe, onde fica a estação de comboios?',
    zh: '请问，火车站在哪儿？', ja: 'すみません、駅はどこですか？', ber: 'Smḥ iyi, mani tlla lgar?',
    fa: 'ببخشید، ایستگاه قطار کجاست؟', hi: 'माफ़ कीजिए, रेलवे स्टेशन कहाँ है?',
  }, { ar: 'ʿafwan, ayna maḥaṭṭat al-qiṭār?', zh: 'qǐngwèn, huǒchēzhàn zài nǎr?', ja: 'sumimasen, eki wa doko desu ka?',
    fa: 'bebakhshid, istgâh-e qatâr kojâst?', hi: 'māf kījie, relve sṭeśan kahā̃ hai?' }),
  P('d2', 'c', {
    fr: 'Allez tout droit, puis tournez à gauche.', en: 'Go straight ahead, then turn left.', ar: 'امشِ إلى الأمام، ثم انعطف يسارًا.',
    es: 'Siga recto y luego gire a la izquierda.', it: 'Vada dritto, poi giri a sinistra.', pt: 'Siga em frente e depois vire à esquerda.',
    zh: '一直走，然后左转。', ja: 'まっすぐ行って、左に曲がってください。', ber: 'Ddu nican, tɛddit s uzlmaḍ.',
    fa: 'مستقیم بروید، بعد به چپ بپیچید.', hi: 'सीधे जाइए, फिर बाएँ मुड़िए।',
  }, { ar: 'imshi ilā al-amām, thumma inʿaṭif yasāran.', zh: 'yìzhí zǒu, ránhòu zuǒ zhuǎn.',
    ja: 'massugu itte, hidari ni magatte kudasai.', fa: "mostaqim beravid, ba'd be chap bepichid.", hi: 'sīdhe jāie, phir bāẽ muṛie.' }),
  P('d3', 'l', {
    fr: "C'est loin d'ici ?", en: 'Is it far from here?', ar: 'هل هي بعيدة من هنا؟',
    es: '¿Está lejos de aquí?', it: 'È lontano da qui?', pt: 'Fica longe daqui?',
    zh: '离这儿远吗？', ja: 'ここから遠いですか？', ber: 'Is yaggug zɣ ɣid?',
    fa: 'از اینجا دور است؟', hi: 'क्या यह यहाँ से दूर है?',
  }, { ar: 'hal hiya baʿīda min hunā?', zh: 'lí zhèr yuǎn ma?', ja: 'koko kara tōi desu ka?', fa: 'az injâ dur ast?', hi: 'kyā yah yahā̃ se dūr hai?' }),
  P('d4', 'c', {
    fr: "Non, c'est à cinq minutes à pied.", en: "No, it's five minutes on foot.", ar: 'لا، على بعد خمس دقائق سيرًا على الأقدام.',
    es: 'No, está a cinco minutos a pie.', it: 'No, è a cinque minuti a piedi.', pt: 'Não, fica a cinco minutos a pé.',
    zh: '不远，走路五分钟。', ja: 'いいえ、歩いて五分です。', ber: 'Uhu, smmus n tusdatin s uḍar.',
    fa: 'نه، پنج دقیقه پیاده است.', hi: 'नहीं, पैदल पाँच मिनट है।',
  }, { ar: 'lā, ʿalā buʿd khams daqāʾiq sayran ʿalā al-aqdām.', zh: 'bù yuǎn, zǒulù wǔ fēnzhōng.', ja: 'iie, aruite go-fun desu.',
    fa: 'na, panj daqiqe piyâde ast.', hi: 'nahī̃, paidal pā̃c minaṭ hai.' }),
  P('d5', 'l', {
    fr: 'Je peux prendre le bus ?', en: 'Can I take the bus?', ar: 'هل يمكنني ركوب الحافلة؟',
    es: '¿Puedo coger el autobús?', it: "Posso prendere l'autobus?", pt: 'Posso apanhar o autocarro?',
    zh: '我可以坐公交车吗？', ja: 'バスに乗れますか？', ber: 'Is zḍarɣ ad ddu s ṭṭubis?',
    fa: 'می‌توانم با اتوبوس بروم؟', hi: 'क्या मैं बस ले सकता हूँ?',
  }, { ar: 'hal yumkinunī rukūb al-ḥāfila?', zh: 'wǒ kěyǐ zuò gōngjiāochē ma?', ja: 'basu ni noremasu ka?',
    fa: 'mitavânam bâ otobus beravam?', hi: 'kyā maĩ bas le saktā hū̃?' }),
  P('d6', 'c', {
    fr: "Oui, le bus 12 s'arrête juste en face.", en: 'Yes, bus 12 stops right across the street.', ar: 'نعم، الحافلة رقم 12 تتوقف في الجهة المقابلة.',
    es: 'Sí, el autobús 12 para justo enfrente.', it: "Sì, l'autobus 12 si ferma proprio di fronte.", pt: 'Sim, o autocarro 12 para mesmo em frente.',
    zh: '可以，12路车就在对面停。', ja: 'はい、12番のバスが向かいに止まります。', ber: 'Yah, ṭṭubis 12 ibedd ɣ tama ad.',
    fa: 'بله، اتوبوس ۱۲ درست روبه‌رو می‌ایستد.', hi: 'हाँ, बस नंबर 12 ठीक सामने रुकती है।',
  }, { ar: 'naʿam, al-ḥāfila raqm ithnā ʿashar tatawaqqaf fī al-jiha al-muqābila.', zh: 'kěyǐ, shí’èr lù chē jiù zài duìmiàn tíng.',
    ja: 'hai, jūni-ban no basu ga mukai ni tomarimasu.', fa: 'bale, otobus-e davâzdah dorost ruberu mi-istad.', hi: 'hā̃, bas nambar bārah ṭhīk sāmne ruktī hai.' }),

  // ── Couleurs & animaux (parcours enfants, accessible à tous) ──
  P('k1', 'c', {
    fr: 'Quelle est ta couleur préférée ?', en: "What's your favourite colour?", ar: 'ما لونك المفضل؟',
    es: '¿Cuál es tu color favorito?', it: 'Qual è il tuo colore preferito?', pt: 'Qual é a tua cor preferida?',
    zh: '你最喜欢什么颜色？', ja: '好きな色は何？', ber: 'Man ini ayd tḥmmlt?',
    fa: 'رنگ مورد علاقه‌ات چیست؟', hi: 'तुम्हारा पसंदीदा रंग कौन-सा है?',
  }, { ar: 'mā lawnuka al-mufaḍḍal?', zh: 'nǐ zuì xǐhuan shénme yánsè?', ja: 'suki na iro wa nani?',
    fa: "rang-e mored-e alâqe-at chist?", hi: 'tumhārā pasandīdā raṅg kaun-sā hai?' }),
  P('k2', 'l', {
    fr: "J'aime le rouge et le jaune.", en: 'I like red and yellow.', ar: 'أحب الأحمر والأصفر.',
    es: 'Me gustan el rojo y el amarillo.', it: 'Mi piacciono il rosso e il giallo.', pt: 'Gosto do vermelho e do amarelo.',
    zh: '我喜欢红色和黄色。', ja: '赤と黄色が好き。', ber: 'Ḥmmlɣ azggaɣ d uwraɣ.',
    fa: 'قرمز و زرد را دوست دارم.', hi: 'मुझे लाल और पीला रंग पसंद है।',
  }, { ar: 'uḥibbu al-aḥmar wa-l-aṣfar.', zh: 'wǒ xǐhuan hóngsè hé huángsè.', ja: 'aka to kiiro ga suki.',
    fa: 'qermez va zard râ dust dâram.', hi: 'mujhe lāl aur pīlā raṅg pasand hai.' }),
  P('k3', 'c', {
    fr: 'Tu as un animal ?', en: 'Do you have a pet?', ar: 'هل عندك حيوان أليف؟',
    es: '¿Tienes una mascota?', it: 'Hai un animale domestico?', pt: 'Tens um animal de estimação?',
    zh: '你有宠物吗？', ja: 'ペットを飼ってる？', ber: 'Is ɣurk yan umudar?',
    fa: 'حیوان خانگی داری؟', hi: 'क्या तुम्हारे पास कोई पालतू जानवर है?',
  }, { ar: 'hal ʿindaka ḥayawān alīf?', zh: 'nǐ yǒu chǒngwù ma?', ja: 'petto o katteru?', fa: 'heyvân-e khânegi dâri?', hi: 'kyā tumhāre pās koī pāltū jānvar hai?' }),
  P('k4', 'l', {
    fr: "Oui, j'ai un chat qui s'appelle Mimi.", en: 'Yes, I have a cat called Mimi.', ar: 'نعم، عندي قطة اسمها ميمي.',
    es: 'Sí, tengo un gato que se llama Mimi.', it: 'Sì, ho un gatto che si chiama Mimi.', pt: 'Sim, tenho um gato que se chama Mimi.',
    zh: '有，我有一只猫，叫咪咪。', ja: 'うん、ミミという猫がいるよ。', ber: 'Yah, ɣuri yan umuc, isem nns Mimi.',
    fa: 'بله، یک گربه دارم به اسم میمی.', hi: 'हाँ, मेरे पास एक बिल्ली है, उसका नाम मिमी है।',
  }, { ar: 'naʿam, ʿindī qiṭṭa ismuhā Mīmī.', zh: 'yǒu, wǒ yǒu yì zhī māo, jiào Mīmī.', ja: 'un, Mimi to iu neko ga iru yo.',
    fa: 'bale, yek gorbe dâram be esm-e Mimi.', hi: 'hā̃, mere pās ek billī hai, uskā nām Mimī hai.' }),
  P('k5', 'c', {
    fr: 'On joue ensemble ?', en: 'Shall we play together?', ar: 'هل نلعب معًا؟',
    es: '¿Jugamos juntos?', it: 'Giochiamo insieme?', pt: 'Vamos brincar juntos?',
    zh: '我们一起玩吧？', ja: '一緒に遊ぼうか？', ber: 'Is ad nurar s sin?',
    fa: 'با هم بازی کنیم؟', hi: 'चलो साथ में खेलें?',
  }, { ar: 'hal nalʿabu maʿan?', zh: 'wǒmen yìqǐ wán ba?', ja: 'issho ni asobō ka?', fa: 'bâ ham bâzi konim?', hi: 'calo sāth mẽ khelẽ?' }),
  P('k6', 'l', {
    fr: "Oui ! C'est génial !", en: "Yes! That's great!", ar: 'نعم! هذا رائع!',
    es: '¡Sí! ¡Qué bien!', it: 'Sì! Che bello!', pt: 'Sim! Que bom!',
    zh: '好啊！太棒了！', ja: 'うん！やったー！', ber: 'Yah! Ifulki bahra!',
    fa: 'آره! عالیه!', hi: 'हाँ! बहुत बढ़िया!',
  }, { ar: 'naʿam! hādhā rāʾiʿ!', zh: 'hǎo a! tài bàng le!', ja: 'un! yattā!', fa: 'âre! âliye!', hi: 'hā̃! bahut baṛhiyā!' }),
];
