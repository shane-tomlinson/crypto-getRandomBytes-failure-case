const fs = require('fs');
const path = require('path');

const { Builder, By, until } = require('selenium-webdriver');

const driver = new Builder()
    .forBrowser('firefox')
    .usingServer('http://localhost:4444/')
    .build();

//driver.get(`file:///${path.join(__dirname, '../index.html')}`);//'http://127.0.0.1:8123');
driver.get('http://127.0.0.1:8123');


driver.wait(until.elementLocated(By.id('numbers')), 1000);

driver.quit();
//process.exit(0)
