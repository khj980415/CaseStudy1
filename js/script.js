$(document).ready(function(){
	const mainSwiper = new Swiper(".mainSwiper", {
		loop: true,
		autoplay: {
			delay: 5000,
		},
		on: {
			init: function(){
				$(".slider .number .pages").text(this.slides.length);
				$(".slider .number .page").text(this.realIndex+1);
			},
			slideChangeTransitionEnd: function(){
				$(".slider .number .page").text(this.realIndex+1);
			},
		}
    });
	
	$(".lang li:first-child").addClass("active");
	$(".lang li").click(function(e){
		e.preventDefault();
		$(".lang li").removeClass("active");
		$(this).addClass("active");
	});
	
	$("header > nav > .nav_inner > ul > li").hover(
		function(){
			$(this).addClass("active");
		},
		function(){
			$(this).removeClass("active");
		}
	);

	$("header li li").hover(
		function(){
			$(this).children().css("color","#a67f4b");
		},
		function(){
			$(this).children().css("color","#333");
		}
	);

	$("header > nav > .nav_inner > ul > li > a").focusin(function(){
		$(this).parent().addClass("active");
	});
	$("header li li:last-child").focusout(function(){
		$(this).parent().parent().removeClass("active");
	});

	$("header li li a").focusin(function(){
		$(this).css("color", "#a67f4b");
	});

	$("header li li a").focusout(function(){
		$(this).css("color", "#333");
	});

	$(".slider .control .prev").click(function(e){
		e.preventDefault();
		mainSwiper.slidePrev();
	});

	$(".slider .control .next").click(function(e){
		e.preventDefault();
		mainSwiper.slideNext();
	});
});