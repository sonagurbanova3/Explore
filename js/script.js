$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.burger__line,.header__container').toggleClass('active');
        $('body').toggleClass('lock')
    });
});