import { P, Phrase } from './types';

// Niveaux A2 et B1. Translittération de l'arabe fournie jusqu'en A2 ;
// pinyin et rōmaji à tous les niveaux.
export const A2: Phrase[] = [
  // ── Faire des achats ─────────────────────────────────────────
  P('s1', 'c', {
    fr: 'Je peux vous aider ?', en: 'Can I help you?', ar: 'هل يمكنني مساعدتك؟',
    es: '¿Puedo ayudarle?', it: 'Posso aiutarLa?', pt: 'Posso ajudá-lo?',
    zh: '有什么可以帮您的吗？', ja: '何かお探しですか？',
  }, { ar: 'hal yumkinunī musāʿadatuka?', zh: 'yǒu shénme kěyǐ bāng nín de ma?', ja: 'nanika o-sagashi desu ka?' }),
  P('s2', 'l', {
    fr: "Oui, je cherche une veste pour l'hiver.", en: "Yes, I'm looking for a winter jacket.", ar: 'نعم، أبحث عن سترة للشتاء.',
    es: 'Sí, busco una chaqueta para el invierno.', it: "Sì, cerco una giacca per l'inverno.", pt: 'Sim, procuro um casaco para o inverno.',
    zh: '是的，我想买一件冬天的外套。', ja: 'はい、冬用のジャケットを探しています。',
  }, { ar: 'naʿam, abḥathu ʿan sutra li-sh-shitāʾ.', zh: 'shì de, wǒ xiǎng mǎi yí jiàn dōngtiān de wàitào.', ja: 'hai, fuyu-yō no jaketto o sagashite imasu.' }),
  P('s3', 'c', {
    fr: 'Quelle taille faites-vous ?', en: 'What size are you?', ar: 'ما مقاسك؟',
    es: '¿Qué talla usa?', it: 'Che taglia porta?', pt: 'Que tamanho veste?',
    zh: '您穿多大号？', ja: 'サイズはいくつですか？',
  }, { ar: 'mā maqāsuka?', zh: 'nín chuān duō dà hào?', ja: 'saizu wa ikutsu desu ka?' }),
  P('s4', 'l', {
    fr: "Du M, mais je voudrais l'essayer.", en: "Medium, but I'd like to try it on.", ar: 'مقاس متوسط، لكن أريد أن أجربها.',
    es: 'Una M, pero me gustaría probármela.', it: 'Una M, ma vorrei provarla.', pt: 'M, mas gostaria de o experimentar.',
    zh: '中号，不过我想试一下。', ja: 'Mサイズですが、試着してもいいですか？',
  }, { ar: 'maqās mutawassiṭ, lākin urīdu an ujarribahā.', zh: 'zhōng hào, búguò wǒ xiǎng shì yíxià.', ja: 'emu saizu desu ga, shichaku shite mo ii desu ka?' }),
  P('s5', 'c', {
    fr: 'Bien sûr, les cabines sont au fond.', en: 'Of course, the fitting rooms are at the back.', ar: 'طبعًا، غرف القياس في الخلف.',
    es: 'Claro, los probadores están al fondo.', it: 'Certo, i camerini sono in fondo.', pt: 'Claro, os provadores ficam ao fundo.',
    zh: '当然，试衣间在里面。', ja: 'もちろんです。試着室は奥にあります。',
  }, { ar: 'ṭabʿan, ghuraf al-qiyās fī al-khalf.', zh: 'dāngrán, shìyījiān zài lǐmiàn.', ja: 'mochiron desu. shichakushitsu wa oku ni arimasu.' }),
  P('s6', 'l', {
    fr: 'Elle me va bien. Je peux payer par carte ?', en: 'It fits me well. Can I pay by card?', ar: 'إنها مناسبة لي. هل يمكنني الدفع بالبطاقة؟',
    es: 'Me queda bien. ¿Puedo pagar con tarjeta?', it: 'Mi sta bene. Posso pagare con la carta?', pt: 'Fica-me bem. Posso pagar com cartão?',
    zh: '很合身。可以刷卡吗？', ja: 'ぴったりです。カードで払えますか？',
  }, { ar: 'innahā munāsiba lī. hal yumkinunī ad-dafʿ bi-l-biṭāqa?', zh: 'hěn héshēn. kěyǐ shuākǎ ma?', ja: 'pittari desu. kādo de haraemasu ka?' }),

  // ── Ma journée ───────────────────────────────────────────────
  P('r1', 'c', {
    fr: 'À quelle heure vous levez-vous ?', en: 'What time do you get up?', ar: 'متى تستيقظ؟',
    es: '¿A qué hora se levanta?', it: 'A che ora si alza?', pt: 'A que horas se levanta?',
    zh: '你每天几点起床？', ja: '毎朝何時に起きますか？',
  }, { ar: 'matā tastayqiẓ?', zh: 'nǐ měitiān jǐ diǎn qǐchuáng?', ja: 'maiasa nan-ji ni okimasu ka?' }),
  P('r2', 'l', {
    fr: 'Je me lève à sept heures et je prends le petit-déjeuner.', en: 'I get up at seven and have breakfast.', ar: 'أستيقظ في السابعة وأتناول الفطور.',
    es: 'Me levanto a las siete y desayuno.', it: 'Mi alzo alle sette e faccio colazione.', pt: 'Levanto-me às sete e tomo o pequeno-almoço.',
    zh: '我七点起床，然后吃早饭。', ja: '七時に起きて、朝ご飯を食べます。',
  }, { ar: 'astayqiẓu fī as-sābiʿa wa-atanāwalu al-fuṭūr.', zh: 'wǒ qī diǎn qǐchuáng, ránhòu chī zǎofàn.', ja: 'shichi-ji ni okite, asagohan o tabemasu.' }),
  P('r3', 'c', {
    fr: 'Comment allez-vous au travail ?', en: 'How do you get to work?', ar: 'كيف تذهب إلى العمل؟',
    es: '¿Cómo va al trabajo?', it: 'Come va al lavoro?', pt: 'Como vai para o trabalho?',
    zh: '你怎么去上班？', ja: 'どうやって会社に行きますか？',
  }, { ar: 'kayfa tadhhabu ilā al-ʿamal?', zh: 'nǐ zěnme qù shàngbān?', ja: 'dō yatte kaisha ni ikimasu ka?' }),
  P('r4', 'l', {
    fr: 'En tramway ; le trajet dure vingt minutes.', en: 'By tram; the journey takes twenty minutes.', ar: 'بالترام، وتستغرق الرحلة عشرين دقيقة.',
    es: 'En tranvía; el trayecto dura veinte minutos.', it: 'In tram; il tragitto dura venti minuti.', pt: 'De elétrico; o trajeto demora vinte minutos.',
    zh: '坐有轨电车，路上要二十分钟。', ja: '路面電車で行きます。二十分かかります。',
  }, { ar: 'bi-t-trām, wa-tastaghriqu ar-riḥla ʿishrīn daqīqa.', zh: 'zuò yǒuguǐ diànchē, lùshang yào èrshí fēnzhōng.',
    ja: 'romen densha de ikimasu. nijuppun kakarimasu.' }),
  P('r5', 'c', {
    fr: 'Et le soir, que faites-vous ?', en: 'And in the evening, what do you do?', ar: 'وماذا تفعل في المساء؟',
    es: '¿Y por la tarde, qué hace?', it: 'E la sera, cosa fa?', pt: 'E à noite, o que faz?',
    zh: '晚上你做什么？', ja: '夜は何をしますか？',
  }, { ar: 'wa-mādhā tafʿalu fī al-masāʾ?', zh: 'wǎnshang nǐ zuò shénme?', ja: 'yoru wa nani o shimasu ka?' }),
  P('r6', 'l', {
    fr: 'Je fais du sport, puis je lis un peu avant de dormir.', en: 'I do some sport, then I read a little before going to sleep.', ar: 'أمارس الرياضة، ثم أقرأ قليلًا قبل النوم.',
    es: 'Hago deporte y luego leo un poco antes de dormir.', it: "Faccio sport, poi leggo un po' prima di dormire.", pt: 'Faço desporto e depois leio um pouco antes de dormir.',
    zh: '我去运动，然后睡前看一会儿书。', ja: '運動して、寝る前に少し本を読みます。',
  }, { ar: 'umārisu ar-riyāḍa, thumma aqraʾu qalīlan qabla an-nawm.', zh: 'wǒ qù yùndòng, ránhòu shuì qián kàn yíhuìr shū.',
    ja: 'undō shite, neru mae ni sukoshi hon o yomimasu.' }),

  // ── Voyage & hôtel ───────────────────────────────────────────
  P('h1', 'l', {
    fr: "Bonsoir, j'ai réservé une chambre au nom de Sami Alaoui.", en: 'Good evening, I booked a room under the name Sami Alaoui.', ar: 'مساء الخير، حجزت غرفة باسم سامي العلوي.',
    es: 'Buenas noches, he reservado una habitación a nombre de Sami Alaoui.', it: 'Buonasera, ho prenotato una camera a nome di Sami Alaoui.', pt: 'Boa noite, reservei um quarto em nome de Sami Alaoui.',
    zh: '晚上好，我用萨米·阿拉维的名字订了一个房间。', ja: 'こんばんは。サミ・アラウイの名前で予約しています。',
  }, { ar: 'masāʾ al-khayr, ḥajaztu ghurfa bi-sm Sāmī al-ʿAlawī.', zh: 'wǎnshang hǎo, wǒ yòng Sàmǐ Ālāwéi de míngzi dìngle yí ge fángjiān.',
    ja: 'konbanwa. Sami Araui no namae de yoyaku shite imasu.' }),
  P('h2', 'c', {
    fr: "Bienvenue ! Votre passeport, s'il vous plaît.", en: 'Welcome! Your passport, please.', ar: 'أهلًا بك! جواز سفرك من فضلك.',
    es: '¡Bienvenido! Su pasaporte, por favor.', it: 'Benvenuto! Il passaporto, per favore.', pt: 'Bem-vindo! O seu passaporte, por favor.',
    zh: '欢迎！请出示您的护照。', ja: 'ようこそ。パスポートをお願いします。',
  }, { ar: 'ahlan bik! jawāz safarika min faḍlik.', zh: 'huānyíng! qǐng chūshì nín de hùzhào.', ja: 'yōkoso. pasupōto o onegai shimasu.' }),
  P('h3', 'l', {
    fr: 'Le petit-déjeuner est inclus ?', en: 'Is breakfast included?', ar: 'هل الفطور مشمول؟',
    es: '¿El desayuno está incluido?', it: 'La colazione è inclusa?', pt: 'O pequeno-almoço está incluído?',
    zh: '含早餐吗？', ja: '朝食は含まれていますか？',
  }, { ar: 'hal al-fuṭūr mashmūl?', zh: 'hán zǎocān ma?', ja: 'chōshoku wa fukumarete imasu ka?' }),
  P('h4', 'c', {
    fr: 'Oui, de sept heures à dix heures, au rez-de-chaussée.', en: 'Yes, from seven to ten, on the ground floor.', ar: 'نعم، من السابعة إلى العاشرة، في الطابق الأرضي.',
    es: 'Sí, de siete a diez, en la planta baja.', it: 'Sì, dalle sette alle dieci, al piano terra.', pt: 'Sim, das sete às dez, no rés-do-chão.',
    zh: '包含，早上七点到十点，在一楼。', ja: 'はい、七時から十時まで、一階でございます。',
  }, { ar: 'naʿam, min as-sābiʿa ilā al-ʿāshira, fī aṭ-ṭābiq al-arḍī.', zh: 'bāohán, zǎoshang qī diǎn dào shí diǎn, zài yī lóu.',
    ja: 'hai, shichi-ji kara jū-ji made, ikkai de gozaimasu.' }),
  P('h5', 'l', {
    fr: "Il n'y a pas d'eau chaude dans la salle de bain.", en: "There's no hot water in the bathroom.", ar: 'لا يوجد ماء ساخن في الحمام.',
    es: 'No hay agua caliente en el baño.', it: "Non c'è acqua calda in bagno.", pt: 'Não há água quente na casa de banho.',
    zh: '浴室没有热水。', ja: 'お風呂のお湯が出ません。',
  }, { ar: 'lā yūjadu māʾ sākhin fī al-ḥammām.', zh: 'yùshì méiyǒu rèshuǐ.', ja: 'o-furo no o-yu ga demasen.' }),
  P('h6', 'c', {
    fr: "Je suis désolé, j'envoie un technicien tout de suite.", en: "I'm sorry, I'll send a technician right away.", ar: 'آسف، سأرسل فنيًا حالًا.',
    es: 'Lo siento, envío a un técnico enseguida.', it: 'Mi dispiace, mando subito un tecnico.', pt: 'Peço desculpa, vou enviar um técnico imediatamente.',
    zh: '很抱歉，我马上派技术人员过去。', ja: '申し訳ございません。すぐに係の者を向かわせます。',
  }, { ar: 'āsif, sa-ursilu fanniyyan ḥālan.', zh: 'hěn bàoqiàn, wǒ mǎshàng pài jìshù rényuán guòqu.', ja: 'mōshiwake gozaimasen. sugu ni kakari no mono o mukawasemasu.' }),
];
export const B1: Phrase[] = [
  // ── Donner son avis ──────────────────────────────────────────
  P('o1', 'c', {
    fr: "Qu'avez-vous pensé du film ?", en: 'What did you think of the film?', ar: 'ما رأيك في الفيلم؟',
    es: '¿Qué le pareció la película?', it: 'Cosa ne pensa del film?', pt: 'O que achou do filme?',
    zh: '你觉得这部电影怎么样？', ja: '映画はどうでしたか？',
  }, { zh: 'nǐ juéde zhè bù diànyǐng zěnmeyàng?', ja: 'eiga wa dō deshita ka?' }),
  P('o2', 'l', {
    fr: "À mon avis, l'histoire était originale, mais la fin m'a déçu.", en: 'In my opinion, the story was original, but the ending disappointed me.',
    ar: 'في رأيي، كانت القصة أصلية، لكن النهاية خيبت أملي.', es: 'En mi opinión, la historia era original, pero el final me decepcionó.',
    it: 'Secondo me, la storia era originale, ma il finale mi ha deluso.', pt: 'Na minha opinião, a história era original, mas o final desiludiu-me.',
    zh: '我觉得故事很有新意，但是结局让我失望。', ja: '話は斬新でしたが、結末にはがっかりしました。',
  }, { zh: 'wǒ juéde gùshi hěn yǒu xīnyì, dànshì jiéjú ràng wǒ shīwàng.', ja: 'hanashi wa zanshin deshita ga, ketsumatsu ni wa gakkari shimashita.' }),
  P('o3', 'c', {
    fr: "Je ne suis pas tout à fait d'accord : la fin était logique.", en: "I don't entirely agree: the ending made sense.", ar: 'لا أتفق معك تمامًا: كانت النهاية منطقية.',
    es: 'No estoy del todo de acuerdo: el final tenía lógica.', it: "Non sono del tutto d'accordo: il finale era logico.", pt: 'Não concordo totalmente: o final fazia sentido.',
    zh: '我不完全同意，结局很合理。', ja: '完全には同意できません。結末は筋が通っていました。',
  }, { zh: 'wǒ bù wánquán tóngyì, jiéjú hěn hélǐ.', ja: 'kanzen ni wa dōi dekimasen. ketsumatsu wa suji ga tōtte imashita.' }),
  P('o4', 'l', {
    fr: 'C\'est vrai, mais elle arrivait trop vite.', en: 'That\'s true, but it came too quickly.', ar: 'هذا صحيح، لكنها جاءت بسرعة كبيرة.',
    es: 'Es verdad, pero llegó demasiado rápido.', it: 'È vero, ma è arrivato troppo in fretta.', pt: 'É verdade, mas chegou depressa demais.',
    zh: '没错，但是来得太快了。', ja: 'そうですね、でも展開が速すぎました。',
  }, { zh: 'méi cuò, dànshì lái de tài kuài le.', ja: 'sō desu ne, demo tenkai ga hayasugimashita.' }),
  P('o5', 'c', {
    fr: 'Vous recommanderiez ce film à vos amis ?', en: 'Would you recommend this film to your friends?', ar: 'هل تنصح أصدقاءك بهذا الفيلم؟',
    es: '¿Recomendaría esta película a sus amigos?', it: 'Consiglierebbe questo film ai suoi amici?', pt: 'Recomendaria este filme aos seus amigos?',
    zh: '你会把这部电影推荐给朋友吗？', ja: '友達にこの映画を勧めますか？',
  }, { zh: 'nǐ huì bǎ zhè bù diànyǐng tuījiàn gěi péngyou ma?', ja: 'tomodachi ni kono eiga o susumemasu ka?' }),
  P('o6', 'l', {
    fr: 'Oui, surtout pour la musique et les acteurs.', en: 'Yes, especially for the music and the actors.', ar: 'نعم، خاصة من أجل الموسيقى والممثلين.',
    es: 'Sí, sobre todo por la música y los actores.', it: 'Sì, soprattutto per la musica e gli attori.', pt: 'Sim, sobretudo pela música e pelos atores.',
    zh: '会的，特别是因为音乐和演员。', ja: 'はい、特に音楽と俳優が良かったので。',
  }, { zh: 'huì de, tèbié shì yīnwèi yīnyuè hé yǎnyuán.', ja: 'hai, toku ni ongaku to haiyū ga yokatta node.' }),

  // ── Entretien d'embauche ─────────────────────────────────────
  P('w1', 'c', {
    fr: 'Pouvez-vous me parler de votre expérience ?', en: 'Can you tell me about your experience?', ar: 'هل يمكنك أن تحدثني عن خبرتك؟',
    es: '¿Puede hablarme de su experiencia?', it: 'Può parlarmi della sua esperienza?', pt: 'Pode falar-me da sua experiência?',
    zh: '能谈谈您的工作经历吗？', ja: 'これまでのご経験について教えていただけますか？',
  }, { zh: 'néng tántan nín de gōngzuò jīnglì ma?', ja: 'kore made no go-keiken ni tsuite oshiete itadakemasu ka?' }),
  P('w2', 'l', {
    fr: "J'ai travaillé trois ans comme assistant commercial dans une entreprise d'export.", en: 'I worked for three years as a sales assistant in an export company.',
    ar: 'عملت ثلاث سنوات مساعدًا تجاريًا في شركة تصدير.', es: 'Trabajé tres años como asistente comercial en una empresa de exportación.',
    it: "Ho lavorato tre anni come assistente commerciale in un'azienda di export.", pt: 'Trabalhei três anos como assistente comercial numa empresa de exportação.',
    zh: '我在一家出口公司做了三年销售助理。', ja: '輸出会社で三年間、営業アシスタントとして働きました。',
  }, { zh: 'wǒ zài yì jiā chūkǒu gōngsī zuòle sān nián xiāoshòu zhùlǐ.', ja: 'yushutsu-gaisha de sannenkan, eigyō ashisutanto to shite hatarakimashita.' }),
  P('w3', 'c', {
    fr: 'Quelles étaient vos principales missions ?', en: 'What were your main responsibilities?', ar: 'ما هي مهامك الرئيسية؟',
    es: '¿Cuáles eran sus principales funciones?', it: 'Quali erano le sue mansioni principali?', pt: 'Quais eram as suas principais funções?',
    zh: '您的主要职责是什么？', ja: '主な仕事は何でしたか？',
  }, { zh: 'nín de zhǔyào zhízé shì shénme?', ja: 'omo na shigoto wa nan deshita ka?' }),
  P('w4', 'l', {
    fr: 'Je préparais les devis et je suivais les commandes des clients.', en: 'I prepared quotes and followed up on customer orders.',
    ar: 'كنت أُعدّ عروض الأسعار وأتابع طلبات الزبائن.', es: 'Preparaba los presupuestos y hacía el seguimiento de los pedidos.',
    it: 'Preparavo i preventivi e seguivo gli ordini dei clienti.', pt: 'Preparava os orçamentos e acompanhava as encomendas dos clientes.',
    zh: '我负责做报价，跟进客户订单。', ja: '見積書を作成し、お客様の注文を管理していました。',
  }, { zh: 'wǒ fùzé zuò bàojià, gēnjìn kèhù dìngdān.', ja: 'mitsumorisho o sakusei shi, o-kyakusama no chūmon o kanri shite imashita.' }),
  P('w5', 'c', {
    fr: 'Pourquoi voulez-vous rejoindre notre équipe ?', en: 'Why do you want to join our team?', ar: 'لماذا تريد الانضمام إلى فريقنا؟',
    es: '¿Por qué quiere unirse a nuestro equipo?', it: 'Perché vuole entrare nel nostro team?', pt: 'Porque quer juntar-se à nossa equipa?',
    zh: '您为什么想加入我们的团队？', ja: 'なぜ私たちのチームに入りたいのですか？',
  }, { zh: 'nín wèishénme xiǎng jiārù wǒmen de tuánduì?', ja: 'naze watashitachi no chīmu ni hairitai no desu ka?' }),
  P('w6', 'l', {
    fr: 'Parce que vos projets internationaux correspondent à mes objectifs.', en: 'Because your international projects match my goals.',
    ar: 'لأن مشاريعكم الدولية تتوافق مع أهدافي.', es: 'Porque sus proyectos internacionales encajan con mis objetivos.',
    it: 'Perché i vostri progetti internazionali corrispondono ai miei obiettivi.', pt: 'Porque os vossos projetos internacionais correspondem aos meus objetivos.',
    zh: '因为贵公司的国际项目符合我的目标。', ja: '御社の国際的なプロジェクトが私の目標に合っているからです。',
  }, { zh: 'yīnwèi guì gōngsī de guójì xiàngmù fúhé wǒ de mùbiāo.', ja: 'onsha no kokusaiteki na purojekuto ga watashi no mokuhyō ni atte iru kara desu.' }),
];
