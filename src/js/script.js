$('.banner_slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.banner-wrap_nav_prev'),
    nextArrow: $('.banner-wrap_nav_next'),
    appendDots: $('.banner_slider_nav-wr'),
    responsive: [
        {
            breakpoint: 600,
            settings: {
                arrows: false
            }
        }
    ]

});

$('.main-advantages_slider').slick({
    dots: false,
    prevArrow: $('.main-advantages_prev'),
    nextArrow: $('.main-advantages_next'),

})

$(".main-advantages_slider").on('afterChange', function (event, slick, currentSlide) {
    var num = currentSlide + 1;
    var strNum = String(num);
    var zNum = '0'+ strNum;
    $("#cp").text(zNum);
});

$('.menu_item_icon').click(function () {
    $('.menu_item_icon').toggleClass('active');
    $('.nav_menu').toggleClass('active');
});
