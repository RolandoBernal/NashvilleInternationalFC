jQuery(function($) {

	//#main-slider
	$(function(){
		$('#main-slider.carousel').carousel({
			interval: 8000
		});
	});


	//Initiat WOW JS
	new WOW().init();

	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
			} else {
				$('.scrollup').fadeOut();
			}
		});
		$('.scrollup').click(function(){
			$("html, body").animate({ scrollTop: 0 }, 1000);
				return false;
		});

	// teams filter
	$(window).load(function(){'use strict';
		var $team_selectors = $('.team-filter >li>a');
		var $team = $('.team-items');
		$team.isotope({
			itemSelector : '.team-item',
			layoutMode : 'fitRows'
		});

		$team_selectors.on('click', function(){
			$team_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$team.isotope({ filter: selector });
			return false;
		});
	});

	//Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});
});
