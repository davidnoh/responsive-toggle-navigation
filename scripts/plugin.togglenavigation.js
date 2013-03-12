(function($){
	
	$.fn.toggleNav = function(wrapper) {
		$(wrapper).find('.toggleMenu, h3').click(function() {
			$(wrapper).find('nav > ul').slideToggle('fast');
			$(wrapper).find('.toggleMenu').toggleClass('active');
		});
		
		$('li').has('ul').addClass('hasChild').prepend('<a href="#toggle" class="toggleSub">toggle</a>');
	
		$('.toggleSub').click(function (){
			$(this).find('~ ul').slideToggle();
			return;
		});
				
		
		$(window).resize(function(){
		    if ($(window).width() > 768 ) {
		      $(wrapper).find('nav ul').removeAttr("style")
		    }
		});
	};
})(jQuery);