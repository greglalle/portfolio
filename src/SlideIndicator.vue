<template>
	<div id="w-total-nb">
    	<div class="w-counter">
    		<div class="w-current">
    			<div class="w-current-wrap">
    			</div>
    		</div>
    		<div class="w-total-line">
    			<span class="w-progress-line"></span>
    		</div>
    		<span class="w-total"></span>
    	</div>
    </div>
</template>
<script>
export default {
	data(){
		return {
		}
	},
	mounted: function () {
		this.$nextTick(function () {

			// Count project number and place it
  		   	$(".w-nb").each(function(i){
			    var id = i + 1;
			    $(this).text("0" + id);
			    $( ".w-current-wrap" ).append( '<span class="w-current-nb">0' + id + '</span>' );
			});

  		   	// Count sections number
  		   	var sectionL = $('.w-section').length;

  		   	// Define width of the section-wrapper
			$('#w-section-wrapper').css("width", "100" * sectionL + "vw");

			// Count total numbers of projects
			$('.w-total').text("0" + sectionL);

			// Calculate percentage for progress bar
			var projectPercent = 100 / sectionL;
    		$(".w-progress-line").css("width", projectPercent + "%");

		})
	}
}
</script>
<style lang="scss">
	/********** COUNTER SLIDE **********/
#w-total-nb{
	position: fixed;
    width: 100%;
    bottom: 8vh;
    display:flex;
    justify-content:center;
    .w-counter{
    	width:20%;
    	display:flex;
    	justify-content:space-between;
    	align-items:center;
    	opacity:0;
    	animation: enterCounter 1s;
		animation-delay:1s;
		animation-play-state: paused;
		animation-fill-mode: forwards;
    	.w-current{
    		width:auto;
    		height:21px;
    		overflow:hidden;
    		.w-current-wrap{
    			display: flex;
    			flex-direction: column;
    			transition:0.5s ease;
    			.w-current-nb{
					font-family:"Butler-Bold";
    			}
    		}
    	}
    	.w-total-line{
    		width:40%;
    		height:2px;
    		background-color:#bcbcbc;
    		display:block;
    		.w-progress-line{
    			content:'';
    			display:block;
    			width:0;
    			height:2px;
    			background-color:black;
    			transition:0.5s ease;
    		}
    	}
    	.w-total{
    		font-family:"Butler-Bold";
    	}
    }
}
/********************/
</style>