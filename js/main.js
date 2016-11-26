var controller = new ScrollMagic.Controller();

// Apply on desktop only not mobile (no heavy animation on mobile)
if ( !/Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)  &&  $(window).width() >= 1024) {


// change behaviour of controller to animate scroll instead of jump
    controller.scrollTo(function (newpos) {
        TweenMax.to(window, 1.5, {scrollTo: {y: newpos},ease: Power3.easeInOut});
    });

//  bind scroll to anchor links
    $(document).on("click", "a[href^=#]", function (e) {
        var id = $(this).attr("href");
        if ($(id).length > 0) {
            e.preventDefault();

            // trigger scroll
            controller.scrollTo(id);

        }
    });

}
else
{
    //TweenMax.set(iconHeader,{className:"+=reset"});
}