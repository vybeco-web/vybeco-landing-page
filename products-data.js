// js/products-data.js
const CATEGORY_ORDER = [
  ['aircon','Aircond (Penghawa Dingin)'],
  ['water-purifier','Water Purifier (Penapis Air)'],
  ['air-purifier','Air Purifier (Penapis Udara)'],
  ['refrigerator','Refrigerator (Peti Sejuk)'],
  ['washer-dryer','Washer & Dryer (Mesin Basuh & Pengering)'],
  ['styler','Styler (Penjaga Pakaian)'],
  ['tv','TV (Televisyen)'],
  ['soundbar','Soundbar (Sistem Audio)'],
  ['vacuum','Vacuum (Pembersih Vakum)'],
  ['dishwasher','Dishwasher (Mesin Basuh Pinggan)'],
  ['dehumidifier','Dehumidifier (Penyahlembap)']
];

const ICONS = {
  aircon:'❄️', 'water-purifier':'💧', 'air-purifier':'🌬️', refrigerator:'🧊',
  'washer-dryer':'🧺🌤️', styler:'👔', tv:'📺', soundbar:'🔊', vacuum:'🧹',
  dishwasher:'🍽️', dehumidifier:'💨'
};

const STREET_PICKS = [
  'GC-L257KQKR','WU525BS','AS10GDBYO','FV1450S2W','S3-Q09JAPPA','OLED65C3PSA',
  'DFC533FV','A9T-RMAX','DD16GMWEE'
];
const CREW_PICKS = ['GC-L257KQKR','S3-Q09JAPPA','DFC533FV','FV1450S2W'];

const PRODUCTS = [
  // === REFRIGERATOR (6) ===
  {cat:'refrigerator',model:'GC-L257KQKR',name:'641L Side-by-Side',poster:'assets/img/refrigerator/GC-L257KQKR.jpg',price:'RM110',normal:'RM220',badge:'Popular',desc:'Peti sejuk besar dengan dispenser air & ais automatik. Sesuai keluarga besar.',specs:['641L','UVnano® Dispenser','Smart Inverter','Door-in-Door'],benefits:['Ais & air bersih tanpa sentuh','Kurang bau campur','Muat stok mingguan']},
  {cat:'refrigerator',model:'GC-J257SQNW',name:'Side-by-Side UVnano',poster:'assets/img/refrigerator/GC-J257SQNW.jpg',price:'RM130',normal:'RM260',badge:'Premium',desc:'Hygiene Fresh+ & UVnano untuk kebersihan maksimum.',specs:['UVnano®','Hygiene Fresh+','Door-in-Door','LinearCooling+'],benefits:['Kurang bakteria di dispenser','Bau segar 24/7','Akses pantas']},
  {cat:'refrigerator',model:'GN-F452PQAK',name:'Top Freezer + Dispenser',poster:'assets/img/refrigerator/GN-F452PQAK.jpg',price:'RM80',normal:'RM160',desc:'Pilihan bajet dengan dispenser air terbina.',specs:['DoorCooling+','Water Dispenser','Multi Air Flow'],benefits:['Jimat ruang','Air sejuk sentiasa','Harga mesra']},
  {cat:'refrigerator',model:'GR-B257KQKR',name:'Bottom Freezer 641L',poster:'assets/img/refrigerator/GR-B257KQKR.jpg',price:'RM120',normal:'RM240',badge:'New',desc:'Bottom freezer untuk akses mudah ke peti sejuk.',specs:['641L','Inverter','DoorCooling+'],benefits:['Tidak perlu bongkok','Akses harian mudah']},
  {cat:'refrigerator',model:'GN-H702HQHU',name:'Top Freezer 547L',poster:'assets/img/refrigerator/GN-H702HQHU.jpg',price:'RM95',normal:'RM190',desc:'Kapasiti sederhana untuk keluarga 4-6 orang.',specs:['547L','Smart Inverter','Multi Air Flow'],benefits:['Jimat elektrik','Suhu sekata']},
  {cat:'refrigerator',model:'GC-B257SLWL',name:'Side-by-Side InstaView',poster:'assets/img/refrigerator/GC-B257SLWL.jpg',price:'RM160',normal:'RM320',badge:'InstaView',desc:'Ketuk dua kali untuk lihat dalam tanpa buka pintu.',specs:['InstaView™','Craft Ice','UVnano®'],benefits:['Kurang kehilangan sejuk','Ais bulat premium']},

  // === WATER PURIFIER (4) ===
  {cat:'water-purifier',model:'WU525BS',name:'Tankless Hot & Cold',poster:'assets/img/water-purifier/WU525BS.jpg',price:'RM140',normal:'RM280',badge:'OHSEM',desc:'Air panas & sejuk tanpa tangki.',specs:['Tankless','RO 6-Stage','Steril Auto'],benefits:['Air panas untuk kopi','Tak ada air bertakung','Servis termasuk']},
  {cat:'water-purifier',model:'WD518AN',name:'Compact Tankless',poster:'assets/img/water-purifier/WD518AN.jpg',price:'RM90',normal:'RM180',desc:'Saiz kecil untuk dapur sewa.',specs:['Compact','3-Stage','Indicator Filter'],benefits:['Muat di meja','Tukar filter mudah']},
  {cat:'water-purifier',model:'WD316AN',name:'Tabletop Hot & Cold',poster:'assets/img/water-purifier/WD316AN.jpg',price:'RM110',normal:'RM220',desc:'Air panas untuk teh & kopi.',specs:['Hot/Cold','4-Stage','Child Lock'],benefits:['Air panas segera','Selamat untuk anak']},
  {cat:'water-purifier',model:'WU950AS',name:'Tankless UV',poster:'assets/img/water-purifier/WU950AS.jpg',price:'RM160',normal:'RM320',badge:'UV',desc:'UV steril untuk air paling bersih.',specs:['UV Steril','RO+UV','Smart Display'],benefits:['99.9% bakteria mati','Kualiti hospital']},

  // === AIR PURIFIER (5) ===
  {cat:'air-purifier',model:'AS10GDBYO',name:'360° Dual Booster',poster:'assets/img/air-purifier/AS10GDBYO.jpg',price:'RM135',normal:'RM270',badge:'Hit',desc:'360° untuk ruang tamu besar.',specs:['HEPA','PM1.0 Sensor','Dual Booster'],benefits:['Udara bersih pantas','Sensor pintar']},
  {cat:'air-purifier',model:'AS60GHWGO',name:'360° Standard',poster:'assets/img/air-purifier/AS60GHWGO.jpg',price:'RM70',normal:'RM140',desc:'Model asas untuk bilik.',specs:['HEPA','Deodorization','Quiet Mode'],benefits:['Senang tidur','Kurang habuk']},
  {cat:'air-purifier',model:'AS20GPBK0',name:'AeroFurniture',poster:'assets/img/air-purifier/AS20GPBK0.jpg',price:'RM80',normal:'RM160',desc:'Meja + penapis udara.',specs:['Table Design','HEPA','Compact'],benefits:['Jimat ruang','Nampak premium']},
  {cat:'air-purifier',model:'AS95GDWT0',name:'360° Tower',poster:'assets/img/air-purifier/AS95GDWT0.jpg',price:'RM180',normal:'RM360',badge:'Tower',desc:'Untuk ruang besar 100m².',specs:['100m²','Ionizer','Smart ThinQ'],benefits:['Kawalan phone','Udara segar besar']},
  {cat:'air-purifier',model:'PS-Q450WT',name:'PuriCare Mini',poster:'assets/img/air-purifier/PS-Q450WT.jpg',price:'RM50',normal:'RM100',desc:'Portable untuk kereta.',specs:['USB','HEPA','Portable'],benefits:['Udara bersih dalam kereta']},

  // === WASHER & DRYER (8) ===
  {cat:'washer-dryer',model:'FV1450S2W',name:'Front Load 10.5kg',poster:'assets/img/washer/FV1450S2W.jpg',price:'RM100',normal:'RM200',badge:'OHSEM',desc:'AI DD untuk fabrik lembut.',specs:['10.5kg','AI DD™','TurboWash™'],benefits:['Basuh cepat','Kain tahan lama']},
  {cat:'washer-dryer',model:'F2520SNEKR',name:'Front Load 20kg',poster:'assets/img/washer/F2520SNEKR.jpg',price:'RM150',normal:'RM300',desc:'Untuk comforter & keluarga besar.',specs:['20kg','Inverter','Bulky Mode'],benefits:['Basuh comforter','Jimat masa']},
  {cat:'washer-dryer',model:'VD-H9066WSR',name:'Heat Pump Dryer 9kg',poster:'assets/img/dryer/VD-H9066WSR.jpg',price:'RM110',normal:'RM220',desc:'Kering lembut & jimat tenaga.',specs:['9kg','Heat Pump','Allergy Care'],benefits:['Tak panas berlebihan','Kurang alergen']},
  {cat:'washer-dryer',model:'WT2520MHGER',name:'WashTower AI DD',poster:'assets/img/washer/WT2520MHGER.jpg',price:'RM280',normal:'RM560',badge:'All-in-One',desc:'Washer + Dryer menegak.',specs:['Washer+Dryer','Center Control','AI DD'],benefits:['Jimat ruang','All-in-one']},
  {cat:'washer-dryer',model:'F4V5VYP2T',name:'Front Load 10.5kg + Dryer',poster:'assets/img/washer/F4V5VYP2T.jpg',price:'RM180',normal:'RM360',desc:'Set washer + dryer berasing.',specs:['10.5kg+7kg','Steam+','ThinQ'],benefits:['Kawalan phone','Steam hilang kedut']},
  {cat:'washer-dryer',model:'FH4G1JCS2',name:'Top Load 13kg',poster:'assets/img/washer/FH4G1JCS2.jpg',price:'RM85',normal:'RM170',desc:'Top load klasik tapi pintar.',specs:['13kg','6 Motion DD','TurboDrum'],benefits:['Basuh kuat','Harga mesra']},
  {cat:'washer-dryer',model:'T2310VSAM',name:'Top Load 10kg',poster:'assets/img/washer/T2310VSAM.jpg',price:'RM70',normal:'RM140',desc:'Pilihan bajet untuk sewa.',specs:['10kg','Inverter','Smart Diagnosis'],benefits:['Jimat elektrik','Mudah servis']},
  {cat:'washer-dryer',model:'RH10VHP2B',name:'Dryer 10kg',poster:'assets/img/dryer/RH10VHP2B.jpg',price:'RM120',normal:'RM240',desc:'Dryer besar untuk keluarga.',specs:['10kg','Sensor Dry','Wrinkle Care'],benefits:['Kurang kedut','Auto stop']},

  // === AIRCOND (6) ===
  {cat:'aircon',model:'S3-Q09JAPPA',name:'DUALCOOL 1.0HP',poster:'assets/img/aircon/S3-Q09JAPPA.jpg',price:'RM80',normal:'RM160',desc:'Untuk bilik tidur standard.',specs:['1.0HP','DUAL Inverter','Fast Cooling'],benefits:['Sejuk cepat','Senyap']},
  {cat:'aircon',model:'S3-Q12JA3BA',name:'DUALCOOL 1.5HP',poster:'assets/img/aircon/S3-Q12JA3BA.jpg',price:'RM90',normal:'RM180',desc:'Untuk master bedroom.',specs:['1.5HP','Allergy Filter','Wi-Fi'],benefits:['Kawalan phone','Udara bersih']},
  {cat:'aircon',model:'S3-Q24K2RPA',name:'ARTCOOL 2.5HP',poster:'assets/img/aircon/S3-Q24K2RPA.jpg',price:'RM140',normal:'RM280',badge:'Design',desc:'Panel kaca untuk ruang tamu.',specs:['2.5HP','ARTCOOL','Inverter'],benefits:['Nampak premium','Sejuk besar']},
  {cat:'aircon',model:'S3-Q18KL3BA',name:'DUALCOOL 2.0HP',poster:'assets/img/aircon/S3-Q18KL3BA.jpg',price:'RM120',normal:'RM240',desc:'Untuk ruang tamu sederhana.',specs:['2.0HP','ThinQ','Energy Saving'],benefits:['Jimat bil','Kawalan suara']},
  {cat:'aircon',model:'PC12SQ',name:'Portable 1.0HP',poster:'assets/img/aircon/PC12SQ.jpg',price:'RM100',normal:'RM200',desc:'Boleh alih ke mana-mana.',specs:['Portable','1.0HP','Dehumidify'],benefits:['Tiada pemasangan','Mudah pindah']},
  {cat:'aircon',model:'Z3-Q24K2RPA',name:'Ceiling Cassette 2.5HP',poster:'assets/img/aircon/Z3-Q24K2RPA.jpg',price:'RM200',normal:'RM400',badge:'Commercial',desc:'Untuk pejabat atau kedai.',specs:['Cassette','360° Airflow','Inverter'],benefits:['Sejuk sekata','Nampak kemas']},

  // === TV (7) ===
  {cat:'tv',model:'OLED77B5PSA',name:'77" OLED B5',poster:'assets/img/tv/OLED77B5PSA.jpg',price:'RM560',normal:'RM1120',badge:'Cinematic',desc:'Home cinema sebenar.',specs:['77"','OLED','Dolby Vision','webOS'],benefits:['Hitam pekat','Movie night wow']},
  {cat:'tv',model:'OLED65C3PSA',name:'65" OLED C3',poster:'assets/img/tv/OLED65C3PSA.jpg',price:'RM390',normal:'RM780',desc:'Sweet spot OLED.',specs:['65"','OLED evo','120Hz','Gaming'],benefits:['Gaming smooth','Warna hidup']},
  {cat:'tv',model:'QNED75-75',name:'75" QNED',poster:'assets/img/tv/QNED75-75.jpg',price:'RM200',normal:'RM400',desc:'Skrin besar bajet.',specs:['75"','QNED','Local Dimming'],benefits:['Bola & drama jelas']},
  {cat:'tv',model:'86NANO80',name:'86" NanoCell',poster:'assets/img/tv/86NANO80.jpg',price:'RM300',normal:'RM600',badge:'Giant',desc:'TV gergasi untuk ruang tamu.',specs:['86"','4K NanoCell','ThinQ AI'],benefits:['Immersive besar']},
  {cat:'tv',model:'55UR80',name:'55" UR80 4K',poster:'assets/img/tv/55UR80.jpg',price:'RM110',normal:'RM220',desc:'TV utama harian.',specs:['55"','4K UHD','Magic Remote'],benefits:['Mudah guna','Streaming lancar']},
  {cat:'tv',model:'43UR75',name:'43" 4K Smart',poster:'assets/img/tv/43UR75.jpg',price:'RM70',normal:'RM140',desc:'Untuk bilik tidur.',specs:['43"','4K','webOS','HDR'],benefits:['Kecil tapi jelas']},
  {cat:'tv',model:'32LM63',name:'32" HD Smart',poster:'assets/img/tv/32LM63.jpg',price:'RM50',normal:'RM100',desc:'Untuk dapur atau bilik kecil.',specs:['32"','HD','Smart TV'],benefits:['Harga murah','Streaming']},

  // === SOUND BAR, STYLER, VACUUM, DISHWASHER, DEHUMIDIFIER (10) ===
  {cat:'soundbar',model:'S90QY',name:'Dolby Atmos 5.1.3',poster:'assets/img/soundbar/S90QY.jpg',price:'RM160',normal:'RM320',desc:'Audio cinema di rumah.',specs:['5.1.3','Dolby Atmos','AI Sound Pro'],benefits:['Bunyi 3D','Dialog jelas']},
  {cat:'styler',model:'S3WF',name:'LG Styler TrueSteam',poster:'assets/img/styler/S3WF.jpg',price:'RM90',normal:'RM180',desc:'Segarkan sut & jubah.',specs:['TrueSteam','Moving Hanger','Delicate'],benefits:['Kurang dry clean','Sentiasa kemas']},
  {cat:'vacuum',model:'A9T-RMAX',name:'CordZero Tower',poster:'assets/img/vacuum/A9T-RMAX.jpg',price:'RM90',normal:'RM180',desc:'Auto empty + charge.',specs:['All-in-One Tower','PowerDrive','Bateri Tukar'],benefits:['Rumah kemas','Tiada wayar']},
  {cat:'vacuum',model:'A9X-RSTEAM',name:'CordZero Steam Mop',poster:'assets/img/vacuum/A9X-RSTEAM.jpg',price:'RM130',normal:'RM260',desc:'Vacuum + mop stim.',specs:['Steam Mop','Allergy Care','Lantai Jubin'],benefits:['Lantai licin','Kurang kuman']},
  {cat:'dishwasher',model:'DFC533FV',name:'QuadWash TrueSteam Silver',poster:'assets/img/dishwasher/DFC533FV.jpg',price:'RM65',normal:'RM130',badge:'NEW',desc:'Pinggan berkilau.',specs:['TrueSteam™','QuadWash™','14 Settings'],benefits:['Kurang kesan air','Jimat masa']},
  {cat:'dishwasher',model:'DFC335HM',name:'QuadWash Matte Black',poster:'assets/img/dishwasher/DFC335HM.jpg',price:'RM75',normal:'RM150',badge:'Auto Open',desc:'Auto Open untuk kering natural.',specs:['Auto Open','Dual Zone','Matte Black'],benefits:['Lebih kering','Nampak premium']},
  {cat:'dehumidifier',model:'DD16GMWEE',name:'16L Smart',poster:'assets/img/dehumidifier/DD16GMWEE.jpg',price:'RM70',normal:'RM140',desc:'Kawal lembapan bilik.',specs:['16L','Auto Mode','Quiet'],benefits:['Kurang hapak','Tidur selesa']},
  {cat:'dehumidifier',model:'DD16GME1',name:'16L Continuous Drain',poster:'assets/img/dehumidifier/DD16GME1.jpg',price:'RM110',normal:'RM220',desc:'Untuk ruang besar.',specs:['16L','Hose','Auto Defrost'],benefits:['Tiada perlu kosong','Sesuai stor']},
  {cat:'vacuum',model:'VS1610NN',name:'CordZero Handstick',poster:'assets/img/vacuum/VS1610NN.jpg',price:'RM60',normal:'RM120',desc:'Ringan untuk sofa.',specs:['Handstick','HEPA','Lightweight'],benefits:['Mudah angkat','Kurang habuk']},
  {cat:'air-purifier',model:'AS65GDWH0',name:'360° Pet Mode',poster:'assets/img/air-purifier/AS65GDWH0.jpg',price:'RM150',normal:'RM300',badge:'Pet',desc:'Untuk rumah ada kucing/anjing.',specs:['Pet Mode','HEPA','Odor Removal'],benefits:['Kurang bau haiwan','Kurang bulu terbang']}
];

PRODUCTS.forEach((p,i) => p._idx = i);
