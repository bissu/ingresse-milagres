/**
 *
 *  ---------------------------------------------------------------------------
 *
 *  Template   : Hungry - A One-Page HTML Restaurant Template
 *  Author     : Subatomic Themes
 *  Author URI : http://themeforest.net/user/SubatomicThemes
 *  
 *  ---------------------------------------------------------------------------
 *
 *  1.0.2 - Added more parallax sections.
 *        - Vide (Video Background) added.
 *  1.0.1 - Changed all click, resize and scroll events to "on".
 *
 */
jQuery(document).ready(function($){

	"use strict";
	
	/**
	 *  Load vide.js only on desktops.
	 *  NOTE: Mobiles and tablets get the background image instead.
	 *  -----------------------------------------------------------------------
	 */
	var window_width = $(window).width();
	if( window_width > 1024 ) {
		
		$.getScript( custom.template_url + '/js/jquery-vide.min.js' );
		
	}
	
	/**
	 *  Call FitVids. Makes videos responsive.
	 *  -----------------------------------------------------------------------
	 */
	$('article').fitVids();
	
	/**
	 *  The "Back-to-top" Button.
	 *  -----------------------------------------------------------------------
	 */
	$('#btt').on( 'click', function(){
	
		$('body, html').animate( { scrollTop: 0 } , 400 );
	
	});
	
	/**
	 *  Fade out the confirmation message when the form has been submitted.
	 *  -----------------------------------------------------------------------
	 */
	$('.rtb-message').delay( 10000 ).fadeOut( 3000 );
	
	/**
	 *  Setup Parallax Backgrounds.
	 *  -----------------------------------------------------------------------
	 *  $.parallax( xPos, speed, offset );
	 */
	if( window_width > 1024 ) {
				
		if( custom.innerpage_parallax )   { $('#subpage-header').parallax( '50%', 0.3 ); }
		if( custom.testimonial_parallax ) { $('#' + custom.testimonials_slug).parallax( '50%', 0.3 ); }
		if( custom.slogan_01_parallax )   { $('#' + custom.slogan_01_slug).parallax( '50%', 0.3, -400 ); }
		if( custom.slogan_02_parallax )   { $('#' + custom.slogan_02_slug).parallax( '50%', 0.3 ); }
		if( custom.slogan_03_parallax )   { $('#' + custom.slogan_03_slug).parallax( '50%', 0.3 ); }
		if( custom.slogan_04_parallax )   { $('#' + custom.slogan_04_slug).parallax( '50%', 0.3 ); }
		if( custom.blog_parallax )        { $('#' + custom.blog_slug).parallax( '50%', 0.1, -400 ); }
				
	}
	
	/**
	 *  Setup Textillate.
	 *  -----------------------------------------------------------------------
	 *  For a full list of options, please visit the following link:
	 *  http://jschr.github.io/textillate/
	 */
	$('.tlt').textillate({
	
		selector		: '.header-texts',
		loop			: custom.slogan_loop,
		minDisplayTime	: custom.slogan_display_time,
		initialDelay	: 0,
		autoStart		: true,
	
		in : {
		
			effect		: custom.slogan_entrance,
			delayScale	: 1.8,
			delay		: custom.slogan_animation_delay,
			sync		: custom.slogan_sync,
			shuffle		: custom.slogan_shuffle,
			reverse		: false
			
		},

		out : {
		
			effect		: custom.slogan_exit,
			delayScale	: 1.8,
			delay		: custom.slogan_animation_delay,
			sync		: custom.slogan_sync,
			shuffle		: custom.slogan_shuffle,
			reverse		: true
			
		}

	});
	
	/**
	 *  Call Masonry.
	 *  -----------------------------------------------------------------------
	 *  For a full list of options, please visit the following link:
	 *  http://masonry.desandro.com/options.html
	 */
	$('.hungry-gallery').imagesLoaded( function(){
		$('.hungry-gallery').masonry({

			columnWidth		: '.hungry-gallery-item',
			itemSelector	: '.hungry-gallery-item',
			gutter			: 20
	
		});
	});
	
	/**
	 *  Setup Local Scroll.
	 *  -----------------------------------------------------------------------
	 *  For a full list of options, please visit the following links:
	 *  https://github.com/flesler/jquery.localScroll
	 *  https://github.com/flesler/jquery.scrollTo
	 */
	$('.sf-menu').localScroll({
	
		duration	: 1200,
		hash		: true,
		offset		: { top : -20 }
		
	});
	
	/**
	 *  Setup Tooltipster.
	 *  -----------------------------------------------------------------------
	 *  For a full list of options, please visit the following link:
	 *  http://iamceege.github.io/tooltipster/
	 */
	$('.header-social-icon-tooltip').tooltipster({
	
		animation	: 'grow',
		speed		: 400,
		delay		: 0,
		position	: 'bottom'
	
	});
	
	$('.special-tooltip').tooltipster({
	
		animation	: 'grow',
		speed		: 400,
		delay		: 0,
		position	: 'top'
	
	});
	
	$('.team-tooltip').tooltipster({
	
		animation	: 'fade',
		speed		: 400,
		delay		: 0,
		position	: 'top'
	
	});
	
	/**
	 *  Setup WOW.
	 *  -----------------------------------------------------------------------
	 *  For a full list of options, please visit the following link:
	 *  http://mynameismatthieu.com/WOW/docs.html
	 */
	if( custom.show_wow == '1' ) {
	
		if( window_width > 768 ) {
		
			new WOW().init();
			
		}
	
	}
	
	/**
	 *  Setup Colorbox.
	 *  -----------------------------------------------------------------------
	 *  For a full list of options, please visit the following link:
	 *  http://www.jacklmoore.com/colorbox/
	 */
	if( window_width > 767 ) { // Let mobiles load images in natively
	
		$('.lightbox').colorbox({
		
			rel				: 'lightbox',
			transition		: 'fade',
			opacity			: 0.90,
			speed			: 500,
			previous		: '&#xf104;',
			next			: '&#xf105;',
			current			: '{current} / {total}',
			close			: '&#xf00d;',
			slideshow		: false,
			slideshowStart	: '&#xf04b;',
			slideshowStop	: '&#xf04d;',
			slideshowAuto	: false
		
		});
	
		// Lightbox for Gallery items
		$('.lightbox-gallery').colorbox({
		
			rel				: 'lightbox-gallery',
			transition		: 'fade',
			opacity			: 0.90,
			speed			: 500,
			previous		: '&#xf104;',
			next			: '&#xf105;',
			current			: '{current} / {total}',
			close			: '&#xf00d;',
			slideshow		: false,
			slideshowStart	: '&#xf04b;',
			slideshowStop	: '&#xf04d;',
			slideshowAuto	: false
		
		});
		
	}
	
	/**
	 *  Call Superfish.
	 *  -----------------------------------------------------------------------
	 *  For a full list of options, please visit the following link:
	 *  http://users.tpg.com.au/j_birch/plugins/superfish/options/
	 */
	if( window_width > 1024 ) {
	
		$('.sf-menu').superfish({
		
			delay 		: 250,
			animation	: { opacity : "show" },
			speed		: 250,
			cssArrows	: false
		
		});
		
	}
	
	/**
	 *  Sticky Navigation functionality.
	 *  -----------------------------------------------------------------------
	 */
	if( custom.header_size ) {
	
		if( window_width > 1024 ) {
		
			if( $('body, html').scrollTop() > 10 ) {
				$('.site-navbar').addClass('short');
			}
		
		}
	
	}
	
	$(window).on( 'scroll', function(){
	
		var window_width = $(window).width();
		
		if( custom.header_size ) {
		
			if( window_width > 1024 ) {
			
				if( $(this).scrollTop() > 10 ){
					$('.site-navbar').addClass('short');
				} else {
					$('.site-navbar').removeClass('short');
				}
				
			}
			
		}
		
		// The "Back-to-Top" Button
		if( $(this).scrollTop() > 500 ){
			$('#btt').fadeIn( 500 );
		} else {
			$('#btt').fadeOut( 500 );
		}
	
	});
	
	$(window).on( 'resize', function(){
	
		var window_width = $(window).width();
		if( window_width < 1025 ) {
		
			$('.sf-menu').superfish( 'destroy' );
			if( custom.header_size ) {
			
				if( $('.site-navbar').hasClass('short') ) {
					$('.site-navbar').removeClass('short');
				}
				
			}
		
		}
		
		if( window_width > 1007 ) { // Why a few pixels extra?
		
			$('.sf-menu').superfish({
		
				delay 		: 250,
				animation	: { opacity : "show" },
				speed		: 250,
				cssArrows	: false
		
			});	
			
			if( $('body, html').scrollTop() > 10 && ! $('.site-navbar').hasClass('short') ) {
				
				if( custom.header_size ) {
				
					$('.site-navbar').addClass('short');
					
				}
				
			}
		
		}
	
	});

	/**
	 *  Mobile Navigation functionality.
	 *  -----------------------------------------------------------------------
	 */
	$('.mobile-nav').on( 'click', function(e) {
		e.stopPropagation();
		var window_width = $(window).width();
		if( window_width < 1025 ) {
			$('.main-navigation').slideDown( 800 );
		}
	});
	
	$('.mobile-close, .sf-menu li a').on( 'click', function(e) {
		e.stopPropagation();
		var window_width = $(window).width();
		if( window_width < 1025 ) {
			$('.main-navigation').slideUp( 800 );
		}
	});
	
});

/**
 *  Site Preloader.
 *  -----------------------------------------------------------------------
 */
jQuery(window).on( 'load', function(){

	jQuery('#hungry-preloader-container').fadeOut( 'slow' );

});