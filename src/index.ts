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

/* eslint-disable simple-import-sort/exports */
/* eslint-disable simple-import-sort/imports */
//import './config';
//import './deviceName';
//import './gtag';

import * as webpack from './webpack';

export { webpack };
export { isInjected, isReady } from './webpack';
export * as calcme from './calcme';
export * as auth from './auth';

//export { config } from './config';

export {
  emit,
  emitAsync,
  eventNames,
  getMaxListeners,
  hasListeners,
  listenTo,
  listenerCount,
  listeners,
  listenersAny,
  many,
  off,
  offAny,
  on,
  onAny,
  once,
  prependAny,
  prependListener,
  prependMany,
  prependOnceListener,
  removeAllListeners,
  removeListener,
  setMaxListeners,
  stopListeningTo,
  waitFor,
} from './eventEmitter';

declare const __VERSION__ = '1.0.0';
export const version = __VERSION__;
export const supportedCalcMeVersion = '1.0.0';
export const license = 'Apache-2.0';

webpack.injectLoader();
