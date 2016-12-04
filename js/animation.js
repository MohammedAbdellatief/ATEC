(function($,window) {

    $(document).ready(function() {

        var controller = new ScrollMagic.Controller(),
            iconsList = $('.icons_list'),
            menuLinks = $('.pushy-link'),
            anim1 = $('.anim1'),
            firstSec = $('.first_sec'),
            header = $('header'),
            carouselInfo = $('.carousel_item_info'),
            carouselArrows = $('.carousel_arrows'),
            stagger1 = $('.stagger_1'),
            stagger2 = $('.stagger_2 button'),
            stagger3 = $('.stagger_3 .project_unit'),
            stagger4 = $('.stagger_4 a'),
            stagger5 = $('.stagger_5'),
            horzLogo1 = $('header .horiz_logo'),
            horzLogo2 = $('.fifth_sec .horiz_logo'),
            footerLiks = $('.links_list li'),
            contact = $('.contact_form'),
            language = $('.lang1')
            ;

        // Apply on desktop only not mobile (no heavy animation on mobile)
        if ( !/Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)  &&  $(window).width() >= 768) {

            //First sec Animation=============================
            var Sec1 = new TimelineMax();
            Sec1
                .set(header,{className:'-=hidden'})
                .set(language,{className:'-=hidden'})
                .set(anim1,{className:'-=hidden'})
                .from(anim1,1,{ left:'-=200',ease: Power3.easeInOut})
                .staggerFrom(menuLinks, 1,{ top:'-=100',ease: Power3.easeInOut},.05)
                .from(language,1,{ top:'-=100',ease: Power3.easeInOut},1.3)
                .set(carouselInfo[0],{ className:'-=hidden'})
                .from(carouselArrows,1,{ opacity:0,left:'-=250',ease: Power3.easeInOut})
            ;
            // build scene 1
            var scene1 = new ScrollMagic.Scene({
                triggerElement: ".first_sec"
            })
                .setTween(Sec1)
                .addTo(controller);



            //Second sec Animation=============================
            var sce2 = new TimelineMax();
            sce2
                .staggerFrom(stagger1,1,{opacity:0,bottom:'-=50',ease:Power3.easeInOut},.3)
                .to(horzLogo1,.1,{left:0,ease:Power3.easeInOut},0)
                .set(iconsList,{className:'+=animate'})
            ;

            // build scene 1
            var scene2 = new ScrollMagic.Scene({
                triggerElement: ".second_sec"
            })
                .setTween(sce2)
                .addTo(controller);



            //third sec Animation=============================
            var sce3 = new TimelineMax();
            sce3
                .staggerFrom(stagger2,1,{top:'-=50',ease:Power3.easeInOut},.1)
                //.from(stagger3,1,{bottom:'-=50',opacity:0,ease:Power3.easeInOut},.1)
            ;

            // build scene 1
            var scene3 = new ScrollMagic.Scene({
                triggerElement: ".third_sec"
            })
                .setTween(sce3)
                .addTo(controller);


            //fourth sec Animation=============================
            var sce4 = new TimelineMax();
            sce4
                .staggerFrom(stagger4,1,{bottom:'-=70',ease:Power3.easeInOut},.1)
            ;

            // build scene 1
            var scene4 = new ScrollMagic.Scene({
                triggerElement: ".fourth_sec"
            })
                .setTween(sce4)
                .addTo(controller);



            //fifth sec Animation=============================
            var sce5 = new TimelineMax();
            sce5
                .to(horzLogo1,.5,{left:'-=170',ease:Power3.easeInOut},0)
                .from(horzLogo2,1,{opacity:0,left:'-=200',ease:Power3.easeInOut},0)
                .staggerFrom(footerLiks,.7,{opacity:0,left:'-=20',ease:Power3.easeInOut},.1,0)
                .from(contact,.7,{opacity:0,right:'-=50',ease:Power3.easeInOut},0)
            ;

            // build scene 1
            var scene5 = new ScrollMagic.Scene({
                triggerElement: ".trigger_5"
            })
                .setTween(sce5)
                .addTo(controller);


        }
        else
        {
            iconsList.addClass('animate');
            header.removeClass('hidden');
            carouselInfo[0].classList.remove('hidden');
        }

    });

})(jQuery, window);