// Import Playwright
const { chromium } = require('playwright');

(async () => {
  // Launch browser in headless mode (browser not visible)
  const browser = await chromium.launch({ headless: true }); // You can set headless to false to see the browser

  // Create a new browser page
  const page = await browser.newPage();

  // Navigate to the target website
  await page.goto('https://example.com');

  // Verify that the page contains the expected text
  const text = await page.textContent('body'); // Get the full body text of the page
  if (text.includes('Example Domain')) {
    console.log('Test passed: "Example Domain" text is found!');
  } else {
    console.log('Test failed: Expected text "Example Domain" not found.');
  }

  // Close the browser
  await browser.close();
})();
