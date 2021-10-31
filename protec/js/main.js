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
$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesPerRow: 2,
      slidesToShow: 2,
      appendArrows: '.arrows',
      prevArrow: '<button type="button" class="slick-prev3"><i class="fa fa-angle-up"></i></button>',
      nextArrow: '<button type="button" class="slick-next3"><i class="fa fa-angle-down"></i></button>'
    }
  }]
});
$('.services__slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  appendArrows: '.services__arrows',
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
$('.catalog_slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  appendArrows: '.l-arrows',
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
  nextArrow: '<button type="button" class="slick-nextt3"><i class="fa fa-angle-down"></i></button>',
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
//# sourceMappingURL=main.js.map
