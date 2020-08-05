// Lang Switch
	function changeToRu () {
		$('html').attr('lang', 'ru');
		let margin = 5;
		if (!($('.header__burger').css('display') === ('none'))) {
			margin = 0;	
		} 
		$('.menu__link').each(function(index, val) {
			if (index === 0) {
				$(val).html('Главная');
				$(val).parent().css({'margin-right': margin+'px'});
			} else if (index === 1) {
				$(val).html('Обо мне');
				$(val).parent().css({'margin-right': margin+'px'});
			} else if (index === 2) {
				$(val).html('Услуги');
				$(val).parent().css({'margin-right': margin+'px'});
			} else if (index === 3) {
				$(val).html('Портфолио');
				$(val).parent().css({'margin-right': margin+'px'});
			} else if (index === 4) {
				$(val).html('Контакты');
			}
		});
		$('.lang-switch__current').html('Русский');
		$('.intro__title').html('Привет, Я Арсений Панов');
		$('.intro__subtitle').html('Я пишу HTML и CSS код, чтобы создавать удобные и эффективные сайты.');
		let about = $('#about');
		about.find('.section__title').html('Обо мне');
		$(about.find('.text-about__item')).each(function(index, val) {
			if (index === 0) {
				$(val).html('Целеустремленный, ответственный и исполнительный. За плечами высшее техническое образование по специальности программист. Имея аналитический склад ума и логическое мышление - в процессе верстки продумываю каждую деталь и подготавливаю удобный и чистый код для программистов.');
			} else if (index === 1) {
				$(val).html('<b>Преимущества:</b>');
			} else if (index === 2) {
				$(val).html('<li>Приступаю к работе сразу</li> <li>Всегда довожу работу до конца и не срываю сроки</li> <li>Постоянно на связи</li> <li>Не беру предоплату</li>')
			} else if (index === 3) {
				$(val).html('<b>Технологии:</b> HTML (HTML5), CSS (CSS3), JavaScript, Jquery, SASS/SCSS, Flexbox, Gulp, БЭМ');
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
				$(val).html('Доработка верстки');
			}
		});
		$('.services__text').each(function(index, val) {
			if (index === 0) {
				$(val).html('Сделаю сайт любой сложности для всех устройств и браузеров. Код будет чистым, валидным, адаптивным и отзывчивым(responsive/резиновым).');
			} else if (index === 1) {
				$(val).html('Всплывающие и выпадающие окна, плавная прокрутка и плавное появление. Это и многое другое я могу сделать с помощью JavaScript и CSS3.');
			} else if (index === 2) {
				$(val).html('Я смогу исправить и доработать существующую верстку и добавить к ней новые или отсутствующие компоненты.');
			}
		});
		services.find('.section-footer__title').html('Хотите узнать больше или просто обсудить что-то?');
		services.find('.section-footer__btn').html('Связаться');
		let work = $('#work');
		work.find('.section__title').html('Мои работы');
		$('.work__subtitle').each(function(index, val) {
			if (index === 0) {
				$(val).html('Минималистичный сайт портфолио');
			} else if (index === 1) {
				$(val).html('Сайт для стильного женского интернет магазина');
			} else if (index === 2) {
				$(val).html('Портфолио для frontend разработчика');
			} else if (index === 3) {
				$(val).html('Сайт для новостного агенства в светлых тонах');
			}
		});
		let contact = $('#contact');
		contact.find('.section__title').html('Связаться со мной');
		$('.form__input').each(function(index, val) {
			if (index === 0) {
				$(val).attr('placeholder','Ваше Имя *');
			} else if (index === 1) {
				$(val).attr('placeholder','Ваша Фамилия *');
			} else if (index === 2) {
				$(val).attr('placeholder','Ваш Email *');
			} else if (index === 3) {
				$(val).attr('placeholder','Ваш телефон');
			} else if (index === 4) {
				$(val).attr('placeholder','Комментарий или ссылка на макеты/задание');
			}
		});
		$('.form__submit').attr('value', 'Отправить сообщение');
	}
	function changeToEng () {
		$('html').attr('lang', 'en');
		let margin = 10;
		if (!($('.header__burger').css('display') === ('none'))) {
			margin = 0;	
		} 
		$('.menu__link').each(function(index, val) {
			if (index === 0) {
				$(val).html('Intro');
				$(val).parent().css({'margin-right': margin + 'px'});
			} else if (index === 1) {
				$(val).html('About');
				$(val).parent().css({'margin-right': margin + 'px'});
			} else if (index === 2) {
				$(val).html('Services');
				$(val).parent().css({'margin-right': margin + 'px'});
			} else if (index === 3) {
				$(val).html('My work');
				$(val).parent().css({'margin-right': margin + 'px'});
			} else if (index === 4) {
				$(val).html('Contact');
			}
		});
		$('.lang-switch__current').html('English');
		$('.intro__title').html('Hello, I\'m Arsenii Panov');
		$('.intro__subtitle').html('I write HTML and CSS to create user-friendly and efficient websites.');
		$('#about').find('.section__title').html('About me');
		let about = $('#about');
		about.find('.section__title').html('About me');
		$(about.find('.text-about__item')).each(function(index, val) {
			if (index === 0) {
				$(val).html('Purposeful, responsible and executive. I have a higher technical education in the specialty of a programmer. Having an analytical mindset and logical thinking - in the process of layout I think over every detail and prepare convenient and clean code for programmers.');
			} else if (index === 1) {
				$(val).html('<b>Advantages:</b>');
			} else if (index === 2) {
				$(val).html('<li>Get to work right away</li> <li>Always bring the work to the end and don\'t break the deadlines</li> <li>Constantly in touch</li> <li>Don\'t take prepayment</li>')
			} else if (index === 3) {
				$(val).html('<b>Technologies:</b> HTML(HTML5), CSS(CSS3), JavaScript, Jquery, SASS/SCSS, Flexbox, Gulp, BEM');
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
				$(val).html('Correction code');
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
		let work = $('#work');
		work.find('.section__title').html('My work');
		$('.work__subtitle').each(function(index, val) {
			if (index === 0) {
				$(val).html('Clean and minimal Portfolio site');
			} else if (index === 1) {
				$(val).html('Website for a stylish women\'s online store');
			} else if (index === 2) {
				$(val).html('Portfolio site for frontend developer');
			} else if (index === 3) {
				$(val).html('Website for a news agency in light colors');
			}
		});
		let contact = $('#contact');
		contact.find('.section__title').html('Contact me');
		$('.form__input').each(function(index, val) {
			if (index === 0) {
				$(val).attr('placeholder','Your firstname *');
			} else if (index === 1) {
				$(val).attr('placeholder','Your lastname *');
			} else if (index === 2) {
				$(val).attr('placeholder','Yout email *');
			} else if (index === 3) {
				$(val).attr('placeholder','Your phone');
			} else if (index === 4) {
				$(val).attr('placeholder','Comment or link to layouts/task');
			}
		});
		$('.form__submit').attr('value', 'Send message');
	}

	$('.lang-switch__current').on('click', function(event) {
		$('.lang-switch__choice').toggleClass('active');
	});
	$('[data-lang]').on('click', function() {

		if ($(this).attr('data-lang') === 'ru'){

			if ($('html').attr('lang') === 'en') {
				changeToRu();
			} else {
				return;
			}
		} else {
			if ($('html').attr('lang') === 'ru') {
				changeToEng();
			} else {
				return;
			}
		}		
	});