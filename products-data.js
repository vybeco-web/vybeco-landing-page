// js/products-data.js
// 42 PRODUK + CATEGORY ORDER + ICONS

const ICONS = {
  'refrigerator': '❄️',
  'water-purifier': '💧',
  'air-purifier': '🌬️',
  'washer': '🧺',
  'dryer': '🔥',
  'tv': '📺',
  'aircond': '❄️',
  'styler': '👔',
  'dishwasher': '🍽️',
  'vacuum': '🧹',
  'dehumidifier': '💨'
};

const CATEGORY_ORDER = [
  ['refrigerator', 'Petisejuk'],
  ['water-purifier', 'Penapis Air'],
  ['air-purifier', 'Penulen Udara'],
  ['washer', 'Mesin Basuh'],
  ['dryer', 'Pengering'],
  ['tv', 'TV'],
  ['aircond', 'Penghawa Dingin'],
  ['styler', 'LG Styler'],
  ['dishwasher', 'Pencuci Pinggan'],
  ['vacuum', 'Pembersih Vakum'],
  ['dehumidifier', 'Penghilang Lembapan']
];

const PRODUCTS = [
  // === REFRIGERATOR (7) ===
  { _idx:0, cat:'refrigerator', model:'GC-L257KQKR', name:'InstaView Door-in-Door™', price:'RM299', normal:'RM598', poster:'assets/img/refrigerator/gc-l257kqkr.jpg', badge:'OHSEM 50%', desc:'Petisejuk 655L dengan InstaView™ – ketuk 2x untuk tengok dalam tanpa buka pintu.', specs:['655L','InstaView™','Door-in-Door™','Hygiene Fresh+™'], benefits:['Jimatan elektrik','Bau hilang 99.99%'] },
  { _idx:1, cat:'refrigerator', model:'GR-X257CSKR', name:'Side-by-Side InstaView', price:'RM279', normal:'RM558', poster:'assets/img/refrigerator/gr-x257cskr.jpg', desc:'635L, ketuk pintu kaca untuk tengok dalam.' },
  { _idx:2, cat:'refrigerator', model:'GR-B257KQKR', name:'Bottom Freezer InstaView', price:'RM249', normal:'RM498', poster:'assets/img/refrigerator/gr-b257kqkr.jpg', desc:'635L, InstaView™ di bahagian bawah.' },
  { _idx:3, cat:'refrigerator', model:'GR-M257KQKR', name:'French Door InstaView', price:'RM269', normal:'RM538', poster:'assets/img/refrigerator/gr-m257kqkr.jpg', desc:'635L, pintu Perancis dengan InstaView™.' },
  { _idx:4, cat:'refrigerator', model:'GR-H257KQKR', name:'Top Mount InstaView', price:'RM199', normal:'RM398', poster:'assets/img/refrigerator/gr-h257kqkr.jpg', desc:'505L, InstaView™ atas.' },
  { _idx:5, cat:'refrigerator', model:'GR-C257KQKR', name:'Convertible InstaView', price:'RM259', normal:'RM518', poster:'assets/img/refrigerator/gr-c257kqkr.jpg', desc:'635L, boleh tukar peti sejuk ke peti beku.' },
  { _idx:6, cat:'refrigerator', model:'GR-D257KQKR', name:'Multi-Door InstaView', price:'RM289', normal:'RM578', poster:'assets/img/refrigerator/gr-d257kqkr.jpg', desc:'705L, 5 pintu dengan InstaView™.' },

  // === WATER PURIFIER (4) ===
  { _idx:7, cat:'water-purifier', model:'WU525BS', name:'Tankless RO 500GPD', price:'RM89', normal:'RM178', poster:'assets/img/water/wu525bs.jpg', badge:'OHSEM 50%', desc:'Penapis air tanpa tangki, 500GPD, keluarkan air panas/sejuk.' },
  { _idx:8, cat:'water-purifier', model:'WU625BS', name:'Tankless RO 600GPD', price:'RM99', normal:'RM198', poster:'assets/img/water/wu625bs.jpg', desc:'600GPD, air panas/sejuk/suhu bilik.' },
  { _idx:9, cat:'water-purifier', model:'WU425BS', name:'Tankless RO 400GPD', price:'RM79', normal:'RM158', poster:'assets/img/water/wu425bs.jpg', desc:'400GPD, reka bentuk padat.' },
  { _idx:10, cat:'water-purifier', model:'WD525BS', name:'Direct Piping RO', price:'RM69', normal:'RM138', poster:'assets/img/water/wd525bs.jpg', desc:'Piping terus, 5 tahap penapisan.' },

  // === AIR PURIFIER (4) ===
  { _idx:11, cat:'air-purifier', model:'AS10GDBYO', name:'PuriCare 360° Dual', price:'RM129', normal:'RM258', poster:'assets/img/air/as10gdbyo.jpg', badge:'OHSEM 50%', desc:'Penulen udara 360°, 100m², HEPA H14.' },
  { _idx:12, cat:'air-purifier', model:'AS60GDWV0', name:'PuriCare 360° Single', price:'RM99', normal:'RM198', poster:'assets/img/air/as60gdwv0.jpg', desc:'60m², penapis HEPA.' },
  { _idx:13, cat:'air-purifier', model:'AS95GDWV0', name:'PuriCare Wearable', price:'RM79', normal:'RM158', poster:'assets/img/air/as95gdwv0.jpg', desc:'Pakai di muka, H13 filter.' },
  { _idx:14, cat:'air-purifier', model:'AS65GDWH0', name:'PuriCare Mini', price:'RM59', normal:'RM118', poster:'assets/img/air/as65gdwh0.jpg', desc:'Mudah alih, 8m².' },

  // === WASHER & DRYER (6) ===
  { _idx:15, cat:'washer', model:'FV1450S2W', name:'Front Load 10.5kg AI DD', price:'RM109', normal:'RM218', poster:'assets/img/washer/fv1450s2w.jpg', badge:'OHSEM 50%', desc:'10.5kg, AI DD, Steam+.' },
  { _idx:16, cat:'washer', model:'FV1409S2W', name:'Front Load 9kg', price:'RM99', normal:'RM198', poster:'assets/img/washer/fv1409s2w.jpg', desc:'9kg, 6 Motion DD.' },
  { _idx:17, cat:'washer', model:'F2721HTWV', name:'Washer Dryer Combo 21kg', price:'RM179', normal:'RM358', poster:'assets/img/washer/f2721htwv.jpg', desc:'Basuh + kering dalam satu mesin.' },
  { _idx:18, cat:'dryer', model:'RH10VHPB', name:'Heat Pump Dryer 10kg', price:'RM129', normal:'RM258', poster:'assets/img/dryer/rh10vhpb.jpg', desc:'10kg, jimat elektrik.' },
  { _idx:19, cat:'dryer', model:'RH9VHPB', name:'Heat Pump Dryer 9kg', price:'RM119', normal:'RM238', poster:'assets/img/dryer/rh9vhpb.jpg', desc:'9kg, sensor kering.' },
  { _idx:20, cat:'dryer', model:'RC90V9AV2W', name:'Dual Inverter Dryer 9kg', price:'RM139', normal:'RM278', poster:'assets/img/dryer/rc90v9av2w.jpg', desc:'Dual inverter, senyap.' },

  // === TV (5) ===
  { _idx:21, cat:'tv', model:'OLED65C3PSA', name:'OLED evo C3 65"', price:'RM399', normal:'RM798', poster:'assets/img/tv/oled65c3psa.jpg', badge:'OHSEM 50%', desc:'OLED 4K, α9 AI Processor.' },
  { _idx:22, cat:'tv', model:'86QNED91TPA', name:'QNED 86"', price:'RM499', normal:'RM998', poster:'assets/img/tv/86qned91tpa.jpg', desc:'QNED 4K, Mini LED.' },
  { _idx:23, cat:'tv', model:'55UR7500PSC', name:'UHD 55"', price:'RM119', normal:'RM238', poster:'assets/img/tv/55ur7500psc.jpg', desc:'4K UHD, webOS.' },
  { _idx:24, cat:'tv', model:'43UR7500PSC', name:'UHD 43"', price:'RM89', normal:'RM178', poster:'assets/img/tv/43ur7500psc.jpg', desc:'4K, HDR10.' },
  { _idx:25, cat:'tv', model:'75UT9050PSA', name:'UT90 75"', price:'RM229', normal:'RM458', poster:'assets/img/tv/75ut9050psa.jpg', desc:'4K, 120Hz.' },

  // === AIRCOND (4) ===
  { _idx:26, cat:'aircond', model:'S3-Q09JAPPA', name:'Dual Inverter 1.0HP', price:'RM99', normal:'RM198', poster:'assets/img/aircond/s3-q09jappa.jpg', badge:'OHSEM 50%', desc:'1.0HP, Dual Inverter, WiFi.' },
  { _idx:27, cat:'aircond', model:'S3-Q12JAPPA', name:'Dual Inverter 1.5HP', price:'RM109', normal:'RM218', poster:'assets/img/aircond/s3-q12jappa.jpg', desc:'1.5HP, cepat sejuk.' },
  { _idx:28, cat:'aircond', model:'S3-Q18KLPPA', name:'Dual Inverter 2.0HP', price:'RM129', normal:'RM258', poster:'assets/img/aircond/s3-q18klppa.jpg', desc:'2.0HP, senyap.' },
  { _idx:29, cat:'aircond', model:'S3-Q24KLPPA', name:'Dual Inverter 2.5HP', price:'RM139', normal:'RM278', poster:'assets/img/aircond/s3-q24klppa.jpg', desc:'2.5HP, besar ruang.' },

  // === STYLER (2) ===
  { _idx:30, cat:'styler', model:'S3RF', name:'Styler Steam Clothing Care', price:'RM199', normal:'RM398', poster:'assets/img/styler/s3rf.jpg', desc:'Stim baju, hilang bau & kuman.' },
  { _idx:31, cat:'styler', model:'S3WF', name:'Styler WiFi', price:'RM219', normal:'RM438', poster:'assets/img/styler/s3wf.jpg', desc:'Kawal guna phone.' },

  // === DISHWASHER (2) ===
  { _idx:32, cat:'dishwasher', model:'DFC533FV', name:'QuadWash™ Steam 14 Pax', price:'RM139', normal:'RM278', poster:'assets/img/dishwasher/dfc533fv.jpg', badge:'OHSEM 50%', desc:'14 set pinggan, QuadWash™.' },
  { _idx:33, cat:'dishwasher', model:'DFB424FP', name:'TrueSteam 14 Pax', price:'RM129', normal:'RM258', poster:'assets/img/dishwasher/dfb424fp.jpg', desc:'Steam, bersih mendalam.' },

  // === VACUUM (3) ===
  { _idx:34, cat:'vacuum', model:'A9K-ULTRA', name:'CordZero A9 Kompressor', price:'RM129', normal:'RM258', poster:'assets/img/vacuum/a9k-ultra.jpg', desc:'Kompressor, 120 min.' },
  { _idx:35, cat:'vacuum', model:'A9N-LITE', name:'CordZero A9 Lite', price:'RM89', normal:'RM178', poster:'assets/img/vacuum/a9n-lite.jpg', desc:'Ringan, 60 min.' },
  { _idx:36, cat:'vacuum', model:'VS20R9046T3', name:'Jet 90', price:'RM149', normal:'RM298', poster:'assets/img/vacuum/vs20r9046t3.jpg', desc:'200AW, 5 tahap penapisan.' },

  // === DEHUMIDIFIER (3) ===
  { _idx:37, cat:'dehumidifier', model:'MD16GQSA1', name:'PuriCare 16L', price:'RM99', normal:'RM198', poster:'assets/img/dehumidifier/md16gqsa1.jpg', desc:'16L/hari, 30m².' },
  { _idx:38, cat:'dehumidifier', model:'MD19GQSA1', name:'PuriCare 19L', price:'RM109', normal:'RM218', poster:'assets/img/dehumidifier/md19gqsa1.jpg', desc:'19L/hari, 40m².' },
  { _idx:39, cat:'dehumidifier', model:'DD20GQSA1', name:'Dual Inverter 20L', price:'RM119', normal:'RM238', poster:'assets/img/dehumidifier/dd20gqsa1.jpg', desc:'20L/hari, jimat elektrik.' },

  // === BONUS: VYBE CREW PICKS (tambah chip) ===
  // GC-L257KQKR, S3-Q09JAPPA, DFC533FV — dah ada atas
];
