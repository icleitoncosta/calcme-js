interface StatusSales {
    id: string;
    cor: string;
    titulo: string;
    icone: string;
}

interface Tiragem {
    tiragem: number;
    vlrUnit: number;
    somaTotalPv: number;
    somaTotalMC: number;
    perMarg: null;
}

interface Item {
    id: string;
    idInt: number;
    titulo: string;
    descricao: string;
    statusSales: StatusSales;
    value: {
        tiragens: Tiragem[];
    };
    type: string;
    hasArquivos: boolean;
}

export interface Order {
    id: string;
    idInt: number;
    valorTotal: number;
    data: string;
    dataEntrega: string;
    dataCombinar: null;
    contractStatus: string;
    clienteNome: string;
    clienteId: string;
    clienteIdInt: number;
    vendedorPerfil: string; // Pode ser um tipo mais específico se a estrutura for conhecida.
    itens: Item[];
    statusSales: StatusSales;
    hasContas: null;
    hasContasAgrupadas: null;
    hasComissao: null;
    hasNFe: null;
    hasNFCe: null;
    hasNFSe: null;
    hasBoleto: null;
    hasProvisionarEstoque: boolean;
    hasBaixarEstoque: null;
    currentContractSignature: null;
}
