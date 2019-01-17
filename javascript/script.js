$(document).ready(function () {
    $('.btn_send').click(function () {
        var name = $('#inputName').val();
        var eMail = $('#inputEMail').val();
        var website = $('#InputWebSite').val();
        var text = $('#inputText').val();
        $.ajax({
            crossDomain: true,
            dataType: "jsonp",
            type: "GET",
            url: "http://temp-eti.tmweb.ru/taxi/mail.php",
            data: "userName = " + name + "&userEMail = " + eMail + "&userWebSite = " + website + "&userText = " + text +
                "&project_name=Site_Name&admin_email=bonia1991@gmail.com&form_subject=Form_Subject"
        });
    });

    $('body').append('<a href="#" id="go-top" title="Вверх">Вверх</a>');
});

$(function () {
    $.fn.scrollToTop = function () {
        $(this).hide().removeAttr("href");
        if ($(window).scrollTop() >= "150") $(this).fadeIn("slow")
        var scrollDiv = $(this);
        $(window).scroll(function () {
            if ($(window).scrollTop() <= "150") $(scrollDiv).fadeOut("slow")
            else $(scrollDiv).fadeIn("slow")
        });
        $(this).click(function () {
            $("html, body").animate({ scrollTop: 0 }, "slow")
        })
    }
});

$(function () {
    $("#go-top").scrollToTop();
});

$(document).ready(function () {
    $('.modal-mask').show(200);
    $('.mask').show(200);

    $('.closeModal').click(function () {
        $('.modal-mask').hide(200);
    });

    $('.closeModal').click(function () {
        $('.mask').hide(200);
    });

    $('.mask').click(function () {
        $('.modal-mask').hide(200);
    });

    $('.mask').click(function () {
        $('.mask').hide();
    });
})

$(function () {
    $('.menuBurger').on('click', function () {
        $('ul.nav').slideToggle(300, function () {
            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
        });
    });
});

var owl = $('.owl-carousel');
owl.owlCarousel({
    loop: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        960: {
            items: 2
        },
        1200: {
            items: 2
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY > 0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});