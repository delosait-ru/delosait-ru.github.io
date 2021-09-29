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


/*Поиск*/

$(document).ready(function () {
    var searchBlock = $('#form');
    $(document).on('click', '#open', function () {
        searchBlock.slideToggle();
        return false;
    });
});




/*Слайдеры */


$(function () {

    $('.slider_main').slick({
        dots: false,
        fade: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: false,
        autoplaySpeed: 3000,


        appendArrows: '.main_arrows',

        prevArrow: '<button type="button" class="pr-prev1"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="pr-next1"><i class="fa fa-angle-right"></i></button>'

    });
    /*рекомендуемые и последние поступления*/
    $('.product_slider').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        appendArrows: '.arrows',
        prevArrow: '<button type="button" class="pr-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="pr-next"><i class="fa fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
                    },


            {
                breakpoint: 826,
                settings: {
                    slidesToShow: 2,
                }
                    },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                }
                    },

                ]
    });
    $('.product_slider2').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        appendArrows: '.arrows2',
        prevArrow: '<button type="button" class="pr-prev"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="pr-next"><i class="fa fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
                    },


            {
                breakpoint: 826,
                settings: {
                    slidesToShow: 2,
                }
                    },
            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                }
                    },

                ]
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
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesPerRow: 3,
                    slidesToShow: 3,
                }
                    },




            {

                breakpoint: 767,
                settings: {
                    vertical: false,
                }
                    },
            {
                breakpoint: 479,
                settings: {
                    vertical: false,
                    slidesPerRow: 3,
                    slidesToShow: 3,
                }
                    },
                ]
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
        responsive: [

            {
                breakpoint: 767,
                settings: {
                    vertical: false,
                    fade: true,
                }
                }, ]
    });

});


/*
Тултипы
*/

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})




/*Маска ввода для форм*/

$(function () {
    $(".mask").mask("8(999) 999-99-99");

});






/*Боковое меню аккордеон*/
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
})


// Инпут с "плюс" "минус"
$('.ui-quantity__btn').click(function () {
    var $_inp = $(this).closest('.ui-quantity').find('input');
    var $_step = 1;
    if ($(this).hasClass('ui-quantity__minus')) {
        var $_val = parseInt($(this).closest('.ui-quantity').find('input').val().replace(/\s/g, '')) - $_step;
    } else {
        var $_val = parseInt($(this).closest('.ui-quantity').find('input').val().replace(/\s/g, '')) + $_step;
    }

    $_inp.val($_val + " " + $_inp.data('units'));

    $_inp.trigger('propertychange');
    return false;
});
$('.ui-quantity input').bind('input propertychange', function () {
    var $this = $(this);
    if ($this.val().length == 0 || parseInt($this.val()) <= 0)
        $this.val(1 + " " + $(this).data('units'));
});



//кастомные селекты

let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');

    }

};


select();
