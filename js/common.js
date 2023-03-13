$(function () {
    $('a[href="#"]').click(function (e) {
        e.preventDefault();
    });

    $(window).on('scroll', function () {
        scrollNav();
    });

    function scrollNav() {
        if ($(this).scrollTop() >= 100) {
            $('#new_hd').addClass('active');
            $('#new_sc').addClass('active');
        } else {
            $('#new_hd').removeClass('active');
            $('#new_sc').removeClass('active');
        }
    }
    scrollNav();

    function MOBARS() {
        $('.mo_bars > button').click(function () {
            $('.mohd_wrap').addClass('active');
        });

        $('.close_icon > button').click(function () {
            $('.mohd_wrap').removeClass('active');
        });
    }
    MOBARS();

    function SWIPERSKIN() {
        var swiper = new Swiper('.text_slider', {
            slidesPerView: 'auto',
            spaceBetween: 15,
            freeMode: true,
            freeModeSticky: true,
            pagination: false,
            breakpoints: {
                885: {
                    spaceBetween: 30,
                },
            }
        });
    }
    SWIPERSKIN();

    function VIEWTHUMB() {
        const arrowprev = $('.thumb_arrows_prev');
        const arrownext = $('.thumb_arrows_next');

        $(".thumb_slider").slick({
            speed: 300, 
            slidesToShow: 4,
            slidesToScroll: 1,
            pauseOnHover: false,
            dots: false,
            cssEase: 'linear',
            prevArrow: arrowprev,
            nextArrow: arrownext,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 3,
                    }
                },{
                    breakpoint: 885,
                    settings: {
                        slidesToShow: 5,
                    }
                },{
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 4,
                    }
                },{
                    breakpoint: 376,
                    settings: {
                        slidesToShow: 3,
                    }
                }
            ]
        });
    }
    VIEWTHUMB();

    function FILENAME() {
        $("#FILESELECT").on('change', function () {
            var fileName = $("#FILESELECT").val();
            $(".file_name").val(fileName);
        });
    }
    FILENAME();
});
