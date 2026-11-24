import type { ThemeSrc } from './types';

// Ville et voyage : transports, lieux, voyage, route.
export const CITY: ThemeSrc[] = [
  { id: 'transport', title: 'Transports', section: 'Ville et voyage', level: 'A1', kids: true, words: `
automobile|la voiture|car|el coche|la macchina|o carro|سيارة|sayyāra|汽车|qìchē|車|kuruma
bus|le bus|bus|el autobús|l’autobus|o autocarro|حافلة|ḥāfila|公共汽车|gōnggòng qìchē|バス|basu
train|le train|train|el tren|il treno|o comboio|قطار|qiṭār|火车|huǒchē|電車|densha
metro|le métro|underground|el metro|la metropolitana|o metro|مترو|mitrū|地铁|dìtiě|地下鉄|chikatetsu
tram|le tramway|tram|el tranvía|il tram|o elétrico|ترام|trām|有轨电车|yǒuguǐ diànchē|路面電車|romen densha
airplane|l’avion|plane|el avión|l’aereo|o avião|طائرة|ṭāʾira|飞机|fēijī|飛行機|hikōki
helicopter|l’hélicoptère|helicopter|el helicóptero|l’elicottero|o helicóptero|مروحية|marwaḥiyya|直升机|zhíshēngjī|ヘリコプター|herikoputā
bicycle|le vélo|bicycle|la bicicleta|la bicicletta|a bicicleta|دراجة|darrāja|自行车|zìxíngchē|自転車|jitensha
motorcycle|la moto|motorbike|la moto|la moto|a mota|دراجة نارية|darrāja nāriyya|摩托车|mótuōchē|オートバイ|ōtobai
motor_scooter|le scooter|motor scooter|el ciclomotor|lo scooter|a scooter|سكوتر بمحرك|skūtar bi-muḥarrik|小型摩托车|xiǎoxíng mótuōchē|スクーター|sukūtā
taxi|le taxi|taxi|el taxi|il taxi|o táxi|سيارة أجرة|sayyārat ujra|出租车|chūzūchē|タクシー|takushī
ambulance|l’ambulance|ambulance|la ambulancia|l’ambulanza|a ambulância|سيارة إسعاف|sayyārat isʿāf|救护车|jiùhùchē|救急車|kyūkyūsha
fire_engine|le camion de pompiers|fire engine|el camión de bomberos|l’autopompa|o carro dos bombeiros|سيارة إطفاء|sayyārat iṭfāʾ|消防车|xiāofángchē|消防車|shōbōsha
police_car|la voiture de police|police car|el coche de policía|l’auto della polizia|o carro da polícia|سيارة شرطة|sayyārat shurṭa|警车|jǐngchē|パトカー|patokā
delivery_truck|le camion|lorry|el camión|il camion|o camião|شاحنة|shāḥina|卡车|kǎchē|トラック|torakku
tractor|le tracteur|tractor|el tractor|il trattore|o trator|جرار|jarrār|拖拉机|tuōlājī|トラクター|torakutā
ship|le navire|ship|el barco|la nave|o navio|سفينة|safīna|轮船|lúnchuán|船|fune
sailboat|le voilier|sailing boat|el velero|la barca a vela|o veleiro|مركب شراعي|markab shirāʿī|帆船|fānchuán|ヨット|yotto
canoe|le canoë|canoe|la canoa|la canoa|a canoa|زورق|zawraq|独木舟|dúmùzhōu|カヌー|kanū
rocket|la fusée|rocket|el cohete|il razzo|o foguetão|صاروخ|ṣārūkh|火箭|huǒjiàn|ロケット|roketto
kick_scooter|la trottinette|scooter|el patinete|il monopattino|a trotinete|سكوتر|skūtar|滑板车|huábǎnchē|キックボード|kikkubōdo
`, groups: `
bus|Je prends le bus.|I take the bus.|Tomo el autobús.|Prendo l’autobus.|Apanho o autocarro.|أركب الحافلة.|arkabu l-ḥāfila.|我坐公共汽车。|wǒ zuò gōnggòng qìchē.|バスに乗ります。|basu ni norimasu.
train|Le train arrive.|The train is arriving.|Llega el tren.|Arriva il treno.|O comboio está a chegar.|القطار يصل.|al-qiṭār yaṣil.|火车来了。|huǒchē lái le.|電車が来ます。|densha ga kimasu.
` },

  { id: 'places', title: 'Lieux de la ville', section: 'Ville et voyage', level: 'A2', kids: true, words: `
school|l’école|school|la escuela|la scuola|a escola|مدرسة|madrasa|学校|xuéxiào|学校|gakkō
hospital|l’hôpital|hospital|el hospital|l’ospedale|o hospital|مستشفى|mustashfā|医院|yīyuàn|病院|byōin
bank|la banque|bank|el banco|la banca|o banco|بنك|bank|银行|yínháng|銀行|ginkō
hotel|l’hôtel|hotel|el hotel|l’hotel|o hotel|فندق|funduq|酒店|jiǔdiàn|ホテル|hoteru
convenience_store|l’épicerie|grocery shop|la tienda de comestibles|il negozio di alimentari|a mercearia|بقالة|baqqāla|便利店|biànlìdiàn|コンビニ|konbini
department_store|le grand magasin|department store|los grandes almacenes|il grande magazzino|o grande armazém|متجر كبير|matjar kabīr|百货商店|bǎihuò shāngdiàn|デパート|depāto
post_office|la poste|post office|correos|l’ufficio postale|os correios|مكتب البريد|maktab al-barīd|邮局|yóujú|郵便局|yūbinkyoku
office_building|le bureau|office|la oficina|l’ufficio|o escritório|مكتب|maktab|办公楼|bàngōnglóu|オフィスビル|ofisu biru
factory|l’usine|factory|la fábrica|la fabbrica|a fábrica|مصنع|maṣnaʿ|工厂|gōngchǎng|工場|kōjō
stadium|le stade|stadium|el estadio|lo stadio|o estádio|ملعب|malʿab|体育场|tǐyùchǎng|スタジアム|sutajiamu
classical_building|le musée|museum|el museo|il museo|o museu|متحف|matḥaf|博物馆|bówùguǎn|博物館|hakubutsukan
castle|le château|castle|el castillo|il castello|o castelo|قلعة|qalʿa|城堡|chéngbǎo|城|shiro
mosque|la mosquée|mosque|la mezquita|la moschea|a mesquita|مسجد|masjid|清真寺|qīngzhēnsì|モスク|mosuku
church|l’église|church|la iglesia|la chiesa|a igreja|كنيسة|kanīsa|教堂|jiàotáng|教会|kyōkai
fountain|la fontaine|fountain|la fuente|la fontana|a fonte|نافورة|nāfūra|喷泉|pēnquán|噴水|funsui
bridge_at_night|le pont|bridge|el puente|il ponte|a ponte|جسر|jisr|桥|qiáo|橋|hashi
cityscape|la ville|city|la ciudad|la città|a cidade|مدينة|madīna|城市|chéngshì|都市|toshi
houses|le quartier|neighbourhood|el barrio|il quartiere|o bairro|حي|ḥayy|街区|jiēqū|住宅街|jūtakugai
playground_slide|l’aire de jeux|playground|el parque infantil|il parco giochi|o parque infantil|ملعب الأطفال|malʿab al-aṭfāl|游乐场|yóulèchǎng|遊び場|asobiba
ferris_wheel|la grande roue|big wheel|la noria|la ruota panoramica|a roda gigante|عجلة دوارة|ʿajala dawwāra|摩天轮|mótiānlún|観覧車|kanransha
`, groups: `
hospital|Où est l’hôpital ?|Where is the hospital?|¿Dónde está el hospital?|Dov’è l’ospedale?|Onde fica o hospital?|أين المستشفى؟|ayna l-mustashfā?|医院在哪儿？|yīyuàn zài nǎr?|病院はどこですか？|byōin wa doko desu ka?
bank|La banque est fermée.|The bank is closed.|El banco está cerrado.|La banca è chiusa.|O banco está fechado.|البنك مغلق.|al-bank mughlaq.|银行关门了。|yínháng guānmén le.|銀行は閉まっています。|ginkō wa shimatte imasu.
` },

  { id: 'travel', title: 'Voyage', section: 'Ville et voyage', level: 'A2', kids: false, words: `
luggage|la valise|suitcase|la maleta|la valigia|a mala|حقيبة سفر|ḥaqībat safar|行李箱|xínglixiāng|スーツケース|sūtsukēsu
ticket|le billet|ticket|el billete|il biglietto|o bilhete|تذكرة|tadhkira|票|piào|切符|kippu
world_map|la carte|map|el mapa|la mappa|o mapa|خريطة|kharīṭa|地图|dìtú|地図|chizu
compass|la boussole|compass|la brújula|la bussola|a bússola|بوصلة|būṣla|指南针|zhǐnánzhēn|方位磁針|hōi jishin
station|la gare|station|la estación|la stazione|a estação|محطة|maḥaṭṭa|车站|chēzhàn|駅|eki
airplane_departure|le départ|departure|la salida|la partenza|a partida|المغادرة|al-mughādara|出发|chūfā|出発|shuppatsu
airplane_arrival|l’arrivée|arrival|la llegada|l’arrivo|a chegada|الوصول|al-wuṣūl|到达|dàodá|到着|tōchaku
passport_control|le contrôle des passeports|passport control|el control de pasaportes|il controllo passaporti|o controlo de passaportes|مراقبة الجوازات|murāqabat al-jawāzāt|护照检查|hùzhào jiǎnchá|入国審査|nyūkoku shinsa
customs|la douane|customs|la aduana|la dogana|a alfândega|الجمارك|al-jamārik|海关|hǎiguān|税関|zeikan
bellhop_bell|la réception|reception|la recepción|la reception|a receção|الاستقبال|al-istiqbāl|前台|qiántái|フロント|furonto
tent|la tente|tent|la tienda de campaña|la tenda|a tenda|خيمة|khayma|帐篷|zhàngpeng|テント|tento
fuel_pump|la station-service|petrol station|la gasolinera|il distributore|a bomba de gasolina|محطة الوقود|maḥaṭṭat al-wuqūd|加油站|jiāyóuzhàn|ガソリンスタンド|gasorin sutando
vertical_traffic_light|le feu tricolore|traffic lights|el semáforo|il semaforo|o semáforo|إشارة المرور|ishārat al-murūr|红绿灯|hónglǜdēng|信号|shingō
stop_sign|le panneau stop|stop sign|la señal de stop|il segnale di stop|o sinal de stop|إشارة قف|ishārat qif|停车标志|tíngchē biāozhì|一時停止の標識|ichiji teishi no hyōshiki
construction|les travaux|roadworks|las obras|i lavori stradali|as obras|أشغال الطريق|ashghāl aṭ-ṭarīq|道路施工|dàolù shīgōng|工事|kōji
motorway|l’autoroute|motorway|la autopista|l’autostrada|a autoestrada|الطريق السريع|aṭ-ṭarīq as-sarīʿ|高速公路|gāosù gōnglù|高速道路|kōsoku dōro
`, groups: `
luggage|Ma valise est lourde.|My suitcase is heavy.|Mi maleta pesa mucho.|La mia valigia è pesante.|A minha mala é pesada.|حقيبتي ثقيلة.|ḥaqībatī thaqīla.|我的行李箱很重。|wǒ de xínglixiāng hěn zhòng.|私のスーツケースは重いです。|watashi no sūtsukēsu wa omoi desu.
ticket|Un billet pour Rabat, s’il vous plaît.|A ticket to Rabat, please.|Un billete para Rabat, por favor.|Un biglietto per Rabat, per favore.|Um bilhete para Rabat, por favor.|تذكرة إلى الرباط من فضلك.|tadhkira ilā r-ribāṭ min faḍlik.|请给我一张去拉巴特的票。|qǐng gěi wǒ yì zhāng qù Lābātè de piào.|ラバトまでの切符を一枚ください。|rabato made no kippu o ichimai kudasai.
` },
];
