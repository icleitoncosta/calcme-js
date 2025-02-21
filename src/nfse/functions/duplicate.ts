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

import { nfse } from '../..';
import { login } from '../../auth';
import { request } from '../../util/request';

/**
 * Função para duplicar uma nota fiscal ja emitida
 *
 * @example
 * ```javascript
 * await calcme.nfse.duplicate('67b8a34053a154038as6d5de');
 * ```
 * @category NFSe
 */
export async function duplicate(id: string): Promise<boolean> {
  try {
    if (!id) {
      throw new Error('Por favor, informe o ID da nota que deseja duplicar');
    }
    const nf = await nfse.getById(id);
    if (!nf) {
      throw new Error(`Nota fiscal não encontrada pelo ID ${id} informado`);
    }

    const { data }: any = await request.post(`/api/nfse/duplicate`, nf);
    if (data.errors.length === 0) {
      return true;
    } else {
      return false;
    }
  } catch (error: any) {
    if (error.response.status === 400) {
      throw error;
    } else if (error.response.status === 401) {
      await login();
      return await duplicate(id);
    } else if (error.response) {
      return error.response.data;
    } else {
      throw error;
    }
  }
}
