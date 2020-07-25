// 100vh fix
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

$(function() {

// Глобальные Переменные==================================================================================================================================================================================================
var headerHeight = $('.header').height(),
wt = $(window).height();

var scrollOffset = $(window).scrollTop() + headerHeight + (wt/2),
aboutOffset = $('#about').offset().top,
servOffset = $('#services').offset().top,
workOffset = $('#work').offset().top,
contactOffset = $('#contact').offset().top;

var contactLink = $('[data-scroll="#contact"]').parent('li'),
workLink = $('[data-scroll="#work"]').parent(),
servLink = $('[data-scroll="#services"]').parent(),
aboutLink = $('[data-scroll="#about"]').parent(),
introLink = $('[data-scroll="#intro"]').parent(),
allLink = $('.menu__item');
// Функции================================================================================================================================================================
	function checkSection() {
		if (scrollOffset >= aboutOffset) {
			if (scrollOffset >= servOffset) {
				if (scrollOffset >= workOffset) {
					if (scrollOffset >= contactOffset) {
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
	checkSection();
	$(window).on('scroll', function(event) {
		scrollOffset = $(window).scrollTop() + headerHeight + (wt/2);
		checkSection();
		console.log(scrollOffset);
		// console.log(contactOffset);
	});

	// Resize browser || rotate device
	window.addEventListener('resize', () => {

  		let vh = window.innerHeight * 0.01;
 		document.documentElement.style.setProperty('--vh', `${vh}px`);
 		headerHeight = $('.header').height();
 		wt = $(window).height();
 		aboutOffset = $('#about').offset().top;
		servOffset = $('#services').offset().top;
		workOffset = $('#work').offset().top;
		contactOffset = $('#contact').offset().top;
	});

	// Disable hover on touch devices
	if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
 		console.log('this is a touch device');
 		$('.menu__item').addClass('touch');
	}

})