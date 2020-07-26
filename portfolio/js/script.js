// 100vh fix
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

$(function() {

// Глобальные Переменные==================================================================================================================================================================================================
var headerHeight = $('.header').height();

var scrollOffset = $(window).scrollTop(),
introActiveLevel = $('#intro').offset().top + $('#intro').outerHeight() * 0.5 - headerHeight,
aboutActiveLevel = $('#about').offset().top + $('#about').outerHeight() * 0.5 - headerHeight,
servActiveLevel = $('#services').offset().top + $('#services').outerHeight() * 0.5 - headerHeight,
workActiveLevel = $('#work').offset().top + $('#work').outerHeight() * 0.5 - headerHeight;

var contactLink = $('[data-scroll="#contact"]').parent('li'),
workLink = $('[data-scroll="#work"]').parent(),
servLink = $('[data-scroll="#services"]').parent(),
aboutLink = $('[data-scroll="#about"]').parent(),
introLink = $('[data-scroll="#intro"]').parent(),
allLink = $('.menu__item');
// Функции================================================================================================================================================================
	/*
		Function Scroll Spy
	
		Description:
		introActiveLevel - насколько нужно прокрутить блок, чтобы активным стал следующий.
		0,5 - половина блока; "- headerHeight" - если хедер fixed
	*/
	function scrollSpy () {
		if (scrollOffset >= introActiveLevel) {
			if (scrollOffset >= aboutActiveLevel) {
				if (scrollOffset >= servActiveLevel) {
					if ($(window).scrollTop() == $(document).height() - $(window).height()) {
						if (contactLink.hasClass('active')) {
							return;
						} else {
							allLink.removeClass('active');
							contactLink.addClass('active');
						}
					} else {
						if (scrollOffset >= workActiveLevel) {
							if (contactLink.hasClass('active')) {
								return;
							} else {
								allLink.removeClass('active');
								contactLink.addClass('active');
							}
						} else {
							if (workLink.hasClass('active')) {
								return;
							} else {
								allLink.removeClass('active');
								workLink.addClass('active');
							}
						}
					}
				} else {
					if (servLink.hasClass('active')) {
						return;
					} else {
						allLink.removeClass('active');
						servLink.addClass('active');
					}
				}
			} else {
				if (aboutLink.hasClass('active')) {
					return;
				} else {
					allLink.removeClass('active');
					aboutLink.addClass('active');
				}
			}
		} else {
			if (introLink.hasClass('active')) {
				return;
			} else {
				allLink.removeClass('active');
				introLink.addClass('active');
			}
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
	AOS.init({
	  useClassNames: true,
	  initClassName: false,
	  animatedClassName: 'animated',
	  once: true,
	});

	// Smooth scroll
	$('[data-scroll]').on('click', function(event) {
		event.preventDefault();
		var $this = $(this),
		blockId = $this.data('scroll'),
		blockOffset = $(blockId).offset().top - headerHeight;
		if ($('.burger').css('display')==='block') {
			$('.burger').removeClass('active');
			$('.menu').removeClass('active');
			$('body').removeClass('lock');
		}

		$('.menu li').removeClass('active');
		$this.parent().addClass('active');

		$('html, body').animate({
			scrollTop: blockOffset},
			700, "swing");
	});

	// Check active section
	scrollSpy();
	$(window).on('scroll', function(event) {
		scrollOffset = $(window).scrollTop();
		scrollSpy();
	});

	// Resize browser || rotate device
	window.addEventListener('resize', () => {

  		let vh = window.innerHeight * 0.01;
 		document.documentElement.style.setProperty('--vh', `${vh}px`);
 		headerHeight = $('.header').height();
 		introActiveLevel = $('#intro').offset().top + $('#intro').outerHeight() * 0.5 - $('header').height();
		aboutActiveLevel = $('#about').offset().top + $('#about').outerHeight() * 0.5 - $('header').height();
		servActiveLevel = $('#services').offset().top + $('#services').outerHeight() * 0.5 - $('header').height();
		workActiveLevel = $('#work').offset().top + $('#work').outerHeight() * 0.5 - $('header').height();
	});

	// Disable hover on touch devices
	if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
 		$('.menu__item').addClass('touch');
	}

})