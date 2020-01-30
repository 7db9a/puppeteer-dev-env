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
  await page.goto('https://www.nytimes.com/');
  await page.screenshot({path: 'full.png', fullPage: true});
  await browser.close();
})();
