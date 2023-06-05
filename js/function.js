(function ($) {
    "use strict";
	
	var $window = $(window); 
	var $body = $('body'); 

	/* Preloader Effect */
	$window.on( "load", function() {
	   $(".preloader").fadeOut(600);
    });
	
	/* Water Effect JS */
	$('.ripple').ripples({
		resolution: 512,
		perturbance: 0.04,
	});

	/* Sticky header */
	$window.scroll(function(){
    	if ($window.scrollTop() > 100) {
			// $('.navbar').addClass('sticky-header');
			// $('.navbar-brand').removeClass('d-none');
			// $('.header .navbar-light .navbar-nav .nav-link').css('color', '#002855');
			// $('.header .navbar-light .navbar-nav .nav-link').hover(
			// 	function() {
			// 		this.css('background', '#333')
			// 	},
			// 	function () {
			// 		this.css('background', 'none')
			// 	}
			// );
			// $('.header .navbar-light .navbar-nav .nav-link').addClass('.link-color');
			// console.log($('.header .navbar-light .navbar-nav .nav-link'))
		} else {
			// $('.header .navbar-light .navbar-nav .nav-link').css('color', '#fff');
			// $('.navbar').removeClass('sticky-header');
			// $('.navbar-brand').addClass('d-none');
		}
	});
		
	/* slick nav */
	$('#main-menu').slicknav({prependTo:'#responsive-menu',label:'', closeOnClick:true});
		
	/* Top Menu */
	$(document).on('click','.navbar-nav li a, #responsive-menu ul li a',function(){		
		if($(this).hasClass("has-popup")) return false;
		var id = $(this).attr('href');
		if($(id).length) {
			var h = parseFloat($(id).offset().top);
			$('body,html').stop().animate({
				scrollTop: h - 70
			}, 800);
			return false;
		}
	});
	
	
	/* Testimonial slider */
	var swiper = new Swiper('.screenshot-slider',{
		effect: 'coverflow',
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 3,
		coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows : false,
		},
		navigation: {
			nextEl: '.screenshot-slide-next',
			prevEl: '.screenshot-slide-prev',
		}
    });
	
	/* Screenshot slider */
	var swiper = new Swiper('.testimonial-slider',{
		slidesPerView: 1,
		spaceBetween: 0,
		pagination: {
			el: '.testimonial-pagination',
			type: 'bullets',
			clickable: true
		},
    });

	/* Popup video */
	$('.popup-video').magnificPopup({
        type: 'iframe',
        preloader: true,
    });
		
	/* Animate with wow js */
    new WOW({mobile:false}).init(); 
	
})(jQuery);