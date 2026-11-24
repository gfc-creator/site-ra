# Dicas de energia

Página `/dicas/`, com explicações curtas sobre como funciona a energia solar e como economizar
energia. Pedido do dono em 2026-11-23, a partir de vídeos de redes sociais usados como referência.

## O que há na página

- **O caminho da energia solar:** diagrama do painel até a rede.
- **Dicas por tema:** "Como funciona" e "Economia de energia", cada uma com página própria, boa
  para compartilhar no WhatsApp e nas redes.
- **Vídeos:** seção com todos os vídeos das dicas, cada um com o link para a dica. Pedido do
  dono em 2026-11-24, porque os vídeos ficavam escondidos dentro das dicas.
- **Calculadora de aparelhos:** potência × horas × dias × preço do kWh, com a tarifa da Equatorial
  Maranhão usada no simulador (`src/lib/simulador.ts`).

A página inicial mostra três dicas em destaque.

## Como incluir uma dica

1. Crie um arquivo em `src/content/dicas/`, com o nome que vai no endereço, por exemplo
   `bandeiras-tarifarias.md`.
2. Preencha o cabeçalho e escreva o texto em Markdown:

```md
---
titulo: O que são as bandeiras tarifárias?
resumo: Uma frase que aparece no cartão da dica.
tema: Economia de energia
ordem: 9
atualizadoEm: 2026-11-23
fontes:
  - nome: ANEEL
    url: https://www.gov.br/aneel/
---

Texto da dica.
```

`tema` é "Como funciona" ou "Economia de energia". `ordem` define a posição na lista.

### Vídeos

Uma dica pode ter vídeos do Facebook, do Instagram ou do YouTube, no cabeçalho:

```md
videos:
  - plataforma: facebook
    url: https://www.facebook.com/.../videos/123/
    titulo: Título do vídeo
    autor: Nome de quem publicou
```

O vídeo só carrega depois do clique em "Assistir ao vídeo"; antes disso, a página não chama a
plataforma. Os vídeos atuais são de terceiros, escolhidos pelo dono (D-29), com o crédito ao autor
e o link para a publicação original.

O vídeo aparece na página da dica e também na seção "Vídeos" da página `/dicas/`, sem
nenhuma configuração extra.

## Cuidados

- Números e regras vêm de fonte oficial, citada em `fontes`, e são revisados quando a regra muda.
- Os textos são próprios: não copiar trechos de vídeos ou de sites de terceiros.
