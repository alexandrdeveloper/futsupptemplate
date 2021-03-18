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
	

	$(document).mouseup(function (e){ 
		if (!dropdownMenu.is(e.target) && dropdownMenu.has(e.target).length === 0 
		&& !curret.is(e.target) && curret.has(e.target).length === 0) { 
			dropdownMenu.removeClass('b-user__dropdown_visible'); 
			curret.removeClass('b-user__curret_reversed');
		}
	});

	curret.on('click', function(e) {
		e.preventDefault(); 
		$(this).toggleClass('b-user__curret_reversed');
		dropdownMenu.toggleClass('b-user__dropdown_visible');
	});

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

	
});
