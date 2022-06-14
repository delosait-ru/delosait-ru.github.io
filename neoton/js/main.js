/*Меню каталог*/

$(function () {

    $(".sf-menu").superfish({
            delay: 200,
            speed: "fast",
            cssArrows: false,
            pathLevels: 3,
            speedOut: 'fast'

        })
        .after("<div id='mobile-menu'>").clone().appendTo("#mobile-menu");
    $("#mobile-menu").find("*").attr("style", "");
    $("#mobile-menu").children("ul").removeClass("sf-menu")
        .parent().mmenu({
            extensions: ['widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black'],
            navbar: {
                title: "Каталог"

            }
        });

    $(".toggle-mnu").click(function () {
        $(this).addClass("on");

    });

    var api = $("#mobile-menu").data("mmenu");
    api.bind("closed", function () {
        $(".toggle-mnu").removeClass("on");
    });
})


$(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
        $('mm-panel').addClass('mm-current');
    } else {
        $('#mm-0').removeClass('mm-current');
    }
});



/*Показываем вложенность  сразу второго уровня в мобильной версии в каталоге*/

$(document).ready(function () {
    var elem = document.getElementById("mm-1");
    elem.classList.add("mm-hidden");
})
$(document).ready(function () {
    var elem = document.getElementById("mm-2");
    elem.classList.remove("mm-hidden");
})

$(document).ready(function () {
    var elem = document.getElementById("mm-2");
    elem.classList.add("mm-opened");
})





/*Главное меню*/
const burger = document?.querySelector('[data-burger]');
const nav = document?.querySelector('[data-nav]');
const navItems = nav?.querySelectorAll('a');
const body = document.body;
const header = document?.querySelector('.header');
const headerHeight = header.offsetHeight;


burger?.addEventListener('click', () => {
    body.classList.toggle('stop-scroll');
    burger?.classList.toggle('burger--active');
    nav?.classList.toggle('nav--visible');
});

navItems.forEach(el => {
    el.addEventListener('click', () => {
        body.classList.remove('stop-scroll');
        burger?.classList.remove('burger--active');
        nav?.classList.remove('nav--visible');
    });
});
