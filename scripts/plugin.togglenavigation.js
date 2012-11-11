(function($){
	
	$.fn.toggleNav = function(wrapper) {		
		$(wrapper).find('.toggle-menu').click(function() {
			$(wrapper).find('nav ul').slideToggle('fast');
			$(wrapper).find('.toggleNav').toggleClass('active');
		});
		
		$(window).resize(function(){
		    if ($(window).width() > 768 ) {
		      $(wrapper).find('nav').removeAttr("style")
		    }
		});
	};
})(jQuery);