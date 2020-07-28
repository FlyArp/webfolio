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
// Функции================================================================================================================================================================
	@@include('scrollspy.js');
// Активный код================================================================================================================================================================
	@@include('langswitch.js');
	@@include('smoothscroll.js');
	@@include('langidentifier.js');

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
	
	// Hide lang
	$(document).on('click', function(event) {
		if (!event.target.closest('.lang-switch')) {
			$('.lang-switch__choice').removeClass('active');
		}
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