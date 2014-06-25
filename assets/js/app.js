$(document).ready(function(){
	$(window).scroll(function () {
		if($(window).scrollTop() > 150){
			$("header").addClass("bg");
		}
		else {
			$("header").removeClass("bg");
		}
	});	
	$('.intro').css({minHeight: $(window).height() });
});

$(window).load(function() {
	$(".loader").delay(2000).animate({
		opacity: 0
	}, 1000);
	$(".page").delay(2000).animate({
		opacity: 1
	}, 1000);
});