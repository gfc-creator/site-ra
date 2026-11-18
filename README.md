# site-ra

Identidade visual e site da **RA Tech Energia**.

Site em construção, com Astro, Tailwind CSS e tokens de marca. Comece por:

| Documento | Para quê |
| --- | --- |
| [`CLAUDE.md`](CLAUDE.md) | Controle do projeto: parâmetros, convenções e estado atual |
| [`docs/visao-geral.md`](docs/visao-geral.md) | Objetivo e perguntas em aberto |
| [`docs/analise-kit-inicial.md`](docs/analise-kit-inicial.md) | Análise do kit entregue pelo dono |
| [`docs/empresa.md`](docs/empresa.md) | Dados oficiais da empresa que podem ser publicados |
| [`docs/hospedagem-e-dominio.md`](docs/hospedagem-e-dominio.md) | Ambiente de testes, domínios e consulta de marca |
| [`docs/requisitos.md`](docs/requisitos.md) | Requisitos numerados |
| [`docs/tecnologias.md`](docs/tecnologias.md) | Levantamento das tecnologias, com versões e fontes |
| [`docs/decisoes.md`](docs/decisoes.md) | Registro das decisões |
| [`docs/identidade-visual.md`](docs/identidade-visual.md) | Processo e entregas da marca |
| [`docs/roadmap.md`](docs/roadmap.md) | Fases do projeto |

## Rodar o site

Requer Node.js 24 (`.nvmrc`).

```bash
npm ci
npm run dev            # site local em http://localhost:4321
npm run check          # verificação de tipos e modelos
npm run format:check   # padrão de código
npm test               # navegação, acessibilidade e celular
npm run tokens         # gera src/styles/tokens.css a partir de tokens/marca.tokens.json
```

Cores da marca: altere `tokens/marca.tokens.json` e rode `npm run tokens`. Dados da empresa
ficam em `src/lib/empresa.ts`, e as premissas do simulador em `src/lib/simulador.ts`.
