# Requisitos

**Origem:** `[Dono]` definido pelo dono · `[Lei]` obrigação legal · `[Premissa]`
proposta a validar com o dono.

## Funcionais

| Id | Requisito | Origem |
| --- | --- | --- |
| RF-01 | O projeto entrega a identidade visual da RA | [Dono] |
| RF-02 | O projeto entrega o site da RA | [Dono] |
| RF-03 | As páginas, o conteúdo e os canais de contato seguem as respostas de `visao-geral.md` §3 | A definir |
| RF-04 | O site tem página de política de privacidade | [Lei] LGPD, se tratar dados pessoais |
| RF-05 | O site exibe o símbolo de acessibilidade em destaque | [Lei] art. 63, §1º, Lei 13.146/2015 |
| RF-06 | O rodapé identifica a razão social e o CNPJ da empresa | [Premissa] |
| RF-09 | Seção pública de parceiros e clientes, com imagem padrão para quem não tem logo | [Dono] D-24, D-25 |
| RF-07 | O simulador solar mostra as premissas do cálculo e avisa que o resultado é estimativa, sem prometer retorno do investimento | [Dono] D-12, D-16 |

## Não funcionais

| Id | Requisito | Meta | Origem |
| --- | --- | --- | --- |
| RNF-01 | Tecnologias atuais e estáveis | Só versões estáveis, com suporte vigente; nada em beta | [Dono] |
| RNF-02 | Documentação desde o início | Todo PR mantém os documentos em dia | [Dono] |
| RNF-03 | Acessibilidade | WCAG 2.2, nível AA | [Lei] art. 63 pede as boas práticas internacionais; o nível AA é [Premissa] |
| RNF-04 | Desempenho real | LCP ≤ 2,5 s · INP ≤ 200 ms · CLS ≤ 0,1, no percentil 75, em celular e computador | [Premissa] |
| RNF-05 | Celular primeiro | Sem rolagem lateral de 320 px em diante | [Premissa] |
| RNF-06 | Privacidade | Sem cookie não necessário por padrão; se houver, consentimento conforme o guia da ANPD | [Lei] LGPD; a ausência de cookies é [Premissa] |
| RNF-07 | Busca | HTML semântico, título e descrição por página, sitemap e dados estruturados | [Premissa] |
| RNF-08 | Custo | Hospedagem sem mensalidade enquanto o site for estático | [Premissa], depende de P9 |
| RNF-09 | Portabilidade | O site pode mudar de hospedagem sem reescrita | [Premissa] |
