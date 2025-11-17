/* PRODUCTS DATA — CLEAN STREET COLLECTION 2025 (UPDATED) */

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
  ['refrigerator','Petisejuk'],
  ['water-purifier','Penapis Air'],
  ['air-purifier','Penulen Udara'],
  ['washer','Mesin Basuh'],
  ['dryer','Pengering'],
  ['tv','TV'],
  ['aircond','Penghawa Dingin'],
  ['styler','LG Styler'],
  ['dishwasher','Pencuci Pinggan'],
  ['vacuum','Pembersih Vakum'],
  ['dehumidifier','Penghilang Lembapan']
];

const STREET_PICKS = [
  'GC-L257KQKR','WU525BS','AS10GDBYO','FV1450S2W',
  'S3-Q09JAPPA','OLED65C3PSA','DFC533FV'
];

const CREW_PICKS = [
  'GC-L257KQKR','S3-Q09JAPPA','DFC533FV'
];

const PRODUCTS = [
  /* --- FRIDGE --- */
  {cat:'refrigerator',model:'GC-L257KQKR',name:'641L Side-by-Side UVnano',
   poster:'assets/img/refrigerator/GC-L257KQKR.jpg',price:'RM220 / bulan',normal:'RM440',
   badge:'OHSEM 50%',desc:'UVnano dispenser, kapasiti besar.',
   specs:['UVnano','LinearCooling+','Instaview'],benefits:['Jimatan elektrik']},

  {cat:'refrigerator',model:'GR-L257KQKR',name:'657L InstaView (Revised)',
   poster:'assets/img/refrigerator/GR-L257KQKR.jpg',price:'RM240 / bulan',normal:'RM480',
   badge:'OHSEM 50%',desc:'Revisi model untuk tahun 2025.'},

  {cat:'refrigerator',model:'PTOX24FFC7R',name:'Top Freezer Pro Pro MAX',
   poster:'assets/img/refrigerator/PTOX24FFC7R.jpg',price:'RM150 / bulan',
   desc:'Model baru dengan FreshZone+'},

  /* --- WATER PURIFIER --- */
  {cat:'water-purifier',model:'WU525BS',name:'Atom-U Hot/Cold',
   poster:'assets/img/water-purifier/WU525BS.jpg',price:'RM110 / bulan',normal:'RM220',
   badge:'OHSEM 50%',desc:'Tankless Hot/Cold'},

  {cat:'water-purifier',model:'WD516AN',name:'Atom-V Neo (New)',
   poster:'assets/img/water-purifier/WD516AN.jpg',price:'RM90 / bulan',
   desc:'Model baharu slim compact'},

  /* --- AIR PURIFIER --- */
  {cat:'air-purifier',model:'AS10GDBYO',name:'Alpha Pet Dual',
   poster:'assets/img/air-purifier/AS10GDBYO.jpg',price:'RM105 / bulan',normal:'RM210',
   badge:'OHSEM 50%'},

  /* remove AS20GP — done */

  /* --- WASHER --- */
  {cat:'washer',model:'FV1450S2W',name:'10.5kg AI DD',
   poster:'assets/img/washer/FV1450S2W.jpg',price:'RM200 / bulan'},

  /* remove F2515RTM — done */

  /* --- DRYER --- */
  {cat:'dryer',model:'VD-H9066WS',name:'9kg Standard',
   poster:'assets/img/dryer/VD-H9066WS.jpg',price:'RM100 / bulan'},

  /* remove VD-H9066WSR */

  /* --- TV --- */
  {cat:'tv',model:'OLED65C3PSA',name:'65" OLED C3',
   poster:'assets/img/tv/OLED65C3PSA.jpg',price:'RM780 / bulan',normal:'RM1560',
   badge:'OHSEM 50%'},

  {cat:'tv',model:'S90TY',name:'Soundbar Dolby Atmos 620W',
   poster:'assets/img/tv/S90TY.jpg',price:'RM110 / bulan',
   desc:'Soundbar premium 2025'},

  /* --- AIRCOND --- */
  /* ArtCool */
  {cat:'aircond',model:'S3-Q12JARPA',name:'1.5HP ArtCool Dual Inverter',
   poster:'assets/img/aircond/S3-Q12JARPA.jpg',price:'RM130 / bulan'},

  {cat:'aircond',model:'S3-Q24K2RPA',name:'2.5HP ArtCool Dual Inverter',
   poster:'assets/img/aircond/S3-Q24K2RPA.jpg',price:'RM280 / bulan'},

  /* Dualcool 2025 */
  {cat:'aircond',model:'S3-Q09JAPPA',name:'1.0HP Dualcool',
   poster:'assets/img/aircond/S3-Q09JAPPA.jpg',price:'RM80 / bulan'},

  {cat:'aircond',model:'S3-Q12JAPPA',name:'1.5HP Dualcool',
   poster:'assets/img/aircond/S3-Q12JAPPA.jpg',price:'RM90 / bulan'},

  {cat:'aircond',model:'S3-Q18KLPPA',name:'2.0HP Dualcool',
   poster:'assets/img/aircond/S3-Q18KLPPA.jpg',price:'RM180 / bulan'},

  {cat:'aircond',model:'S3-Q24K2PPA',name:'2.5HP Dualcool',
   poster:'assets/img/aircond/S3-Q24K2PPA.jpg',price:'RM230 / bulan'},

  /* --- DISHWASHER --- */
  {cat:'dishwasher',model:'DFC533FV',name:'QuadWash Prime',
   poster:'assets/img/dishwasher/DFC533FV.jpg',price:'RM130 / bulan',normal:'RM260',
   badge:'OHSEM 50%'},

  /* --- VACUUM --- */
  {cat:'vacuum',model:'A9T-RMAX',name:'CordZero Tower',
   poster:'assets/img/vacuum/A9T-RMAX.jpg',price:'RM180 / bulan'},

  /* --- DEHUMIDIFIER (ONLY 1 LEFT) --- */
  {cat:'dehumidifier',model:'DD16GM',name:'16L Inverter',
   poster:'assets/img/dehumidifier/DD16GM.jpg',price:'RM70 / bulan'}
];

/* Indexes */
PRODUCTS.forEach((p,i)=>p._idx=i);

window.PRODUCTS=PRODUCTS;
window.CATEGORY_ORDER=CATEGORY_ORDER;
window.ICONS=ICONS;
window.STREET_PICKS=STREET_PICKS;
window.CREW_PICKS=CREW_PICKS;
