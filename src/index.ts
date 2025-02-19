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

import { Customer } from './types/Customer';

export * as auth from './auth';
export * as budget from './budget';
export * as customer from './customer';
export * as nfse from './nfse';
export * as orders from './orders';
export * as sellers from './sellers';

export const customers: Customer[] = [];
export const products = [];

//export { config } from './config';
export const license = 'Apache-2.0';
