(function($){
	
	$.fn.toggleNav = function(wrapper) {		
		$(wrapper).find('.toggle-menu').click(function() {
			$(wrapper).find('nav ul').slideToggle('fast');
			$(wrapper).find('.toggle-menu').toggleClass('active');
		});
		
		$(window).resize(function(){
		    if ($(window).width() > 768 ) {
		      $(wrapper).find('nav ul').removeAttr("style")
		    }
		});
	};
})(jQuery);