$('.banner_slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.banner-wrap_nav_prev'),
    nextArrow: $('.banner-wrap_nav_next'),    
});

$('.main-advantages_slider').slick({
    dots: false,
    prevArrow: $('.main-advantages_prev'),
    nextArrow: $('.main-advantages_next'),    
   
})

$(".main-advantages_slider").on('afterChange', function(event, slick, currentSlide){
    $("#cp").text(currentSlide + 1);
 });

 $('.menu_item_icon').click(function() {
    $('.menu_item_icon').toggleClass('active');
    $('.nav_menu').toggleClass('active');
});
