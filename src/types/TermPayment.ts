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

export interface TermPayment {
  id: string;
  idGraf: string;
  idInt: number;
  titulo: string;
  modo: string;
  condicao: string;
  frequencia: any;
  qtdParcelas: number | null;
  adicionarJuros: boolean;
  primeiraAVista: boolean;
  antecipado: boolean;
  juros: any;
  formatoCob: any;
  formaPagamento: string;
  taxaOperacao: number;
  excluido: boolean;
  lastId: any;
  target: any;
}
