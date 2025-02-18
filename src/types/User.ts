export interface User {
    id: string;
    idGraf: string;
    idInt: number;
    idUserDesk: null;
    passUserDesk: null;
    lastTokenDesk: null;
    perfil: string;
    nome: string;
    funcionario: any[]; 
    fone: string;
    email: null;
    grupo: any[]; 
    alertas: boolean;
    alertLate: boolean;
    alertBlock: boolean;
    collapsedMenu: boolean;
    principal: boolean;
    master: boolean;
    unlimited: boolean;
    usuario: string;
    senha: null;
    vendedor: boolean;
    vendedorVinculado: any[]; 
    excluido: boolean;
    configUser: any[]; 
    chat: null;
  }
