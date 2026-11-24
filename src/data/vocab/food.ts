import type { ThemeSrc } from './types';

// Alimentation : fruits, légumes, aliments, douceurs, boissons, cuisine.
export const FOOD: ThemeSrc[] = [
  { id: 'fruits', title: 'Fruits', section: 'Alimentation', level: 'A1', kids: true, words: `
red_apple|la pomme|apple|la manzana|la mela|a maçã|تفاحة|tuffāḥa|苹果|píngguǒ|りんご|ringo
banana|la banane|banana|el plátano|la banana|a banana|موزة|mawza|香蕉|xiāngjiāo|バナナ|banana
tangerine|la mandarine|tangerine|la mandarina|il mandarino|a tangerina|يوسفي|yūsufī|橘子|júzi|みかん|mikan
lemon|le citron|lemon|el limón|il limone|o limão|ليمونة|laymūna|柠檬|níngméng|レモン|remon
grapes|le raisin|grapes|las uvas|l’uva|as uvas|عنب|ʿinab|葡萄|pútao|ぶどう|budō
watermelon|la pastèque|watermelon|la sandía|l’anguria|a melancia|بطيخ|baṭṭīkh|西瓜|xīguā|スイカ|suika
melon|le melon|melon|el melón|il melone|o melão|شمام|shammām|甜瓜|tiánguā|メロン|meron
pineapple|l’ananas|pineapple|la piña|l’ananas|o ananás|أناناس|anānās|菠萝|bōluó|パイナップル|painappuru
mango|la mangue|mango|el mango|il mango|a manga|مانجو|mānjū|芒果|mángguǒ|マンゴー|mangō
pear|la poire|pear|la pera|la pera|a pera|إجاصة|ijjāṣa|梨|lí|洋梨|yōnashi
peach|la pêche|peach|el melocotón|la pesca|o pêssego|خوخة|khawkha|桃子|táozi|桃|momo
cherries|les cerises|cherries|las cerezas|le ciliegie|as cerejas|كرز|karaz|樱桃|yīngtáo|さくらんぼ|sakuranbo
strawberry|la fraise|strawberry|la fresa|la fragola|o morango|فراولة|farāwila|草莓|cǎoméi|いちご|ichigo
blueberries|les myrtilles|blueberries|los arándanos|i mirtilli|os mirtilos|توت أزرق|tūt azraq|蓝莓|lánméi|ブルーベリー|burūberī
kiwi_fruit|le kiwi|kiwi|el kiwi|il kiwi|o kiwi|كيوي|kīwī|猕猴桃|míhóutáo|キウイ|kiui
coconut|la noix de coco|coconut|el coco|la noce di cocco|o coco|جوز الهند|jawz al-hind|椰子|yēzi|ココナッツ|kokonattsu
avocado|l’avocat|avocado|el aguacate|l’avocado|o abacate|أفوكادو|afūkādū|牛油果|niúyóuguǒ|アボカド|abokado
olive|l’olive|olive|la aceituna|l’oliva|a azeitona|زيتونة|zaytūna|橄榄|gǎnlǎn|オリーブ|orību
`, groups: `
red_apple|une pomme rouge|a red apple|una manzana roja|una mela rossa|uma maçã vermelha|تفاحة حمراء|tuffāḥa ḥamrāʾ|一个红苹果|yí ge hóng píngguǒ|赤いりんご|akai ringo
strawberry|J’aime les fraises.|I like strawberries.|Me gustan las fresas.|Mi piacciono le fragole.|Gosto de morangos.|أحب الفراولة.|uḥibbu l-farāwila.|我喜欢草莓。|wǒ xǐhuan cǎoméi.|いちごが好きです。|ichigo ga suki desu.
` },

  { id: 'vegetables', title: 'Légumes', section: 'Alimentation', level: 'A1', kids: true, words: `
tomato|la tomate|tomato|el tomate|il pomodoro|o tomate|طماطم|ṭamāṭim|西红柿|xīhóngshì|トマト|tomato
carrot|la carotte|carrot|la zanahoria|la carota|a cenoura|جزرة|jazara|胡萝卜|húluóbo|にんじん|ninjin
potato|la pomme de terre|potato|la patata|la patata|a batata|بطاطا|baṭāṭā|土豆|tǔdòu|じゃがいも|jagaimo
onion|l’oignon|onion|la cebolla|la cipolla|a cebola|بصلة|baṣala|洋葱|yángcōng|玉ねぎ|tamanegi
garlic|l’ail|garlic|el ajo|l’aglio|o alho|ثوم|thūm|大蒜|dàsuàn|にんにく|ninniku
cucumber|le concombre|cucumber|el pepino|il cetriolo|o pepino|خيارة|khiyāra|黄瓜|huángguā|きゅうり|kyūri
eggplant|l’aubergine|aubergine|la berenjena|la melanzana|a beringela|باذنجان|bādhinjān|茄子|qiézi|なす|nasu
bell_pepper|le poivron|pepper|el pimiento|il peperone|o pimento|فلفل حلو|filfil ḥulw|甜椒|tiánjiāo|ピーマン|pīman
hot_pepper|le piment|chilli|la guindilla|il peperoncino|a malagueta|فلفل حار|filfil ḥārr|辣椒|làjiāo|唐辛子|tōgarashi
broccoli|le brocoli|broccoli|el brócoli|i broccoli|os brócolos|بروكلي|brūkulī|西兰花|xīlánhuā|ブロッコリー|burokkorī
ear_of_corn|le maïs|corn|el maíz|il mais|o milho|ذرة|dhura|玉米|yùmǐ|とうもろこし|tōmorokoshi
leafy_green|la laitue|lettuce|la lechuga|la lattuga|a alface|خس|khass|生菜|shēngcài|レタス|retasu
mushroom|le champignon|mushroom|la seta|il fungo|o cogumelo|فطر|fuṭr|蘑菇|mógu|きのこ|kinoko
beans|les haricots|beans|las judías|i fagioli|os feijões|فاصوليا|fāṣūlyā|豆子|dòuzi|豆|mame
pea_pod|les petits pois|peas|los guisantes|i piselli|as ervilhas|بازلاء|bāzillāʾ|豌豆|wāndòu|えんどう豆|endōmame
ginger_root|le gingembre|ginger|el jengibre|lo zenzero|o gengibre|زنجبيل|zanjabīl|姜|jiāng|しょうが|shōga
peanuts|les cacahuètes|peanuts|los cacahuetes|le arachidi|os amendoins|فول سوداني|fūl sūdānī|花生|huāshēng|ピーナッツ|pīnattsu
chestnut|la châtaigne|chestnut|la castaña|la castagna|a castanha|كستناء|kastanāʾ|栗子|lìzi|栗|kuri
`, groups: `
carrot|des carottes et des pommes de terre|carrots and potatoes|zanahorias y patatas|carote e patate|cenouras e batatas|جزر وبطاطا|jazar wa-baṭāṭā|胡萝卜和土豆|húluóbo hé tǔdòu|にんじんとじゃがいも|ninjin to jagaimo
onion|Je coupe un oignon.|I am cutting an onion.|Corto una cebolla.|Taglio una cipolla.|Corto uma cebola.|أقطع بصلة.|aqṭaʿu baṣala.|我切一个洋葱。|wǒ qiē yí ge yángcōng.|玉ねぎを切ります。|tamanegi o kirimasu.
` },

  { id: 'meals', title: 'Aliments et plats', section: 'Alimentation', level: 'A1', kids: true, words: `
bread|le pain|bread|el pan|il pane|o pão|خبز|khubz|面包|miànbāo|パン|pan
baguette_bread|la baguette|baguette|la barra de pan|la baguette|a baguete|خبز فرنسي|khubz faransī|法棍|fǎgùn|バゲット|bagetto
croissant|le croissant|croissant|el cruasán|il cornetto|o croissant|كرواسون|kruwāsūn|牛角面包|niújiǎo miànbāo|クロワッサン|kurowassan
flatbread|la galette|flatbread|el pan plano|la piadina|o pão sírio|خبز مسطح|khubz musaṭṭaḥ|馕|náng|ナン|nan
cheese_wedge|le fromage|cheese|el queso|il formaggio|o queijo|جبن|jubn|奶酪|nǎilào|チーズ|chīzu
egg|l’œuf|egg|el huevo|l’uovo|o ovo|بيضة|bayḍa|鸡蛋|jīdàn|卵|tamago
butter|le beurre|butter|la mantequilla|il burro|a manteiga|زبدة|zubda|黄油|huángyóu|バター|batā
honey_pot|le miel|honey|la miel|il miele|o mel|عسل|ʿasal|蜂蜜|fēngmì|はちみつ|hachimitsu
salt|le sel|salt|la sal|il sale|o sal|ملح|milḥ|盐|yán|塩|shio
cooked_rice|le riz|rice|el arroz|il riso|o arroz|أرز|aruzz|米饭|mǐfàn|ご飯|gohan
spaghetti|les pâtes|pasta|la pasta|la pasta|a massa|معكرونة|maʿkarūna|意大利面|yìdàlì miàn|パスタ|pasuta
pizza|la pizza|pizza|la pizza|la pizza|a piza|بيتزا|bītzā|比萨饼|bǐsàbǐng|ピザ|piza
hamburger|le hamburger|hamburger|la hamburguesa|l’hamburger|o hambúrguer|همبرغر|hamburghar|汉堡包|hànbǎobāo|ハンバーガー|hanbāgā
sandwich|le sandwich|sandwich|el bocadillo|il panino|a sandes|شطيرة|shaṭīra|三明治|sānmíngzhì|サンドイッチ|sandoitchi
french_fries|les frites|French fries|las patatas fritas|le patatine fritte|as batatas fritas|بطاطا مقلية|baṭāṭā maqliyya|薯条|shǔtiáo|フライドポテト|furaido poteto
green_salad|la salade|salad|la ensalada|l’insalata|a salada|سلطة|salaṭa|沙拉|shālā|サラダ|sarada
pot_of_food|le ragoût|stew|el guiso|lo stufato|o guisado|يخنة|yakhna|炖菜|dùncài|シチュー|shichū
bowl_with_spoon|la soupe|soup|la sopa|la zuppa|a sopa|حساء|ḥasāʾ|汤|tāng|スープ|sūpu
meat_on_bone|la viande|meat|la carne|la carne|a carne|لحم|laḥm|肉|ròu|肉|niku
poultry_leg|le poulet|chicken|el pollo|il pollo|o frango|دجاج|dajāj|鸡肉|jīròu|鶏肉|toriniku
falafel|les falafels|falafel|los faláfeles|i falafel|o faláfel|فلافل|falāfil|炸豆丸子|zhá dòu wánzi|ファラフェル|faraferu
`, groups: `
bread|du pain et du fromage|bread and cheese|pan y queso|pane e formaggio|pão e queijo|خبز وجبن|khubz wa-jubn|面包和奶酪|miànbāo hé nǎilào|パンとチーズ|pan to chīzu
bowl_with_spoon|La soupe est chaude.|The soup is hot.|La sopa está caliente.|La zuppa è calda.|A sopa está quente.|الحساء ساخن.|al-ḥasāʾ sākhin.|汤很热。|tāng hěn rè.|スープは熱いです。|sūpu wa atsui desu.
` },

  { id: 'sweets', title: 'Desserts et douceurs', section: 'Alimentation', level: 'A1', kids: true, words: `
cookie|le biscuit|biscuit|la galleta|il biscotto|a bolacha|بسكويت|baskwīt|饼干|bǐnggān|クッキー|kukkī
shortcake|le gâteau|cake|la tarta|la torta|o bolo|كعكة|kaʿka|蛋糕|dàngāo|ケーキ|kēki
birthday_cake|le gâteau d’anniversaire|birthday cake|la tarta de cumpleaños|la torta di compleanno|o bolo de aniversário|كعكة عيد الميلاد|kaʿkat ʿīd al-mīlād|生日蛋糕|shēngrì dàngāo|バースデーケーキ|bāsudē kēki
ice_cream|la glace|ice cream|el helado|il gelato|o gelado|مثلجات|muthallajāt|冰淇淋|bīngqílín|アイスクリーム|aisukurīmu
chocolate_bar|le chocolat|chocolate|el chocolate|il cioccolato|o chocolate|شوكولاتة|shūkūlāta|巧克力|qiǎokèlì|チョコレート|chokorēto
candy|le bonbon|sweet|el caramelo|la caramella|o rebuçado|حلوى|ḥalwā|糖果|tángguǒ|キャンディー|kyandī
lollipop|la sucette|lollipop|la piruleta|il lecca-lecca|o chupa-chupa|مصاصة|maṣṣāṣa|棒棒糖|bàngbàngtáng|ペロペロキャンディー|peropero kyandī
doughnut|le beignet|doughnut|el dónut|la ciambella|o dónute|دونات|dūnāt|甜甜圈|tiántiánquān|ドーナツ|dōnatsu
pancakes|les crêpes|pancakes|las tortitas|i pancake|as panquecas|فطائر|faṭāʾir|煎饼|jiānbing|パンケーキ|pankēki
pie|la tarte|pie|el pastel|la crostata|a tarte|فطيرة|faṭīra|馅饼|xiànbǐng|パイ|pai
popcorn|le pop-corn|popcorn|las palomitas|i popcorn|as pipocas|فشار|fushār|爆米花|bàomǐhuā|ポップコーン|poppukōn
`, groups: `
ice_cream|une glace au chocolat|a chocolate ice cream|un helado de chocolate|un gelato al cioccolato|um gelado de chocolate|مثلجات بالشوكولاتة|muthallajāt bi-sh-shūkūlāta|巧克力冰淇淋|qiǎokèlì bīngqílín|チョコレートアイス|chokorēto aisu
birthday_cake|Joyeux anniversaire !|Happy birthday!|¡Feliz cumpleaños!|Buon compleanno!|Feliz aniversário!|عيد ميلاد سعيد!|ʿīd mīlād saʿīd!|生日快乐！|shēngrì kuàilè!|お誕生日おめでとう！|o-tanjōbi omedetō!
` },

  { id: 'drinks', title: 'Boissons', section: 'Alimentation', level: 'A1', kids: true, words: `
droplet|l’eau|water|el agua|l’acqua|a água|ماء|māʾ|水|shuǐ|水|mizu
glass_of_milk|le lait|milk|la leche|il latte|o leite|حليب|ḥalīb|牛奶|niúnǎi|牛乳|gyūnyū
hot_beverage|le café|coffee|el café|il caffè|o café|قهوة|qahwa|咖啡|kāfēi|コーヒー|kōhī
teacup_without_handle|le thé|tea|el té|il tè|o chá|شاي|shāy|茶|chá|お茶|ocha
teapot|la théière|teapot|la tetera|la teiera|o bule|إبريق الشاي|ibrīq ash-shāy|茶壶|cháhú|急須|kyūsu
beverage_box|le jus|juice|el zumo|il succo|o sumo|عصير|ʿaṣīr|果汁|guǒzhī|ジュース|jūsu
cup_with_straw|la boisson fraîche|soft drink|el refresco|la bibita|o refrigerante|مشروب غازي|mashrūb ghāzī|饮料|yǐnliào|ソフトドリンク|sofuto dorinku
bubble_tea|le thé aux perles|bubble tea|el té de burbujas|il bubble tea|o chá de bolhas|شاي الفقاعات|shāy al-fuqqāʿāt|珍珠奶茶|zhēnzhū nǎichá|タピオカミルクティー|tapioka miruku tī
ice|le glaçon|ice cube|el cubito de hielo|il cubetto di ghiaccio|o cubo de gelo|مكعب ثلج|mukaʿʿab thalj|冰块|bīngkuài|氷|kōri
`, groups: `
teacup_without_handle|Un thé, s’il vous plaît.|A tea, please.|Un té, por favor.|Un tè, per favore.|Um chá, por favor.|شاي من فضلك.|shāy min faḍlik.|请来一杯茶。|qǐng lái yì bēi chá.|お茶をください。|ocha o kudasai.
droplet|un verre d’eau|a glass of water|un vaso de agua|un bicchiere d’acqua|um copo de água|كوب من الماء|kūb min al-māʾ|一杯水|yì bēi shuǐ|水を一杯|mizu o ippai
` },

  { id: 'kitchen', title: 'À table et en cuisine', section: 'Alimentation', level: 'A2', kids: true, words: `
fork_and_knife_with_plate|l’assiette|plate|el plato|il piatto|o prato|طبق|ṭabaq|盘子|pánzi|皿|sara
fork_and_knife|les couverts|cutlery|los cubiertos|le posate|os talheres|أدوات المائدة|adawāt al-māʾida|餐具|cānjù|ナイフとフォーク|naifu to fōku
spoon|la cuillère|spoon|la cuchara|il cucchiaio|a colher|ملعقة|milʿaqa|勺子|sháozi|スプーン|supūn
kitchen_knife|le couteau|knife|el cuchillo|il coltello|a faca|سكين|sikkīn|刀|dāo|包丁|hōchō
chopsticks|les baguettes|chopsticks|los palillos|le bacchette|os pauzinhos|عيدان الأكل|ʿīdān al-akl|筷子|kuàizi|箸|hashi
cooking|la poêle|frying pan|la sartén|la padella|a frigideira|مقلاة|miqlāh|平底锅|píngdǐguō|フライパン|furaipan
jar|le bocal|jar|el tarro|il barattolo|o frasco|برطمان|barṭamān|罐子|guànzi|瓶|bin
baby_bottle|le biberon|baby bottle|el biberón|il biberon|o biberão|زجاجة رضاعة|zujājat riḍāʿa|奶瓶|nǎipíng|哺乳瓶|honyūbin
canned_food|la boîte de conserve|tin|la lata|la scatoletta|a lata de conserva|علبة مصبرات|ʿulbat muṣabbarāt|罐头|guàntou|缶詰|kanzume
`, groups: `
spoon|Passe-moi la cuillère, s’il te plaît.|Pass me the spoon, please.|Pásame la cuchara, por favor.|Passami il cucchiaio, per favore.|Passa-me a colher, por favor.|ناولني الملعقة من فضلك.|nāwilnī l-milʿaqa min faḍlik.|请把勺子递给我。|qǐng bǎ sháozi dì gěi wǒ.|スプーンを取ってください。|supūn o totte kudasai.
fork_and_knife_with_plate|Bon appétit !|Enjoy your meal!|¡Buen provecho!|Buon appetito!|Bom apetite!|بالهناء والشفاء!|bi-l-hanāʾ wa-sh-shifāʾ!|祝你好胃口！|zhù nǐ hǎo wèikǒu!|いただきます！|itadakimasu!
` },
];
