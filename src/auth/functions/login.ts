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

import { config } from '../../config';
import { request } from '../../util/request';

interface Login {
  username?: string;
  password?: string;
}
/**
 * Function to login user
 *
 * @param loginData {username: "seu_usuario", password: "suasenha" }
 * @returns void
 */
export async function login(loginData?: Login): Promise<{
  data: {
    token: string;
    user: any;
    printshop: any;
    menu: any;
    auth: {
      authority: string;
    }[];
  };
  errors: any;
}> {
  const user = loginData?.username ? loginData.username : config.login;
  const pass = loginData?.password ? loginData.password : config.password;

  try {
    const { data }: any = await request.post('/login', {
      username: user,
      password: pass,
      lookup: config.fakeLookup,
    });
    if (data.errors.length === 0) {
      config.token = data.data.token;
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
