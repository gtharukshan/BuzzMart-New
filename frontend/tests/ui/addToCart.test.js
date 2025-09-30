const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { expect } = require('chai');

describe('Add to Cart Test', function() {
  this.timeout(60000); // overall timeout

  let driver;

  before(async function() {
    this.timeout(60000);

    // GUI Chrome (non-headless)
    const options = new chrome.Options();
    options.addArguments('--window-size=1920,1080'); // optional: set window size

    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(options)
      .build();
  });

  after(async function() {
    if (driver) {
      await driver.quit();
    }
  });

  it('should add a product to the cart', async function() {
    await driver.get('http://localhost:3000');

    // Click "Add to Cart" on first product
    await driver.findElement(By.css('.product-card:first-child button.add-to-cart')).click();

    // Wait until cart count updates
    await driver.wait(until.elementLocated(By.css('.cart-count')), 10000);

    const cartCount = await driver.findElement(By.css('.cart-count')).getText();
    expect(cartCount).to.equal('1');
  });
});
