;(function(jQuery){
  'use strict';

    $(document).ready(function(){
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true,
      autoplay: true,
    });
     setTimeout(autoplay, 4500);
  });
    

function idea(){
        var wh = $(window).height();
        var bw = parseInt($('.slide_title_border').css('border-left-width'));

        $('.slide_title_border').css({'top':wh/
          2 - bw, 'left':-(wh/2 - bw)})
        $('.slide_title_border').width(wh);
        $('.slide_title_border').width($('.slide_title_border').width() - bw*2)
        console.log($('.slide_title_border').width() + "---" + $('.slide_title_border').height()) ;
      }
    $(document).ready(function(){
      idea()
    }); 
    $(window).resize(function(){
      idea()
    });

 })(jQuery);