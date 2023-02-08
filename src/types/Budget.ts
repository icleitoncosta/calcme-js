/*!
 * Copyright 2023 Saturno Team
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

import { Customer } from './Customer';
import { Installment } from './Installment';
import { ItensComVisual } from './ItensComVisual';
import { StatSale } from './StatsSale';
import { TermPayment } from './TermPayment';

export interface Budget {
  id: string;
  idGraf: string;
  idInt: number;
  cliente: Customer;
  vendedor: any;
  agencia: any;
  contato: string | null;
  data: string;
  dataEntrega: string;
  horaEntrega: string;
  dataEntregaMod: boolean;
  dataCombinar: boolean;
  itens: any;
  itensComVisual: ItensComVisual;
  itensDigital: [];
  itensProduto: [];
  parcelas: Installment[];
  parcelaMod: boolean;
  detalharParcelas: boolean;
  statusSales: StatSale;
  prazoPag: TermPayment;
  observacoes: string;
  excluido: boolean;
  itensExcluidos: boolean;
  lastId: any;
}
