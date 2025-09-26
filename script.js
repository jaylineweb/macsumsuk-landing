console.log("Macsumsuk landing page loaded.");
(function ($) {
    $(function () {

        //menu 

        $('.primary-nav-link').on('mouseover',function() {
          $(this).parent().children(".sub2_depth").addClass('active');
          $(this).parent().siblings().children(".sub2_depth").removeClass('active');
        })
        $('.sub2_depth').on('mouseleave', function() {
          $(this).removeClass('active');
        });

        var $heroSlider = $(".hero-slider");

        if ($heroSlider.length) {
            $heroSlider.slick({
                dots: true,
                arrows: false,
                autoplay: false,
                autoplaySpeed: 6000,
                speed: 800,
                fade: true,
                dots: false,
                cssEase: "ease-in-out",
                pauseOnHover: true,
                adaptiveHeight: false
            });
        }
        $('.btn_all_menu').on('click',function(e){
            e.preventDefault();
            if($(this).hasClass('on')){
                $(this).removeClass('fixed');
                $(this).removeClass('on');
                $('.amDim').fadeOut(200);
                $('#newHeader').removeClass('black');
                $('.allMenuWrap').fadeOut(300).removeClass('active');


            }else{
                $(this).addClass('fixed');
                $(this).addClass('on');
                $('.amDim').fadeIn(200);
                $('#newHeader').addClass('black');
                $('.allMenuWrap').fadeIn(300).addClass('active');

            }
        });
        $('.feature_main_slider').slick({
            slidesToShow:1,
            slidesToScroll:1,
            arrows:false,
            fade:true,
            asNavFor:'.features_list'
        });

        $('.features_list').slick({
            asNavFor:'.feature_main_slider',
            autoplay:false,
            speed:1000,
            dots:false,
            swipe:true,
            swipeToSlide:true,
            draggable:true,
            slidesToShow:3,
            slidesToScroll:1,
            infinite:true,
            variableWidth:true,
            focusOnSelect:true,
            prevArrow:$('.feature_control_box .prev'),
            nextArrow:$('.feature_control_box .next')
        });
    });
})(jQuery);
