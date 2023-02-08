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

import { login } from '../../auth';
import { Budget } from '../../types/Budget';
import { request } from '../../util/request';
import { getBudgetById } from './getBudgetById';

/**
 * Função para editar os detalhes simples do orçamento
 * Nota: não use essa função para editar itens do orçamento
 *
 * @example
 * ```javascript
 * // Editar o dado de contato
 * await calcme.budget.editDetailBudget('5645457ssdas89ad', {
 * contato: 'Nome do contato' });
 * ```
 * @category Budget
 */
export async function editDetailBudget(
  id: string,
  payload: Partial<Budget>
): Promise<{
  data: Budget;
  errors: any;
}> {
  try {
    const budget = await getBudgetById(id);
    const edit = {
      ...budget,
      ...payload,
    };
    const test: any = await request.put(`/estimate`, edit);
    return test.data;
  } catch (error: any) {
    if (error.response.status === 401) {
      await login();
      return await editDetailBudget(id, payload);
    } else if (error.response) {
      return error.response.data;
    } else {
      return error;
    }
  }
}
