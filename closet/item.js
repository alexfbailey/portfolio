/* ============================================================
   ALEX'S FINDS — item.js
   Renders the item detail page. Reads ?id= from the URL and
   looks up the item in the shared `items` array from data.js.
   ============================================================ */

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

let activeItem = null;

// ── RENDER PAGE ───────────────────────────────────────────────
function renderPage(item) {
  activeItem = item;

  const imageBlock = item.image
    ? `<img class="item-page-photo" src="${item.image}" alt="${item.name}">`
    : `<div class="card-placeholder item-page-placeholder">
         <span class="card-placeholder-label">Photo coming soon</span>
       </div>`;

  $("#itemPage").innerHTML = `
    <div class="item-page-inner">
      <a href="index.html" class="item-page-back">← Back to closet</a>
      <div class="item-page-layout">

        <div class="item-page-image">
          ${imageBlock}
        </div>

        <div class="item-page-details">
          <div class="modal-meta">
            <span class="modal-category">${item.category}</span>
            <span class="modal-collection">${item.collection}</span>
          </div>
          <h1 class="modal-title">${item.name}</h1>
          <p class="modal-description">${item.description}</p>

          <div class="modal-sizes-section">
            <p class="sizes-label">Select your size</p>
            <div class="sizes-row" id="sizesRow" role="group" aria-label="Size selector">
              ${item.sizes
                .map(
                  (s) =>
                    `<button class="size-btn" data-size="${s.size}" aria-pressed="false">${s.size}</button>`
                )
                .join("")}
            </div>
          </div>

          <div class="modal-links-section">
            <p class="sizes-label">Available listings</p>
            <div class="modal-links" id="shopLinks">
              <div class="size-prompt">Select a size to see available listings</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  `;

  // Size button events
  $$("#sizesRow .size-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      $$("#sizesRow .size-btn").forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-pressed", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
      renderLinks(btn.dataset.size);
    });
  });
}

function renderLinks(size) {
  const sizeData = activeItem.sizes.find((s) => s.size === size);
  const el = $("#shopLinks");

  if (!sizeData || !sizeData.options.length) {
    el.innerHTML = `<div class="no-listings">No listings for this size right now — check back soon.</div>`;
    return;
  }

  el.innerHTML = sizeData.options
    .map(
      (opt) => `
      <a href="${opt.link}" class="shop-link" target="_blank" rel="noopener noreferrer"
         aria-label="Shop on ${opt.platform} for ${opt.price}">
        <div class="shop-link-left">
          <span class="shop-link-platform">${opt.platform}</span>
          <span class="shop-link-price">${opt.price}</span>
        </div>
        <span class="shop-link-arrow" aria-hidden="true">→</span>
      </a>`
    )
    .join("");
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
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id     = +params.get("id");
  const item   = items.find((it) => it.id === id);

  if (!item) {
    $("#itemPage").innerHTML = `
      <div class="item-page-inner">
        <a href="index.html" class="item-page-back">← Back to closet</a>
        <p style="margin-top:3rem; color:var(--charcoal-50);">Item not found.</p>
      </div>`;
    return;
  }

  document.title = `${item.name} — Alex's Finds`;
  renderPage(item);
  initMobileNav();
  initHeaderScroll();
});
