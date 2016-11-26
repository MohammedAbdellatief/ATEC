// Apply on desktop only not mobile (no heavy animation on mobile)
if ( !/Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)  &&  $(window).width() >= 1024) {


    var nav = $(".navbar-fixed-top");
    //jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if (nav.offset().top > 500) {
            nav.removeClass("top-nav-collapse");
            //alert('hi');
        } else {
            nav.addClass("top-nav-collapse");
        }
    });


}
$(document).ready(function() {


    // google map dime on and click to activate
    $(".map_overlay").on('click',function () {
        $('.google-maps').removeClass('scrolloff');
        $('.map_overlay').fadeOut();

    });

    $(".sixth_sec").on('mouseleave',function () {
        $('.google-maps').addClass('scrolloff');
        $('.map_overlay').fadeIn();
    });



    // Contact form
    //=====================================================
    $('input, textarea').blur(function() {
        var $this = $(this);
        if ($this.val())
            $this.addClass('used');
        else
            $this.removeClass('used');
    });

    //hamburger menu
    $(".hamburger").on('click',function(e){
        e.preventDefault();
        $(this).toggleClass('is-active');
    });
    $(".site-overlay, .pushy-link").on('click',function(e){
        e.preventDefault();
        $('.hamburger').removeClass('is-active');
    });


});




