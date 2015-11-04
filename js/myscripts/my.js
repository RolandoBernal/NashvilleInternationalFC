  // jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
  target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
  var modal = this;
  var hash = modal.id;
  window.location.hash = hash;
  window.onhashchange = function() {
    if (!location.hash){
      $(modal).modal('hide');
    }
  }
});

 jQuery(document).ready(function($) {
/*------------------------------------------------------
  Navigation Features
-------------------------------------------------------*/

  if ($(window).scrollTop()===0){
      $('#main-navigation').removeClass('stuck');
    }
    else{
      $('#main-navigation').addClass('stuck');
    }

    $(window).scroll(function(){
      if ($(window).scrollTop()===0){
        $('#main-navigation').removeClass('stuck');
      }
      else{
        $('#main-navigation').addClass('stuck');
      }
    });
});























