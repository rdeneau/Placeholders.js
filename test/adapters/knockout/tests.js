/// <reference path="../../../bower_components/knockout/dist/knockout.js" />

var expectedValues = {
  value1: '',
  value2: 'Initial value',
  value3: '',
  value4: 'Value to clear',
  results: ''
};

var viewModel = {};
for (var prop in expectedValues) {
  if (expectedValues.hasOwnProperty(prop)) {
    viewModel[prop] = ko.observable(expectedValues[prop]);
  }
}
ko.applyBindings(viewModel);

setTimeout(function () {

  // Changing value2, filling value3 and clearing value4
  expectedValues.value2 += ' changed';
  expectedValues.value3 = 'New value';
  expectedValues.value4 = '';

  for (var prop in expectedValues) {
    if (expectedValues.hasOwnProperty(prop)) {
      viewModel[prop](expectedValues[prop]);
    }
  }


  setTimeout(function () {
    var results = "Knockout Test Results";

    for (var prop in expectedValues) {
      if (expectedValues.hasOwnProperty(prop)) {
        viewModel[prop](expectedValues[prop]);
        results += '\n- Prop "' + prop + '": ' + (viewModel[prop]() === expectedValues[prop] ? 'OK' : ('KO ("' + viewModel[prop]() + '" != "' + expectedValues[prop] + '")'));
      }
    }

    viewModel.results(results);
  }, 1000);

}, 1000);
