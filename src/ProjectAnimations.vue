<template>

</template>

<script>
	export default {
	 	data() {
	 		return {
	 		}
	 	},
	 	mounted: function () {
		  	this.$nextTick(function () {

		  		// Is loaded
		  		console.log("ProjectAnimations loaded");

		  		// Parallax Events For Images Banner
				this.bannerParallax();

				// Show Elements When In View
				this.inViewAnimation();
		  	})
		},
		beforeDestroy: function() {

		},
		methods: {
			bannerParallax(){

				$(window).scroll(function() {
					var $window = $(window);
  					var scroll = $(window).scrollTop();

  					var banner = $(".banner");
  					var template = $(".template");
  					var templateLength = $(".template").length;


  					if(templateLength > 0){
  						var template_top_position = template.offset().top;
  						//console.log("template")
  					} else{
  						console.log("no template")
  					}

  					var banner_top_position = banner.offset().top;
  					

  					var window_height = $window.height();
  					var window_width = $window.width();
				  	var window_top_position = $window.scrollTop();
				  	var window_bottom_position = (window_top_position + window_height);
				  	var window_middle_position = (window_top_position + (window_height / 4));

				  	var parallaxTemplate = (template_top_position - window_middle_position) / 15;

				  	var parallaxLargeScreen = (banner_top_position - window_bottom_position) / 7.5;
				  	var parallaxMediumScreen = (banner_top_position - window_bottom_position) / 20;
  					
  					if(window_width <= 1000){
  						$(".banner > img").css("transform","translateY(0px)")
  						//console.log("noParallax")
  					}
  					else if(window_width <= 1750){
  						$(".banner > img").css("transform","translateY(" + parallaxMediumScreen + "px)");
  						$(".template").css("transform","translateY(" + parallaxTemplate + "px)");
  						//console.log("parallaxMediumScreen")
  					}
  					else{
  						// Add parallax effects here
  						$(".template").css("transform","translateY(" + parallaxTemplate + "px)");
  						$(".banner > img").css("transform","translateY(" + parallaxLargeScreen + "px)");
  						//console.log("parallaxLargeScreen")
  					}

				});

			},
			inViewAnimation(){

				var $animation_elements = $('.title, .p, .p-img-right, .color-square, .typo-example, .banner, .gallery, .half-block, .template-wrap');
				var $window = $(window);

				$window.on('scroll resize', check_if_in_view);
				$window.trigger('scroll');

				function check_if_in_view() {
				  var window_height = $window.height();
				  var window_top_position = $window.scrollTop();
				  var window_bottom_position = (window_top_position + window_height);

				  	$.each($animation_elements, function() {
				    	var $element = $(this);
				    	var element_height = $element.outerHeight();
				    	var element_top_position = $element.offset().top;
				    	var element_bottom_position = (element_top_position + element_height);

				    	//check to see if this current container is within viewport
				    	if ((element_bottom_position >= window_top_position) &&
				        	(element_top_position <= window_bottom_position)) {
				  			$element.addClass('visible');
				    	} else {
				    		//$element.removeClass('visible');
				    	}
				  	});
				}

			}
		},
	}
</script>
<style lang="scss">

</style>