import { instances } from "./rive.js";

// ============================================================
//  Masonry — pack cards tightly while keeping each canvas ratio
// ============================================================

export function layoutMasonry() {
  const grid = document.querySelector(".lessons-grid");
  if (!grid) return;
  const cs = getComputedStyle(grid);
  const rowH = parseFloat(cs.gridAutoRows) || 8;
  const gap = parseFloat(cs.rowGap) || 0;
  grid.querySelectorAll(".lesson-card").forEach((card) => {
    const canvas = card.querySelector(".card-canvas");
    const body = card.querySelector(".card-body");
    if (!canvas || !body) return;
    const h =
      canvas.getBoundingClientRect().height +
      body.getBoundingClientRect().height +
      2; /* card top + bottom border */
    const span = Math.max(1, Math.ceil((h + gap) / (rowH + gap)));
    card.style.gridRowEnd = "span " + span;
  });
}

layoutMasonry();
window.addEventListener("load", layoutMasonry);
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(layoutMasonry);
}

// Keep every drawing surface crisp + repack on resize / orientation change
let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    instances.forEach((i) => i.resizeDrawingSurfaceToCanvas());
    layoutMasonry();
  }, 120);
});

// ============================================================
//  Scroll-reveal for cards & heading
// ============================================================
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-visible");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = (i % 4) * 70 + "ms";
  io.observe(el);
});
