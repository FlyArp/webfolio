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

	// console.log($('#about').find('.about__text p'))
	// Lang Switch
	$('.lang-switch__current').on('click', function(event) {
		$('.lang-switch__choice').toggleClass('active');
	});
	$('[data-lang]').on('click', function() {

		if ($(this).attr('data-lang') === 'ru'){

			if ($('html').attr('lang') === 'en') {

				$('html').attr('lang', 'ru');
				$('.intro__title').html('Привет, Я Арсений Панов');
				$('.intro__subtitle').html('Я пишу HTML и CSS код, чтобы создавать удобные и эффективные сайты.');
				let about = $('#about');
				about.find('.section__title').html('Обо мне');
				$(about.find('.about__text p')).each(function(index, val) {
					if (index === 0) {
						$(val).html('Целеустремленный, ответственный и исполнительный. За плечами высшее техническое образование по специальности программист. Имея аналитический склад ума и логическое мышление - в процессе верстки продумываю каждую деталь и подготавливаю удобный и чистый код для программистов.');
					} else if (index === 1) {
						$(val).html('<b>Род занятий:</b> <br>— Верстка кроссбраузерная, валидная, адаптивная и отзывчивая (responsive/резиновая)<b>;</b> <br>— СSS3/JS анимация сайтов<b>;</b> <br>— Верстаю из любых исходников (PSD, Sketch, Figma, Zeplin, Avocode, Adobe XD).');
					} else if (index === 2) {
						$(val).html('<b>Технологии:</b> — HTML (HTML5), CSS (CSS3), JavaScript, Jquery, SASS/SCSS, Flexbox, Gulp, БЭМ');
					}
				});
				let services = $('#services');
				services.find('.section__title').html('Услуги');
				$('.services__title').each(function(index, val) {
					if (index === 0) {
						$(val).html('Верстка');
					} else if (index === 1) {
						$(val).html('CSS3/JS анимация');
					} else if (index === 2) {
						$(val).html('Доработка существующей верстки');
					}
				});
				$('.services__text').each(function(index, val) {
					if (index === 0) {
						$(val).html('Сделаю сайт любой сложности для всех устройств и браузеров. Код будет чистым, валидным, адаптивным и отзывчивым(responsive/резиновым).');
					} else if (index === 1) {
						$(val).html('Всплывающие и выпадающие окна, плавная прокрутка и плавное появление. Это и многое другое я могу сделать с помощью JavaScript и CSS3.');
					} else if (index === 2) {
						$(val).html('Я смогу исправить и доработать существующий HTML-код и добавить к нему новые или отсутствующие компоненты.');
					}
				});
				services.find('.section-footer__title').html('Хотите узнать больше или просто обсудить что-то?');
				services.find('.section-footer__btn').html('Связаться');
			} else {
				return;
			}
			
		} else {
			if ($('html').attr('lang') === 'ru') {

				$('html').attr('lang', 'en');
				$('.intro__title').html('Hello, I\'m Arsenii Panov');
				$('.intro__subtitle').html('I write HTML and CSS to create user-friendly and efficient websites.');
				$('#about').find('.section__title').html('About me');
				let about = $('#about');
				about.find('.section__title').html('About me');
				$(about.find('.about__text p')).each(function(index, val) {
					if (index === 0) {
						$(val).html('Purposeful, responsible and executive. I have a higher technical education in the specialty of a programmer. Having an analytical mindset and logical thinking - in the process of layout I think over every detail and prepare convenient and clean code for programmers.');
					} else if (index === 1) {
						$(val).html('<b>Occupation:</b><br>— Cross-browser, valid, adaptive and responsive HTML code<b>;</b><br>— CSS3/JS site animation<b>;</b><br>— Layout from any source (PSD, Sketch, Figma, Zeplin, Avocode, Adobe XD).');
					} else if (index === 2) {
						$(val).html('<b>Technologies:</b> — HTML(HTML5), CSS(CSS3), JavaScript, Jquery, SASS/SCSS, Flexbox, Gulp, BEM');
					}
				});
				let services = $('#services');
				services.find('.section__title').html('Services');
				$('.services__title').each(function(index, val) {
					if (index === 0) {
						$(val).html('HTML coding');
					} else if (index === 1) {
						$(val).html('CSS3/JS animation');
					} else if (index === 2) {
						$(val).html('Correction of the existing code');
					}
				});
				$('.services__text').each(function(index, val) {
					if (index === 0) {
						$(val).html('I will make a website of any complexity. For all devices and browsers. The code will be clean, valid, adaptive and responsive.');
					} else if (index === 1) {
						$(val).html('Pop-up and drop-down windows, smooth scrolling and smooth appearance. This and much more I can do with JavaScript and CSS3.');
					} else if (index === 2) {
						$(val).html('I will be able to fix and modify the existing html code and add new or missing components to it.');
					}
				});
				services.find('.section-footer__title').html('Would you like to know more or just discuss something?');
				services.find('.section-footer__btn').html('Contact me');
			} else {
				return;
			}
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