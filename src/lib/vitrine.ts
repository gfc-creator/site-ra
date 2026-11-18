/**
 * Conteúdo da seção "Parceiros e clientes". Como preencher: docs/vitrine.md.
 *
 * Só aparece no site o que tiver `autorizadoEm`, a data em que a empresa ou a pessoa
 * autorizou a divulgação. Sem conteúdo autorizado, a seção fica oculta.
 */
interface Autorizado {
  /** Data da autorização, no formato AAAA-MM-DD. */
  autorizadoEm: string;
}

export interface Marca extends Autorizado {
  nome: string;
  /** Arquivo em public/vitrine/, por exemplo "/vitrine/empresa.svg". Sem logo, mostra o nome. */
  logo?: string;
  /** Endereço completo do site, com https://. */
  site?: string;
  /** O que foi feito para o cliente, por exemplo "Projeto de energia solar". */
  atuacao?: string;
}

export interface Depoimento extends Autorizado {
  texto: string;
  autor: string;
  cargo?: string;
  empresa?: string;
}

export interface Projeto extends Autorizado {
  titulo: string;
  frente: "TI e Cloud" | "Energia solar";
  descricao: string;
  local?: string;
  /** Foto em public/vitrine/, por exemplo "/vitrine/usina.jpg". */
  foto?: string;
  /** Descrição da foto, para quem usa leitor de tela. */
  fotoDescricao?: string;
}

/** Aguardando a data de autorização de cada um: sem ela, nada aparece no site. */
const AGUARDANDO_AUTORIZACAO = "";
const SOLAR = "Projeto de energia solar";

export const parceiros: Marca[] = [
  {
    nome: "Elétrica Futura",
    site: "https://www.eletricafutura.com.br/",
    autorizadoEm: AGUARDANDO_AUTORIZACAO,
  },
  { nome: "Sou Energy", site: "https://souenergy.com.br/", autorizadoEm: AGUARDANDO_AUTORIZACAO },
  { nome: "Nexen", autorizadoEm: AGUARDANDO_AUTORIZACAO },
  { nome: "Fotus", site: "https://fotus.com.br/", autorizadoEm: AGUARDANDO_AUTORIZACAO },
  { nome: "BelEnergy", site: "https://belenergy.com.br/", autorizadoEm: AGUARDANDO_AUTORIZACAO },
];

export const clientes: Marca[] = [
  { nome: "Serra da Mangaba", atuacao: SOLAR, autorizadoEm: AGUARDANDO_AUTORIZACAO },
  { nome: "Florida de Liz", atuacao: SOLAR, autorizadoEm: AGUARDANDO_AUTORIZACAO },
  { nome: "Supermercado Miranda", atuacao: SOLAR, autorizadoEm: AGUARDANDO_AUTORIZACAO },
];

export const depoimentos: Depoimento[] = [];
export const projetos: Projeto[] = [];

const autorizados = <T extends Autorizado>(itens: T[]) =>
  itens.filter((item) => /^\d{4}-\d{2}-\d{2}$/.test(item.autorizadoEm));

export const vitrine = {
  parceiros: autorizados(parceiros),
  clientes: autorizados(clientes),
  depoimentos: autorizados(depoimentos),
  projetos: autorizados(projetos),
};

export const temVitrine = Object.values(vitrine).some((itens) => itens.length > 0);
