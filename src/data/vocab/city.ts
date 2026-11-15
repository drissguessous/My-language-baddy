import type { ThemeSrc } from './types';

// Ville et voyage : transports, lieux, voyage, route.
export const CITY: ThemeSrc[] = [
  { id: 'transport', title: 'Transports', section: 'Ville et voyage', level: 'A1', kids: true, words: `
automobile|la voiture|car|el coche|la macchina|o carro|سيارة|sayyāra|ماشین|mâshin|गाड़ी|gāṛī|汽车|qìchē|車|kuruma|
bus|le bus|bus|el autobús|l’autobus|o autocarro|حافلة|ḥāfila|اتوبوس|otobus|बस|bas|公共汽车|gōnggòng qìchē|バス|basu|
train|le train|train|el tren|il treno|o comboio|قطار|qiṭār|قطار|qatâr|रेलगाड़ी|relgāṛī|火车|huǒchē|電車|densha|
metro|le métro|underground|el metro|la metropolitana|o metro|مترو|mitrū|مترو|metro|मेट्रो|meṭro|地铁|dìtiě|地下鉄|chikatetsu|
tram|le tramway|tram|el tranvía|il tram|o elétrico|ترام|trām|تراموا|terâmvâ|ट्राम|ṭrām|有轨电车|yǒuguǐ diànchē|路面電車|romen densha|
airplane|l’avion|plane|el avión|l’aereo|o avião|طائرة|ṭāʾira|هواپیما|havâpeymâ|हवाई जहाज़|havāī jahāz|飞机|fēijī|飛行機|hikōki|
helicopter|l’hélicoptère|helicopter|el helicóptero|l’elicottero|o helicóptero|مروحية|marwaḥiyya|هلیکوپتر|helikopter|हेलीकॉप्टर|helīkŏpṭar|直升机|zhíshēngjī|ヘリコプター|herikoputā|
bicycle|le vélo|bicycle|la bicicleta|la bicicletta|a bicicleta|دراجة|darrāja|دوچرخه|docharkhe|साइकिल|sāikil|自行车|zìxíngchē|自転車|jitensha|
motorcycle|la moto|motorbike|la moto|la moto|a mota|دراجة نارية|darrāja nāriyya|موتورسیکلت|motorsiklet|मोटरसाइकिल|moṭarsāikil|摩托车|mótuōchē|オートバイ|ōtobai|
motor_scooter|le scooter|motor scooter|el ciclomotor|lo scooter|a scooter|سكوتر بمحرك|skūtar bi-muḥarrik|اسکوتر|eskuter|स्कूटर|skūṭar|小型摩托车|xiǎoxíng mótuōchē|スクーター|sukūtā|
taxi|le taxi|taxi|el taxi|il taxi|o táxi|سيارة أجرة|sayyārat ujra|تاکسی|tâksi|टैक्सी|ṭaiksī|出租车|chūzūchē|タクシー|takushī|
ambulance|l’ambulance|ambulance|la ambulancia|l’ambulanza|a ambulância|سيارة إسعاف|sayyārat isʿāf|آمبولانس|âmbulâns|एम्बुलेंस|embulens|救护车|jiùhùchē|救急車|kyūkyūsha|
fire_engine|le camion de pompiers|fire engine|el camión de bomberos|l’autopompa|o carro dos bombeiros|سيارة إطفاء|sayyārat iṭfāʾ|ماشین آتش‌نشانی|mâshin-e âtash-neshâni|दमकल|damkal|消防车|xiāofángchē|消防車|shōbōsha|
police_car|la voiture de police|police car|el coche de policía|l’auto della polizia|o carro da polícia|سيارة شرطة|sayyārat shurṭa|ماشین پلیس|mâshin-e polis|पुलिस की गाड़ी|pulis kī gāṛī|警车|jǐngchē|パトカー|patokā|
delivery_truck|le camion|lorry|el camión|il camion|o camião|شاحنة|shāḥina|کامیون|kâmyun|ट्रक|ṭrak|卡车|kǎchē|トラック|torakku|
tractor|le tracteur|tractor|el tractor|il trattore|o trator|جرار|jarrār|تراکتور|terâktor|ट्रैक्टर|ṭraikṭar|拖拉机|tuōlājī|トラクター|torakutā|
ship|le navire|ship|el barco|la nave|o navio|سفينة|safīna|کشتی|kashti|जहाज़|jahāz|轮船|lúnchuán|船|fune|
sailboat|le voilier|sailing boat|el velero|la barca a vela|o veleiro|مركب شراعي|markab shirāʿī|قایق بادبانی|qâyeq-e bâdbâni|पालनाव|pālnāv|帆船|fānchuán|ヨット|yotto|
canoe|le canoë|canoe|la canoa|la canoa|a canoa|زورق|zawraq|قایق پارویی|qâyeq-e pâruyi|डोंगी|ḍoṅgī|独木舟|dúmùzhōu|カヌー|kanū|
rocket|la fusée|rocket|el cohete|il razzo|o foguetão|صاروخ|ṣārūkh|موشک|mushak|रॉकेट|rŏkeṭ|火箭|huǒjiàn|ロケット|roketto|
kick_scooter|la trottinette|scooter|el patinete|il monopattino|a trotinete|سكوتر|skūtar|اسکوتر پایی|eskuter-e pâyi|किक स्कूटर|kik skūṭar|滑板车|huábǎnchē|キックボード|kikkubōdo|
`, groups: `
bus|Je prends le bus.|I take the bus.|Tomo el autobús.|Prendo l’autobus.|Apanho o autocarro.|أركب الحافلة.|arkabu l-ḥāfila.|سوار اتوبوس می‌شوم.|savâr-e otobus mishavam.|मैं बस लेता हूँ।|maĩ bas letā hū̃.|我坐公共汽车。|wǒ zuò gōnggòng qìchē.|バスに乗ります。|basu ni norimasu.|
train|Le train arrive.|The train is arriving.|Llega el tren.|Arriva il treno.|O comboio está a chegar.|القطار يصل.|al-qiṭār yaṣil.|قطار می‌رسد.|qatâr miresad.|रेलगाड़ी आ रही है।|relgāṛī ā rahī hai.|火车来了。|huǒchē lái le.|電車が来ます。|densha ga kimasu.|
` },

  { id: 'places', title: 'Lieux de la ville', section: 'Ville et voyage', level: 'A2', kids: true, words: `
school|l’école|school|la escuela|la scuola|a escola|مدرسة|madrasa|مدرسه|madrese|स्कूल|skūl|学校|xuéxiào|学校|gakkō|aɣerbaz
hospital|l’hôpital|hospital|el hospital|l’ospedale|o hospital|مستشفى|mustashfā|بیمارستان|bimârestân|अस्पताल|aspatāl|医院|yīyuàn|病院|byōin|
bank|la banque|bank|el banco|la banca|o banco|بنك|bank|بانک|bânk|बैंक|baink|银行|yínháng|銀行|ginkō|
hotel|l’hôtel|hotel|el hotel|l’hotel|o hotel|فندق|funduq|هتل|hotel|होटल|hoṭal|酒店|jiǔdiàn|ホテル|hoteru|
convenience_store|l’épicerie|grocery shop|la tienda de comestibles|il negozio di alimentari|a mercearia|بقالة|baqqāla|بقالی|baqqâli|किराने की दुकान|kirāne kī dukān|便利店|biànlìdiàn|コンビニ|konbini|
department_store|le grand magasin|department store|los grandes almacenes|il grande magazzino|o grande armazém|متجر كبير|matjar kabīr|فروشگاه بزرگ|forushgâh-e bozorg|डिपार्टमेंट स्टोर|ḍipārṭmeṇṭ sṭor|百货商店|bǎihuò shāngdiàn|デパート|depāto|
post_office|la poste|post office|correos|l’ufficio postale|os correios|مكتب البريد|maktab al-barīd|اداره پست|edâre-ye post|डाकघर|ḍākghar|邮局|yóujú|郵便局|yūbinkyoku|
office_building|le bureau|office|la oficina|l’ufficio|o escritório|مكتب|maktab|اداره|edâre|दफ़्तर|daftar|办公楼|bàngōnglóu|オフィスビル|ofisu biru|
factory|l’usine|factory|la fábrica|la fabbrica|a fábrica|مصنع|maṣnaʿ|کارخانه|kârkhâne|कारख़ाना|kārkhānā|工厂|gōngchǎng|工場|kōjō|
stadium|le stade|stadium|el estadio|lo stadio|o estádio|ملعب|malʿab|ورزشگاه|varzeshgâh|स्टेडियम|sṭeḍiyam|体育场|tǐyùchǎng|スタジアム|sutajiamu|
classical_building|le musée|museum|el museo|il museo|o museu|متحف|matḥaf|موزه|muze|संग्रहालय|saṅgrahālay|博物馆|bówùguǎn|博物館|hakubutsukan|
castle|le château|castle|el castillo|il castello|o castelo|قلعة|qalʿa|قلعه|qal'e|क़िला|qilā|城堡|chéngbǎo|城|shiro|
mosque|la mosquée|mosque|la mezquita|la moschea|a mesquita|مسجد|masjid|مسجد|masjed|मस्जिद|masjid|清真寺|qīngzhēnsì|モスク|mosuku|tamzgida
church|l’église|church|la iglesia|la chiesa|a igreja|كنيسة|kanīsa|کلیسا|kelisâ|चर्च|carc|教堂|jiàotáng|教会|kyōkai|
fountain|la fontaine|fountain|la fuente|la fontana|a fonte|نافورة|nāfūra|فواره|favvâre|फ़व्वारा|favvārā|喷泉|pēnquán|噴水|funsui|
bridge_at_night|le pont|bridge|el puente|il ponte|a ponte|جسر|jisr|پل|pol|पुल|pul|桥|qiáo|橋|hashi|
cityscape|la ville|city|la ciudad|la città|a cidade|مدينة|madīna|شهر|shahr|शहर|śahar|城市|chéngshì|都市|toshi|tamdint
houses|le quartier|neighbourhood|el barrio|il quartiere|o bairro|حي|ḥayy|محله|mahalle|मोहल्ला|mohallā|街区|jiēqū|住宅街|jūtakugai|
playground_slide|l’aire de jeux|playground|el parque infantil|il parco giochi|o parque infantil|ملعب الأطفال|malʿab al-aṭfāl|زمین بازی|zamin-e bâzi|खेल का मैदान|khel kā maidān|游乐场|yóulèchǎng|遊び場|asobiba|
ferris_wheel|la grande roue|big wheel|la noria|la ruota panoramica|a roda gigante|عجلة دوارة|ʿajala dawwāra|چرخ و فلک|charkh-o-falak|बड़ा झूला|baṛā jhūlā|摩天轮|mótiānlún|観覧車|kanransha|
`, groups: `
hospital|Où est l’hôpital ?|Where is the hospital?|¿Dónde está el hospital?|Dov’è l’ospedale?|Onde fica o hospital?|أين المستشفى؟|ayna l-mustashfā?|بیمارستان کجاست؟|bimârestân kojâst?|अस्पताल कहाँ है?|aspatāl kahā̃ hai?|医院在哪儿？|yīyuàn zài nǎr?|病院はどこですか？|byōin wa doko desu ka?|
bank|La banque est fermée.|The bank is closed.|El banco está cerrado.|La banca è chiusa.|O banco está fechado.|البنك مغلق.|al-bank mughlaq.|بانک بسته است.|bânk baste ast.|बैंक बंद है।|baink band hai.|银行关门了。|yínháng guānmén le.|銀行は閉まっています。|ginkō wa shimatte imasu.|
` },

  { id: 'travel', title: 'Voyage', section: 'Ville et voyage', level: 'A2', kids: false, words: `
luggage|la valise|suitcase|la maleta|la valigia|a mala|حقيبة سفر|ḥaqībat safar|چمدان|chamedân|सूटकेस|sūṭkes|行李箱|xínglixiāng|スーツケース|sūtsukēsu|
ticket|le billet|ticket|el billete|il biglietto|o bilhete|تذكرة|tadhkira|بلیت|belit|टिकट|ṭikaṭ|票|piào|切符|kippu|
world_map|la carte|map|el mapa|la mappa|o mapa|خريطة|kharīṭa|نقشه|naqshe|नक़्शा|naqśā|地图|dìtú|地図|chizu|
compass|la boussole|compass|la brújula|la bussola|a bússola|بوصلة|būṣla|قطب‌نما|qotb-namâ|कम्पास|kampās|指南针|zhǐnánzhēn|方位磁針|hōi jishin|
station|la gare|station|la estación|la stazione|a estação|محطة|maḥaṭṭa|ایستگاه|istgâh|स्टेशन|sṭeśan|车站|chēzhàn|駅|eki|
airplane_departure|le départ|departure|la salida|la partenza|a partida|المغادرة|al-mughādara|پرواز خروجی|parvâz-e khoruji|प्रस्थान|prasthān|出发|chūfā|出発|shuppatsu|
airplane_arrival|l’arrivée|arrival|la llegada|l’arrivo|a chegada|الوصول|al-wuṣūl|ورود|vorud|आगमन|āgaman|到达|dàodá|到着|tōchaku|
passport_control|le contrôle des passeports|passport control|el control de pasaportes|il controllo passaporti|o controlo de passaportes|مراقبة الجوازات|murāqabat al-jawāzāt|کنترل گذرنامه|kontrol-e gozarnâme|पासपोर्ट जाँच|pāsporṭ jā̃c|护照检查|hùzhào jiǎnchá|入国審査|nyūkoku shinsa|
customs|la douane|customs|la aduana|la dogana|a alfândega|الجمارك|al-jamārik|گمرک|gomrok|सीमा शुल्क|sīmā śulk|海关|hǎiguān|税関|zeikan|
bellhop_bell|la réception|reception|la recepción|la reception|a receção|الاستقبال|al-istiqbāl|پذیرش|pazirsh|रिसेप्शन|risepśan|前台|qiántái|フロント|furonto|
tent|la tente|tent|la tienda de campaña|la tenda|a tenda|خيمة|khayma|چادر|châdor|तंबू|tambū|帐篷|zhàngpeng|テント|tento|aqiṭun
fuel_pump|la station-service|petrol station|la gasolinera|il distributore|a bomba de gasolina|محطة الوقود|maḥaṭṭat al-wuqūd|پمپ بنزین|pomp-e benzin|पेट्रोल पंप|peṭrol pamp|加油站|jiāyóuzhàn|ガソリンスタンド|gasorin sutando|
vertical_traffic_light|le feu tricolore|traffic lights|el semáforo|il semaforo|o semáforo|إشارة المرور|ishārat al-murūr|چراغ راهنمایی|cherâgh-e râhnamâyi|ट्रैफ़िक लाइट|ṭraifik lāiṭ|红绿灯|hónglǜdēng|信号|shingō|
stop_sign|le panneau stop|stop sign|la señal de stop|il segnale di stop|o sinal de stop|إشارة قف|ishārat qif|تابلو ایست|tâblo-ye ist|रुकने का संकेत|rukne kā saṅket|停车标志|tíngchē biāozhì|一時停止の標識|ichiji teishi no hyōshiki|
construction|les travaux|roadworks|las obras|i lavori stradali|as obras|أشغال الطريق|ashghāl aṭ-ṭarīq|کار جاده‌ای|kâr-e jâdde-i|सड़क का काम|saṛak kā kām|道路施工|dàolù shīgōng|工事|kōji|
motorway|l’autoroute|motorway|la autopista|l’autostrada|a autoestrada|الطريق السريع|aṭ-ṭarīq as-sarīʿ|بزرگراه|bozorgrâh|राजमार्ग|rājmārg|高速公路|gāosù gōnglù|高速道路|kōsoku dōro|
`, groups: `
luggage|Ma valise est lourde.|My suitcase is heavy.|Mi maleta pesa mucho.|La mia valigia è pesante.|A minha mala é pesada.|حقيبتي ثقيلة.|ḥaqībatī thaqīla.|چمدانم سنگین است.|chamedânam sangin ast.|मेरा सूटकेस भारी है।|merā sūṭkes bhārī hai.|我的行李箱很重。|wǒ de xínglixiāng hěn zhòng.|私のスーツケースは重いです。|watashi no sūtsukēsu wa omoi desu.|
ticket|Un billet pour Rabat, s’il vous plaît.|A ticket to Rabat, please.|Un billete para Rabat, por favor.|Un biglietto per Rabat, per favore.|Um bilhete para Rabat, por favor.|تذكرة إلى الرباط من فضلك.|tadhkira ilā r-ribāṭ min faḍlik.|یک بلیت به رباط لطفاً.|yek belit be Rabât lotfan.|रबात का एक टिकट, कृपया।|rabāt kā ek ṭikaṭ, kṛpayā.|请给我一张去拉巴特的票。|qǐng gěi wǒ yì zhāng qù Lābātè de piào.|ラバトまでの切符を一枚ください。|rabato made no kippu o ichimai kudasai.|
` },
];
