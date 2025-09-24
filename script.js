console.log("Macsumsuk landing page loaded.");
(function ($) {
    $(function () {

        //menu 

        $('.primary-nav-link').on('mouseover',function() {
          $(this).parent().children(".sub2_depth").addClass('active');
          $(this).parent().siblings().children(".sub2_depth").removeClass('active');
        })

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
                $(this).removeClass('on');
                $('.amDim').fadeOut(200);
                $('#newHeader').removeClass('black');
                $('.allMenuWrap').fadeOut(300).removeClass('active');


            }else{
                $(this).addClass('on');
                $('.amDim').fadeIn(200);
                $('#newHeader').addClass('black');
                $('.allMenuWrap').fadeIn(300).addClass('active');

            }
        });
    });
})(jQuery);
