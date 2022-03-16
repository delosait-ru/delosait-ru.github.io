"use strict";
"use strict";

$(function () {
  $('#slider-range-max').slider({
    animate: 90,
    range: 'max',
    min: 1,
    max: 100,
    value: 10,
    slide: function slide(event, ui) {
      $('#percent').val(ui.value);
    }
  });
  $('#slider-range-max2').slider({
    animate: 90,
    range: 'max',
    min: 1,
    max: 100,
    value: 10,
    slide: function slide(event, ui) {
      $('#percent').val(ui.value);
    }
  });
});
//# sourceMappingURL=main.js.map
