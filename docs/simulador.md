# Simulador solar

Estimativa para consumidores de baixa tensão (grupo B) da Equatorial Maranhão. Não é proposta
comercial. Dados conferidos em 2026-11-18. Revisar a cada reajuste, em agosto, e em janeiro,
quando muda a parcela do Fio B.

## Premissas

| Item | Valor | Fonte |
| --- | --- | --- |
| TUSD | R$ 607,54/MWh | ANEEL, REH 3.604/2026, vigente de 28/08/2026 a 27/08/2027 |
| TE | R$ 281,30/MWh | ANEEL, REH 3.604/2026 |
| Fio B | R$ 325,14/MWh | ANEEL, componentes tarifárias da REH 3.604/2026 |
| Parcela do Fio B | 75% em 2027 | Lei 14.300/2022, art. 27 (60% em 2026 e 90% em 2028) |
| Conta mínima | 30, 50 ou 100 kWh | REN ANEEL 1.000/2021 |
| Geração | 120 kWh por mês por kWp | PVGIS 5.3, Sítio Novo (MA), inclinação de 10° e 14% de perdas |
| Tributos | 28% | **Estimativa:** ICMS de 23% mais PIS e Cofins |
| Simultaneidade | 30% | **Estimativa:** varia com o horário de consumo |

Os valores de TUSD, TE e Fio B são iguais para as classes B1, B2 e B3 na modalidade convencional.

## Cálculo

1. Consumo = conta ÷ tarifa com tributos.
2. Geração = consumo − conta mínima.
3. Energia compensada = geração × (1 − simultaneidade).
4. Conta depois = o maior valor entre a conta mínima e o Fio B cobrado sobre a energia compensada.
5. Economia anual = (conta atual − conta depois) × 12.

## Limites

- Não cobre grupo A, tarifa social, tarifa branca, iluminação pública nem bandeiras.
- A regra do Fio B a partir de 2029 ainda depende de regulamentação.
- O ICMS sobre a energia compensada no Maranhão está em discussão judicial; o cálculo mantém os
  tributos sobre o Fio B, a hipótese mais conservadora.
- A conexão segue as normas técnicas da Equatorial Maranhão, conferidas no projeto de cada cliente.

## Fontes

- [Tarifas da ANEEL](https://dadosabertos.aneel.gov.br/dataset/tarifas-distribuidoras-energia-eletrica) ·
  [Componentes tarifárias](https://dadosabertos.aneel.gov.br/dataset/componentes-tarifarias)
- [Lei 14.300/2022](https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/lei/l14300.htm) ·
  [REN ANEEL 1.000/2021](https://www2.aneel.gov.br/cedoc/ren20211000.html)
- [PVGIS](https://re.jrc.ec.europa.eu/pvg_tools/en/)
