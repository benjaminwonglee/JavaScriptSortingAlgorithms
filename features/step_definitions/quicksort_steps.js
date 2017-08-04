// stepdefinitions.js
const expect = require('chai').expect;

module.exports = function () {
  this.Given(/^I have put in "([^"]*)"$/, (list) => {
    quicksort(0, list, []);
  });

  this.Then(/^I expect the list to be "([^"]*)"$/, (sorted) => {
    expect(browser.getTitle()).to.be.eql(title);
  });
}