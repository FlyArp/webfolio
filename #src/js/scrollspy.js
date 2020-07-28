
var contactLink = $('[data-scroll="#contact"]').parent('li'),
	workLink = $('[data-scroll="#work"]').parent(),
	servLink = $('[data-scroll="#services"]').parent(),
	aboutLink = $('[data-scroll="#about"]').parent(),
	introLink = $('[data-scroll="#intro"]').parent(),
	allLink = $('.menu__item');
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