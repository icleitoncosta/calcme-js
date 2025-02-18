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

import fs from 'fs/promises';
import path from 'path';

import { config } from '../../config';
import userData from '../../user.json';
import { request } from '../../util/request';
import { Printshop } from '../../types/PrintShop';
import { User } from '../../types/User';

interface Login {
  username: string;
  password: string;
}

interface ResponseLoginData {
  data: {
    token: string;
    user: User;
    printshop: Printshop;
    menu: any[][];
    auth: any[];
  };
  errors: any[]; // Or a more specific error type
  totalElements: null;
  ids: null;
}
/**
 * Function to login user, and get data
 *
 * @example
 * ```javascript
 * // Get login data
 * await calcme.login({username: 'usuario@gmail.com', password: 'senha@123'});
 * ```
 * @category Auth
 */

export async function login(loginData?: Login): Promise<ResponseLoginData> {
  const user = loginData?.username ? loginData.username : userData.login;
  const pass = loginData?.password ? loginData.password : userData.password;

  try {
    const { data }: any = await request.post('/login', {
      username: user,
      password: pass,
      lookup: config.fakeLookup,
    });
    if (data.errors.length === 0) {
      userData.login = user;
      userData.password = pass;
      userData.token = data.data.token;
      await fs.writeFile(
        path.join(__dirname, '../../user.json'),
        JSON.stringify(userData, null, 2)
      );
    }
    return data;
  } catch (error: any) {
    if (error.response) {
      return error.response.data;
    } else {
      return error;
    }
  }
}
