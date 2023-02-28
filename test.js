const puppeteer = require('puppeteer');
( async () => {
  const selector = '#last_name'
  const browser = await puppeteer.launch({ headless: false });
  const [page] = await browser.pages();
  await page.goto('https://ccpa.firstdirectinc.com/')
  console.log('Wait for Selector')
  await page.waitForSelector(selector, { visible: true })
  const elem = await page.$(selector)
  console.log('First name: ', elem)
  await page.type(selector, 'test')
  await delay(8000);
  await page.close();
  await browser.close();
})()

function delay(time) {
   return new Promise(function(resolve) { 
       setTimeout(resolve, time)
   });
}