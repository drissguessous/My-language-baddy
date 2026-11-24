import type { ThemeSrc } from './types';

// Nature : animaux, plantes, météo, paysages.
export const NATURE: ThemeSrc[] = [
  { id: 'farm', title: 'Animaux de la maison et de la ferme', section: 'Nature', level: 'A1', kids: true, words: `
dog|le chien|dog|el perro|il cane|o cão|كلب|kalb|狗|gǒu|犬|inu
cat|le chat|cat|el gato|il gatto|o gato|قطة|qiṭṭa|猫|māo|猫|neko
horse|le cheval|horse|el caballo|il cavallo|o cavalo|حصان|ḥiṣān|马|mǎ|馬|uma
donkey|l’âne|donkey|el burro|l’asino|o burro|حمار|ḥimār|驴|lǘ|ロバ|roba
cow|la vache|cow|la vaca|la mucca|a vaca|بقرة|baqara|奶牛|nǎiniú|牛|ushi
ox|le bœuf|ox|el buey|il bue|o boi|ثور|thawr|公牛|gōngniú|雄牛|oushi
pig|le cochon|pig|el cerdo|il maiale|o porco|خنزير|khinzīr|猪|zhū|豚|buta
ewe|le mouton|sheep|la oveja|la pecora|a ovelha|خروف|kharūf|羊|yáng|羊|hitsuji
goat|la chèvre|goat|la cabra|la capra|a cabra|ماعز|māʿiz|山羊|shānyáng|ヤギ|yagi
chicken|la poule|hen|la gallina|la gallina|a galinha|دجاجة|dajāja|母鸡|mǔjī|めんどり|mendori
rooster|le coq|rooster|el gallo|il gallo|o galo|ديك|dīk|公鸡|gōngjī|おんどり|ondori
baby_chick|le poussin|chick|el pollito|il pulcino|o pintainho|كتكوت|katkūt|小鸡|xiǎojī|ひよこ|hiyoko
duck|le canard|duck|el pato|l’anatra|o pato|بطة|baṭṭa|鸭子|yāzi|カモ|kamo
rabbit|le lapin|rabbit|el conejo|il coniglio|o coelho|أرنب|arnab|兔子|tùzi|ウサギ|usagi
mouse|la souris|mouse|el ratón|il topo|o rato|فأر|faʾr|老鼠|lǎoshǔ|ネズミ|nezumi
hamster|le hamster|hamster|el hámster|il criceto|o hamster|هامستر|hāmistar|仓鼠|cāngshǔ|ハムスター|hamusutā
turkey|la dinde|turkey|el pavo|il tacchino|o peru|ديك رومي|dīk rūmī|火鸡|huǒjī|七面鳥|shichimenchō
camel|le dromadaire|camel|el dromedario|il dromedario|o dromedário|جمل|jamal|骆驼|luòtuo|ラクダ|rakuda
`, groups: `
cat|un petit chat|a small cat|un gato pequeño|un piccolo gatto|um gato pequeno|قطة صغيرة|qiṭṭa ṣaghīra|一只小猫|yì zhī xiǎo māo|小さい猫|chiisai neko
dog|Le chien mange.|The dog is eating.|El perro come.|Il cane mangia.|O cão come.|الكلب يأكل.|al-kalb yaʾkul.|狗在吃东西。|gǒu zài chī dōngxi.|犬が食べています。|inu ga tabete imasu.
` },

  { id: 'wild', title: 'Animaux sauvages', section: 'Nature', level: 'A1', kids: true, words: `
lion|le lion|lion|el león|il leone|o leão|أسد|asad|狮子|shīzi|ライオン|raion
tiger|le tigre|tiger|el tigre|la tigre|o tigre|نمر|namir|老虎|lǎohǔ|トラ|tora
leopard|le léopard|leopard|el leopardo|il leopardo|o leopardo|فهد|fahd|豹|bào|ヒョウ|hyō
elephant|l’éléphant|elephant|el elefante|l’elefante|o elefante|فيل|fīl|大象|dàxiàng|ゾウ|zō
giraffe|la girafe|giraffe|la jirafa|la giraffa|a girafa|زرافة|zarāfa|长颈鹿|chángjǐnglù|キリン|kirin
zebra|le zèbre|zebra|la cebra|la zebra|a zebra|حمار وحشي|ḥimār waḥshī|斑马|bānmǎ|シマウマ|shimauma
rhinoceros|le rhinocéros|rhinoceros|el rinoceronte|il rinoceronte|o rinoceronte|وحيد القرن|waḥīd al-qarn|犀牛|xīniú|サイ|sai
hippopotamus|l’hippopotame|hippopotamus|el hipopótamo|l’ippopotamo|o hipopótamo|فرس النهر|faras an-nahr|河马|hémǎ|カバ|kaba
monkey|le singe|monkey|el mono|la scimmia|o macaco|قرد|qird|猴子|hóuzi|サル|saru
gorilla|le gorille|gorilla|el gorila|il gorilla|o gorila|غوريلا|ghūrīllā|大猩猩|dàxīngxing|ゴリラ|gorira
bear|l’ours|bear|el oso|l’orso|o urso|دب|dubb|熊|xióng|クマ|kuma
polar_bear|l’ours polaire|polar bear|el oso polar|l’orso polare|o urso-polar|الدب القطبي|ad-dubb al-quṭbī|北极熊|běijíxióng|シロクマ|shirokuma
panda|le panda|panda|el panda|il panda|o panda|باندا|bāndā|熊猫|xióngmāo|パンダ|panda
koala|le koala|koala|el koala|il koala|o coala|كوالا|kuwālā|考拉|kǎolā|コアラ|koara
kangaroo|le kangourou|kangaroo|el canguro|il canguro|o canguru|كنغر|kanghar|袋鼠|dàishǔ|カンガルー|kangarū
wolf|le loup|wolf|el lobo|il lupo|o lobo|ذئب|dhiʾb|狼|láng|オオカミ|ōkami
fox|le renard|fox|el zorro|la volpe|a raposa|ثعلب|thaʿlab|狐狸|húli|キツネ|kitsune
deer|le cerf|deer|el ciervo|il cervo|o veado|غزال|ghazāl|鹿|lù|シカ|shika
chipmunk|l’écureuil|squirrel|la ardilla|lo scoiattolo|o esquilo|سنجاب|sinjāb|松鼠|sōngshǔ|リス|risu
hedgehog|le hérisson|hedgehog|el erizo|il riccio|o ouriço|قنفذ|qunfudh|刺猬|cìwei|ハリネズミ|harinezumi
crocodile|le crocodile|crocodile|el cocodrilo|il coccodrillo|o crocodilo|تمساح|timsāḥ|鳄鱼|èyú|ワニ|wani
snake|le serpent|snake|la serpiente|il serpente|a cobra|ثعبان|thuʿbān|蛇|shé|ヘビ|hebi
turtle|la tortue|turtle|la tortuga|la tartaruga|a tartaruga|سلحفاة|sulaḥfāh|乌龟|wūguī|カメ|kame
frog|la grenouille|frog|la rana|la rana|a rã|ضفدع|ḍifdaʿ|青蛙|qīngwā|カエル|kaeru
`, groups: `
lion|Le lion est très fort.|The lion is very strong.|El león es muy fuerte.|Il leone è molto forte.|O leão é muito forte.|الأسد قوي جدًا.|al-asad qawiyy jiddan.|狮子很强壮。|shīzi hěn qiángzhuàng.|ライオンはとても強いです。|raion wa totemo tsuyoi desu.
elephant|un grand éléphant gris|a big grey elephant|un elefante grande y gris|un grande elefante grigio|um elefante grande e cinzento|فيل كبير رمادي|fīl kabīr ramādī|一头灰色的大象|yì tóu huīsè de dàxiàng|大きな灰色のゾウ|ōkina haiiro no zō
` },

  { id: 'birds', title: 'Oiseaux et insectes', section: 'Nature', level: 'A2', kids: true, words: `
bird|l’oiseau|bird|el pájaro|l’uccello|o pássaro|طائر|ṭāʾir|鸟|niǎo|鳥|tori
eagle|l’aigle|eagle|el águila|l’aquila|a águia|نسر|nasr|鹰|yīng|ワシ|washi
owl|la chouette|owl|el búho|il gufo|a coruja|بومة|būma|猫头鹰|māotóuyīng|フクロウ|fukurō
parrot|le perroquet|parrot|el loro|il pappagallo|o papagaio|ببغاء|babbaghāʾ|鹦鹉|yīngwǔ|オウム|ōmu
penguin|le pingouin|penguin|el pingüino|il pinguino|o pinguim|بطريق|baṭrīq|企鹅|qǐ’é|ペンギン|pengin
dove|la colombe|dove|la paloma|la colomba|a pomba|حمامة|ḥamāma|鸽子|gēzi|ハト|hato
swan|le cygne|swan|el cisne|il cigno|o cisne|بجعة|bajaʿa|天鹅|tiān’é|白鳥|hakuchō
flamingo|le flamant rose|flamingo|el flamenco|il fenicottero|o flamingo|فلامنغو|flāmingū|火烈鸟|huǒlièniǎo|フラミンゴ|furamingo
peacock|le paon|peacock|el pavo real|il pavone|o pavão|طاووس|ṭāwūs|孔雀|kǒngquè|クジャク|kujaku
butterfly|le papillon|butterfly|la mariposa|la farfalla|a borboleta|فراشة|farāsha|蝴蝶|húdié|チョウ|chō
honeybee|l’abeille|bee|la abeja|l’ape|a abelha|نحلة|naḥla|蜜蜂|mìfēng|ミツバチ|mitsubachi
ant|la fourmi|ant|la hormiga|la formica|a formiga|نملة|namla|蚂蚁|mǎyǐ|アリ|ari
lady_beetle|la coccinelle|ladybird|la mariquita|la coccinella|a joaninha|دعسوقة|daʿsūqa|瓢虫|piáochóng|テントウムシ|tentōmushi
spider|l’araignée|spider|la araña|il ragno|a aranha|عنكبوت|ʿankabūt|蜘蛛|zhīzhū|クモ|kumo
mosquito|le moustique|mosquito|el mosquito|la zanzara|o mosquito|بعوضة|baʿūḍa|蚊子|wénzi|蚊|ka
fly|la mouche|fly|la mosca|la mosca|a mosca|ذبابة|dhubāba|苍蝇|cāngying|ハエ|hae
snail|l’escargot|snail|el caracol|la lumaca|o caracol|حلزون|ḥalazūn|蜗牛|wōniú|カタツムリ|katatsumuri
`, groups: `
butterfly|Le papillon vole.|The butterfly is flying.|La mariposa vuela.|La farfalla vola.|A borboleta voa.|الفراشة تطير.|al-farāsha taṭīr.|蝴蝶在飞。|húdié zài fēi.|チョウが飛んでいます。|chō ga tonde imasu.
bird|Les oiseaux chantent.|The birds are singing.|Los pájaros cantan.|Gli uccelli cantano.|Os pássaros cantam.|العصافير تغرد.|al-ʿaṣāfīr tugharrid.|鸟在唱歌。|niǎo zài chànggē.|鳥が鳴いています。|tori ga naite imasu.
` },

  { id: 'sea', title: 'La mer et ses animaux', section: 'Nature', level: 'A2', kids: true, words: `
fish|le poisson|fish|el pez|il pesce|o peixe|سمكة|samaka|鱼|yú|魚|sakana
tropical_fish|le poisson tropical|tropical fish|el pez tropical|il pesce tropicale|o peixe tropical|سمكة استوائية|samaka istiwāʾiyya|热带鱼|rèdàiyú|熱帯魚|nettaigyo
whale|la baleine|whale|la ballena|la balena|a baleia|حوت|ḥūt|鲸鱼|jīngyú|クジラ|kujira
dolphin|le dauphin|dolphin|el delfín|il delfino|o golfinho|دلفين|dulfīn|海豚|hǎitún|イルカ|iruka
shark|le requin|shark|el tiburón|lo squalo|o tubarão|قرش|qirsh|鲨鱼|shāyú|サメ|same
octopus|la pieuvre|octopus|el pulpo|il polpo|o polvo|أخطبوط|ukhṭubūṭ|章鱼|zhāngyú|タコ|tako
crab|le crabe|crab|el cangrejo|il granchio|o caranguejo|سلطعون|salṭaʿūn|螃蟹|pángxiè|カニ|kani
shrimp|la crevette|prawn|la gamba|il gambero|o camarão|جمبري|jambarī|虾|xiā|エビ|ebi
jellyfish|la méduse|jellyfish|la medusa|la medusa|a alforreca|قنديل البحر|qindīl al-baḥr|水母|shuǐmǔ|クラゲ|kurage
seal|le phoque|seal|la foca|la foca|a foca|فقمة|faqma|海豹|hǎibào|アザラシ|azarashi
spiral_shell|le coquillage|shell|la caracola|la conchiglia|a concha|صدفة|ṣadafa|贝壳|bèiké|貝殻|kaigara
coral|le corail|coral|el coral|il corallo|o coral|مرجان|marjān|珊瑚|shānhú|サンゴ|sango
water_wave|la vague|wave|la ola|l’onda|a onda|موجة|mawja|海浪|hǎilàng|波|nami
`, groups: `
dolphin|Le dauphin saute.|The dolphin jumps.|El delfín salta.|Il delfino salta.|O golfinho salta.|الدلفين يقفز.|ad-dulfīn yaqfiz.|海豚跳起来了。|hǎitún tiào qǐlai le.|イルカがジャンプします。|iruka ga janpu shimasu.
fish|Je nage dans la mer.|I swim in the sea.|Nado en el mar.|Nuoto nel mare.|Nado no mar.|أسبح في البحر.|asbaḥu fī l-baḥr.|我在海里游泳。|wǒ zài hǎi lǐ yóuyǒng.|海で泳ぎます。|umi de oyogimasu.
` },

  { id: 'plants', title: 'Arbres et fleurs', section: 'Nature', level: 'A2', kids: true, words: `
deciduous_tree|l’arbre|tree|el árbol|l’albero|a árvore|شجرة|shajara|树|shù|木|ki
evergreen_tree|le sapin|fir tree|el abeto|l’abete|o abeto|شجرة التنوب|shajarat at-tannūb|松树|sōngshù|モミの木|momi no ki
palm_tree|le palmier|palm tree|la palmera|la palma|a palmeira|نخلة|nakhla|棕榈树|zōnglǘshù|ヤシの木|yashi no ki
cactus|le cactus|cactus|el cactus|il cactus|o cato|صبار|ṣabbār|仙人掌|xiānrénzhǎng|サボテン|saboten
leaf_fluttering_in_wind|la feuille|leaf|la hoja|la foglia|a folha|ورقة|waraqa|叶子|yèzi|葉|ha
seedling|la jeune pousse|seedling|el brote|il germoglio|o rebento|شتلة|shatla|幼苗|yòumiáo|芽|me
potted_plant|la plante|plant|la planta|la pianta|a planta|نبتة|nabta|植物|zhíwù|植物|shokubutsu
herb|l’herbe aromatique|herb|la hierba aromática|l’erba aromatica|a erva aromática|عشبة|ʿushba|香草|xiāngcǎo|ハーブ|hābu
rose|la rose|rose|la rosa|la rosa|a rosa|وردة|warda|玫瑰|méiguī|バラ|bara
tulip|la tulipe|tulip|el tulipán|il tulipano|a túlipa|توليب|tūlīb|郁金香|yùjīnxiāng|チューリップ|chūrippu
sunflower|le tournesol|sunflower|el girasol|il girasole|o girassol|عباد الشمس|ʿabbād ash-shams|向日葵|xiàngrìkuí|ひまわり|himawari
cherry_blossom|la fleur de cerisier|cherry blossom|la flor de cerezo|il fiore di ciliegio|a flor de cerejeira|زهر الكرز|zahr al-karaz|樱花|yīnghuā|桜|sakura
hibiscus|la fleur|flower|la flor|il fiore|a flor|زهرة|zahra|花|huā|花|hana
fallen_leaf|la feuille morte|dead leaf|la hoja seca|la foglia secca|a folha seca|ورقة يابسة|waraqa yābisa|落叶|luòyè|落ち葉|ochiba
`, groups: `
rose|une rose rouge|a red rose|una rosa roja|una rosa rossa|uma rosa vermelha|وردة حمراء|warda ḥamrāʾ|一朵红玫瑰|yì duǒ hóng méiguī|赤いバラ|akai bara
potted_plant|J’arrose les plantes.|I water the plants.|Riego las plantas.|Annaffio le piante.|Rego as plantas.|أسقي النباتات.|asqī n-nabātāt.|我给植物浇水。|wǒ gěi zhíwù jiāo shuǐ.|植物に水をやります。|shokubutsu ni mizu o yarimasu.
` },

  { id: 'weather', title: 'Météo et ciel', section: 'Nature', level: 'A1', kids: true, words: `
sun|le soleil|sun|el sol|il sole|o sol|شمس|shams|太阳|tàiyáng|太陽|taiyō
cloud|le nuage|cloud|la nube|la nuvola|a nuvem|سحابة|saḥāba|云|yún|雲|kumo
cloud_with_rain|la pluie|rain|la lluvia|la pioggia|a chuva|مطر|maṭar|雨|yǔ|雨|ame
snowflake|la neige|snow|la nieve|la neve|a neve|ثلج|thalj|雪|xuě|雪|yuki
wind_face|le vent|wind|el viento|il vento|o vento|ريح|rīḥ|风|fēng|風|kaze
cloud_with_lightning|l’éclair|lightning|el relámpago|il fulmine|o relâmpago|برق|barq|闪电|shǎndiàn|稲妻|inazuma
rainbow|l’arc-en-ciel|rainbow|el arcoíris|l’arcobaleno|o arco-íris|قوس قزح|qaws quzaḥ|彩虹|cǎihóng|虹|niji
fog|le brouillard|fog|la niebla|la nebbia|o nevoeiro|ضباب|ḍabāb|雾|wù|霧|kiri
tornado|la tornade|tornado|el tornado|il tornado|o tornado|إعصار|iʿṣār|龙卷风|lóngjuǎnfēng|竜巻|tatsumaki
umbrella_with_rain_drops|le parapluie|umbrella|el paraguas|l’ombrello|o guarda-chuva|مظلة|miẓalla|雨伞|yǔsǎn|傘|kasa
thermometer|le thermomètre|thermometer|el termómetro|il termometro|o termómetro|ميزان الحرارة|mīzān al-ḥarāra|温度计|wēndùjì|温度計|ondokei
crescent_moon|la lune|moon|la luna|la luna|a lua|قمر|qamar|月亮|yuèliang|月|tsuki
star|l’étoile|star|la estrella|la stella|a estrela|نجمة|najma|星星|xīngxing|星|hoshi
fire|le feu|fire|el fuego|il fuoco|o fogo|نار|nār|火|huǒ|火|hi
snowman|le bonhomme de neige|snowman|el muñeco de nieve|il pupazzo di neve|o boneco de neve|رجل الثلج|rajul ath-thalj|雪人|xuěrén|雪だるま|yukidaruma
`, groups: `
cloud_with_rain|Il pleut.|It is raining.|Llueve.|Piove.|Está a chover.|إنها تمطر.|innahā tumṭir.|下雨了。|xià yǔ le.|雨が降っています。|ame ga futte imasu.
sun|Il fait beau aujourd’hui.|The weather is nice today.|Hoy hace buen tiempo.|Oggi fa bel tempo.|Hoje está bom tempo.|الطقس جميل اليوم.|aṭ-ṭaqs jamīl al-yawm.|今天天气很好。|jīntiān tiānqì hěn hǎo.|今日はいい天気です。|kyō wa ii tenki desu.
` },

  { id: 'landscapes', title: 'Paysages', section: 'Nature', level: 'A2', kids: true, words: `
mountain|la montagne|mountain|la montaña|la montagna|a montanha|جبل|jabal|山|shān|山|yama
snow_capped_mountain|le sommet enneigé|snowy peak|la cumbre nevada|la cima innevata|o pico nevado|قمة مثلجة|qimma muthallaja|雪山|xuěshān|雪山|yukiyama
volcano|le volcan|volcano|el volcán|il vulcano|o vulcão|بركان|burkān|火山|huǒshān|火山|kazan
desert|le désert|desert|el desierto|il deserto|o deserto|صحراء|ṣaḥrāʾ|沙漠|shāmò|砂漠|sabaku
desert_island|l’île|island|la isla|l’isola|a ilha|جزيرة|jazīra|岛|dǎo|島|shima
beach_with_umbrella|la plage|beach|la playa|la spiaggia|a praia|شاطئ|shāṭiʾ|海滩|hǎitān|ビーチ|bīchi
national_park|le parc naturel|nature park|el parque natural|il parco naturale|o parque natural|محمية طبيعية|maḥmiyya ṭabīʿiyya|国家公园|guójiā gōngyuán|国立公園|kokuritsu kōen
camping|le camping|campsite|el camping|il campeggio|o parque de campismo|مخيم|mukhayyam|营地|yíngdì|キャンプ場|kyanpujō
rock|le rocher|rock|la roca|la roccia|a rocha|صخرة|ṣakhra|岩石|yánshí|岩|iwa
wood|le bois|wood|la madera|il legno|a madeira|خشب|khashab|木头|mùtou|木材|mokuzai
globe_showing_europe_africa|la Terre|Earth|la Tierra|la Terra|a Terra|الأرض|al-arḍ|地球|dìqiú|地球|chikyū
`, groups: `
mountain|Nous montons la montagne.|We are climbing the mountain.|Subimos la montaña.|Saliamo sulla montagna.|Subimos a montanha.|نصعد الجبل.|naṣʿadu l-jabal.|我们在爬山。|wǒmen zài pá shān.|山に登ります。|yama ni noborimasu.
beach_with_umbrella|une journée à la plage|a day at the beach|un día en la playa|una giornata al mare|um dia na praia|يوم على الشاطئ|yawm ʿalā sh-shāṭiʾ|在海滩的一天|zài hǎitān de yì tiān|ビーチでの一日|bīchi de no ichinichi
` },
];
