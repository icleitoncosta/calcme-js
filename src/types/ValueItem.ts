/*!
 * Copyright 2022 Saturno Team
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

export interface ValueItem {
  id: string;
  idGraf: string;
  idOrca: string;
  idItem: string;
  tiragens: [
    {
      tiragem: number;
      somaTotalPv: number;
      somaTotalMC: number;
      somaTotalPvProduto: any;
      somaCustosProduto: number;
      precoPacoteProduto: any;
      qtdPacoteProduto: number | null;
      precoAPartirDeProduto: any;
      precoPorProduto: any;
      nomePrecoPorProduto: any;
      lucroProduto: any;
      perJurosParc: number;
      vlrJurosParc: number;
      vlrUnit: number;
      perLucro: number;
      perDesconto: number;
      vlrDesconto: number;
      seguro: number;
      frete: number;
      outrasDespesas: number;
      vlrFinanceiro: number;
      tipoPrecoDespesas: string;
      taxaDespesas: number;
      modificados: {
        somaTotalPv: boolean;
        perLucro: boolean;
        perDesconto: boolean;
        vlrDesconto: boolean;
        seguro: boolean;
        frete: boolean;
        outrasDespesas: boolean;
        tipoPrecoDespesas: boolean;
        taxaDespesas: boolean;
      };
      acabamentos: any;
      materiais: any;
      maosDeObra: any;
      impressoes: any;
    }
  ];
  taxas: {
    taxasJuros: number;
    taxasImpostos: number;
    taxasVendedor: number;
    taxasAgencia: number;
    taxasOperacao: number;
  };
  taxasMod: {
    taxasJuros: boolean;
    taxasImpostos: boolean;
    taxasVendedor: boolean;
    taxasAgencia: boolean;
  };
  prazos: {
    prazoProd: number;
    dataEntrega: string | null;
    horaEntrega: string | null;
    tipoEntrega: string | null;
  };
  prazosMod: {
    prazoProd: boolean;
    dataEntrega: boolean;
  };
  lastId: number | null;
  target: any;
}
