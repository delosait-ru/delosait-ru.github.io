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
/*Боковое меню*/

document.querySelector('#nav-icon').addEventListener('click', function () {
  document.querySelector('.menu_mobile').classList.add('active');
  document.querySelector('.close-menu').classList.add('close-menu-active');
});
document.querySelector('.close-menu').addEventListener('click', function () {
  document.querySelector('.menu_mobile').classList.remove('active');
  document.querySelector('.close-menu').classList.remove('close-menu-active');
});
document.querySelector('.btn-box').addEventListener('click', function () {
  document.querySelector('.menu_mobile').classList.remove('active');
  document.querySelector('.close-menu').classList.remove('close-menu-active');
});
document.querySelector('.btn-box1').addEventListener('click', function () {
  document.querySelector('.menu_mobile').classList.remove('active');
  document.querySelector('.close-menu').classList.remove('close-menu-active');
});
document.querySelector('.btn-box2').addEventListener('click', function () {
  document.querySelector('.menu_mobile').classList.remove('active');
  document.querySelector('.close-menu').classList.remove('close-menu-active');
});
/*Маска ввода для форм*/

$(".mask").mask("8(999) 999-99-99");
$(window).scroll(function () {
  if ($(this).scrollTop() > 102) {
    $('.menu_wrap').addClass('scrolled');
  } else {
    $('.menu_wrap').removeClass('scrolled');
  }
});
/*Боковое меню аккордеон*/

jQuery(function () {
  var Accordion = function Accordion(el, multiple) {
    this.el = el || {}; // more then one submenu open?

    this.multiple = multiple || false;
    var dropdownlink = this.el.find('.dropdownlink');
    dropdownlink.on('click', {
      el: this.el,
      multiple: this.multiple
    }, this.dropdown);
  };

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el,
        $this = $(this),
        //this is the ul.submenuItems
    $next = $this.next();
    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      //show only one menu at the same time
      $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
    }
  };

  var accordion = new Accordion($('.accordion-menu'), false);
});
/*Слик слайдер  */

$(function () {
  $('.slider').slick({
    dots: true,
    fade: false,
    infinite: true,
    speed: 500,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 3000,
    appendDots: '.my-dots',
    appendArrows: '.arrows',
    prevArrow: '<button type="button" class="pr-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="pr-next"><i class="fa fa-angle-right"></i></button>'
  });
  $('.collect__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    appendArrows: '.collect__arrows',
    prevArrow: '<button type="button" class="pr-prev1"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="pr-next1"><i class="fa fa-angle-right"></i></button>',
    responsive: [{
      breakpoint: 1400,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  $('.collect__slider2').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    appendArrows: '.collect__arrows2',
    prevArrow: '<button type="button" class="pr-prev1"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="pr-next1"><i class="fa fa-angle-right"></i></button>',
    responsive: [{
      breakpoint: 1400,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  $('.collect__slider3').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    appendArrows: '.collect__arrows3',
    prevArrow: '<button type="button" class="pr-prev1"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="pr-next1"><i class="fa fa-angle-right"></i></button>',
    responsive: [{
      breakpoint: 1400,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  $('.collect__slider4').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    appendArrows: '.collect__arrows4',
    prevArrow: '<button type="button" class="pr-prev1"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="pr-next1"><i class="fa fa-angle-right"></i></button>',
    responsive: [{
      breakpoint: 1400,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  $('.collect__slider5').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    appendArrows: '.collect__arrows5',
    prevArrow: '<button type="button" class="pr-prev1"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="pr-next1"><i class="fa fa-angle-right"></i></button>',
    responsive: [{
      breakpoint: 1400,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 1
      }
    }]
  });
  $(".ms__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    appendArrows: '.ms__arrows',
    prevArrow: '<button type="button" class="pr-prev1"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="pr-next1"><i class="fa fa-angle-right"></i></button>'
  });
  $('.dropdownlink2').on('click', function (e) {
    $(".ms__slider2").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      appendArrows: '.ms__arrows2',
      prevArrow: '<button type="button" class="pr-prev1"><i class="fa fa-angle-left"></i></button>',
      nextArrow: '<button type="button" class="pr-next1"><i class="fa fa-angle-right"></i></button>'
    });
  });
  $('.dropdownlink3').on('click', function (e) {
    $(".ms__slider3").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      appendArrows: '.ms__arrows3',
      prevArrow: '<button type="button" class="pr-prev1"><i class="fa fa-angle-left"></i></button>',
      nextArrow: '<button type="button" class="pr-next1"><i class="fa fa-angle-right"></i></button>'
    });
  });
  $('.dropdownlink4').on('click', function (e) {
    $(".ms__slider4").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      appendArrows: '.ms__arrows4',
      prevArrow: '<button type="button" class="pr-prev1"><i class="fa fa-angle-left"></i></button>',
      nextArrow: '<button type="button" class="pr-next1"><i class="fa fa-angle-right"></i></button>'
    });
  });
  $('.dropdownlink5').on('click', function (e) {
    $(".ms__slider5").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2000,
      appendArrows: '.ms__arrows5',
      prevArrow: '<button type="button" class="pr-prev1"><i class="fa fa-angle-left"></i></button>',
      nextArrow: '<button type="button" class="pr-next1"><i class="fa fa-angle-right"></i></button>'
    });
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
//# sourceMappingURL=main.js.map
