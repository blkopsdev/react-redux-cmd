$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() < 100) {
            // hide nav
            $("nav").removeClass("top-nav");
            $("#back-to-top").fadeOut();

        } else {
            // show nav
            $("nav").addClass("top-nav");
            $("#back-to-top").fadeIn();
        }
    });
});