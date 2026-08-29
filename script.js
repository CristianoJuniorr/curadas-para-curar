// Muda o tom de fundo da página conforme o visitante rola a tela,
// simbolizando a jornada da noite (vale) até o alvorecer (cura/luz).

const sky = document.getElementById('sky');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function atualizarCeu() {
  const alturaTotal = document.documentElement.scrollHeight - window.innerHeight;
  const progresso = alturaTotal > 0 ? window.scrollY / alturaTotal : 0;

  // interpola entre "noite" (roxo escuro) e "alvorecer" (dourado suave)
  const corInicio = [34, 26, 46];   // #221a2e
  const corFim = [58, 40, 45];      // um tom mais quente, sem exagero

  const r = Math.round(corInicio[0] + (corFim[0] - corInicio[0]) * progresso);
  const g = Math.round(corInicio[1] + (corFim[1] - corInicio[1]) * progresso);
  const b = Math.round(corInicio[2] + (corFim[2] - corInicio[2]) * progresso);

  sky.style.background = `linear-gradient(180deg,
    rgb(${r}, ${g}, ${b}) 0%,
    rgb(${Math.min(r + 25, 255)}, ${Math.min(g + 15, 255)}, ${Math.min(b + 10, 255)}) 50%,
    rgb(${r}, ${g}, ${b}) 100%)`;
}

if (!prefersReducedMotion) {
  window.addEventListener('scroll', atualizarCeu, { passive: true });
  atualizarCeu();
}
