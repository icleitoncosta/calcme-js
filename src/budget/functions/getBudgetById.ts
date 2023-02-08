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

/**
 * Função que retorna os dados básicos de um orçamento
 *
 * @example
 * ```javascript
 * // Get simple data of a budget
 * await calcme.budget.getBudgetById('63e3e4a04da228181a9211dd');
 * ```
 * @category Budget
 */
export async function getBudgetById(id: string): Promise<{
  data: Budget;
  errors: any;
}> {
  try {
    const { data }: any = await request.get(`/estimate/${id}`);
    return data;
  } catch (error: any) {
    if (error.response.status === 401) {
      await login();
      return await getBudgetById(id);
    } else if (error.response) {
      return error.response.data;
    } else {
      return error;
    }
  }
}
