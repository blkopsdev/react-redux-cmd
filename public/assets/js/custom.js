// ==================================================
// Project Name  :  Spread
// File          :  JS Base
// Version       :  1.0.0
// Last change   :  19 August 2019
// Author        :  ----------
// Developer:    :  Vladimir
// ==================================================




(function($) {
  "use strict";




  
  // back to top - start
  // --------------------------------------------------
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('#backtotop:hidden').stop(true, true).fadeIn();
    } else {
      $('#backtotop').stop(true, true).fadeOut();
    }
  });
  $(function() {
    $("#scroll").on('click', function() {
      $("html,body").animate({
        scrollTop: $("#thetop").offset().top
      }, "slow");
      return false
    })
  });
  // back to top - end
  // --------------------------------------------------




  
  // preloader - start
  // --------------------------------------------------
  // $(window).on('load', function(){
  //   $('#preloader').fadeOut('slow',function(){$(this).remove();});
  // });
  // preloader - end
  // --------------------------------------------------




  
  // search box - start
  // --------------------------------------------------
  // $('.search-btn').on('click', function() {
  //   $(this).toggleClass('active');
  //   $('.search-body').toggleClass('search-open');
  // });
  // search box - end
  // --------------------------------------------------




  
  // menu button - start
  // --------------------------------------------------
  $(document).ready(function () {
    $('.close-btn, .overlay').on('click', function () {
      $('#sidebar-menu').removeClass('active');
      $('.overlay').removeClass('active');
    });

    $('#sidebar-collapse').on('click', function () {
      $('#sidebar-menu').addClass('active');
      $('.overlay').addClass('active');
    });
  });
  // menu button - end
  // --------------------------------------------------




  
  // testimonial-carousel - start
  // --------------------------------------------------
  $('#testimonial-carousel').owlCarousel({
    nav:true,
    loop:true,
    margin:30,
    dots:false,
    // autoplay:true,
    smartSpeed:1000,
    // autoplayTimeout:6000,
    // autoplayHoverPause:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:2
      },
      1000:{
        items:3
      }
    }
  });
  // testimonial-carousel - end
  // --------------------------------------------------




  
  // masoney grid layout - start
  // --------------------------------------------------
  var $grid = $('.grid').imagesLoaded( function() {
    $grid.masonry({
      itemSelector: '.grid-item',
      percentPosition: true,
      columnWidth: '.grid-sizer'
    }); 
  });
  // masoney grid layout - end
  // --------------------------------------------------





  // sticky menu - start
  // --------------------------------------------------
  var headerId = $(".sticky-header");
  $(window).on('scroll' , function() {
    var amountScrolled = $(window).scrollTop();
    if ($(this).scrollTop() > 80) {
      headerId.removeClass("not-stuck");
      headerId.addClass("stuck");
    } else {
      headerId.removeClass("stuck");
      headerId.addClass("not-stuck");
    }
  });
  // sticky menu - end
  // --------------------------------------------------



  
})(jQuery);