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
import { Customer } from '../../types/Customer';
import { request } from '../../util/request';

/**
 * Função para retornar uma nota fiscal de serviços
 *
 * @example
 * ```javascript
 * await calcme.nfse.getById('42598b80f53b18f0c8402a99');
 * ```
 * @category NFSe
 */
export async function getById(id: string): Promise<any | null> {
  try {
    if (!id) {
      throw new Error('Por favor, informe o ID da nota que deseja buscar');
    }
    const { data }: any = await request.get(`/api/nfse/find/${id}`);
    const nfse: Customer = data?.data;

    if (!nfse) return null;

    return nfse;
  } catch (error: any) {
    if (error?.response?.status === 401) {
      await login();
      return await getById(id);
    } else if (error?.response?.status === 400) {
      return null;
    } else if (error.response) {
      return error.response.data;
    } else {
      return error;
    }
  }
}
