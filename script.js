/* ============================================================
   Riwaaz Rentals – site settings
   👉 Paste your Google Business Profile link below.
      (Google Maps → your business → Share → Copy link,
       e.g. https://g.page/r/XXXXXXXX or https://maps.app.goo.gl/XXXX)
   👉 Paste your "Ask for reviews" link in GOOGLE_REVIEW_URL
      (Business Profile → Ask for reviews → Copy link)
   ============================================================ */
const GOOGLE_PROFILE_URL = "https://www.google.com/maps/search/?api=1&query=Riwaaz+Rentals+Kashida+Ghatshila";
const GOOGLE_REVIEW_URL  = "";           // leave empty to use the profile link
const WHATSAPP_NUMBER    = "919608775136";

/* ---------- Google Business Profile links ---------- */
document.querySelectorAll(".gbp-link").forEach(a => a.href = GOOGLE_PROFILE_URL);
document.querySelectorAll(".gbp-review").forEach(a => a.href = GOOGLE_REVIEW_URL || GOOGLE_PROFILE_URL);

/* ---------- WhatsApp enquiry links per product ---------- */
document.querySelectorAll(".enquire, .occ").forEach(a => {
  const msg = `Hello Riwaaz Rentals, I am interested in renting: ${a.dataset.item}. Please share designs and rent details.`;
  a.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  a.target = "_blank";
  a.rel = "noopener";
});

/* ---------- Mobile menu ---------- */
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  menu.classList.toggle("open");
});
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  burger.classList.remove("open");
  menu.classList.remove("open");
}));

/* ---------- Nav shadow on scroll ---------- */
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 40), { passive: true });

/* ---------- Tabs ---------- */
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));
    tab.classList.add("active");
    const panel = document.getElementById(tab.dataset.tab);
    panel.classList.add("active");
    panel.querySelectorAll(".reveal").forEach(el => el.classList.add("visible"));
  });
});

/* ---------- Reveal on scroll ---------- */
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

/* ---------- Gallery lightbox ---------- */
const lb = document.getElementById("lightbox");
const lbImg = lb.querySelector("img");
document.querySelectorAll(".masonry img").forEach(img => {
  img.addEventListener("click", () => {
    lbImg.src = img.src;
    lbImg.alt = img.alt;
    lb.classList.add("open");
    lb.setAttribute("aria-hidden", "false");
  });
});
const closeLb = () => { lb.classList.remove("open"); lb.setAttribute("aria-hidden", "true"); };
lb.addEventListener("click", e => { if (e.target !== lbImg) closeLb(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") closeLb(); });

/* ---------- Footer year ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
