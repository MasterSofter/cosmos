;(function($){
	"use strict";
	var smoothscrollto = function(target){
		var $target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top
		}, 1000, 'swing');
	};
	$(document).ready(function() {
			$('.smoothscrollto').on('click', function(e) {
					var target  = this.hash;
					smoothscrollto(target);
		e.preventDefault();
			});

	if ($('font.errortext').length > 0){
		smoothscrollto('#section-applyForm');
	}
	if (location.search.match(/formresult=addok/)){
		$('#mai-form-title').remove();
		$('#mai-form').wrapInner( "<h3 class='text-center'></h3>");
		smoothscrollto('#section-applyForm');
	}
	});
})(jQuery);
$('.inputselect').parent().addClass('inputselect__group')
