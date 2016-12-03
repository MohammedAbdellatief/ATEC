var controller = new ScrollMagic.Controller();

// Apply on desktop only not mobile (no heavy animation on mobile)
if ( !/Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)  &&  $(window).width() >= 768) {



}
else
{
    //TweenMax.set(iconHeader,{className:"+=reset"});
}