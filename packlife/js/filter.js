// Вызов окна с фильтрами на мобильных устройствах

$(function () {

    // мобильный фильтр
    $('#mob-filters').magnificPopup({
        items: {
            src: '#filters',
            type: 'inline'
        }
    });



    // js аккордион
    $('.js-accordion-btn').click(function () {

        var dropDown = $(this).parent().find('.js-accordion-content');

        $(this).toggleClass('active');
        dropDown.stop(false, true).slideToggle();
    });

})
