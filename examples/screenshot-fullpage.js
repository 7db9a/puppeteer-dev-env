/**
 * Copyright 2017 Google Inc. All rights reserved.
 * Modifications copyright (C) 2020 7db9a
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

/**
 * This example was borrowed from
 *
 * https://github.com/puppeteer/puppeteer/tree/9923e56b3ed05cde014c0047a4f65fef7749ebb0/examples
 *
 *
 * The example is modified to run in docker.
 */

'use strict';

const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');

async function launch(options = {}) {
  const browser = await puppeteer.launch(
    Object.assign({args: ['--no-sandbox']}, options)
  )
  return browser
}

(async() => {
  const browser = await launch();
  const page = await browser.newPage();
  await page.emulate(devices['iPhone 6']);
  await page.goto('https://example.com/');
  await page.screenshot({path: 'screenshot-fullpage.png', fullPage: true});
  await browser.close();
})();
