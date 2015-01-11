'use strict';

function menuOpen() {
	if ($('header').hasClass('active') === true) {
		$('header').removeClass('active');
	} else {
		$('header').addClass('active');
	}
}

$('.menu-icon, .menu-icon:before, .menu-icon:after').on('click', menuOpen);