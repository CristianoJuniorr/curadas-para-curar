// Dá um leve movimento de tom ao fundo conforme o visitante rola a tela,
// mantendo a paleta bege oficial do evento.

const sky = document.getElementById('sky');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function atualizarCeu() {
  const alturaTotal = document.documentElement.scrollHeight - window.innerHeight;
  const progresso = alturaTotal > 0 ? window.scrollY / alturaTotal : 0;

  const corInicio = [217, 200, 180]; // #d9c8b4
  const corFim = [227, 214, 195];    // #e3d6c3

  const r = Math.round(corInicio[0] + (corFim[0] - corInicio[0]) * progresso);
  const g = Math.round(corInicio[1] + (corFim[1] - corInicio[1]) * progresso);
  const b = Math.round(corInicio[2] + (corFim[2] - corInicio[2]) * progresso);

  sky.style.background = `linear-gradient(180deg,
    rgb(${r}, ${g}, ${b}) 0%,
    rgb(${Math.min(r + 10, 255)}, ${Math.min(g + 8, 255)}, ${Math.min(b + 6, 255)}) 50%,
    rgb(${r}, ${g}, ${b}) 100%)`;
}

if (!prefersReducedMotion) {
  window.addEventListener('scroll', atualizarCeu, { passive: true });
  atualizarCeu();
}
