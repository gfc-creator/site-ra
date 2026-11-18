# Hospedagem de testes, domínio e marca

Consultas feitas em 2026-11-18. Disponibilidade de domínio e situação de marca mudam:
reconferir no momento do registro.

## 1. Ambiente de testes

**Proposta (D-18): Cloudflare Workers, no endereço gratuito `workers.dev`.** É a mesma
plataforma prevista para o site definitivo (D-05), então o que for testado vale para a
publicação.

| Item | Como funciona |
| --- | --- |
| Endereço de testes | `ra-tech-energia.<subdomínio-da-conta>.workers.dev`, sem precisar de domínio |
| Atualização | Cada envio à branch `develop` publica o site sozinho |
| Revisão de PR | Cada branch ganha um endereço próprio de pré-visualização, com `npx wrangler preview`; exige o bloco `previews` no `wrangler.jsonc` |
| Custo | Requisições de arquivos estáticos são gratuitas |
| Limites do plano gratuito | 3.000 minutos de compilação por mês, 1 compilação por vez, 100 pré-visualizações por site |
| Busca no Google | O site de testes sai com `noindex`; retirar no lançamento (`public/_headers`, `public/robots.txt` e `src/layouts/Base.astro`) |
| Privacidade | Os endereços são públicos por padrão; o Cloudflare Access pode exigir login |

### O que o dono precisa fazer

1. Criar uma conta gratuita na Cloudflare, com o e-mail da empresa.
2. Em Workers, conectar o repositório `gfc-creator/site-ra` e autorizar o acesso ao GitHub.

As credenciais ficam com o dono e não entram no repositório.

### Alternativa

GitHub Pages: gratuito e simples, mas sem pré-visualização por PR e em plataforma
diferente da prevista para o site definitivo.

## 2. Domínios

| Domínio | Situação na consulta |
| --- | --- |
| `ratechenergia.com.br` | **Disponível** |
| `ratechenergia.com` | **Disponível** |
| `ratech.net.br` | **Disponível** |
| `ratech.tec.br` | **Disponível** |
| `ratech.com.br` | Registrado por terceiro |
| `ratech.com` | Registrado por terceiro |
| `radiantech.com.br` | **Disponível** |
| `ration.com.br` | Registrado por terceiro |
| `aureatech.com.br` | Registrado por terceiro |

### Registro recomendado

**`ratechenergia.com.br`, no Registro.br.** Não há opção gratuita para `.com.br`: o Registro.br é
o órgão oficial e cobra R$ 40 por ano, sem intermediário. Disponível na consulta de 2026-11-18.

1. Em [registro.br](https://registro.br/), crie a conta com o CNPJ da empresa e registre o domínio.
2. Na Cloudflare, adicione o domínio ao plano gratuito e copie os dois servidores DNS indicados.
3. No Registro.br, troque os servidores DNS do domínio pelos da Cloudflare.
4. No Worker `ra-tech-energia`, abra **Settings › Domains & Routes › Add › Custom Domain**.
5. No lançamento, retire o `noindex` do site.

O e-mail `contato@ratechenergia.com.br` pode ser encaminhado para uma caixa existente com o Email
Routing da Cloudflare, disponível no plano gratuito. Ele só recebe mensagens; para enviar com esse
endereço é preciso um serviço de e-mail.

## 3. Marca no INPI

| Nome | Resultado |
| --- | --- |
| RA Tech | **Risco.** Sem marca idêntica ativa, mas **RA TECHNOLOGICS** (processo 922459010) está em vigor na classe 37, com instalação, manutenção e reparo de computadores |
| RA Tech Energia | Nenhum processo idêntico |
| Ratech | Dois pedidos, ambos definitivamente arquivados (905124243 e 921000324) |
| Radiantech | **Risco maior.** Sem processo idêntico, mas há marcas parecidas em vigor no mesmo setor: RADIANTE ENERGIA SOLAR E INSTALAÇÕES (924170654), RADIANTE SOLAR (935935320), RADIANCE ENERGIA SOLAR (927209870) e RADIANT SOLUTIONS (914248863) |

A consulta é preliminar e não substitui a análise de um especialista em marcas: o INPI
também avalia semelhança e afinidade entre atividades.

## 4. Fontes

- [Registro.br](https://registro.br/) · [Valor do registro (NIC.br)](https://teletime.com.br/14/10/2026/br-6-milhoes/) · [Busca de marcas do INPI](https://busca.inpi.gov.br/pePI/)
- [Domínios em Workers](https://developers.cloudflare.com/workers/configuration/routing/custom-domains/) · [Email Routing](https://developers.cloudflare.com/email-routing/)
- [Previews de Workers](https://developers.cloudflare.com/workers/previews/) ·
  [Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/) ·
  [Limites de Builds](https://developers.cloudflare.com/workers/ci-cd/builds/limits-and-pricing/)
