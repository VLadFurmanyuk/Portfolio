$(document).ready(function (){
    $('.slider').slick({
        arrows: false,
        dots: false,
        slidesToShow: 8,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        cssEase: 'linear',
        // cssEase: 'cubic-bezier(0.600, -0.1, 0.555, 0.045)',
        // easing: 'easeOutElastic',
        // cssEase: 'ease-out',
        responsive:[
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    autoplaySpeed: 2000,
                }
            },
            {
                breakpoint: 281,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    autoplaySpeed: 2000,
                }
            }
        ]
    });
});

// On before slide change
$('.slider-nav').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('.slick-slide').removeClass('slick-active-first slick-active-last');
    $('.slick-active').eq(0).addClass('slick-active-first');
    $('.slick-active').eq(3).addClass('slick-active-last');
}).trigger('afterChange');