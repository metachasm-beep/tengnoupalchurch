import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('BROWSER ERROR:', msg.text());
    }
  });
  
  page.on('pageerror', error => {
    console.log('PAGE ERROR:', error.message);
  });

  console.log('Navigating to localhost:4173...');
  await page.goto('http://localhost:4173/');
  
  await new Promise(r => setTimeout(r, 1000));
  
  console.log('Scrolling to project fold...');
  await page.evaluate(() => {
    const el = document.getElementById('project');
    if (el) el.scrollIntoView();
  });
  
  await new Promise(r => setTimeout(r, 1000));
  
  // Click next button in carousel to go to Slide 2
  console.log('Clicking next carousel button...');
  const nextBtn = await page.$('#project .absolute.bottom-12.right-24 button:nth-child(2)');
  if (nextBtn) {
    await nextBtn.click();
    await new Promise(r => setTimeout(r, 1000));
  }
  
  console.log('Taking screenshot before click...');
  await page.screenshot({ path: 'before_click.png' });

  console.log('Clicking the image...');
  const images = await page.$$('#project img.cursor-zoom-in');
  if (images.length > 0) {
    await images[0].click();
    await new Promise(r => setTimeout(r, 1000));
    console.log('Clicked image 0');
  }
  
  console.log('Taking screenshot after click...');
  await page.screenshot({ path: 'after_click.png' });

  console.log('Done.');
  await browser.close();
})();
