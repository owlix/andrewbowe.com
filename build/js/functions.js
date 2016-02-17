$(document).ready(function(){

	$(window).on("scroll", function(){
		var $winScoll = $(window).scrollTop();
		var $winheight = $(window).height();
		if ($winheight < $winScoll) {
			$('header').addClass('scrolled');
		} else {
			$('header').removeClass('scrolled');
		}	
		
	});

	//Push Menu
	$('.mobile-menu').on('click', function(){
		console.log('click');
		$('body').toggleClass('slide');
	});

	//Fade In on Scroll Effect 
	new WOW().init();


	//Custom Scroll To Section
	$('button').on('click', function(){
		var data = $(this).attr('data-link');
		$('section').each(function(){
			var target = $(this).attr('class');
			if (data === target) {
				$('html, body').animate({
					scrollTop: $(this).offset().top - 70
				}, 500);
				return false;
			}
		});
	})

});