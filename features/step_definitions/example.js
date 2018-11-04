const { Given, When, Then } = require('cucumber');
const Browser = require('zombie');
Browser.localhost('example.com', 3000);
const browser = new Browser();



Given('the initial menu loaded', function () {
    browser.visit('/');
})

When('I click on th button <play>', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

Then('the it should show the page with the title <welcome>', function () {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});

