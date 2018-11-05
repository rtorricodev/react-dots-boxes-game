const { Given, When, Then } = require('cucumber');
const Browser = require('zombie');
Browser.localhost('localhost', 3000);
browser = new Browser();


Given('basic board page visited', function () {
    browser.visit('/board');
});

Then('it should show the table and the title {string}', function (string) {
    browser.visit('/board', () => {
        browser.assert.text('#board-size', string);
    });
});

