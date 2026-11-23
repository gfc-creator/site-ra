# Dicas de energia

Página `/dicas/`, com explicações curtas sobre como funciona a energia solar e como economizar
energia. Pedido do dono em 2026-11-23, a partir de vídeos de redes sociais usados como referência.

## O que há na página

- **O caminho da energia solar:** diagrama do painel até a rede.
- **Dicas por tema:** "Como funciona" e "Economia de energia", cada uma com página própria, boa
  para compartilhar no WhatsApp e nas redes.
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

## Cuidados

- Números e regras vêm de fonte oficial, citada em `fontes`, e são revisados quando a regra muda.
- Os textos são próprios: não copiar trechos de vídeos ou de sites de terceiros.
