# Análise do kit inicial

Análise de `RA-Tech-Energia-Kit-Completo.zip`, entregue pelo dono em 2026-11-18: site
em uma página, três logos, assinatura de e-mail e papel timbrado. O arquivo não entra
no repositório. Nada do kit foi publicado ou incorporado ainda.

## 1. O que o kit informa

Dados tirados do kit, **a confirmar com o dono**.

| Item | No kit |
| --- | --- |
| Nome | RA Tech & Energia |
| Frentes | TI, Cloud e Digitalização · Engenharia Solar Fotovoltaica |
| Público | Empresas, indústrias, propriedades rurais e residências |
| Objetivo do site | Levar o visitante ao WhatsApp para pedir diagnóstico ou orçamento |
| Paleta | Azul `#0F172A`, `#1D4ED8`, `#2563EB` · Âmbar `#F59E0B`, `#D97706` · Fundo `#FFFFFF`, `#F8FAFC` |
| Tipografia | Inter |
| Domínio e Instagram citados | `ratechenergia.com.br` e `@ratechenergia`; registro não conferido |

## 2. O que aproveitar

- O nome, o posicionamento e as duas frentes, se confirmados.
- A base da paleta: azul para tecnologia e âmbar para energia. Os azuis têm bom contraste.
- O conceito do monograma: as letras RA cortadas por um feixe solar.
- A ordem das seções: apresentação, serviços, simulador, contato.
- O WhatsApp como canal principal, que dispensa formulário e envio de e-mail.

## 3. Problemas encontrados

### Riscos legais e comerciais (resolver antes de publicar)

| # | Problema | Por que importa | Encaminhamento |
| --- | --- | --- | --- |
| A1 | Oferta de engenharia sem registro ou responsável técnico identificado no kit (execução por empresas contratadas, D-17) | A Lei 5.194/1966 exige registro da firma no CREA antes de iniciar a atividade (art. 59) e profissional habilitado com autoria declarada (art. 8º, parágrafo único) | Dono confirmar CREA e responsável técnico |
| A2 | O simulador promete economia fixa de 90% | Para novas unidades, a Lei 14.300/2022 (art. 27) cobra 60% dos componentes de distribuição em 2026, 75% em 2027 e 90% em 2028; a economia real muda com o ano e com a conta | Refazer o cálculo com premissas explícitas |
| A3 | Payback fixo de "2,8 a 3,5 anos" para qualquer conta | Não há cálculo nem fonte; promessa sem base pode caracterizar publicidade enganosa (CDC, art. 37) | Retirar (D-16) |
| A4 | Sem razão social, CNPJ, política de privacidade e símbolo de acessibilidade | RF-04 e RF-05 | Incluir; dados em `empresa.md` |
| A5 | Fontes do Google carregadas de servidor externo | O endereço IP do visitante vai a terceiros sem aviso | Servir as fontes do próprio site |

### Marca

| # | Problema | Encaminhamento |
| --- | --- | --- |
| M1 | Três assinaturas diferentes: monograma com feixe, "RA/" no e-mail e só texto no timbrado | Uma única marca em todos os materiais |
| M2 | O logo repete o nome: "RA" no monograma e "RA TECH" ao lado | Revisar a composição |
| M3 | O texto do logo depende da fonte instalada, então muda de aparência conforme o aparelho | Converter o texto em curvas |
| M4 | Em 140 px, "& ENERGIA" fica ilegível; em 16 px, o feixe some do ícone | Criar versões reduzidas próprias |
| M5 | O ícone usa cores diferentes das do logo principal | Unificar |
| M6 | Âmbar não serve para texto sobre branco: `#F59E0B` dá 2,15:1 e `#D97706` dá 3,19:1 (mínimo de 4,5:1) | Usar âmbar só em gráficos e destaques |
| M7 | Nome ainda sem consulta ao INPI | Consultar antes de investir na marca |

### Site

| # | Problema | Encaminhamento |
| --- | --- | --- |
| S1 | No celular, o menu e o botão de contato do topo desaparecem | Criar menu para celular |
| S2 | O link "Infraestrutura" aponta para uma seção que não existe | Corrigir |
| S3 | O site usa o Tailwind pela CDN, que o próprio Tailwind indica só para desenvolvimento | Compilar na pilha proposta |
| S4 | Botão do WhatsApp com contraste de 3,77:1 (mínimo de 4,5:1) | Escurecer o verde |
| S5 | Controles do simulador sem ligação com o rótulo e abas sem semântica de acessibilidade | Corrigir (RNF-03) |
| S6 | A recomendação inicial do simulador de Cloud não é a mesma que o cálculo produz | Corrigir |
| S7 | Modelo de contrato exposto ao público no site | Retirar do site |
| S8 | Sem descrição para busca, dados para compartilhamento e sitemap | Incluir (RNF-07) |

## 4. Conflitos com a documentação

As instruções do README do kit não foram seguidas: ele manda enviar tudo direto à
`main`, o que contraria D-02, e sugere Cloudflare Pages, o que difere de D-05.

## 5. Recomendação

Usar o kit como **briefing e rascunho**, e não como versão final: manter nome, proposta
e paleta base; redesenhar o logo a partir do conceito atual; reconstruir o site na pilha
de `tecnologias.md`, tratando primeiro os riscos A1 a A3.

## 6. Fontes

- [Lei 5.194/1966](https://www.planalto.gov.br/ccivil_03/leis/l5194.htm) ·
  [Lei 14.300/2022](https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/l14300.htm)
- [Tailwind Play CDN](https://tailwindcss.com/docs/installation/play-cdn)
