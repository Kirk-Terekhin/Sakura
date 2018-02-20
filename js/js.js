$(function() {
	$('.your-class').slick({
		dots: false,
		slidesToShow: 1,
		slidesToScroll: 1
	});




	var slickSlide = $('.carousel-inner .item img');

	function modalHeight() {
		for (var i = 0; i < slickSlide.length; i++) {
			var height = $(slickSlide[i]).height();
			var width = $(slickSlide[i]).width();
			var xxx = width / height;
			var winHeight = $(window).innerHeight() - 250;
			$(slickSlide[i]).css({
				height: winHeight + 'px'
				//width: (winHeight * xxx)+'px'
			});
		};
	}
	modalHeight();
	$(window).resize(modalHeight)



	$('.nav a[href^="#"]').click(function() {
		var el = $(this).attr('href');
		$('html,body').stop().animate({
			scrollTop: $(el).offset().top
		}, 1000);
		return false;
	});

	$('#tabs li').on('click', function(e) {
		e.preventDefault();
		var li = $(this).closest('li'), //в переменную помещаем родителей выбранных ссылок
			content_D = $('#contentTab div'), // в переменную помещаем контент табов
			liNumber = li.data('class'); //в переменную помещаем значение атрибута с постфиксом class
		content_D.filter('.a' + liNumber) //добавляем к имени класса значение атрибута data с постфиксом class
			.add(li)
			.addClass('active')
			.siblings()
			.removeClass('active');
	});


	$('#service .images').on('click', function() {
		var a = $(this).index();
		$('#serviceHoverClose').css('z-index', '999999999');
		console.log(a);
		$('.serviceHover').eq(a - 1).css({
			'opacity': '1',
			'z-index': '1111111111111'
		});
	});

	$('#serviceHoverClose').on('click', function() {
		$(this).css('z-index', '-1');
		$('.serviceHover').removeAttr('style');
	});



	var formaModal = $('#formaModal');
	formaModal.after('<div id="closemodal"></div>');
	var closemodal = $('#closemodal');
	formaModal.css({
		'left': ($(window).width() - formaModal.width()) / 2
	});
	closemodal.fadeOut();

	$('label.button').on('click', function() {
		formaModal.animate({
			'top': '70px'
		}, 500);
		closemodal.fadeIn();

	});

	closemodal.on('click', function() {
		formaModal.animate({
			'top': '-150%'
		}, 300);
		$(this).fadeOut();
		$(formaModal).trigger("reset");
		$('.show-form-text').hide();
		formBtn.show();
	});


	var accordeon = $('#accordeon'),
		accordeonItem = $('#accordeon .item'),
		itemImg = $('#accordeon .item img'),
		itemImgWidth = itemImg.width() * 0.75, // 70%
		widthItem = 100 / accordeonItem.length,
		widthItemHover = (accordeon.innerWidth() / 100) * (itemImgWidth / 100),
		widthItemSiblings = (100 - widthItemHover) / (accordeonItem.length - 1);
	accordeonItem.css('width', widthItem + '%');
	accordeonItem.hover(function() {
		$(this).css('width', widthItemHover + '%');
		$(this).siblings().css('width', widthItemSiblings + '%');
	}, function() {
		$(this).css('width', widthItem + '%');
		$(this).siblings().css('width', widthItem + '%');
	});




	var owl = $(".owl-carouselJS"),
		owlvideo = $("#owl-video");
	owl.owlCarousel({
		itemsCustom: [
			[0, 1],
			[450, 1],
			[600, 1],
			[700, 1],
			[1000, 2],
			[1200, 2],
			[1400, 2],
			[1600, 2]
		],
		navigationText: ['<div class="arrow arrowLeft"></div>', '<div class="arrow arrowRight"></div>'],
		navigation: true
	});
	// owl2 = $("#owl-demo2"),
	// owl3 = $("#owl-demo3"),
	// owlClient = $("#owl-demoClient"),
	// owl4 = $("#owl-demo4"),

	// owlClient.owlCarousel({
	//   itemsCustom : [
	//     [0, 1],
	//     [450, 1],
	//     [600, 1],
	//     [700, 1],
	//     [1000, 2],
	//     [1200, 2],
	//     [1400, 2],
	//     [1600, 2]
	//   ],
	//   navigationText: ['<div class="arrow arrowLeft"></div>', '<div class="arrow arrowRight"></div>'],
	//   navigation : true
	// });
	// owl2.owlCarousel({
	//   itemsCustom : [
	//     [0, 1],
	//     [450, 1],
	//     [600, 1],
	//     [700, 1],
	//     [1000, 2],
	//     [1200, 2],
	//     [1400, 2],
	//     [1600, 2]
	//   ],
	//   navigationText: ['<div class="arrow arrowLeft"></div>', '<div class="arrow arrowRight"></div>'],
	//   navigation : true
	// });
	// owl3.owlCarousel({
	//   itemsCustom : [
	//     [0, 1],
	//     [450, 1],
	//     [600, 1],
	//     [700, 1],
	//     [1000, 2],
	//     [1200, 2],
	//     [1400, 2],
	//     [1600, 2]
	//   ],
	//   navigationText: ['<div class="arrow arrowLeft"></div>', '<div class="arrow arrowRight"></div>'],
	//   navigation : true
	// });
	// owl4.owlCarousel({
	//   itemsCustom : [
	//     [0, 1],
	//     [450, 1],
	//     [600, 1],
	//     [700, 1],
	//     [1000, 2],
	//     [1200, 2],
	//     [1400, 2],
	//     [1600, 2]
	//   ],
	//   navigationText: ['<div class="arrow arrowLeft"></div>', '<div class="arrow arrowRight"></div>'],
	//   navigation : true
	// });
	owlvideo.owlCarousel({
		itemsCustom: [
			[0, 1],
			[450, 1],
			[600, 1],
			[700, 1],
			[1000, 1],
			[1200, 1],
			[1400, 1],
			[1600, 1]
		],
		navigationText: ['<div class="arrow arrowLeft"></div>', '<div class="arrow arrowRight"></div>'],
		navigation: true
	});






});
