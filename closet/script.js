/* ============================================================
   ALEX'S FINDS — script.js
   ============================================================

   HOW TO ADD YOUR OWN PHOTOS
   ──────────────────────────
   1. Drop your photo into the /images/ folder
   2. Set item.image = "images/your-photo.jpg"
   3. The card and modal will render an <img> automatically

   HOW TO ADD PURCHASE LINKS
   ──────────────────────────
   Replace the "#" in each option's `link` field with the
   real Depop / Vestiaire / Poshmark / etc. URL.

   HOW TO ADD A NEW ITEM
   ──────────────────────────
   Copy any object in the `items` array, change the fields,
   and add it to the array. Categories and collections are
   automatically added to the filter bar if you keep using
   the ones below (Outerwear, Tops, Bottoms, Sets,
   Accessories · Paris Trip, Everyday Finds, Featured).

   ============================================================ */

// ── ITEMS DATA ────────────────────────────────────────────────
const items = [
  {
    id: 1,
    name: "Sage Mongolian Fur Coat",
    category: "Outerwear",
    collection: "Featured",
    image: null,                          // e.g. "images/sage-fur-coat.jpg"
    color: ["#8B9B7A", "#C5D1B8"],
    description:
      "A dreamy sage green coat with plush Mongolian lamb fur collar and cuffs. " +
      "This statement piece is the kind you keep forever — equally at home over " +
      "a midi slip dress or straight-leg jeans.",
    sizes: [
      { size: "XS", options: [
          { platform: "Depop",    price: "$120", link: "#" },
          { platform: "Poshmark", price: "$115", link: "#" },
      ]},
      { size: "S",  options: [
          { platform: "Vestiaire", price: "$145", link: "#" },
          { platform: "Depop",    price: "$130", link: "#" },
      ]},
      { size: "M",  options: [
          { platform: "Poshmark", price: "$110", link: "#" },
      ]},
      { size: "L",  options: [
          { platform: "The RealReal", price: "$160", link: "#" },
      ]},
    ],
  },
  {
    id: 2,
    name: "Dark Olive Longline Coat",
    category: "Outerwear",
    collection: "Paris Trip",
    image: null,
    color: ["#4A4E3A", "#6B7055"],
    description:
      "A sophisticated longline coat in deep olive. Belted at the waist for a " +
      "polished silhouette. Spotted in Paris, worn constantly since.",
    sizes: [
      { size: "XS", options: [
          { platform: "Depop",    price: "$85", link: "#" },
      ]},
      { size: "S",  options: [
          { platform: "Poshmark", price: "$90", link: "#" },
          { platform: "Depop",    price: "$80", link: "#" },
      ]},
      { size: "M",  options: [
          { platform: "Vestiaire", price: "$105", link: "#" },
      ]},
    ],
  },
  {
    id: 3,
    name: "Graphic Heart Sweatshirt",
    category: "Tops",
    collection: "Paris Trip",
    image: null,
    color: ["#2A2825", "#444038"],
    description:
      "Oversized black sweatshirt with a playful graphic print. The effortless " +
      "cool-girl piece that pairs with everything from olive cargos to wide-leg trousers.",
    sizes: [
      { size: "S",  options: [{ platform: "Depop",    price: "$45", link: "#" }] },
      { size: "M",  options: [
          { platform: "Depop",    price: "$42", link: "#" },
          { platform: "Poshmark", price: "$40", link: "#" },
      ]},
      { size: "L",  options: [{ platform: "Poshmark", price: "$38", link: "#" }] },
      { size: "XL", options: [{ platform: "Depop",    price: "$35", link: "#" }] },
    ],
  },
  {
    id: 4,
    name: "Linen Button-Up Jacket",
    category: "Outerwear",
    collection: "Paris Trip",
    image: null,
    color: ["#9E9890", "#B5AFA8"],
    description:
      "A relaxed linen jacket in warm gray — the perfect light layer for " +
      "transitional weather. Slightly oversized with structured shoulders.",
    sizes: [
      { size: "XS", options: [{ platform: "Vestiaire", price: "$75", link: "#" }] },
      { size: "S",  options: [
          { platform: "Depop",    price: "$65", link: "#" },
          { platform: "Poshmark", price: "$60", link: "#" },
      ]},
      { size: "M",  options: [{ platform: "Depop",    price: "$62", link: "#" }] },
    ],
  },
  {
    id: 5,
    name: "Blue Denim Bermuda Shorts",
    category: "Bottoms",
    collection: "Paris Trip",
    image: null,
    color: ["#7A8FA5", "#9EB0C4"],
    description:
      "Classic mid-wash denim in a relaxed bermuda cut. These work with " +
      "absolutely everything — sneakers, loafers, sandals, you name it.",
    sizes: [
      { size: "24", options: [{ platform: "Depop",    price: "$35", link: "#" }] },
      { size: "25", options: [{ platform: "Poshmark", price: "$32", link: "#" }] },
      { size: "26", options: [
          { platform: "Depop",    price: "$30", link: "#" },
          { platform: "Vestiaire", price: "$38", link: "#" },
      ]},
      { size: "27", options: [{ platform: "Poshmark", price: "$28", link: "#" }] },
      { size: "28", options: [{ platform: "Depop",    price: "$28", link: "#" }] },
    ],
  },
  {
    id: 6,
    name: "Black Ribbed Sweater",
    category: "Tops",
    collection: "Everyday Finds",
    image: null,
    color: ["#2A2825", "#3D3A36"],
    description:
      "A slim-fit ribbed knit in classic black. The kind of foundational piece " +
      "every wardrobe needs — perfectly cropped to hit at the hip.",
    sizes: [
      { size: "XS", options: [
          { platform: "Depop",    price: "$28", link: "#" },
          { platform: "Poshmark", price: "$25", link: "#" },
      ]},
      { size: "S",  options: [{ platform: "Depop",    price: "$26", link: "#" }] },
      { size: "M",  options: [
          { platform: "Poshmark", price: "$24", link: "#" },
          { platform: "Depop",    price: "$22", link: "#" },
      ]},
    ],
  },
  {
    id: 7,
    name: "Yellow Pleated Midi Skirt",
    category: "Bottoms",
    collection: "Everyday Finds",
    image: null,
    color: ["#D4B84A", "#E8CC6A"],
    description:
      "A sunshine yellow pleated midi with beautiful drape. Pairs with a simple " +
      "ribbed knit or a boxy cropped shirt for an effortlessly polished look.",
    sizes: [
      { size: "XS", options: [{ platform: "Vestiaire", price: "$55", link: "#" }] },
      { size: "S",  options: [
          { platform: "Depop",    price: "$48", link: "#" },
          { platform: "Poshmark", price: "$45", link: "#" },
      ]},
      { size: "M",  options: [{ platform: "Depop",    price: "$45", link: "#" }] },
      { size: "L",  options: [{ platform: "Poshmark", price: "$42", link: "#" }] },
    ],
  },
  {
    id: 8,
    name: "Gray Wide-Leg Trouser Set",
    category: "Sets",
    collection: "Everyday Finds",
    image: null,
    color: ["#A8A8A4", "#C2C2BF"],
    description:
      "A matching gray set — relaxed short-sleeve top and wide-leg trousers. " +
      "Effortlessly chic for everything from coffee to dinner.",
    sizes: [
      { size: "XS", options: [{ platform: "Depop",    price: "$65", link: "#" }] },
      { size: "S",  options: [
          { platform: "Depop",    price: "$62", link: "#" },
          { platform: "Vestiaire", price: "$70", link: "#" },
      ]},
      { size: "M",  options: [{ platform: "Poshmark", price: "$58", link: "#" }] },
    ],
  },
  {
    id: 9,
    name: "Cream Knit Cardigan",
    category: "Tops",
    collection: "Everyday Finds",
    image: null,
    color: ["#EDE5D8", "#F5EFE5"],
    description:
      "Buttery soft open-front cardigan in warm cream. Layer it over a slip " +
      "dress, button it up solo, or tie it at the waist — it does everything.",
    sizes: [
      { size: "XS", options: [{ platform: "Poshmark", price: "$42", link: "#" }] },
      { size: "S",  options: [
          { platform: "Depop",    price: "$38", link: "#" },
          { platform: "Poshmark", price: "$40", link: "#" },
      ]},
      { size: "M",  options: [{ platform: "Depop",    price: "$35", link: "#" }] },
      { size: "L",  options: [{ platform: "Vestiaire", price: "$45", link: "#" }] },
    ],
  },
  {
    id: 10,
    name: "Blue Striped Oversized Shirt",
    category: "Tops",
    collection: "Everyday Finds",
    image: null,
    color: ["#8BA5C4", "#B0C5DA"],
    description:
      "A classic blue-and-white striped shirt in an oversized, slightly boxy " +
      "cut. The perfect Parisian-inspired staple — tuck it in, tie it at the " +
      "waist, or wear it fully open.",
    sizes: [
      { size: "XS", options: [{ platform: "Depop",    price: "$32", link: "#" }] },
      { size: "S",  options: [
          { platform: "Poshmark", price: "$30", link: "#" },
          { platform: "Depop",    price: "$28", link: "#" },
      ]},
      { size: "M",  options: [
          { platform: "Depop",    price: "$28", link: "#" },
          { platform: "Vestiaire", price: "$35", link: "#" },
      ]},
      { size: "L",  options: [{ platform: "Poshmark", price: "$25", link: "#" }] },
    ],
  },
  {
    id: 11,
    name: "Black Bike Shorts",
    category: "Bottoms",
    collection: "Everyday Finds",
    image: null,
    color: ["#2A2825", "#3A3835"],
    description:
      "High-waisted black bike shorts in smooth compressive fabric. A modern " +
      "wardrobe staple — wear them with an oversized shirt, cropped blazer, " +
      "or a chunky knit.",
    sizes: [
      { size: "XS", options: [
          { platform: "Depop",    price: "$20", link: "#" },
          { platform: "Poshmark", price: "$18", link: "#" },
      ]},
      { size: "S",  options: [{ platform: "Depop",    price: "$18", link: "#" }] },
      { size: "M",  options: [
          { platform: "Poshmark", price: "$16", link: "#" },
          { platform: "Depop",    price: "$18", link: "#" },
      ]},
      { size: "L",  options: [{ platform: "Depop",    price: "$16", link: "#" }] },
    ],
  },
  {
    id: 12,
    name: "Camel Wool Longline Coat",
    category: "Outerwear",
    collection: "Featured",
    image: null,
    color: ["#C4996A", "#D4AE88"],
    description:
      "A timeless camel coat in luxurious wool blend. Longline, relaxed fit " +
      "with a clean lapel collar. The coat you keep for a decade.",
    sizes: [
      { size: "XS", options: [{ platform: "Vestiaire",    price: "$180", link: "#" }] },
      { size: "S",  options: [
          { platform: "The RealReal", price: "$195", link: "#" },
          { platform: "Vestiaire",    price: "$175", link: "#" },
      ]},
      { size: "M",  options: [{ platform: "Depop",        price: "$155", link: "#" }] },
      { size: "L",  options: [{ platform: "Poshmark",     price: "$145", link: "#" }] },
    ],
  },
];

// ── STATE ─────────────────────────────────────────────────────
let currentFilter = "all";
let activeItem    = null;
let activeSize    = null;

// ── HELPERS ───────────────────────────────────────────────────
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

/** Build a gradient string from item color array */
function gradient(item) {
  return `linear-gradient(145deg, ${item.color[0]} 0%, ${item.color[1]} 100%)`;
}

// ── RENDER GRID ───────────────────────────────────────────────
function renderItems(filter = "all") {
  const grid = $("#itemsGrid");

  const list =
    filter === "all"
      ? items
      : items.filter(
          (it) => it.category === filter || it.collection === filter
        );

  if (!list.length) {
    grid.innerHTML = `<div class="empty-state">Nothing here yet — check back soon.</div>`;
    return;
  }

  grid.innerHTML = list.map(cardHTML).join("");

  // click + keyboard on cards
  grid.querySelectorAll(".item-card").forEach((card) => {
    card.addEventListener("click", () => openModal(+card.dataset.id));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(+card.dataset.id);
      }
    });
  });

  // scroll-reveal
  initReveal();
}

function cardHTML(item) {
  const allSizes = item.sizes.map((s) => s.size);

  const imageBlock = item.image
    ? `<img class="card-photo" src="${item.image}" alt="${item.name}" loading="lazy">`
    : `<div class="card-placeholder" style="background:${gradient(item)};">
         <span class="card-placeholder-label">Photo coming soon</span>
       </div>`;

  return `
    <article
      class="item-card"
      data-id="${item.id}"
      role="listitem"
      tabindex="0"
      aria-label="View ${item.name}"
    >
      <div class="card-image-wrap">
        ${imageBlock}
        <div class="card-overlay" aria-hidden="true">
          <span class="card-overlay-cta">Shop by size →</span>
        </div>
      </div>
      <div class="card-info">
        <p class="card-meta">${item.category} · ${item.collection}</p>
        <h3 class="card-name">${item.name}</h3>
        <div class="card-sizes" aria-label="Available sizes">
          ${allSizes.map((sz) => `<span class="size-chip">${sz}</span>`).join("")}
        </div>
      </div>
    </article>`;
}

// ── SCROLL REVEAL ─────────────────────────────────────────────
function initReveal() {
  const cards = $$(".item-card");
  if (!("IntersectionObserver" in window)) {
    cards.forEach((c) => c.classList.add("visible"));
    return;
  }

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  cards.forEach((c, i) => {
    c.style.transitionDelay = `${(i % 4) * 55}ms`;
    obs.observe(c);
  });
}

// ── MODAL ─────────────────────────────────────────────────────
function openModal(id) {
  const item = items.find((it) => it.id === id);
  if (!item) return;

  activeItem = item;
  activeSize = null;

  // Image
  const imgBg = $("#modalImageBg");
  imgBg.style.background = gradient(item);
  if (item.image) {
    imgBg.innerHTML = `<img class="modal-img" src="${item.image}" alt="${item.name}">`;
    imgBg.style.background = "";
  } else {
    imgBg.innerHTML = "";
  }

  // Text
  $("#modalCategory").textContent   = item.category;
  $("#modalCollection").textContent = item.collection;
  $("#modalTitle").textContent      = item.name;
  $("#modalDescription").textContent = item.description;

  // Size buttons
  const sizesEl = $("#modalSizes");
  sizesEl.innerHTML = item.sizes
    .map(
      (s) =>
        `<button class="size-btn" data-size="${s.size}" aria-pressed="false">${s.size}</button>`
    )
    .join("");

  sizesEl.querySelectorAll(".size-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      sizesEl.querySelectorAll(".size-btn").forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
      activeSize = btn.dataset.size;
      renderLinks(activeSize);
    });
  });

  // Default links state
  $("#modalLinks").innerHTML = `<div class="size-prompt">Select a size to see available listings</div>`;

  // Show overlay
  const overlay = $("#modalOverlay");
  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  // Focus trap: focus close button
  setTimeout(() => $("#modalClose").focus(), 50);
}

function renderLinks(size) {
  const sizeData = activeItem.sizes.find((s) => s.size === size);
  const el = $("#modalLinks");

  if (!sizeData || !sizeData.options.length) {
    el.innerHTML = `<div class="no-listings">No listings for this size right now — check back soon.</div>`;
    return;
  }

  el.innerHTML = sizeData.options
    .map(
      (opt) => `
      <a href="${opt.link}" class="shop-link" target="_blank" rel="noopener noreferrer" aria-label="Shop on ${opt.platform} for ${opt.price}">
        <div class="shop-link-left">
          <span class="shop-link-platform">${opt.platform}</span>
          <span class="shop-link-price">${opt.price}</span>
        </div>
        <span class="shop-link-arrow" aria-hidden="true">→</span>
      </a>`
    )
    .join("");
}

function closeModal() {
  const overlay = $("#modalOverlay");
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  activeItem = null;
  activeSize = null;
}

// ── FILTERS ───────────────────────────────────────────────────
function initFilters() {
  $$(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      $$(".filter-btn").forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      currentFilter = btn.dataset.filter;
      renderItems(currentFilter);
    });
  });
}

// ── MOBILE NAV ────────────────────────────────────────────────
function initMobileNav() {
  const toggle = $("#menuToggle");
  const nav    = $("#mobileNav");

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    nav.setAttribute("aria-hidden", String(!open));
  });

  $$(".mobile-nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      nav.setAttribute("aria-hidden", "true");
    });
  });
}

// ── HEADER SCROLL ─────────────────────────────────────────────
function initHeaderScroll() {
  const header = $(".header");
  window.addEventListener(
    "scroll",
    () => {
      header.style.background =
        window.scrollY > 40
          ? "rgba(255, 255, 255, 0.98)"
          : "rgba(255, 255, 255, 0.92)";
    },
    { passive: true }
  );
}

// ── INIT ──────────────────────────────────────────────────────
function init() {
  renderItems();
  initFilters();
  initMobileNav();
  initHeaderScroll();

  // Modal close
  $("#modalClose").addEventListener("click", closeModal);
  $("#modalOverlay").addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeModal();
  });

  // Esc to close
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

document.addEventListener("DOMContentLoaded", init);
