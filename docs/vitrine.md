# Parceiros e clientes

Seção pública da página inicial, com clientes, parceiros, projetos realizados e depoimentos.
A seção e o link do menu aparecem quando há conteúdo.

## Conteúdo atual

- **Clientes, todos com projeto de energia solar:** Serra da Mangaba, Florida de Liz e
  Supermercado Miranda. Usam a imagem padrão de cliente.
- **Parceiros:** Elétrica Futura, Sou Energy, Fotus e BelEnergy, com o logo publicado no site de
  cada empresa (consulta em 2026-11-18), e Nexen, com a imagem padrão de parceiro.

A publicação dos nomes e logos foi decidida pelo dono (D-25). Se alguém pedir a retirada, apague o
item e publique de novo.

## Como preencher

1. Coloque logos e fotos em `public/vitrine/`. Prefira SVG ou PNG para logos e JPG ou WebP para fotos.
2. Edite as listas em `src/lib/vitrine.ts`. Sem `logo`, aparece a imagem padrão.
3. Abra um Pull Request. Ao entrar na `develop`, o site de testes é atualizado.

```ts
const clientes: Marca[] = [
  { nome: "Nome do cliente", logo: "/vitrine/cliente.png", atuacao: "Projeto de energia solar" },
];
```
