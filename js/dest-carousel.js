$(document).ready(function(){
    const owl = $('#destinations-slider');

    owl.owlCarousel({
        items: 1,
        loop: true
    });

    const prev = $('#sliderPrev');
    const next = $('#sliderNext');    

    prev.click(function() {  
        owl.trigger('prev.owl.carousel', [300]);
    });

    next.click(function() {
        owl.trigger('next.owl.carousel');
    });
  });