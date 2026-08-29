# Site — Curadas para Curar

Site de apresentação da conferência anual **Curadas para Curar** (Comadesma —
Nova Olinda, TO). Feito para ser hospedado gratuitamente no **GitHub Pages**.

## Arquivos

- `index.html` — conteúdo e textos do site
- `style.css` — cores, fontes e visual
- `script.js` — efeito de fundo (a página muda de tom conforme rola)
- `images/` — fotos usadas na galeria
- `videos/` — arquivos de vídeo usados na seção "Vídeos"

## O que trocar a cada edição

Abra o `index.html` num editor de texto (pode ser o próprio site do GitHub) e
procure pelos comentários `<!-- TROQUE AQUI -->`:

1. **Tema do ano** — título e subtítulo lá no topo (seção Hero)
2. **Galeria** — dentro de `<section class="galeria">`, duplique um bloco
   `<figure class="galeria__item">` para cada foto nova e troque o `src` pelo
   nome do arquivo (que deve estar dentro da pasta `images/`)
3. **Vídeos** — dentro de `<section class="videos">`. Para trocar um vídeo,
   coloque o novo arquivo `.mp4` na pasta `videos/` e troque o nome no `src`.
   Dica: se o arquivo vier do Instagram/celular, ele costuma vir bem pesado —
   vale comprimir antes de subir (posso ajudar com isso quando precisar)
4. **Data, edição e local** — dentro de `<section class="info">`

Não é necessário mexer no `style.css` nem no `script.js` para atualizar o
conteúdo de cada edição.

## Como publicar no GitHub Pages

1. Crie um repositório novo no GitHub (ex: `curadas-para-curar`)
2. Envie estes arquivos para o repositório
3. Vá em **Settings → Pages**
4. Em "Branch", selecione `main` e a pasta `/root`, depois clique em **Save**
5. Em alguns minutos o site estará no ar em:
   `https://SEU-USUARIO.github.io/curadas-para-curar/`

Se quiser, eu ajudo a fazer esse envio e a configuração do zero.
