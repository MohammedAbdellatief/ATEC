(function(window,$){

    // wait for the document ready
    $(document).ready(function() {

        // fixed nav-bar on scroll
        var nav = $(".navbar-fixed-top");
        $(window).scroll(function() {
            if (nav.offset().top > 300) {
                nav.addClass("top-nav-expand");
            } else {
                nav.removeClass("top-nav-expand");
            }
        });

        /**
         * This part causes smooth scrolling using scrollto.js
         * We target all a tags inside the nav, and apply the scrollto.js to it.
         */
        $("nav a").click(function(evn){
            evn.preventDefault();
            $('html,body').scrollTo(this.hash, this.hash);
        });



        /**
         * This part handles the highlighting functionality.
         * We use the scroll functionality again, some array creation and
         * manipulation, class adding and class removing, and conditional testing
         */
        var aChildren = $("nav li").children(); // find the a children of the list items
        var aArray = []; // create the empty aArray
        for (var i=0; i < aChildren.length; i++) {
            var aChild = aChildren[i];
            var ahref = $(aChild).attr('href');
            aArray.push(ahref);
        } // this for loop fills the aArray with attribute href values

        $(window).scroll(function(){
            var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
            var windowHeight = $(window).height(); // get the height of the window
            var docHeight = $(document).height();

            for (var i=0; i < aArray.length; i++) {
                var theID = aArray[i];
                var divPos = $(theID).offset().top; // get the offset of the div from the top of page
                var divHeight = $(theID).height(); // get the height of the div in question
                if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                    $("a[href='" + theID + "']").addClass("nav-active");
                } else {
                    $("a[href='" + theID + "']").removeClass("nav-active");
                }
            }

            if(windowPos + windowHeight == docHeight) {
                if (!$("nav li:last-child a").hasClass("nav-active")) {
                    var navActiveCurrent = $(".nav-active").attr("href");
                    $("a[href='" + navActiveCurrent + "']").removeClass("nav-active");
                    $("nav li:last-child a").addClass("nav-active");
                }
            }
        });


        //carousel slider
        //======================================================
        var $status = $('.pagingInfo');
        var $slickElement = $('.carousel');
        var $slickText = $('.carousel_item_info');

        $slickElement.removeClass('hidden');

        $slickElement.slick({
            lazyLoad: 'ondemand',
            autoplay: true,
            fade: true,
            speed:900,
            autoplaySpeed: 6000,
            pauseOnHover: false,
            pauseOnFocus:false,
            arrows: true,
            zIndex: 99,
            swipe: false,
            appendArrows: $('.carousel_arrows'),
            customPaging : function(slider, i) {
                var thumb = $(slider.$slides[i]).data();
                return '<a>'+i+'</a>';
            },
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        fade: false,
                        swipe:true,
                        speed:300
                    }
                }
            ]
        });

        $slickElement.on('beforeChange', function (event, slick, currentSlide) {
            // animate text
            $slickText[currentSlide].classList.add('hidden','animate');
        });
        $slickElement.on('afterChange', function (event, slick, currentSlide) {
            //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
            var i = (currentSlide ? currentSlide : 0) + 1;
            $status.html("<strong>" + '0' + i +"</strong>"+'/ 0'+ slick.slideCount);

            $slickText[currentSlide].classList.remove('hidden','animate');
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
        //=====================================================
        $(".hamburger").on('click',function(e){
            e.preventDefault();
            $(this).toggleClass('is-active');
        });
        $(".site-overlay, .pushy-link").on('click',function(e){
            e.preventDefault();
            $('.hamburger').removeClass('is-active');
        });




        //isotop projects filtering
        //========================================
        // init Isotope
        var iso = new Isotope( '.grid', {
            itemSelector: '.element-item',
            layoutMode: 'fitRows'
        });

// filter functions
        var filterFns = {
            // show if number is greater than 50
            numberGreaterThan50: function( itemElem ) {
                var number = itemElem.querySelector('.number').textContent;
                return parseInt( number, 10 ) > 50;
            },
            // show if name ends with -ium
            ium: function( itemElem ) {
                var name = itemElem.querySelector('.name').textContent;
                return name.match( /ium$/ );
            }
        };

// bind filter button click
        var filtersElem = document.querySelector('.filters-button-group');
        filtersElem.addEventListener( 'click', function( event ) {
            // only work with buttons
            if ( !matchesSelector( event.target, 'button' ) ) {
                return;
            }
            var filterValue = event.target.getAttribute('data-filter');
            // use matching filter function
            filterValue = filterFns[ filterValue ] || filterValue;
            iso.arrange({ filter: filterValue });
        });
// change is-checked class on buttons
        var buttonGroups = document.querySelectorAll('.button-group');
        for ( var j=0, len = buttonGroups.length; j < len; j++ ) {
            var buttonGroup = buttonGroups[j];
            radioButtonGroup( buttonGroup );
        }

        function radioButtonGroup( buttonGroup ) {
            buttonGroup.addEventListener( 'click', function( event ) {
                // only work with buttons
                if ( !matchesSelector( event.target, 'button' ) ) {
                    return;
                }
                buttonGroup.querySelector('.is-checked').classList.remove('is-checked');
                event.target.classList.add('is-checked');
            });
        }




        // Apply on desktop only not mobile (no heavy animation on mobile)
        if ( !/Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)  &&  $(window).width() >= 768) {

        }


    });

})(window,jQuery);