$(document).ready(function($) {
	$(".can-animate").on('change', '.nd-switch input', function(event) {
		event.preventDefault();
		if ($(this).is(":checked")) {
			$(this).closest(".can-animate").removeClass('active unactive').addClass('anim-active').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(event) {
				$(this).addClass('active');
				$(this).removeClass('anim-active');
			});;
		}
		else {
			$(this).closest(".can-animate").removeClass('active unactive').addClass('anim-unactive').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(event) {
				$(this).addClass('unactive');
				$(this).removeClass('anim-unactive');
			});;
		}
	});
	$("body").on('click', '.js-toggleactive', function(event) {
		event.preventDefault();
		$(this).toggleClass('active');
	});
});