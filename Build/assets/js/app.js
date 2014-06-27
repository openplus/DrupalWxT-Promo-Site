$(document).ready(function(){
	$(window).scroll(function () {
		if($(window).scrollTop() > 150){
			$("header").addClass("bg");
		}
		else {
			$("header").removeClass("bg");
		}
	});	
	$('.home .intro').css({minHeight: $(window).height() });
	$(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('section').each( function(i){
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

$(window).load(function() {
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
	    if ( $window.scrollTop() >= $distance-5 ) {
	        $('.secondnav').addClass('sticky');
	        $('.intro').css({marginBottom:$height});
	    }
	    else{
	    	$('.secondnav').removeClass('sticky');
	    	$('.intro').css({marginBottom:0});
	    }
	});


	
});