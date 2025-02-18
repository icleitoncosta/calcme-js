interface Atividade {
    codigoServico: string;
    codigoServicoMun: string;
    codigoTributacao: string;
    impostoFederal: number;
    impostoMunicipal: number;
    descricao: string;
    cnaeSecundario: null;
    principal: boolean;
  }
  
  export interface ConfigNFSe {
    id: string;
    idGraf: string;
    idInt: null;
    naturezaOperacao: number;
    naturezaTributacao: number;
    informarTributos: boolean;
    regimeEspecialTributacao: number;
    aliquotaIss: number;
    aliquotaCofins: number;
    aliquotaPis: number;
    aliquotaCsll: number;
    aliquotaIr: number;
    aliquotaInss: number;
    reterIss: boolean;
    reterCofins: boolean;
    reterPis: boolean;
    reterCsll: boolean;
    reterIr: boolean;
    reterInss: boolean;
    usuario: string;
    senha: string;
    atividades: Atividade[];
    identificacaoAmbiente: string;
    servicosListas: boolean;
    tituloEmail: string;
    conteudoEmail: string;
    logo: string;
    observacao: null;
    observacaoPedido: boolean;
    observacaoDescricao: null;
  }
  