$(function() {



	let navbar = $('.b-navbar');
	let navBtn = $('.b-navbar-toggle');

	navBtn.on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('b-navbar-toggle_active');
		navbar.toggleClass('b-navbar_visible');
	});

	let dropdownMenu = $('.b-user__dropdown');
	let curret = $(".b-user__curret");	
	let userName = $('.b-user__name');
	

	$(document).mouseup(function (e){ 
		if (!dropdownMenu.is(e.target) && dropdownMenu.has(e.target).length === 0 
		&& !curret.is(e.target) && curret.has(e.target).length === 0 
		&& !userName.is(e.target) && userName.has(e.target).length === 0) { 
			dropdownMenu.removeClass('b-user__dropdown_visible'); 
			curret.removeClass('b-user__curret_reversed');
		}
	});

	curret.on('click', dropdownOpen);
	userName.on('click', dropdownOpen);
	function dropdownOpen(e) {
		e.preventDefault(); 
		curret.toggleClass('b-user__curret_reversed');
		dropdownMenu.toggleClass('b-user__dropdown_visible');
	}

	let payment = $('#payment-system');
	
	payment.on('change', function() {
		payment.css({"color" : "#fff", "font-family" : "RobotoCondensedBold"});
	});


	let deskToggle = $('.desk-controls__toggle');
	let deskContent = $('.desk-content__box');

	deskToggle.on('click', function(e) {
		e.preventDefault();
		deskToggle.removeClass('desk-controls__toggle_active');
		$(this).addClass('desk-controls__toggle_active');
		deskContent.removeClass('desk-content__box_visible');
		if ($(this).hasClass('desk-controls__toggle_left')){
			$('.desk-content__box_left').addClass('desk-content__box_visible');
		} else {
			$('.desk-content__box_right').addClass('desk-content__box_visible');
		}
		
	});

	let slider = $('.b-slider').slick({
		slidesToShow: 1,
		prevArrow: $('.slider-arrow_prev'),
		nextArrow: $('.slider-arrow_next'),
	});
	

	

	let accordeonHead = $('.b-accordeon-head');
	let accordeonHeadActiveClass = 'b-accordeon__item_active';

	let accordeonClickToggle = function() {
		accordeonHead.not(this).removeClass(accordeonHeadActiveClass).next().slideUp(200);
		$(this).toggleClass(accordeonHeadActiveClass).next().slideToggle(200);
		slider.slick('refresh');
	};
	accordeonHead.filter(':first').toggleClass(accordeonHeadActiveClass).next().show();
	accordeonHead.on('click', accordeonClickToggle);

	let menuLink = $('.b-menu__link');

	menuLink.on('click', function() {
		menuLink.removeClass('b-menu__link_active');
		$(this).toggleClass('b-menu__link_active');
	});
});
