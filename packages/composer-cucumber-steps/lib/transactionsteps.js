/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

module.exports = function () {

    this.When(/^I submit the following transactions? of type ([.\w]+)\.(\w+)$/, function (namespace, name, table) {
        return this.composer.submitTransactions(namespace, name, table);
    });

    this.When(/^I submit the following transactions?$/, function (docString) {
        return this.composer.submitTransactions(null, null, docString);
    });

};
