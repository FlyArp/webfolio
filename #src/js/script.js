$(function() {

// Глобальные Переменные===================================================================================================================================================================================================
	var scrollOffset = $(window).scrollTop() + $(window).height(),
	animateBlocks = [$('#about'),$('#services'),$('#work'),$('#contact')],
	numAnimblocks = 0;

// Функции================================================================================================================================================================
	// Animation appearance
	function animation(blockId) {
		if (blockId.attr('data-anim-ready') === 'true') {
			return;
		}
		console.log(blockId);
		let animElem = $('[data-animation]'),
		count = 0,
		length = blockId.find(animElem).length;

		$.each(blockId.find(animElem), function(index, value) {
			// console.log(value.className);
			let h1 = $(value).offset().top;
			if (scrollOffset - h1 >= 50) {
				$(value).addClass('appearance-anim-' + $(value).attr('data-animation'))
				count = count + 1;
				// console.log(value.className + "Анимировано");
			}
		});
		if (length === count) {
			blockId.attr('data-anim-ready', 'true');
		}
	}
// Активный код================================================================================================================================================================
	// Burger menu
	$('.header__burger').click(function() {
		$(this).toggleClass('active');
		$('.menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
	// Animation
	animation($('#about'));
	animation($('#services'));
	animation($('#work'));
	animation($('#contact'));
	// Пройтись по каждому блоку

	$(window).on('scroll', function(event) {
		scrollOffset = $(window).scrollTop() + $(window).height();
		animation(animateBlocks[numAnimblocks]);
		if (scrollOffset - animateBlocks[numAnimblocks].offset().top >= animateBlocks[numAnimblocks].height()) {
			if((numAnimblocks + 1) < animateBlocks.length){
				numAnimblocks = numAnimblocks + 1;
			} 
		}
	});
})