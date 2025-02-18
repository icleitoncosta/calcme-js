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
import { ConfigNFSe } from '../../types/ConfigNFSe';
import { Printshop } from '../../types/PrintShop';
import { Seller } from '../../types/Seller';
import { request } from '../../util/request';

/**
 * Function to get all sellers
 * Função para retornar todos os vendedores
 *
 * @example
 * ```javascript
 * await calcme.sellers.all();
 * ```
 * @category Budget
 */
export async function getConfig(): Promise<{
  data: {
    printShop: Printshop,
    rpsNfse: number,
    configNfse: ConfigNFSe,
    serieNfse: string,
  }
  errors: any[];
  totalElements: null;
  ids: null;
}> {
  try {
    const { data }: any = await request.get(`/api/nfse/configs/`);
    return data;
  } catch (error: any) {
    if (error.response.status === 401) {
      await login();
      return await getConfig();
    } else if (error.response) {
      return error.response.data;
    } else {
      return error;
    }
  }
}
