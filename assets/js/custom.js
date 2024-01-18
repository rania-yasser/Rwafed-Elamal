/***      owlCarousel news        ***/
$(document).ready(function () {

    var owl = $("#partners_logo");
    var owl2 = $("#owl-demo2");
    var owl3 = $("#testimonal");
    var owl4 = $("#services");
    var owl5 = $("#sound_cloud");
    owl.owlCarousel({
            items: 5,
            autoplay: true,
            nav: false,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 2,
                },
                500: {
                    items: 3,
                },
                768: {
                    items: 4,
                },
                992: {
                    items: 5,
                },
                1300: {
                    items: 5,
                }
            }

        }),
        owl2.owlCarousel({
            items: 3,
            autoplay: true,
            center: true,
            loop: true,
            nav: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    center: false,
                },
                500: {
                    items: 1,
                    center: false,
                },
                768: {
                    items: 2,
                    center: false,
                },
                992: {
                    items: 3,
                },
                1300: {
                    items: 3,
                }
            }
        }),
        owl3.owlCarousel({
            items: 3,
            autoplay: true,
            loop: true,
            nav: false,
            center: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    center: false,
                },
                500: {
                    items: 1,
                    center: false,
                },
                768: {
                    items: 2,
                    center: false,
                },
                992: {
                    items: 3,
                },
                1300: {
                    items: 3,
                }
            }
        }),
        owl4.owlCarousel({
            items: 3,
            autoplay: true,
            loop: true,
            nav: false,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    center: false,
                },
                500: {
                    items: 1,
                    center: false,
                },
                768: {
                    items: 2,
                    center: false,
                },
                992: {
                    items: 3,
                },
                1300: {
                    items: 3,
                }
            }
        }),
        owl5.owlCarousel({
            items: 1,
            autoplay: true,
            loop: true,
            nav: true,
            autoplayHoverPause: true,
            navText: ["<i class='fal fa-long-arrow-left'></i>", "<i class='fal fa-long-arrow-right'></i>"]
        })
});

/* close menue */
$(document).click(function () {
    $(".navbar-home .navbar-collapse").removeClass("show");
});

/*  scroll page*/
//$(document).on("click", 'a[href^="#"]', function (event) {
//    event.preventDefault();
//
//    $("html, body").animate({
//            scrollTop: $($.attr(this, "href")).offset().top - 100,
//        },
//        1000
//    );
//});

/** filter open */
$(".filter_button").click(function () {
    $(".filter").toggleClass("active");
});


/* wow js */
new WOW().init();
