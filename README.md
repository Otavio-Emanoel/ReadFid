# ReadFid

Leitor de HQs/PDF feito com Next.js 15, React 19, Tailwind e shadcn/ui. Inclui navegação por páginas, rolagem vertical, tema escuro e otimizações de pré-carregamento de páginas usando `@react-pdf-viewer`.

## Tecnologias
- Next.js (App Router)
- React 19
- Tailwind CSS + shadcn/ui
- @react-pdf-viewer/core e plugins (default-layout, scroll-mode)

## Pré-requisitos
- Node.js 20+
- pnpm (recomendado)

## Instalação
```sh
pnpm install
# copie o worker do pdf.js para servir estaticamente
mkdir -p public/pdfjs
cp node_modules/pdfjs-dist/build/pdf.worker.min.mjs public/pdfjs/
```

## Scripts
```sh
pnpm dev        # Ambiente de desenvolvimento
pnpm build      # Build de produção
pnpm start      # Servir build de produção
```

## Funcionalidades
- Leitura em modo rolagem vertical (padrão)
- Tema dark
- Ajuste de zoom automático (PageFit)
- Pré-carregamento de páginas (prefetch progressivo + por clique)
- Ícone do site configurado

## Estrutura
```
app/
  read/[id]/page.tsx      # Página do leitor
components/
  PdfReaderClient.tsx     # Viewer cliente (no-SSR) com plugins e prefetch
public/
  pdfjs/pdf.worker.min.mjs# Worker do pdf.js (obrigatório)
  icon.png                # Ícone
  icon-512.png            # Ícone 512x
  apple-touch-icon.png    # Ícone iOS
```

## Imagens
### Ícone
<img src="/public/icon-512.png" alt="ReadFid Icon" width="128" height="128" />

### Tela inicial
<img src="/public/preview/hero.png" alt="Tela Inicial" width="600" />

### Tela de Explorar
<img src="/public/preview/explore.png" alt="Tela de explorar" width="600" />

### Tela da HQ
<img src="/public/preview/book.png" alt="Tela de Livro" width="600" />

## Observações
- Garanta que os PDFs estejam em `public/HQs/` conforme o `pdfUrl` usado.
- O servidor de arquivos precisa suportar cabeçalhos Range para streaming eficiente.
- Caso veja aviso de versão do worker, remova workers antigos e copie novamente a partir de `pdfjs-dist`.
