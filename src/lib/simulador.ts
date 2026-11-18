/**
 * Simulador solar para consumidores de baixa tensão da Equatorial Maranhão.
 * Premissas e fontes: docs/simulador.md.
 */
export const premissas = {
  /** REH ANEEL 3.604/2026, grupo B convencional, vigente de 28/08/2026 a 27/08/2027. */
  tusdPorKwh: 0.60754,
  tePorKwh: 0.2813,
  fioBPorKwh: 0.32514,
  /** Lei 14.300/2022, art. 27: parcela do Fio B cobrada em 2027. */
  parcelaFioB: 0.75,
  anoDaRegra: 2027,
  /** Estimativa de ICMS, PIS e Cofins embutidos na conta. */
  tributos: 0.28,
  /** Energia usada no momento em que é gerada, sobre a qual não incide o Fio B. */
  simultaneidade: 0.3,
  /** PVGIS 5.3, Sítio Novo (MA), sistema fixo com 14% de perdas. */
  geracaoMensalPorKwp: 120,
};

/** Custo de disponibilidade em kWh por mês (REN ANEEL 1.000/2021). */
export const ligacoes = {
  monofasica: { rotulo: "Monofásica", kwh: 30 },
  bifasica: { rotulo: "Bifásica", kwh: 50 },
  trifasica: { rotulo: "Trifásica", kwh: 100 },
} as const;

export type Ligacao = keyof typeof ligacoes;

export interface Estimativa {
  contaDepois: number;
  economiaAnual: number;
  potenciaKwp: number;
}

export const tarifaComTributos =
  (premissas.tusdPorKwh + premissas.tePorKwh) / (1 - premissas.tributos);

export function estimar(contaMensal: number, ligacao: Ligacao): Estimativa {
  const minimo = ligacoes[ligacao].kwh;
  const consumo = contaMensal / tarifaComTributos;
  const geracao = Math.max(consumo - minimo, 0);
  const compensada = geracao * (1 - premissas.simultaneidade);
  const fioB =
    (compensada * premissas.fioBPorKwh * premissas.parcelaFioB) / (1 - premissas.tributos);
  const contaMinima = minimo * tarifaComTributos;
  const contaDepois = Math.min(contaMensal, Math.max(fioB, contaMinima));
  return {
    contaDepois: Math.round(contaDepois),
    economiaAnual: Math.round((contaMensal - contaDepois) * 12),
    potenciaKwp: Math.round((geracao / premissas.geracaoMensalPorKwp) * 10) / 10,
  };
}

export const reais = (valor: number, casas = 0) =>
  valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: casas,
    maximumFractionDigits: casas,
  });

export const kwp = (valor: number) =>
  `${valor.toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })} kWp`;
