$(function() {
    "use strict";
    // window.scrollReveal = new scrollReveal();

    // PreLoader
    $(window).load(function() {
        $(".loader").fadeOut(400);
    });

    $(function() {
        $('#header-nav').data('size', 'big');
    });

    $(window).scroll(function() {
        if ($(document).scrollTop() > 100) {
            if ($('#header-nav').data('size') == 'big') {
                $('#header-nav').data('size', 'small');
				$('.logo-img').stop().animate({
					height:'45px'
				}, 300);
                $('#header-nav').stop().animate({
                    height: '60px'
                }, 300);
				console.log('working');
            }
        } else {
            if ($('#header-nav').data('size') == 'small') {
                $('#header-nav').data('size', 'big');
				$('.logo-img').removeAttr('style');
                $('#header-nav').stop().animate({
                    height: '61px'
                }, 300);
				console.log('its working');
            }
        }
    });


	// to top right away
if ( window.location.hash ) scroll(0,0);
// void some browsers issue
setTimeout( function() { scroll(0,0); }, 1);

$(function() {

    // your current click function
    $('.scroll').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top + 'px'
        }, 1000, 'swing');
    });

    // *only* if we have anchor on the url
    if(window.location.hash) {

        // smooth scroll to the anchor id
        $('html, body').animate({
            scrollTop: $(window.location.hash).offset().top + 'px'
        }, 1000, 'swing');
    }

});


    // Backstretchs
    $("#header").backstretch("assets/images/3.jpg");
    $("#services").backstretch("assets/images/3.jpg");

});
