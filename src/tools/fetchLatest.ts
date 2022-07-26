/*!
 * Copyright 2021 Saturno Team
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
//import fetch from 'node-fetch';
//import path from 'path';

export const CALCME_URL = 'https://app.calcme.com.br/';
export const USER_AGENT =
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36';
//export const HTML_DIR = path.resolve(__dirname, '../html');

/**
 * Retorna HTML contendo a página atual do CalcMe
 * @returns HTML da página
 */
export async function fetchLatest(): Promise<string> {
  const { data }: any = await axios.get(CALCME_URL, {
    headers: {
      'user-agent': USER_AGENT,
      'accept-language': 'en-US,en;q=1',
      'sec-fetch-mode': 'navigate',
      cookie: 'wa_lang_pref=en',
      pragma: 'no-cache',
      'cache-control': 'no-cache',
    },
  });
  return data;
}
