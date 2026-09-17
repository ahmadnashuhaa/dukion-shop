// ============================================================
// KONFIGURASI TOKO — GANTI BAGIAN INI DENGAN DATA ASLI TOKO KAMU
// ============================================================
const STORE_CONFIG = {
  // Format 62xxxxxxxxxx (tanpa tanda + atau 0 di depan)
  whatsappNumber: '6281234567890',
  bankName: 'Bank Kumo Sejahtera',
  bankAccountNumber: '1234 5678 9099',
  bankAccountHolder: 'Kumo Matcha Store',
  address: 'Jl. Contoh No. 123, Kota Kamu',
  hours: 'Setiap hari, 09.00–21.00 WIB',
  instagramUrl: 'https://instagram.com/kumo.matcha'
};

// ===== Ikon inline per rasa (SVG, tanpa dependensi CDN sama sekali) =====
const FLAVOR_ICONS = {
  leaf: `<svg viewBox="0 0 64 64"><path d="M54 10C30 10 12 28 12 52c24 0 42-18 42-42Z" fill="#5CA84A"/><path d="M16 48C28 36 40 24 52 12" stroke="#3B7A32" stroke-width="3" fill="none" stroke-linecap="round"/></svg>`,
  strawberry: `<svg viewBox="0 0 64 64"><path d="M32 20c10 0 18 8 18 20 0 12-9 20-18 20S14 52 14 40c0-12 8-20 18-20Z" fill="#E6483C"/><path d="M32 20l-6-8h12l-6 8Z" fill="#4C9A3B"/><path d="M20 16l6 6M44 16l-6 6M32 10v8" stroke="#4C9A3B" stroke-width="2" fill="none" stroke-linecap="round"/><circle cx="24" cy="34" r="1.6" fill="#FFF3D6"/><circle cx="32" cy="30" r="1.6" fill="#FFF3D6"/><circle cx="40" cy="34" r="1.6" fill="#FFF3D6"/><circle cx="22" cy="44" r="1.6" fill="#FFF3D6"/><circle cx="32" cy="48" r="1.6" fill="#FFF3D6"/><circle cx="42" cy="44" r="1.6" fill="#FFF3D6"/></svg>`,
  cherries: `<svg viewBox="0 0 64 64"><path d="M34 16c4-8 12-10 16-8" stroke="#4C9A3B" stroke-width="3" fill="none" stroke-linecap="round"/><path d="M34 16c-2-6-8-10-14-10" stroke="#4C9A3B" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="22" cy="42" r="12" fill="#C4262E"/><circle cx="42" cy="44" r="12" fill="#E03A3E"/><ellipse cx="18" cy="37" rx="3" ry="2" fill="#FF9E9E" opacity="0.7"/><ellipse cx="38" cy="39" rx="3" ry="2" fill="#FF9E9E" opacity="0.7"/></svg>`,
  blueberry: `<svg viewBox="0 0 64 64"><circle cx="24" cy="30" r="10" fill="#5B6EC4"/><circle cx="40" cy="28" r="9" fill="#6E7FD6"/><circle cx="32" cy="42" r="11" fill="#4C5FB8"/><path d="M20 24c1-1 3-1 4 0M36 22c1-1 3-1 4 0M28 36c1-1 3-1 4 0" stroke="#DCE3FF" stroke-width="1.4" stroke-linecap="round" fill="none"/></svg>`,
  coffeeCup: `<svg viewBox="0 0 64 64"><path d="M14 26h30v14a15 15 0 0 1-15 15 15 15 0 0 1-15-15V26Z" fill="#6F4E37"/><path d="M44 28h4a7 7 0 0 1 0 14h-4" fill="none" stroke="#4A3222" stroke-width="3"/><path d="M20 20c0-3 3-3 3-6M28 20c0-3 3-3 3-6M36 20c0-3 3-3 3-6" stroke="#B08968" stroke-width="2" fill="none" stroke-linecap="round"/><rect x="12" y="46" width="34" height="4" rx="2" fill="#4A3222"/></svg>`,
  espresso: `<svg viewBox="0 0 64 64"><path d="M18 28h28v10a14 14 0 0 1-14 14 14 14 0 0 1-14-14V28Z" fill="#3B2415"/><ellipse cx="32" cy="28" rx="14" ry="4" fill="#1F1109"/><path d="M46 30h3a6 6 0 0 1 0 12h-3" fill="none" stroke="#3B2415" stroke-width="3"/></svg>`,
  cappuccino: `<svg viewBox="0 0 64 64"><path d="M16 26h28v12a14 14 0 0 1-14 14 14 14 0 0 1-14-14V26Z" fill="#D9B08C"/><path d="M16 26a14 14 0 0 1 28 0" fill="#EFE1D1"/><path d="M24 22c2-2 2-4 0-6M32 22c2-2 2-4 0-6M40 22c2-2 2-4 0-6" stroke="#B08968" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M44 28h3a6 6 0 0 1 0 12h-3" fill="none" stroke="#6F4E37" stroke-width="3"/></svg>`,
  icedTea: `<svg viewBox="0 0 64 64"><path d="M20 16h24l-3 34a3 3 0 0 1-3 3H26a3 3 0 0 1-3-3L20 16Z" fill="#C98A3B"/><path d="M20 16h24" stroke="#8a5a20" stroke-width="2"/><rect x="26" y="24" width="7" height="7" rx="1.5" fill="#EAF4FF" opacity="0.85"/><rect x="34" y="30" width="7" height="7" rx="1.5" fill="#EAF4FF" opacity="0.85"/></svg>`,
  lemonTea: `<svg viewBox="0 0 64 64"><path d="M20 18h22l-2.6 32a3 3 0 0 1-3 2.8H25.6a3 3 0 0 1-3-2.8L20 18Z" fill="#E9C64B"/><circle cx="42" cy="18" r="7" fill="#F5E96B"/><circle cx="42" cy="18" r="4.2" fill="#FDF6B0"/><path d="M42 14.5v7M38.5 18h7" stroke="#E9C64B" stroke-width="1.2"/></svg>`,
  thaiTea: `<svg viewBox="0 0 64 64"><path d="M20 16h24l-3 34a3 3 0 0 1-3 3H26a3 3 0 0 1-3-3L20 16Z" fill="#E8792E"/><path d="M22.6 40h18.8l-1.4 10a3 3 0 0 1-3 2.6h-10a3 3 0 0 1-3-2.6L22.6 40Z" fill="#F3DFC4"/></svg>`,
  chocolate: `<svg viewBox="0 0 64 64"><path d="M16 26h28v12a14 14 0 0 1-14 14 14 14 0 0 1-14-14V26Z" fill="#5B3A29"/><path d="M16 26a14 14 0 0 1 28 0" fill="#F4EDE4"/><path d="M22 22c3 2 6 2 9-1 3-3 6-3 9-1" stroke="#8a5a3c" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M44 28h3a6 6 0 0 1 0 12h-3" fill="none" stroke="#5B3A29" stroke-width="3"/></svg>`,
  milkshake: `<svg viewBox="0 0 64 64"><path d="M22 20h20l-2.4 30a3 3 0 0 1-3 2.8H27.4a3 3 0 0 1-3-2.8L22 20Z" fill="#F4C6D8"/><ellipse cx="32" cy="20" rx="10" ry="4" fill="#FFF"/><path d="M38 10l2 14" stroke="#E88AAE" stroke-width="2.4" stroke-linecap="round"/></svg>`,
  soda: `<svg viewBox="0 0 64 64"><path d="M24 14h16v6l3 6v24a3 3 0 0 1-3 3H24a3 3 0 0 1-3-3V26l3-6v-6Z" fill="#8FD14F"/><circle cx="30" cy="34" r="1.6" fill="#fff" opacity="0.8"/><circle cx="36" cy="40" r="1.3" fill="#fff" opacity="0.8"/><circle cx="32" cy="46" r="1.4" fill="#fff" opacity="0.8"/></svg>`
};

// Data Varian Produk Matcha
// Kategori produk. "image" dipakai sebagai preview besar di category-switcher.
const CATEGORIES = [
  {
    id: 'matcha',
    name: 'Matcha',
    title: 'Choose your matcha tea',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'kopi',
    name: 'Kopi',
    title: 'Choose your coffee',
    image: 'https://images.unsplash.com/photo-1550071555-917d67a1188f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'es-teh',
    name: 'Es Teh',
    title: 'Choose your iced tea',
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'lainnya',
    name: 'Minuman Lain',
    title: 'Choose your favorite drink',
    image: 'https://images.unsplash.com/photo-1583024012457-b6de05b7003a?auto=format&fit=crop&w=800&q=80'
  }
];

// Catatan: field "stock" GAMPANG DIEDIT MANUAL. Set ke 0 kalau rasa itu lagi habis,
// tombol "Tambah ke Keranjang" otomatis berubah jadi "Stok Habis" dan non-aktif.
// Field "category" HARUS sama persis dengan salah satu id di CATEGORIES di atas.
const PRODUCTS = [
  {
    id: 'original',
    name: 'Original',
    category: 'matcha',
    desc: 'Smooth, creamy, dan klasik.',
    price: 18000,
    stock: 20,
    icon: FLAVOR_ICONS.leaf,
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'strawberry',
    name: 'Strawberry',
    category: 'matcha',
    desc: 'Segar manis dengan sentuhan buah stroberi.',
    price: 20000,
    stock: 15,
    icon: FLAVOR_ICONS.strawberry,
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'cranberry',
    name: 'Cranberry',
    category: 'matcha',
    desc: 'Asam manis segar, cocok buat siang hari.',
    price: 20000,
    stock: 15,
    icon: FLAVOR_ICONS.cherries,
    image: 'https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'blueberry',
    name: 'Blueberry',
    category: 'matcha',
    desc: 'Manis lembut dengan aroma blueberry.',
    price: 22000,
    stock: 10,
    icon: FLAVOR_ICONS.blueberry,
    image: 'https://images.unsplash.com/photo-1497515114629-f71d768fd07c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'kopi-susu-gula-aren',
    name: 'Kopi Susu Gula Aren',
    category: 'kopi',
    desc: 'Kopi susu creamy dengan manis gula aren.',
    price: 15000,
    stock: 20,
    icon: FLAVOR_ICONS.coffeeCup,
    image: 'https://images.unsplash.com/photo-1550071555-917d67a1188f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'americano',
    name: 'Americano',
    category: 'kopi',
    desc: 'Kopi hitam ringan, cocok buat yang suka pahit.',
    price: 12000,
    stock: 20,
    icon: FLAVOR_ICONS.espresso,
    image: 'https://images.unsplash.com/photo-1550071555-917d67a1188f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    category: 'kopi',
    desc: 'Espresso dengan foam susu lembut.',
    price: 18000,
    stock: 15,
    icon: FLAVOR_ICONS.cappuccino,
    image: 'https://images.unsplash.com/photo-1550071555-917d67a1188f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'es-teh-manis',
    name: 'Es Teh Manis',
    category: 'es-teh',
    desc: 'Teh manis segar dengan es batu.',
    price: 8000,
    stock: 25,
    icon: FLAVOR_ICONS.icedTea,
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'lemon-tea',
    name: 'Lemon Tea',
    category: 'es-teh',
    desc: 'Teh segar dengan perasan lemon asli.',
    price: 12000,
    stock: 18,
    icon: FLAVOR_ICONS.lemonTea,
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'thai-tea',
    name: 'Thai Tea',
    category: 'es-teh',
    desc: 'Teh Thailand creamy dengan warna khasnya.',
    price: 15000,
    stock: 15,
    icon: FLAVOR_ICONS.thaiTea,
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'coklat-hangat',
    name: 'Coklat',
    category: 'lainnya',
    desc: 'Coklat creamy, manis pas gak bikin eneg.',
    price: 16000,
    stock: 15,
    icon: FLAVOR_ICONS.chocolate,
    image: 'https://images.unsplash.com/photo-1497048363455-6f3e84db1cae?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'milkshake-vanilla',
    name: 'Milkshake Vanilla',
    category: 'lainnya',
    desc: 'Milkshake vanilla creamy dan dingin.',
    price: 18000,
    stock: 12,
    icon: FLAVOR_ICONS.milkshake,
    image: 'https://images.unsplash.com/photo-1583024012457-b6de05b7003a?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'soda-gembira',
    name: 'Soda Gembira',
    category: 'lainnya',
    desc: 'Soda seger warna-warni, favorit anak muda.',
    price: 13000,
    stock: 18,
    icon: FLAVOR_ICONS.soda,
    image: 'https://images.unsplash.com/photo-1583024012457-b6de05b7003a?auto=format&fit=crop&w=600&q=80'
  }
];

// ===== Ambil Elemen =====
const categoryPreviewImg = document.getElementById('categoryPreviewImg');
const categoryListEl = document.getElementById('categoryList');
const mainTitleEl = document.getElementById('mainTitle');

const carouselContainer = document.getElementById('flavorCarousel');
const mainImg = document.getElementById('mainProductImg');
const productLabel = document.getElementById('productLabel');
const productDesc = document.getElementById('productDesc');
const productPrice = document.getElementById('productPrice');
const stockTag = document.getElementById('stockTag');
const addToCartBtn = document.getElementById('addToCartBtn');
const addToCartLabel = document.getElementById('addToCartLabel');
const addToast = document.getElementById('addToast');

const promoBtn = document.getElementById('promoBtn');
const promoTooltip = document.getElementById('promoTooltip');

const cartBtn = document.getElementById('cartBtn');
const cartBadge = document.getElementById('cartBadge');
const cartOverlay = document.getElementById('cartOverlay');
const cartDrawer = document.getElementById('cartDrawer');
const closeCartBtn = document.getElementById('closeCartBtn');
const backBtn = document.getElementById('backBtn');
const drawerTitle = document.getElementById('drawerTitle');

const cartItemsEl = document.getElementById('cartItems');
const cartEmptyMsg = document.getElementById('cartEmptyMsg');
const exploreBtn = document.getElementById('exploreBtn');
const cartTotalEl = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');

const orderSummaryList = document.getElementById('orderSummaryList');
const orderIdMethod = document.getElementById('orderIdMethod');
const orderIdSuccess = document.getElementById('orderIdSuccess');
const methodTotalEl = document.getElementById('methodTotal');
const detailTotalEl = document.getElementById('detailTotal');

const qrisPanel = document.getElementById('qrisPanel');
const transferPanel = document.getElementById('transferPanel');
const qrBox = document.getElementById('qrBox');

const bankName = document.getElementById('bankName');
const bankNumber = document.getElementById('bankNumber');
const bankHolder = document.getElementById('bankHolder');
const copyBankBtn = document.getElementById('copyBankBtn');
const copyFeedback = document.getElementById('copyFeedback');

const waConfirmBtn = document.getElementById('waConfirmBtn');
const paidConfirmBtn = document.getElementById('paidConfirmBtn');
const doneBtn = document.getElementById('doneBtn');

const footerAddress = document.getElementById('footerAddress');
const footerHours = document.getElementById('footerHours');
const footerWaLink = document.getElementById('footerWaLink');
const footerIgLink = document.getElementById('footerIgLink');
const footerCopy = document.getElementById('footerCopy');

const steps = {
  cart: document.getElementById('stepCart'),
  method: document.getElementById('stepMethod'),
  detail: document.getElementById('stepDetail'),
  success: document.getElementById('stepSuccess')
};

// ===== State =====
let activeCategory = CATEGORIES[0];
let activeProduct = PRODUCTS[0];
let cart = []; // { id, name, price, icon, qty }
let selectedMethod = null; // 'qris' | 'transfer'
let currentStep = 'cart';
let currentOrderId = null;

// ===== Util =====
function formatRupiah(num) {
  return 'Rp' + num.toLocaleString('id-ID');
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.qty * item.price, 0);
}

// Nomor pesanan otomatis, format #KMO-xxxx. Counter disimpan di localStorage
// biar nomornya tetap nyambung urut walau halaman di-reload/dibuka lagi.
function generateOrderId() {
  let counter = 1040;
  try {
    const saved = parseInt(localStorage.getItem('kumo_order_counter'), 10);
    if (!isNaN(saved)) counter = saved;
  } catch (err) {
    // localStorage gak tersedia (mis. mode private/incognito ketat) -> tetap jalan pakai nilai default
  }
  counter += 1;
  try {
    localStorage.setItem('kumo_order_counter', String(counter));
  } catch (err) {
    // diamkan, order ID tetap muncul walau gak ke-simpan buat next session
  }
  return `KMO-${counter}`;
}

// ===== Category Switcher: Matcha / Kopi / Es Teh / Minuman Lain =====
function initCategorySwitcher() {
  categoryListEl.innerHTML = '';

  CATEGORIES.forEach((cat) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'category-item';
    btn.textContent = cat.name;
    btn.dataset.categoryId = cat.id;
    btn.setAttribute('role', 'tab');
    if (cat.id === activeCategory.id) {
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
    } else {
      btn.setAttribute('aria-selected', 'false');
    }

    btn.addEventListener('mouseenter', () => previewCategoryImage(cat));
    btn.addEventListener('focus', () => previewCategoryImage(cat));
    btn.addEventListener('mouseleave', () => previewCategoryImage(activeCategory));
    btn.addEventListener('click', () => selectCategory(cat));

    categoryListEl.appendChild(btn);
  });

  categoryPreviewImg.src = activeCategory.image;
  categoryPreviewImg.alt = activeCategory.name;
}

function previewCategoryImage(cat) {
  categoryPreviewImg.style.opacity = '0';
  clearTimeout(previewCategoryImage._timer);
  previewCategoryImage._timer = setTimeout(() => {
    categoryPreviewImg.src = cat.image;
    categoryPreviewImg.alt = cat.name;
    categoryPreviewImg.style.opacity = '1';
  }, 150);
}

function selectCategory(cat) {
  if (activeCategory.id === cat.id) return;
  activeCategory = cat;

  document.querySelectorAll('.category-item').forEach((btn) => {
    const isActive = btn.dataset.categoryId === cat.id;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-selected', String(isActive));
  });

  mainTitleEl.textContent = cat.title;
  previewCategoryImage(cat);
  renderCarousel();
}

// ===== Carousel Rasa/Varian (difilter sesuai kategori aktif) =====
function renderCarousel() {
  carouselContainer.innerHTML = '';

  const filtered = PRODUCTS.filter((p) => p.category === activeCategory.id);

  filtered.forEach((product, index) => {
    const item = document.createElement('div');
    item.classList.add('flavor-item');
    item.style.animationDelay = `${index * 60}ms`;
    item.dataset.productId = product.id;
    if (index === 0) item.classList.add('active');
    if (product.stock <= 0) item.classList.add('out-of-stock');
    item.setAttribute('role', 'button');
    item.setAttribute('tabindex', '0');
    item.setAttribute('aria-label', product.stock <= 0 ? `${product.name} (stok habis)` : `Pilih ${product.name}`);

    const card = document.createElement('div');
    card.classList.add('flavor-card');
    card.innerHTML = product.icon;

    const label = document.createElement('span');
    label.classList.add('flavor-label');
    label.textContent = product.name;

    item.appendChild(card);
    item.appendChild(label);

    item.addEventListener('click', () => updateActiveFlavor(product, item));
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        updateActiveFlavor(product, item);
      }
    });

    carouselContainer.appendChild(item);
  });

  if (filtered.length > 0) {
    activeProduct = filtered[0];
    syncProductDisplay(filtered[0]);
  }
}

function applyStockUI(flavor) {
  const outOfStock = flavor.stock <= 0;
  stockTag.hidden = !outOfStock;
  addToCartBtn.disabled = outOfStock;
  addToCartLabel.textContent = outOfStock ? 'Stok Habis' : 'Tambah ke Keranjang';
}

// Update tampilan produk besar (foto, nama, deskripsi, harga, status stok)
function syncProductDisplay(product) {
  mainImg.style.opacity = '0';
  mainImg.style.transform = 'scale(0.85)';

  setTimeout(() => {
    mainImg.src = product.image;
    productLabel.textContent = product.name;
    productDesc.textContent = product.desc;
    productPrice.textContent = formatRupiah(product.price);
    applyStockUI(product);

    mainImg.style.opacity = '1';
    mainImg.style.transform = 'scale(1)';
  }, 200);
}

function updateActiveFlavor(flavor, selectedItem) {
  document.querySelectorAll('.flavor-item').forEach((item) => {
    item.classList.remove('active');
  });
  selectedItem.classList.add('active');

  activeProduct = flavor;
  syncProductDisplay(flavor);
}

// Cari elemen .flavor-item yang mewakili produk tertentu di carousel yang SEDANG tampil
function findFlavorItem(productId) {
  return carouselContainer.querySelector(`[data-product-id="${productId}"]`);
}

// ===== Surprise Me (icon petir): pilih produk acak dari SEMUA kategori =====
function togglePromo(forceState, message) {
  const willShow = typeof forceState === 'boolean' ? forceState : !promoTooltip.classList.contains('show');
  if (message) promoTooltip.textContent = message;
  promoTooltip.classList.toggle('show', willShow);
  promoBtn.setAttribute('aria-expanded', String(willShow));
}

promoBtn.addEventListener('click', (e) => {
  e.stopPropagation();

  const otherProducts = PRODUCTS.filter((p) => p.id !== activeProduct.id);
  const pick = otherProducts[Math.floor(Math.random() * otherProducts.length)];
  const pickCategory = CATEGORIES.find((c) => c.id === pick.category);

  if (pick.category !== activeCategory.id) {
    selectCategory(pickCategory);
  }

  // selectCategory (kalau kepanggil) otomatis nge-render carousel & pilih item pertama;
  // di sini kita override ke produk hasil pick yang sebenarnya.
  const pickItem = findFlavorItem(pick.id);
  if (pickItem) updateActiveFlavor(pick, pickItem);

  togglePromo(true, `✨ Coba ${pick.name} yuk!`);

  clearTimeout(togglePromo._timer);
  togglePromo._timer = setTimeout(() => togglePromo(false), 2500);
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.icon-wrapper')) {
    togglePromo(false);
  }
});

// ===== Cart Drawer: buka/tutup =====
function openCart() {
  cartDrawer.classList.add('open');
  cartOverlay.classList.add('show');
  cartDrawer.setAttribute('aria-hidden', 'false');
}

function closeCart() {
  cartDrawer.classList.remove('open');
  cartOverlay.classList.remove('show');
  cartDrawer.setAttribute('aria-hidden', 'true');
}

cartBtn.addEventListener('click', () => {
  togglePromo(false);
  showStep('cart');
  openCart();
});

closeCartBtn.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

exploreBtn.addEventListener('click', () => {
  closeCart();
  if (typeof carouselContainer.scrollIntoView === 'function') {
    carouselContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeCart();
    togglePromo(false);
  }
});

// ===== Navigasi antar step di dalam drawer =====
const STEP_TITLES = {
  cart: 'Keranjang',
  method: 'Metode Pembayaran',
  detail: 'Selesaikan Pembayaran',
  success: 'Berhasil'
};

const STEP_BACK_TARGET = {
  method: 'cart',
  detail: 'method'
};

function showStep(stepName) {
  Object.values(steps).forEach(el => { el.hidden = true; });
  steps[stepName].hidden = false;
  currentStep = stepName;
  drawerTitle.textContent = STEP_TITLES[stepName];
  backBtn.hidden = !STEP_BACK_TARGET[stepName];
}

backBtn.addEventListener('click', () => {
  const target = STEP_BACK_TARGET[currentStep];
  if (target) showStep(target);
});

// ===== Render Isi Keranjang (Step 1) =====
function renderCart() {
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = getCartTotal();

  cartBadge.textContent = totalQty;
  cartBadge.classList.toggle('visible', totalQty > 0);

  cartTotalEl.textContent = formatRupiah(totalPrice);
  checkoutBtn.disabled = cart.length === 0;

  if (cart.length === 0) {
    cartItemsEl.innerHTML = '';
    cartItemsEl.appendChild(cartEmptyMsg);
    return;
  }

  cartItemsEl.innerHTML = '';
  cart.forEach(item => {
    const row = document.createElement('div');
    row.classList.add('cart-item');

    const iconWrap = document.createElement('div');
    iconWrap.innerHTML = item.icon;
    iconWrap.firstElementChild.classList.add('cart-item-icon');

    row.appendChild(iconWrap.firstElementChild);

    const info = document.createElement('div');
    info.className = 'cart-item-info';
    info.innerHTML = `
      <div class="cart-item-name">${item.name}</div>
      <div class="cart-item-price">${formatRupiah(item.price)}</div>
    `;
    row.appendChild(info);

    const qtyBox = document.createElement('div');
    qtyBox.className = 'cart-item-qty';
    qtyBox.innerHTML = `
      <button class="qty-btn" data-action="dec" data-id="${item.id}" aria-label="Kurangi jumlah">−</button>
      <span class="qty-value">${item.qty}</span>
      <button class="qty-btn" data-action="inc" data-id="${item.id}" aria-label="Tambah jumlah">+</button>
      <button class="remove-btn" data-action="remove" data-id="${item.id}" aria-label="Hapus item">×</button>
    `;
    row.appendChild(qtyBox);

    cartItemsEl.appendChild(row);
  });
}

cartItemsEl.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-action]');
  if (!btn) return;

  const id = btn.dataset.id;
  const action = btn.dataset.action;
  const item = cart.find(i => i.id === id);
  if (!item) return;

  if (action === 'inc') {
    const flavor = PRODUCTS.find(f => f.id === id);
    if (flavor && item.qty + 1 > flavor.stock) {
      showToast(`Stok ${flavor.name} cuma tersisa ${flavor.stock}`);
      return;
    }
    item.qty += 1;
  } else if (action === 'dec') {
    item.qty -= 1;
    if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
  } else if (action === 'remove') {
    cart = cart.filter(i => i.id !== id);
  }

  renderCart();
});

// ===== Tambah ke Keranjang (tombol di bawah foto produk) =====
function addToCart(flavor) {
  const existing = cart.find(item => item.id === flavor.id);
  if (existing) {
    if (existing.qty + 1 > flavor.stock) {
      showToast(`Stok ${flavor.name} cuma tersisa ${flavor.stock}`);
      return;
    }
    existing.qty += 1;
  } else {
    cart.push({ id: flavor.id, name: flavor.name, price: flavor.price, icon: flavor.icon, qty: 1 });
  }
  renderCart();
  bumpCartBadge();
}

function bumpCartBadge() {
  cartBadge.classList.remove('bump');
  void cartBadge.offsetWidth;
  cartBadge.classList.add('bump');
}

function flyToCart() {
  const startRect = addToCartBtn.getBoundingClientRect();
  const endRect = cartBtn.getBoundingClientRect();

  const flyEl = document.createElement('div');
  flyEl.className = 'fly-item';
  flyEl.innerHTML = activeProduct.icon;
  document.body.appendChild(flyEl);

  flyEl.style.left = `${startRect.left + startRect.width / 2 - 15}px`;
  flyEl.style.top = `${startRect.top + startRect.height / 2 - 15}px`;
  flyEl.style.opacity = '1';

  requestAnimationFrame(() => {
    const deltaX = (endRect.left + endRect.width / 2) - (startRect.left + startRect.width / 2);
    const deltaY = (endRect.top + endRect.height / 2) - (startRect.top + startRect.height / 2);
    flyEl.style.transform = `translate(${deltaX}px, ${deltaY}px) scale(0.2)`;
    flyEl.style.opacity = '0';
  });

  flyEl.addEventListener('transitionend', () => flyEl.remove());
}

function showToast(message) {
  addToast.textContent = message;
  addToast.classList.add('show');
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => addToast.classList.remove('show'), 1800);
}

addToCartBtn.addEventListener('click', () => {
  if (addToCartBtn.disabled || activeProduct.stock <= 0) return;

  addToCartBtn.classList.remove('clicked');
  void addToCartBtn.offsetWidth;
  addToCartBtn.classList.add('clicked');

  flyToCart();
  addToCart(activeProduct);
  showToast(`✓ ${activeProduct.name} ditambahkan ke keranjang`);
});

// ===== Step 2: Checkout -> Pilih Metode Pembayaran =====
function renderOrderSummary() {
  orderSummaryList.innerHTML = cart.map(item => `
    <div class="order-summary-row">
      <span class="osr-name">${item.name} <span class="osr-qty">x${item.qty}</span></span>
      <span>${formatRupiah(item.price * item.qty)}</span>
    </div>
  `).join('');
}

checkoutBtn.addEventListener('click', () => {
  if (cart.length === 0) return;
  if (!currentOrderId) currentOrderId = generateOrderId();

  renderOrderSummary();
  orderIdMethod.textContent = `#${currentOrderId}`;
  methodTotalEl.textContent = formatRupiah(getCartTotal());
  showStep('method');
});

document.querySelectorAll('.method-card').forEach(card => {
  card.addEventListener('click', () => {
    selectedMethod = card.dataset.method;
    openPaymentDetail(selectedMethod);
  });
});

// ===== Step 3: Detail Pembayaran =====
function openPaymentDetail(method) {
  qrisPanel.hidden = method !== 'qris';
  transferPanel.hidden = method !== 'transfer';

  if (method === 'qris' && !qrBox.dataset.rendered) {
    qrBox.innerHTML = buildFakeQR();
    qrBox.dataset.rendered = 'true';
  }

  if (method === 'transfer') {
    bankName.textContent = STORE_CONFIG.bankName;
    bankNumber.textContent = STORE_CONFIG.bankAccountNumber;
    bankHolder.textContent = `a.n. ${STORE_CONFIG.bankAccountHolder}`;
  }

  detailTotalEl.textContent = formatRupiah(getCartTotal());
  showStep('detail');
}

// Generator QR dekoratif (bukan QR sungguhan) — pemilik toko wajib
// mengganti ini dengan gambar QRIS asli dari bank/e-wallet sebelum go-live.
function buildFakeQR() {
  const size = 21;
  const cell = 8;
  const total = size * cell;
  let rects = '';

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const inTopLeft = x < 7 && y < 7;
      const inTopRight = x >= size - 7 && y < 7;
      const inBottomLeft = x < 7 && y >= size - 7;
      if (inTopLeft || inTopRight || inBottomLeft) continue;
      if (Math.random() > 0.55) {
        rects += `<rect x="${x * cell}" y="${y * cell}" width="${cell}" height="${cell}" fill="#1f2a14"/>`;
      }
    }
  }

  function finder(px, py) {
    return `
      <rect x="${px}" y="${py}" width="${7 * cell}" height="${7 * cell}" fill="#1f2a14"/>
      <rect x="${px + cell}" y="${py + cell}" width="${5 * cell}" height="${5 * cell}" fill="#fff"/>
      <rect x="${px + 2 * cell}" y="${py + 2 * cell}" width="${3 * cell}" height="${3 * cell}" fill="#1f2a14"/>
    `;
  }

  const finders = finder(0, 0) + finder((size - 7) * cell, 0) + finder(0, (size - 7) * cell);

  return `<svg viewBox="0 0 ${total} ${total}" width="180" height="180">
    <rect width="${total}" height="${total}" fill="#fff"/>
    ${rects}
    ${finders}
  </svg>`;
}

// Salin nomor rekening
copyBankBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(STORE_CONFIG.bankAccountNumber.replace(/\s/g, ''));
  } catch (err) {
    // fallback diam-diam kalau clipboard API gak tersedia (mis. http non-secure)
  }
  copyFeedback.classList.add('show');
  setTimeout(() => copyFeedback.classList.remove('show'), 1500);
});

// ===== Konfirmasi via WhatsApp =====
waConfirmBtn.addEventListener('click', () => {
  const itemsList = cart.map(i => `- ${i.name} x${i.qty} (${formatRupiah(i.price * i.qty)})`).join('\n');
  const methodLabel = selectedMethod === 'qris' ? 'QRIS' : 'Transfer Bank';
  const message =
    `Halo Kumo! Saya mau konfirmasi pesanan #${currentOrderId}:\n${itemsList}\n\n` +
    `Total: ${formatRupiah(getCartTotal())}\n` +
    `Metode: ${methodLabel}`;

  const url = `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener');
});

// ===== Konfirmasi manual "Saya Sudah Bayar" =====
paidConfirmBtn.addEventListener('click', () => {
  orderIdSuccess.textContent = `#${currentOrderId}`;
  showStep('success');
});

doneBtn.addEventListener('click', () => {
  cart = [];
  selectedMethod = null;
  currentOrderId = null;
  qrBox.dataset.rendered = '';
  renderCart();
  closeCart();
  showStep('cart');
});

function populateFooter() {
  footerAddress.textContent = `📍 ${STORE_CONFIG.address}`;
  footerHours.textContent = `🕒 ${STORE_CONFIG.hours}`;
  footerWaLink.href = `https://wa.me/${STORE_CONFIG.whatsappNumber}`;
  footerIgLink.href = STORE_CONFIG.instagramUrl;
  footerCopy.textContent = `© ${new Date().getFullYear()} Kumo. Semua hak dilindungi.`;
}

// ===== Jalankan saat dokumen siap =====
document.addEventListener('DOMContentLoaded', () => {
  initCategorySwitcher();
  renderCarousel();
  renderCart();
  populateFooter();
});
