/*!
 * Copyright 2025 Saturno Team
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { customer, customers, nfse } from '../..';
import { login } from '../../auth';
import { AddressDelivery } from '../../types/AddressDelivery';
import { ConfigNFSe } from '../../types/ConfigNFSe';
import { Customer } from '../../types/Customer';
import { Printshop } from '../../types/PrintShop';
import { request } from '../../util/request';

/**
 * Função para emitir uma nova nota fiscal
 *
 * @example
 * ```javascript
 * await calcme.nfse.newNFSe();
 * ```
 * @category NFSe
 */
export async function newNFSe(payload: {
  idOrder: string;
  clienteId: string;
  tomadorNaoIdentificado: boolean;
  observacoes?: null;
  observacoesInternas?: null;
  descricaoServico: string;
  valorServico: number;
}): Promise<{
  data: {
    printShop: Printshop;
    rpsNfse: number;
    configNfse: ConfigNFSe;
    serieNfse: string;
  };
  errors: any[];
  totalElements: null;
  ids: null;
}> {
  try {
    if (!payload.clienteId) {
      throw new Error('Cliente não informado');
    }
    const configNfse = await nfse.getConfig();

    let cliente = null;

    if (customers.find((custom) => custom.id === payload.clienteId)) {
      cliente = customers.find((custom) => custom.id === payload.clienteId);
    } else if (payload.clienteId) {
      cliente = await customer.getById(payload.clienteId);
    }

    const { data }: any = await request.post(`/api/nfse`, {
      checked: false,
      id: null,
      idGraf: null,
      idInt: null,
      idOrder: payload.idOrder,
      idOrders: [],
      serieRps: configNfse.data.serieNfse,
      tipoRps: null,
      numeroRps: configNfse.data.rpsNfse,
      cliente: cliente,
      vendedor: null,
      atividade: configNfse.data.configNfse.atividades[0],
      numeroNfse: null,
      tomadorNaoIdentificado: false,
      regimeTributacao: 0,
      naturezaOperacao: 0,
      naturezaTributacao: 0,
      localPrestacao: 0,
      observacoes: payload.observacoes ?? null,
      observacoesInternas: payload.observacoesInternas ?? null,
      descricaoServico: payload.descricaoServico,
      valorServico: payload.valorServico,
      baseCalculo: payload.valorServico,
      aliquotaIss: configNfse.data.configNfse.aliquotaIss,
      valorImposto:
        (payload.valorServico * configNfse.data.configNfse.aliquotaIss) / 100,
      valorDeducoes: 0,
      valorIncondicionado: 0,
      valorCondicionado: 0,
      tributosFederais: 0,
      tributosMunicipais: (payload.valorServico * 2) / 100, // Exemplo de cálculo genérico
      numeroProcesso: null,
      informarTributos: false,
      aliquotaCofins: configNfse.data.configNfse.aliquotaCofins,
      aliquotaPis: configNfse.data.configNfse.aliquotaPis,
      aliquotaCsll: configNfse.data.configNfse.aliquotaCsll,
      aliquotaIr: configNfse.data.configNfse.aliquotaIr,
      aliquotaInss: configNfse.data.configNfse.aliquotaInss,
      valorCofins: null,
      valorPis:
        (payload.valorServico * configNfse.data.configNfse.aliquotaPis) / 100,
      valorCsll:
        (payload.valorServico * configNfse.data.configNfse.aliquotaCsll) / 100,
      valorIr:
        (payload.valorServico * configNfse.data.configNfse.aliquotaIr) / 100,
      valorInss:
        (payload.valorServico * configNfse.data.configNfse.aliquotaInss) / 100,
      reterCofins: configNfse.data.configNfse.reterCofins,
      reterPis: configNfse.data.configNfse.reterPis,
      reterCsll: configNfse.data.configNfse.reterCsll,
      reterIr: configNfse.data.configNfse.reterIr,
      reterInss: configNfse.data.configNfse.reterInss,
      reterIss: configNfse.data.configNfse.reterIss,
      emitir: true,
      valorTotal: payload.valorServico || 0, //TODO
      situacao: null,
      excluido: false,
      cancelado: false,
      data: new Date(),
      dataEmissao: new Date(),
      handleNfse: null,
      mensagemRejeicao: null,
      erro: null,
      identificacaoAmbiente: '1',
      addressDelivery: {
        index: 0,
        enderecoString: `${cliente?.enderecos[0].logradouro}, ${cliente?.enderecos[0].numero}, ${cliente?.enderecos[0].bairro}, ${cliente?.enderecos[0].cidade}, ${cliente?.enderecos[0].cep}`,
      },
    });
    return data.data;
  } catch (error: any) {
    if (error.response.status === 400) {
      throw error;
    } else if (error.response.status === 401) {
      await login();
      return await newNFSe(payload);
    } else if (error.response) {
      return error.response.data;
    } else {
      return error;
    }
  }
}
