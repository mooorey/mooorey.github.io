$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 3, // Number of slides to show at a time
        slidesToScroll: 1, // Number of slides to scroll
        autoplay: true, // Enable automatic playback
        autoplaySpeed: 500, // Set the autoplay interval (3 seconds in this example)
        dots: true,
        arrows: true, // Display navigation arrows
        responsive: [
            {
              breakpoint: 768, // Breakpoint for small devices
              settings: {
                slidesToShow: 1, // Show one slide at a time
                slidesToScroll: 1, // Scroll one slide at a time
              },
            },
          ],
        })
})