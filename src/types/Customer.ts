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

import { Address } from './Address';

export interface Customer {
  id: string;
  idGraf: string;
  idInt: number;
  tipos: string[];
  nome: string;
  nomeBusca: string;
  sexo: string;
  cpf: string;
  rg: string;
  dataNascimento: string;
  email: string;
  fone1: string;
  fone2: string;
  observacoes: string;
  enderecos: Address[];
  excluido: boolean;
  consumidorFinal: boolean;
  grafica: string;
  grupos: any;
  grupoPreco: any;
  dadosOrcamentos: null;
  lastId: any;
  tipoCom: 'Fisica' | 'Juridica';
  razao: string;
  fantasia: string;
  cnpj: string;
  ie: string;
  im: string;
  dataAbertura: string;
  site: string;
  contatos: any;
  isento: boolean;
  contribuinteIcms: boolean;
  regimeTributario: any;
  comissao: any;
  commissionConfiguration: any;
  target: any;
}
