var webdriver = require('browserstack-webdriver');

// Input capabilities
var capabilities = {
  'browserName' : 'firefox',
  'browserstack.user' : 'stephenwille1',
  'browserstack.key' : 'CK6vaR6UxtZnk5MnhhMo',
  'browserstack.local' : 'true',
  'browserstack.localIdentifier' : 'Test123'
}

var driver = new webdriver.Builder().
  usingServer('http://localhost:4444/wd/hub').
  withCapabilities(capabilities).
  build();

driver.get('http://www.google.com/ncr');
driver.findElement(webdriver.By.name('q')).sendKeys('BrowserStack');
driver.findElement(webdriver.By.name('btnG')).click();

driver.getTitle().then(function(title) {
  console.log(title);
});

driver.quit();