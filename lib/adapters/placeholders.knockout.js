/// <reference path="../../bower_components/knockout/dist/knockout.js" />

( function ( ko, global ) {

  'use strict';

  var originalReadValue = ko.selectExtensions.readValue;
  var originalWriteValue = ko.selectExtensions.writeValue;

  if (global.Placeholders.nativeSupport) {
    return;
  }

  ko.selectExtensions.readValue = function (elem) {
    var originalValue = originalReadValue.apply(this, arguments);
    if (
      originalValue === placeholder &&
      global.Placeholders.fn.isPlaceholderActive(elem)
    ) {
      return '';
    }
    return originalValue;
  };

  ko.selectExtensions.writeValue = function (elem, value, allowUnset) {
    var result = originalWriteValue.apply(this, arguments);
    return result;
  };

}(ko, this) );
