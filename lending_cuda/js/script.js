$(document).ready(function () {
    $('ul.portfolio__tabs').on('click', 'li:not(.portfolio__tab_active)', function () {
        $(this)
            .addClass('portfolio__tab_active').siblings().removeClass('portfolio__tab_active')
            .closest('div.container').find('div.portfolio__content').removeClass('portfolio__content_active').eq($(this).index()).addClass('portfolio__content_active');
    });
});