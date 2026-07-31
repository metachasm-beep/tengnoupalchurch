import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('BROWSER ERROR:', msg.text());
    }
  });
  
  page.on('pageerror', error => {
    console.log('PAGE ERROR:', error.message);
  });

  console.log('Navigating to localhost:5173...');
  await page.goto('http://localhost:5173/');
  
  console.log('Scrolling to project fold...');
  await page.evaluate(() => {
    const el = document.getElementById('project');
    if (el) el.scrollIntoView();
  });
  
  await page.waitForTimeout(1000);
  
  // Click next button in carousel to go to Slide 2
  console.log('Clicking next carousel button...');
  const nextBtn = await page.$('#project .absolute.bottom-12.right-24 button:nth-child(2)');
  if (nextBtn) {
    await nextBtn.click();
    await page.waitForTimeout(1000);
  } else {
    console.log('Next button not found');
  }
  
  console.log('Clicking the image...');
  const images = await page.$$('#project img.cursor-zoom-in');
  if (images.length > 0) {
    await images[0].click();
    await page.waitForTimeout(1000);
    console.log('Clicked image 0');
  } else {
    console.log('No ImageModal images found in project fold');
  }
  
  console.log('Done.');
  await browser.close();
})();
