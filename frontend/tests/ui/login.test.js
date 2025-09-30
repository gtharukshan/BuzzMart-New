const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { expect } = require('chai');

describe('Login Test', function() {
  this.timeout(60000); // overall timeout

  let driver;

  before(async function() {
    this.timeout(60000);

    // GUI Chrome (non-headless)
    const options = new chrome.Options();
    options.addArguments('--window-size=1920,1080');

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

  it('should login successfully with valid credentials', async function() {
    await driver.get('http://localhost:3000/login');

    await driver.findElement(By.name('email')).sendKeys('testuser@example.com');
    await driver.findElement(By.name('password')).sendKeys('password123');
    await driver.findElement(By.css('button[type="submit"]')).click();

    // Wait until dashboard loads
    await driver.wait(until.urlIs('http://localhost:3000/dashboard'), 10000);

    const currentUrl = await driver.getCurrentUrl();
    expect(currentUrl).to.equal('http://localhost:3000/dashboard');
  });
});
