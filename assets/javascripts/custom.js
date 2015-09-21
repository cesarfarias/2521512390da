$(document).ready(function(){

/* 
=============================================== 
Parallax Swagways Javascript
=============================================== 
*/

  "use strict";
  var target = jQuery("#target");
   
  target
  .children('div')
  .parallax(
      { mouseport: target },
      { xparallax: 0.2, yparallax: 0.2 },     // Blue layer options
      { xparallax: 0.6, yparallax: 0.6 },     // Green layer options
      {}                                      // Red layer options
  );

/* 
=============================================== 
Owl Carousel Swagways Javascript
=============================================== 
*/

  var owl     = $("#owl-demo");
  var owlcol  = $("#owl-demo-col");
  var owlsale = $("#owl-sale");
 
  owl.owlCarousel({
     
      itemsCustom : [
        [0, 1],
        [450, 1],
        [600, 1],
        [700, 1],
        [1000, 1]
      ],
      navigation : false,
      transitionStyle : "fade"
 
  });

  owlcol.owlCarousel({
     
      itemsCustom : [
        [0, 1],
        [450, 1],
        [600, 1],
        [700, 1],
        [1000, 1]
      ],
      navigation : true,
      pagination : false,
      transitionStyle : "fade"
 
  });

  owlsale.owlCarousel({
     
      itemsCustom : [
        [0, 1],
        [450, 1],
        [600, 1],
        [700, 1],
        [1000, 1]
      ],
      pagination : true,
      transitionStyle : "fade"
 
  });

  $("#owl-news").owlCarousel({
 
      navigation      : true, // Show next and prev buttons
      slideSpeed      : 300,
      pagination      : false,
      paginationSpeed : 400,
      singleItem      : true,
 
  });

  $("#owl-blog").owlCarousel({
 
      navigation      : true, // Show next and prev buttons
      slideSpeed      : 300,
      pagination      : false,
      paginationSpeed : 400,
      singleItem      : true,
 
  });

/* 
=============================================== 
Owl Carousel Swagways Javascript
=============================================== 
*/
  // open-search
  $('#open-search').on("click", function(){
    $('.search-open').toggleClass('hide');
  });

/* 
=============================================== 
On Click Function
=============================================== 
*/
  // open-search
  $('#show-filter-blog').on("click", function(){
    $('.blog-page-filter').toggleClass('hide');
  });

/* 
=============================================== 
Google Javascript
=============================================== 
*/

  // function initialize() {
  //   var mapCanvas = document.getElementById('map-canvas');
  //   var mapOptions = {
  //     center: new google.maps.LatLng(44.5403, -78.5463),
  //     zoom: 8,
  //     mapTypeId: google.maps.MapTypeId.ROADMAP
  //   }
  //   var map = new google.maps.Map(mapCanvas, mapOptions)
  // }
  // google.maps.event.addDomListener(window, 'load', initialize);


});