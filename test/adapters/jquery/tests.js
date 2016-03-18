/// <reference path="../../../bower_components/jquery/dist/jquery.min.js" />

setTimeout(function () {

  // Test changing placeholder attribute value
  document
  .getElementById('handle1')
  .setAttribute('placeholder', 'This value has changed');

  // Test created placeholder attribute value
  document
  .getElementById('handle2')
  .setAttribute('placeholder', 'This value has been added');

  // Test input type changing after page load
  try {
    document.getElementById('handle3').type = 'password';
  } catch ( e ) {
    // This will fail in IE < 9
  }

  setTimeout(function () {

    var results = "JQuery Test Results";

    // The behaviour of `val` and `prop` as getters should be patched
    results += '\n\n1/ Behaviour of `val` and `prop` as getters:';
    var ids = ['jq1', 'jq2', 'handle1', 'handle2', 'handle3'], id, value;
    for (var i = 0; i < ids.length; i++) {
      id = ids[i];
      value = id === 'jq2' ? 'Initial value' : '';
      results += "\n[Element #" + id + ']';
      results += ' - val: ' + ($('#' + id).val() === value ? 'OK' : ('KO ("' + $('#' + id).val() + '" != "' + value + '")'));
      results += ' - prop: ' + ($('#' + id).prop('value') === value ? 'OK' : ('KO ("' + $('#' + id).prop('value') + '" != "' + value + '")'));
    }

    // The behaviour of `val` and `prop` as setters should not be affected)
    results += '\n\n2/ Behaviour of `val` and `prop` as setters:';
    value = 'set new';
    results += '\n- val : ' + ($('#jq1').val(value).val() === value ? 'OK' : ('KO ("' + $('#jq1').val() + '" != "' + value + '")'));
    results += '\n- prop: ' + ($('#handle3').prop('value', 'another new') instanceof $ ? 'OK' : 'KO (not instanceof $"'); // Don't check the value because it's a password input

    $('#jq1').val('');
    $('#handle3').prop('value', '');

    $("#results").text(results);
  }, 1000);

}, 1000);
