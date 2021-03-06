var $doc = $(document),
	$win = $(window);
$doc.ready(function() {

    var $winWidth = $win.width();
    var $winHeight = $win.height();

    function isMobile() {
    	if ($winWidth > 768) {
    		console.log('mobile device detected');
    		return false;
    	}
    }

    //Update header 
    $win.on("scroll", function() {
        var $winScoll = $win.scrollTop();
        getScrollPositons();
        var heightOffset = $winHeight - 20;

        if (heightOffset < $winScoll) {
            $('header').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
        }

    });

    //Push Menu
    $('.mobile-menu').on('click', function() {
        $('body').toggleClass('slide');
    });

    //Fade In on Scroll Effect 
    new WOW().init();

    //Custom Scroll To Section (button)
    $('button').on('click', function() {
        var data = $(this).attr('data-link');
        $('section').each(function() {
            var target = $(this).attr('class');
            if (data === target) {
                $('html, body').animate({
                    scrollTop: $(this).offset().top - 50
                }, 500);
                return false;
            }
        });
    })

    //Custom Scroll To Section (a)
    $('a.scroll').on('click', function(e) {
        e.preventDefault();
        var link = $(this).attr('href');
        $('section').each(function() {
            var target = $(this).attr('class');
            if (link === target) {
                $('html, body').animate({
                    scrollTop: $(this).offset().top - 50
                }, 500);
                return false;
            }
        });
        //Close mobile menu
        if ($winWidth < 640) {
            $('body').toggleClass('slide');
        }
    });

    $('input').on('focus', function() {
    	$(this).parent().addClass('focused');
    });


    $('input').on('blur', function() {
    	if ($(this).val() === '') {
    		$(this).parent().removeClass('focused');
    	}
    	
    });

     $('textarea').on('focus', function() {
    	$(this).parent().addClass('focused');
    });


    $('textarea').on('blur', function() {
    	if ($(this).val() === '') {
    		$(this).parent().removeClass('focused');
    	}
    	
    });


    //Form Submisson
    $('.form-submit').on('click', function(e) {
        e.preventDefault();
        var name = $('#name').val(),
            email = $('#email').val(),
            message = $('#message').val();

        function clearForm() {
            $('#name').val('');
            $('#email').val('');
            $('#message').val('');
        };

        $.ajax({
            type: 'POST',
            url: 'sendForm.php',
            data: {
                name: name,
                email: email,
                message: message
            },
            success: function() {
                clearForm();
                $('.form-submit').before('<p>Message Sent Successfully!</p>');
            }
        });
    });

    $('.date').html(function() {
        var today = new Date(),
            year = today.getFullYear();
        return year;
    })

});

//Custom Scroll Spy
function getScrollPositons() {
    var $winScoll = $win.scrollTop() + 70;
    var lastSection = $('section').last().attr('class');

    $('section').each(function() {
        var section = $(this),
            sectionClass = $(this).attr('class'),
            sectionPosition = $(this).offset().top,
            nextSection = $(this).next();

        if (nextSection.length) {
            var nextsectionPosition = nextSection.offset().top;
            if (sectionPosition <= $winScoll && nextsectionPosition > $winScoll) {
                loopNavLinks();
            }
        } else {
            if (sectionPosition <= $winScoll && sectionClass === lastSection) {
                loopNavLinks();
            }
        }

        function loopNavLinks() {
            $('a.scroll').each(function() {
                var data = $(this).attr('href');
                if (data === sectionClass) {
                    $(this).parent().addClass('active');
                } else {
                    $(this).parent().removeClass('active');
                }
            })
        }
    });
}
