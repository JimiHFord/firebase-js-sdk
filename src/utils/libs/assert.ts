/**
* Copyright 2017 Google Inc.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
 * Returns an Error object suitable for throwing.
 * @param {string} message
 * @return {!Error}
 */
export function assertionError(message) {
  return new Error('Firebase Database (${JSCORE_VERSION}) INTERNAL ASSERT FAILED: ' + message);
};


/**
 * Throws an error if the provided assertion is falsy
 * @param {*} assertion The assertion to be tested for falsiness
 * @param {!string} message The message to display if the check fails
 */
export function assert(assertion, message) {
  if (!assertion) {
    throw assertionError(message);
  }
};