
  (function ($) {
  
  "use strict";

    // COUNTER NUMBERS
    jQuery('.counter-thumb').appear(function() {
      jQuery('.counter-number').countTo();
    });

    // BACKSTRETCH SLIDESHOW
    $('.hero-section').backstretch([
      {url:"images/slideshow/athlete_berm.jpg", alignY:0}, 
      {url:"images/slideshow/podium.jpg"},
      {url:"images/slideshow/athletes_trailwork.jpg", alignY:.35},
      {url:"images/slideshow/athlete_racing.jpg", alignY:.45},
      {url:"images/slideshow/riding_together.jpg", alignY:.70},
    ],  {duration: 2500, fade: 750});
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
  
      scrollToDiv(elWrapped);
      return false;
  
      function scrollToDiv(element){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
    
  })(window.jQuery);


