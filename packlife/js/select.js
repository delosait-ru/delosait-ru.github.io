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
