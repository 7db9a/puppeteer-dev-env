/**
 * This example was borrowed from
 *
 * https://github.com/checkly/puppeteer-examples/blob/c21d1cae325c6fc196429469a6b0480e4524f30e
 *
 *
 * The example is modified to run in docker.
 */

/**
 * @name get list of links
 *
 * @desc Scrapes Hacker News for links on the home page and returns the top 10
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
  await page.tracing.start({
    path: 'trace.json',
    categories: ['devtools.timeline']
})
  await page.goto('https://news.ycombinator.com/news')

  // execute standard javascript in the context of the page.
  const stories = await page.$$eval('a.storylink', anchors => { return anchors.map(anchor => anchor.textContent).slice(0, 10) })
  console.log(stories)
  await page.tracing.stop();
  await browser.close()
})()
