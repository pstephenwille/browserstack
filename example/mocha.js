var assert = require('assert'),
  fs = require('fs');

var webdriver = require('browserstack-webdriver'),
test = require('browserstack-webdriver/testing');

test.describe('ars login', function() {
  var driver, server;

  test.before(function() {
    var capabilities = {
      'browserName' : 'firefox',
      'browserstack.user' : 'stephenwille1',
      'browserstack.key' : 'CK6vaR6UxtZnk5MnhhMo'
    }
    driver = new webdriver.Builder().
      usingServer('http://localhost:4444/wd/hub').
      withCapabilities(capabilities).
      build();
  });

  test.it('should log into ars technica', function() {
    driver.get('http://arstechnica.com/').then(function () {
      driver.sleep(100);
    });
  });
  test.it('login', function () {
    driver.findElement(webdriver.By.css('#login')).click().then(function () {
      driver.sleep(100);
    });
    driver.findElement(webdriver.By.css('#username')).sendKeys('stephendev');
    driver.findElement(webdriver.By.css('#password')).sendKeys('woot-woot');
    driver.wait(function() {
      return driver.getTitle().then(function(title) {
        return 'BrowserStack - Google Search' === title;
      });
    }, 1000);
  });


  test.after(function() { driver.quit(); });
});

/*
install protractor
 npm install -g protractor
 webdriver-manager update
 webdriver-manager start
npm install -g browserstack-webdriver
mocha mocha.js */