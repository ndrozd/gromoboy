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
	$(".nd-message").on('click', '.close', function(event) {
		event.preventDefault();
		$(this).parents('.nd-message').remove();
	});
	$("body").on('click', '.nd-cleaned-post, .nd-listimages-one', function(event) {
		event.preventDefault();
		$("body").addClass('popups-active');
		$(".popup-photo").addClass('active');
		ellipsisUpdate();
	});
	$("body").on('click', '.popups-fade', function(event) {
		event.preventDefault();
		$("body").removeClass('popups-active');
		$(".popup-photo").removeClass('active');
		// ellipsisUpdate();
		
	});
	$("body").on('click', '.drop-trigger .round, .drop-fade', function(event) {
		event.preventDefault();
		$(this).parents(".drop-menu").toggleClass('active');
	});
	$(".nd-tabs").on('click', '.nd-tabs-control-one', function(event) {
		event.preventDefault();
		var tab  = $(this).data('tab');
		var $ndtabs = $(this).closest('.nd-tabs');
		$(this).addClass('active').siblings().removeClass('active');
		$ndtabs.find(".magictime").removeClass('vanishIn').removeClass('vanishOut');
		$ndtabs.children(".magictime").addClass('vanishOut');

        setTimeout(function() {
            $ndtabs.find("div[data-tab="+tab+"]").addClass('active').siblings().removeClass('active');
			$ndtabs.children(".magictime").removeClass("vanishOut").addClass('vanishIn');
			ellipsisUpdate();
        }, 300);
   //      setTimeout(function() {
			// $ndtabs.children(".magictime").removeClass("vanishOut").removeClass('vanishIn');
			// ellipsisUpdate();
   //      }, 600);
        
	});
	$(".nd-cleaned").on('click', '.js-details', function(event) {
		event.preventDefault();
		$(this).toggleClass('active');
		if ($(this).hasClass('active')) {
			$(this).find('.text').trigger("destroy");
			$(this).next().show();
		}
		else {
			$(this).find('.text').dotdotdot();
			$(this).next().hide();
		}
	});
	$("aside").on('click', '.ic-delete', function(event) {
		event.preventDefault();
		var that = this;
		$(that).parent().addClass('magictime vanishOut');
		setTimeout(function() {
           $(that).parent().remove();
        }, 300);
	});
	$(window).on('resize', function(event) {
		ellipsisUpdate()
	});
	ellipsisUpdate()
	// $(".drop-menu").hover(function() {
	// 	$(this).addClass('active');
	// }, function() {
	// 	var that = this;
		
	// 	setTimeout(function() {
 //           $(that).removeClass('active');
 //        }, 300);
	// });

});

function ellipsisUpdate() {
	$(".nd-cleaned-one .text").dotdotdot();
}
