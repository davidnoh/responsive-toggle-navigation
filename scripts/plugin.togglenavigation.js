




(function ( $ ) {

	$.fn.toggleNav = function( options ) {

		var settings = $.extend({
			"wrapper": ".toggleNavWrapper",
			"navToggle": ".toggleMenu, h3",
			"navToggleActiveClass": "active",
			"navList": "nav > ul",
			"animationSpeed": "slow",
			"childClass": "hasChild",
			"childToggleClass": "toggleSub",
			"childToggleTitle": "toggle",
			"childToggleClassActive": "open",
			"breakpoint": "768"
		}, options );

		$(settings.navToggle).click(function() {
			$(settings.wrapper).find(settings.navList).slideToggle(settings.animationSpeed);
			$(settings.wrapper).find(settings.navToggle).toggleClass(settings.navToggleActiveClass);
		});
	
		$(settings.wrapper).find('li').has('ul').addClass(settings.childClass).prepend('<a href="#toggle" class="' + settings.childToggleClass + '">toggle</a>');

		$('.' + settings.childToggleClass).click(function (){
			$(this).toggleClass(settings.childToggleClassActive).find('~ ul').slideToggle();
			return;
		});

		$(window).resize(function(){
			if ($(window).width() > settings.breakpoint ) {
				$(settings.wrapper).find('ul').removeAttr("style");
				$(settings.wrapper).find('a.' + settings.childToggleClassActive).removeClass(settings.childToggleClassActive);
			}
		});
	};
}( jQuery ));