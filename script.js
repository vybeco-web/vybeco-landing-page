// js/script.js
// VYBE CO - LG SUBSCRIBE 2025 | FULL LOGIC | CLEAN STREET COLLECTION

// DOM Elements
const vybeMeter = document.querySelector('.meter-fill');
const vybeScore = document.getElementById('vybeScore');
const hustleToggle = document.querySelector('#hustleToggle button');
const hustleStatus = document.getElementById('hustleStatus');
const progressBar = document.querySelector('.progress-bar');
const progressText = document.getElementById('progressText');
const floatTop = document.getElementById('floatTop');
const floatLabel = document.getElementById('floatLabel');
const aiToggle = document.getElementById('aiToggle');
const aiPanel = document.getElementById('aiPanel');
const aiBody = document.getElementById('aiBody');
const aiInput = document.getElementById('aiInput');
const aiSend = document.getElementById('aiSend');
const modal = document.getElementById('modal');
const mTitle = document.getElementById('m-title');
const mPrice = document.getElementById('m-price');
const mTags = document.getElementById('m-tags');
const mDesc = document.getElementById('m-desc');
const mSpecs = document.getElementById('m-specs');
const mWa = document.getElementById('m-wa');

// WhatsApp Link
const WA_LINK = 'https://wa.link/fsc0hq';

// Initial State
let vybe = 0;
let isHustleOn = false;

// Render Card Function
function makeCard(p) {
  const msg = encodeURIComponent(`Hi Hasrin, saya berminat LG ${p.model} (${p.name}) — ${p.price}.`);
  const isStreetPick = window.STREET_PICKS.includes(p.model);
  const isCrewPick = window.CREW_PICKS.includes(p.model);
  return `
    <article class="card">
      ${p.badge ? `<div class="badge">${p.badge}</div>` : ''}
      ${isStreetPick ? '<div class="chip street-pick">STREET PICK</div>' : ''}
      ${isCrewPick ? '<div class="chip crew-pick">CREW PICK</div>' : ''}
      <div class="poster">
        <img src="${p.poster}" alt="LG ${p.model} ${p.name}">
      </div>
      <div class="body">
        <div class="cat-label">${window.ICONS[p.cat]} ${p.cat.replace('-', ' ').toUpperCase()}</div>
        <div class="model">${p.model} — ${p.name}</div>
        <div class="price">${p.price} ${p.normal ? `<small>(Normal: RM${p.normal})</small>` : ''}</div>
        <div class="card-cta">
          <a class="btn sm wa" target="_blank" rel="noopener" href="${WA_LINK}&text=${msg}">WhatsApp</a>
          <button class="btn sm" type="button" data-action="detail" data-idx="${p._idx}">Butiran</button>
          <button class="btn sm outline-soft" type="button" data-action="order" data-model="${p.model}">Order</button>
        </div>
      </div>
    </article>
  `;
}

// Render Sections
function renderSections() {
  const productSections = document.getElementById('productSections');
  productSections.innerHTML = window.CATEGORY_ORDER.map(([id, label]) => {
    const items = window.PRODUCTS.filter(p => p.cat === id);
    if (!items.length) return '';
    return `
      <section class="cat-section" id="cat-${id}">
        <div class="cat-heading" onclick="toggleCat('${id}')">
          <h2>${label}</h2>
          <small>${window.ICONS[id] || '•'} ${items.length} model tersedia <span style="font-size:10px;">▼</span></small>
        </div>
        <div class="grid ${id}" style="display:block;">
          ${items.map(makeCard).join('')}
        </div>
      </section>
    `;
  }).join('');
}

// Toggle Category
function toggleCat(id) {
  const grid = document.querySelector(`#cat-${id} .grid`);
  grid.style.display = grid.style.display === 'none' ? 'grid' : 'none';
}

// Modal Functions
let currentProduct = null;
function toggleModal(show) {
  modal.classList.toggle('open', !!show);
  if (show) modal.focus();
}
function showDetails(idx) {
  const p = window.PRODUCTS[idx];
  if (!p) return;
  currentProduct = p;
  mTitle.textContent = `${p.model} — ${p.name}`;
  mPrice.textContent = `${p.price} ${p.normal ? `(Normal: RM${p.normal})` : ''}`;
  mTags.innerHTML = `<span class="chip">${p.cat.replace('-', ' ').toUpperCase()}</span>`;
  mDesc.textContent = p.desc || 'Tiada keterangan.';
  mSpecs.innerHTML = (p.specs || []).map(s => `<li>${s}</li>`).join('') +
                     (p.benefits || []).map(b => `<li><b>✓</b> ${b}</li>`).join('');
  const msg = encodeURIComponent(`Hi Hasrin, saya nak detail untuk LG ${p.model} (${p.name}) — ${p.price}.`);
  mWa.href = `${WA_LINK}&text=${msg}`;
  toggleModal(true);
}
function prefillOrder(model) {
  document.getElementById('order_model').value = model || '';
  window.location.hash = '#order';
}
function prefillOrderFromModal() {
  if (currentProduct) prefillOrder(currentProduct.model);
}

// Events
document.getElementById('productSections').addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-action]');
  if (!btn) return;
  const action = btn.dataset.action;
  if (action === 'detail') showDetails(Number(btn.dataset.idx));
  else if (action === 'order') prefillOrder(btn.dataset.model);
});
modal.addEventListener('click', (e) => {
  if (e.target === modal) toggleModal(false);
});

// Forms
function submitOrder(e) {
  e.preventDefault();
  const f = e.target;
  const msg = encodeURIComponent(`ORDER LG Subscribe\nModel: ${f.model.value}\nNama: ${f.nama.value}\nPhone: ${f.phone.value}\nPhone2: ${f.phone2.value || '-'}\nAlamat: ${f.alamat.value}\nEmail: ${f.email.value || '-'}\nWarna: ${f.warna.value || '-'}\nMohon proses langganan.`);
  window.open(`${WA_LINK}&text=${msg}`, '_blank');
  f.reset();
}
function submitCrew(e) {
  e.preventDefault();
  const f = e.target;
  const msg = encodeURIComponent(`Hi Hasrin, nak sertai VYBE CREW.\nNama: ${f.nama.value}\nPhone: ${f.phone.value}\nPengalaman: ${f.pengalaman.value || '-'}\nSebab: ${f.sebab.value || '-'}`);
  window.open(`${WA_LINK}&text=${msg}`, '_blank');
  f.reset();
}

// VYBE METER
function updateVybe() {
  vybe = Math.min(100, vybe + 5);
  vybeMeter.style.setProperty('--vybe', `${vybe}%`);
  vybeScore.textContent = vybe;
  if (vybe >= 100) alert('VYBE MAX! Hubungi Hasrin untuk deal terbaik.');
}
document.querySelectorAll('.card-cta button').forEach(btn => {
  btn.addEventListener('click', updateVybe);
});

// HUSTLE MODE
hustleToggle.addEventListener('click', () => {
  isHustleOn = !isHustleOn;
  hustleToggle.textContent = `HUSTLE MODE ${isHustleOn ? 'ON' : 'OFF'}`;
  hustleToggle.classList.toggle('hustle-on', isHustleOn);
  hustleStatus.textContent = isHustleOn ? 'ON' : 'OFF';
  if (isHustleOn) vybe += 10;
  updateVybe();
});

// PROGRESS BAR & FLOAT TOP
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight;
  const winHeight = window.innerHeight;
  const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
  progressBar.style.width = `${scrollPercent}%`;
  progressText.textContent = scrollPercent > 50 ? 'Smart Home' : 'Clean Street';
  floatTop.classList.toggle('show', scrollPercent > 20);
  floatLabel.textContent = scrollPercent < 30 ? 'Semak promosi OHSEM 50%!' :
                          scrollPercent < 70 ? '💬 Perlukan bantuan? Klik WhatsApp.' :
                          '🚀 Sedia order? Tekan WhatsApp sekarang!';
});

// AYRA AI
aiToggle.addEventListener('click', () => aiPanel.classList.toggle('open'));
aiSend.addEventListener('click', handleAi);
aiInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') { e.preventDefault(); handleAi(); }
});
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
  for (const [id, label] of window.CATEGORY_ORDER) {
    if (kw.includes(id.split('-')[0]) || kw.includes(label.toLowerCase().split(' ')[0])) {
      cat = id;
      break;
    }
  }
  let picks = window.PRODUCTS.filter(p => !cat || p.cat === cat);
  if (budget) {
    picks = picks.filter(p => {
      const m = p.price.match(/(\d{2,4})/);
      return m ? (+m[1] <= budget) : true;
    });
  }
  if (!picks.length) {
    addAiMsg('Cuba taip contoh: <b>"fridge RM120"</b>.');
    aiInput.value = '';
    return;
  }
  const reply = picks.slice(0, 4).map(p => {
    const msg = encodeURIComponent(`Hi Hasrin, berminat LG ${p.model} (${p.name}) — ${p.price}.`);
    return `
      <div style="margin-top:6px;border-top:1px solid rgba(30,41,59,.9);padding-top:6px">
        <b>${p.model} — ${p.name}</b><br><small>${p.price}</small>
        <div style="margin-top:6px;display:flex;gap:6px">
          <button class="btn sm" type="button" onclick="prefillOrder('${p.model}')">Order</button>
          <button class="btn sm primary" type="button" onclick="showDetails(${p._idx})">Butiran</button>
          <a class="btn sm wa" target="_blank" href="${WA_LINK}&text=${msg}">WhatsApp</a>
        </div>
      </div>
    `;
  }).join('');
  addAiMsg('Model sesuai: ' + reply);
  aiInput.value = '';
}

// Initialize
renderSections();
window.addEventListener('load', () => {
  updateVybe();
  window.scrollTo(0, 0);
});
