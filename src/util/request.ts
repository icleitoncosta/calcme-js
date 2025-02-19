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

import axios from 'axios';

import { login } from '../auth';
import { config } from '../config';
import userData from '../user.json';

const request = axios.create({
  baseURL: config.baseURL,
  timeout: 10000,
  headers: { 'x-access-token': userData.token as string },
});

request.defaults.headers.common['Authorization'] = `Bearer ${userData.token}`;

request.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error?.response?.status === 401) {
      await login();
    }
    throw error;
  }
);

export { request };
