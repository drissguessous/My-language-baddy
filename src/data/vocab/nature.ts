import type { ThemeSrc } from './types';

// Nature : animaux, plantes, météo, paysages.
export const NATURE: ThemeSrc[] = [
  { id: 'farm', title: 'Animaux de la maison et de la ferme', section: 'Nature', level: 'A1', kids: true, words: `
dog|le chien|dog|el perro|il cane|o cão|كلب|kalb|سگ|sag|कुत्ता|kuttā|狗|gǒu|犬|inu|aydi
cat|le chat|cat|el gato|il gatto|o gato|قطة|qiṭṭa|گربه|gorbe|बिल्ली|billī|猫|māo|猫|neko|amuccu
horse|le cheval|horse|el caballo|il cavallo|o cavalo|حصان|ḥiṣān|اسب|asb|घोड़ा|ghoṛā|马|mǎ|馬|uma|ayyis
donkey|l’âne|donkey|el burro|l’asino|o burro|حمار|ḥimār|الاغ|olâgh|गधा|gadhā|驴|lǘ|ロバ|roba|aɣyul
cow|la vache|cow|la vaca|la mucca|a vaca|بقرة|baqara|گاو|gâv|गाय|gāy|奶牛|nǎiniú|牛|ushi|tafunast
ox|le bœuf|ox|el buey|il bue|o boi|ثور|thawr|گاو نر|gâv-e nar|बैल|bail|公牛|gōngniú|雄牛|oushi|azgr
pig|le cochon|pig|el cerdo|il maiale|o porco|خنزير|khinzīr|خوک|khuk|सूअर|sūar|猪|zhū|豚|buta|
ewe|le mouton|sheep|la oveja|la pecora|a ovelha|خروف|kharūf|گوسفند|gusfand|भेड़|bheṛ|羊|yáng|羊|hitsuji|ikrri
goat|la chèvre|goat|la cabra|la capra|a cabra|ماعز|māʿiz|بز|boz|बकरी|bakrī|山羊|shānyáng|ヤギ|yagi|taɣaṭṭ
chicken|la poule|hen|la gallina|la gallina|a galinha|دجاجة|dajāja|مرغ|morgh|मुर्गी|murgī|母鸡|mǔjī|めんどり|mendori|tafullust
rooster|le coq|rooster|el gallo|il gallo|o galo|ديك|dīk|خروس|khorus|मुर्गा|murgā|公鸡|gōngjī|おんどり|ondori|ayaziḍ
baby_chick|le poussin|chick|el pollito|il pulcino|o pintainho|كتكوت|katkūt|جوجه|juje|चूज़ा|cūzā|小鸡|xiǎojī|ひよこ|hiyoko|
duck|le canard|duck|el pato|l’anatra|o pato|بطة|baṭṭa|اردک|ordak|बत्तख़|battakh|鸭子|yāzi|カモ|kamo|
rabbit|le lapin|rabbit|el conejo|il coniglio|o coelho|أرنب|arnab|خرگوش|khargush|खरगोश|khargoś|兔子|tùzi|ウサギ|usagi|awtul
mouse|la souris|mouse|el ratón|il topo|o rato|فأر|faʾr|موش|mush|चूहा|cūhā|老鼠|lǎoshǔ|ネズミ|nezumi|aɣrda
hamster|le hamster|hamster|el hámster|il criceto|o hamster|هامستر|hāmistar|همستر|hamster|हैम्स्टर|haimsṭar|仓鼠|cāngshǔ|ハムスター|hamusutā|
turkey|la dinde|turkey|el pavo|il tacchino|o peru|ديك رومي|dīk rūmī|بوقلمون|buqalamun|टर्की|ṭarkī|火鸡|huǒjī|七面鳥|shichimenchō|
camel|le dromadaire|camel|el dromedario|il dromedario|o dromedário|جمل|jamal|شتر|shotor|ऊँट|ū̃ṭ|骆驼|luòtuo|ラクダ|rakuda|alɣum
`, groups: `
cat|un petit chat|a small cat|un gato pequeño|un piccolo gatto|um gato pequeno|قطة صغيرة|qiṭṭa ṣaghīra|یک گربه‌ی کوچک|yek gorbe-ye kuchak|एक छोटी बिल्ली|ek choṭī billī|一只小猫|yì zhī xiǎo māo|小さい猫|chiisai neko|
dog|Le chien mange.|The dog is eating.|El perro come.|Il cane mangia.|O cão come.|الكلب يأكل.|al-kalb yaʾkul.|سگ غذا می‌خورد.|sag ghazâ mikhorad.|कुत्ता खा रहा है।|kuttā khā rahā hai.|狗在吃东西。|gǒu zài chī dōngxi.|犬が食べています。|inu ga tabete imasu.|
` },

  { id: 'wild', title: 'Animaux sauvages', section: 'Nature', level: 'A1', kids: true, words: `
lion|le lion|lion|el león|il leone|o leão|أسد|asad|شیر|shir|शेर|śer|狮子|shīzi|ライオン|raion|izm
tiger|le tigre|tiger|el tigre|la tigre|o tigre|نمر|namir|ببر|babr|बाघ|bāgh|老虎|lǎohǔ|トラ|tora|
leopard|le léopard|leopard|el leopardo|il leopardo|o leopardo|فهد|fahd|پلنگ|palang|तेंदुआ|tenduā|豹|bào|ヒョウ|hyō|
elephant|l’éléphant|elephant|el elefante|l’elefante|o elefante|فيل|fīl|فیل|fil|हाथी|hāthī|大象|dàxiàng|ゾウ|zō|
giraffe|la girafe|giraffe|la jirafa|la giraffa|a girafa|زرافة|zarāfa|زرافه|zarâfe|जिराफ़|jirāf|长颈鹿|chángjǐnglù|キリン|kirin|
zebra|le zèbre|zebra|la cebra|la zebra|a zebra|حمار وحشي|ḥimār waḥshī|گورخر|gurekhar|ज़ेबरा|zebrā|斑马|bānmǎ|シマウマ|shimauma|
rhinoceros|le rhinocéros|rhinoceros|el rinoceronte|il rinoceronte|o rinoceronte|وحيد القرن|waḥīd al-qarn|کرگدن|kargadan|गैंडा|gaiṇḍā|犀牛|xīniú|サイ|sai|
hippopotamus|l’hippopotame|hippopotamus|el hipopótamo|l’ippopotamo|o hipopótamo|فرس النهر|faras an-nahr|اسب آبی|asb-e âbi|दरियाई घोड़ा|dariyāī ghoṛā|河马|hémǎ|カバ|kaba|
monkey|le singe|monkey|el mono|la scimmia|o macaco|قرد|qird|میمون|meymun|बंदर|bandar|猴子|hóuzi|サル|saru|
gorilla|le gorille|gorilla|el gorila|il gorilla|o gorila|غوريلا|ghūrīllā|گوریل|goril|गोरिल्ला|gorillā|大猩猩|dàxīngxing|ゴリラ|gorira|
bear|l’ours|bear|el oso|l’orso|o urso|دب|dubb|خرس|khers|भालू|bhālū|熊|xióng|クマ|kuma|
polar_bear|l’ours polaire|polar bear|el oso polar|l’orso polare|o urso-polar|الدب القطبي|ad-dubb al-quṭbī|خرس قطبی|khers-e qotbi|ध्रुवीय भालू|dhruvīy bhālū|北极熊|běijíxióng|シロクマ|shirokuma|
panda|le panda|panda|el panda|il panda|o panda|باندا|bāndā|پاندا|pândâ|पांडा|pāṇḍā|熊猫|xióngmāo|パンダ|panda|
koala|le koala|koala|el koala|il koala|o coala|كوالا|kuwālā|کوآلا|ko'âlâ|कोआला|koālā|考拉|kǎolā|コアラ|koara|
kangaroo|le kangourou|kangaroo|el canguro|il canguro|o canguru|كنغر|kanghar|کانگورو|kânguru|कंगारू|kaṅgārū|袋鼠|dàishǔ|カンガルー|kangarū|
wolf|le loup|wolf|el lobo|il lupo|o lobo|ذئب|dhiʾb|گرگ|gorg|भेड़िया|bheṛiyā|狼|láng|オオカミ|ōkami|
fox|le renard|fox|el zorro|la volpe|a raposa|ثعلب|thaʿlab|روباه|rubâh|लोमड़ी|lomṛī|狐狸|húli|キツネ|kitsune|abaɣuɣ
deer|le cerf|deer|el ciervo|il cervo|o veado|غزال|ghazāl|گوزن|gavazn|हिरण|hiraṇ|鹿|lù|シカ|shika|
chipmunk|l’écureuil|squirrel|la ardilla|lo scoiattolo|o esquilo|سنجاب|sinjāb|سنجاب|sanjâb|गिलहरी|gilharī|松鼠|sōngshǔ|リス|risu|
hedgehog|le hérisson|hedgehog|el erizo|il riccio|o ouriço|قنفذ|qunfudh|جوجه‌تیغی|juje-tighi|साही|sāhī|刺猬|cìwei|ハリネズミ|harinezumi|insi
crocodile|le crocodile|crocodile|el cocodrilo|il coccodrillo|o crocodilo|تمساح|timsāḥ|تمساح|temsâh|मगरमच्छ|magarmacch|鳄鱼|èyú|ワニ|wani|
snake|le serpent|snake|la serpiente|il serpente|a cobra|ثعبان|thuʿbān|مار|mâr|साँप|sā̃p|蛇|shé|ヘビ|hebi|ifiɣr
turtle|la tortue|turtle|la tortuga|la tartaruga|a tartaruga|سلحفاة|sulaḥfāh|لاک‌پشت|lâk-posht|कछुआ|kachuā|乌龟|wūguī|カメ|kame|ifkr
frog|la grenouille|frog|la rana|la rana|a rã|ضفدع|ḍifdaʿ|قورباغه|qurbâghe|मेंढक|meṇḍhak|青蛙|qīngwā|カエル|kaeru|agru
`, groups: `
lion|Le lion est très fort.|The lion is very strong.|El león es muy fuerte.|Il leone è molto forte.|O leão é muito forte.|الأسد قوي جدًا.|al-asad qawiyy jiddan.|شیر خیلی قوی است.|shir kheyli qavi ast.|शेर बहुत ताकतवर है।|śer bahut tākatvar hai.|狮子很强壮。|shīzi hěn qiángzhuàng.|ライオンはとても強いです。|raion wa totemo tsuyoi desu.|
elephant|un grand éléphant gris|a big grey elephant|un elefante grande y gris|un grande elefante grigio|um elefante grande e cinzento|فيل كبير رمادي|fīl kabīr ramādī|یک فیل بزرگ خاکستری|yek fil-e bozorg-e khâkestari|एक बड़ा भूरा हाथी|ek baṛā bhūrā hāthī|一头灰色的大象|yì tóu huīsè de dàxiàng|大きな灰色のゾウ|ōkina haiiro no zō|
` },

  { id: 'birds', title: 'Oiseaux et insectes', section: 'Nature', level: 'A2', kids: true, words: `
bird|l’oiseau|bird|el pájaro|l’uccello|o pássaro|طائر|ṭāʾir|پرنده|parande|चिड़िया|ciṛiyā|鸟|niǎo|鳥|tori|agḍiḍ
eagle|l’aigle|eagle|el águila|l’aquila|a águia|نسر|nasr|عقاب|oqâb|बाज़|bāz|鹰|yīng|ワシ|washi|
owl|la chouette|owl|el búho|il gufo|a coruja|بومة|būma|جغد|joghd|उल्लू|ullū|猫头鹰|māotóuyīng|フクロウ|fukurō|
parrot|le perroquet|parrot|el loro|il pappagallo|o papagaio|ببغاء|babbaghāʾ|طوطی|tuti|तोता|totā|鹦鹉|yīngwǔ|オウム|ōmu|
penguin|le pingouin|penguin|el pingüino|il pinguino|o pinguim|بطريق|baṭrīq|پنگوئن|pangu'an|पेंगुइन|peṅguin|企鹅|qǐ’é|ペンギン|pengin|
dove|la colombe|dove|la paloma|la colomba|a pomba|حمامة|ḥamāma|کبوتر|kabutar|कबूतर|kabūtar|鸽子|gēzi|ハト|hato|
swan|le cygne|swan|el cisne|il cigno|o cisne|بجعة|bajaʿa|قو|qu|हंस|haṃs|天鹅|tiān’é|白鳥|hakuchō|
flamingo|le flamant rose|flamingo|el flamenco|il fenicottero|o flamingo|فلامنغو|flāmingū|فلامینگو|flâmingo|राजहंस|rājhaṃs|火烈鸟|huǒlièniǎo|フラミンゴ|furamingo|
peacock|le paon|peacock|el pavo real|il pavone|o pavão|طاووس|ṭāwūs|طاووس|tâvus|मोर|mor|孔雀|kǒngquè|クジャク|kujaku|
butterfly|le papillon|butterfly|la mariposa|la farfalla|a borboleta|فراشة|farāsha|پروانه|parvâne|तितली|titlī|蝴蝶|húdié|チョウ|chō|
honeybee|l’abeille|bee|la abeja|l’ape|a abelha|نحلة|naḥla|زنبور عسل|zanbur-e asal|मधुमक्खी|madhumakkhī|蜜蜂|mìfēng|ミツバチ|mitsubachi|tizwit
ant|la fourmi|ant|la hormiga|la formica|a formiga|نملة|namla|مورچه|murche|चींटी|cīṇṭī|蚂蚁|mǎyǐ|アリ|ari|
lady_beetle|la coccinelle|ladybird|la mariquita|la coccinella|a joaninha|دعسوقة|daʿsūqa|کفشدوزک|kafshduzak|लेडीबग|leḍībag|瓢虫|piáochóng|テントウムシ|tentōmushi|
spider|l’araignée|spider|la araña|il ragno|a aranha|عنكبوت|ʿankabūt|عنکبوت|ankabut|मकड़ी|makṛī|蜘蛛|zhīzhū|クモ|kumo|
mosquito|le moustique|mosquito|el mosquito|la zanzara|o mosquito|بعوضة|baʿūḍa|پشه|pashe|मच्छर|macchar|蚊子|wénzi|蚊|ka|
fly|la mouche|fly|la mosca|la mosca|a mosca|ذبابة|dhubāba|مگس|magas|मक्खी|makkhī|苍蝇|cāngying|ハエ|hae|
snail|l’escargot|snail|el caracol|la lumaca|o caracol|حلزون|ḥalazūn|حلزون|halazun|घोंघा|ghoṅghā|蜗牛|wōniú|カタツムリ|katatsumuri|
`, groups: `
butterfly|Le papillon vole.|The butterfly is flying.|La mariposa vuela.|La farfalla vola.|A borboleta voa.|الفراشة تطير.|al-farāsha taṭīr.|پروانه پرواز می‌کند.|parvâne parvâz mikonad.|तितली उड़ रही है।|titlī uṛ rahī hai.|蝴蝶在飞。|húdié zài fēi.|チョウが飛んでいます。|chō ga tonde imasu.|
bird|Les oiseaux chantent.|The birds are singing.|Los pájaros cantan.|Gli uccelli cantano.|Os pássaros cantam.|العصافير تغرد.|al-ʿaṣāfīr tugharrid.|پرنده‌ها آواز می‌خوانند.|parande-hâ âvâz mikhânand.|चिड़ियाँ गा रही हैं।|ciṛiyā̃ gā rahī haĩ.|鸟在唱歌。|niǎo zài chànggē.|鳥が鳴いています。|tori ga naite imasu.|
` },

  { id: 'sea', title: 'La mer et ses animaux', section: 'Nature', level: 'A2', kids: true, words: `
fish|le poisson|fish|el pez|il pesce|o peixe|سمكة|samaka|ماهی|mâhi|मछली|machlī|鱼|yú|魚|sakana|aslm
tropical_fish|le poisson tropical|tropical fish|el pez tropical|il pesce tropicale|o peixe tropical|سمكة استوائية|samaka istiwāʾiyya|ماهی گرمسیری|mâhi-ye garmsiri|उष्णकटिबंधीय मछली|uṣṇakaṭibandhīy machlī|热带鱼|rèdàiyú|熱帯魚|nettaigyo|
whale|la baleine|whale|la ballena|la balena|a baleia|حوت|ḥūt|نهنگ|nahang|व्हेल|vhel|鲸鱼|jīngyú|クジラ|kujira|
dolphin|le dauphin|dolphin|el delfín|il delfino|o golfinho|دلفين|dulfīn|دلفین|dolfin|डॉल्फ़िन|ḍŏlfin|海豚|hǎitún|イルカ|iruka|
shark|le requin|shark|el tiburón|lo squalo|o tubarão|قرش|qirsh|کوسه|kuse|शार्क|śārk|鲨鱼|shāyú|サメ|same|
octopus|la pieuvre|octopus|el pulpo|il polpo|o polvo|أخطبوط|ukhṭubūṭ|هشت‌پا|hasht-pâ|ऑक्टोपस|ŏkṭopas|章鱼|zhāngyú|タコ|tako|
crab|le crabe|crab|el cangrejo|il granchio|o caranguejo|سلطعون|salṭaʿūn|خرچنگ|kharchang|केकड़ा|kekṛā|螃蟹|pángxiè|カニ|kani|
shrimp|la crevette|prawn|la gamba|il gambero|o camarão|جمبري|jambarī|میگو|meygu|झींगा|jhīṅgā|虾|xiā|エビ|ebi|
jellyfish|la méduse|jellyfish|la medusa|la medusa|a alforreca|قنديل البحر|qindīl al-baḥr|عروس دریایی|arus-e daryâyi|जेलीफ़िश|jelīfiś|水母|shuǐmǔ|クラゲ|kurage|
seal|le phoque|seal|la foca|la foca|a foca|فقمة|faqma|فوک|fok|सील|sīl|海豹|hǎibào|アザラシ|azarashi|
spiral_shell|le coquillage|shell|la caracola|la conchiglia|a concha|صدفة|ṣadafa|صدف|sadaf|सीप|sīp|贝壳|bèiké|貝殻|kaigara|
coral|le corail|coral|el coral|il corallo|o coral|مرجان|marjān|مرجان|marjân|मूँगा|mū̃gā|珊瑚|shānhú|サンゴ|sango|
water_wave|la vague|wave|la ola|l’onda|a onda|موجة|mawja|موج|mowj|लहर|lahar|海浪|hǎilàng|波|nami|
`, groups: `
dolphin|Le dauphin saute.|The dolphin jumps.|El delfín salta.|Il delfino salta.|O golfinho salta.|الدلفين يقفز.|ad-dulfīn yaqfiz.|دلفین می‌پرد.|dolfin miparad.|डॉल्फ़िन कूदती है।|ḍŏlfin kūdtī hai.|海豚跳起来了。|hǎitún tiào qǐlai le.|イルカがジャンプします。|iruka ga janpu shimasu.|
fish|Je nage dans la mer.|I swim in the sea.|Nado en el mar.|Nuoto nel mare.|Nado no mar.|أسبح في البحر.|asbaḥu fī l-baḥr.|در دریا شنا می‌کنم.|dar daryâ shenâ mikonam.|मैं समुद्र में तैरता हूँ।|maĩ samudra mẽ tairtā hū̃.|我在海里游泳。|wǒ zài hǎi lǐ yóuyǒng.|海で泳ぎます。|umi de oyogimasu.|
` },

  { id: 'plants', title: 'Arbres et fleurs', section: 'Nature', level: 'A2', kids: true, words: `
deciduous_tree|l’arbre|tree|el árbol|l’albero|a árvore|شجرة|shajara|درخت|derakht|पेड़|peṛ|树|shù|木|ki|aseklu
evergreen_tree|le sapin|fir tree|el abeto|l’abete|o abeto|شجرة التنوب|shajarat at-tannūb|کاج|kâj|देवदार|devdār|松树|sōngshù|モミの木|momi no ki|
palm_tree|le palmier|palm tree|la palmera|la palma|a palmeira|نخلة|nakhla|نخل|nakhl|ताड़ का पेड़|tāṛ kā peṛ|棕榈树|zōnglǘshù|ヤシの木|yashi no ki|tazdayt
cactus|le cactus|cactus|el cactus|il cactus|o cato|صبار|ṣabbār|کاکتوس|kâktus|कैक्टस|kaikṭas|仙人掌|xiānrénzhǎng|サボテン|saboten|
leaf_fluttering_in_wind|la feuille|leaf|la hoja|la foglia|a folha|ورقة|waraqa|برگ|barg|पत्ता|pattā|叶子|yèzi|葉|ha|
seedling|la jeune pousse|seedling|el brote|il germoglio|o rebento|شتلة|shatla|نهال|nahâl|अंकुर|aṅkur|幼苗|yòumiáo|芽|me|
potted_plant|la plante|plant|la planta|la pianta|a planta|نبتة|nabta|گیاه|giyâh|पौधा|paudhā|植物|zhíwù|植物|shokubutsu|
herb|l’herbe aromatique|herb|la hierba aromática|l’erba aromatica|a erva aromática|عشبة|ʿushba|سبزی معطر|sabzi-ye moattar|जड़ी-बूटी|jaṛī-būṭī|香草|xiāngcǎo|ハーブ|hābu|
rose|la rose|rose|la rosa|la rosa|a rosa|وردة|warda|گل رز|gol-e roz|गुलाब|gulāb|玫瑰|méiguī|バラ|bara|
tulip|la tulipe|tulip|el tulipán|il tulipano|a túlipa|توليب|tūlīb|لاله|lâle|ट्यूलिप|ṭyūlip|郁金香|yùjīnxiāng|チューリップ|chūrippu|
sunflower|le tournesol|sunflower|el girasol|il girasole|o girassol|عباد الشمس|ʿabbād ash-shams|آفتابگردان|âftâbgardân|सूरजमुखी|sūrajmukhī|向日葵|xiàngrìkuí|ひまわり|himawari|
cherry_blossom|la fleur de cerisier|cherry blossom|la flor de cerezo|il fiore di ciliegio|a flor de cerejeira|زهر الكرز|zahr al-karaz|شکوفه گیلاس|shokufe-ye gilâs|चेरी का फूल|cerī kā phūl|樱花|yīnghuā|桜|sakura|
hibiscus|la fleur|flower|la flor|il fiore|a flor|زهرة|zahra|گل|gol|फूल|phūl|花|huā|花|hana|tajddigt
fallen_leaf|la feuille morte|dead leaf|la hoja seca|la foglia secca|a folha seca|ورقة يابسة|waraqa yābisa|برگ خشک|barg-e khoshk|सूखा पत्ता|sūkhā pattā|落叶|luòyè|落ち葉|ochiba|
`, groups: `
rose|une rose rouge|a red rose|una rosa roja|una rosa rossa|uma rosa vermelha|وردة حمراء|warda ḥamrāʾ|یک گل رز قرمز|yek gol-e roz-e qermez|एक लाल गुलाब|ek lāl gulāb|一朵红玫瑰|yì duǒ hóng méiguī|赤いバラ|akai bara|
potted_plant|J’arrose les plantes.|I water the plants.|Riego las plantas.|Annaffio le piante.|Rego as plantas.|أسقي النباتات.|asqī n-nabātāt.|به گیاهان آب می‌دهم.|be giyâhân âb midaham.|मैं पौधों को पानी देता हूँ।|maĩ paudhõ ko pānī detā hū̃.|我给植物浇水。|wǒ gěi zhíwù jiāo shuǐ.|植物に水をやります。|shokubutsu ni mizu o yarimasu.|
` },

  { id: 'weather', title: 'Météo et ciel', section: 'Nature', level: 'A1', kids: true, words: `
sun|le soleil|sun|el sol|il sole|o sol|شمس|shams|خورشید|khorshid|सूरज|sūraj|太阳|tàiyáng|太陽|taiyō|tafukt
cloud|le nuage|cloud|la nube|la nuvola|a nuvem|سحابة|saḥāba|ابر|abr|बादल|bādal|云|yún|雲|kumo|asigna
cloud_with_rain|la pluie|rain|la lluvia|la pioggia|a chuva|مطر|maṭar|باران|bârân|बारिश|bāriś|雨|yǔ|雨|ame|anzar
snowflake|la neige|snow|la nieve|la neve|a neve|ثلج|thalj|برف|barf|बर्फ़|barf|雪|xuě|雪|yuki|adfl
wind_face|le vent|wind|el viento|il vento|o vento|ريح|rīḥ|باد|bâd|हवा|havā|风|fēng|風|kaze|aḍu
cloud_with_lightning|l’éclair|lightning|el relámpago|il fulmine|o relâmpago|برق|barq|آذرخش|âzarakhsh|बिजली|bijlī|闪电|shǎndiàn|稲妻|inazuma|
rainbow|l’arc-en-ciel|rainbow|el arcoíris|l’arcobaleno|o arco-íris|قوس قزح|qaws quzaḥ|رنگین‌کمان|rangin-kamân|इंद्रधनुष|indradhanuṣ|彩虹|cǎihóng|虹|niji|
fog|le brouillard|fog|la niebla|la nebbia|o nevoeiro|ضباب|ḍabāb|مه|meh|कोहरा|kohrā|雾|wù|霧|kiri|
tornado|la tornade|tornado|el tornado|il tornado|o tornado|إعصار|iʿṣār|گردباد|gerdbâd|बवंडर|bavaṇḍar|龙卷风|lóngjuǎnfēng|竜巻|tatsumaki|
umbrella_with_rain_drops|le parapluie|umbrella|el paraguas|l’ombrello|o guarda-chuva|مظلة|miẓalla|چتر|chatr|छाता|chātā|雨伞|yǔsǎn|傘|kasa|
thermometer|le thermomètre|thermometer|el termómetro|il termometro|o termómetro|ميزان الحرارة|mīzān al-ḥarāra|دماسنج|damâsanj|थर्मामीटर|tharmāmīṭar|温度计|wēndùjì|温度計|ondokei|
crescent_moon|la lune|moon|la luna|la luna|a lua|قمر|qamar|ماه|mâh|चाँद|cā̃d|月亮|yuèliang|月|tsuki|ayyur
star|l’étoile|star|la estrella|la stella|a estrela|نجمة|najma|ستاره|setâre|तारा|tārā|星星|xīngxing|星|hoshi|itri
fire|le feu|fire|el fuego|il fuoco|o fogo|نار|nār|آتش|âtash|आग|āg|火|huǒ|火|hi|timssi
snowman|le bonhomme de neige|snowman|el muñeco de nieve|il pupazzo di neve|o boneco de neve|رجل الثلج|rajul ath-thalj|آدم برفی|âdam-barfi|हिममानव|himmānav|雪人|xuěrén|雪だるま|yukidaruma|
`, groups: `
cloud_with_rain|Il pleut.|It is raining.|Llueve.|Piove.|Está a chover.|إنها تمطر.|innahā tumṭir.|باران می‌بارد.|bârân mibârad.|बारिश हो रही है।|bāriś ho rahī hai.|下雨了。|xià yǔ le.|雨が降っています。|ame ga futte imasu.|Ikkat unzar.
sun|Il fait beau aujourd’hui.|The weather is nice today.|Hoy hace buen tiempo.|Oggi fa bel tempo.|Hoje está bom tempo.|الطقس جميل اليوم.|aṭ-ṭaqs jamīl al-yawm.|امروز هوا خوب است.|emruz havâ khub ast.|आज मौसम अच्छा है।|āj mausam acchā hai.|今天天气很好。|jīntiān tiānqì hěn hǎo.|今日はいい天気です。|kyō wa ii tenki desu.|
` },

  { id: 'landscapes', title: 'Paysages', section: 'Nature', level: 'A2', kids: true, words: `
mountain|la montagne|mountain|la montaña|la montagna|a montanha|جبل|jabal|کوه|kuh|पहाड़|pahāṛ|山|shān|山|yama|adrar
snow_capped_mountain|le sommet enneigé|snowy peak|la cumbre nevada|la cima innevata|o pico nevado|قمة مثلجة|qimma muthallaja|قله برفی|qolle-ye barfi|बर्फ़ीली चोटी|barfīlī coṭī|雪山|xuěshān|雪山|yukiyama|
volcano|le volcan|volcano|el volcán|il vulcano|o vulcão|بركان|burkān|آتشفشان|âtashfeshân|ज्वालामुखी|jvālāmukhī|火山|huǒshān|火山|kazan|
desert|le désert|desert|el desierto|il deserto|o deserto|صحراء|ṣaḥrāʾ|بیابان|biyâbân|रेगिस्तान|registān|沙漠|shāmò|砂漠|sabaku|
desert_island|l’île|island|la isla|l’isola|a ilha|جزيرة|jazīra|جزیره|jazire|द्वीप|dvīp|岛|dǎo|島|shima|
beach_with_umbrella|la plage|beach|la playa|la spiaggia|a praia|شاطئ|shāṭiʾ|ساحل|sâhel|समुद्र तट|samudra taṭ|海滩|hǎitān|ビーチ|bīchi|
national_park|le parc naturel|nature park|el parque natural|il parco naturale|o parque natural|محمية طبيعية|maḥmiyya ṭabīʿiyya|پارک ملی|pârk-e melli|राष्ट्रीय उद्यान|rāṣṭrīy udyān|国家公园|guójiā gōngyuán|国立公園|kokuritsu kōen|
camping|le camping|campsite|el camping|il campeggio|o parque de campismo|مخيم|mukhayyam|کمپ|kamp|शिविर|śivir|营地|yíngdì|キャンプ場|kyanpujō|
rock|le rocher|rock|la roca|la roccia|a rocha|صخرة|ṣakhra|صخره|sakhre|चट्टान|caṭṭān|岩石|yánshí|岩|iwa|azru
wood|le bois|wood|la madera|il legno|a madeira|خشب|khashab|چوب|chub|लकड़ी|lakṛī|木头|mùtou|木材|mokuzai|
globe_showing_europe_africa|la Terre|Earth|la Tierra|la Terra|a Terra|الأرض|al-arḍ|زمین|zamin|पृथ्वी|pṛthvī|地球|dìqiú|地球|chikyū|
`, groups: `
mountain|Nous montons la montagne.|We are climbing the mountain.|Subimos la montaña.|Saliamo sulla montagna.|Subimos a montanha.|نصعد الجبل.|naṣʿadu l-jabal.|از کوه بالا می‌رویم.|az kuh bâlâ miravim.|हम पहाड़ पर चढ़ रहे हैं।|ham pahāṛ par caṛh rahe haĩ.|我们在爬山。|wǒmen zài pá shān.|山に登ります。|yama ni noborimasu.|
beach_with_umbrella|une journée à la plage|a day at the beach|un día en la playa|una giornata al mare|um dia na praia|يوم على الشاطئ|yawm ʿalā sh-shāṭiʾ|یک روز در ساحل|yek ruz dar sâhel|समुद्र तट पर एक दिन|samudra taṭ par ek din|在海滩的一天|zài hǎitān de yì tiān|ビーチでの一日|bīchi de no ichinichi|
` },
];
