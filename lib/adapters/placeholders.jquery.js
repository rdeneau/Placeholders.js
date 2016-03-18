/// <reference path="../../bower_components/jquery/dist/jquery.min.js" />

( function ( $, global ) {

  'use strict';

  var originalValFn = $.fn.val;
  var originalPropFn = $.fn.prop;

  if (global.Placeholders.nativeSupport) {
    return;
  }

  $.fn.val = function (val) {
    var $elem = this;
    var elem = $elem[0];
    var originalValue = originalValFn.apply($elem, arguments);
    var placeholder = global.Placeholders.fn.getPlaceholderValue(elem);
    if (
      val === undefined &&
      originalValue === placeholder &&
      global.Placeholders.fn.isPlaceholderActive(elem)
    ) {
      return '';
    }
    return originalValue;
  };

  $.fn.prop = function ( name, val ) {
    var $elem = this;
    var elem = $elem[0];
    if (
      name === 'value' &&
      val === undefined &&
      global.Placeholders.fn.isPlaceholderActive(elem)
    ) {
      return '';
    }
    return originalPropFn.apply($elem, arguments);
  };
}(jQuery, this) );
