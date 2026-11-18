/** Premissas do simulador solar (D-16): estimativa simples, sem valor de proposta. */
export const premissas = {
  tarifaPorKwh: 1,
  geracaoMensalPorKwp: 125,
  economiaMinima: 0.6,
  economiaMaxima: 0.8,
};

export interface Estimativa {
  potenciaKwp: number;
  economiaAnualMinima: number;
  economiaAnualMaxima: number;
}

export function estimar(contaMensal: number): Estimativa {
  const consumoKwh = contaMensal / premissas.tarifaPorKwh;
  return {
    potenciaKwp: Math.round((consumoKwh / premissas.geracaoMensalPorKwp) * 10) / 10,
    economiaAnualMinima: Math.round(contaMensal * 12 * premissas.economiaMinima),
    economiaAnualMaxima: Math.round(contaMensal * 12 * premissas.economiaMaxima),
  };
}

export const reais = (valor: number) =>
  valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  });

export const kwp = (valor: number) =>
  `${valor.toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })} kWp`;
