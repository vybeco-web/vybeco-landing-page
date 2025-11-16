// js/script.js
// VYBE CO - LG SUBSCRIBE 2025 | FULL LOGIC
// Street to Suite. Hustle with VYBES.

const WA_LINK = 'https://wa.link/fsc0hq';
const productSections = document.getElementById('productSections');

// === STREET & CREW PICKS ===
const STREET_PICKS = ['GC-L257KQKR','WU525BS','AS10GDBYO','FV1450S2W','S3-Q09JAPPA','OLED65C3PSA','DFC533FV'];
const CREW_PICKS = ['GC-L257KQKR','S3-Q09JAPPA','DFC533FV'];

// === VYBE METER SYSTEM ===
let vybeScore = 0;
const vybeActions = { detail: 5, order: 10, wa: 15, crew: 20 };
function addVybe(type) {
  vybeScore = Math.min(100, vybeScore + (vybeActions[type] || 0));
  document.querySelector('.meter-fill')?.style.setProperty('--vybe', vybeScore + '%');
  document.getElementById('vybeScore')?.textContent = vybeScore;
  if (vybeScore >= 100) addAiMsg('VYBE 100%! Sertai VYBE CREW sekarang!', false);
}

// === HUSTLE MODE ===
let hustleMode = false;
function toggleHustle() {
  hustleMode = !hustleMode;
  const btn = document.querySelector('#hustleToggle button');
  const status = document.getElementById('hustleStatus');
  if (btn) btn.classList.toggle('hustle-on', hustleMode);
  if (status) status.textContent = hustleMode ? 'ON' : 'OFF';
  addAiMsg(hustleMode ? 'HUSTLE MODE ON. Tanya apa-apa — aku jawab direct.' : 'Hustle OFF.', false);
}

// === RENDER CARD ===
function makeCard(p) {
  const isStreet = STREET_PICKS.includes(p.model);
  const isCrew = CREW_PICKS.includes(p.model);
  const msg = encodeURIComponent(`Hi Hasrin, saya berminat LG ${p.model} (${p.name}) — ${p.price}. Mohon semak promosi OHSEM 50%.`);
  return `
    <article class="card">
      ${p.badge ? `<div class="badge">${p.badge}</div>` : ''}
      ${isStreet ? `<div class="chip street-pick">STREET PICK</div>` : ''}
      ${isCrew ? `<div class="chip crew-pick">VYBE CREW PICK</div>` : ''}
      <div class="poster"><img src="${p.poster}" alt="${p.model}" loading="lazy"></div>
      <div class="body">
        <div class="cat-label">${ICONS[p.cat] || '•'} ${p.cat.replace('-',' ').toUpperCase()}</div>
        <div class="model">${p.model} — ${p.name}</div>
        <div class="price">
          ${p.price}
          ${p.normal ? `<small>Normal: ${p.normal} • OHSEM 50% 9 bulan*</small>` : ''}
        </div>
        <div class="card-cta">
          <a class="btn sm wa" target="_blank" rel="noopener" href="${WA_LINK}?text=${msg}">WhatsApp</a>
          <button class="btn sm" type="button" data-action="detail" data-idx="${p._idx}">Butiran</button>
          <button class="btn sm outline-soft" type="button" data-action="order" data-model="${p.model}">Order</button>
        </div>
      </div>
    </article>
  `;
}

// === RENDER ALL SECTIONS ===
function renderSections() {
  if (!productSections) return;
  productSections.innerHTML = CATEGORY_ORDER.map(([id, label]) => {
    const items = PRODUCTS.filter(p => p.cat === id);
    if (!items.length) return '';
    return `
      <section class="cat-section" id="cat-${id}">
        <div class="cat-heading">
          <h2>${label}</h2>
          <small>${ICONS[id] || '•'} ${items.length} model tersedia</small>
        </div>
        <div class="grid">${items.map(makeCard).join('')}</div>
        <div class="cat-up-btn">
          <button class="btn sm" onclick="scrollToCat('${id}')">↑ ${label}</button>
        </div>
      </section>
    `;
  }).join('');
}
renderSections();

// === SCROLL TO CATEGORY ===
function scrollToCat(id) {
  const el = document.getElementById(`cat-${id}`);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  el.style.background = 'rgba(56,189,248,.08)';
  setTimeout(() => el.style.background = '', 800);
}

// === STREET PROGRESS BAR ===
window.addEventListener('scroll', () => {
  const scroll = (document.body.scrollTop || document.documentElement.scrollTop) / 
                 (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
  document.querySelector('.progress-bar')?.style.setProperty('--progress', scroll + '%');
  
  const labels = ['Clean Street','Clean Air','Clean Water','Clean Clothes','Clean Suite'];
  const progressText = document.getElementById('progressText');
  if (progressText) progressText.textContent = labels[Math.min(Math.floor(scroll / 25), 4)];
  
  const floatTop = document.getElementById('floatTop');
  if (floatTop) floatTop.style.display = scroll > 50 ? 'block' : 'none';
});

// === FLOAT LABEL DYNAMIC TEXT ===
const floatLabel = document.getElementById('floatLabel');
window.addEventListener('scroll', () => {
  const y = window.scrollY, h = document.body.scrollHeight, b = y + window.innerHeight;
  if (y < 300) floatLabel.innerHTML = 'Semak promosi OHSEM 50% untuk model yang anda minat.';
  else if (b < h - 250) floatLabel.innerHTML = 'Perlukan bantuan? <b>Klik WhatsApp</b>';
  else floatLabel.innerHTML = 'Sedia langgan? <b>Bayar bulan depan</b>';
});

// === MODAL DETAIL ===
const modal = document.getElementById('modal');
const mTitle = document.getElementById('m-title');
const mPrice = document.getElementById('m-price');
const mTags = document.getElementById('m-tags');
const mDesc = document.getElementById('m-desc');
const mSpecs = document.getElementById('m-specs');
const mWa = document.getElementById('m-wa');
let currentProduct = null;

function toggleModal(show) {
  modal.classList.toggle('open', !!show);
  if (!show) currentProduct = null;
}

function showDetails(idx) {
  const p = PRODUCTS[idx];
  if (!p) return;
  currentProduct = p;
  mTitle.textContent = `${p.model} — ${p.name}`;
  mPrice.innerHTML = `${p.price}${p.normal ? ` <span style="font-weight:400;color:var(--muted)">(Normal ${p.normal}, OHSEM 50% untuk 9 bulan pertama*)</span>` : ''}`;
  mTags.innerHTML = `<span class="chip">${p.cat.replace('-', ' ').toUpperCase()}</span>` + (p.badge ? ` <span class="chip">${p.badge}</span>` : '');
  mDesc.textContent = p.desc || '';
  mSpecs.innerHTML = ''
    + (p.specs || []).map(s => `<li>${s}</li>`).join('')
    + (p.benefits || []).map(b => `<li><b>✓</b> ${b}</li>`).join('');
  
  const msg = encodeURIComponent(`Hi Hasrin, saya nak detail & semak kelayakan untuk LG ${p.model} (${p.name}) — ${p.price}.`);
  mWa.href = `${WA_LINK}?text=${msg}`;
  toggleModal(true);
  addVybe('detail');
}

function prefillOrder(model) {
  const input = document.getElementById('order_model');
  if (input) input.value = model || '';
  window.location.hash = '#order';
  addVybe('order');
}

function prefillOrderFromModal() {
  if (currentProduct) prefillOrder(currentProduct.model);
  toggleModal(false);
}

// === EVENT DELEGATION ===
document.addEventListener('click', e => {
  const btn = e.target.closest('button[data-action], a[href*="whatsapp"], a[href*="#join"]');
  if (!btn) return;

  // Card actions
  if (btn.dataset.action === 'detail') {
    showDetails(Number(btn.dataset.idx));
  } else if (btn.dataset.action === 'order') {
    prefillOrder(btn.dataset.model);
  } else if (btn.href?.includes('whatsapp')) {
    addVybe('wa');
  } else if (btn.href?.includes('#join')) {
    addVybe('crew');
  }
});

// === FORM SUBMISSION ===
function submitOrder(e) {
  e.preventDefault();
  const f = e.target;
  const msg = encodeURIComponent(
`ORDER LG Subscribe
Model: ${f.model.value}
1 Nama (IC): ${f.nama.value}
2 Phone: ${f.phone.value}
3 Phone lain: ${f.phone2.value || '-'}
4 Alamat: ${f.alamat.value}
5 Email: ${f.email.value}
6 Warna: ${f.warna.value || '-'}
Mohon semak kelayakan promosi OHSEM 50% & proses seterusnya.`
  );
  window.open(`${WA_LINK}?text=${msg}`, '_blank');
  f.reset();
  addVybe('wa');
}

function submitCrew(e) {
  e.preventDefault();
  const f = e.target;
  const msg = encodeURIComponent(
`Hi Hasrin, saya nak sertai VYBE CREW (LG Subscribe Unit).
Nama: ${f.nama.value}
Phone: ${f.phone.value}
Pengalaman: ${f.pengalaman.value || '-'}
Sebab: ${f.sebab.value || '-'}
Mohon info seterusnya.`
  );
  window.open(`${WA_LINK}?text=${msg}`, '_blank');
  f.reset();
  addVybe('crew');
}

// === AYRA AI CONCIERGE ===
const aiToggle = document.getElementById('aiToggle');
const aiPanel = document.getElementById('aiPanel');
const aiBody = document.getElementById('aiBody');
const aiInput = document.getElementById('aiInput');
const aiSend = document.getElementById('aiSend');

aiToggle?.addEventListener('click', () => aiPanel.classList.toggle('open'));
aiSend?.addEventListener('click', handleAi);
aiInput?.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); handleAi(); }});

function addAiMsg(html, me = false) {
  const div = document.createElement('div');
  div.className = 'ai-msg' + (me ? ' me' : '');
  div.innerHTML = html;
  aiBody.appendChild(div);
  aiBody.scrollTop = aiBody.scrollHeight;
}

function handleAi() {
  const q = aiInput.value.trim();
  if (!q) return;
  addAiMsg(q, true);
  
  const num = q.match(/(\d{2,4})/);
  const budget = num ? +num[1] : null;
  const kw = q.toLowerCase();
  let cat = null;
  
  for (const [id, label] of CATEGORY_ORDER) {
    if (kw.includes(id.split('-')[0]) || kw.includes(label.toLowerCase().split(' ')[0])) {
      cat = id; break;
    }
  }
  
  let picks = PRODUCTS.filter(p => !cat || p.cat === cat);
  if (budget) {
    picks = picks.filter(p => {
      const m = p.price.match(/(\d{2,4})/);
      return m ? (+m[1] <= budget) : true;
    });
  }
  
  if (!picks.length) {
    addAiMsg('Saya tak jumpa model dalam kategori/bajet tu 😅 Cuba taip contoh: <b>"fridge RM120"</b> atau <b>"dishwasher RM70"</b>.');
    aiInput.value = ''; return;
  }
  
  const reply = picks.slice(0, 4).map(p => {
    const msg = encodeURIComponent(`Hi Hasrin, saya berminat LG ${p.model} (${p.name}) — ${p.price}. Mohon semak promosi OHSEM 50%.`);
    return `
      <div style="margin-top:6px;border-top:1px solid rgba(30,41,59,.9);padding-top:6px">
        <b>${p.model} — ${p.name}</b><br>
        <small>${p.price}</small><br>
        <div style="margin-top:6px;display:flex;gap:6px;flex-wrap:wrap">
          <button class="btn sm" type="button" onclick="prefillOrder('${p.model}')">Order</button>
          <button class="btn sm primary" type="button" onclick="showDetails(${p._idx})">Butiran</button>
          <a class="btn sm wa" target="_blank" rel="noopener" href="${WA_LINK}?text=${msg}">WhatsApp</a>
        </div>
      </div>
    `;
  }).join('');
  
  addAiMsg('Berikut beberapa model yang sesuai: ' + reply);
  aiInput.value = '';
}

// === CLOSE MODAL ON OUTSIDE CLICK ===
modal?.addEventListener('click', e => {
  if (e.target === modal) toggleModal(false);
});

// === INIT VYBE METER (if exists in HTML) ===
document.addEventListener('DOMContentLoaded', () => {
  const meter = document.querySelector('.meter-fill');
  if (meter) meter.style.setProperty('--vybe', '0%');
});
