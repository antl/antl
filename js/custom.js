/* jQuery to collapse the navbar on scroll */
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

/* Sticky Navbar */
$(document).ready(function(){
    $(".navbar").sticky({topSpacing:0});
});

/* Auto Close Responsive Navbar on Click */
function close_toggle() {
if ($(window).width() <= 768) {
  $('.navbar-collapse a').on('click', function(){
      $('.navbar-collapse').collapse('hide');
  });
}
else {
 $('.navbar .navbar-default a').off('click');
}
}
close_toggle();

$(window).resize(close_toggle); 

/* jQuery page scrolling feature */
$(function() {
    $('.navbar a,.btn').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 50
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
     /* WOW */  
   wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        mobile:       true
      }
    );
    wow.init();

/* niceScroll */
jQuery("html").niceScroll({
    scrollspeed: 50,
    mousescrollstep: 38,
    cursorwidth: 7,
    cursorborder: 0,
    cursorcolor: '#35bdf6',
    autohidemode: false,
    zindex: 9999999,
    horizrailenabled: false,
    cursorborderradius: 0
});






