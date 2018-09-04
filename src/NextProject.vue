<template>
	<div class="next-project-container">
		<div class="next-project-wrap">
			<div class="next-project">
				<p>Next Project</p>
			</div>
			<div class="next-project-name">
				<router-link :to="{name: nextProjectLink[projectId]}">{{ nextProjectTitle[projectId] }}</router-link>
			</div>
		</div>
	</div>
</template>
<script>

//const slides = require('./slides.json').slides

export default {
	props: [ 'projectId' ],
	data(){
		return {
			nextProjectTitle: ['Cesu 21', 'Air Max 97'],
			nextProjectLink: ['a', 'b'],
		}
	},
	mounted: function () {
		this.$nextTick(function () {

			//Animate on scroll
			//Cache reference to window and animation items
			var $animation_elements = $('.next-project-name > a, .next-project > p');
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
		})
	},
	destroyed: function(){
		
	}
}
</script>