// ===== CONFIGURATION =====
const CONFIG = {
    businessWhatsApp: "60194124033", // GANTI DENGAN NOMOR KAU
    businessName: "VybeCo Resources",
    promoEndDate: "2025-09-30", // Format: YYYY-MM-DD
    companyEmail: "contact@vybeco.com"
};

// ===== DOM ELEMENTS =====
const elements = {
    productsGrid: document.getElementById('productsGrid'),
    categoryFilters: document.querySelectorAll('.filter-btn'),
    countdownDays: document.getElementById('days'),
    countdownHours: document.getElementById('hours'),
    countdownMinutes: document.getElementById('minutes'),
    countdownSeconds: document.getElementById('seconds'),
    customerForm: document.getElementById('customerForm'),
    agentForm: document.getElementById('agentForm'),
    mobileMenuBtn: document.querySelector('.mobile-menu-btn'),
    navMenu: document.querySelector('.nav-menu')
};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 LG Subscribe Landing Page Initialized');
    
    initializeApp();
});

function initializeApp() {
    loadProducts();
    initializeCountdown();
    initializeFilters();
    initializeForms();
    initializeMobileMenu();
    initializeScrollEffects();
    initializeWhatsAppIntegration();
}

// ===== PRODUCTS MANAGEMENT =====
function loadProducts() {
    if (typeof productsData === 'undefined') {
        console.error('Products data not loaded');
        return;
    }

    const grid = elements.productsGrid;
    if (!grid) return;

    // Clear existing content
    grid.innerHTML = '';

    // Load all products initially
    productsData.forEach(product => {
        const productCard = createProductCard(product);
        grid.appendChild(productCard);
    });

    console.log(`✅ Loaded ${productsData.length} products`);
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = `product-card ${product.category}`;
    card.setAttribute('data-category', product.category);
    
    const featuresHTML = product.features.map(feature => 
        `<li>${feature}</li>`
    ).join('');

    card.innerHTML = `
        <div class="product-image">
            ${product.emoji || '📺'}
        </div>
        <h3 class="product-title">${product.name}</h3>
        <div class="product-model">${product.model}</div>
        
        ${product.plans ? product.plans.map(plan => `
            <div class="product-plan">
                <div class="plan-duration">${plan.duration}</div>
                <div class="plan-type">${plan.type}</div>
                <div class="product-price">RM ${plan.monthlyPrice}</div>
                <div class="product-original-price">NP: RM ${plan.originalPrice} sebulan</div>
            </div>
        `).join('') : `
            <div class="product-price">RM ${product.monthlyPrice}</div>
            <div class="product-original-price">NP: RM ${product.originalPrice} sebulan</div>
        `}
        
        <ul class="product-features">
            ${featuresHTML}
        </ul>
        
        <div class="product-actions">
            <button class="btn btn-primary btn-sm" onclick="whatsappInquiry('${product.name}', '${product.model}')">
                💬 WhatsApp
            </button>
            <button class="btn btn-secondary btn-sm" onclick="showProductDetails('${product.id}')">
                📖 Details
            </button>
        </div>
    `;

    return card;
}

// ===== CATEGORY FILTERS =====
function initializeFilters() {
    elements.categoryFilters.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            // Update active state
            elements.categoryFilters.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter products
            filterProducts(category);
        });
    });
}

function filterProducts(category) {
    const allProducts = document.querySelectorAll('.product-card');
    
    allProducts.forEach(product => {
        if (category === 'all' || product.getAttribute('data-category') === category) {
            product.style.display = 'block';
            setTimeout(() => {
                product.style.opacity = '1';
                product.style.transform = 'translateY(0)';
            }, 100);
        } else {
            product.style.opacity = '0';
            product.style.transform = 'translateY(20px)';
            setTimeout(() => {
                product.style.display = 'none';
            }, 300);
        }
    });
}

// ===== COUNTDOWN TIMER =====
function initializeCountdown() {
    function updateCountdown() {
        const now = new Date().getTime();
        const promoEnd = new Date(CONFIG.promoEndDate).getTime();
        const distance = promoEnd - now;

        if (distance < 0) {
            elements.countdownDays.textContent = '00';
            elements.countdownHours.textContent = '00';
            elements.countdownMinutes.textContent = '00';
            elements.countdownSeconds.textContent = '00';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        elements.countdownDays.textContent = days.toString().padStart(2, '0');
        elements.countdownHours.textContent = hours.toString().padStart(2, '0');
        elements.countdownMinutes.textContent = minutes.toString().padStart(2, '0');
        elements.countdownSeconds.textContent = seconds.toString().padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// ===== FORM HANDLING =====
function initializeForms() {
    if (elements.customerForm) {
        elements.customerForm.addEventListener('submit', handleCustomerForm);
    }
    
    if (elements.agentForm) {
        elements.agentForm.addEventListener('submit', handleAgentForm);
    }
}

function handleCustomerForm(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('customerName').value,
        phone: document.getElementById('customerPhone').value,
        email: document.getElementById('customerEmail').value,
        product: document.getElementById('customerProduct').value,
        area: document.getElementById('customerArea').value,
        message: document.getElementById('customerMessage').value,
        type: 'customer_inquiry'
    };

    if (validateForm(formData)) {
        showLoadingState(elements.customerForm);
        sendFormData(formData);
    }
}

function handleAgentForm(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('agentName').value,
        ic: document.getElementById('agentIC').value,
        phone: document.getElementById('agentPhone').value,
        email: document.getElementById('agentEmail').value,
        area: document.getElementById('agentArea').value,
        experience: document.getElementById('agentExperience').value,
        message: document.getElementById('agentMessage').value,
        type: 'agent_application'
    };

    if (validateForm(formData)) {
        showLoadingState(elements.agentForm);
        sendFormData(formData);
    }
}

function validateForm(data) {
    // Basic validation
    if (!data.name || !data.phone) {
        showNotification('Sila isi semua maklumat yang diperlukan', 'error');
        return false;
    }

    // Phone validation
    const phoneRegex = /^[0-9+-\s()]{10,}$/;
    if (!phoneRegex.test(data.phone)) {
        showNotification('Sila masukkan nombor telefon yang sah', 'error');
        return false;
    }

    return true;
}

function showLoadingState(form) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.innerHTML = '⏳ Menghantar...';
    submitBtn.disabled = true;
    
    // Reset after 3 seconds (simulate processing)
    setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 3000);
}

function sendFormData(formData) {
    // Prepare WhatsApp message
    let message = '';
    
    if (formData.type === 'customer_inquiry') {
        message = `🔔 *INQUIRY BARU - LG Subscribe* 🔔
        
👤 *Nama:* ${formData.name}
📞 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email}
📦 *Produk:* ${formData.product}
📍 *Kawasan:* ${formData.area}
💬 *Mesej:* ${formData.message || 'Tiada mesej tambahan'}

_Generated dari LG Subscribe Landing Page_`;
    } else {
        message = `🔔 *AGENT APPLICATION BARU* 🔔
        
👤 *Nama:* ${formData.name}
🆔 *No IC:* ${formData.ic}
📞 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email}
📍 *Kawasan:* ${formData.area}
💼 *Pengalaman:* ${formData.experience || 'Tiada pengalaman'}
💬 *Sebab Join:* ${formData.message}

_Generated dari LG Subscribe Landing Page_`;
    }

    // Encode message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${CONFIG.businessWhatsApp}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    showNotification(
        formData.type === 'customer_inquiry' 
            ? 'Permohonan berjaya! WhatsApp telah dibuka.' 
            : 'Application berjaya! WhatsApp telah dibuka.',
        'success'
    );
    
    // Reset form
    setTimeout(() => {
        if (formData.type === 'customer_inquiry') {
            elements.customerForm.reset();
        } else {
            elements.agentForm.reset();
        }
    }, 2000);
}

// ===== WHATSAPP INTEGRATION =====
function initializeWhatsAppIntegration() {
    console.log('✅ WhatsApp Integration Ready');
}

function whatsappQuickReply(type) {
    let message = '';
    
    switch(type) {
        case 'price':
            message = `Hai! Saya berminat dengan LG Subscribe. Boleh hantar price list untuk semua produk? Terima kasih!`;
            break;
        case 'callback':
            message = `Hai! Saya nak request call back mengenai LG Subscribe. Boleh hubungi saya? Terima kasih!`;
            break;
        case 'agent':
            message = `Hai! Saya berminat untuk jadi agent VybeCo. Boleh berikan lebih details? Terima kasih!`;
            break;
        default:
            message = `Hai! Saya berminat dengan LG Subscribe. Boleh berikan lebih details?`;
    }
    
    openWhatsApp(message);
}

function whatsappInquiry(productName, productModel) {
    const message = `Hai! Saya berminat dengan produk ini:

📦 *Produk:* ${productName}
🔧 *Model:* ${productModel}

Boleh berikan lebih details dan quotation? Terima kasih!`;
    
    openWhatsApp(message);
}

function openCustomerForm() {
    document.getElementById('customerForm').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

function openAgentForm() {
    document.getElementById('agentForm').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

function openWhatsApp(message) {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${CONFIG.businessWhatsApp}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

// ===== MOBILE MENU =====
function initializeMobileMenu() {
    if (!elements.mobileMenuBtn || !elements.navMenu) return;
    
    elements.mobileMenuBtn.addEventListener('click', function() {
        elements.navMenu.classList.toggle('active');
        this.classList.toggle('active');
    });
}

// ===== SCROLL EFFECTS =====
function initializeScrollEffects() {
    // Header background on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'var(--white)';
            header.style.backdropFilter = 'none';
        }
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===== NOTIFICATION SYSTEM =====
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${getNotificationIcon(type)}</span>
            <span class="notification-message">${message}</span>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 16px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
    `;

    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }
    }, 5000);
}

function getNotificationIcon(type) {
    const icons = {
        success: '✅',
        error: '❌',
        warning: '⚠️',
        info: '💡'
    };
    return icons[type] || '💡';
}

function getNotificationColor(type) {
    const colors = {
        success: '#10B981',
        error: '#EF4444',
        warning: '#F59E0B',
        info: '#3B82F6'
    };
    return colors[type] || '#3B82F6';
}

// ===== PRODUCT DETAILS MODAL =====
function showProductDetails(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    // Create modal HTML
    const modalHTML = `
        <div class="modal-overlay" onclick="closeModal()">
            <div class="modal-content" onclick="event.stopPropagation()">
                <button class="modal-close" onclick="closeModal()">×</button>
                
                <div class="modal-header">
                    <div class="product-image-large">${product.emoji || '📺'}</div>
                    <h2>${product.name}</h2>
                    <div class="product-model">${product.model}</div>
                </div>

                <div class="modal-body">
                    ${product.plans ? `
                    <div class="plans-comparison">
                        <h3>Pilihan Plan</h3>
                        ${product.plans.map(plan => `
                            <div class="plan-option">
                                <div class="plan-header">
                                    <span class="plan-duration">${plan.duration}</span>
                                    <span class="plan-type">${plan.type}</span>
                                </div>
                                <div class="plan-pricing">
                                    <div class="current-price">RM ${plan.monthlyPrice}/bulan</div>
                                    <div class="original-price">NP: RM ${plan.originalPrice}/bulan</div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    ` : ''}

                    <div class="product-features-detailed">
                        <h3>Ciri-ciri Utama</h3>
                        <ul>
                            ${product.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>

                    <div class="promo-info">
                        <h3>📢 Promosi Terkini</h3>
                        <p><strong>Diskaun 50%</strong> untuk 9 bulan pertama (Pelanggan Baru)</p>
                        <p><strong>Servis & Maintenance</strong> percuma termasuk dalam plan</p>
                    </div>
                </div>

                <div class="modal-actions">
                    <button class="btn btn-primary" onclick="whatsappInquiry('${product.name}', '${product.model}')">
                        💬 Dapatkan Quotation
                    </button>
                    <button class="btn btn-secondary" onclick="closeModal()">
                        Tutup
                    </button>
                </div>
            </div>
        </div>
    `;

    // Add to DOM
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Add modal styles if not exists
    addModalStyles();
}

function closeModal() {
    const modal = document.querySelector('.modal-overlay');
    if (modal) {
        modal.remove();
    }
}

function addModalStyles() {
    if (document.getElementById('modal-styles')) return;

    const styles = `
        <style id="modal-styles">
            .modal-overlay {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                animation: fadeIn 0.3s ease;
            }
            
            .modal-content {
                background: white;
                border-radius: 12px;
                padding: 2rem;
                max-width: 500px;
                width: 90%;
                max-height: 80vh;
                overflow-y: auto;
                position: relative;
                animation: slideInUp 0.3s ease;
            }
            
            .modal-close {
                position: absolute;
                top: 1rem;
                right: 1rem;
                background: none;
                border: none;
                font-size: 1.5rem;
                cursor: pointer;
                color: #666;
            }
            
            .modal-header {
                text-align: center;
                margin-bottom: 2rem;
            }
            
            .product-image-large {
                font-size: 4rem;
                margin-bottom: 1rem;
            }
            
            .plans-comparison {
                margin-bottom: 2rem;
            }
            
            .plan-option {
                border: 1px solid #e5e7eb;
                border-radius: 8px;
                padding: 1rem;
                margin-bottom: 1rem;
            }
            
            .plan-header {
                display: flex;
                justify-content: space-between;
                margin-bottom: 0.5rem;
            }
            
            .current-price {
                font-size: 1.25rem;
                font-weight: bold;
                color: #E30022;
            }
            
            .original-price {
                text-decoration: line-through;
                color: #6b7280;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            @keyframes slideInUp {
                from { 
                    opacity: 0;
                    transform: translateY(30px);
                }
                to { 
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @keyframes slideInRight {
                from {
                    opacity: 0;
                    transform: translateX(100%);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            
            @keyframes slideOutRight {
                from {
                    opacity: 1;
                    transform: translateX(0);
                }
                to {
                    opacity: 0;
                    transform: translateX(100%);
                }
            }
        </style>
    `;

    document.head.insertAdjacentHTML('beforeend', styles);
}

// ===== UTILITY FUNCTIONS =====
function formatPrice(price) {
    return new Intl.NumberFormat('ms-MY', {
        style: 'currency',
        currency: 'MYR',
        minimumFractionDigits: 0
    }).format(price);
}

// ===== ERROR HANDLING =====
window.addEventListener('error', function(e) {
    console.error('Application Error:', e.error);
    showNotification('Ralat sistem. Sila refresh halaman.', 'error');
});

// Export functions for global access
window.whatsappQuickReply = whatsappQuickReply;
window.whatsappInquiry = whatsappInquiry;
window.openCustomerForm = openCustomerForm;
window.openAgentForm = openAgentForm;
window.showProductDetails = showProductDetails;
window.closeModal = closeModal;

console.log('✨ script.js loaded successfully');
