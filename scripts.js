// Shorthand for $( document ).ready()
$(function() {


  $('.grid').imagesLoaded( function() {

    $('.grid').masonry({
      // options
      itemSelector: '.grid-item',
    });
  
  });
    
});