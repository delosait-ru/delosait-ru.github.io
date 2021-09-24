"use strict";

console.log('global');
"use strict";

console.log('maxgraph');
"use strict";

$('.options-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  appendArrows: '.arrows',
  prevArrow: '<button type="button" class="pr-prev"><i class="fa fa-angle-left"></i></button>',
  nextArrow: '<button type="button" class="pr-next"><i class="fa fa-angle-right"></i></button>',
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 826,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 540,
    settings: {
      slidesToShow: 1
    }
  }]
});
$('.slidercost').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  appendArrows: '.arrows2',
  prevArrow: '<button type="button" class="pr-prev"><i class="fa fa-arrow-left"></i></button>',
  nextArrow: '<button type="button" class="pr-next"><i class="fa fa-arrow-right"></i></button>',
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 826,
    settings: {
      slidesToShow: 2
    }
  }, {
    breakpoint: 540,
    settings: {
      slidesToShow: 1
    }
  }]
});
$('.slider-thumb').slick({
  autoplay: false,
  vertical: true,
  infinite: true,
  verticalSwiping: true,
  slidesPerRow: 3,
  slidesToShow: 3,
  asNavFor: '.slider-preview',
  focusOnSelect: true,
  arrows: false,
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
  prevArrow: '<button type="button" class="slick-prev3"><i class="fa fa-arrow-left"></i></button>',
  nextArrow: '<button type="button" class="slick-next3"><i class="fa fa-arrow-right"></i></button>',
  draggable: false,
  responsive: [{
    breakpoint: 767,
    settings: {
      vertical: false,
      fade: true
    }
  }]
}); //Показать больше

var btn = document.querySelector(".btn--red");
var content = document.querySelector(".contents");
btn.addEventListener("click", btnClick);

function btnClick() {
  console.log(content.classList);

  if (content.classList.contains("hidden")) {
    btn.textContent = "Скрыть ▲";
  } else {
    btn.textContent = "Смотреть все ▼";
  }

  content.classList.toggle("hidden");
}
//# sourceMappingURL=main.js.map
