/*Мега меню*/

$(function () {

    $(".sf-menu").superfish({
            delay: 200,
            speed: "fast",
            cssArrows: false
        })
        .after("<div id='mobile-menu'>").clone().appendTo("#mobile-menu");
    $("#mobile-menu").find("*").attr("style", "");
    $("#mobile-menu").children("ul").removeClass("sf-menu")
        .parent().mmenu({
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




$(window).scroll(function () {
    if ($(this).scrollTop() > 220) {
        $('.container-menu').addClass('fixed');
    } else {
        $('.container-menu').removeClass('fixed');
    }
});



/*Слик слайдер  */

$(function () {

    $('.g-slider').slick({

        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        appendArrows: '.collect__arrows',
        prevArrow: '<button type="button" class="pr-prev1"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="pr-next1"><i class="fa fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                }
                    },


            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
                    },

                ]
    });

    $('.maintxt').slick({
        dots: true,
        fade: false,
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
        /*       appendDots: '.my-dots',
               appendArrows: '.arrows',
               prevArrow: '<button type="button" class="pr-prev"><i class="fa fa-angle-left"></i></button>',
               nextArrow: '<button type="button" class="pr-next"><i class="fa fa-angle-right"></i></button>'*/

    });


});

/*Вопрос-ответ аккордеон*/
jQuery(function () {
    var Accordion = function (el, multiple) {
        this.el = el || {};
        // more then one submenu open?
        this.multiple = multiple || false;

        var dropdownlink = this.el.find('.dropdownlink');
        dropdownlink.on('click', {
                el: this.el,
                multiple: this.multiple
            },
            this.dropdown);
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
    }

    var accordion = new Accordion($('.accordion-menu'), false);
});
