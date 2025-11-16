// js/script.js
const WA_LINK = 'https://wa.link/fsc0hq';
const productSections = document.getElementById('productSections');

// RENDER CARD
function makeCard(p) {
  const isStreet = STREET_PICKS.includes(p.model);
  const isCrew = CREW_PICKS.includes(p.model);
  const msg = encodeURIComponent(`Hi Hasrin, saya berminat LG ${p.model} (${p.name}) — ${p.price}/bln. Mohon semak OHSEM 50%.`);
  return `
    <article class="card">
      ${p.badge ? `<div class="badge">${p.badge}</div>` : ''}
      ${isStreet ? `<div class="chip street-pick">STREET PICK</div>` : ''}
      ${isCrew ? `<div class="chip crew-pick">VYBE CREW PICK</div>` : ''}
      <div class="poster"><img src="${p.poster}" alt="${p.model}"></div>
      <div class="body">
        <div class="cat-label">${ICONS[p.cat]} ${p.cat.replace('-',' ').toUpperCase()}</div>
        <div class="model">${p.model} — ${p.name}</div>
        <div class="price">${p.price}/bln${p.normal ? `<small>Normal: ${p.normal}/bln • OHSEM 50% 9 bulan*</small>` : ''}</div>
        <div class="card-cta">
          <a class="btn sm wa" target="_blank" href="${WA_LINK}?text=${msg}">WhatsApp</a>
          <button class="btn sm" data-action="detail" data-idx="${p._idx}">Butiran</button>
          <button class="btn sm outline-soft" data-action="order" data-model="${p.model}">Order</button>
        </div>
      </div>
    </article>
  `;
}

// RENDER ALL
function renderSections() {
  productSections.innerHTML = CATEGORY_ORDER.map(([id, label]) => {
    const items = PRODUCTS.filter(p => p.cat === id);
    if (!items.length) return '';
    return `
      <section class="cat-section" id="cat-${id}">
        <div class="cat-heading"><h2>${label}</h2><small>${ICONS[id]} ${items.length} model</small></div>
        <div class="grid">${items.map(makeCard).join('')}</div>
        <div class="cat-up-btn"><button class="btn sm" onclick="scrollToCat('${id}')">↑ ${label}</button></div>
      </section>
    `;
  }).join('');
}
renderSections();

// SCROLL TO CAT
function scrollToCat(id) {
  const el = document.getElementById(`cat-${id}`);
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  if (el) { el.style.background = 'rgba(56,189,248,.08)'; setTimeout(() => el.style.background = '', 800); }
}

// VYBE METER
let vybeScore = 0;
const vybeActions = { detail: 5, order: 10, wa: 15, crew: 20 };
function addVybe(type) {
  vybeScore = Math.min(100, vybeScore + (vybeActions[type] || 0));
  document.querySelector('.meter-fill').style.width = vybeScore + '%';
  document.getElementById('vybeScore').textContent = vybeScore;
  if (vybeScore >= 100) addAiMsg('🔥 <b>VYBE 100%!</b> Sertai VYBE CREW sekarang!');
}

// HUSTLE MODE
let hustleMode = false;
function toggleHustle() {
  hustleMode = !hustleMode;
  const btn = document.querySelector('#hustleToggle button');
  const status = document.getElementById('hustleStatus');
  btn.classList.toggle('hustle-on', hustleMode);
  status.textContent = hustleMode ? 'ON' : 'OFF';
  addAiMsg(hustleMode ? '💪 HUSTLE MODE ON. Tanya apa-apa — aku jawab direct.' : '😎 Hustle OFF.');
}

// STREET PROGRESS
window.addEventListener('scroll', () => {
  const scroll = (document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
  document.querySelector('.progress-bar').style.width = scroll + '%';
  const labels = ['Clean Street','Clean Air','Clean Water','Clean Clothes','Clean Suite'];
  document.getElementById('progressText').textContent = labels[Math.min(Math.floor(scroll / 25), 4)];
  document.getElementById('floatTop').style.display = scroll > 50 ? 'block' : 'none';
});

// FLOAT LABEL
const floatLabel = document.getElementById('floatLabel');
window.addEventListener('scroll', () => {
  const y = window.scrollY, h = document.body.scrollHeight, b = y + window.innerHeight;
  if (y < 300) floatLabel.innerHTML = 'Street to Suite: Pilih LG Subscribe';
  else if (b < h - 250) floatLabel.innerHTML = '💬 Perlukan bantuan? <b>Klik WhatsApp</b>';
  else floatLabel.innerHTML = '🚀 Sedia langgan? <b>Bayar bulan depan</b>';
});

// EVENT DELEGATION
document.addEventListener('click', e => {
  const btn = e.target.closest('button, a');
  if (!btn) return;
  if (btn.dataset.action) addVybe(btn.dataset.action);
  else if (btn.href?.includes('whatsapp')) addVybe('wa');
  else if (btn.href?.includes('#join')) addVybe('crew');
});

// MODAL, AYRA, FORMS — (sama seperti sebelumnya, tapi lebih clean)
