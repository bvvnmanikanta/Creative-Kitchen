"use strict"; // Start of use strict


function revolutionSliderActiver() {
    if ($('.rev_slider_wrapper .slider1').length) {
        var Self = $('.rev_slider_wrapper .slider1');
        var slideHeight = Self.data('height');
        jQuery(".slider1").revolution({
            sliderType: "standard",
            sliderLayout: "auto",
            delay: 5000,
            navigation: {
                arrows: { enable: true }
            },
            gridwidth: 1170,
            gridheight: slideHeight
        });
    };
}
function accrodion () {
    if ($('.accrodion-grp').length) {
        
        $('.accrodion-grp').each(function () {
            var accrodionName = $(this).data('grp-name');
            var Self = $(this);
            Self.addClass(accrodionName);
            Self.find('.accrodion .accrodion-content').hide();
            Self.find('.accrodion.active').find('.accrodion-content').show();
            Self.find('.accrodion').each(function() {
                $(this).find('.accrodion-title').on('click', function () {
                    if ($(this).parent().hasClass('active') === false ) {                   
                        $('.accrodion-grp.'+accrodionName).find('.accrodion').removeClass('active');
                        $('.accrodion-grp.'+accrodionName).find('.accrodion').find('.accrodion-content').slideUp();
                        $(this).parent().addClass('active');                    
                        $(this).parent().find('.accrodion-content').slideDown();    
                    };
                });
            });
        });
        
    };
}
function thmLightBox() {
    if ($('.img-popup').length) {
        var groups = {};
        $('.img-popup').each(function() {
            var id = parseInt($(this).attr('data-group'), 10);

            if (!groups[id]) {
                groups[id] = [];
            }

            groups[id].push(this);
        });


        $.each(groups, function() {

            $(this).magnificPopup({
                type: 'image',
                closeOnContentClick: true,
                closeBtnInside: false,
                gallery: { enabled: true }
            });

        });

    };
}
function scrollToTarget() {
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function() {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
}
function thmMasterSliderStaff() {
    if ($('.testimonial-about-carousel').length) {
        var slider = new MasterSlider();
        slider.setup('masterslider', {
            loop: true,
            width: 80,
            height: 80,
            speed: 20,
            view: 'fadeBasic',
            preload: 'all',
            space: 20,
            wheel: true
        });
        slider.control('arrows');
        slider.control('slideinfo', { insertTo: '#staff-info' });
    };
}
thmMasterSliderStaff();

function thmOwlCarousel() {
    if ($('.brand-carousel').length) {
        $('.brand-carousel').owlCarousel({
            loop: true,
            margin: 95,
            nav: false,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            dots: false,
            autoWidth: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    autoWidth: false
                },
                480: {
                    items: 3,
                    autoWidth: false
                },
                600: {
                    items: 4,
                    autoWidth: false
                },
                1000: {
                    items: 5,
                    autoWidth: true
                }
            }
        });
    };

}
function stickyHeader () {
    var headerScrollPos = $('.stricky').next().offset().top;
    if($(window).scrollTop() > headerScrollPos) {
        $('.stricky').addClass('stricky-fixed ');
        // $('.scroll-to-top').fadeIn(500); 
    }
    else if($(this).scrollTop() <= headerScrollPos) {
        $('.stricky').removeClass('stricky-fixed');
        // $('.scroll-to-top').fadeOut(500); 
    }
}
function mobileNavToggle () {
    if ($('.header-navigation.navbar .navbar-nav .sub-menu').length) {
        $('.header-navigation.navbar .navbar-nav .sub-menu').parent('li').children('a').append(function () {
            return '<button class="sub-nav-toggler"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>';
        });
        $('.header-navigation.navbar .navbar-nav .sub-nav-toggler').on('click', function () {
            var Self = $(this);
            Self.parent().parent().children('.sub-menu').slideToggle();
            return false;
        });

    };
}
// instance of fuction while Document ready event   
jQuery(document).on('ready', function() {
    (function($) {        
        revolutionSliderActiver();
        scrollToTarget();
        thmOwlCarousel();
        thmLightBox();
        accrodion();
        mobileNavToggle();
    })(jQuery);
});

// instance of fuction while Window Load event
jQuery(window).on('load', function() {
    (function($) {

    })(jQuery);
});

// instance of fuction while Window Scroll event
jQuery(window).on('scroll', function() {
    (function($) {
    	stickyHeader();
    })(jQuery);
});