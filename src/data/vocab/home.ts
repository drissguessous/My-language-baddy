import type { ThemeSrc } from './types';

// La maison : pièces et meubles, salle de bain et ménage, vêtements, accessoires, objets du quotidien.
export const HOME: ThemeSrc[] = [
  { id: 'house', title: 'La maison', section: 'Maison', level: 'A1', kids: true, words: `
house|la maison|house|la casa|la casa|a casa|بيت|bayt|خانه|khâne|घर|ghar|房子|fángzi|家|ie|taddart
house_with_garden|le jardin|garden|el jardín|il giardino|o jardim|حديقة|ḥadīqa|باغچه|bâghche|बगीचा|bagīcā|花园|huāyuán|庭|niwa|urti
door|la porte|door|la puerta|la porta|a porta|باب|bāb|در|dar|दरवाज़ा|darvāzā|门|mén|ドア|doa|tawwurt
window|la fenêtre|window|la ventana|la finestra|a janela|نافذة|nāfidha|پنجره|panjere|खिड़की|khiṛkī|窗户|chuānghu|窓|mado|
bed|le lit|bed|la cama|il letto|a cama|سرير|sarīr|تخت|takht|बिस्तर|bistar|床|chuáng|ベッド|beddo|
couch_and_lamp|le canapé|sofa|el sofá|il divano|o sofá|أريكة|arīka|مبل|mobl|सोफ़ा|sofā|沙发|shāfā|ソファー|sofā|
chair|la chaise|chair|la silla|la sedia|a cadeira|كرسي|kursī|صندلی|sandali|कुर्सी|kursī|椅子|yǐzi|椅子|isu|
key|la clé|key|la llave|la chiave|a chave|مفتاح|miftāḥ|کلید|kelid|चाबी|cābī|钥匙|yàoshi|鍵|kagi|tasarut
light_bulb|l’ampoule|light bulb|la bombilla|la lampadina|a lâmpada|مصباح|miṣbāḥ|لامپ|lâmp|बल्ब|balb|灯泡|dēngpào|電球|denkyū|
candle|la bougie|candle|la vela|la candela|a vela|شمعة|shamʿa|شمع|sham'|मोमबत्ती|mombattī|蜡烛|làzhú|ろうそく|rōsoku|
television|la télévision|television|la televisión|la televisione|a televisão|تلفاز|tilfāz|تلویزیون|televiziyon|टीवी|ṭīvī|电视|diànshì|テレビ|terebi|
elevator|l’ascenseur|lift|el ascensor|l’ascensore|o elevador|مصعد|miṣʿad|آسانسور|âsânsor|लिफ़्ट|lifṭ|电梯|diàntī|エレベーター|erebētā|
ladder|l’échelle|ladder|la escalera de mano|la scala|o escadote|سلم|sullam|نردبان|nardebân|सीढ़ी|sīṛhī|梯子|tīzi|はしご|hashigo|
mirror|le miroir|mirror|el espejo|lo specchio|o espelho|مرآة|mirʾāh|آینه|âyene|शीशा|śīśā|镜子|jìngzi|鏡|kagami|
framed_picture|le tableau|painting|el cuadro|il quadro|o quadro|لوحة|lawḥa|تابلو|tâblo|तस्वीर|tasvīr|画|huà|絵|e|
`, groups: `
door|Ferme la porte, s’il te plaît.|Close the door, please.|Cierra la puerta, por favor.|Chiudi la porta, per favore.|Fecha a porta, por favor.|أغلق الباب من فضلك.|aghliq al-bāb min faḍlik.|لطفاً در را ببند.|lotfan dar râ beband.|कृपया दरवाज़ा बंद करो।|kṛpayā darvāzā band karo.|请关门。|qǐng guān mén.|ドアを閉めてください。|doa o shimete kudasai.|
key|Où est la clé ?|Where is the key?|¿Dónde está la llave?|Dov’è la chiave?|Onde está a chave?|أين المفتاح؟|ayna l-miftāḥ?|کلید کجاست؟|kelid kojâst?|चाबी कहाँ है?|cābī kahā̃ hai?|钥匙在哪儿？|yàoshi zài nǎr?|鍵はどこですか？|kagi wa doko desu ka?|Mani tasarut?
` },

  { id: 'bathroom', title: 'Salle de bain et ménage', section: 'Maison', level: 'A2', kids: true, words: `
toilet|les toilettes|toilet|el váter|il gabinetto|a sanita|المرحاض|al-mirḥāḍ|توالت|tuâlet|शौचालय|śaucālay|马桶|mǎtǒng|トイレ|toire|
shower|la douche|shower|la ducha|la doccia|o chuveiro|الدش|ad-dush|دوش|dush|शावर|śāvar|淋浴|línyù|シャワー|shawā|
bathtub|la baignoire|bathtub|la bañera|la vasca da bagno|a banheira|حوض الاستحمام|ḥawḍ al-istiḥmām|وان|vân|बाथटब|bāthṭab|浴缸|yùgāng|浴槽|yokusō|
soap|le savon|soap|el jabón|il sapone|o sabonete|صابون|ṣābūn|صابون|sâbun|साबुन|sābun|肥皂|féizào|石けん|sekken|ṣṣabun
toothbrush|la brosse à dents|toothbrush|el cepillo de dientes|lo spazzolino|a escova de dentes|فرشاة الأسنان|furshāt al-asnān|مسواک|mesvâk|टूथब्रश|ṭūthbraś|牙刷|yáshuā|歯ブラシ|haburashi|
sponge|l’éponge|sponge|la esponja|la spugna|a esponja|إسفنجة|isfanja|اسفنج|esfanj|स्पंज|spañj|海绵|hǎimián|スポンジ|suponji|
roll_of_paper|le papier toilette|toilet paper|el papel higiénico|la carta igienica|o papel higiénico|ورق التواليت|waraq at-tuwālīt|دستمال توالت|dastmâl-e tuâlet|टॉयलेट पेपर|ṭŏyleṭ pepar|卫生纸|wèishēngzhǐ|トイレットペーパー|toiretto pēpā|
lotion_bottle|la crème|lotion|la crema|la crema|o creme|كريم|krīm|کرم|kerem|लोशन|lośan|乳液|rǔyè|ローション|rōshon|
razor|le rasoir|razor|la cuchilla de afeitar|il rasoio|a lâmina de barbear|موس الحلاقة|mūs al-ḥilāqa|تیغ|tigh|उस्तरा|ustarā|剃须刀|tìxūdāo|かみそり|kamisori|
broom|le balai|broom|la escoba|la scopa|a vassoura|مكنسة|miknasa|جارو|jâru|झाड़ू|jhāṛū|扫帚|sàozhou|ほうき|hōki|
bucket|le seau|bucket|el cubo|il secchio|o balde|دلو|dalw|سطل|satl|बाल्टी|bālṭī|水桶|shuǐtǒng|バケツ|baketsu|
basket|le panier|basket|la cesta|il cestino|o cesto|سلة|salla|سبد|sabad|टोकरी|ṭokrī|篮子|lánzi|かご|kago|
wastebasket|la poubelle|bin|la papelera|il cestino dei rifiuti|o caixote do lixo|سلة المهملات|sallat al-muhmalāt|سطل زباله|satl-e zobâle|कूड़ेदान|kūṛedān|垃圾桶|lājītǒng|ゴミ箱|gomibako|
`, groups: `
toothbrush|Je me brosse les dents.|I brush my teeth.|Me cepillo los dientes.|Mi lavo i denti.|Escovo os dentes.|أنظف أسناني.|unaẓẓifu asnānī.|دندان‌هایم را مسواک می‌زنم.|dandân-hâyam râ mesvâk mizanam.|मैं दाँत साफ़ करता हूँ।|maĩ dā̃t sāf kartā hū̃.|我刷牙。|wǒ shuāyá.|歯を磨きます。|ha o migakimasu.|
shower|Je prends une douche.|I take a shower.|Me ducho.|Faccio la doccia.|Tomo duche.|أستحم.|astaḥimm.|دوش می‌گیرم.|dush migiram.|मैं नहाता हूँ।|maĩ nahātā hū̃.|我洗澡。|wǒ xǐzǎo.|シャワーを浴びます。|shawā o abimasu.|
` },

  { id: 'clothes', title: 'Vêtements', section: 'Maison', level: 'A1', kids: true, words: `
t_shirt|le tee-shirt|T-shirt|la camiseta|la maglietta|a t-shirt|قميص قصير الأكمام|qamīṣ qaṣīr al-akmām|تی‌شرت|ti-shert|टी-शर्ट|ṭī-śarṭ|T恤|T xù|Tシャツ|tī-shatsu|
jeans|le jean|jeans|los vaqueros|i jeans|as calças de ganga|جينز|jīnz|شلوار جین|shalvâr-e jin|जींस|jīns|牛仔裤|niúzǎikù|ジーンズ|jīnzu|
shorts|le short|shorts|los pantalones cortos|i pantaloncini|os calções|سروال قصير|sirwāl qaṣīr|شلوارک|shalvârak|निकर|nikar|短裤|duǎnkù|半ズボン|hanzubon|
dress|la robe|dress|el vestido|il vestito|o vestido|فستان|fustān|پیراهن زنانه|pirâhan-e zanâne|पोशाक|pośāk|连衣裙|liányīqún|ワンピース|wanpīsu|
coat|le manteau|coat|el abrigo|il cappotto|o casaco|معطف|miʿṭaf|پالتو|pâlto|कोट|koṭ|大衣|dàyī|コート|kōto|
necktie|la cravate|tie|la corbata|la cravatta|a gravata|ربطة عنق|rabṭat ʿunuq|کراوات|kerâvât|टाई|ṭāī|领带|lǐngdài|ネクタイ|nekutai|
scarf|l’écharpe|scarf|la bufanda|la sciarpa|o cachecol|وشاح|wishāḥ|شال‌گردن|shâl-gardan|मफ़लर|maflar|围巾|wéijīn|マフラー|mafurā|
gloves|les gants|gloves|los guantes|i guanti|as luvas|قفازات|quffāzāt|دستکش|dastkesh|दस्ताने|dastāne|手套|shǒutào|手袋|tebukuro|
socks|les chaussettes|socks|los calcetines|i calzini|as meias|جوارب|jawārib|جوراب|jurâb|मोज़े|moze|袜子|wàzi|靴下|kutsushita|
running_shoe|les baskets|trainers|las zapatillas|le scarpe da ginnastica|as sapatilhas|حذاء رياضي|ḥidhāʾ riyāḍī|کفش ورزشی|kafsh-e varzeshi|जूते|jūte|运动鞋|yùndòngxié|スニーカー|sunīkā|
man_s_shoe|les chaussures|shoes|los zapatos|le scarpe|os sapatos|حذاء|ḥidhāʾ|کفش|kafsh|जूता|jūtā|皮鞋|píxié|靴|kutsu|
woman_s_boot|les bottes|boots|las botas|gli stivali|as botas|جزمة|jazma|چکمه|chakme|बूट|būṭ|靴子|xuēzi|ブーツ|būtsu|
thong_sandal|les tongs|flip-flops|las chanclas|le infradito|os chinelos|شبشب|shibshib|دمپایی|dampâyi|चप्पल|cappal|人字拖|rénzìtuō|ビーチサンダル|bīchi sandaru|
billed_cap|la casquette|cap|la gorra|il cappellino|o boné|قبعة|qubbaʿa|کلاه لبه‌دار|kolâh-e labe-dâr|टोपी|ṭopī|鸭舌帽|yāshémào|帽子|bōshi|
woman_s_hat|le chapeau|hat|el sombrero|il cappello|o chapéu|قبعة واسعة|qubbaʿa wāsiʿa|کلاه|kolâh|हैट|haiṭ|帽子|màozi|ハット|hatto|
one_piece_swimsuit|le maillot de bain|swimsuit|el bañador|il costume da bagno|o fato de banho|ملابس السباحة|malābis as-sibāḥa|لباس شنا|lebâs-e shenâ|स्विमसूट|svimsūṭ|泳衣|yǒngyī|水着|mizugi|
kimono|le kimono|kimono|el kimono|il kimono|o quimono|كيمونو|kīmūnū|کیمونو|kimono|किमोनो|kimono|和服|héfú|着物|kimono|
sari|le sari|sari|el sari|il sari|o sari|ساري|sārī|ساری|sâri|साड़ी|sāṛī|纱丽|shālì|サリー|sarī|
`, groups: `
man_s_shoe|des chaussures noires|black shoes|zapatos negros|scarpe nere|sapatos pretos|حذاء أسود|ḥidhāʾ aswad|کفش مشکی|kafsh-e meshki|काले जूते|kāle jūte|黑色的鞋|hēisè de xié|黒い靴|kuroi kutsu|
coat|Je mets mon manteau.|I put on my coat.|Me pongo el abrigo.|Mi metto il cappotto.|Visto o casaco.|ألبس معطفي.|albasu miʿṭafī.|پالتویم را می‌پوشم.|pâltoyam râ mipusham.|मैं कोट पहनता हूँ।|maĩ koṭ pahantā hū̃.|我穿上大衣。|wǒ chuān shang dàyī.|コートを着ます。|kōto o kimasu.|
` },

  { id: 'accessories', title: 'Accessoires', section: 'Maison', level: 'A2', kids: true, words: `
glasses|les lunettes|glasses|las gafas|gli occhiali|os óculos|نظارة|naẓẓāra|عینک|eynak|चश्मा|caśmā|眼镜|yǎnjìng|眼鏡|megane|
sunglasses|les lunettes de soleil|sunglasses|las gafas de sol|gli occhiali da sole|os óculos de sol|نظارة شمسية|naẓẓāra shamsiyya|عینک آفتابی|eynak-e âftâbi|धूप का चश्मा|dhūp kā caśmā|太阳镜|tàiyángjìng|サングラス|sangurasu|
handbag|le sac à main|handbag|el bolso|la borsa|a mala de mão|حقيبة يد|ḥaqībat yad|کیف دستی|kif-e dasti|हैंडबैग|haiṇḍbaig|手提包|shǒutíbāo|ハンドバッグ|handobaggu|
backpack|le sac à dos|backpack|la mochila|lo zaino|a mochila|حقيبة ظهر|ḥaqībat ẓahr|کوله‌پشتی|kule-poshti|बस्ता|bastā|背包|bēibāo|リュック|ryukku|
purse|le porte-monnaie|purse|el monedero|il portamonete|o porta-moedas|محفظة نقود|miḥfaẓat nuqūd|کیف پول|kif-e pul|बटुआ|baṭuā|钱包|qiánbāo|財布|saifu|
ring|la bague|ring|el anillo|l’anello|o anel|خاتم|khātam|انگشتر|angoshtar|अंगूठी|aṅgūṭhī|戒指|jièzhi|指輪|yubiwa|
gem_stone|la pierre précieuse|gem|la piedra preciosa|la pietra preziosa|a pedra preciosa|جوهرة|jawhara|جواهر|javâher|रत्न|ratna|宝石|bǎoshí|宝石|hōseki|
crown|la couronne|crown|la corona|la corona|a coroa|تاج|tāj|تاج|tâj|मुकुट|mukuṭ|王冠|wángguān|王冠|ōkan|
lipstick|le rouge à lèvres|lipstick|el pintalabios|il rossetto|o batom|أحمر الشفاه|aḥmar ash-shifāh|رژ لب|rozh-e lab|लिपस्टिक|lipsṭik|口红|kǒuhóng|口紅|kuchibeni|
folding_hand_fan|l’éventail|fan|el abanico|il ventaglio|o leque|مروحة يدوية|mirwaḥa yadawiyya|بادبزن|bâdbezan|पंखा|paṅkhā|扇子|shànzi|扇子|sensu|
closed_umbrella|le parapluie fermé|closed umbrella|el paraguas cerrado|l’ombrello chiuso|o guarda-chuva fechado|مظلة مغلقة|miẓalla mughlaqa|چتر بسته|chatr-e baste|बंद छाता|band chātā|收起的伞|shōuqǐ de sǎn|閉じた傘|tojita kasa|
`, groups: `
sunglasses|Où sont mes lunettes ?|Where are my glasses?|¿Dónde están mis gafas?|Dove sono i miei occhiali?|Onde estão os meus óculos?|أين نظارتي؟|ayna naẓẓāratī?|عینکم کجاست؟|eynakam kojâst?|मेरा चश्मा कहाँ है?|merā caśmā kahā̃ hai?|我的眼镜在哪儿？|wǒ de yǎnjìng zài nǎr?|私の眼鏡はどこですか？|watashi no megane wa doko desu ka?|
backpack|un sac à dos léger|a light backpack|una mochila ligera|uno zaino leggero|uma mochila leve|حقيبة ظهر خفيفة|ḥaqībat ẓahr khafīfa|یک کوله‌پشتی سبک|yek kule-poshti-ye sabok|एक हल्का बस्ता|ek halkā bastā|一个轻便的背包|yí ge qīngbiàn de bēibāo|軽いリュック|karui ryukku|
` },

  { id: 'objects', title: 'Objets du quotidien', section: 'Maison', level: 'A2', kids: true, words: `
mobile_phone|le téléphone portable|mobile phone|el móvil|il cellulare|o telemóvel|هاتف محمول|hātif maḥmūl|گوشی همراه|gushi-ye hamrâh|मोबाइल फ़ोन|mobāil fon|手机|shǒujī|携帯電話|keitai denwa|
battery|la pile|battery|la pila|la pila|a pilha|بطارية|baṭṭāriyya|باتری|bâtri|बैटरी|baiṭrī|电池|diànchí|電池|denchi|
electric_plug|la prise|plug|el enchufe|la spina|a ficha|قابس|qābis|دوشاخه|doshâkhe|प्लग|plag|插头|chātóu|プラグ|puragu|
flashlight|la lampe de poche|torch|la linterna|la torcia|a lanterna|مصباح يدوي|miṣbāḥ yadawī|چراغ‌قوه|cherâgh-qovve|टॉर्च|ṭŏrc|手电筒|shǒudiàntǒng|懐中電灯|kaichū dentō|
camera|l’appareil photo|camera|la cámara|la macchina fotografica|a máquina fotográfica|آلة تصوير|ālat taṣwīr|دوربین|durbin|कैमरा|kaimrā|照相机|zhàoxiàngjī|カメラ|kamera|
radio|la radio|radio|la radio|la radio|o rádio|مذياع|midhyāʿ|رادیو|râdiyo|रेडियो|reḍiyo|收音机|shōuyīnjī|ラジオ|rajio|
envelope|l’enveloppe|envelope|el sobre|la busta|o envelope|ظرف|ẓarf|پاکت نامه|pâkat-e nâme|लिफ़ाफ़ा|lifāfā|信封|xìnfēng|封筒|fūtō|
package|le colis|parcel|el paquete|il pacco|a encomenda|طرد|ṭard|بسته|baste|पार्सल|pārsal|包裹|bāoguǒ|小包|kozutsumi|
wrapped_gift|le cadeau|gift|el regalo|il regalo|o presente|هدية|hadiyya|هدیه|hediye|उपहार|uphār|礼物|lǐwù|プレゼント|purezento|
balloon|le ballon de baudruche|balloon|el globo|il palloncino|o balão|بالون|bālūn|بادکنک|bâdkonak|गुब्बारा|gubbārā|气球|qìqiú|風船|fūsen|
teddy_bear|l’ours en peluche|teddy bear|el osito de peluche|l’orsacchiotto|o urso de peluche|دب محشو|dubb maḥshuww|خرس عروسکی|khers-e arusaki|टेडी बियर|ṭeḍī biyar|泰迪熊|tàidíxióng|テディベア|tedibea|
hammer|le marteau|hammer|el martillo|il martello|o martelo|مطرقة|miṭraqa|چکش|chakosh|हथौड़ा|hathauṛā|锤子|chuízi|ハンマー|hanmā|
wrench|la clé à molette|spanner|la llave inglesa|la chiave inglese|a chave inglesa|مفتاح ربط|miftāḥ rabṭ|آچار|âchâr|पाना|pānā|扳手|bānshou|スパナ|supana|
screwdriver|le tournevis|screwdriver|el destornillador|il cacciavite|a chave de fendas|مفك براغي|mifakk barāghī|پیچ‌گوشتی|pich-gushti|पेचकस|peckas|螺丝刀|luósīdāo|ドライバー|doraibā|
magnet|l’aimant|magnet|el imán|la calamita|o íman|مغناطيس|mighnāṭīs|آهنربا|âhanrobâ|चुंबक|cumbak|磁铁|cítiě|磁石|jishaku|
locked|le cadenas|padlock|el candado|il lucchetto|o cadeado|قفل|qufl|قفل|qofl|ताला|tālā|锁|suǒ|錠|jō|
`, groups: `
mobile_phone|Mon téléphone n’a plus de batterie.|My phone is out of battery.|Mi móvil se ha quedado sin batería.|Il mio cellulare è scarico.|O meu telemóvel ficou sem bateria.|نفدت بطارية هاتفي.|nafidat baṭṭāriyyat hātifī.|شارژ گوشی‌ام تمام شد.|shârzh-e gushi-am tamâm shod.|मेरे फ़ोन की बैटरी ख़त्म हो गई।|mere fon kī baiṭrī khatm ho gaī.|我的手机没电了。|wǒ de shǒujī méi diàn le.|携帯の電池が切れました。|keitai no denchi ga kiremashita.|
wrapped_gift|un cadeau pour toi|a present for you|un regalo para ti|un regalo per te|um presente para ti|هدية لك|hadiyya lak|یک هدیه برای تو|yek hediye barâye to|तुम्हारे लिए एक उपहार|tumhāre lie ek uphār|给你的礼物|gěi nǐ de lǐwù|あなたへのプレゼント|anata e no purezento|
` },
];
