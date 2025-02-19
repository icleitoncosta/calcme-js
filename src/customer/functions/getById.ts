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

import { customers } from '../..';
import { login } from '../../auth';
import { Customer } from '../../types/Customer';
import { request } from '../../util/request';

/**
 * Função para buscar um cliente especifico pelo ID
 *
 * @example
 * ```javascript
 * await calcme.customer.getById('42598b80f53b18f0c8402a99');
 * ```
 * @category Customer
 */
export async function getById(customerId: string): Promise<Customer | null> {
  try {
    const { data }: any = await request.get(`/api/person/client/${customerId}`);
    const customer: Customer = data?.data;

    if (!customer) return null;

    if (customer?.id && !customers.find((custom) => custom.id === customerId)) {
      customers.push(customer);
    } else {
      customers.map((customer) => {
        if (customer.id === customerId) {
          customer = data;
        }
      });
    }
    return customer;
  } catch (error: any) {
    if (error?.response?.status === 401) {
      await login();
      return await getById(customerId);
    } else if (error?.response?.status === 400) {
      return null;
    } else if (error.response) {
      return error.response.data;
    } else {
      return error;
    }
  }
}
