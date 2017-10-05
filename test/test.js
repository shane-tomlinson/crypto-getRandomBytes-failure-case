const fs = require('fs');
const path = require('path');

const accessMethod = process.env.ACCESS || 'remote';
const quitWhenComplete = process.env.QUIT !== 'false';

const { Builder, By, until } = require('selenium-webdriver');

const driver = new Builder()
    .forBrowser('firefox')
    .usingServer('http://localhost:4444/')
    .build();


if (accessMethod === 'remote') {
    // Fetching from the remote fails.
    driver.get('http://127.0.0.1:8123');
} else if (accessMethod === 'file') {
    // Fetching from the file passes.
    driver.get(`file:///${path.join(__dirname, 'fixtures/index.html')}`);
}

driver.wait(until.elementLocated(By.id('numbers')), 1000)
    .then(null, (err) => {
        console.log('uh oh', String(err));
    })
    .then(() => {
        if (quitWhenComplete) {
            driver.quit();
        }
    });
