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
// Declare build time variable
declare const TARGET_ENVIRONMENT;

import firebase from "./app";
// import './auth'; // <-- uncomment this line when auth is in TS
import './database';
import './storage';
import './messaging';

// For play purposes
(window as any).firebase = firebase;