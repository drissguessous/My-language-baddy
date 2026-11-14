# Audit des traductions — rapport

Généré par le workflow « Audit des traductions ». Mesures : similarité LaBSE entre la source française et la
traduction (seuil 0.75), rétro-traduction NLLB-200 vers le français et similarité avec la source (seuil 0.8), chrF.
Une phrase signalée n’est pas forcément fausse : c’est une alerte à examiner.

| Langue | Phrases | Signalées | LaBSE direct moyen | Rétro-traduction moyenne |
|---|---|---|---|---|
| en | 120 | 6 | 0.899 | 0.947 |
| ar | 120 | 15 | 0.885 | 0.920 |
| es | 120 | 6 | 0.936 | 0.944 |
| it | 120 | 9 | 0.930 | 0.941 |
| pt | 120 | 10 | 0.932 | 0.932 |
| zh | 120 | 27 | 0.836 | 0.863 |
| ja | 120 | 31 | 0.836 | 0.853 |
| ber | 36 | 21 | — | 0.715 |
| fa | 120 | 17 | 0.892 | 0.907 |
| hi | 120 | 16 | 0.885 | 0.924 |

## Phrases signalées

| id | langue | source | traduction | rétro-traduction | LaBSE | rétro |
|---|---|---|---|---|---|---|
| x1 | ar | Il ne faut pas vendre la peau de l'ours avant de l'avoir tué. | لا تستبق الأحداث قبل أوانها. | Ne précipitez pas les événements. | 0.449 | 0.31 |
| f6 | ar | Voilà. Bonne journée ! | تفضل. يومًا سعيدًا! | Je vous souhaite une bonne journée. | 0.714 | 0.561 |
| pl1 | ar | Où en est notre conteneur ? Il devait arriver lundi. | ما وضع حاويتنا؟ كان من المفترض أن تصل يوم الاثنين. | Le conteneur devait arriver lundi. | 0.679 | 0.687 |
| f5 | ar | L'addition, s'il vous plaît. | الحساب من فضلك. | Le compte, s'il vous plaît. | 0.608 | 0.703 |
| ps1 | ar | Bonjour, je suis l'infirmier de garde. Où avez-vous mal ? | مرحبًا، أنا الممرض المناوب. أين تشعر بالألم؟ | Je suis l'infirmière de service. | 0.811 | 0.716 |
| g3 | ar | Bien, merci. Bienvenue ! | بخير، شكرًا. أهلًا وسهلًا! | Je vais bien, merci. | 0.877 | 0.719 |
| ph2 | ar | Oui, merci. Mon fils est allergique aux arachides. | نعم، شكرًا. ابني لديه حساسية من الفول السوداني. | Mon fils est allergique aux cacahuètes. | 0.914 | 0.745 |
| a6 | ar | En compensant par plus de flexibilité sur les horaires. | بالتعويض بمرونة أكبر في أوقات العمل. | Avec une rémunération plus souple pour les heures de travail. | 0.808 | 0.758 |
| s5 | ar | Bien sûr, les cabines sont au fond. | طبعًا، غرف القياس في الخلف. | Bien sûr, les salles de mesure sont à l'arrière. | 0.641 | 0.777 |
| x3 | ar | Dites-le-lui avec tact : il est très susceptible. | قل له ذلك بلباقة، فهو سريع الانفعال. | Dis-le-lui gentiment, il est tendu. | 0.772 | 0.783 |
| f1 | ar | Bonjour, qu'est-ce que vous désirez ? | مرحبًا، ماذا تريد؟ | Vous voulez quoi ? | 0.924 | 0.784 |
| s4 | ar | Du M, mais je voudrais l'essayer. | مقاس متوسط، لكن أريد أن أجربها. | Une taille moyenne, mais je veux l'essayer. | 0.766 | 0.784 |
| pt4 | ar | Environ huit cents, pendant quarante minutes ; le service est rétabli. | نحو ثمانمئة مستخدم لمدة أربعين دقيقة؛ وقد استُعيدت الخدمة. | Près de 800 utilisateurs pendant 40 minutes; le service est rétabli. | 0.808 | 0.789 |
| x6 | ar | Je le condenserai pour n'en garder que l'essentiel. | سأختصره لأحتفظ بالأساسي فقط. | Je vais raccourcir pour ne retenir que le fond. | 0.791 | 0.792 |
| x4 | ar | Je vais formuler ma critique sous forme de suggestion. | سأصوغ نقدي في شكل اقتراح. | Je vais formuler ma critique sous la forme d'une proposition. | 0.716 | 0.973 |
| f5 | ber | L'addition, s'il vous plaît. | Lḥsab, ttxil. | Le calcul, c'est bien. | — | 0.347 |
| g2 | ber | Très bien, merci. Et vous ? | Labas, tanmmirt. D kyyi? | Je vous en prie, mémoire. C'est qui ? | — | 0.384 |
| g4 | ber | Merci beaucoup. | Tanmmirt bahra. | L'expérience est très intéressante. | — | 0.439 |
| n4 | ber | Ça fait vingt euros. | Ɛacrin n uru. | Ils ont quitté l'Europe. | — | 0.458 |
| g3 | ber | Bien, merci. Bienvenue ! | Labas, tanmmirt. Ansuf! | S'il vous plaît, écoutez-moi. Je suis désolé ! | — | 0.472 |
| i3 | ber | D'où venez-vous ? | Manis d tkkit? | Qui est la victime ? | — | 0.481 |
| g5 | ber | Au revoir, à demain ! | Ar timlilit, ar azekka! | À la nuit tombée, à la tombée de la nuit ! | — | 0.487 |
| n1 | ber | Quelle heure est-il ? | Mnck a tga tasaɛt? | Est-ce que c'est une compétition ? | — | 0.511 |
| n5 | ber | J'ai rendez-vous lundi à dix heures. | Ɣuri lmuɛad ass n aynas g tasaɛt tis mraw. | Le jeune homme a travaillé aujourd'hui à dix heures. | — | 0.527 |
| d2 | ber | Allez tout droit, puis tournez à gauche. | Ddu nican, tɛddit s uzlmaḍ. | En arrivant à Nichan, elle tourne à gauche. | — | 0.529 |
| n6 | ber | Parfait, à lundi ! | Ifulki, ar aynas! | C'est bon, c'est comme ça ! | — | 0.541 |
| n3 | ber | Combien ça coûte ? | Mnck ayd isswa? | Qu'est-ce qu'il est devenu ? | — | 0.555 |
| k1 | ber | Quelle est ta couleur préférée ? | Man ini ayd tḥmmlt? | Qu'est-ce que vous avez pensé ? | — | 0.595 |
| i4 | ber | Je viens du Maroc, j'habite à Agadir. | Nkki zg Lmɣrib, zdɣɣ g Agadir. | Nous étions en Afrique, j'habitais dans la forêt. | — | 0.623 |
| k2 | ber | J'aime le rouge et le jaune. | Ḥmmlɣ azggaɣ d uwraɣ. | J'ai pris la main droite et la gauche. | — | 0.637 |
| d1 | ber | Excusez-moi, où est la gare ? | Smḥ iyi, mani tlla lgar? | Dis-moi, où est l'arbre ? | — | 0.655 |
| d6 | ber | Oui, le bus 12 s'arrête juste en face. | Yah, ṭṭubis 12 ibedd ɣ tama ad. | Oui, l'hôtel 12 est situé à proximité. | — | 0.69 |
| f2 | ber | Un café et un jus d'orange, s'il vous plaît. | Yan lqhwa d yan lɛṣir n tlimunt, ttxil. | Une tasse de café et une tasse de citron ont été consommées. | — | 0.716 |
| d5 | ber | Je peux prendre le bus ? | Is zḍarɣ ad ddu s ṭṭubis? | Est-ce que je peux aller à Toulouse ? | — | 0.741 |
| f4 | ber | Non, sans sucre, merci. | Uhu, bla ssukkar, tanmmirt. | Oh, sans sucre, la mémoire. | — | 0.742 |
| g1 | ber | Bonjour ! Comment allez-vous ? | Azul! Mamk a tgit? | Allez ! Comment allez-vous ? | — | 0.771 |
| f6 | en | Voilà. Bonne journée ! | Here you are. Have a nice day! | Je vous en prie, passez une bonne journée. | 0.85 | 0.541 |
| x1 | en | Il ne faut pas vendre la peau de l'ours avant de l'avoir tué. | Don't count your chickens before they hatch. | Ne comptez pas vos poules avant qu'elles n'éclosent. | 0.582 | 0.624 |
| ps1 | en | Bonjour, je suis l'infirmier de garde. Où avez-vous mal ? | Hello, I'm the nurse on duty. Where does it hurt? | Je suis l'infirmière de service. | 0.882 | 0.716 |
| f5 | en | L'addition, s'il vous plaît. | The bill, please. | La note, s'il vous plaît. | 0.629 | 0.724 |
| pl1 | en | Où en est notre conteneur ? Il devait arriver lundi. | What's the status of our container? It was due on Monday. | Quel est l'état de notre conteneur ? | 0.739 | 0.733 |
| ph2 | en | Oui, merci. Mon fils est allergique aux arachides. | Yes, thank you. My son is allergic to peanuts. | Mon fils est allergique aux arachides. | 0.94 | 0.784 |
| f6 | es | Voilà. Bonne journée ! | Aquí tiene. ¡Que tenga un buen día! | Je vous en prie, passez une bonne journée. | 0.826 | 0.541 |
| f5 | es | L'addition, s'il vous plaît. | La cuenta, por favor. | Le compte, s'il vous plaît. | 0.704 | 0.703 |
| f1 | es | Bonjour, qu'est-ce que vous désirez ? | Hola, ¿qué desea? | Bonjour, que puis-je pour vous ? | 0.957 | 0.722 |
| pl1 | es | Où en est notre conteneur ? Il devait arriver lundi. | ¿Cómo va nuestro contenedor? Debía llegar el lunes. | Comment va notre conteneur ? | 0.848 | 0.756 |
| s5 | es | Bien sûr, les cabines sont au fond. | Claro, los probadores están al fondo. | Bien sûr, les testeurs sont au fond. | 0.81 | 0.757 |
| i1 | es | Comment vous appelez-vous ? | ¿Cómo se llama? | C'est quoi son nom ? | 0.853 | 0.781 |
| x1 | fa | Il ne faut pas vendre la peau de l'ours avant de l'avoir tué. | جوجه را آخر پاییز می‌شمارند. | On compte les poulets à la fin de l'automne. | 0.294 | 0.359 |
| f6 | fa | Voilà. Bonne journée ! | بفرمایید. روز خوبی داشته باشید! | Je vous souhaite une bonne journée. | 0.692 | 0.561 |
| s5 | fa | Bien sûr, les cabines sont au fond. | البته، اتاق پرو ته فروشگاه است. | Bien sûr, la chambre Pro est au fond du magasin. | 0.641 | 0.624 |
| s6 | fa | Elle me va bien. Je peux payer par carte ? | اندازه‌ام است. می‌توانم با کارت پرداخت کنم؟ | C'est ma taille. Puis-je payer par carte de crédit ? | 0.753 | 0.666 |
| o3 | fa | Je ne suis pas tout à fait d'accord : la fin était logique. | کاملاً موافق نیستم؛ پایانش منطقی بود. | Je ne suis pas tout à fait d'accord. | 0.948 | 0.677 |
| ps1 | fa | Bonjour, je suis l'infirmier de garde. Où avez-vous mal ? | سلام، من پرستار کشیک هستم. کجایتان درد می‌کند؟ | Je suis l'infirmière du curé. | 0.923 | 0.682 |
| f5 | fa | L'addition, s'il vous plaît. | صورت‌حساب، لطفاً. | Le compte, s'il vous plaît. | 0.704 | 0.703 |
| g3 | fa | Bien, merci. Bienvenue ! | خوبم، ممنون. خوش آمدید! | Je vais bien, merci. | 0.929 | 0.719 |
| ph6 | fa | Avec plaisir, merci pour votre accueil. | با کمال میل، از پذیرایی‌تان ممنونم. | Merci beaucoup de m'avoir accueilli. | 0.809 | 0.723 |
| x3 | fa | Dites-le-lui avec tact : il est très susceptible. | با ملاحظه به او بگویید؛ خیلی زودرنج است. | Dites-lui gentiment, il est trop précoce. | 0.81 | 0.732 |
| pl1 | fa | Où en est notre conteneur ? Il devait arriver lundi. | کانتینر ما در چه وضعی است؟ قرار بود دوشنبه برسد. | Quel est l'état de notre conteneur ? | 0.862 | 0.733 |
| f1 | fa | Bonjour, qu'est-ce que vous désirez ? | سلام، چه میل دارید؟ | Bonjour, que puis-je vous offrir ? | 0.885 | 0.744 |
| pl5 | fa | Relancez-le aujourd'hui, sinon nous paierons des frais de surestaries. | امروز پیگیری کنید، وگرنه باید هزینه دموراژ بپردازیم. | Suivez-le aujourd'hui, ou nous devrons payer le loyer. | 0.771 | 0.745 |
| s4 | fa | Du M, mais je voudrais l'essayer. | سایز مدیوم، ولی می‌خواهم امتحانش کنم. | C'est une taille moyenne, mais je veux l'essayer. | 0.812 | 0.75 |
| pt1 | fa | Le déploiement d'hier a provoqué une panne en production. | استقرار دیروز باعث قطعی در محیط عملیاتی شد. | Le déploiement d'hier a provoqué une perturbation de l'environnement opérationnel. | 0.663 | 0.814 |
| ph4 | fa | Est-il possible de visiter la médina demain ? | آیا فردا می‌شود از شهر قدیمی دیدن کرد؟ | Est-il possible de visiter la vieille ville demain ? | 0.739 | 0.852 |
| s1 | fa | Je peux vous aider ? | کمکی از دستم برمی‌آید؟ | Je peux t'aider ? | 0.737 | 0.998 |
| x1 | hi | Il ne faut pas vendre la peau de l'ours avant de l'avoir tué. | पहले से ही ख़याली पुलाव मत पकाओ। | Ne préparez pas d'idées. | 0.458 | 0.337 |
| f6 | hi | Voilà. Bonne journée ! | यह लीजिए। आपका दिन शुभ हो! | Je vous souhaite une bonne journée. | 0.725 | 0.561 |
| x3 | hi | Dites-le-lui avec tact : il est très susceptible. | उसे नरमी से बताइए, वह बहुत जल्दी बुरा मान जाता है। | Dis-le doucement, il est trop facile de le prendre pour un méchant. | 0.703 | 0.609 |
| ps1 | hi | Bonjour, je suis l'infirmier de garde. Où avez-vous mal ? | नमस्ते, मैं ड्यूटी पर तैनात नर्स हूँ। आपको कहाँ दर्द है? | Je suis une infirmière en service. | 0.883 | 0.702 |
| g3 | hi | Bien, merci. Bienvenue ! | मैं भी ठीक हूँ, धन्यवाद। स्वागत है! | Je vais bien, merci. | 0.728 | 0.719 |
| f5 | hi | L'addition, s'il vous plaît. | बिल दीजिए, कृपया। | La note, s'il vous plaît. | 0.667 | 0.724 |
| ph6 | hi | Avec plaisir, merci pour votre accueil. | ज़रूर, आपकी मेहमाननवाज़ी के लिए धन्यवाद। | Bien sûr, merci pour votre hospitalité. | 0.75 | 0.734 |
| x6 | hi | Je le condenserai pour n'en garder que l'essentiel. | मैं इसे छोटा करके सिर्फ़ ज़रूरी बातें रखूँगा। | Je vais le réduire à l'essentiel. | 0.759 | 0.743 |
| pt6 | hi | D'accord, je rédige le post-mortem et j'ouvre un ticket aujourd'hui. | ठीक है, मैं आज ही पोस्ट-मॉर्टम लिखकर एक टिकट खोलता हूँ। | Je vais ouvrir un timbre aujourd'hui en écrivant une autopsie. | 0.885 | 0.759 |
| pl5 | hi | Relancez-le aujourd'hui, sinon nous paierons des frais de surestaries. | आज ही उनसे पूछिए, वरना हमें डेमरेज शुल्क देना पड़ेगा। | Demandez-leur dès aujourd'hui, ou nous devrons payer des frais de déménagement. | 0.774 | 0.764 |
| s5 | hi | Bien sûr, les cabines sont au fond. | ज़रूर, ट्रायल रूम पीछे की तरफ़ हैं। | Bien sûr, les salles d'audience sont à l'arrière. | 0.734 | 0.766 |
| a6 | hi | En compensant par plus de flexibilité sur les horaires. | काम के घंटों में ज़्यादा लचीलापन देकर इसकी भरपाई की जा सकती है। | Cela peut être compensé par une plus grande flexibilité dans les heures de travail. | 0.696 | 0.775 |
| s4 | hi | Du M, mais je voudrais l'essayer. | मीडियम, लेकिन मैं इसे पहनकर देखना चाहता हूँ। | Médium, mais je veux essayer de le porter. | 0.715 | 0.781 |
| a5 | hi | Et comment garantir l'équité entre ceux qui peuvent télétravailler et les autres ? | और जो लोग घर से काम कर सकते हैं और जो नहीं कर सकते, उनके बीच निष्पक्षता कैसे सुनिश्चित करें? | Et comment assurer l'équité entre ceux qui peuvent travailler à domicile et ceux qui ne le peuvent pas ? | 0.773 | 0.799 |
| ph4 | hi | Est-il possible de visiter la médina demain ? | क्या कल पुराना शहर घूमना संभव है? | Est-il possible de visiter la vieille ville demain ? | 0.738 | 0.852 |
| pt2 | hi | J'ai consulté les journaux : une variable d'environnement manquait. | मैंने लॉग देखे: एक एनवायरनमेंट वेरिएबल ग़ायब था। | J'ai vu les journaux: une variable environnementale manquait. | 0.649 | 0.944 |
| x1 | it | Il ne faut pas vendre la peau de l'ours avant de l'avoir tué. | Non dire gatto se non ce l'hai nel sacco. | Ne dites pas "chat" si vous n'en avez pas dans le sac. | 0.485 | 0.473 |
| f6 | it | Voilà. Bonne journée ! | Ecco a Lei. Buona giornata! | Je vous souhaite une bonne journée. | 0.814 | 0.561 |
| pl1 | it | Où en est notre conteneur ? Il devait arriver lundi. | A che punto è il nostro container? Doveva arrivare lunedì. | Le conteneur devait arriver lundi. | 0.902 | 0.687 |
| f5 | it | L'addition, s'il vous plaît. | Il conto, per favore. | Le compte, s'il vous plaît. | 0.713 | 0.703 |
| s6 | it | Elle me va bien. Je peux payer par carte ? | Mi sta bene. Posso pagare con la carta? | Je peux payer par carte ? | 0.907 | 0.734 |
| i1 | it | Comment vous appelez-vous ? | Come si chiama? | C'est quoi son nom ? | 0.833 | 0.781 |
| r1 | it | À quelle heure vous levez-vous ? | A che ora si alza? | À quelle heure se lève-t-il ? | 0.74 | 0.877 |
| s3 | it | Quelle taille faites-vous ? | Che taglia porta? | Quelle taille portez-vous ? | 0.74 | 0.955 |
| i3 | it | D'où venez-vous ? | Di dov'è Lei? | D'où venez-vous ? | 0.638 | 1.0 |
| x6 | ja | Je le condenserai pour n'en garder que l'essentiel. | 要点だけを残して簡潔にまとめます。 | Je vais vous résumer en quelques mots. | 0.657 | 0.464 |
| a2 | ja | Dans une certaine mesure, car on perd moins de temps dans les transports. | ある程度はそうです。通勤時間が減りますから。 | Dans une certaine mesure, oui. | 0.815 | 0.472 |
| x1 | ja | Il ne faut pas vendre la peau de l'ours avant de l'avoir tué. | 捕らぬ狸の皮算用はやめましょう。 | Arrêtez de compter les peaux des mouches que vous n'avez pas prises. | 0.468 | 0.521 |
| k6 | ja | Oui ! C'est génial ! | うん！やったー！ | Je l'ai fait ! | 0.721 | 0.524 |
| s1 | ja | Je peux vous aider ? | 何かお探しですか？ | Vous cherchez quelque chose ? | 0.512 | 0.526 |
| n6 | ja | Parfait, à lundi ! | 分かりました。では、月曜日に！ | J'ai compris. Alors, lundi ! | 0.761 | 0.541 |
| x3 | ja | Dites-le-lui avec tact : il est très susceptible. | 彼はとても傷つきやすいので、言い方に気をつけてください。 | Il est très vulnérable, alors faites attention à ce que vous dites. | 0.623 | 0.542 |
| f6 | ja | Voilà. Bonne journée ! | どうぞ。良い一日を！ | Je vous en prie, bonne journée. | 0.716 | 0.544 |
| p1 | ja | Je vous remercie de votre présence ; je vais vous présenter nos résultats du trimestre. | お集まりいただきありがとうございます。今期の業績についてご報告いたします。 | Je vous remercie d'être venus. | 0.795 | 0.559 |
| pl5 | ja | Relancez-le aujourd'hui, sinon nous paierons des frais de surestaries. | 今日中に催促してください。でないと、デマレージが発生します。 | Veuillez nous précipiter dans la journée. Sinon, il y aura une démarrage. | 0.591 | 0.56 |
| s4 | ja | Du M, mais je voudrais l'essayer. | Mサイズですが、試着してもいいですか？ | C'est une taille M. Je peux l'essayer ? | 0.713 | 0.635 |
| pt4 | ja | Environ huit cents, pendant quarante minutes ; le service est rétabli. | 約八百人で、四十分間でした。サービスは復旧済みです。 | Il y avait environ 800 personnes. Le service a été rétabli. | 0.841 | 0.635 |
| f5 | ja | L'addition, s'il vous plaît. | お会計をお願いします。 | Les comptes, s'il vous plaît. | 0.521 | 0.644 |
| s5 | ja | Bien sûr, les cabines sont au fond. | もちろんです。試着室は奥にあります。 | Bien sûr. La salle d'essai est à l'arrière. | 0.746 | 0.647 |
| m4 | ja | Cela nous intéresse, à condition que les délais de livraison soient garantis. | 納期を保証していただけるなら、興味があります。 | Je suis intéressé si vous pouvez me garantir la livraison. | 0.739 | 0.678 |
| r4 | ja | En tramway ; le trajet dure vingt minutes. | 路面電車で行きます。二十分かかります。 | Je prends le métro. Ça prend 20 minutes. | 0.744 | 0.689 |
| o3 | ja | Je ne suis pas tout à fait d'accord : la fin était logique. | 完全には同意できません。結末は筋が通っていました。 | Je ne suis pas entièrement d'accord. | 0.848 | 0.692 |
| ph6 | ja | Avec plaisir, merci pour votre accueil. | ぜひお願いします。温かいおもてなしをありがとうございます。 | Je vous en prie. Merci pour votre chaleureuse hospitalité. | 0.741 | 0.696 |
| x4 | ja | Je vais formuler ma critique sous forme de suggestion. | 批判は提案という形で伝えます。 | Les critiques sont présentées sous forme de propositions. | 0.725 | 0.718 |
| pt6 | ja | D'accord, je rédige le post-mortem et j'ouvre un ticket aujourd'hui. | 了解です。今日中に事後報告書を書いて、チケットを起票します。 | J'ai bien compris. Je vais écrire un rapport et voter pour les billets d'ici la fin de la journée. | 0.837 | 0.72 |
| m5 | ja | Nous pouvons l'inscrire dans le contrat, avec des pénalités en cas de retard. | 契約書に明記し、遅延の場合は違約金を設けます。 | Dans le cas d'un retard, une amende est prévue dans le contrat. | 0.745 | 0.722 |
| a6 | ja | En compensant par plus de flexibilité sur les horaires. | 勤務時間をより柔軟にすることで補えます。 | Nous pouvons compléter cela par une plus grande souplesse dans nos horaires de travail. | 0.813 | 0.732 |
| f1 | ja | Bonjour, qu'est-ce que vous désirez ? | いらっしゃいませ。ご注文は何になさいますか？ | Bienvenue. Que voulez-vous commander ? | 0.656 | 0.74 |
| s6 | ja | Elle me va bien. Je peux payer par carte ? | ぴったりです。カードで払えますか？ | C'est parfait. Vous pouvez payer par carte ? | 0.767 | 0.741 |
| k5 | ja | On joue ensemble ? | 一緒に遊ぼうか？ | Tu veux jouer avec moi ? | 0.918 | 0.75 |
| m6 | ja | Très bien, envoyez-nous la proposition et nous signerons cette semaine. | 承知しました。提案書を送っていただければ、今週中に署名します。 | J'ai accepté. Si vous pouvez nous envoyer une proposition, je la signerai dans la semaine. | 0.756 | 0.769 |
| o2 | ja | À mon avis, l'histoire était originale, mais la fin m'a déçu. | 話は斬新でしたが、結末にはがっかりしました。 | C'était une nouvelle histoire, mais j'ai été déçue de la fin. | 0.77 | 0.773 |
| pt1 | ja | Le déploiement d'hier a provoqué une panne en production. | 昨日のデプロイで本番環境に障害が発生しました。 | Il y a eu une perturbation dans l'environnement de déploiement hier. | 0.648 | 0.775 |
| g3 | ja | Bien, merci. Bienvenue ! | 元気です、ありがとう。ようこそ！ | Je vais bien, merci. Bienvenue ! | 0.797 | 0.784 |
| i2 | ja | Je m'appelle Sami. | サミです。 | Je suis Sammy. | 0.555 | 0.881 |
| n5 | ja | J'ai rendez-vous lundi à dix heures. | 月曜日の十時に予約があります。 | J'ai rendez-vous lundi à dix heures. | 0.715 | 1.0 |
| x1 | pt | Il ne faut pas vendre la peau de l'ours avant de l'avoir tué. | Não deites foguetes antes da festa. | Ne lancez pas de fusées avant la fête. | 0.505 | 0.511 |
| f6 | pt | Voilà. Bonne journée ! | Aqui tem. Tenha um bom dia! | Je vous en prie, passez une bonne journée. | 0.829 | 0.541 |
| g3 | pt | Bien, merci. Bienvenue ! | Bem, obrigado. Bem-vindo! | Je vous remercie. | 0.985 | 0.676 |
| f5 | pt | L'addition, s'il vous plaît. | A conta, por favor. | Le compte, s'il vous plaît. | 0.703 | 0.703 |
| ps1 | pt | Bonjour, je suis l'infirmier de garde. Où avez-vous mal ? | Olá, sou o enfermeiro de serviço. Onde lhe dói? | Je suis l'infirmière de service. | 0.918 | 0.716 |
| f1 | pt | Bonjour, qu'est-ce que vous désirez ? | Olá, o que deseja? | Bonjour, que puis-je pour vous ? | 0.973 | 0.722 |
| pl1 | pt | Où en est notre conteneur ? Il devait arriver lundi. | Qual é a situação do nosso contentor? Devia chegar na segunda-feira. | Quel est l'état de notre conteneur ? | 0.827 | 0.733 |
| s6 | pt | Elle me va bien. Je peux payer par carte ? | Fica-me bem. Posso pagar com cartão? | Je peux payer par carte ? | 0.869 | 0.734 |
| pl5 | pt | Relancez-le aujourd'hui, sinon nous paierons des frais de surestaries. | Insista com ele hoje, senão vamos pagar sobre-estadia. | Insistez avec lui aujourd'hui, ou nous allons payer sur place. | 0.809 | 0.737 |
| s5 | pt | Bien sûr, les cabines sont au fond. | Claro, os provadores ficam ao fundo. | Bien sûr, les testeurs sont au fond. | 0.742 | 0.757 |
| n4 | zh | Ça fait vingt euros. | 二十欧元。 | Il y a aussi une petite salle de bains. | 0.777 | 0.348 |
| x1 | zh | Il ne faut pas vendre la peau de l'ours avant de l'avoir tué. | 不要高兴得太早。 | Ne vous réjouissez pas trop tôt. | 0.363 | 0.409 |
| d6 | zh | Oui, le bus 12 s'arrête juste en face. | 可以，12路车就在对面停。 | Il est possible de s'arrêter à l'autre bout de la rue. | 0.865 | 0.504 |
| h4 | zh | Oui, de sept heures à dix heures, au rez-de-chaussée. | 含，早上七点到十点，在一楼。 | Il y a eu des manifestations dans le quartier de l'établissement, à partir de 7h à 10h du matin, au premier étage. | 0.794 | 0.54 |
| f5 | zh | L'addition, s'il vous plaît. | 请结账。 | Veuillez déposer votre facture. | 0.562 | 0.552 |
| f6 | zh | Voilà. Bonne journée ! | 给您。祝您愉快！ | Je vous souhaite une bonne journée ! | 0.604 | 0.591 |
| x3 | zh | Dites-le-lui avec tact : il est très susceptible. | 跟他说的时候委婉一点，他很敏感。 | Il est très sensible quand on lui parle. | 0.673 | 0.6 |
| ph5 | zh | Oui, une visite guidée part à neuf heures ; je vous réserve deux places ? | 可以，九点有导游带团出发，要帮您预订两个位子吗？ | Pourriez-vous m'aider à réserver deux places ? | 0.793 | 0.606 |
| x6 | zh | Je le condenserai pour n'en garder que l'essentiel. | 我会把它压缩一下，只保留重点。 | Je vais le compresser un peu, en gardant l'accent. | 0.773 | 0.671 |
| s4 | zh | Du M, mais je voudrais l'essayer. | 中号，不过我想试一下。 | Je ne suis pas d'accord, mais j'aimerais essayer. | 0.841 | 0.707 |
| s3 | zh | Quelle taille faites-vous ? | 您穿多大号？ | Quel est votre numéro ? | 0.794 | 0.714 |
| pl6 | zh | C'est fait, il m'a promis de l'envoyer avant midi. | 已经催了，他答应中午前发过来。 | Il a promis de revenir à minuit. | 0.754 | 0.716 |
| s6 | zh | Elle me va bien. Je peux payer par carte ? | 很合身。可以刷卡吗？ | C'est très bien. Je peux changer ma carte ? | 0.638 | 0.721 |
| o6 | zh | Oui, surtout pour la musique et les acteurs. | 会的，特别是因为音乐和演员。 | Je pense qu'il est important que les gens se sentent à l'aise, surtout à cause de la musique et des acteurs. | 0.906 | 0.73 |
| pl3 | zh | Les documents pour la douane sont-ils prêts ? | 报关单据准备好了吗？ | Vous êtes prêts à déposer vos dossiers ? | 0.83 | 0.736 |
| p3 | zh | Comment expliquez-vous la baisse de la marge ? | 利润率下降的原因是什么？ | Qu'est-ce qui explique la baisse des taux de profit ? | 0.674 | 0.742 |
| x4 | zh | Je vais formuler ma critique sous forme de suggestion. | 我会把批评换成建议的方式说出来。 | Je vais essayer de transformer les critiques en recommandations. | 0.782 | 0.748 |
| pt4 | zh | Environ huit cents, pendant quarante minutes ; le service est rétabli. | 大约八百人，持续了四十分钟，服务已经恢复。 | Il y a environ 800 personnes et le service a été rétabli après une quarantaine de minutes. | 0.879 | 0.749 |
| ph1 | zh | Bienvenue à l'hôtel. Avez-vous fait bon voyage ? | 欢迎光临。一路上还顺利吗？ | Bienvenue à la maison. Comment allez-vous ? | 0.696 | 0.754 |
| pt6 | zh | D'accord, je rédige le post-mortem et j'ouvre un ticket aujourd'hui. | 好的，我今天写事故复盘报告并提交工单。 | Bon, j'ai écrit le rapport d'accident aujourd'hui et j'ai déposé le formulaire. | 0.762 | 0.765 |
| a6 | zh | En compensant par plus de flexibilité sur les horaires. | 可以用更灵活的工作时间来弥补。 | Il est possible de compenser avec des heures de travail plus flexibles. | 0.769 | 0.774 |
| ph3 | zh | C'est noté ; je préviens le chef pour tous vos repas. | 好的，已记下，我会通知厨师您所有的餐食都要注意。 | Bien, rappelez-vous, je vais informer le cuisinier que vous devez faire attention à tous vos repas. | 0.841 | 0.776 |
| ph6 | zh | Avec plaisir, merci pour votre accueil. | 好的，谢谢你们的热情接待。 | Bien, merci pour votre accueil chaleureux. | 0.778 | 0.782 |
| g3 | zh | Bien, merci. Bienvenue ! | 我也很好，谢谢。欢迎！ | Je vais bien, merci. Bienvenue ! | 0.737 | 0.784 |
| pl5 | zh | Relancez-le aujourd'hui, sinon nous paierons des frais de surestaries. | 今天就催一下，不然我们要付滞期费。 | Si vous ne le faites pas aujourd'hui, nous devrons payer les frais de retard. | 0.771 | 0.799 |
| s5 | zh | Bien sûr, les cabines sont au fond. | 当然，试衣间在里面。 | Bien sûr, les vestiaires sont à l'intérieur. | 0.713 | 0.817 |
| s1 | zh | Je peux vous aider ? | 有什么可以帮您的吗？ | Est-ce que je peux vous aider ? | 0.743 | 0.992 |
