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
			700, "linear");
	});