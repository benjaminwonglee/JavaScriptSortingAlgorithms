// stepdefinitions.js
const expect = require('chai').expect;

module.exports = function () {
  this.Given(/^I have put in "([^"]*)"$/, ("[10, 5, 7, 9]") => {
    quicksort(0, list, []);
  });

  this.Then(/^I expect the list to be "([^"]*)"$/, (sorted) => {
    console.log(finalist.final);
  });
}