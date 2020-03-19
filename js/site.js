$(document).ready(function () {
    setInterval(function () {
        $('.words-wrapper').css({
            "width": "113px"
        });
    }, 2000);
    setInterval(function () {
        $('.words-wrapper').css({
            "width": "0px"
        });
    }, 4000);

    var text = ['Love', 'Lead'];
    var counter = 0;
    var int = setInterval(change, 4500);

    function change() {
        $('.words-wrapper').text(text[counter]);
        counter++;
        if (counter >= text.length) {
            counter = 0;
        }
    }

    $("#toggler").click(function () {
        $('.sidenav').toggleClass("is-visible");
    })

    $(".skill-btn").click(function () {
        $('html,body').animate({
                scrollTop: $("#about").offset().top
            },
            'slow');
    });

    $(".about").click(function () {
        $('html,body').animate({
                scrollTop: $("#about").offset().top
            },
            'slow');
        $(".about").addClass("current");
        $(".home").removeClass("current");
        $(".videos").removeClass("current");
    });

    $(".home").click(function () {
        $('html,body').animate({
                scrollTop: $("#home").offset().top
            },
            'slow');
        $(".about").removeClass("current");
        $(".home").addClass("current");
        $(".videos").removeClass("current");
    });

    $(".videos").click(function () {
        $('html,body').animate({
                scrollTop: $("#videos").offset().top
            },
            'slow');
        $(".about").removeClass("current");
        $(".home").removeClass("current");
        $(".videos").addClass("current");
    });
    
    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay:true
    });

})
