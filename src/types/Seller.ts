import { Address } from "./Address";

export interface Seller {
    id: string;
    idGraf: null;
    idInt: number;
    tipos: null;
    nome: string;
    nomeBusca: null;
    sexo: null;
    cpf: string;
    rg: null;
    dataNascimento: null;
    email: string;
    fone1: string;
    fone2: null;
    observacoes: null;
    enderecos: Address[];
    filiais: null;
    excluido: null;
    consumidorFinal: boolean;
    clienteCalcme: null;
    grupos: null;
    grupoPreco: null;
    condicaoPagamento: null;
    dadosOrcamentos: null;
    lastId: null;
    comissao: number;
    commissionConfiguration: null;
    meta: null;
    usuario: null;
    cargo: null;
    salario: null;
    descontoMax: number;
  }
