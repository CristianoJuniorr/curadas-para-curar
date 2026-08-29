# Curadas para Curar — site

Site institucional da conferência anual **Curadas para Curar**, da equipe **Amigas do Céu / AD Comadesma Área 41**, em Nova Olinda — TO.

O projeto é estático e pode ser publicado gratuitamente no **GitHub Pages**.

## Estrutura

- `index.html` — conteúdo, seções, links e acessibilidade.
- `style.css` — identidade visual, responsividade e animações.
- `script.js` — menu mobile, fundo dinâmico, animações de entrada, navegação ativa, botão de voltar ao topo e galeria com lightbox.
- `images/` — imagens do evento.
- `videos/` — vídeos opcionais.

## O que já foi melhorado

- Layout visual mais editorial e profissional.
- Hero com identidade mais forte.
- Menu responsivo para celular.
- Animações de entrada com `IntersectionObserver`.
- Navegação que identifica a seção atual.
- Galeria com ampliação, navegação por setas e teclado.
- Seção de vídeos preparada para arquivos `.mp4`.
- Bloco de data e local com destaque visual.
- FAQ com `<details>`, sem depender de bibliotecas.
- Botão flutuante para voltar ao topo.
- Meta tags para compartilhamento e SEO básico.
- Respeito à preferência `prefers-reduced-motion`.
- Estrutura sem frameworks, ideal para GitHub Pages.

## Como adicionar fotos

Coloque as imagens dentro de `images/` e atualize os blocos da seção `#galeria` no `index.html`.

Cada item usa:

```html
<figure class="galeria__item">
  <button class="gallery-button" type="button">
    <img src="images/nova-foto.jpg" alt="Descrição da foto" loading="lazy">
    <span class="gallery-button__icon" aria-hidden="true">+</span>
  </button>
  <figcaption><span>08</span> Descrição</figcaption>
</figure>
```

## Como adicionar vídeos

Crie a pasta `videos/`, coloque o `.mp4` e substitua um dos placeholders da seção `#videos` por:

```html
<div class="video-card__media">
  <video controls preload="metadata" playsinline poster="images/capa.jpg">
    <source src="videos/meu-video.mp4" type="video/mp4">
    Seu navegador não suporta vídeo.
  </video>
</div>
```

Para GitHub Pages, prefira vídeos comprimidos e, quando possível, arquivos com tamanho reduzido para não deixar a página pesada.

## Atualização de cada edição

No `index.html`, atualize principalmente:

1. Tema e subtítulo da edição.
2. Número da edição.
3. Data.
4. Local.
5. Programação.
6. Fotos e vídeos.
7. Links oficiais de Instagram/WhatsApp.
8. Perguntas frequentes, caso as informações mudem.

## Publicação no GitHub Pages

1. Faça commit dos arquivos no repositório.
2. No GitHub, abra **Settings → Pages**.
3. Em **Build and deployment**, selecione **Deploy from a branch**.
4. Escolha a branch `main` e a pasta `/root`.
5. Salve e aguarde a publicação.

## Observação importante

A página usa os dados que estavam no projeto original: **25 e 26 de outubro**, **6ª edição** e **AD Comadesma Área 41 — Nova Olinda, TO**. Se a data, edição ou local forem alterados oficialmente, atualize esses campos antes de publicar.
