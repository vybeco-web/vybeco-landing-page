// script.js
// VYBECO x LG SUBSCRIBE — LOGIC PAGE

(function () {
  const WA_LINK = 'https://api.whatsapp.com/send?phone=60194124033';

  document.addEventListener('DOMContentLoaded', () => {
    const CATEGORY_ORDER = window.CATEGORY_ORDER || [];
    const ICONS = window.ICONS || {};
    const PRODUCTS = window.PRODUCTS || [];

    // DOM refs
    const productSections = document.getElementById('productSections');
    const productTableBody = document.querySelector('#productTable tbody');
    const modal = document.getElementById('modal');
    const mTitle = document.getElementById('m-title');
    const mPrice = document.getElementById('m-price');
    const mTags = document.getElementById('m-tags');
    const mDesc = document.getElementById('m-desc');
    const mSpecs = document.getElementById('m-specs');
    const mWa = document.getElementById('m-wa');
    const modalClose = document.getElementById('modalClose');
    const modalOrderBtn = document.getElementById('modalOrderBtn');
    const floatLabel = document.getElementById('floatLabel');
    const floatWaLink = document.getElementById('floatWaLink');
    const orderForm = document.getElementById('orderForm');
    const crewForm = document.getElementById('crewForm');

    const aiToggle = document.getElementById('aiToggle');
    const aiPanel = document.getElementById('aiPanel');
    const aiBody = document.getElementById('aiBody');
    const aiInput = document.getElementById('aiInput');
    const aiSend = document.getElementById('aiSend');

    // Set float WA link base
    floatWaLink.href = `${WA_LINK}&text=${encodeURIComponent('Hi Hasrin, saya nak semak LG Subscribe.')}`;

    let currentProduct = null;

    // ---------- RENDER CARD ----------
    function makeCard(p) {
      const msg = encodeURIComponent(`Hi Hasrin, saya berminat LG ${p.model} (${p.name}) — ${p.price}.`);
      return `
        <article class="card">
          <div class="poster">
            <picture>
              <source srcset="${p.poster} 1x" media="(min-width: 768px)">
              <img src="${p.poster}" alt="LG ${p.model} ${p.name}">
            </picture>
          </div>
          <div class="body">
            <div class="cat-label">${ICONS[p.cat] || '✨'} ${p.cat.replace('-', ' ').toUpperCase()}</div>
            <div class="model">${p.model} — ${p.name}</div>
            <div class="price">${p.price} <small>Langganan bulanan</small></div>
            <div class="card-cta">
              <a class="btn sm wa" target="_blank" rel="noopener" href="${WA_LINK}&text=${msg}">WhatsApp</a>
              <button class="btn sm" type="button" data-action="detail" data-idx="${p._idx}">Butiran</button>
              <button class="btn sm outline-soft" type="button" data-action="order" data-model="${p.model}">Order</button>
            </div>
          </div>
        </article>
      `;
    }

    // ---------- RENDER SECTIONS ----------
    function renderSections() {
      productSections.innerHTML = CATEGORY_ORDER.map(([id, label]) => {
        const items = PRODUCTS.filter((p) => p.cat === id);
        if (!items.length) return '';
        return `
          <section class="cat-section" id="cat-${id}">
            <div class="cat-heading" onclick="window.toggleCat('${id}')">
              <h2>${label}</h2>
              <small>${ICONS[id] || '•'} ${items.length} model tersedia <span style="font-size:10px;">▼</span></small>
            </div>
            <div class="grid ${id}" style="display:block;">
              ${items.map(makeCard).join('')}
            </div>
          </section>
        `;
      }).join('');
    }

    // ---------- RENDER TABLE ----------
    function renderProductTable() {
      if (!productTableBody) return;
      productTableBody.innerHTML = CATEGORY_ORDER.map(([id, label]) => {
        const items = PRODUCTS.filter((p) => p.cat === id);
        if (!items.length) return '';
        const sample = items[0];
        return `
          <tr>
            <td class="cat-pill">${ICONS[id] || '•'} ${label}</td>
            <td>${sample.model} — ${sample.name}</td>
            <td>${items.length}</td>
            <td><button class="btn sm go-link" type="button" data-jump="${id}">Lihat</button></td>
          </tr>
        `;
      }).join('');
    }

    // ---------- TOGGLE CATEGORY ----------
    function toggleCat(id) {
      const grid = document.querySelector(`#cat-${id} .grid`);
      if (!grid) return;
      grid.classList.toggle('hidden');
    }
    window.toggleCat = toggleCat; // untuk onclick dari HTML

    // ---------- MODAL ----------
    function toggleModal(show) {
      modal.classList.toggle('open', !!show);
      if (show) modal.focus();
    }

    function showDetails(idx) {
      const p = PRODUCTS[idx];
      if (!p) return;
      currentProduct = p;

      mTitle.textContent = `${p.model} — ${p.name}`;
      mPrice.textContent = `${p.price}`;
      mTags.innerHTML = `<span class="chip">${p.cat.replace('-', ' ').toUpperCase()}</span>`;
      mDesc.textContent = p.desc || '';
      mSpecs.innerHTML =
        (p.specs || []).map((s) => `<li>${s}</li>`).join('') +
        (p.benefits || []).map((b) => `<li><b>✓</b> ${b}</li>`).join('');

      const msg = encodeURIComponent(
        `Hi Hasrin, saya nak detail untuk LG ${p.model} (${p.name}) — ${p.price}.`
      );
      mWa.href = `${WA_LINK}&text=${msg}`;

      toggleModal(true);
    }
    window.showDetails = showDetails;

    function prefillOrder(model) {
      const input = document.getElementById('order_model');
      if (input) input.value = model || '';
      window.location.hash = '#order';
    }
    window.prefillOrder = prefillOrder;

    function prefillOrderFromModal() {
      if (currentProduct) prefillOrder(currentProduct.model);
    }
    window.prefillOrderFromModal = prefillOrderFromModal;

    // ---------- EVENTS ----------
    // Klik pada card buttons
    productSections.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-action]');
      if (!btn) return;
      const action = btn.dataset.action;
      if (action === 'detail') {
        showDetails(Number(btn.dataset.idx));
      } else if (action === 'order') {
        prefillOrder(btn.dataset.model);
      }
    });

    // Modal close / click background
    modal.addEventListener('click', (e) => {
      if (e.target === modal) toggleModal(false);
    });
    modalClose.addEventListener('click', () => toggleModal(false));
    modalOrderBtn.addEventListener('click', (e) => {
      // link hash #order akan urus scroll, sini cuma isi model
      e.preventDefault();
      prefillOrderFromModal();
      window.location.hash = '#order';
      toggleModal(false);
    });

    // Table jump
    if (productTableBody) {
      productTableBody.addEventListener('click', (e) => {
        const btn = e.target.closest('button[data-jump]');
        if (!btn) return;
        const id = btn.dataset.jump;
        const section = document.getElementById(`cat-${id}`);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }

    // ---------- FORMS ----------
    function submitOrder(e) {
      e.preventDefault();
      const f = e.target;
      const msg = encodeURIComponent(
        `ORDER LG Subscribe\nModel: ${f.model.value}\nNama: ${f.nama.value}\nPhone: ${f.phone.value}\nPhone2: ${f.phone2.value || '-'}\nAlamat: ${f.alamat.value}\nEmail: ${f.email.value}\nWarna: ${f.warna.value || '-'}\nMohon proses langganan.`
      );
      window.open(`${WA_LINK}&text=${msg}`, '_blank');
      f.reset();
    }

    function submitCrew(e) {
      e.preventDefault();
      const f = e.target;
      const msg = encodeURIComponent(
        `Hi Hasrin, nak sertai VYBE CREW.\nNama: ${f.nama.value}\nPhone: ${f.phone.value}\nPengalaman: ${f.pengalaman.value || '-'}\nSebab: ${f.sebab.value || '-'}`
      );
      window.open(`${WA_LINK}&text=${msg}`, '_blank');
      f.reset();
    }

    if (orderForm) orderForm.addEventListener('submit', submitOrder);
    if (crewForm) crewForm.addEventListener('submit', submitCrew);

    // ---------- FLOAT LABEL ----------
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      const h = document.body.scrollHeight;
      const b = y + window.innerHeight;

      if (y < 300) {
        floatLabel.textContent = '🔍 Semak model LG Subscribe yang anda minat.';
      } else if (b < h - 250) {
        floatLabel.textContent = '💬 Perlukan bantuan pilih model? Klik WhatsApp.';
      } else {
        floatLabel.textContent = '🚀 Sedia untuk langgan? Tekan WhatsApp sekarang.';
      }
    });

    // ---------- AYRA ----------
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
        if (
          kw.includes(id.split('-')[0]) ||
          kw.includes(label.toLowerCase().split(' ')[0])
        ) {
          cat = id;
          break;
        }
      }

      let picks = PRODUCTS.filter((p) => !cat || p.cat === cat);

      if (budget) {
        picks = picks.filter((p) => {
          const m = p.price.match(/(\d{2,4})/);
          return m ? +m[1] <= budget : true;
        });
      }

      if (!picks.length) {
        addAiMsg('Cuba taip contoh: <b>"fridge RM120"</b>.');
        aiInput.value = '';
        return;
      }

      const reply = picks.slice(0, 4).map((p) => {
        const msg = encodeURIComponent(
          `Hi Hasrin, berminat LG ${p.model} (${p.name}) — ${p.price}.`
        );
        return `
          <div style="margin-top:6px;border-top:1px solid rgba(30,41,59,.9);padding-top:6px">
            <b>${p.model} — ${p.name}</b><br><small>${p.price}</small>
            <div style="margin-top:6px;display:flex;gap:6px;flex-wrap:wrap">
              <button class="btn sm" type="button" onclick="window.prefillOrder('${p.model}')">Order</button>
              <button class="btn sm primary" type="button" onclick="window.showDetails(${p._idx})">Butiran</button>
              <a class="btn sm wa" target="_blank" href="${WA_LINK}&text=${msg}">WhatsApp</a>
            </div>
          </div>
        `;
      }).join('');

      addAiMsg('Model sesuai: ' + reply);
      aiInput.value = '';
    }

    if (aiToggle) {
      aiToggle.addEventListener('click', () => {
        aiPanel.classList.toggle('open');
      });
    }

    if (aiSend) aiSend.addEventListener('click', handleAi);
    if (aiInput) {
      aiInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          handleAi();
        }
      });
    }

    // Expose handleAi helpers just in case
    window.handleAi = handleAi;

    // ---------- INIT ----------
    renderSections();
    renderProductTable();
  });
})();
