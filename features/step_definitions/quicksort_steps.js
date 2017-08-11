Cucumber.defineSupportCode(function(context) {
  var setWorldConstructor = context.setWorldConstructor;
  var Given = context.Given
  var When = context.When
  var Then = context.Then
  
  Given(/^I have put in "([^"]*)"$/, (list) => {
    quicksort(0, list, []);
  });

  Then(/^I expect the list to be "([^"]*)"$/, (sorted) => {
    if(sorted != finalist.final){
		  throw new Error('Variable should contain ' + finalist.final + ' but it contains ' + sorted + '.');
	}
  });
});