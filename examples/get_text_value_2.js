/**
 * This example was borrowed from
 *
 * https://github.com/checkly/puppeteer-examples/blob/c21d1cae325c6fc196429469a6b0480e4524f30e
 *
 *
 * The example is modified to run in docker.
 */

/**
 * @name get text value of an element
 *
 * @desc Gets the text value of an element by using the page.$eval method
 *
 */
const puppeteer = require('puppeteer');

async function launch(options = {}) {
  const browser = await puppeteer.launch(
    Object.assign({args: ['--no-sandbox']}, options)
  )
  return browser
}

(async () => {
  const browser = await launch()
  const page = await browser.newPage()
  await page.goto('https://news.ycombinator.com/news')
  const name = await page.$eval('.pagetop > a', el => el.innerText)
  console.log(name)
  await browser.close()
})()
