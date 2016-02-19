$(document).ready(function(){
	var $windowWidth = $(window).width();  
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
		$('body').toggleClass('slide');
	});

	//Fade In on Scroll Effect 
	new WOW().init();


	//Custom Scroll To Section (button)
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

	//Custom Scroll To Section (a)
	$('a.scroll').on('click', function(e){
		e.preventDefault();
		var link = $(this).attr('href');
		$('section').each(function(){
			var target = $(this).attr('class');
			if (link === target) {
				$('html, body').animate({
					scrollTop: $(this).offset().top - 70
				}, 500);
				return false;
			}
		});
		//Close mobile menu
		if ($windowWidth < 640  ){
			$('body').toggleClass('slide');
		}
	})

	//Form Submisson
	$('.form-submit').on('click', function(e){
		e.preventDefault();
		var name = $('#name').val(),
			email = $('#email').val(),
			message = $('#message').val();



		$.ajax({
			method: 'POST',
			url: 'sendForm.php',
			data: {
				name: name,
				email: email,
				message: message
			}
		});
	});

});