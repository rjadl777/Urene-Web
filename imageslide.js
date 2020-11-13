(function ($) {

    // Chache all the slideshow object and some dimension
    var $slider = $('#slider'),
		$container = $slider.find('.container'),
		$nav = $('#slider-nav'),
		$slide = $container.children(),
		s_length = $slide.length,
		s_wide = $slider.width() * s_length,
		s_height = $slider.height(),
		autoSlide = null;

    // Set the '.container' position as 'relative' (for 'left' animation property needs)
    // Set the '.container' width as = (slideshow width * slides length)
    // Set the '.container' height as = slideshow height
    $container.css({
        'position': 'relative',
        'width': s_wide,
        'height': s_height
    });

    // Auto append item navigation based on the slides length
    $slide.each(function (index) {
        var i = index + 1;
        $nav.append('<a href="#slide-' + i + '">' + i + '</a>');
        $(this).attr('id', 'slide-' + i);
    });

    // Click to switch
    $nav.find('a').on("click", function (pos) {
        // Add/remove the 'active' classfrom navigation item (for current navigation color)
        $nav.find('.active').removeClass('active');
        $(this).addClass('active');
        pos = $(this).index() * $slider.width(); // Animation distance calculated based on the clicked navigation item * slider width
        $container.animate({ left: '-' + pos + 'px' }, 1000);
        clearInterval(autoSlide); // Clear the slideshow interval ...
        autoSlide = setInterval(slideShow, 5000); // Then set back the slideshow interval.
        return false;
    }).first().addClass('active');

    // Auto click the navigation item to make an auto-slide slideshow
    function slideShow() {
        if ($nav.find('.active').next().length) {
            $nav.find('.active').next().trigger("click");
        } else {
            $nav.find('a').first().trigger("click");
        }
    } autoSlide = setInterval(slideShow, 3000); // Run the `slideShow()` with interval of 3 seconds!

})(jQuery);