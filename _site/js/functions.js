// ALL DROPDONWS FUNCTION

$(".dropdown").mouseenter(function() {
	$(this).addClass("open")
});

$(".dropdown").mouseleave(function() {
	$(this).removeClass("open")
});





// // SLIDER TOGGLE FUNCTION
//
// $(document).ready(function() {
// 	var window_width = $(window).width();
//
// 	if(window_width <= 991) {
// 		var slider_width = $(".navbar-collapse").width();
// 		$(".navbar-collapse-left").css("left", -1 * slider_width);
// 		$(".navbar-collapse-right").css("right", -1 * slider_width);
// 	}
//
// 	$(".navbar-toggle").click(function() {
// 		$(".navbar-collapse-left").animate({"margin-left": slider_width});
// 		$(".navbar-collapse-right").animate({"margin-right": slider_width});
// 		$(".navbar-collapse").show();
// 		$(".navbar-overlay").fadeIn(500);
// 		$("body").css("overflow", "hidden");
// 	});
//
// 	$(".navbar-close, .navbar-overlay").click(function() {
// 		$(".navbar-collapse-left").animate({"margin-left": "0"});
// 		$(".navbar-collapse-left").animate({"margin-right": "0"});
// 		$(".navbar-overlay").fadeOut(500);
// 		$("body").css("overflow", "auto");
// 	});
//
// });



// alert( $(".form-control").data("title"));



// $('.form-group').on('focus', '.form-control', function(e) {
// 	if($('.form-message').css('display') == 'block'){
// 		$('.form-message').hide();
// 	} 
// });
//


$(document).ready(function() { 
	$('.form-control').focus(function(e) { 
		if($(e.target).next('.form-message').css('display') == 'block'){ 
			$(e.target).next('.form-message').hide(); 
		} 
	});
 });


//
//
// $(".form-group").each(function() { 
// 	$( ".form-control" ).focus(function() { 
// 		$(this).next(".form-message");
// 			$(this).hide();
// 		}
// 	});
// });
