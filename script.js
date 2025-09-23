console.log("Macsumsuk landing page loaded.");
(function ($) {
    $(function () {
        var $heroSlider = $(".hero-slider");

        if ($heroSlider.length) {
            $heroSlider.slick({
                dots: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 6000,
                speed: 800,
                fade: true,
                dots: false,
                cssEase: "ease-in-out",
                pauseOnHover: true,
                adaptiveHeight: false
            });
        }
    });
})(jQuery);
