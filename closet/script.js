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

// ── INIT ──────────────────────────────────────────────────────
function init() {
  renderItems();
  initFilters();
  initMobileNav();
  initHeaderScroll();
}

document.addEventListener("DOMContentLoaded", init);
