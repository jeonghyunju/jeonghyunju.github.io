;(function () {
	
	'use strict';

	// var mobileMenuOutsideClick = function() {
	//
	// 	$(document).click(function (e) {
	//     var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
	//     if (!container.is(e.target) && container.has(e.target).length === 0) {
	//
	//     	if ( $('body').hasClass('offcanvas') ) {
	//
    // 			$('body').removeClass('offcanvas');
    // 			$('.js-fh5co-nav-toggle').removeClass('active');
	//     	}
	//     }
	// 	});
	//
	// };


	// var offcanvasMenu = function() {
	//
	// 	$('#page').prepend('<div id="fh5co-offcanvas" />');
	// 	$('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
	// 	var clone1 = $('.menu-1 > ul').clone();
	// 	$('#fh5co-offcanvas').append(clone1);
	// 	var clone2 = $('.menu-2 > ul').clone();
	// 	$('#fh5co-offcanvas').append(clone2);
	//
	// 	$('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
	// 	$('#fh5co-offcanvas')
	// 		.find('li')
	// 		.removeClass('has-dropdown');
	//
	// 	// Hover dropdown menu on mobile
	// 	$('.offcanvas-has-dropdown').mouseenter(function(){
	// 		var $this = $(this);
	//
	// 		$this
	// 			.addClass('active')
	// 			.find('ul')
	// 			.slideDown(500, 'easeOutExpo');
	// 	}).mouseleave(function(){
	//
	// 		var $this = $(this);
	// 		$this
	// 			.removeClass('active')
	// 			.find('ul')
	// 			.slideUp(500, 'easeOutExpo');
	// 	});
	//
	//
	// 	$(window).resize(function(){
	//
	// 		if ( $('body').hasClass('offcanvas') ) {
	//
    // 			$('body').removeClass('offcanvas');
    // 			$('.js-fh5co-nav-toggle').removeClass('active');
	//
	//     	}
	// 	});
	// };


	// var burgerMenu = function() {
	//
	// 	$('body').on('click', '.js-fh5co-nav-toggle', function(event){
	// 		var $this = $(this);
	//
	//
	// 		if ( $('body').hasClass('overflow offcanvas') ) {
	// 			$('body').removeClass('overflow offcanvas');
	// 		} else {
	// 			$('body').addClass('overflow offcanvas');
	// 		}
	// 		$this.toggleClass('active');
	// 		event.preventDefault();
	//
	// 	});
	// };



	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};

	function shuffle(array) {
		var currentIndex = array.length, temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}

	var shuffleSpecialThanks = function() {
		var items = $("#fh5co-special-thanks").find(".item");
		items = shuffle(items);
		$("#special-thanks-items").html(items)
	};


	var testimonialCarousel = function(){
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			responsiveClass: true,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true,
		});
	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');

			gaEvent('common', 'click', 'go_to_top');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};

	var goToMap = function() {

		$('.js-gomap').on('click', function(event){
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $("#map").offset().top
			}, 500, 'easeInOutExpo');

			gaEvent('map', 'click', 'go_to_map');

			return false;
		});
	};


	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#fh5co-counter').length > 0 ) {
			$('#fh5co-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	// Parallax
	var parallax = function() {
		$(window).stellar();
	};

	//PhotoSwipe
	var initGallery = function() {
		var gallery0 = {
			"#wedding-gallery": [
				{
					src: 'images/landing/gallery/1-wedding/1.jpg',
					w: 1573,
					h: 1179
				},
				{
					src: 'images/landing/gallery/1-wedding/2.jpg',
					w: 1573,
					h: 1179
				},
				{
					src: 'images/landing/gallery/1-wedding/3.jpg',
					w: 1455,
					h: 1179
				},
				{
					src: 'images/landing/gallery/1-wedding/4.jpg',
					w: 1112,
					h: 754
				},
				{
					src: 'images/landing/gallery/1-wedding/5.jpg',
					w: 1584,
					h: 1188
				},
				{
					src: 'images/landing/gallery/1-wedding/6.jpg',
					w: 1190,
					h: 893
				},
				{
					src: 'images/landing/gallery/1-wedding/7.jpg',
					w: 1037,
					h: 778
				},
				{
					src: 'images/landing/gallery/1-wedding/8.jpg',
					w: 681,
					h: 875
				},
				{
					src: 'images/landing/gallery/1-wedding/9.jpg',
					w: 1206,
					h: 796
				},
				{
					src: 'images/landing/gallery/1-wedding/10.jpeg',
					w: 1086,
					h: 724
				},
				{
					src: 'images/landing/gallery/1-wedding/11.jpeg',
					w: 720,
					h: 960
				},
				{
					src: 'images/landing/gallery/1-wedding/12.jpeg',
					w: 960,
					h: 721
				}
			]
		};

		var gallery1 = {
			"#laos-gallery": [
				{
					src: 'images/landing/gallery/2-hk/1.jpeg',
					w: 1108,
					h: 1478
				},
				{
					src: 'images/landing/gallery/2-hk/2.jpeg',
					w: 1108,
					h: 1478
				},
				{
					src: 'images/landing/gallery/2-hk/3.jpeg',
					w: 1478,
					h: 1108
				},
				{
					src: 'images/landing/gallery/2-hk/4.jpeg',
					w: 1108,
					h: 1478
				},
				{
					src: 'images/landing/gallery/2-hk/5.jpeg',
					w: 1478,
					h: 1108
				},
				{
					src: 'images/landing/gallery/2-hk/6.jpeg',
					w: 1478,
					h: 1108
				},
				{
					src: 'images/landing/gallery/2-hk/7.jpeg',
					w: 1478,
					h: 1108
				},
				{
					src: 'images/landing/gallery/2-hk/8.jpeg',
					w: 1478,
					h: 1108
				},
				{
					src: 'images/landing/gallery/2-hk/9.jpeg',
					w: 1108,
					h: 1478
				},
				{
					src: 'images/landing/gallery/2-hk/10.jpeg',
					w: 1108,
					h: 1478
				},
				{
					src: 'images/landing/gallery/2-hk/11.jpeg',
					w: 1108,
					h: 1478
				},
				{
					src: 'images/landing/gallery/2-hk/12.jpeg',
					w: 1108,
					h: 1478
				}
			]
		};

		var gallery2 = {
			"#fin-gallery": [
				{
					src: 'images/landing/gallery/3-am/1.jpeg',
					w: 1478,
					h: 1108
				},
				{
					src: 'images/landing/gallery/3-am/2.jpeg',
					w: 2048,
					h: 2019
				},
				{
					src: 'images/landing/gallery/3-am/3.jpeg',
					w: 2364,
					h: 1773
				},
				{
					src: 'images/landing/gallery/3-am/4.jpeg',
					w: 2048,
					h: 1994
				},
				{
					src: 'images/landing/gallery/3-am/5.jpeg',
					w: 1108,
					h: 1109
				},
				{
					src: 'images/landing/gallery/3-am/6.jpeg',
					w: 1477,
					h: 1108
				},
				{
					src: 'images/landing/gallery/3-am/7.jpeg',
					w: 1773,
					h: 2364
				},
				{
					src: 'images/landing/gallery/3-am/8.jpeg',
					w: 2048,
					h: 2048
				},
				{
					src: 'images/landing/gallery/3-am/9.jpeg',
					w: 2048,
					h: 2048
				},
				{
					src: 'images/landing/gallery/3-am/10.jpeg',
					w: 2048,
					h: 2048
				},
				{
					src: 'images/landing/gallery/3-am/11.jpeg',
					w: 1108,
					h: 1402
				}
			]
		};

		var gallery3 = {
			"#vv-gallery": [
				{
					src: 'images/landing/gallery/4-jeju/1.jpeg',
					w: 1536,
					h: 1536
				},
				{
					src: 'images/landing/gallery/4-jeju/2.jpeg',
					w: 2048,
					h: 2048
				},
				{
					src: 'images/landing/gallery/4-jeju/3.jpeg',
					w: 2048,
					h: 2048
				},
				{
					src: 'images/landing/gallery/4-jeju/4.jpeg',
					w: 1536,
					h: 1536
				},
				{
					src: 'images/landing/gallery/4-jeju/5.jpeg',
					w: 2048,
					h: 2048
				},
				{
					src: 'images/landing/gallery/4-jeju/6.jpeg',
					w: 2048,
					h: 2048
				},
				{
					src: 'images/landing/gallery/4-jeju/7.jpeg',
					w: 2048,
					h: 2048
				},
				{
					src: 'images/landing/gallery/4-jeju/8.jpeg',
					w: 2048,
					h: 2048
				},
				{
					src: 'images/landing/gallery/4-jeju/9.jpeg',
					w: 2048,
					h: 2048
				},
				{
					src: 'images/landing/gallery/4-jeju/10.jpeg',
					w: 1108,
					h: 1478
				},
				{
					src: 'images/landing/gallery/4-jeju/11.jpeg',
					w: 1478,
					h: 1108
				}
			]
		};

		var gallery4 = {
			"#tw-gallery": [
				{
					src: 'images/landing/gallery/5-date/1.jpeg',
					w: 1528,
					h: 994
				},
				{
					src: 'images/landing/gallery/5-date/2.jpeg',
					w: 1478,
					h: 1012
				},
				{
					src: 'images/landing/gallery/5-date/3.jpeg',
					w: 1478,
					h: 1108
				},
				{
					src: 'images/landing/gallery/5-date/4.jpeg',
					w: 1280,
					h: 1280
				},
				{
					src: 'images/landing/gallery/5-date/5.jpeg',
					w: 1280,
					h: 960
				},
				{
					src: 'images/landing/gallery/5-date/6.jpeg',
					w: 1280,
					h: 1280
				},
				{
					src: 'images/landing/gallery/5-date/7.jpeg',
					w: 1108,
					h: 1478
				}
			]
		};

		var gallery5 = {
			"#hk-gallery": [
				{
					src: 'images/landing/gallery/6-baby/1.jpeg',
					w: 960,
					h: 1117
				},
				{
					src: 'images/landing/gallery/6-baby/2.JPG',
					w: 1108,
					h: 1478
				},
				{
					src: 'images/landing/gallery/6-baby/3.JPG',
					w: 1280,
					h: 1280
				},
				{
					src: 'images/landing/gallery/6-baby/4.JPG',
					w: 1053,
					h: 960
				},
				{
					src: 'images/landing/gallery/6-baby/5.JPG',
					w: 960,
					h: 1185
				},
				{
					src: 'images/landing/gallery/6-baby/6.JPG',
					w: 960,
					h: 1280
				}
			]
		};

		var galleryList = [gallery0, gallery1, gallery2, gallery3, gallery4, gallery5];

		for(var i = 0; i < galleryList.length; i++) {
			var gallery = galleryList[i];
			var galleryId = Object.keys(gallery)[0];
			$(galleryId).on("click", {items : gallery[galleryId]}, function(e) {
				e.preventDefault();

				// build items array
				var items = e.data.items;

				openPhotoSwipeView(items);

				gaEvent('gallery', 'click', e.currentTarget.id);

				return false;
			});

		}
	};

	function openPhotoSwipeView(items) {
		var pswpElement = document.querySelectorAll('.pswp')[0];

		// define options (if needed)
		var options = {
			// optionName: 'option value'
			// for example:
			index: 0 // start at first slide
		};

		// Initializes and opens PhotoSwipe
		var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
		gallery.init();

	}

	var initNaverMap = function() {
		var HOME_PATH = window.HOME_PATH || '.';
		var position = new naver.maps.LatLng(37.5046955,127.0406899);
		var mapOptions = {
			center: position,
			zoom: 14,
			minZoom: 6,
			maxZoom: 20
		};

		var map = new naver.maps.Map('map', mapOptions);

		var marker = new naver.maps.Marker({
			map: map,
			position: position,
			icon: {
				url: HOME_PATH + '/images/heart_marker_coral.png',
				scaledSize: new naver.maps.Size(50, 69)
			},
			animation: naver.maps.Animation.BOUNCE
		});

		naver.maps.Event.addListener(marker, 'click', function () {
			if (marker.getAnimation() !== null) {
				marker.setAnimation(null);
			} else {
				marker.setAnimation(naver.maps.Animation.BOUNCE);
			}

			gaEvent('map', 'click', 'pin_animation');
		});

		$("#to-center").on("click", function (e) {
			e.preventDefault();
			map.setCenter(position);
			map.setZoom(12, true);
			buttons.fadeOut();
			gaEvent('map', 'click', 'center_button_hide');
		});
		var buttons = $("#map").find(".buttons");
		buttons.hide();
		var eventList = ['mouseup', 'touchup', 'dragend', 'pinchend', 'click', 'dblclick', 'tap', 'longtap', 'twofingertap', 'doubletap', 'zoom_changed'];
		eventList.forEach(function (eventName) {
			naver.maps.Event.addListener(map, eventName, function (e) {
				if (buttons.is(':visible')) {
					return;
				}
				buttons.fadeIn();
				gaEvent('map', eventName, 'center_button_show');
			});
		});
	};

	var initCountDown = function() {
		var d = new Date(2019, 5, 16, 21, 30);// Jan is 0, Dec is 11

		var onEnd = function() {
			$('.simply-countdown').hide();
			$('.just-married').show();
		};

		simplyCountdown('.simply-countdown-one', {
			year: d.getFullYear(),
			month: d.getMonth() + 1,
			day: d.getDate(),
			hours: d.getHours(),
			minutes: d.getMinutes(),
			enableUtc: true,
			onEnd: onEnd
		});
	};

	var addTimelinePopupEvent = function() {
		$(".photo-viewer").on("click", function (e) {
			e.preventDefault();

			var image = $(this).attr('data-image');
			var width = $(this).attr('data-width');
			var height = $(this).attr('data-height');

			var items = [{
				src: image,
				w: width,
				h: height
			}];


			openPhotoSwipeView(items);

			var split = image.split("/");
			var fileName = split[split.length - 1];

			gaEvent('photoviewer', 'click', fileName);

			return false;
		});
	};

	function gaEvent(category, action, label) {
		ga('send', 'event', {
			eventCategory: category,
			eventAction: action,
			eventLabel: label
		});
	}

	
	$(function(){
		// mobileMenuOutsideClick();
		parallax();
		// offcanvasMenu();
		// burgerMenu();
		contentWayPoint();
		dropdown();
		// shuffleSpecialThanks();
		testimonialCarousel();
		goToTop();
		goToMap();
		loaderPage();
		counter();
		counterWayPoint();
		initGallery();
		initNaverMap();
		initCountDown();
		addTimelinePopupEvent();
	});


}());