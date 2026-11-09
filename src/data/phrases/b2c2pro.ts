import { P, Phrase } from './types';

// Niveaux B2, C1, C2 et filières professionnelles. Pinyin et rōmaji fournis ;
// les autres écritures sont lues sans translittération à partir de B1.

export const B2: Phrase[] = [
  // ── Négocier ─────────────────────────────────────────────────
  P('m1', 'c', {
    fr: 'Nous pouvons vous proposer une remise de cinq pour cent.', en: 'We can offer you a five percent discount.',
    ar: 'يمكننا أن نقدم لكم خصمًا بنسبة خمسة في المئة.', es: 'Podemos ofrecerle un descuento del cinco por ciento.',
    it: 'Possiamo offrirvi uno sconto del cinque per cento.', pt: 'Podemos oferecer-lhe um desconto de cinco por cento.',
    zh: '我们可以给您百分之五的折扣。', ja: '5パーセントの割引をご提案できます。',
    fa: 'می‌توانیم پنج درصد تخفیف به شما بدهیم.', hi: 'हम आपको पाँच प्रतिशत की छूट दे सकते हैं।',
  }, { zh: 'wǒmen kěyǐ gěi nín bǎi fēn zhī wǔ de zhékòu.', ja: 'go-pāsento no waribiki o go-teian dekimasu.' }),
  P('m2', 'l', {
    fr: "C'est un premier pas, mais compte tenu du volume, nous attendions davantage.", en: "It's a first step, but given the volume, we expected more.",
    ar: 'هذه خطوة أولى، لكن نظرًا للكمية كنا نتوقع أكثر.', es: 'Es un primer paso, pero teniendo en cuenta el volumen, esperábamos más.',
    it: 'È un primo passo, ma considerato il volume, ci aspettavamo di più.', pt: 'É um primeiro passo, mas tendo em conta o volume, esperávamos mais.',
    zh: '这是第一步，但考虑到订货量，我们原本期待更多。', ja: '一歩前進ですが、数量を考えると、もう少し期待していました。',
    fa: 'این قدم اول است، اما با توجه به حجم سفارش انتظار بیشتری داشتیم.', hi: 'यह पहला क़दम है, लेकिन मात्रा को देखते हुए हमें इससे ज़्यादा की उम्मीद थी।',
  }, { zh: 'zhè shì dì yī bù, dàn kǎolǜ dào dìnghuòliàng, wǒmen yuánběn qīdài gèng duō.', ja: 'ippo zenshin desu ga, sūryō o kangaeru to, mō sukoshi kitai shite imashita.' }),
  P('m3', 'c', {
    fr: "Si vous vous engagez sur un an, nous pouvons aller jusqu'à huit pour cent.", en: 'If you commit for a year, we can go up to eight percent.',
    ar: 'إذا التزمتم لمدة سنة، يمكننا أن نصل إلى ثمانية في المئة.', es: 'Si se comprometen por un año, podemos llegar al ocho por ciento.',
    it: "Se vi impegnate per un anno, possiamo arrivare all'otto per cento.", pt: 'Se se comprometerem por um ano, podemos chegar aos oito por cento.',
    zh: '如果您签一年的合同，我们可以给到百分之八。', ja: '一年契約をしていただければ、8パーセントまで可能です。',
    fa: 'اگر برای یک سال متعهد شوید، می‌توانیم تا هشت درصد برسیم.', hi: 'अगर आप एक साल के लिए प्रतिबद्ध हों, तो हम आठ प्रतिशत तक जा सकते हैं।',
  }, { zh: 'rúguǒ nín qiān yì nián de hétong, wǒmen kěyǐ gěi dào bǎi fēn zhī bā.', ja: 'ichinen keiyaku o shite itadakereba, hachi-pāsento made kanō desu.' }),
  P('m4', 'l', {
    fr: 'Cela nous intéresse, à condition que les délais de livraison soient garantis.', en: "We're interested, provided that delivery times are guaranteed.",
    ar: 'هذا يهمنا، بشرط أن تكون مواعيد التسليم مضمونة.', es: 'Nos interesa, siempre que se garanticen los plazos de entrega.',
    it: 'Ci interessa, a condizione che i tempi di consegna siano garantiti.', pt: 'Interessa-nos, desde que os prazos de entrega sejam garantidos.',
    zh: '我们有兴趣，前提是交货期有保证。', ja: '納期を保証していただけるなら、興味があります。',
    fa: 'برای ما جالب است، به شرطی که زمان تحویل تضمین شود.', hi: 'हमें इसमें रुचि है, बशर्ते डिलीवरी का समय सुनिश्चित हो।',
  }, { zh: 'wǒmen yǒu xìngqù, qiántí shì jiāohuòqī yǒu bǎozhèng.', ja: 'nōki o hoshō shite itadakeru nara, kyōmi ga arimasu.' }),
  P('m5', 'c', {
    fr: "Nous pouvons l'inscrire dans le contrat, avec des pénalités en cas de retard.", en: 'We can put it in the contract, with penalties for delays.',
    ar: 'يمكننا إدراج ذلك في العقد، مع غرامات في حال التأخير.', es: 'Podemos incluirlo en el contrato, con penalizaciones en caso de retraso.',
    it: 'Possiamo inserirlo nel contratto, con penali in caso di ritardo.', pt: 'Podemos incluí-lo no contrato, com penalizações em caso de atraso.',
    zh: '我们可以把这一点写进合同，延迟交货要支付违约金。', ja: '契約書に明記し、遅延の場合は違約金を設けます。',
    fa: 'می‌توانیم این را در قرارداد بیاوریم، همراه با جریمه در صورت تأخیر.', hi: 'हम इसे अनुबंध में लिख सकते हैं, देरी होने पर जुर्माने के साथ।',
  }, { zh: 'wǒmen kěyǐ bǎ zhè yì diǎn xiě jìn hétong, yánchí jiāohuò yào zhīfù wéiyuējīn.', ja: 'keiyakusho ni meiki shi, chien no baai wa iyakukin o mōkemasu.' }),
  P('m6', 'l', {
    fr: 'Très bien, envoyez-nous la proposition et nous signerons cette semaine.', en: "Very well, send us the proposal and we'll sign this week.",
    ar: 'حسنًا، أرسلوا لنا العرض وسنوقّع هذا الأسبوع.', es: 'Muy bien, envíennos la propuesta y firmaremos esta semana.',
    it: 'Molto bene, inviateci la proposta e firmeremo questa settimana.', pt: 'Muito bem, enviem-nos a proposta e assinaremos esta semana.',
    zh: '很好，请把方案发给我们，我们这周签约。', ja: '承知しました。提案書を送っていただければ、今週中に署名します。',
    fa: 'بسیار خوب، پیشنهاد را بفرستید تا این هفته امضا کنیم.', hi: 'ठीक है, हमें प्रस्ताव भेजिए और हम इसी हफ़्ते हस्ताक्षर कर देंगे।',
  }, { zh: 'hěn hǎo, qǐng bǎ fāng’àn fā gěi wǒmen, wǒmen zhè zhōu qiānyuē.', ja: 'shōchi shimashita. teiansho o okutte itadakereba, konshū-chū ni shomei shimasu.' }),

  // ── Argumenter ───────────────────────────────────────────────
  P('a1', 'c', {
    fr: 'Selon vous, le télétravail améliore-t-il la productivité ?', en: 'In your view, does remote work improve productivity?',
    ar: 'هل يحسّن العمل عن بُعد الإنتاجية في رأيك؟', es: 'En su opinión, ¿el teletrabajo mejora la productividad?',
    it: 'Secondo Lei, il telelavoro migliora la produttività?', pt: 'Na sua opinião, o teletrabalho melhora a produtividade?',
    zh: '你认为远程办公能提高效率吗？', ja: 'テレワークは生産性を高めると思いますか？',
    fa: 'به نظر شما دورکاری بهره‌وری را بالا می‌برد؟', hi: 'आपकी राय में, क्या घर से काम करने से उत्पादकता बढ़ती है?',
  }, { zh: 'nǐ rènwéi yuǎnchéng bàngōng néng tígāo xiàolǜ ma?', ja: 'terewāku wa seisansei o takameru to omoimasu ka?' }),
  P('a2', 'l', {
    fr: 'Dans une certaine mesure, car on perd moins de temps dans les transports.', en: 'To some extent, because we waste less time commuting.',
    ar: 'إلى حد ما، لأننا نضيع وقتًا أقل في التنقل.', es: 'Hasta cierto punto, porque se pierde menos tiempo en los desplazamientos.',
    it: 'In una certa misura, perché si perde meno tempo negli spostamenti.', pt: 'Até certo ponto, porque se perde menos tempo em deslocações.',
    zh: '在一定程度上是的，因为通勤时间少了。', ja: 'ある程度はそうです。通勤時間が減りますから。',
    fa: 'تا حدی، چون وقت کمتری در رفت‌وآمد تلف می‌شود.', hi: 'कुछ हद तक, क्योंकि आने-जाने में कम समय बर्बाद होता है।',
  }, { zh: 'zài yídìng chéngdù shang shì de, yīnwèi tōngqín shíjiān shǎo le.', ja: 'aru teido wa sō desu. tsūkin jikan ga herimasu kara.' }),
  P('a3', 'c', {
    fr: 'Pourtant, beaucoup de salariés se sentent isolés.', en: 'Yet many employees feel isolated.',
    ar: 'ومع ذلك، يشعر كثير من الموظفين بالعزلة.', es: 'Sin embargo, muchos empleados se sienten aislados.',
    it: 'Eppure molti dipendenti si sentono isolati.', pt: 'No entanto, muitos trabalhadores sentem-se isolados.',
    zh: '可是，很多员工感到孤独。', ja: 'しかし、孤立感を感じる社員も多いです。',
    fa: 'با این حال، بسیاری از کارمندان احساس انزوا می‌کنند.', hi: 'फिर भी, कई कर्मचारी अकेलापन महसूस करते हैं।',
  }, { zh: 'kěshì, hěn duō yuángōng gǎndào gūdú.', ja: 'shikashi, koritsukan o kanjiru shain mo ōi desu.' }),
  P('a4', 'l', {
    fr: "C'est pourquoi je défends un modèle hybride, avec deux jours au bureau.", en: "That's why I support a hybrid model, with two days in the office.",
    ar: 'لهذا أدافع عن نموذج هجين، مع يومين في المكتب.', es: 'Por eso defiendo un modelo híbrido, con dos días en la oficina.',
    it: 'Per questo sostengo un modello ibrido, con due giorni in ufficio.', pt: 'Por isso defendo um modelo híbrido, com dois dias no escritório.',
    zh: '所以我支持混合模式，每周两天去办公室。', ja: 'だから、週二日出社するハイブリッド型を支持します。',
    fa: 'به همین دلیل از مدل ترکیبی، با دو روز حضور در دفتر، دفاع می‌کنم.', hi: 'इसीलिए मैं हाइब्रिड मॉडल का समर्थन करता हूँ, जिसमें दो दिन दफ़्तर में हों।',
  }, { zh: 'suǒyǐ wǒ zhīchí hùnhé móshì, měi zhōu liǎng tiān qù bàngōngshì.', ja: 'dakara, shū futsuka shussha suru haiburiddo-gata o shiji shimasu.' }),
  P('a5', 'c', {
    fr: "Et comment garantir l'équité entre ceux qui peuvent télétravailler et les autres ?", en: 'And how do you ensure fairness between those who can work remotely and the others?',
    ar: 'وكيف نضمن الإنصاف بين من يستطيع العمل عن بُعد والآخرين؟', es: '¿Y cómo garantizar la equidad entre quienes pueden teletrabajar y los demás?',
    it: "E come garantire l'equità tra chi può lavorare da remoto e gli altri?", pt: 'E como garantir a equidade entre quem pode trabalhar à distância e os outros?',
    zh: '那么，如何保证能远程办公的人和其他人之间的公平？', ja: 'では、テレワークできる人とできない人の公平性はどう確保しますか？',
    fa: 'و چطور می‌توان میان کسانی که امکان دورکاری دارند و دیگران عدالت برقرار کرد؟', hi: 'और जो लोग घर से काम कर सकते हैं और जो नहीं कर सकते, उनके बीच निष्पक्षता कैसे सुनिश्चित करें?',
  }, { zh: 'nàme, rúhé bǎozhèng néng yuǎnchéng bàngōng de rén hé qítā rén zhī jiān de gōngpíng?', ja: 'dewa, terewāku dekiru hito to dekinai hito no kōheisei wa dō kakuho shimasu ka?' }),
  P('a6', 'l', {
    fr: 'En compensant par plus de flexibilité sur les horaires.', en: 'By compensating with more flexible working hours.',
    ar: 'بالتعويض بمرونة أكبر في أوقات العمل.', es: 'Compensándolo con más flexibilidad horaria.',
    it: 'Compensando con più flessibilità negli orari.', pt: 'Compensando com mais flexibilidade nos horários.',
    zh: '可以用更灵活的工作时间来弥补。', ja: '勤務時間をより柔軟にすることで補えます。',
    fa: 'با جبران آن از طریق انعطاف بیشتر در ساعات کاری.', hi: 'काम के घंटों में ज़्यादा लचीलापन देकर इसकी भरपाई की जा सकती है।',
  }, { zh: 'kěyǐ yòng gèng línghuó de gōngzuò shíjiān lái míbǔ.', ja: 'kinmu jikan o yori jūnan ni suru koto de oginaemasu.' }),
];

export const C1C2: Phrase[] = [
  // ── C1 · Présenter en public ─────────────────────────────────
  P('p1', 'l', {
    fr: 'Je vous remercie de votre présence ; je vais vous présenter nos résultats du trimestre.', en: "Thank you for being here; I'm going to present our quarterly results.",
    ar: 'أشكركم على حضوركم؛ سأعرض عليكم نتائج هذا الربع.', es: 'Les agradezco su presencia; voy a presentarles nuestros resultados del trimestre.',
    it: 'Vi ringrazio per la vostra presenza; vi presenterò i risultati del trimestre.', pt: 'Agradeço a vossa presença; vou apresentar-vos os nossos resultados trimestrais.',
    zh: '感谢各位的出席，下面我来介绍本季度的业绩。', ja: 'お集まりいただきありがとうございます。今期の業績についてご報告いたします。',
    fa: 'از حضورتان سپاسگزارم؛ اکنون نتایج این فصل را ارائه می‌کنم.', hi: 'आपकी उपस्थिति के लिए धन्यवाद; मैं आपके सामने इस तिमाही के परिणाम प्रस्तुत करूँगा।',
  }, { zh: 'gǎnxiè gèwèi de chūxí, xiàmiàn wǒ lái jièshào běn jìdù de yèjì.', ja: 'o-atsumari itadaki arigatō gozaimasu. konki no gyōseki ni tsuite go-hōkoku itashimasu.' }),
  P('p2', 'l', {
    fr: "Le chiffre d'affaires a progressé de douze pour cent, principalement grâce à l'export.", en: 'Revenue grew by twelve percent, mainly thanks to exports.',
    ar: 'ارتفع رقم المعاملات بنسبة اثني عشر في المئة، ويعود ذلك أساسًا إلى التصدير.', es: 'La facturación creció un doce por ciento, principalmente gracias a la exportación.',
    it: "Il fatturato è cresciuto del dodici per cento, soprattutto grazie all'export.", pt: 'A faturação cresceu doze por cento, sobretudo graças às exportações.',
    zh: '营业额增长了百分之十二，主要得益于出口。', ja: '売上高は主に輸出のおかげで12パーセント増加しました。',
    fa: 'فروش، عمدتاً به لطف صادرات، دوازده درصد رشد کرد.', hi: 'मुख्य रूप से निर्यात की वजह से राजस्व में बारह प्रतिशत की वृद्धि हुई।',
  }, { zh: 'yíngyè’é zēngzhǎngle bǎi fēn zhī shí’èr, zhǔyào déyì yú chūkǒu.', ja: 'uriagedaka wa omo ni yushutsu no okage de jūni-pāsento zōka shimashita.' }),
  P('p3', 'c', {
    fr: 'Comment expliquez-vous la baisse de la marge ?', en: 'How do you explain the drop in margin?',
    ar: 'كيف تفسرون انخفاض هامش الربح؟', es: '¿Cómo explica la caída del margen?',
    it: 'Come spiega il calo del margine?', pt: 'Como explica a descida da margem?',
    zh: '利润率下降的原因是什么？', ja: '利益率の低下はどのように説明されますか？',
    fa: 'کاهش حاشیه سود را چگونه توضیح می‌دهید؟', hi: 'मार्जिन में आई गिरावट को आप कैसे समझाएँगे?',
  }, { zh: 'lìrùnlǜ xiàjiàng de yuányīn shì shénme?', ja: 'rieki-ritsu no teika wa dono yō ni setsumei saremasu ka?' }),
  P('p4', 'l', {
    fr: "Elle s'explique essentiellement par la hausse du coût des matières premières.", en: 'It is mainly due to the rise in raw material costs.',
    ar: 'يعود ذلك أساسًا إلى ارتفاع تكلفة المواد الأولية.', es: 'Se debe sobre todo al aumento del coste de las materias primas.',
    it: "È dovuto essenzialmente all'aumento del costo delle materie prime.", pt: 'Deve-se sobretudo ao aumento do custo das matérias-primas.',
    zh: '这主要是由于原材料成本上涨。', ja: '主に原材料費の高騰によるものです。',
    fa: 'این عمدتاً به دلیل افزایش هزینه مواد اولیه است.', hi: 'इसका मुख्य कारण कच्चे माल की लागत में बढ़ोतरी है।',
  }, { zh: 'zhè zhǔyào shì yóuyú yuáncáiliào chéngběn shàngzhǎng.', ja: 'omo ni genzairyō-hi no kōtō ni yoru mono desu.' }),
  P('p5', 'c', {
    fr: 'Quelles mesures envisagez-vous pour y remédier ?', en: 'What measures are you considering to address it?',
    ar: 'ما الإجراءات التي تعتزمون اتخاذها لمعالجة ذلك؟', es: '¿Qué medidas contempla para solucionarlo?',
    it: 'Quali misure intende adottare per porvi rimedio?', pt: 'Que medidas pensa tomar para resolver isso?',
    zh: '你们打算采取什么措施来解决？', ja: 'どのような対策をお考えですか？',
    fa: 'برای جبران آن چه اقداماتی در نظر دارید؟', hi: 'इसे ठीक करने के लिए आप कौन-से क़दम उठाने का विचार कर रहे हैं?',
  }, { zh: 'nǐmen dǎsuan cǎiqǔ shénme cuòshī lái jiějué?', ja: 'dono yō na taisaku o o-kangae desu ka?' }),
  P('p6', 'l', {
    fr: "Nous allons renégocier nos contrats d'approvisionnement et automatiser une partie de la production.", en: 'We will renegotiate our supply contracts and automate part of production.',
    ar: 'سنعيد التفاوض على عقود التوريد ونؤتمت جزءًا من الإنتاج.', es: 'Vamos a renegociar los contratos de suministro y automatizar parte de la producción.',
    it: 'Rinegozieremo i contratti di fornitura e automatizzeremo parte della produzione.', pt: 'Vamos renegociar os contratos de fornecimento e automatizar parte da produção.',
    zh: '我们将重新谈判供货合同，并实现部分生产自动化。', ja: '調達契約を見直し、生産の一部を自動化する予定です。',
    fa: 'قراردادهای تأمین را دوباره مذاکره می‌کنیم و بخشی از تولید را خودکار می‌کنیم.', hi: 'हम अपने आपूर्ति अनुबंधों पर फिर से बातचीत करेंगे और उत्पादन के एक हिस्से को स्वचालित करेंगे।',
  }, { zh: 'wǒmen jiāng chóngxīn tánpàn gōnghuò hétong, bìng shíxiàn bùfen shēngchǎn zìdònghuà.', ja: 'chōtatsu keiyaku o minaoshi, seisan no ichibu o jidōka suru yotei desu.' }),

  // ── C2 · Nuances & registres (proverbes rendus par leur équivalent) ──
  P('x1', 'c', {
    fr: "Il ne faut pas vendre la peau de l'ours avant de l'avoir tué.", en: "Don't count your chickens before they hatch.",
    ar: 'لا تستبق الأحداث قبل أوانها.', es: 'No vendas la piel del oso antes de cazarlo.',
    it: "Non dire gatto se non ce l'hai nel sacco.", pt: 'Não deites foguetes antes da festa.',
    zh: '不要高兴得太早。', ja: '捕らぬ狸の皮算用はやめましょう。',
    fa: 'جوجه را آخر پاییز می‌شمارند.', hi: 'पहले से ही ख़याली पुलाव मत पकाओ।',
  }, { zh: 'bú yào gāoxìng de tài zǎo.', ja: 'toranu tanuki no kawazan’yō wa yamemashō.' }),
  P('x2', 'l', {
    fr: "Vous avez raison, restons prudents tant que le contrat n'est pas signé.", en: "You're right, let's stay cautious until the contract is signed.",
    ar: 'معك حق، لنبقَ حذرين ما دام العقد لم يوقَّع.', es: 'Tiene razón, seamos prudentes mientras no se firme el contrato.',
    it: 'Ha ragione, restiamo prudenti finché il contratto non è firmato.', pt: 'Tem razão, sejamos prudentes enquanto o contrato não estiver assinado.',
    zh: '你说得对，合同签订之前我们还是谨慎一点。', ja: 'おっしゃる通りです。契約が締結されるまでは慎重にいきましょう。',
    fa: 'حق با شماست؛ تا قرارداد امضا نشده، محتاط باشیم.', hi: 'आप सही हैं, जब तक अनुबंध पर हस्ताक्षर नहीं हो जाते, हमें सावधान रहना चाहिए।',
  }, { zh: 'nǐ shuō de duì, hétong qiāndìng zhīqián wǒmen háishi jǐnshèn yìdiǎn.', ja: 'ossharu tōri desu. keiyaku ga teiketsu sareru made wa shinchō ni ikimashō.' }),
  P('x3', 'c', {
    fr: 'Dites-le-lui avec tact : il est très susceptible.', en: "Tell him tactfully: he's very touchy.",
    ar: 'قل له ذلك بلباقة، فهو سريع الانفعال.', es: 'Dígaselo con tacto: es muy susceptible.',
    it: 'Glielo dica con tatto: è molto permaloso.', pt: 'Diga-lho com tato: ele é muito suscetível.',
    zh: '跟他说的时候委婉一点，他很敏感。', ja: '彼はとても傷つきやすいので、言い方に気をつけてください。',
    fa: 'با ملاحظه به او بگویید؛ خیلی زودرنج است.', hi: 'उसे नरमी से बताइए, वह बहुत जल्दी बुरा मान जाता है।',
  }, { zh: 'gēn tā shuō de shíhou wěiwǎn yìdiǎn, tā hěn mǐngǎn.', ja: 'kare wa totemo kizutsukiyasui node, iikata ni ki o tsukete kudasai.' }),
  P('x4', 'l', {
    fr: 'Je vais formuler ma critique sous forme de suggestion.', en: "I'll phrase my criticism as a suggestion.",
    ar: 'سأصوغ نقدي في شكل اقتراح.', es: 'Formularé mi crítica como una sugerencia.',
    it: 'Formulerò la mia critica sotto forma di suggerimento.', pt: 'Vou formular a minha crítica como uma sugestão.',
    zh: '我会把批评换成建议的方式说出来。', ja: '批判は提案という形で伝えます。',
    fa: 'انتقادم را در قالب یک پیشنهاد مطرح می‌کنم.', hi: 'मैं अपनी आलोचना को एक सुझाव के रूप में रखूँगा।',
  }, { zh: 'wǒ huì bǎ pīpíng huànchéng jiànyì de fāngshì shuō chūlai.', ja: 'hihan wa teian to iu katachi de tsutaemasu.' }),
  P('x5', 'c', {
    fr: "Ce rapport est bien écrit, quoiqu'un peu verbeux.", en: 'This report is well written, if a little wordy.',
    ar: 'هذا التقرير مكتوب جيدًا، وإن كان مُسهبًا بعض الشيء.', es: 'Este informe está bien escrito, aunque es algo prolijo.',
    it: "Questa relazione è ben scritta, anche se un po' prolissa.", pt: 'Este relatório está bem escrito, ainda que um pouco prolixo.',
    zh: '这份报告写得不错，只是有点啰嗦。', ja: 'この報告書はよく書けていますが、少し冗長です。',
    fa: 'این گزارش خوب نوشته شده، هرچند کمی طولانی و پرگوست.', hi: 'यह रिपोर्ट अच्छी लिखी गई है, हालाँकि थोड़ी लंबी-चौड़ी है।',
  }, { zh: 'zhè fèn bàogào xiě de búcuò, zhǐshì yǒudiǎn luōsuo.', ja: 'kono hōkokusho wa yoku kakete imasu ga, sukoshi jōchō desu.' }),
  P('x6', 'l', {
    fr: "Je le condenserai pour n'en garder que l'essentiel.", en: "I'll condense it to keep only the essentials.",
    ar: 'سأختصره لأحتفظ بالأساسي فقط.', es: 'Lo resumiré para quedarme solo con lo esencial.',
    it: "La condenserò per tenere solo l'essenziale.", pt: 'Vou condensá-lo para manter apenas o essencial.',
    zh: '我会把它压缩一下，只保留重点。', ja: '要点だけを残して簡潔にまとめます。',
    fa: 'آن را خلاصه می‌کنم تا فقط نکات اصلی بماند.', hi: 'मैं इसे छोटा करके सिर्फ़ ज़रूरी बातें रखूँगा।',
  }, { zh: 'wǒ huì bǎ tā yāsuō yíxià, zhǐ bǎoliú zhòngdiǎn.', ja: 'yōten dake o nokoshite kanketsu ni matomemasu.' }),
];

export const PRO: Phrase[] = [
  // ── Vente & affaires ─────────────────────────────────────────
  P('pb1', 'c', {
    fr: 'Quel problème cherchez-vous à résoudre en priorité ?', en: 'What problem are you trying to solve first?',
    ar: 'ما المشكلة التي تسعون إلى حلها أولًا؟', es: '¿Qué problema quiere resolver en primer lugar?',
    it: 'Quale problema volete risolvere per primo?', pt: 'Que problema pretende resolver em primeiro lugar?',
    zh: '您最想先解决什么问题？', ja: 'まず解決したい課題は何ですか？',
    fa: 'در درجه اول به دنبال حل چه مشکلی هستید؟', hi: 'आप सबसे पहले कौन-सी समस्या हल करना चाहते हैं?',
  }, { zh: 'nín zuì xiǎng xiān jiějué shénme wèntí?', ja: 'mazu kaiketsu shitai kadai wa nan desu ka?' }),
  P('pb2', 'l', {
    fr: 'Nos stocks ne sont jamais à jour et nous perdons des ventes.', en: "Our stock levels are never up to date, and we're losing sales.",
    ar: 'مخزوننا ليس محدّثًا أبدًا، ونخسر مبيعات.', es: 'Nuestro inventario nunca está actualizado y perdemos ventas.',
    it: 'Le nostre scorte non sono mai aggiornate e perdiamo vendite.', pt: 'Os nossos stocks nunca estão atualizados e perdemos vendas.',
    zh: '我们的库存数据总是不准确，导致销售流失。', ja: '在庫が常に最新でなく、販売機会を逃しています。',
    fa: 'موجودی انبار ما هیچ‌وقت به‌روز نیست و فروش از دست می‌دهیم.', hi: 'हमारा स्टॉक कभी अपडेट नहीं रहता और हमारी बिक्री छूट जाती है।',
  }, { zh: 'wǒmen de kùcún shùjù zǒngshì bù zhǔnquè, dǎozhì xiāoshòu liúshī.', ja: 'zaiko ga tsune ni saishin de naku, hanbai kikai o nogashite imasu.' }),
  P('pb3', 'c', {
    fr: 'Notre solution synchronise vos stocks en temps réel sur tous vos points de vente.', en: 'Our solution syncs your stock in real time across all your points of sale.',
    ar: 'يزامن حلّنا مخزونكم في الوقت الفعلي عبر جميع نقاط البيع.', es: 'Nuestra solución sincroniza su inventario en tiempo real en todos sus puntos de venta.',
    it: 'La nostra soluzione sincronizza le scorte in tempo reale su tutti i punti vendita.', pt: 'A nossa solução sincroniza os seus stocks em tempo real em todos os pontos de venda.',
    zh: '我们的方案能在所有销售点实时同步库存。', ja: '当社のソリューションは、全店舗の在庫をリアルタイムで同期します。',
    fa: 'راهکار ما موجودی شما را به‌صورت لحظه‌ای در همه فروشگاه‌ها همگام می‌کند.', hi: 'हमारा समाधान आपके सभी बिक्री केंद्रों पर स्टॉक को रियल टाइम में सिंक करता है।',
  }, { zh: 'wǒmen de fāng’àn néng zài suǒyǒu xiāoshòudiǎn shíshí tóngbù kùcún.', ja: 'tōsha no soryūshon wa, zen-tenpo no zaiko o riarutaimu de dōki shimasu.' }),
  P('pb4', 'l', {
    fr: 'Combien de temps faut-il pour la mise en place ?', en: 'How long does implementation take?',
    ar: 'كم من الوقت يستغرق التنفيذ؟', es: '¿Cuánto tiempo lleva la implantación?',
    it: "Quanto tempo richiede l'implementazione?", pt: 'Quanto tempo demora a implementação?',
    zh: '实施需要多长时间？', ja: '導入にはどのくらいかかりますか？',
    fa: 'راه‌اندازی آن چقدر طول می‌کشد؟', hi: 'इसे लागू करने में कितना समय लगता है?',
  }, { zh: 'shíshī xūyào duō cháng shíjiān?', ja: 'dōnyū ni wa dono kurai kakarimasu ka?' }),
  P('pb5', 'c', {
    fr: 'En général six semaines, formation des équipes comprise.', en: 'Usually six weeks, including staff training.',
    ar: 'ستة أسابيع عادةً، بما في ذلك تدريب الفرق.', es: 'Normalmente seis semanas, incluida la formación de los equipos.',
    it: 'In genere sei settimane, compresa la formazione del personale.', pt: 'Normalmente seis semanas, incluindo a formação das equipas.',
    zh: '一般六周，包括员工培训。', ja: '通常、スタッフ研修を含めて六週間です。',
    fa: 'معمولاً شش هفته، با احتساب آموزش کارکنان.', hi: 'आम तौर पर छह हफ़्ते, टीम के प्रशिक्षण समेत।',
  }, { zh: 'yìbān liù zhōu, bāokuò yuángōng péixùn.', ja: 'tsūjō, sutaffu kenshū o fukumete roku-shūkan desu.' }),
  P('pb6', 'l', {
    fr: 'Pouvez-vous nous faire une démonstration la semaine prochaine ?', en: 'Could you give us a demo next week?',
    ar: 'هل يمكنكم أن تقدموا لنا عرضًا توضيحيًا الأسبوع المقبل؟', es: '¿Podrían hacernos una demostración la semana que viene?',
    it: 'Potreste farci una dimostrazione la settimana prossima?', pt: 'Podem fazer-nos uma demonstração na próxima semana?',
    zh: '下周能给我们做个演示吗？', ja: '来週、デモをしていただけますか？',
    fa: 'می‌توانید هفته آینده یک دمو برای ما اجرا کنید؟', hi: 'क्या आप अगले हफ़्ते हमें एक डेमो दिखा सकते हैं?',
  }, { zh: 'xià zhōu néng gěi wǒmen zuò ge yǎnshì ma?', ja: 'raishū, demo o shite itadakemasu ka?' }),

  // ── Tourisme & accueil (l'apprenant est le professionnel) ────
  P('ph1', 'l', {
    fr: "Bienvenue à l'hôtel. Avez-vous fait bon voyage ?", en: 'Welcome to the hotel. Did you have a good trip?',
    ar: 'مرحبًا بكم في الفندق. هل كانت رحلتكم جيدة؟', es: 'Bienvenido al hotel. ¿Ha tenido buen viaje?',
    it: 'Benvenuto in hotel. Ha fatto buon viaggio?', pt: 'Bem-vindo ao hotel. Fez boa viagem?',
    zh: '欢迎光临。一路上还顺利吗？', ja: 'ホテルへようこそ。快適な旅でしたか？',
    fa: 'به هتل خوش آمدید. سفر خوبی داشتید؟', hi: 'होटल में आपका स्वागत है। आपकी यात्रा कैसी रही?',
  }, { zh: 'huānyíng guānglín. yílù shang hái shùnlì ma?', ja: 'hoteru e yōkoso. kaiteki na tabi deshita ka?' }),
  P('ph2', 'c', {
    fr: 'Oui, merci. Mon fils est allergique aux arachides.', en: 'Yes, thank you. My son is allergic to peanuts.',
    ar: 'نعم، شكرًا. ابني لديه حساسية من الفول السوداني.', es: 'Sí, gracias. Mi hijo es alérgico a los cacahuetes.',
    it: 'Sì, grazie. Mio figlio è allergico alle arachidi.', pt: 'Sim, obrigado. O meu filho é alérgico a amendoins.',
    zh: '很顺利，谢谢。我儿子对花生过敏。', ja: 'はい、ありがとうございます。息子がピーナッツアレルギーなんです。',
    fa: 'بله، ممنون. پسرم به بادام‌زمینی حساسیت دارد.', hi: 'हाँ, धन्यवाद। मेरे बेटे को मूँगफली से एलर्जी है।',
  }, { zh: 'hěn shùnlì, xièxie. wǒ érzi duì huāshēng guòmǐn.', ja: 'hai, arigatō gozaimasu. musuko ga pīnattsu arerugī nan desu.' }),
  P('ph3', 'l', {
    fr: "C'est noté ; je préviens le chef pour tous vos repas.", en: "Noted; I'll let the chef know for all your meals.",
    ar: 'تمّ التسجيل؛ سأبلغ الطاهي بذلك لجميع وجباتكم.', es: 'Tomo nota; aviso al chef para todas sus comidas.',
    it: 'Ne prendo nota; avviso lo chef per tutti i vostri pasti.', pt: 'Fica registado; vou avisar o chefe de cozinha para todas as refeições.',
    zh: '好的，已记下，我会通知厨师您所有的餐食都要注意。', ja: '承知いたしました。すべてのお食事について料理長に伝えておきます。',
    fa: 'یادداشت شد؛ برای همه وعده‌های غذایی‌تان به سرآشپز اطلاع می‌دهم.', hi: 'नोट कर लिया है; मैं आपके सभी भोजन के लिए शेफ़ को बता दूँगा।',
  }, { zh: 'hǎo de, yǐ jìxià, wǒ huì tōngzhī chúshī nín suǒyǒu de cānshí dōu yào zhùyì.', ja: 'shōchi itashimashita. subete no o-shokuji ni tsuite ryōrichō ni tsutaete okimasu.' }),
  P('ph4', 'c', {
    fr: 'Est-il possible de visiter la médina demain ?', en: 'Is it possible to visit the medina tomorrow?',
    ar: 'هل يمكن زيارة المدينة القديمة غدًا؟', es: '¿Es posible visitar la medina mañana?',
    it: 'È possibile visitare la medina domani?', pt: 'É possível visitar a medina amanhã?',
    zh: '明天可以去参观老城区吗？', ja: '明日、旧市街を見学できますか？',
    fa: 'آیا فردا می‌شود از شهر قدیمی دیدن کرد؟', hi: 'क्या कल पुराना शहर घूमना संभव है?',
  }, { zh: 'míngtiān kěyǐ qù cānguān lǎochéngqū ma?', ja: 'ashita, kyū-shigai o kengaku dekimasu ka?' }),
  P('ph5', 'l', {
    fr: 'Oui, une visite guidée part à neuf heures ; je vous réserve deux places ?', en: 'Yes, a guided tour leaves at nine; shall I book two places for you?',
    ar: 'نعم، تنطلق جولة مع مرشد في التاسعة؛ هل أحجز لكم مكانين؟', es: 'Sí, sale una visita guiada a las nueve; ¿le reservo dos plazas?',
    it: 'Sì, una visita guidata parte alle nove; Le prenoto due posti?', pt: 'Sim, há uma visita guiada às nove; reservo-lhe dois lugares?',
    zh: '可以，九点有导游带团出发，要帮您预订两个位子吗？', ja: 'はい、九時にガイドツアーが出発します。二名様分ご予約しましょうか？',
    fa: 'بله، یک تور با راهنما ساعت نه حرکت می‌کند؛ دو جا برایتان رزرو کنم؟', hi: 'हाँ, एक गाइडेड टूर नौ बजे निकलता है; क्या मैं आपके लिए दो सीटें बुक कर दूँ?',
  }, { zh: 'kěyǐ, jiǔ diǎn yǒu dǎoyóu dài tuán chūfā, yào bāng nín yùdìng liǎng ge wèizi ma?', ja: 'hai, ku-ji ni gaido tsuā ga shuppatsu shimasu. nimei-sama-bun go-yoyaku shimashō ka?' }),
  P('ph6', 'c', {
    fr: 'Avec plaisir, merci pour votre accueil.', en: 'With pleasure, thank you for your hospitality.',
    ar: 'بكل سرور، شكرًا على حسن الاستقبال.', es: 'Con mucho gusto, gracias por su hospitalidad.',
    it: "Con piacere, grazie per l'accoglienza.", pt: 'Com todo o gosto, obrigado pela hospitalidade.',
    zh: '好的，谢谢你们的热情接待。', ja: 'ぜひお願いします。温かいおもてなしをありがとうございます。',
    fa: 'با کمال میل، از پذیرایی‌تان ممنونم.', hi: 'ज़रूर, आपकी मेहमाननवाज़ी के लिए धन्यवाद।',
  }, { zh: 'hǎo de, xièxie nǐmen de rèqíng jiēdài.', ja: 'zehi onegai shimasu. atatakai omotenashi o arigatō gozaimasu.' }),

  // ── Tech & numérique ─────────────────────────────────────────
  P('pt1', 'c', {
    fr: "Le déploiement d'hier a provoqué une panne en production.", en: "Yesterday's deployment caused an outage in production.",
    ar: 'تسبّب النشر الذي جرى أمس في عطل في بيئة الإنتاج.', es: 'El despliegue de ayer provocó una caída en producción.',
    it: 'Il rilascio di ieri ha causato un guasto in produzione.', pt: 'A implementação de ontem provocou uma falha em produção.',
    zh: '昨天的上线导致生产环境出现故障。', ja: '昨日のデプロイで本番環境に障害が発生しました。',
    fa: 'استقرار دیروز باعث قطعی در محیط عملیاتی شد.', hi: 'कल की तैनाती से प्रोडक्शन में आउटेज हो गया।',
  }, { zh: 'zuótiān de shàngxiàn dǎozhì shēngchǎn huánjìng chūxiàn gùzhàng.', ja: 'kinō no depuroi de honban kankyō ni shōgai ga hassei shimashita.' }),
  P('pt2', 'l', {
    fr: "J'ai consulté les journaux : une variable d'environnement manquait.", en: 'I checked the logs: an environment variable was missing.',
    ar: 'راجعت السجلات: كان أحد متغيرات البيئة مفقودًا.', es: 'Revisé los registros: faltaba una variable de entorno.',
    it: "Ho controllato i log: mancava una variabile d'ambiente.", pt: 'Consultei os registos: faltava uma variável de ambiente.',
    zh: '我查了日志，缺少了一个环境变量。', ja: 'ログを確認したところ、環境変数が一つ欠けていました。',
    fa: 'لاگ‌ها را بررسی کردم: یک متغیر محیطی وجود نداشت.', hi: 'मैंने लॉग देखे: एक एनवायरनमेंट वेरिएबल ग़ायब था।',
  }, { zh: 'wǒ chále rìzhì, quēshǎole yí ge huánjìng biànliàng.', ja: 'rogu o kakunin shita tokoro, kankyō hensū ga hitotsu kakete imashita.' }),
  P('pt3', 'c', {
    fr: "Combien d'utilisateurs ont été affectés ?", en: 'How many users were affected?',
    ar: 'كم عدد المستخدمين المتأثرين؟', es: '¿Cuántos usuarios se vieron afectados?',
    it: 'Quanti utenti sono stati colpiti?', pt: 'Quantos utilizadores foram afetados?',
    zh: '有多少用户受到了影响？', ja: '何人のユーザーに影響がありましたか？',
    fa: 'چند کاربر تحت تأثیر قرار گرفتند؟', hi: 'कितने उपयोगकर्ता प्रभावित हुए?',
  }, { zh: 'yǒu duōshao yònghù shòudàole yǐngxiǎng?', ja: 'nan-nin no yūzā ni eikyō ga arimashita ka?' }),
  P('pt4', 'l', {
    fr: 'Environ huit cents, pendant quarante minutes ; le service est rétabli.', en: 'About eight hundred, for forty minutes; the service has been restored.',
    ar: 'نحو ثمانمئة مستخدم لمدة أربعين دقيقة؛ وقد استُعيدت الخدمة.', es: 'Unos ochocientos, durante cuarenta minutos; el servicio ya está restablecido.',
    it: 'Circa ottocento, per quaranta minuti; il servizio è stato ripristinato.', pt: 'Cerca de oitocentos, durante quarenta minutos; o serviço já foi restabelecido.',
    zh: '大约八百人，持续了四十分钟，服务已经恢复。', ja: '約八百人で、四十分間でした。サービスは復旧済みです。',
    fa: 'حدود هشتصد نفر، به مدت چهل دقیقه؛ سرویس دوباره برقرار شده است.', hi: 'लगभग आठ सौ, चालीस मिनट तक; सेवा बहाल कर दी गई है।',
  }, { zh: 'dàyuē bābǎi rén, chíxùle sìshí fēnzhōng, fúwù yǐjīng huīfù.', ja: 'yaku happyaku-nin de, yonjuppun-kan deshita. sābisu wa fukkyū-zumi desu.' }),
  P('pt5', 'c', {
    fr: 'Il faut ajouter un test automatique pour éviter que cela se reproduise.', en: "We need to add an automated test so this doesn't happen again.",
    ar: 'يجب إضافة اختبار آلي لتفادي تكرار ذلك.', es: 'Hay que añadir una prueba automática para que no vuelva a ocurrir.',
    it: 'Bisogna aggiungere un test automatico perché non si ripeta.', pt: 'É preciso adicionar um teste automático para que isto não se repita.',
    zh: '需要增加一个自动化测试，避免再次发生。', ja: '再発防止のため、自動テストを追加する必要があります。',
    fa: 'باید یک تست خودکار اضافه کنیم تا دوباره تکرار نشود.', hi: 'ऐसा दोबारा न हो, इसके लिए एक ऑटोमेटेड टेस्ट जोड़ना होगा।',
  }, { zh: 'xūyào zēngjiā yí ge zìdònghuà cèshì, bìmiǎn zàicì fāshēng.', ja: 'saihatsu bōshi no tame, jidō tesuto o tsuika suru hitsuyō ga arimasu.' }),
  P('pt6', 'l', {
    fr: "D'accord, je rédige le post-mortem et j'ouvre un ticket aujourd'hui.", en: "Agreed, I'll write the post-mortem and open a ticket today.",
    ar: 'حسنًا، سأكتب تقرير ما بعد الحادث وأفتح تذكرة اليوم.', es: 'De acuerdo, redacto el informe post mortem y abro un ticket hoy.',
    it: "D'accordo, scrivo il post-mortem e apro un ticket oggi.", pt: 'Combinado, escrevo o post-mortem e abro um ticket hoje.',
    zh: '好的，我今天写事故复盘报告并提交工单。', ja: '了解です。今日中に事後報告書を書いて、チケットを起票します。',
    fa: 'باشه، امروز گزارش پس از حادثه را می‌نویسم و یک تیکت باز می‌کنم.', hi: 'ठीक है, मैं आज ही पोस्ट-मॉर्टम लिखकर एक टिकट खोलता हूँ।',
  }, { zh: 'hǎo de, wǒ jīntiān xiě shìgù fùpán bàogào bìng tíjiāo gōngdān.', ja: 'ryōkai desu. kyō-jū ni jigo hōkokusho o kaite, chiketto o kihyō shimasu.' }),

  // ── Santé & soins (l'apprenant est soignant) ─────────────────
  P('ps1', 'l', {
    fr: "Bonjour, je suis l'infirmier de garde. Où avez-vous mal ?", en: "Hello, I'm the nurse on duty. Where does it hurt?",
    ar: 'مرحبًا، أنا الممرض المناوب. أين تشعر بالألم؟', es: 'Hola, soy el enfermero de guardia. ¿Dónde le duele?',
    it: "Buongiorno, sono l'infermiere di turno. Dove le fa male?", pt: 'Olá, sou o enfermeiro de serviço. Onde lhe dói?',
    zh: '您好，我是值班护士。您哪里不舒服？', ja: 'こんにちは、当直の看護師です。どこが痛みますか？',
    fa: 'سلام، من پرستار کشیک هستم. کجایتان درد می‌کند؟', hi: 'नमस्ते, मैं ड्यूटी पर तैनात नर्स हूँ। आपको कहाँ दर्द है?',
  }, { zh: 'nín hǎo, wǒ shì zhíbān hùshi. nín nǎlǐ bù shūfu?', ja: 'konnichiwa, tōchoku no kangoshi desu. doko ga itamimasu ka?' }),
  P('ps2', 'c', {
    fr: "J'ai mal à la poitrine depuis ce matin.", en: "I've had chest pain since this morning.",
    ar: 'أشعر بألم في صدري منذ الصباح.', es: 'Me duele el pecho desde esta mañana.',
    it: 'Ho dolore al petto da stamattina.', pt: 'Tenho dores no peito desde esta manhã.',
    zh: '我从今天早上开始胸口疼。', ja: '今朝から胸が痛いです。',
    fa: 'از صبح قفسه سینه‌ام درد می‌کند.', hi: 'मुझे आज सुबह से सीने में दर्द है।',
  }, { zh: 'wǒ cóng jīntiān zǎoshang kāishǐ xiōngkǒu téng.', ja: 'kesa kara mune ga itai desu.' }),
  P('ps3', 'l', {
    fr: "Sur une échelle de un à dix, quelle est l'intensité de la douleur ?", en: 'On a scale of one to ten, how intense is the pain?',
    ar: 'على مقياس من واحد إلى عشرة، ما شدة الألم؟', es: 'En una escala del uno al diez, ¿qué intensidad tiene el dolor?',
    it: 'Su una scala da uno a dieci, quanto è forte il dolore?', pt: 'Numa escala de um a dez, qual é a intensidade da dor?',
    zh: '如果用一到十来表示，您的疼痛有多严重？', ja: '一から十で言うと、痛みはどのくらいですか？',
    fa: 'در مقیاس یک تا ده، شدت درد چقدر است؟', hi: 'एक से दस के पैमाने पर, दर्द कितना तेज़ है?',
  }, { zh: 'rúguǒ yòng yī dào shí lái biǎoshì, nín de téngtòng yǒu duō yánzhòng?', ja: 'ichi kara jū de iu to, itami wa dono kurai desu ka?' }),
  P('ps4', 'c', {
    fr: "Environ sept, et j'ai du mal à respirer.", en: "About seven, and I'm having trouble breathing.",
    ar: 'حوالي سبعة، وأجد صعوبة في التنفس.', es: 'Más o menos un siete, y me cuesta respirar.',
    it: 'Circa sette, e faccio fatica a respirare.', pt: 'Cerca de sete, e tenho dificuldade em respirar.',
    zh: '大概七分，而且呼吸困难。', ja: '七くらいです。それに息が苦しいです。',
    fa: 'حدود هفت، و نفس کشیدن برایم سخت است.', hi: 'लगभग सात, और मुझे साँस लेने में तकलीफ़ हो रही है।',
  }, { zh: 'dàgài qī fēn, érqiě hūxī kùnnan.', ja: 'nana kurai desu. sore ni iki ga kurushii desu.' }),
  P('ps5', 'l', {
    fr: 'Je préviens immédiatement le médecin et je fais un électrocardiogramme.', en: "I'll alert the doctor immediately and do an ECG.",
    ar: 'سأبلغ الطبيب فورًا وأجري تخطيطًا للقلب.', es: 'Aviso inmediatamente al médico y le hago un electrocardiograma.',
    it: 'Avviso subito il medico e faccio un elettrocardiogramma.', pt: 'Vou avisar já o médico e fazer um eletrocardiograma.',
    zh: '我马上通知医生，给您做个心电图。', ja: 'すぐに医師に知らせて、心電図をとります。',
    fa: 'فوراً به پزشک خبر می‌دهم و نوار قلب می‌گیرم.', hi: 'मैं तुरंत डॉक्टर को बुलाता हूँ और ईसीजी करता हूँ।',
  }, { zh: 'wǒ mǎshàng tōngzhī yīshēng, gěi nín zuò ge xīndiàntú.', ja: 'sugu ni ishi ni shirasete, shindenzu o torimasu.' }),
  P('ps6', 'c', {
    fr: 'Merci, ça me rassure.', en: 'Thank you, that reassures me.',
    ar: 'شكرًا، هذا يطمئنني.', es: 'Gracias, eso me tranquiliza.',
    it: 'Grazie, mi rassicura.', pt: 'Obrigado, isso tranquiliza-me.',
    zh: '谢谢，这让我放心多了。', ja: 'ありがとうございます。安心しました。',
    fa: 'ممنون، خیالم راحت شد.', hi: 'धन्यवाद, इससे मुझे तसल्ली हुई।',
  }, { zh: 'xièxie, zhè ràng wǒ fàngxīn duō le.', ja: 'arigatō gozaimasu. anshin shimashita.' }),

  // ── Logistique & commerce international ──────────────────────
  P('pl1', 'c', {
    fr: 'Où en est notre conteneur ? Il devait arriver lundi.', en: "What's the status of our container? It was due on Monday.",
    ar: 'ما وضع حاويتنا؟ كان من المفترض أن تصل يوم الاثنين.', es: '¿Cómo va nuestro contenedor? Debía llegar el lunes.',
    it: 'A che punto è il nostro container? Doveva arrivare lunedì.', pt: 'Qual é a situação do nosso contentor? Devia chegar na segunda-feira.',
    zh: '我们的集装箱现在到哪儿了？本来应该周一到。', ja: '弊社のコンテナはどうなっていますか？月曜日に着く予定でした。',
    fa: 'کانتینر ما در چه وضعی است؟ قرار بود دوشنبه برسد.', hi: 'हमारे कंटेनर की क्या स्थिति है? उसे सोमवार को पहुँचना था।',
  }, { zh: 'wǒmen de jízhuāngxiāng xiànzài dào nǎr le? běnlái yīnggāi zhōuyī dào.', ja: 'heisha no kontena wa dō natte imasu ka? getsuyōbi ni tsuku yotei deshita.' }),
  P('pl2', 'l', {
    fr: "Le navire a été retardé au port de transbordement ; l'arrivée est prévue jeudi.", en: 'The vessel was delayed at the transshipment port; arrival is expected on Thursday.',
    ar: 'تأخرت السفينة في ميناء المسافنة، ومن المتوقع وصولها يوم الخميس.', es: 'El buque se retrasó en el puerto de transbordo; la llegada está prevista para el jueves.',
    it: "La nave è stata ritardata nel porto di trasbordo; l'arrivo è previsto per giovedì.", pt: 'O navio atrasou-se no porto de transbordo; a chegada está prevista para quinta-feira.',
    zh: '船在中转港延误了，预计周四到港。', ja: '本船が積み替え港で遅れており、木曜日に到着する見込みです。',
    fa: 'کشتی در بندر ترانشیپ تأخیر داشت؛ ورود آن پنجشنبه پیش‌بینی می‌شود.', hi: 'जहाज़ ट्रांसशिपमेंट बंदरगाह पर देर से चला; उसके गुरुवार को पहुँचने की उम्मीद है।',
  }, { zh: 'chuán zài zhōngzhuǎngǎng yánwù le, yùjì zhōusì dào gǎng.', ja: 'honsen ga tsumikae-kō de okurete ori, mokuyōbi ni tōchaku suru mikomi desu.' }),
  P('pl3', 'c', {
    fr: 'Les documents pour la douane sont-ils prêts ?', en: 'Are the customs documents ready?',
    ar: 'هل وثائق الجمارك جاهزة؟', es: '¿Están listos los documentos para la aduana?',
    it: 'I documenti per la dogana sono pronti?', pt: 'Os documentos para a alfândega estão prontos?',
    zh: '报关单据准备好了吗？', ja: '通関書類は準備できていますか？',
    fa: 'مدارک گمرکی آماده است؟', hi: 'क्या सीमा शुल्क के दस्तावेज़ तैयार हैं?',
  }, { zh: 'bàoguān dānjù zhǔnbèi hǎo le ma?', ja: 'tsūkan shorui wa junbi dekite imasu ka?' }),
  P('pl4', 'l', {
    fr: "Il manque encore le certificat d'origine du fournisseur.", en: "We're still missing the supplier's certificate of origin.",
    ar: 'لا تزال شهادة المنشأ من المورّد ناقصة.', es: 'Todavía falta el certificado de origen del proveedor.',
    it: 'Manca ancora il certificato di origine del fornitore.', pt: 'Ainda falta o certificado de origem do fornecedor.',
    zh: '还缺供应商的原产地证书。', ja: 'サプライヤーの原産地証明書がまだ届いていません。',
    fa: 'گواهی مبدأ تأمین‌کننده هنوز نرسیده است.', hi: 'आपूर्तिकर्ता का मूल प्रमाणपत्र अभी भी बाक़ी है।',
  }, { zh: 'hái quē gōngyìngshāng de yuánchǎndì zhèngshū.', ja: 'sapuraiyā no gensanchi shōmeisho ga mada todoite imasen.' }),
  P('pl5', 'c', {
    fr: "Relancez-le aujourd'hui, sinon nous paierons des frais de surestaries.", en: "Chase them today, otherwise we'll pay demurrage charges.",
    ar: 'تابعه اليوم، وإلا سندفع رسوم التأخير.', es: 'Reclámeselo hoy; si no, pagaremos gastos de demora.',
    it: 'Lo solleciti oggi, altrimenti pagheremo le spese di controstallia.', pt: 'Insista com ele hoje, senão vamos pagar sobre-estadia.',
    zh: '今天就催一下，不然我们要付滞期费。', ja: '今日中に催促してください。でないと、デマレージが発生します。',
    fa: 'امروز پیگیری کنید، وگرنه باید هزینه دموراژ بپردازیم.', hi: 'आज ही उनसे पूछिए, वरना हमें डेमरेज शुल्क देना पड़ेगा।',
  }, { zh: 'jīntiān jiù cuī yíxià, bùrán wǒmen yào fù zhìqīfèi.', ja: 'kyō-jū ni saisoku shite kudasai. de nai to, demarēji ga hassei shimasu.' }),
  P('pl6', 'l', {
    fr: "C'est fait, il m'a promis de l'envoyer avant midi.", en: 'Done, they promised to send it before noon.',
    ar: 'تمّ ذلك، وقد وعدني بإرساله قبل الظهر.', es: 'Hecho, me ha prometido enviarlo antes del mediodía.',
    it: 'Fatto, mi ha promesso di inviarlo entro mezzogiorno.', pt: 'Já está, prometeu enviá-lo antes do meio-dia.',
    zh: '已经催了，他答应中午前发过来。', ja: '連絡済みです。正午までに送ると約束してくれました。',
    fa: 'انجام شد؛ قول داد تا قبل از ظهر بفرستد.', hi: 'हो गया, उन्होंने दोपहर से पहले भेजने का वादा किया है।',
  }, { zh: 'yǐjīng cuī le, tā dāying zhōngwǔ qián fā guòlai.', ja: 'renraku-zumi desu. shōgo made ni okuru to yakusoku shite kuremashita.' }),
];
