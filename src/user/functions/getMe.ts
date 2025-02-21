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
import { User } from '../../types/User';
import { request } from '../../util/request';

/**
 * Função que retorna os dados do usuário conectado
 *
 * @example
 * ```javascript
 * await calcme.user.getMe();
 * ```
 * @category User
 */
export async function getMe(): Promise<User> {
  try {
    const { data }: any = await request.get(`/api/user/logged-user`);

    return data.data.user;
  } catch (error: any) {
    if (error.response.status === 401) {
      await login();
      return await getMe();
    } else if (error.response) {
      return error.response.data;
    } else {
      throw error;
    }
  }
}
