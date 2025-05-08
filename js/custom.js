$(document).ready(function() {
    $(".owl-eyes").owlCarousel({
        margin: 20,
        nav: !1,
        loop: !0,
        autoplay: !1,
        autoplayTimeout: 3e3,
        autoplayHoverPause: !0,
        dots: !0,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1e3: {
                items: 3
            }
        }
    }), $(".owl-prefects").owlCarousel({
        margin: 20,
        nav: !1,
        loop: !0,
        autoplay: !1,
        autoplayTimeout: 3e3,
        autoplayHoverPause: !0,
        dots: !0,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1e3: {
                items: 3
            }
        }
    }), $(".owl-testimonial").owlCarousel({
        margin: 20,
        nav: !1,
        loop: !0,
        autoplay: !1,
        autoplayTimeout: 3e3,
        autoplayHoverPause: !0,
        dots: !0,
        navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1e3: {
                items: 1
            }
        }
    })
});