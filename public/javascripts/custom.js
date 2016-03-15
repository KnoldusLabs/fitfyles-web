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

    function onScrollInit( items, trigger ) {
  items.each( function() {
    var osElement = $(this),
        osAnimationClass = osElement.attr('data-os-animation'),
        osAnimationDelay = osElement.attr('data-os-animation-delay');

        osElement.css({
          '-webkit-animation-delay':  osAnimationDelay,
          '-moz-animation-delay':     osAnimationDelay,
          'animation-delay':          osAnimationDelay
        });

        var osTrigger = ( trigger ) ? trigger : osElement;

        osTrigger.waypoint(function() {
          osElement.addClass('animated').addClass(osAnimationClass);
          },{
              triggerOnce: true,
              offset: '90%'
        });
  });
}

 onScrollInit( $('.os-animation') );
 onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );


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

	$('.go-to-top').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
   		return false;
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
	$('.parallax-window').parallax({imageSrc: 'assets/images/3.jpg'});
    // $("#header").backstretch("assets/images/3.jpg");
    $("#services").backstretch("assets/images/3.jpg");

});
