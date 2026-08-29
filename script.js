/* ============================================================
   CURADAS PARA CURAR — interações
   ============================================================ */

const sky = document.getElementById("sky");
const nav = document.getElementById("nav");
const menu = document.getElementById("menu");
const menuToggle = document.querySelector(".nav__toggle");
const backToTop = document.getElementById("backToTop");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- fundo que acompanha a jornada da página ---------- */

function atualizarCeu() {
  if (!sky) return;

  const alturaTotal = document.documentElement.scrollHeight - window.innerHeight;
  const progresso = alturaTotal > 0 ? Math.min(window.scrollY / alturaTotal, 1) : 0;

  const corInicio = [216, 197, 174];
  const corFim = [232, 220, 203];

  const r = Math.round(corInicio[0] + (corFim[0] - corInicio[0]) * progresso);
  const g = Math.round(corInicio[1] + (corFim[1] - corInicio[1]) * progresso);
  const b = Math.round(corInicio[2] + (corFim[2] - corInicio[2]) * progresso);

  sky.style.background = `
    radial-gradient(circle at ${50 + progresso * 12}% ${12 + progresso * 35}%,
      rgba(255,253,248,.30), transparent 27%),
    linear-gradient(180deg,
      rgb(${r}, ${g}, ${b}) 0%,
      rgb(${Math.min(r + 8, 255)}, ${Math.min(g + 7, 255)}, ${Math.min(b + 5, 255)}) 100%)
  `;
}

function atualizarNav() {
  const scrolled = window.scrollY > 30;
  nav?.classList.toggle("scrolled", scrolled);
  backToTop?.classList.toggle("visible", window.scrollY > 550);
}

let ticking = false;
function onScroll() {
  if (ticking) return;

  window.requestAnimationFrame(() => {
    atualizarNav();
    if (!prefersReducedMotion) atualizarCeu();
    ticking = false;
  });

  ticking = true;
}

window.addEventListener("scroll", onScroll, { passive: true });
atualizarNav();
if (!prefersReducedMotion) atualizarCeu();

/* ---------- menu mobile ---------- */

function fecharMenu() {
  menu?.classList.remove("is-open");
  menuToggle?.setAttribute("aria-expanded", "false");
  menuToggle?.setAttribute("aria-label", "Abrir menu");
  document.body.classList.remove("menu-open");
}

menuToggle?.addEventListener("click", () => {
  const aberto = menuToggle.getAttribute("aria-expanded") === "true";

  menuToggle.setAttribute("aria-expanded", String(!aberto));
  menuToggle.setAttribute("aria-label", aberto ? "Abrir menu" : "Fechar menu");
  menu?.classList.toggle("is-open", !aberto);
  document.body.classList.toggle("menu-open", !aberto);
});

document.querySelectorAll(".nav__links a").forEach((link) => {
  link.addEventListener("click", fecharMenu);
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 720) fecharMenu();
});

/* ---------- animação de entrada ---------- */

const reveals = document.querySelectorAll(".reveal");

if (prefersReducedMotion) {
  reveals.forEach((element) => element.classList.add("is-visible"));
} else if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  reveals.forEach((element, index) => {
    element.style.transitionDelay = `${Math.min((index % 5) * 60, 240)}ms`;
    observer.observe(element);
  });
} else {
  reveals.forEach((element) => element.classList.add("is-visible"));
}

/* ---------- seção ativa no menu ---------- */

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav__links a[href^='#']");

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`
          );
        });
      });
    },
    { rootMargin: "-35% 0px -55% 0px" }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

/* ---------- voltar ao topo ---------- */

backToTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
});

/* ---------- galeria / lightbox ---------- */

const galleryButtons = [...document.querySelectorAll(".gallery-button")];
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

let currentImage = 0;
let lastFocusedElement = null;

function abrirLightbox(index) {
  const button = galleryButtons[index];
  const image = button?.querySelector("img");
  const caption = button?.closest("figure")?.querySelector("figcaption");

  if (!image || !lightbox || !lightboxImage) return;

  currentImage = index;
  lastFocusedElement = document.activeElement;

  lightboxImage.src = image.currentSrc || image.src;
  lightboxImage.alt = image.alt;
  lightboxCaption.textContent = caption?.textContent?.trim() || "";

  lightbox.hidden = false;
  document.body.classList.add("menu-open");
  lightboxClose?.focus();
}

function fecharLightbox() {
  if (!lightbox) return;

  lightbox.hidden = true;
  lightboxImage?.removeAttribute("src");
  document.body.classList.remove("menu-open");
  lastFocusedElement?.focus?.();
}

function trocarImagem(direcao) {
  if (!galleryButtons.length) return;
  currentImage = (currentImage + direcao + galleryButtons.length) % galleryButtons.length;
  abrirLightbox(currentImage);
}

galleryButtons.forEach((button, index) => {
  button.addEventListener("click", () => abrirLightbox(index));
});

lightboxClose?.addEventListener("click", fecharLightbox);
lightboxPrev?.addEventListener("click", () => trocarImagem(-1));
lightboxNext?.addEventListener("click", () => trocarImagem(1));

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) fecharLightbox();
});

document.addEventListener("keydown", (event) => {
  if (!lightbox || lightbox.hidden) return;

  if (event.key === "Escape") fecharLightbox();
  if (event.key === "ArrowLeft") trocarImagem(-1);
  if (event.key === "ArrowRight") trocarImagem(1);
});
