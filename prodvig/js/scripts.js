$('.btn_box a').on('click', function () {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 600, // РїРѕ СѓРјРѕР»С‡Р°РЅРёСЋ В«400В» 
        easing: "swing" // РїРѕ СѓРјРѕР»С‡Р°РЅРёСЋ В«swingВ» 
    });

    return false;
});


/*Слик слайдер  */


$(function () {

    $('.slider_tizer').slick({

        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        /*         variableWidth: true,*/
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
                breakpoint: 980,
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
            {
                breakpoint: 479,
                settings: {
                    slidesToShow: 1,
                }
                    },
                ]
    });

    $('.slider_program').slick({
        dots: true,
        dotsClass: "my-dots",
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        appendArrows: '.arrows1',
        prevArrow: '<button type="button" class="pr-prev1"><i class="fa fa-angle-left"></i></button>',
        nextArrow: '<button type="button" class="pr-next1"><i class="fa fa-angle-right"></i></button>',

    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: false,
        focusOnSelect: true

    });

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
});






/*Стрелка вверх*/
$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});

/*Маска ввода для форм*/
$(function () {
    $(".phone_mask").mask("8(999) 999-99-99");

});

/*E-mail Ajax Send*/
$(document).ready(function () {
    $(".form1").submit(function () { //Change

        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            $('#success1').fadeIn(500).delay(2700).fadeOut(600);
            $('.fade').fadeIn(500).delay(2700).fadeOut(600);
            document.getElementById('success1');
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});


$(document).ready(function () {


    $(".form2").submit(function () { //Change

        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            $('#success2').fadeIn(500).delay(2700).fadeOut(600);
            $('.fade').fadeIn(500).delay(2700).fadeOut(600);
            document.getElementById('success2');
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});



$(document).ready(function () {


    $(".form3").submit(function () { //Change

        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function () {
            $('#success3').fadeIn(500).delay(2700).fadeOut(600);
            $('.fade').fadeIn(500).delay(2700).fadeOut(600);
            document.getElementById('success3');
            setTimeout(function () {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});
