import type { ThemeSrc } from './types';

// Personnes : famille, corps, santé, métiers, actions, émotions.
// Adjectifs au masculin par défaut ; verbes à l'infinitif (arabe : nom verbal, maṣdar).
export const PEOPLE: ThemeSrc[] = [
  { id: 'family', title: 'Personnes et famille', section: 'Personnes', level: 'A1', kids: true, words: `
baby|le bébé|baby|el bebé|il neonato|o bebé|رضيع|raḍīʿ|نوزاد|nowzâd|शिशु|śiśu|婴儿|yīng’ér|赤ちゃん|akachan|
child|l’enfant|child|el niño|il bambino|a criança|طفل|ṭifl|کودک|kudak|बच्चा|baccā|孩子|háizi|子ども|kodomo|
girl|la fille|girl|la chica|la ragazza|a menina|بنت|bint|دختر|dokhtar|लड़की|laṛkī|女孩|nǚhái|女の子|onna no ko|tafruxt
boy|le garçon|boy|el chico|il ragazzo|o menino|ولد|walad|پسر|pesar|लड़का|laṛkā|男孩|nánhái|男の子|otoko no ko|afrux
woman|la femme|woman|la mujer|la donna|a mulher|امرأة|imraʾa|زن|zan|महिला|mahilā|女人|nǚrén|女性|josei|tamɣart
man|l’homme|man|el hombre|l’uomo|o homem|رجل|rajul|مرد|mard|आदमी|ādmī|男人|nánrén|男性|dansei|argaz
family_woman_girl|la mère|mother|la madre|la madre|a mãe|أم|umm|مادر|mâdar|माँ|mā̃|妈妈|māma|お母さん|okāsan|
family_man_boy|le père|father|el padre|il padre|o pai|أب|ab|پدر|pedar|पिता|pitā|爸爸|bàba|お父さん|otōsan|
family_man_woman_boy|les parents|parents|los padres|i genitori|os pais|الوالدان|al-wālidān|والدین|vâledeyn|माता-पिता|mātā-pitā|父母|fùmǔ|両親|ryōshin|
old_woman|la grand-mère|grandmother|la abuela|la nonna|a avó|جدة|jadda|مادربزرگ|mâdarbozorg|दादी|dādī|奶奶|nǎinai|おばあさん|obāsan|
old_man|le grand-père|grandfather|el abuelo|il nonno|o avô|جد|jadd|پدربزرگ|pedarbozorg|दादा|dādā|爷爷|yéye|おじいさん|ojīsan|
family|la famille|family|la familia|la famiglia|a família|عائلة|ʿāʾila|خانواده|khânevâde|परिवार|parivār|家庭|jiātíng|家族|kazoku|tawja
people_holding_hands|les amis|friends|los amigos|gli amici|os amigos|الأصدقاء|al-aṣdiqāʾ|دوستان|dustân|दोस्त|dost|朋友|péngyou|友だち|tomodachi|imddukkal
bust_in_silhouette|la personne|person|la persona|la persona|a pessoa|شخص|shakhṣ|شخص|shakhs|व्यक्ति|vyakti|人|rén|人|hito|
people_hugging|le câlin|hug|el abrazo|l’abbraccio|o abraço|عناق|ʿināq|بغل|baghal|गले मिलना|gale milnā|拥抱|yōngbào|ハグ|hagu|
couple_with_heart|le couple|couple|la pareja|la coppia|o casal|زوجان|zawjān|زوج|zowj|जोड़ा|joṛā|情侣|qínglǚ|カップル|kappuru|
`, groups: `
family|ma famille|my family|mi familia|la mia famiglia|a minha família|عائلتي|ʿāʾilatī|خانواده‌ی من|khânevâde-ye man|मेरा परिवार|merā parivār|我的家人|wǒ de jiārén|私の家族|watashi no kazoku|tawja inu
baby|Le bébé dort.|The baby is sleeping.|El bebé duerme.|Il neonato dorme.|O bebé está a dormir.|الرضيع نائم.|ar-raḍīʿ nāʾim.|نوزاد خوابیده است.|nowzâd khâbide ast.|शिशु सो रहा है।|śiśu so rahā hai.|婴儿在睡觉。|yīng’ér zài shuìjiào.|赤ちゃんが寝ています。|akachan ga nete imasu.|
` },

  { id: 'body', title: 'Le corps', section: 'Personnes', level: 'A1', kids: true, words: `
raised_hand|la main|hand|la mano|la mano|a mão|يد|yad|دست|dast|हाथ|hāth|手|shǒu|手|te|afus
foot|le pied|foot|el pie|il piede|o pé|قدم|qadam|پا|pâ|पैर|pair|脚|jiǎo|足|ashi|aḍar
index_pointing_up|le doigt|finger|el dedo|il dito|o dedo|إصبع|iṣbaʿ|انگشت|angosht|उँगली|ũglī|手指|shǒuzhǐ|指|yubi|aḍaḍ
flexed_biceps|le bras|arm|el brazo|il braccio|o braço|ذراع|dhirāʿ|بازو|bâzu|बाँह|bā̃h|胳膊|gēbo|腕|ude|iɣil
eye|l’œil|eye|el ojo|l’occhio|o olho|عين|ʿayn|چشم|cheshm|आँख|ā̃kh|眼睛|yǎnjing|目|me|tiṭṭ
ear|l’oreille|ear|la oreja|l’orecchio|a orelha|أذن|udhun|گوش|gush|कान|kān|耳朵|ěrduo|耳|mimi|amẓẓuɣ
nose|le nez|nose|la nariz|il naso|o nariz|أنف|anf|بینی|bini|नाक|nāk|鼻子|bízi|鼻|hana|tinzar
mouth|la bouche|mouth|la boca|la bocca|a boca|فم|fam|دهان|dahân|मुँह|mũh|嘴|zuǐ|口|kuchi|imi
tooth|la dent|tooth|el diente|il dente|o dente|سن|sinn|دندان|dandân|दाँत|dā̃t|牙齿|yáchǐ|歯|ha|axs
tongue|la langue|tongue|la lengua|la lingua|a língua|لسان|lisān|زبان|zabân|जीभ|jībh|舌头|shétou|舌|shita|ils
anatomical_heart|le cœur|heart|el corazón|il cuore|o coração|قلب|qalb|قلب|qalb|दिल|dil|心脏|xīnzàng|心臓|shinzō|ul
lungs|les poumons|lungs|los pulmones|i polmoni|os pulmões|الرئتان|ar-riʾatān|ریه‌ها|riye-hâ|फेफड़े|phephṛe|肺|fèi|肺|hai|
brain|le cerveau|brain|el cerebro|il cervello|o cérebro|دماغ|dimāgh|مغز|maghz|दिमाग|dimāg|大脑|dànǎo|脳|nō|
bone|l’os|bone|el hueso|l’osso|o osso|عظم|ʿaẓm|استخوان|ostokhân|हड्डी|haḍḍī|骨头|gǔtou|骨|hone|iɣs
`, groups: `
raised_hand|Je me lave les mains.|I wash my hands.|Me lavo las manos.|Mi lavo le mani.|Lavo as mãos.|أغسل يديّ.|aghsilu yadayya.|دست‌هایم را می‌شویم.|dast-hâyam râ mishuyam.|मैं हाथ धोता हूँ।|maĩ hāth dhotā hū̃.|我洗手。|wǒ xǐ shǒu.|手を洗います。|te o araimasu.|
eye|J’ai les yeux bleus.|I have blue eyes.|Tengo los ojos azules.|Ho gli occhi azzurri.|Tenho olhos azuis.|عيناي زرقاوان.|ʿaynāya zarqāwān.|چشم‌هایم آبی است.|cheshm-hâyam âbi ast.|मेरी आँखें नीली हैं।|merī ā̃khẽ nīlī haĩ.|我的眼睛是蓝色的。|wǒ de yǎnjing shì lánsè de.|私の目は青いです。|watashi no me wa aoi desu.|
` },

  { id: 'health', title: 'Santé', section: 'Personnes', level: 'A2', kids: true, words: `
pill|le médicament|medicine|el medicamento|la medicina|o medicamento|دواء|dawāʾ|دارو|dâru|दवा|davā|药|yào|薬|kusuri|asafar
syringe|la piqûre|injection|la inyección|l’iniezione|a injeção|حقنة|ḥuqna|آمپول|âmpul|इंजेक्शन|iñjekśan|打针|dǎzhēn|注射|chūsha|
adhesive_bandage|le pansement|plaster|la tirita|il cerotto|o penso rápido|ضمادة لاصقة|ḍimāda lāṣiqa|چسب زخم|chasb-e zakhm|पट्टी|paṭṭī|创可贴|chuàngkětiē|絆創膏|bansōkō|
stethoscope|le stéthoscope|stethoscope|el estetoscopio|lo stetoscopio|o estetoscópio|سماعة الطبيب|sammāʿat aṭ-ṭabīb|گوشی پزشکی|gushi-ye pezeshki|स्टेथोस्कोप|sṭethoskop|听诊器|tīngzhěnqì|聴診器|chōshinki|
face_with_thermometer|la fièvre|fever|la fiebre|la febbre|a febre|حمى|ḥummā|تب|tab|बुख़ार|bukhār|发烧|fāshāo|熱|netsu|
sneezing_face|le rhume|cold|el resfriado|il raffreddore|a constipação|زكام|zukām|سرماخوردگی|sarmâkhordegi|ज़ुकाम|zukām|感冒|gǎnmào|風邪|kaze|
face_with_head_bandage|la blessure|injury|la herida|la ferita|a ferida|جرح|jurḥ|زخم|zakhm|चोट|coṭ|受伤|shòushāng|けが|kega|
nauseated_face|malade|sick|enfermo|malato|doente|مريض|marīḍ|بیمار|bimâr|बीमार|bīmār|生病|shēngbìng|病気|byōki|
crutch|la béquille|crutch|la muleta|la stampella|a muleta|عكاز|ʿukkāz|عصای زیر بغل|asâ-ye zir-e baghal|बैसाखी|baisākhī|拐杖|guǎizhàng|松葉杖|matsubazue|
x_ray|la radio|X-ray|la radiografía|la radiografia|a radiografia|صورة الأشعة|ṣūrat al-ashiʿʿa|عکس رادیولوژی|aks-e râdiyoloži|एक्स-रे|eks-re|X光片|X guāng piàn|レントゲン|rentogen|
drop_of_blood|le sang|blood|la sangre|il sangue|o sangue|دم|dam|خون|khun|ख़ून|khūn|血|xuè|血|chi|idammn
face_with_medical_mask|le masque|face mask|la mascarilla|la mascherina|a máscara|كمامة|kammāma|ماسک|mâsk|मास्क|māsk|口罩|kǒuzhào|マスク|masuku|
`, groups: `
face_with_thermometer|J’ai de la fièvre.|I have a fever.|Tengo fiebre.|Ho la febbre.|Tenho febre.|عندي حمى.|ʿindī ḥummā.|تب دارم.|tab dâram.|मुझे बुख़ार है।|mujhe bukhār hai.|我发烧了。|wǒ fāshāo le.|熱があります。|netsu ga arimasu.|
tooth|J’ai mal aux dents.|I have a toothache.|Me duelen los dientes.|Ho mal di denti.|Tenho dor de dentes.|عندي ألم في الأسنان.|ʿindī alam fī l-asnān.|دندانم درد می‌کند.|dandânam dard mikonad.|मेरे दाँत में दर्द है।|mere dā̃t mẽ dard hai.|我牙疼。|wǒ yá téng.|歯が痛いです。|ha ga itai desu.|
` },

  { id: 'jobs', title: 'Métiers', section: 'Personnes', level: 'A2', kids: true, words: `
health_worker|le médecin|doctor|el médico|il medico|o médico|طبيب|ṭabīb|پزشک|pezeshk|डॉक्टर|ḍŏkṭar|医生|yīshēng|医者|isha|
teacher|l’enseignant|teacher|el profesor|l’insegnante|o professor|معلم|muʿallim|معلم|moallem|अध्यापक|adhyāpak|老师|lǎoshī|先生|sensei|aslmad
student|l’étudiant|student|el estudiante|lo studente|o estudante|طالب|ṭālib|دانشجو|dâneshju|छात्र|chātra|学生|xuésheng|学生|gakusei|
cook|le cuisinier|cook|el cocinero|il cuoco|o cozinheiro|طباخ|ṭabbākh|آشپز|âshpaz|रसोइया|rasoiyā|厨师|chúshī|料理人|ryōrinin|
farmer|l’agriculteur|farmer|el agricultor|l’agricoltore|o agricultor|مزارع|muzāriʿ|کشاورز|keshâvarz|किसान|kisān|农民|nóngmín|農家|nōka|afllaḥ
mechanic|le mécanicien|mechanic|el mecánico|il meccanico|o mecânico|ميكانيكي|mīkānīkī|مکانیک|mekânik|मिस्त्री|mistrī|机修工|jīxiūgōng|整備士|seibishi|
technologist|le développeur|developer|el programador|il programmatore|o programador|مبرمج|mubarmij|برنامه‌نویس|barnâme-nevis|प्रोग्रामर|progrāmar|程序员|chéngxùyuán|プログラマー|puroguramā|
office_worker|l’employé de bureau|office worker|el oficinista|l’impiegato|o empregado de escritório|موظف|muwaẓẓaf|کارمند|kârmand|कर्मचारी|karmacārī|职员|zhíyuán|会社員|kaishain|
factory_worker|l’ouvrier|factory worker|el obrero|l’operaio|o operário|عامل|ʿāmil|کارگر|kârgar|मज़दूर|mazdūr|工人|gōngrén|工場労働者|kōjō rōdōsha|
construction_worker|le maçon|builder|el albañil|il muratore|o pedreiro|عامل بناء|ʿāmil bināʾ|بنّا|bannâ|राजमिस्त्री|rājmistrī|建筑工人|jiànzhù gōngrén|建設作業員|kensetsu sagyōin|
police_officer|le policier|police officer|el policía|il poliziotto|o polícia|شرطي|shurṭī|پلیس|polis|पुलिसवाला|pulisvālā|警察|jǐngchá|警察官|keisatsukan|
firefighter|le pompier|firefighter|el bombero|il vigile del fuoco|o bombeiro|إطفائي|iṭfāʾī|آتش‌نشان|âtash-neshân|दमकलकर्मी|damkalkarmī|消防员|xiāofángyuán|消防士|shōbōshi|
pilot|le pilote|pilot|el piloto|il pilota|o piloto|طيار|ṭayyār|خلبان|khalabân|पायलट|pāyalaṭ|飞行员|fēixíngyuán|パイロット|pairotto|
judge|le juge|judge|el juez|il giudice|o juiz|قاض|qāḍin|قاضی|qâzi|न्यायाधीश|nyāyādhīś|法官|fǎguān|裁判官|saibankan|
scientist|le scientifique|scientist|el científico|lo scienziato|o cientista|عالم|ʿālim|دانشمند|dâneshmand|वैज्ञानिक|vaigyānik|科学家|kēxuéjiā|科学者|kagakusha|
artist|l’artiste|artist|el artista|l’artista|o artista|فنان|fannān|هنرمند|honarmand|कलाकार|kalākār|艺术家|yìshùjiā|芸術家|geijutsuka|
singer|le chanteur|singer|el cantante|il cantante|o cantor|مغن|mughannin|خواننده|khânande|गायक|gāyak|歌手|gēshǒu|歌手|kashu|
astronaut|l’astronaute|astronaut|el astronauta|l’astronauta|o astronauta|رائد فضاء|rāʾid faḍāʾ|فضانورد|fazânavard|अंतरिक्ष यात्री|antarikṣ yātrī|宇航员|yǔhángyuán|宇宙飛行士|uchū hikōshi|
detective|le détective|detective|el detective|l’investigatore|o detetive|محقق|muḥaqqiq|کارآگاه|kârâgâh|जासूस|jāsūs|侦探|zhēntàn|探偵|tantei|
guard|le gardien|guard|el guardia|la guardia|o guarda|حارس|ḥāris|نگهبان|negahbân|पहरेदार|pahredār|警卫|jǐngwèi|警備員|keibiin|
`, groups: `
health_worker|Je suis médecin.|I am a doctor.|Soy médico.|Sono medico.|Sou médico.|أنا طبيب.|anā ṭabīb.|من پزشک هستم.|man pezeshk hastam.|मैं डॉक्टर हूँ।|maĩ ḍŏkṭar hū̃.|我是医生。|wǒ shì yīshēng.|私は医者です。|watashi wa isha desu.|
pilot|Elle est pilote.|She is a pilot.|Ella es piloto.|Lei è pilota.|Ela é piloto.|هي طيارة.|hiya ṭayyāra.|او خلبان است.|u khalabân ast.|वह पायलट है।|vah pāyalaṭ hai.|她是飞行员。|tā shì fēixíngyuán.|彼女はパイロットです。|kanojo wa pairotto desu.|
` },

  { id: 'actions', title: 'Actions du quotidien', section: 'Personnes', level: 'A2', kids: true, words: `
person_walking|marcher|to walk|caminar|camminare|caminhar|مشي|mashy|راه رفتن|râh raftan|चलना|calnā|走路|zǒulù|歩く|aruku|
person_running|courir|to run|correr|correre|correr|ركض|rakḍ|دویدن|davidan|दौड़ना|dauṛnā|跑步|pǎobù|走る|hashiru|
person_swimming|nager|to swim|nadar|nuotare|nadar|سباحة|sibāḥa|شنا کردن|shenâ kardan|तैरना|tairnā|游泳|yóuyǒng|泳ぐ|oyogu|
person_biking|faire du vélo|to cycle|montar en bici|andare in bici|andar de bicicleta|ركوب الدراجة|rukūb ad-darrāja|دوچرخه‌سواری|docharkhe-savâri|साइकिल चलाना|sāikil calānā|骑自行车|qí zìxíngchē|自転車に乗る|jitensha ni noru|
person_climbing|grimper|to climb|escalar|arrampicare|escalar|تسلق|tasalluq|بالا رفتن|bâlâ raftan|चढ़ना|caṛhnā|攀爬|pānpá|登る|noboru|
sleeping_face|dormir|to sleep|dormir|dormire|dormir|نوم|nawm|خوابیدن|khâbidan|सोना|sonā|睡觉|shuìjiào|寝る|neru|
face_savoring_food|manger|to eat|comer|mangiare|comer|أكل|akl|خوردن|khordan|खाना|khānā|吃|chī|食べる|taberu|
tumbler_glass|boire|to drink|beber|bere|beber|شرب|shurb|نوشیدن|nushidan|पीना|pīnā|喝|hē|飲む|nomu|
writing_hand|écrire|to write|escribir|scrivere|escrever|كتابة|kitāba|نوشتن|neveshtan|लिखना|likhnā|写|xiě|書く|kaku|
open_book|lire|to read|leer|leggere|ler|قراءة|qirāʾa|خواندن|khândan|पढ़ना|paṛhnā|读|dú|読む|yomu|
speaking_head|parler|to speak|hablar|parlare|falar|كلام|kalām|حرف زدن|harf zadan|बोलना|bolnā|说话|shuōhuà|話す|hanasu|
ear|écouter|to listen|escuchar|ascoltare|ouvir|استماع|istimāʿ|گوش دادن|gush dâdan|सुनना|sunnā|听|tīng|聞く|kiku|
eyes|regarder|to look|mirar|guardare|olhar|نظر|naẓar|نگاه کردن|negâh kardan|देखना|dekhnā|看|kàn|見る|miru|
man_dancing|danser|to dance|bailar|ballare|dançar|رقص|raqṣ|رقصیدن|raqsidan|नाचना|nācnā|跳舞|tiàowǔ|踊る|odoru|
microphone|chanter|to sing|cantar|cantare|cantar|غناء|ghināʾ|آواز خواندن|âvâz khândan|गाना|gānā|唱歌|chànggē|歌う|utau|
thinking_face|réfléchir|to think|pensar|pensare|pensar|تفكير|tafkīr|فکر کردن|fekr kardan|सोचना|socnā|思考|sīkǎo|考える|kangaeru|
clapping_hands|applaudir|to clap|aplaudir|applaudire|aplaudir|تصفيق|taṣfīq|دست زدن|dast zadan|ताली बजाना|tālī bajānā|鼓掌|gǔzhǎng|拍手する|hakushu suru|
waving_hand|saluer de la main|to wave|saludar|salutare|acenar|تلويح باليد|talwīḥ bi-l-yad|دست تکان دادن|dast tekân dâdan|हाथ हिलाना|hāth hilānā|挥手|huīshǒu|手を振る|te o furu|
handshake|serrer la main|to shake hands|dar la mano|stringere la mano|apertar a mão|مصافحة|muṣāfaḥa|دست دادن|dast dâdan|हाथ मिलाना|hāth milānā|握手|wòshǒu|握手する|akushu suru|
person_taking_bath|prendre un bain|to take a bath|bañarse|fare il bagno|tomar banho|استحمام|istiḥmām|حمام کردن|hammâm kardan|नहाना|nahānā|洗澡|xǐzǎo|お風呂に入る|o-furo ni hairu|
cooking|cuisiner|to cook|cocinar|cucinare|cozinhar|طبخ|ṭabkh|آشپزی کردن|âshpazi kardan|खाना बनाना|khānā banānā|做饭|zuòfàn|料理する|ryōri suru|
telephone_receiver|téléphoner|to phone|llamar por teléfono|telefonare|telefonar|اتصال هاتفي|ittiṣāl hātifī|تلفن زدن|telefon zadan|फ़ोन करना|fon karnā|打电话|dǎ diànhuà|電話する|denwa suru|
person_raising_hand|lever la main|to raise your hand|levantar la mano|alzare la mano|levantar a mão|رفع اليد|rafʿ al-yad|دست بلند کردن|dast boland kardan|हाथ उठाना|hāth uṭhānā|举手|jǔshǒu|手を挙げる|te o ageru|
yawning_face|bâiller|to yawn|bostezar|sbadigliare|bocejar|تثاؤب|tathāʾub|خمیازه کشیدن|khamyâze keshidan|जम्हाई लेना|jamhāī lenā|打哈欠|dǎ hāqian|あくびする|akubi suru|
`, groups: `
person_running|Je cours dans le parc.|I run in the park.|Corro en el parque.|Corro nel parco.|Corro no parque.|أركض في الحديقة.|arkuḍu fī l-ḥadīqa.|در پارک می‌دوم.|dar pârk midavam.|मैं पार्क में दौड़ता हूँ।|maĩ pārk mẽ dauṛtā hū̃.|我在公园跑步。|wǒ zài gōngyuán pǎobù.|公園で走ります。|kōen de hashirimasu.|
open_book|Elle lit un livre.|She is reading a book.|Ella lee un libro.|Lei legge un libro.|Ela lê um livro.|هي تقرأ كتابًا.|hiya taqraʾu kitāban.|او کتاب می‌خواند.|u ketâb mikhânad.|वह किताब पढ़ रही है।|vah kitāb paṛh rahī hai.|她在看书。|tā zài kàn shū.|彼女は本を読んでいます。|kanojo wa hon o yonde imasu.|
` },

  { id: 'feelings', title: 'Émotions', section: 'Personnes', level: 'A2', kids: true, words: `
grinning_face|heureux|happy|feliz|felice|feliz|سعيد|saʿīd|خوشحال|khoshhâl|ख़ुश|khuś|高兴|gāoxìng|うれしい|ureshii|
pensive_face|triste|sad|triste|triste|triste|حزين|ḥazīn|غمگین|ghamgin|उदास|udās|难过|nánguò|悲しい|kanashii|
angry_face|en colère|angry|enfadado|arrabbiato|zangado|غاضب|ghāḍib|عصبانی|asabâni|नाराज़|nārāz|生气|shēngqì|怒っている|okotte iru|
fearful_face|effrayé|scared|asustado|spaventato|assustado|خائف|khāʾif|ترسیده|tarside|डरा हुआ|ḍarā huā|害怕|hàipà|怖い|kowai|
astonished_face|surpris|surprised|sorprendido|sorpreso|surpreendido|متفاجئ|mutafājiʾ|متعجب|mota'ajjeb|हैरान|hairān|惊讶|jīngyà|びっくりした|bikkuri shita|
tired_face|fatigué|tired|cansado|stanco|cansado|متعب|mutʿab|خسته|khaste|थका हुआ|thakā huā|累|lèi|疲れた|tsukareta|
worried_face|inquiet|worried|preocupado|preoccupato|preocupado|قلق|qaliq|نگران|negarân|चिंतित|ciṃtit|担心|dānxīn|心配|shinpai|
hot_face|avoir chaud|to be hot|tener calor|avere caldo|ter calor|الشعور بالحر|ash-shuʿūr bi-l-ḥarr|گرم بودن|garm budan|गर्मी लगना|garmī lagnā|热|rè|暑い|atsui|
cold_face|avoir froid|to be cold|tener frío|avere freddo|ter frio|الشعور بالبرد|ash-shuʿūr bi-l-bard|سرد بودن|sard budan|ठंड लगना|ṭhaṇḍ lagnā|冷|lěng|寒い|samui|
crying_face|pleurer|to cry|llorar|piangere|chorar|بكاء|bukāʾ|گریه کردن|gerye kardan|रोना|ronā|哭|kū|泣く|naku|
face_with_tears_of_joy|rire|to laugh|reír|ridere|rir|ضحك|ḍaḥik|خندیدن|khandidan|हँसना|hãsnā|笑|xiào|笑う|warau|
smiling_face_with_sunglasses|détendu|relaxed|relajado|rilassato|descontraído|مسترخ|mustarkhin|آرام|ârâm|निश्चिंत|niścint|放松|fàngsōng|リラックスした|rirakkusu shita|
star_struck|émerveillé|amazed|maravillado|meravigliato|maravilhado|منبهر|munbahir|شگفت‌زده|shegeft-zade|चकित|cakit|惊叹|jīngtàn|感動した|kandō shita|
red_heart|l’amour|love|el amor|l’amore|o amor|الحب|al-ḥubb|عشق|eshq|प्यार|pyār|爱|ài|愛|ai|tayri
`, groups: `
grinning_face|Je suis très content.|I am very happy.|Estoy muy contento.|Sono molto contento.|Estou muito contente.|أنا سعيد جدًا.|anā saʿīd jiddan.|خیلی خوشحالم.|kheyli khoshhâlam.|मैं बहुत ख़ुश हूँ।|maĩ bahut khuś hū̃.|我很高兴。|wǒ hěn gāoxìng.|とてもうれしいです。|totemo ureshii desu.|
tired_face|Il est fatigué ce soir.|He is tired this evening.|Está cansado esta noche.|È stanco stasera.|Ele está cansado esta noite.|هو متعب هذا المساء.|huwa mutʿab hādhā l-masāʾ.|او امشب خسته است.|u emshab khaste ast.|वह आज शाम थका हुआ है।|vah āj śām thakā huā hai.|他今天晚上很累。|tā jīntiān wǎnshang hěn lèi.|彼は今晩疲れています。|kare wa konban tsukarete imasu.|
` },
];
