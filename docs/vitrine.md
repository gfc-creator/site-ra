# Parceiros e clientes

Seção pública da página inicial, com clientes, parceiros, projetos realizados e depoimentos.
**Fica oculta enquanto não houver conteúdo autorizado**, e o link do menu aparece sozinho
quando ela for preenchida.

## Antes de publicar

- Tenha a autorização por escrito de cada empresa ou pessoa citada; uma mensagem ou e-mail serve.
- Depoimento: use as palavras da pessoa e confirme o texto final com ela.
- Foto: confirme o direito de uso e evite placas, rostos e dados de terceiros.
- Se alguém pedir a retirada, apague o item e publique de novo.

## Como preencher

1. Coloque logos e fotos em `public/vitrine/`. Prefira SVG para logos e JPG ou WebP para fotos.
2. Edite as listas em `src/lib/vitrine.ts`.
3. Abra um Pull Request. Ao entrar na `develop`, o site de testes é atualizado.

```ts
export const clientes: Marca[] = [
  { nome: "Nome do cliente", logo: "/vitrine/cliente.svg", autorizadoEm: "2026-11-18" },
];

export const depoimentos: Depoimento[] = [
  {
    texto: "Texto aprovado pela pessoa.",
    autor: "Nome da pessoa",
    empresa: "Nome da empresa",
    autorizadoEm: "2026-11-18",
  },
];
```

Item sem `autorizadoEm` válido, no formato AAAA-MM-DD, não aparece no site.
