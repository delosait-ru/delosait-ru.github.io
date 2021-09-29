"use strict";

console.log('global');
"use strict";

console.log('maxgraph');
"use strict";

/**
 * название функции
 *
 * @param {number} first - первое число
 * @returns {number}
 */

/*Мега меню*/
$(function () {
  $(".sf-menu").superfish({
    delay: 200,
    speed: "fast",
    cssArrows: false
  }).after("<div id='mobile-menu'>").clone().appendTo("#mobile-menu");
  $("#mobile-menu").find("*").attr("style", "");
  $("#mobile-menu").children("ul").removeClass("sf-menu").parent().mmenu({
    extensions: ['widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black'],
    navbar: {
      title: "Меню"
    }
  });
  $(".toggle-mnu").click(function () {
    $(this).addClass("on");
  });
  var api = $("#mobile-menu").data("mmenu");
  api.bind("closed", function () {
    $(".toggle-mnu").removeClass("on");
  });
});
/*Фиксируем шапку*/

$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('.top-part').addClass('fixed');
  } else {
    $('.top-part').removeClass('fixed');
  }
});
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $('header').addClass('mfixed');
  } else {
    $('header').removeClass('mfixed');
  }
});
/*Слик слайдер  */

$(function () {
  $('.catalog_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    appendArrows: '.arrows',
    prevArrow: '<button type="button" class="pr-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="pr-next"><i class="fa fa-angle-right"></i></button>',
    responsive: [{
      breakpoint: 1400,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 980,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 622,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  /*карточка товара*/

  $('.slider-thumb').slick({
    autoplay: false,
    vertical: true,
    infinite: true,
    verticalSwiping: true,
    slidesPerRow: 4,
    slidesToShow: 4,
    asNavFor: '.slider-preview',
    focusOnSelect: true,
    prevArrow: '<button type="button" class="slick-prev3"><i class="fa fa-angle-up"></i></button>',
    nextArrow: '<button type="button" class="slick-next3"><i class="fa fa-angle-down"></i></button>',
    responsive: [{
      breakpoint: 1200,
      settings: {
        slidesPerRow: 3,
        slidesToShow: 3
      }
    }, {
      breakpoint: 767,
      settings: {
        vertical: false
      }
    }, {
      breakpoint: 479,
      settings: {
        vertical: false,
        slidesPerRow: 3,
        slidesToShow: 3
      }
    }]
  });
  $('.slider-preview').slick({
    autoplay: false,
    vertical: true,
    infinite: true,
    slidesPerRow: 1,
    slidesToShow: 1,
    asNavFor: '.slider-thumb',
    arrows: false,
    draggable: false,
    responsive: [{
      breakpoint: 767,
      settings: {
        vertical: false,
        fade: true
      }
    }]
  });
});
$('.btn_box a').on('click', function () {
  var href = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(href).offset().top
  }, {
    duration: 600,
    easing: "swing"
  });
  return false;
});
/*
Тултипы
*/

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-tooltip="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
//# sourceMappingURL=main.js.map
