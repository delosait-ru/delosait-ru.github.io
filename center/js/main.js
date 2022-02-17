"use strict";

console.log('global');
"use strict";

$(function () {
  'use strict';

  $('.item').first().addClass('active');
  $('.info').first().show().animate({
    width: '70%'
  });
  $('.item').click(function () {
    $(this).addClass("active").siblings('.item').removeClass('active');
    $(this).next().show().animate({
      width: '70%'
    }).siblings('.info').animate({
      width: 0
    }, function () {
      $(this).hide();
    });
  });
});
//# sourceMappingURL=main.js.map
