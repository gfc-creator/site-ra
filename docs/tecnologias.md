# Levantamento de tecnologias

**Conferido em 2026-11-18**, nos registros oficiais dos pacotes e na documentação
de cada projeto. Versões mudam: reconferir ao iniciar a Fase 2.

Esta é uma **recomendação para um site institucional de conteúdo**. Loja, login ou
área de cliente (pergunta P4) exigem rever a pilha.

## 1. Pilha recomendada

| Camada | Escolha | Versão | Por quê |
| --- | --- | --- | --- |
| Ambiente | Node.js LTS | 24.22.3 | Suporte até 30/04/2028; atende a todas as ferramentas abaixo |
| Pacotes | npm | o que vem com o Node | Uma ferramenta a menos para manter |
| Framework | Astro | 7.4.12 | Feito para sites de conteúdo; gera HTML estático e só envia JavaScript onde for preciso |
| Empacotador | Vite | 8.x (vem com o Astro) | Padrão do Astro 7 |
| Linguagem | TypeScript | **6.0.3** | Ver a atenção em §2 |
| Estilo | Tailwind CSS, com `@tailwindcss/vite` | 4.3.5 | Os tokens da marca viram variáveis CSS |
| Tokens da marca | Formato DTCG 2025.10, com Style Dictionary | 5.8.0 | Primeira versão estável do formato; a marca fica numa fonte única |
| Fontes | API de fontes do Astro | incluída | Serve as fontes do próprio site, sem chamadas a terceiros |
| Imagens | `astro:assets`, com sharp | 0.35.5 | AVIF/WebP e tamanhos corretos na compilação |
| Conteúdo | Coleções do Astro, em Markdown no repositório | incluída | Sem banco de dados e sem mensalidade |
| Animação | CSS e View Transitions | nativo | Sem peso extra; respeita `prefers-reduced-motion` |
| Formatação | Prettier, com `prettier-plugin-astro` | 3.10.1 / 1.1.2 | Padrão único de código |
| Verificação | `astro check` (`@astrojs/check`) | 0.9.12 | Erros de tipo e de modelo |
| Testes | Playwright, com `@axe-core/playwright` | 1.65.1 / 4.14.0 | Navegação real e acessibilidade automática |
| Desempenho | Lighthouse CI (`@lhci/cli`) | 0.16.1 | Barra o PR que piora as metas |
| Hospedagem | Cloudflare Workers (arquivos estáticos), com Wrangler | 4.164.0 | Requisições de arquivos estáticos são gratuitas |
| Métricas de visita | Cloudflare Web Analytics | serviço | Gratuito, sem cookies e sem identificar o visitante |
| Antirrobô (só com formulário) | Cloudflare Turnstile | serviço | Plano gratuito sem limite de desafios |
| Integração contínua | GitHub Actions | serviço | Roda verificação e testes em cada PR |

## 2. Pontos de atenção

- **TypeScript 7 fica de fora por enquanto.** A versão mais recente é a 7.0.2, mas o
  `@astrojs/check` 0.9.12 aceita apenas `^5.0.0 || ^6.0.0`. Usar a 6.0.3 até haver suporte.
- **Node.js:** o Astro 7.4 exige 22.23.4 ou superior. O Node 22 perde suporte em
  30/04/2027, por isso não é a escolha. O Node 26 virou LTS em 28/10/2026 e vai até
  30/04/2029; é o próximo passo natural, depois de amadurecer.
- **Cloudflare Pages não é o caminho para projeto novo.** A própria Cloudflare orienta
  começar novos projetos em Workers. Site estático não precisa do adaptador
  `@astrojs/cloudflare`.
- **Beta:** o adaptador da Cloudflare tem a versão 15 em beta. Não usar.
- **Dependência de um fornecedor:** a empresa do Astro entrou na Cloudflare em
  16/01/2026. O projeto continua de código aberto (MIT) e declara suportar outras
  hospedagens. Como a saída é HTML estático, a troca de hospedagem continua simples (RNF-09).
- **Acessibilidade automática não basta.** O axe encontra só parte dos problemas; o
  teste com teclado e leitor de tela continua manual.

## 3. Alternativas avaliadas

| Alternativa | Versão | Quando escolher |
| --- | --- | --- |
| Next.js, com React | 16.4.6 / 19.3.1 | Aplicação com login, painel ou muita interação |
| SvelteKit | 3.3.1 | Aplicação interativa, com equipe que conheça Svelte |
| Nuxt, com Vue | 4.6.4 / 3.5.45 | Equipe que já trabalhe com Vue |
| Biome | 2.6.8 | Substituir o Prettier por uma ferramenta só, se o suporte a `.astro` atender |
| Motion / GSAP | 14.14.0 / 3.15.1 | Animação que o CSS não resolva |
| pnpm | 12.22.0 | Vários pacotes no mesmo repositório |
| GitHub Pages, Netlify ou Vercel | serviço | Outra hospedagem, se a Cloudflare não atender |

## 4. Edição de conteúdo

Depende da pergunta P5. Sem necessidade de painel, o conteúdo fica em Markdown.

| Opção | Versão | Observação |
| --- | --- | --- |
| Sem painel | — | Mais simples e sem custo; a edição passa pelo repositório |
| Decap CMS | 3.18.0 | Painel gratuito que grava no repositório |
| Sanity | 6.24.0 | Serviço externo, com planos próprios |
| Keystatic | 0.6.10 | Ainda antes da versão 1.0: não atende a RNF-01 |

## 5. Identidade visual

| Uso | Formato ou ferramenta |
| --- | --- |
| Logo | SVG vetorial como original; PNG e PDF derivados |
| Cores | Tokens DTCG; contraste mínimo de 4,5:1 em texto normal (WCAG AA) |
| Tipografia | Fontes variáveis em WOFF2, com licença que permita uso na web |
| Ícones do site | SVG, favicon e ícones para celular |

## 6. Fontes

- Versões: [npm](https://www.npmjs.com/) e [endoflife.date](https://endoflife.date/nodejs)
- [Atualização para o Astro 7](https://docs.astro.build/en/guides/upgrade-to/v7/) ·
  [Astro na Cloudflare](https://docs.astro.build/en/guides/deploy/cloudflare/) ·
  [API de fontes](https://docs.astro.build/en/guides/fonts/) ·
  [Astro entra na Cloudflare](https://astro.build/blog/joining-cloudflare/)
- [Cloudflare Pages](https://developers.cloudflare.com/pages/) ·
  [Migração de Pages para Workers](https://developers.cloudflare.com/workers/static-assets/migration-guides/migrate-from-pages/) ·
  [Web Analytics](https://www.cloudflare.com/web-analytics/) ·
  [Turnstile](https://developers.cloudflare.com/turnstile/plans/)
- [Design Tokens 2025.10](https://www.designtokens.org/tr/2025.10/)
- [WCAG 2.2](https://www.w3.org/TR/WCAG22/) · [Core Web Vitals](https://web.dev/articles/vitals)
- [Lei 13.146/2015](https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm) ·
  [Guia de cookies da ANPD](https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia-orientativo-cookies-e-protecao-de-dados-pessoais.pdf/@@display-file/file)
