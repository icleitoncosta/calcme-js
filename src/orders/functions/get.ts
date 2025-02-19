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

import { login } from '../../auth';
import { Order } from '../../types/Order';
import { Pageable } from '../../types/Pageable';
import { Sort } from '../../types/Sort';
import { request } from '../../util/request';

/**
 * Function to get budgets
 * Função para retornar orçamentos
 *
 * @example
 * ```javascript
 * // Get budgets first page with 10 elements
 * await calcme.orders.get(0, 10);
 *
 * // Get budgets second page with 10 elements
 * await calcme.orders.get(1, 10);
 * ```
 * @category Order
 */
export async function get(
  page = 0,
  limit = 10
): Promise<{
  data: {
    content: Order[];
    empty: boolean;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    pageable: Pageable;
    size: number;
    sort: Sort;
    totalElements: number;
    totalPages: number;
  };
  errors: any;
}> {
  try {
    const { data }: any = await request.get(
      `/api/order/list/?page${page}&count=${limit}&orderName=idInt`
    );
    return data;
  } catch (error: any) {
    if (error?.response?.status === 401) {
      await login();
      return await get(page, limit);
    } else if (error?.response) {
      return error?.response.data;
    } else {
      return error;
    }
  }
}
