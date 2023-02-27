const puppeteer = require('puppeteer');

( async () => {
  const browser = await puppeteer.launch({ headless: false });
  const [page] = await browser.pages();
  await page.goto('https://ccpa.firstdirectinc.com/')
  console.log('Try to write to the input')
  const first_name = await page.$('#first_name')
  console.log('First name', first_name)
  await page.type('#first_name', 'test')
  await delay(8000);
  await page.close();
  await browser.close();
})()

function delay(time) {
   return new Promise(function(resolve) { 
       setTimeout(resolve, time)
   });
}