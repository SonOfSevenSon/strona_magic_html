document.addEventListener('DOMContentLoaded', function () {
	// dodaje cień do nawigacji
	const nav = document.querySelector('.navbar');
	const btn = document.querySelector('.navbar-toggler');

	function addShadow() {
		if (window.scrollY >= 120) {
			nav.classList.add('shadow-bg');
		} else if (btn.classList.contains('collapsed')) {
			nav.classList.remove('shadow-bg');
		}
	}

	function addShadowClick() {
		if (window.scrollY < 120) nav.classList.add('shadow-bg');
	}

	window.addEventListener('scroll', addShadow);
	btn.addEventListener('click', addShadowClick);

	// skrypt zamykajacy nawikacje menu w cokolwiek się kliknie
	$(document).click(function (event) {
		var clickover = $(event.target);
		var _opened = $('.navbar-collapse').hasClass('show');
		if (_opened === true && !clickover.hasClass('navbar-toggler')) {
			$('.navbar-toggler').click();
		}
		if (btn.classList.contains('collapsed') && window.scrollY < 120) {
			nav.classList.remove('shadow-bg');
		}
	});

	// slickJS
	$('.team-carousel').slick({
		autoplay: true,
		autoplaySpeed: 3500,
		mobileFirst: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 4,
				},
			},
		],
	});
});
