const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function testChrome() {
  try {
    // Chrome options
    const options = new chrome.Options();

    // ----- HEADLESS MODE -----
    // options.addArguments('--headless', '--disable-gpu', '--window-size=1920,1080');

    // ----- GUI MODE -----
    options.addArguments('--window-size=1920,1080'); // Remove '--headless' to see browser

    // Optional: specify Chrome binary path if multiple versions installed
    // options.setChromeBinaryPath("C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe");

    const driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();

    // Open Google and print the title
    await driver.get('https://www.google.com');
    const title = await driver.getTitle();
    console.log('Page title:', title);

    // Quit browser
    await driver.quit();
    console.log('✅ ChromeDriver test completed successfully!');
  } catch (err) {
    console.error('❌ Error running ChromeDriver test:', err);
  }
})();
