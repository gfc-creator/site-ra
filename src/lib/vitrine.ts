/** Conteúdo da seção "Parceiros e clientes". Como preencher: docs/vitrine.md. */
export interface Marca {
  nome: string;
  /** Arquivo em public/vitrine/. Sem logo, aparece a imagem padrão. */
  logo?: string;
  /** Endereço completo do site, com https://. */
  site?: string;
  /** O que foi feito para o cliente, por exemplo "Projeto de energia solar". */
  atuacao?: string;
}

export interface Depoimento {
  texto: string;
  autor: string;
  cargo?: string;
  empresa?: string;
}

export interface Projeto {
  titulo: string;
  frente: "TI e Cloud" | "Energia solar";
  descricao: string;
  local?: string;
  /** Foto em public/vitrine/, por exemplo "/vitrine/usina.jpg". */
  foto?: string;
  /** Descrição da foto, para quem usa leitor de tela. */
  fotoDescricao?: string;
}

export const imagemPadrao = {
  cliente: "/vitrine/padrao-cliente.svg",
  parceiro: "/vitrine/padrao-parceiro.svg",
};

const SOLAR = "Projeto de energia solar";

const parceiros: Marca[] = [
  {
    nome: "Elétrica Futura",
    logo: "/vitrine/parceiro-eletrica-futura.png",
    site: "https://www.eletricafutura.com.br/",
  },
  {
    nome: "Sou Energy",
    logo: "/vitrine/parceiro-sou-energy.png",
    site: "https://souenergy.com.br/",
  },
  { nome: "Nexen" },
  { nome: "Fotus", logo: "/vitrine/parceiro-fotus.png", site: "https://fotus.com.br/" },
  {
    nome: "BelEnergy",
    logo: "/vitrine/parceiro-belenergy.png",
    site: "https://belenergy.com.br/",
  },
];

const clientes: Marca[] = [
  { nome: "Serra da Mangaba", atuacao: SOLAR },
  { nome: "Florida de Liz", atuacao: SOLAR },
  { nome: "Supermercado Miranda", atuacao: SOLAR },
];

const depoimentos: Depoimento[] = [];
const projetos: Projeto[] = [];

export const vitrine = { parceiros, clientes, depoimentos, projetos };

export const temVitrine = Object.values(vitrine).some((itens) => itens.length > 0);
