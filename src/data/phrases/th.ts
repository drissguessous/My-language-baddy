// Thaï : traductions des phrases des leçons, avec transcription RTGS (Royal Thai General System,
// système officiel de l'Institut royal ; les tons et la longueur des voyelles n'y sont pas notés).
// Les particules de politesse ครับ (locuteur) / ค่ะ (locutrice) sont omises : elles dépendent de la personne
// qui parle ; l'astuce de langue explique comment les ajouter.
// Format : identifiant | thaï | transcription.
const ROWS = `
g1|สวัสดี สบายดีไหม|sawatdi sabai di mai
g2|สบายดีมาก ขอบคุณ แล้วคุณล่ะ|sabai di mak khopkhun laeo khun la
g3|สบายดี ขอบคุณ ยินดีต้อนรับ|sabai di khopkhun yindi tonrap
g4|ขอบคุณมาก|khopkhun mak
g5|ลาก่อน แล้วพบกันพรุ่งนี้|la kon laeo phop kan phrungni
g6|ลาก่อน ขอให้เป็นวันที่ดี|la kon kho hai pen wan thi di
i1|คุณชื่ออะไร|khun chue arai
i2|ฉันชื่อซามี|chan chue Sami
i3|คุณมาจากไหน|khun ma chak nai
i4|ฉันมาจากโมร็อกโก ฉันอยู่ที่อากาดีร์|chan ma chak Morokko chan yu thi Akadi
i5|คุณพูดภาษาอะไรบ้าง|khun phut phasa arai bang
i6|ฉันพูดภาษาอาหรับและภาษาฝรั่งเศส และกำลังเรียนภาษาญี่ปุ่น|chan phut phasa Arap lae phasa Farangset lae kamlang rian phasa Yipun
n1|ตอนนี้กี่โมงแล้ว|tonni ki mong laeo
n2|บ่ายสามโมงครึ่ง|bai sam mong khrueng
n3|ราคาเท่าไร|rakha thaorai
n4|ทั้งหมดยี่สิบยูโร|thangmot yisip yuro
n5|ฉันมีนัดวันจันทร์ตอนสิบโมง|chan mi nat wan chan ton sip mong
n6|ดีมาก เจอกันวันจันทร์|di mak choe kan wan chan
f1|สวัสดี รับอะไรดี|sawatdi rap arai di
f2|ขอกาแฟหนึ่งแก้วกับน้ำส้มหนึ่งแก้ว|kho kafae nueng kaeo kap nam som nueng kaeo
f3|ใส่น้ำตาลไหม|sai namtan mai
f4|ไม่ใส่น้ำตาล ขอบคุณ|mai sai namtan khopkhun
f5|เช็กบิลด้วย|chek bin duai
f6|ได้เลย ขอให้เป็นวันที่ดี|dai loei kho hai pen wan thi di
d1|ขอโทษ สถานีรถไฟอยู่ที่ไหน|khothot sathani rotfai yu thi nai
d2|ตรงไป แล้วเลี้ยวซ้าย|trong pai laeo liao sai
d3|ไกลจากที่นี่ไหม|klai chak thi ni mai
d4|ไม่ไกล เดินห้านาที|mai klai doen ha nathi
d5|ฉันขึ้นรถเมล์ไปได้ไหม|chan khuen rotme pai dai mai
d6|ได้ รถเมล์สาย 12 จอดตรงข้ามนี่เอง|dai rotme sai sipsong chot trongkham ni eng
k1|เธอชอบสีอะไรที่สุด|thoe chop si arai thisut
k2|ฉันชอบสีแดงกับสีเหลือง|chan chop si daeng kap si lueang
k3|เธอมีสัตว์เลี้ยงไหม|thoe mi sat liang mai
k4|มี ฉันมีแมวชื่อมีมี่|mi chan mi maeo chue Mimi
k5|มาเล่นด้วยกันไหม|ma len duai kan mai
k6|ได้เลย สุดยอดไปเลย|dai loei sutyot pai loei
s1|ให้ช่วยอะไรไหม|hai chuai arai mai
s2|ใช่ ฉันกำลังหาเสื้อแจ็กเก็ตสำหรับหน้าหนาว|chai chan kamlang ha suea chaekket samrap na nao
s3|คุณใส่ไซซ์อะไร|khun sai sai arai
s4|ไซซ์ M แต่ขอลองก่อน|sai em tae kho long kon
s5|ได้เลย ห้องลองเสื้ออยู่ด้านใน|dai loei hong long suea yu dan nai
s6|ใส่พอดีเลย จ่ายด้วยบัตรได้ไหม|sai phodi loei chai duai bat dai mai
r1|คุณตื่นนอนกี่โมง|khun tuen non ki mong
r2|ฉันตื่นตอนเจ็ดโมงแล้วกินข้าวเช้า|chan tuen ton chet mong laeo kin khao chao
r3|คุณไปทำงานอย่างไร|khun pai thamngan yangrai
r4|นั่งรถราง ใช้เวลายี่สิบนาที|nang rotrang chai wela yisip nathi
r5|แล้วตอนเย็นคุณทำอะไร|laeo ton yen khun tham arai
r6|ฉันออกกำลังกาย แล้วอ่านหนังสือนิดหน่อยก่อนนอน|chan ok kamlang kai laeo an nangsue nitnoi kon non
h1|สวัสดีตอนเย็น ฉันจองห้องไว้ในชื่อซามี อะลาวี|sawatdi ton yen chan chong hong wai nai chue Sami Alawi
h2|ยินดีต้อนรับ ขอดูหนังสือเดินทางด้วย|yindi tonrap kho du nangsue doenthang duai
h3|รวมอาหารเช้าไหม|ruam ahan chao mai
h4|รวม ตั้งแต่เจ็ดโมงถึงสิบโมง ที่ชั้นล่าง|ruam tangtae chet mong thueng sip mong thi chan lang
h5|ในห้องน้ำไม่มีน้ำร้อน|nai hongnam mai mi nam ron
h6|ขอโทษด้วย จะส่งช่างไปเดี๋ยวนี้|khothot duai cha song chang pai diaoni
o1|คุณคิดว่าหนังเรื่องนี้เป็นอย่างไร|khun khit wa nang rueang ni pen yangrai
o2|ฉันคิดว่าเนื้อเรื่องแปลกใหม่ แต่ตอนจบทำให้ผิดหวัง|chan khit wa nuea rueang plaek mai tae ton chop tham hai phitwang
o3|ฉันไม่ค่อยเห็นด้วย ตอนจบมีเหตุผลดี|chan mai khoi hen duai ton chop mi hetphon di
o4|จริง แต่มันจบเร็วเกินไป|ching tae man chop reo koen pai
o5|คุณจะแนะนำหนังเรื่องนี้ให้เพื่อนไหม|khun cha naenam nang rueang ni hai phuean mai
o6|แนะนำ โดยเฉพาะเรื่องดนตรีและนักแสดง|naenam doi chapho rueang dontri lae naksadaeng
w1|ช่วยเล่าประสบการณ์ทำงานของคุณให้ฟังหน่อย|chuai lao prasopkan thamngan khong khun hai fang noi
w2|ฉันทำงานเป็นผู้ช่วยฝ่ายขายในบริษัทส่งออกมาสามปี|chan thamngan pen phuchuai fai khai nai borisat songok ma sam pi
w3|หน้าที่หลักของคุณคืออะไร|nathi lak khong khun khue arai
w4|ฉันทำใบเสนอราคาและติดตามคำสั่งซื้อของลูกค้า|chan tham bai sanoe rakha lae tittam khamsang sue khong lukkha
w5|ทำไมคุณถึงอยากร่วมงานกับทีมของเรา|thammai khun thueng yak ruam ngan kap thim khong rao
w6|เพราะโครงการระหว่างประเทศของคุณตรงกับเป้าหมายของฉัน|phro khrongkan rawang prathet khong khun trong kap paomai khong chan
m1|เราให้ส่วนลดได้ห้าเปอร์เซ็นต์|rao hai suanlot dai ha poesen
m2|เป็นจุดเริ่มต้นที่ดี แต่ด้วยปริมาณขนาดนี้ เราหวังไว้มากกว่านั้น|pen chut roemton thi di tae duai pariman khanat ni rao wang wai mak kwa nan
m3|ถ้าคุณทำสัญญาหนึ่งปี เราให้ได้ถึงแปดเปอร์เซ็นต์|tha khun tham sanya nueng pi rao hai dai thueng paet poesen
m4|เราสนใจ โดยมีเงื่อนไขว่าต้องรับประกันกำหนดส่งสินค้า|rao sonchai doi mi nguenkhai wa tong rapprakan kamnot song sinkha
m5|เราระบุไว้ในสัญญาได้ พร้อมค่าปรับหากส่งล่าช้า|rao rabu wai nai sanya dai phrom kha prap hak song lacha
m6|ดีมาก ส่งข้อเสนอมาให้เรา แล้วเราจะเซ็นสัญญาภายในสัปดาห์นี้|di mak song khosanoe ma hai rao laeo rao cha sen sanya phainai sapda ni
a1|คุณคิดว่าการทำงานจากที่บ้านช่วยเพิ่มประสิทธิภาพไหม|khun khit wa kan thamngan chak thi ban chuai phoem prasitthiphap mai
a2|ในระดับหนึ่ง เพราะเสียเวลาเดินทางน้อยลง|nai radap nueng phro sia wela doenthang noi long
a3|แต่พนักงานหลายคนรู้สึกโดดเดี่ยว|tae phanakngan lai khon rusuek dotdiao
a4|ฉันจึงสนับสนุนรูปแบบผสม โดยเข้าออฟฟิศสองวัน|chan chueng sanapsanun rupbaep phasom doi khao opfit song wan
a5|แล้วจะสร้างความเป็นธรรมระหว่างคนที่ทำงานจากบ้านได้กับคนอื่นอย่างไร|laeo cha sang khwam pen tham rawang khon thi thamngan chak ban dai kap khon uen yangrai
a6|ชดเชยด้วยเวลาทำงานที่ยืดหยุ่นมากขึ้น|chotchoei duai wela thamngan thi yuetyun mak khuen
p1|ขอบคุณที่มาร่วมงาน ฉันจะนำเสนอผลประกอบการไตรมาสนี้|khopkhun thi ma ruam ngan chan cha namsanoe phon prakopkan traimat ni
p2|ยอดขายเพิ่มขึ้นสิบสองเปอร์เซ็นต์ ส่วนใหญ่มาจากการส่งออก|yot khai phoem khuen sipsong poesen suan yai ma chak kan songok
p3|คุณอธิบายการลดลงของกำไรอย่างไร|khun athibai kan lot long khong kamrai yangrai
p4|สาเหตุหลักคือต้นทุนวัตถุดิบที่สูงขึ้น|sahet lak khue tonthun watthudip thi sung khuen
p5|คุณมีมาตรการอะไรเพื่อแก้ปัญหานี้|khun mi matrakan arai phuea kae panha ni
p6|เราจะเจรจาสัญญาจัดซื้อใหม่ และนำระบบอัตโนมัติมาใช้ในการผลิตบางส่วน|rao cha chencha sanya chatsue mai lae nam rabop attanomat ma chai nai kan phalit bang suan
x1|อย่านับไก่ก่อนไข่จะฟัก|ya nap kai kon khai cha fak
x2|คุณพูดถูก เราระวังไว้ก่อนจนกว่าจะเซ็นสัญญา|khun phut thuk rao rawang wai kon chon kwa cha sen sanya
x3|บอกเขาอย่างนุ่มนวลนะ เขาใจน้อยมาก|bok khao yang numnuan na khao chainoi mak
x4|ฉันจะเสนอคำติชมในรูปของข้อเสนอแนะ|chan cha sanoe kham titchom nai rup khong khosanoenae
x5|รายงานนี้เขียนดี แม้จะยาวไปหน่อย|raingan ni khian di mae cha yao pai noi
x6|ฉันจะย่อให้เหลือแต่ใจความสำคัญ|chan cha yo hai luea tae chaikhwam samkhan
pb1|คุณต้องการแก้ปัญหาอะไรเป็นอันดับแรก|khun tongkan kae panha arai pen andap raek
pb2|สต็อกของเราไม่เคยตรงกับความจริง และเราเสียยอดขาย|satok khong rao mai khoei trong kap khwam ching lae rao sia yot khai
pb3|ระบบของเราซิงก์สต็อกแบบเรียลไทม์ในทุกจุดขายของคุณ|rabop khong rao sing satok baep rianthai nai thuk chut khai khong khun
pb4|การติดตั้งใช้เวลานานเท่าไร|kan tittang chai wela nan thaorai
pb5|โดยทั่วไปหกสัปดาห์ รวมการอบรมทีมงานด้วย|doi thuapai hok sapda ruam kan oprom thimngan duai
pb6|คุณสาธิตให้เราดูสัปดาห์หน้าได้ไหม|khun sathit hai rao du sapda na dai mai
ph1|ยินดีต้อนรับสู่โรงแรม เดินทางมาสะดวกไหม|yindi tonrap su rongraem doenthang ma saduak mai
ph2|สะดวกดี ขอบคุณ ลูกชายของฉันแพ้ถั่วลิสง|saduak di khopkhun lukchai khong chan phae thua lisong
ph3|รับทราบ ฉันจะแจ้งเชฟสำหรับทุกมื้อของคุณ|rapsap chan cha chaeng chef samrap thuk mue khong khun
ph4|พรุ่งนี้ไปเที่ยวเมดินาได้ไหม|phrungni pai thiao Medina dai mai
ph5|ได้ มีทัวร์พร้อมไกด์ออกเดินทางตอนเก้าโมง จองให้สองที่ไหม|dai mi thua phrom kai ok doenthang ton kao mong chong hai song thi mai
ph6|ยินดีเลย ขอบคุณสำหรับการต้อนรับ|yindi loei khopkhun samrap kan tonrap
pt1|การดีพลอยเมื่อวานทำให้ระบบโปรดักชันล่ม|kan diphloi muea wan tham hai rabop prodakchan lom
pt2|ฉันตรวจดูล็อกแล้ว ตัวแปรสภาพแวดล้อมหายไปหนึ่งตัว|chan truat du lok laeo tuaprae saphap waetlom hai pai nueng tua
pt3|มีผู้ใช้ได้รับผลกระทบกี่คน|mi phuchai dai rap phonkrathop ki khon
pt4|ประมาณแปดร้อยคน เป็นเวลาสี่สิบนาที ตอนนี้ระบบกลับมาใช้งานได้แล้ว|praman paet roi khon pen wela si sip nathi tonni rabop klap ma chai ngan dai laeo
pt5|ต้องเพิ่มการทดสอบอัตโนมัติเพื่อไม่ให้เกิดขึ้นอีก|tong phoem kan thotsop attanomat phuea mai hai koet khuen ik
pt6|ตกลง ฉันจะเขียนรายงานสรุปเหตุการณ์และเปิดทิกเก็ตวันนี้|toklong chan cha khian raingan sarup hetkan lae poet thikket wan ni
ps1|สวัสดี ฉันเป็นพยาบาลเวร เจ็บตรงไหน|sawatdi chan pen phayaban wen chep trong nai
ps2|ฉันเจ็บหน้าอกตั้งแต่เมื่อเช้า|chan chep na ok tangtae muea chao
ps3|ถ้าให้คะแนนหนึ่งถึงสิบ เจ็บมากแค่ไหน|tha hai khanaen nueng thueng sip chep mak khae nai
ps4|ประมาณเจ็ด และหายใจลำบาก|praman chet lae haichai lambak
ps5|ฉันจะแจ้งแพทย์ทันทีและทำคลื่นไฟฟ้าหัวใจ|chan cha chaeng phaet thanthi lae tham khluen faifa huachai
ps6|ขอบคุณ ค่อยสบายใจขึ้น|khopkhun khoi sabai chai khuen
pl1|ตู้คอนเทนเนอร์ของเราอยู่ไหนแล้ว ควรจะถึงวันจันทร์|tu khonthenoe khong rao yu nai laeo khuan cha thueng wan chan
pl2|เรือล่าช้าที่ท่าเรือขนถ่ายสินค้า คาดว่าจะถึงวันพฤหัสบดี|ruea lacha thi tharuea khon thai sinkha khat wa cha thueng wan phruehatsabodi
pl3|เอกสารศุลกากรพร้อมหรือยัง|ekkasan sunlakakon phrom rue yang
pl4|ยังขาดหนังสือรับรองถิ่นกำเนิดสินค้าจากผู้จำหน่าย|yang khat nangsue raprong thin kamnoet sinkha chak phuchamnai
pl5|ติดตามเขาวันนี้ ไม่อย่างนั้นเราจะต้องจ่ายค่าเสียเวลาเรือ|tittam khao wan ni mai yang nan rao cha tong chai kha sia wela ruea
pl6|เรียบร้อยแล้ว เขาสัญญาว่าจะส่งก่อนเที่ยง|riaproi laeo khao sanya wa cha song kon thiang
`;

export const TH_PHRASES: Record<string, [string, string]> = Object.fromEntries(
  ROWS.trim().split('\n').map((l) => { const [id, th, r] = l.split('|'); return [id, [th, r]]; }),
);
