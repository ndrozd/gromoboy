$(document).ready(function($) {
  // $('img[src$=".svg"].inject').svgInject();  
  $(".menu-btn").on('touchstart click', function(event) {
    event.preventDefault();
    $("body").toggleClass('menu-active');
  });

  $(".js-step").on('click', '.js-tonextstep', function(event) {
    event.preventDefault();
    $(this).parents(".js-step").removeClass('active').next(".js-step").addClass('active');
  });

  $(".bl-teams-command").on('click', function(event) {
    event.preventDefault();
    $(this).parents(".bl-teams").addClass('mobile-second');
  });

  $("#teams-back").on('click', function(event) {
    event.preventDefault();
    $(".bl-teams").removeClass('mobile-second');
  });

  $("#tab-reg").on('click', function(event) {
    event.preventDefault();
    $(this).addClass('active').siblings('.tabs-one').removeClass('active');
    $(this).parents(".bl-partners").addClass('reg');
  });

  $("#tab-sign").on('click', function(event) {
    event.preventDefault();
    $(this).addClass('active').siblings('.tabs-one').removeClass('active');
    $(this).parents(".bl-partners").removeClass('reg');
  });

  $(".js-step").on('click', '.js-toprevstep', function(event) {
    event.preventDefault();
    $(this).parents(".js-step").removeClass('active').prev(".js-step").addClass('active');
  });
  $(".tooltip-pos").on('mouseenter', function(event) {
    $(this).find(".tool-tip").addClass('active');
  });
  $(".tooltip-pos").on('mouseleave', function(event) {
    $(this).find(".tool-tip").removeClass('active');
  });

  $(".tabs-newlogic").on('click', '.tabs-one', function(event) {
    var tabToShow = $(this).data("tab");
    $(this).addClass('active').siblings('.tabs-one').removeClass('active');
    $(this).parents(".tabs-wrap").next('.tabs-tabs').find('.' + tabToShow).addClass('active').siblings('.tab').removeClass('active');
  });

 
  if ($('.bl-bloglist-wrap').length) {
    var $container = $('.bl-bloglist-wrap');
    $container.imagesLoaded( function() {
      $container.masonry({
        columnWidth: 280,
        "gutter": 40,
        itemSelector: '.bl-bloglist-one',
      });
    });
  }
  
  
  if ($('.js-range').length) {
    var elem = document.querySelector('.js-range');
    function displayValue() {
      $('#display-box').val(elem.value);
    }
    var init = new Powerange(elem, {callback: displayValue, min: 3, max: 20, start: 12});

    
  }

  $(".search-input").focus(function(){
    $(this).parents(".search-input-wrap").addClass("focus");
  }).blur(function(){
      $(this).parents(".search-input-wrap").removeClass("focus");
    })

  $(".to-popup").on('click', function(event) {
    event.preventDefault();
    var id = $(this).attr("href");
    openPopup(id);
  });
  $(".popup-close, .popup-scene").on('click', function(event) {
    event.preventDefault();
    closePopups();
  });

});

function openPopup(id) {
  $(".popup.active").removeClass("active");
  $(id).addClass('active');
}

function closePopups() {
  $(".popup.active").removeClass("active");
}
