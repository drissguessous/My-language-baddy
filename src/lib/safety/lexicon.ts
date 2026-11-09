// Lexique de modération utilisé pour filtrer ce que l'apprenant tape ou dit
// (réponses écrites, transcriptions vocales, prénoms et pseudos).
// Il ne sert qu'à BLOQUER : aucun de ces termes n'est jamais affiché ni enseigné.
//
// Règles d'appariement (voir filter.ts) :
//  - entrée simple       → mot entier, après normalisation (accents, leetspeak, lettres répétées) ;
//  - entrée « xxx* »     → tout mot qui COMMENCE par xxx ;
//  - entrée « fr:xxx »   → ne s'applique que si le français est l'une des langues du contexte
//                          (évite les faux positifs : « con » = « avec » en espagnol et en italien) ;
//  - écritures sans espaces (chinois, japonais) → recherche de sous-chaîne.
// Les entrées ont été choisies pour éviter les collisions connues (Paris, retard, idiotisme,
// crapaud, Pakistan, 酒店, ばかり…). À valider par des locuteurs natifs (docs/SECURITE.md).

export type Category =
  | 'insult'      // grossièretés et insultes : bloquées pour tous
  | 'slur'        // termes haineux : bloqués pour tous
  | 'sexual'      // contenu sexuel : bloqué pour tous
  | 'drugs'       // drogues illicites : bloquées pour tous
  | 'adult'       // alcool, jeux d'argent, armes : bloqués pour les mineurs
  | 'distress';   // détresse : jamais bloqué, déclenche un message de soutien

export const LEXICON: Record<Category, string[]> = {
  insult: [
    // français
    'fr:con', 'fr:conne', 'fr:cons', 'connard*', 'connasse*', 'salaud*', 'salope*', 'pute', 'putes', 'putain*', 'merde*',
    'emmerd*', 'encule*', 'nique', 'niquer', 'niquez', 'ntm', 'fdp', 'fr:tg', 'batard*', 'couille*', 'chier', 'chieur*',
    'abruti*', 'cretin*', 'debile*', 'imbecile*', 'idiot', 'idiote', 'idiots', 'bouffon*', 'gueule', 'enfoire*', 'bordel*',
    // anglais
    'fuck*', 'fck*', 'fuk', 'fuking', 'wtf', 'stfu', 'shit*', 'bitch*', 'bastard*', 'asshole*', 'arsehole*', 'dick', 'dicks',
    'dickhead*', 'cunt*', 'whore*', 'slut*', 'motherf*', 'crap', 'crappy', 'damn*', 'stupid*', 'moron*', 'dumbass*', 'jerk',
    'prick', 'pricks', 'bollock*', 'wanker*',
    // espagnol
    'mierda*', 'puta', 'putas', 'puto', 'putos', 'joder*', 'jodete', 'cabron*', 'gilipolla*', 'pendej*', 'imbecil*', 'idiota*',
    'culo', 'capullo*', 'chingar*', 'chingad*', 'hostia*',
    // italien
    'cazzo*', 'merda*', 'stronz*', 'vaffanculo*', 'fanculo*', 'puttan*', 'troia', 'coglion*', 'minchia*',
    // portugais
    'caralho*', 'porra', 'porras', 'foda', 'fodase', 'foder*', 'fodido*', 'cabrao*', 'otario*', 'pt:cu', 'buceta*',
    // arabe (écriture arabe et arabizi)
    'قحبة', 'قحبه', 'شرموطة', 'شرموطه', 'زب', 'كسمك', 'منيوك', 'خرا', 'زامل', 'حقير', 'غبي', 'يلعن', 'نيك',
    'khra', 'zamel', 'zebi', '9a7ba', 'qahba', 'kahba', 'nikmok', 'tabon', 'sharmouta', 'ya7ma9',
    // persan
    'کیر', 'جنده', 'کونی', 'گوه', 'احمق', 'حرومزاده', 'لعنتی', 'jende', 'kooni',
    // hindi (devanagari et latin)
    'चूतिया', 'भेनचोद', 'बहनचोद', 'मादरचोद', 'गांडू', 'रंडी', 'हरामी', 'कमीना',
    'chutiya*', 'bhenchod', 'behenchod', 'madarchod', 'gandu', 'randi', 'harami', 'kamina',
    // chinois (sous-chaînes)
    '他妈的', '妈的', '傻逼', '草泥马', '操你', '婊子', '混蛋', '王八蛋', '去死', '白痴', '滚蛋',
    // japonais (sous-chaînes)
    'くそ', 'クソ', '死ね', 'バカ', '馬鹿', 'ちくしょう', 'ファック', 'うざい', 'きもい', 'アホ',
  ],
  slur: [
    'negre', 'negres', 'negresse*', 'bougnoul*', 'youpin*', 'pd', 'pede', 'pedes', 'tapette', 'tarlouze*', 'gouine*',
    'nigg*', 'fag', 'faggot*', 'retarded', 'tranny', 'spic', 'spics', 'chink', 'chinks', 'kike', 'kikes', 'paki', 'pakis',
    'maricon*', 'marica', 'sudaca*', 'frocio*', 'ricchion*', 'viado*',
    'زنجي', 'لوطي',
  ],
  sexual: [
    'sexe', 'sexy', 'sex', 'porn*', 'xxx', 'nude', 'nudes', 'baise', 'baiser', 'fellation*', 'masturb*',
    'orgasm*', 'boobs', 'tits', 'pussy*', 'blowjob*', 'horny', 'onlyfans', 'hentai', 'erotic*', 'erotique*',
    'viol', 'violer', 'viole', 'rape', 'raped', 'rapist*', 'sexo', 'follar*', 'scopare', 'transar',
    'جنس', 'سكس', 'سکس', 'सेक्स', '色情', '做爱', 'セックス', 'エロ',
  ],
  drugs: [
    'cocaine*', 'heroine', 'heroin', 'meth', 'methamphetamine', 'ecstasy', 'mdma', 'lsd', 'haschich*', 'hasch', 'shit',
    'weed', 'cannabis', 'beuh', 'dealer*', 'fentanyl', 'opium', 'marijuana', 'cocaina', 'porro', 'porros',
    'مخدرات', 'حشيش', 'كوكايين', 'گراس', 'تریاک', 'ड्रग्स', 'गांजा', '毒品', '大麻', '麻薬', '覚醒剤',
  ],
  adult: [
    'alcool', 'alcohol', 'biere*', 'beer*', 'vodka', 'whisky', 'whiskey', 'tequila', 'rhum', 'cerveza', 'birra', 'cerveja',
    'casino*', 'parier', 'betting', 'poker', 'gamble*', 'gambling',
    'pistolet*', 'flingue*', 'gun', 'guns', 'rifle', 'rifles', 'pistola', 'fucile',
    'خمر', 'كحول', 'قمار', 'شراب‌خوری', 'शराब', 'जुआ', 'बंदूक', '喝酒', '赌博', '枪支', 'お酒', '賭博',
  ],
  distress: [
    'suicide*', 'suicid*', 'me tuer', 'kill myself', 'want to die', 'self harm', 'scarifi*', 'harcele*', 'harcelement', 'bully*',
    'انتحار', 'خودکشی', 'आत्महत्या', '自杀', '自殺',
  ],
};
