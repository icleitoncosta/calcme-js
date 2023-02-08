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

import { GroupPrice } from './GroupPrice';
import { StatSale } from './StatsSale';
import { ValueItem } from './ValueItem';

export interface ItensComVisual {
  id: string;
  idGraf: string;
  idInt: number;
  idOrca: string;
  statusSales: StatSale;
  statusInfo: any;
  statusData: any;
  data: string;
  excluido: boolean;
  tipo: string;
  titulo: string;
  descricao: string;
  grupoPreco: GroupPrice;
  tipoPrecoGeral: string;
  taxaGeral: number;
  configsMaterialAuto: boolean;
  configsMaoDeObraAuto: boolean;
  observacoesInt: string | null;
  arquivos: any;
  value: ValueItem;
  tiragens: {
    tiragem: number;
  }[];
  materiais: null;
  impressoes: null;
  impressoesOrigEmenda: null;
  processos: null;
  maosDeObra: null;
  productSign: null;
  configNfe: null;
  paramsNotaFiscal: null;
  aliquotaIcms: 0;
  aliquotaIpi: 0;
  aliquotaPis: 0;
  aliquotaCofins: 0;
  aliquotaOutros: 8.55;
  unidade: null;
  beneficioFiscal: null;
  cest: null;
  gtinEan: null;
  ncm: null;
  old: null;
  lastId: null;
}
