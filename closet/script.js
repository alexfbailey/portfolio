/* ============================================================
   ALEX'S FINDS — script.js  (items data lives in data.js)
   ============================================================ */

// ── STATE ─────────────────────────────────────────────────────
let currentFilter = "all";

// ── HELPERS ───────────────────────────────────────────────────
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

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

  // click + keyboard: navigate to item page
  grid.querySelectorAll(".item-card").forEach((card) => {
    card.addEventListener("click", () => {
      window.location.href = `item.html?id=${card.dataset.id}`;
    });
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        window.location.href = `item.html?id=${card.dataset.id}`;
      }
    });
  });

  initReveal();
}

function cardHTML(item) {
  const imageBlock = item.image
    ? `<img class="card-photo" src="${item.image}" alt="${item.name}" loading="lazy">`
    : `<div class="card-placeholder">
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
      </div>
      <div class="card-info">
        <p class="card-meta">${item.category}</p>
        <h3 class="card-name">${item.name}</h3>
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

// ── FILTERS ───────────────────────────────────────────────────
function initFilters() {
  $$(".sidebar-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      $$(".sidebar-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
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

// ── OUTFIT FEED ───────────────────────────────────────────────
const heartSVG = `<svg class="outfit-item-heart" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
</svg>`;

function buildOutfitPost(post) {
  const article = document.createElement("article");
  article.className = "outfit-post";

  const photoWrap = document.createElement("div");
  photoWrap.className = "outfit-photo-wrap";
  if (post.outfitPhoto) {
    const img = document.createElement("img");
    img.className = "outfit-photo";
    img.src = post.outfitPhoto;
    img.alt = "Outfit";
    img.loading = "lazy";
    photoWrap.appendChild(img);
  } else {
    const ph = document.createElement("div");
    ph.className = "outfit-photo-placeholder";
    photoWrap.appendChild(ph);
  }

  const panel = document.createElement("div");
  panel.className = "outfit-items-panel";
  const grid = document.createElement("div");
  grid.className = "outfit-items-grid";

  post.items.slice(0, 4).forEach((item) => {
    const a = document.createElement("a");
    a.className = "outfit-item-card";
    a.href = item.link || "#";
    if (item.link && item.link !== "#") { a.target = "_blank"; a.rel = "noopener"; }
    const wrapClass = item.image ? "outfit-item-img-wrap" : "outfit-item-img-wrap empty";
    a.innerHTML = `
      <div class="${wrapClass}">
        ${item.image ? `<img class="outfit-item-img" src="${item.image}" alt="${item.brand}" loading="lazy">` : ""}
        ${heartSVG}
      </div>
      <div class="outfit-item-info">
        <span class="outfit-item-brand">${item.brand}</span>
        <span class="outfit-item-price">${item.price}</span>
      </div>`;
    grid.appendChild(a);
  });

  panel.appendChild(grid);
  article.appendChild(photoWrap);
  article.appendChild(panel);
  return article;
}

function renderFeed() {
  const feed = $("#outfitsFeed");
  if (!feed || feed.hasChildNodes()) return;
  outfitPosts.forEach((post) => feed.appendChild(buildOutfitPost(post)));
}

// ── VIEW TOGGLE ───────────────────────────────────────────────
function initViewToggle() {
  const tabs     = $$(".view-tab");
  const shopView = $("#shopView");
  const outfitsView = $("#outfitsView");
  const sidebar  = $(".sidebar");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      if (tab.dataset.view === "outfits") {
        shopView.classList.add("view-hidden");
        outfitsView.classList.remove("view-hidden");
        if (sidebar) sidebar.classList.add("view-hidden");
        renderFeed();
      } else {
        outfitsView.classList.add("view-hidden");
        shopView.classList.remove("view-hidden");
        if (sidebar) sidebar.classList.remove("view-hidden");
      }
    });
  });
}

// ── INIT ──────────────────────────────────────────────────────
function init() {
  renderItems();
  initFilters();
  initMobileNav();
  initHeaderScroll();
  initViewToggle();
}

document.addEventListener("DOMContentLoaded", init);
