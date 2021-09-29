// ui-range.js
$(function () {

    $('.fl1').slider({
        range: true,
        min: 5000,
        max: 50000,
        step: 1,
        values: [5000, 50000],
        slide: function (event, ui) {
            $(this).closest('.ui-range').find('.ui-range__from').val(ui.values[0]);
            $(this).closest('.ui-range').find('.ui-range__to').val(ui.values[1]);
        }
    });

    $('.fl2').slider({
        range: true,
        min: 1000,
        max: 1800,
        step: 1,
        values: [1000, 1800],
        slide: function (event, ui) {
            $(this).closest('.ui-range').find('.ui-range__from').val(ui.values[0]);
            $(this).closest('.ui-range').find('.ui-range__to').val(ui.values[1]);
        }
    });
    $('.fl3').slider({
        range: true,
        min: 1,
        max: 5,
        step: 1,
        values: [0.1, 5],
        slide: function (event, ui) {
            $(this).closest('.ui-range').find('.ui-range__from').val(ui.values[0]);
            $(this).closest('.ui-range').find('.ui-range__to').val(ui.values[1]);
        }
    });



    $('.filter1').val(String(5000).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 '));
    $('.filter2').val(String(50000).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 '));








});
