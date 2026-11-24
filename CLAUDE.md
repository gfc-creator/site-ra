# CLAUDE.md — site-ra

Controle de requisitos e parâmetros do projeto. Carregado automaticamente pelo
Claude Code em toda sessão nesta pasta. O detalhe fica em `docs/`; não duplicar aqui.

## Objetivo

Criar a **identidade visual** e o **site** da RA Tech Energia.

## Parâmetros

| Parâmetro | Valor | Origem |
| --- | --- | --- |
| Entregas | Identidade visual e site | Definido pelo dono (2026-11-18) |
| Repositório | `gfc-creator/site-ra`, público | Definido pelo dono |
| Tecnologias | Atuais e estáveis | Definido pelo dono (2026-11-18) |
| Documentação | Desde o início, como no projeto Porteira | Definido pelo dono (2026-11-18) |
| Empresa | AF Carneiro Engenharia e Empreendimentos Sustentáveis Ltda | `docs/empresa.md` |
| Marca do site | **RA Tech Energia**, sempre com o nome completo | Definido pelo dono (2026-11-18) |
| Frentes do site | TI/Cloud e energia solar | Definido pelo dono (2026-11-18) |
| Domínio | `ratechenergia.com.br`, registrado pelo dono e no ar | `docs/hospedagem-e-dominio.md` |
| Páginas e idioma | **A definir** | `docs/visao-geral.md` §3 |
| Pilha técnica | Aprovada como referência inicial | `docs/decisoes.md` |

## Estado atual

Site no ar em `https://ratechenergia.com.br`, na Cloudflare, liberado para a busca desde
2026-11-24 (D-30). Falta o dono configurar `www` e Always Use HTTPS no painel.

Comandos: `npm run dev`, `npm run check`, `npm run format:check` e `npm test`.

## Convenções de trabalho

**Toda alteração vai por branch + Pull Request**, com alvo na `develop`. Nunca
commitar direto na `main`, nunca fazer merge e nunca aprovar o próprio PR: o dono
revisa e faz o merge pessoalmente.

- `main` é a branch estável; `develop` é integração.
- Identidade de commit: `gfc-creator <292458920+gfc-creator@users.noreply.github.com>`.
- `git add` com arquivos explícitos; nunca `git add -A`.
- Antes de enviar commit a um PR, conferir se ele ainda está aberto.
- **Todo PR que muda comportamento ou decisão atualiza o documento correspondente.**
- Ao afirmar um requisito, distinguir o que foi **definido pelo dono** do que é
  **premissa a validar**. Sugestão não vira requisito nem pendência sem o "sim" do dono.
- Versões e afirmações técnicas são conferidas na fonte oficial, com data.
- O repositório é público: nada de senha, chave, e-mail pessoal ou dado de cliente.
  **Os PDFs da empresa em `docs/` têm dados pessoais e nunca entram no git.**
- Textos em português, na norma culta.

## Critérios que atravessam o projeto

Metas em `docs/requisitos.md`: acessibilidade (WCAG 2.2 AA e art. 63 da Lei
13.146/2015), desempenho (Core Web Vitals) e privacidade (LGPD).
