$(document).ready(function(){
	$('.carousel').carousel({
	  interval: 10000
	});
	$(window).scroll(function () {
		if($(window).scrollTop() > 150){
			$(".home header").addClass("bg");
		}
		else {
			$(".home header").removeClass("bg");
		}
	});	
	$('.home .intro').css({minHeight: $(window).height() });
	$(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.home section').each( function(i){
            var height = $(this).height();
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > (bottom_of_object - (height) ) ){
                $(this).addClass('animatein'); 
            }
            else 
            {
            }  
        }); 
    });
});



$(function() {
  $('a[href*=#]:not([href=#]).slidelink').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(window).load(function() {
    $('.logos').marquee({
    	duplicated: true,
    	duration: 20000,
    	pauseOnHover: true
    });
});

$(window).scroll(function() {
	$('.features section .gotodiv').each(function(){
				var $distance = $(this).offset().top;
				$this = $(this);
		    	$id = $this.attr('id');
		    	if ( $(window).scrollTop() >= $distance ) {
				    if($('.secondnav a[href="#' + $id + '"]').length == 0) {
				    }
			   		
			   		else{
			   			$('.secondnav a').removeClass('active');
				        $('.secondnav a[href="#' + $id + '"]').addClass('active');
			   		}
		   		}
	});
});

$(window).bind("load resize", function() {
	$(".loader").animate({
		opacity: 0
	}, 500);
	$(".page").animate({
		opacity: 1
	}, 500);


	var $distance = $('.secondnav').offset().top,
	$window = $(window);
	var $height = $('.secondnav').height();
	$window.scroll(function() {
	    if ( $window.scrollTop() >= $distance ) {
	    	$('body').addClass('hasstickyheader');
	        $('.secondnav').addClass('sticky');
	        $('.intro').css({marginBottom:$height});
	    }
	    else{
	    	$('body').removeClass('hasstickyheader');
	    	$('.secondnav').removeClass('sticky');
	    	$('.intro').css({marginBottom:0});
	    }
	});
	
});


