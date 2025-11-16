// js/products-data.js
// VYBE CO - LG SUBSCRIBE 2025 | 42 PRODUK | CLEAN STREET COLLECTION

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

// STREET PICKS (HIJAU) — 7 MODEL
const STREET_PICKS = [
  'GC-L257KQKR', 'WU525BS', 'AS10GDBYO', 'FV1450S2W',
  'S3-Q09JAPPA', 'OLED65C3PSA', 'DFC533FV'
];

// VYBE CREW PICKS (KUNING) — 3 MODEL
const CREW_PICKS = [
  'GC-L257KQKR', 'S3-Q09JAPPA', 'DFC533FV'
];

// 42 PRODUK — FULL DATA
const PRODUCTS = [
  // === PETISEJUK (7) ===
  {cat:'refrigerator',model:'GC-L257KQKR',name:'641L Side-by-Side UVnano',poster:'assets/img/refrigerator/GC-L257KQKR.jpg',
   price:'RM220 / bulan', normal:'RM440', badge:'OHSEM 50%', desc:'Peti sejuk besar dengan dispenser UVnano — bersih & tahan lama.',
   specs:['Smart Inverter Compressor','LinearCooling+','UVnano Dispenser','Door-in-Door'], benefits:['Jimat 32% elektrik','Kurang bakteria']},
  {cat:'refrigerator',model:'GC-J257SQNW',name:'635L Side-by-Side',poster:'assets/img/refrigerator/GC-J257SQNW.jpg',
   price:'RM260 / bulan', normal:'RM520', badge:'OHSEM 50%', desc:'Side-by-side premium dengan Hygiene Fresh+.',
   specs:['UVnano Nozzle','Multi Air Flow','ThinQ AI'], benefits:['Bau segar','Kawal via app']},
  {cat:'refrigerator',model:'GN-F452PQAK',name:'491L Top Freezer',poster:'assets/img/refrigerator/GN-F452PQAK.jpg',
   price:'RM160 / bulan', desc:'Kompak untuk apartment kecil.'},
  {cat:'refrigerator',model:'GC-B24FFCPB',name:'665L Multi-Door',poster:'assets/img/refrigerator/GC-B24FFCPB.jpg',
   price:'RM130 / bulan', desc:'Multi-door untuk organisasi makanan.'},
  {cat:'refrigerator',model:'GV-K25FFGER',name:'612L White Glass',poster:'assets/img/refrigerator/GV-K25FFGER.jpg',
   price:'RM180 / bulan', desc:'Reka bentuk kaca moden.'},
  {cat:'refrigerator',model:'GC-G22FFQAB',name:'508L Multi-Door',poster:'assets/img/refrigerator/GC-G22FFQAB.jpg',
   price:'RM160 / bulan', desc:'Dengan dispenser & ThinQ.'},
  {cat:'refrigerator',model:'GR-B257KQKR',name:'657L InstaView',poster:'assets/img/refrigerator/GR-B257KQKR.jpg',
   price:'RM240 / bulan', normal:'RM480', badge:'OHSEM 50%', desc:'Ketuk 2x untuk lihat dalam.'},

  // === PENAPIS AIR (5) ===
  {cat:'water-purifier',model:'WU525BS',name:'Atom-U Hot/Cold',poster:'assets/img/water-purifier/WU525BS.jpg',
   price:'RM110 / bulan', normal:'RM220', badge:'OHSEM 50%', desc:'Tanpa tangki, suhu on-demand.'},
  {cat:'water-purifier',model:'WD518AN',name:'Atom-V Compact',poster:'assets/img/water-purifier/WD518AN.jpg',
   price:'RM70 / bulan', desc:'Kompak untuk dapur kecil.'},
  {cat:'water-purifier',model:'WS410GN',name:'S2 Slim Stand',poster:'assets/img/water-purifier/WS410GN.jpg',
   price:'RM110 / bulan', desc:'Slim stand dengan mineral boost.'},
  {cat:'water-purifier',model:'WS510SN',name:'S1 Slim 3 Suhu',poster:'assets/img/water-purifier/WS510SN.jpg',
   price:'RM130 / bulan', desc:'Hot/Ambient/Cold.'},
  {cat:'water-purifier',model:'WD210MN',name:'MX Series',poster:'assets/img/water-purifier/WD210MN.jpg',
   price:'RM60 / bulan', desc:'Kebersihan tinggi, auto clean.'},

  // === PENULEN UDARA (10) ===
  {cat:'air-purifier',model:'AS10GDBYO',name:'Alpha Pet Dual',poster:'assets/img/air-purifier/AS10GDBYO.jpg',
   price:'RM105 / bulan', normal:'RM210', badge:'OHSEM 50%', desc:'360° untuk haiwan peliharaan.'},
  {cat:'air-purifier',model:'AS60GHWGO',name:'360° Standard',poster:'assets/img/air-purifier/AS60GHWGO.jpg',
   price:'RM140 / bulan', desc:'True HEPA untuk bilik.'},
  {cat:'air-purifier',model:'AS20GPBK0',name:'AeroFurniture',poster:'assets/img/air-purifier/AS20GPBK0.jpg',
   price:'RM160 / bulan', desc:'Meja + purifier hybrid.'},
  {cat:'air-purifier',model:'AS65GDBYO',name:'Alpha Pet Single',poster:'assets/img/air-purifier/AS65GDBYO.jpg',
   price:'RM75 / bulan', desc:'Untuk pet owner.'},
  {cat:'air-purifier',model:'AS10GDWBO',name:'360° Dual Booster',poster:'assets/img/air-purifier/AS10GDWBO.jpg',
   price:'RM100 / bulan', desc:'Edaran cepat.'},
  {cat:'air-purifier',model:'AS55GG',name:'Aero Booster',poster:'assets/img/air-purifier/AS55GG.jpg',
   price:'RM65 / bulan', desc:'Senyap untuk tidur.'},
  {cat:'air-purifier',model:'AS35GGW10.AML',name:'Aero HIT',poster:'assets/img/air-purifier/AS35GGW10.AML.jpg',
   price:'RM45 / bulan', desc:'Untuk habuk halus.'},
  {cat:'air-purifier',model:'AS65GDWBO',name:'Single Booster',poster:'assets/img/air-purifier/AS65GDWBO.jpg',
   price:'RM70 / bulan', desc:'Untuk bilik kecil.'},
  {cat:'air-purifier',model:'AS20GP',name:'Aero Furniture',poster:'assets/img/air-purifier/AS20GP.jpg',
   price:'RM60 / bulan', desc:'Dekorasi + fungsi.'},
  {cat:'air-purifier',model:'AS60GH',name:'360° HIT',poster:'assets/img/air-purifier/AS60GH.jpg',
   price:'RM50 / bulan', desc:'Kurang virus.'},

  // === MESIN BASUH (8) ===
  {cat:'washer',model:'FV1450S2W',name:'10.5kg Front Load',poster:'assets/img/washer/FV1450S2W.jpg',
   price:'RM200 / bulan', normal:'RM400', badge:'OHSEM 50%', desc:'AI DD, TurboWash 360.'},
  {cat:'washer',model:'F2520SNEKR',name:'20kg Front Load',poster:'assets/img/washer/F2520SNEKR.jpg',
   price:'RM300 / bulan', desc:'Untuk comforter.'},
  {cat:'washer',model:'TV2517DV3B',name:'17kg Top Load',poster:'assets/img/washer/TV2517DV3B.jpg',
   price:'RM85 / bulan', desc:'Mudah guna.'},
  {cat:'washer',model:'TV2520SV9KR',name:'20kg Top Load',poster:'assets/img/washer/TV2520SV9KR.jpg',
   price:'RM100 / bulan', desc:'Untuk keluarga besar.'},
  {cat:'washer',model:'F2515RNTKAR',name:'15/8kg Washer Dryer',poster:'assets/img/washer/F2515RNTKAR.jpg',
   price:'RM140 / bulan', desc:'Gabung washer + dryer.'},
  {cat:'washer',model:'FV1209D4W',name:'9/5kg AI DD',poster:'assets/img/washer/FV1209D4W.jpg',
   price:'RM120 / bulan', desc:'Steam Refresh.'},
  {cat:'washer',model:'FV1450S2W',name:'10.5kg Standard',poster:'assets/img/washer/FV1450S2W.jpg',
   price:'RM90 / bulan', desc:'Allergy Care.'},
  {cat:'washer',model:'F2515RTM',name:'15kg Front Load',poster:'assets/img/washer/F2515RTM.jpg',
   price:'RM180 / bulan', desc:'Steam+.'},

  // === PENGERING (2) ===
  {cat:'dryer',model:'VD-H9066WSR',name:'9kg Heat Pump',poster:'assets/img/dryer/VD-H9066WSR.jpg',
   price:'RM220 / bulan', desc:'Lembut kain, jimat tenaga.'},
  {cat:'dryer',model:'VD-H9066WS',name:'9kg Standard',poster:'assets/img/dryer/VD-H9066WS.jpg',
   price:'RM100 / bulan', desc:'Auto Cleaning.'},

  // === TV (6) ===
  {cat:'tv',model:'OLED77B5PSA',name:'77" OLED 4K',poster:'assets/img/tv/OLED77B5PSA.jpg',
   price:'RM1120 / bulan', desc:'Home cinema OLED.'},
  {cat:'tv',model:'OLED65C3PSA',name:'65" OLED C3',poster:'assets/img/tv/OLED65C3PSA.jpg',
   price:'RM780 / bulan', normal:'RM1560', badge:'OHSEM 50%', desc:'Gaming & movie.'},
  {cat:'tv',model:'QNED75',name:'75" QNED 4K',poster:'assets/img/tv/QNED75.jpg',
   price:'RM400 / bulan', desc:'Untuk sukan.'},
  {cat:'tv',model:'Nano83',name:'65" NanoCell',poster:'assets/img/tv/Nano83.jpg',
   price:'RM220 / bulan', desc:'Mid-range.'},
  {cat:'tv',model:'75QNED91TSA',name:'75" MiniLED',poster:'assets/img/tv/75QNED91TSA.jpg',
   price:'RM230 / bulan', desc:'HDR superior.'},
  {cat:'tv',model:'65QNED87ASA',name:'65" QNED Evo',poster:'assets/img/tv/65QNED87ASA.jpg',
   price:'RM135 / bulan', desc:'AI Picture.'},

  // === PENGHAWA DINGIN (4) ===
  {cat:'aircond',model:'S3-Q09JAPPA',name:'1.0HP Dual Inverter',poster:'assets/img/aircond/S3-Q09JAPPA.jpg',
   price:'RM80 / bulan', normal:'RM160', badge:'OHSEM 50%', desc:'Untuk bilik tidur.'},
  {cat:'aircond',model:'S3-Q12JA3BA',name:'1.5HP Inverter',poster:'assets/img/aircond/S3-Q12JA3BA.jpg',
   price:'RM90 / bulan', desc:'Wi-Fi ThinQ.'},
  {cat:'aircond',model:'S3-Q24K2RPA',name:'2.5HP ArtCool',poster:'assets/img/aircond/S3-Q24K2RPA.jpg',
   price:'RM280 / bulan', desc:'Design premium.'},
  {cat:'aircond',model:'S3-Q12JARPA',name:'1.5HP ArtCool',poster:'assets/img/aircond/S3-Q12JARPA.jpg',
   price:'RM130 / bulan', desc:'Voice Control.'},

  // === LG STYLER (1) ===
  {cat:'styler',model:'S3WF',name:'TrueSteam Styler',poster:'assets/img/styler/S3WF.jpg',
   price:'RM180 / bulan', desc:'Stim pakaian, kurang dry clean.'},

  // === PENCUCI PINGGAN (2) ===
  {cat:'dishwasher',model:'DFC533FV',name:'QuadWash Prime',poster:'assets/img/dishwasher/DFC533FV.jpg',
   price:'RM130 / bulan', normal:'RM260', badge:'OHSEM 50%', desc:'Wi-Fi, auto open dry.'},
  {cat:'dishwasher',model:'DFC335HM',name:'QuadWash Matte',poster:'assets/img/dishwasher/DFC335HM.jpg',
   price:'RM150 / bulan', desc:'Dual Zone, EasyRack.'},

  // === PEMBERSIH VAKUM (3) ===
  {cat:'vacuum',model:'A9T-RMAX',name:'CordZero Tower',poster:'assets/img/vacuum/A9T-RMAX.jpg',
   price:'RM180 / bulan', desc:'Auto empty.'},
  {cat:'vacuum',model:'A9X-RSTEAM',name:'CordZero Steam Mop',poster:'assets/img/vacuum/A9X-RSTEAM.jpg',
   price:'RM260 / bulan', desc:'Vacuum + mop steam.'},
  {cat:'vacuum',model:'A9T-RMAX',name:'All-in-One',poster:'assets/img/vacuum/A9T-RMAX.jpg',
   price:'RM90 / bulan', desc:'90 min runtime.'},

  // === PENGHILANG LEMBAPAN (3) ===
  {cat:'dehumidifier',model:'DD16GMWEE',name:'16L Smart',poster:'assets/img/dehumidifier/DD16GMWEE.jpg',
   price:'RM140 / bulan', desc:'Laundry Mode.'},
  {cat:'dehumidifier',model:'DD16GME1',name:'16L Standard',poster:'assets/img/dehumidifier/DD16GME1.jpg',
   price:'RM220 / bulan', desc:'Continuous drain.'},
  {cat:'dehumidifier',model:'DD16GM',name:'16L Inverter',poster:'assets/img/dehumidifier/DD16GM.jpg',
   price:'RM70 / bulan', desc:'Jimat 40% tenaga.'}
];

// Tambah index untuk modal
PRODUCTS.forEach((p, i) => p._idx = i);

// Export untuk script.js
window.PRODUCTS = PRODUCTS;
window.CATEGORY_ORDER = CATEGORY_ORDER;
window.ICONS = ICONS;
window.STREET_PICKS = STREET_PICKS;
window.CREW_PICKS = CREW_PICKS;
