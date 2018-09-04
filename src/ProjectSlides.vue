<template>
	<div class="w-section">
		<div class="work-wrap">
			<div class="w-name-wrap">
				 <router-link :to="{name: projectLink}" class="w-name">
				 	<span class="letters">{{ title }}</span>
				 </router-link>
			</div>
			<div class="w-data-wrap">
				<div class="w-type">{{ type }}</div>
				<div class="w-year">{{ date }}</div>
			</div>
			<div class="w-img-wrap">
				<div class="w-img" v-bind:style="{ 'backgroundImage': 'url(' + projectImg + ')' }">
					<!-- <div class="overlay"></div> -->
				</div>
			</div>
			<div class="w-line-wrap">
				<div class="w-line-overflow">
					<div class="w-line"></div>
				</div>
				<div class="w-nb-wrap">
					<div class="w-nb-transform">
						<div class="w-nb"></div>
						<div class="w-viewcase">View Case</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

const slides = require('./slides.json').slides

	export default {
		props: [
			'title',
			'type',
			'date',
			'projectImg',
			'projectLink'
	 	],
	 	data() {
	 		return {

	 		}
	 	},
	 	mounted: function () {
		  	this.$nextTick(function () {

		  			// Effect when hover on project's names
			  		$(".w-name").hover(function() {
					  	$(".w-nb-transform").css("transform", "translateY(-21px)");
					  	$(".w-line").css("transform", "translateY(-20%)");
					  	$(".w-img").css("transform", "scale(1.1)");
					}, function(){
						$(".w-nb-transform").css("transform", "translateY(0)");
						$(".w-line").css("transform", "translateY(0)");
						$(".w-img").css("transform", "scale(1)");
					});

			  		// Wrap letters in a span
					$('.letters').each(function(){
						$(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='w-single-letter'><span class='w-letter'>$&</span></span>"));
					});

		  			// Add a specific class for each project
		  			$(".w-section").each(function(i){
				    	var idS = i + 1;
				    	$(this).addClass("work0" + idS);
					});

		  		   	// Count sections number
		  		   	var sectionL = $('.w-section').length;

					// Calculate percentage for progress bar
					var projectPercent = 100 / sectionL;
		    		$(".w-progress-line").css("width", projectPercent + "%");

					var cPrev = 0;
					var cNext = 0;
					var nbProject;

					// Go to previous slide
					function prevSlide() {
						cPrev += 1;
						cNext -= 1;

						if(cPrev >= 0){
							$("#w-section-wrapper").css("transform", "translateX(0)");
							cPrev = 0;
							cNext = 0;
						}
						else{
							$("#w-section-wrapper").css("transform", "translateX(" + 100 * cPrev + "vw)");
						}

						nbProject = cNext + 1;

						// Change project number in the slide indicator
						$(".w-current-wrap").css("transform","translateY(calc(21px * " + (-cNext) + "))");

						// Change the progress bar
						$(".w-progress-line").css("width", projectPercent * nbProject + "%");
					}

					// Go to next slide
					function nextSlide() {
						cPrev -= 1;
						cNext += 1;
						
						//console.log("next : " + cNext);

						if(cNext >= sectionL){
							cNext = 2;
							cPrev = -2;
						}
						else{
							$("#w-section-wrapper").css("transform", "translateX(-" + 100 * cNext + "vw)");
						}

						nbProject = cNext + 1;

						// Change project number in the slide indicator
						$(".w-current-wrap").css("transform","translateY(calc(-21px * " + cNext + "))");
						
						// Change the progress bar
						$(".w-progress-line").css("width", projectPercent * nbProject + "%");
					}

					var dragDist, startPoint;

					// Start dragging
					function dragStart(e) {
						e.preventDefault();
						if (e.type == 'touchstart') {
							$(document).off('mousedown', dragStart);
							startPoint = e.originalEvent.touches[0].pageX;
						} else {
							startPoint = e.pageX;
						}
						dragDist = 0;
						$(document).on('touchmove mousemove', dragMove);
					}

					// When dragging
					function dragMove(e) {
						if (e.type == 'touchmove') {
							var movePoint = e.originalEvent.touches[0].pageX;
						} else {
							var movePoint = e.pageX;
						}
						dragDist = (movePoint - startPoint) / $("body").width() * 100;

						// Add class when dragging
						$('#w-section-wrapper').addClass('dragging');

						// Skew effect when dragging
						//$(".w-img-wrap").css("transform", "skewX(" + dragDist * 3 + "deg)");

						if (dragDist < 0) { // Drag right (next slide)
							// Move project while dragging
							$("#w-section-wrapper").css("transform", "translateX(" + dragDist * 2 + "%)");

							// Move right arrow of the cursor
							$(".fa-caret-right").addClass("dragLeft");
						}

						if (dragDist > 0) { // Drag left (previous slide)
							// Move project while dragging
							$("#w-section-wrapper").css("transform", "translateX(" + dragDist / 2 + "%)");

							// Move left arrow of the cursor
							$(".fa-caret-left").addClass("dragRight");
						}

						// Effects while dragging
						$(".custom-mouse").addClass("clicked");
					    $(".w-img").css("transform", "scale(0.8)");
					   	$(".w-img").css("height", "90%");
					 	$(".w-line").css("transform", "translateY(-110%)");
					 	$(".w-nb-wrap").css("transform", "translateY(100%)");
					  	$(".w-type").css("transform", "translateX(-100%)");
					  	$(".w-year").css("transform", "translateX(100%)");
					  	$(".w-letter").css("transform","translateX(100%)");
					  	$(".fa-caret-left, .fa-caret-right").addClass("showArrow");
					}

					// When stop dragging
					function dragEnd() {
						$(document).off('touchmove mousemove', dragMove);

						// Remove skew effect
						//$(".w-img-wrap").css("transform", "skewX(0deg)");

						// Remove effect on arrows
						$(".fa-caret-right").removeClass("dragLeft");
						$(".fa-caret-left").removeClass("dragRight");

						if (dragDist > 0) {
							prevSlide();
						}

						if (dragDist < 0) {
							nextSlide();
						}

						setTimeout(function() {
							$('.slider').removeClass('dragging');
							$(".w-img").css("transform", "scale(1)");
						  	$(".w-img").css("height", "100%");
						  	$(".w-line").css("transform", "translateY(0)");
				  			$(".w-nb-wrap").css("transform", "translateY(0)");
				  			$(".w-type").css("transform", "translateX(0)");
			 				$(".w-year").css("transform", "translateX(0)");
			 				$(".w-letter").css("transform","translateX(0)");
						}, 1600);
					}

				$(document).on('touchstart mousedown', dragStart);
				$(document).on('touchend mouseup', dragEnd);
		  	})
		}
	}
</script>
<style lang="scss">
	/********** MAIN BODY **********/
#works{
	height:100vh;
	#my-w{
		position: absolute;
	    top: 0;
	    left: 0;
	    right: 0;
	    bottom: 0;
		#w-section-wrapper{
			position: absolute;
		    top: 32.5vh;
		    height: 35vh;
		    display:flex;
		    flex-direction:row;
		    justify-content:space-between;
		    transition:1s ease;
		    .w-section{
		    	position:relative;
		    	width:100vw;
		    	height:100%;
		    	.work-wrap{
		    		position: relative;
				    width: 50vw;
				    height: 100%;
				    margin: auto;
				    display:flex;
				    flex-direction:column;
				    justify-content:center;
				    .w-name-wrap{
				    	position: absolute;
					    z-index: 3;
					    top: 4vh;
					    left: -8vh;
					    overflow:hidden;
					    .w-name{
					    	font-size:11em;
					    	font-family:"Gilroy-ExtraBold";
					    	transition:0.2s ease;
					    	.letters{
								.w-single-letter{
									display: inline-block;
									overflow: hidden;
			    					.w-letter{
			    						display: inline-block;
			    						transition-delay:1.5s;
										transition:0.75s ease;
										transform:translateX(-100%);
			    					}
								}
							}
					    }
				    }
				    .w-data-wrap{
				    	position: absolute;
					    top: 8px;
    					right: 0;
    					transform: translateX(100%) rotate(90deg);
					    display: block;
					    overflow:hidden;
					    .w-type{
					    	transition-delay:1.5s;
					    	transition:0.5s ease;
					    	font-family:"Brandon-Regular";
					    	font-size:30px;
					    	transform:translateX(-100%);
					    }
					    .w-year{
					    	transition-delay:1.5s;
					    	transition:0.5s ease;
					    	font-family:"Brandon-Regular";
					    	font-size:25px;
					    	transform:translateX(100%);
					    }
				    }
				    .w-img-wrap{
				    	width: auto;
					    height: 100%;
					    overflow: hidden;
					    transition:transform 1s;
					    .w-img{
					    	position:relative;
					    	width:0;
					    	height:100%;
					    	animation: showWork 1s;
					    	animation-delay:1.5s;
					    	animation-play-state: paused;
					    	animation-fill-mode: forwards;
					    	animation-timing-function: cubic-bezier(0.9, 0.01, 0.27, 1), ease;
					    	background-position:center;
					    	background-size:cover;
					    	background-repeat:no-repeat;
					    	transition:0.5s ease;
					    	.overlay{
					    		position:absolute;
					    		top:0;
					    		left:0;
					    		right:0;
					    		bottom:0;
					    		background-color:black;
					    		opacity:0.1;
					    	}
					    }
				    }
				    .w-line-wrap{
				    	position: absolute;
				    	right: 0;
    					transform: translate3d(50%, 110%, 0);
					    bottom: 0px;
					    height: 10vh;
					    display: flex;
					    flex-direction: column;
					    justify-content: space-between;
					    align-items: center;
					    overflow:hidden;
					    .w-line-overflow{
					    	display: block;
						    width: fit-content;
						    height: 70%;
					    	.w-line{
						    	display:block;
						    	width:1px;
						    	height:100%;
						    	background-color:black;
						    	transition-delay:1.5s;
						    	transition:0.5s ease;
						    	transform:translateY(-110%);
						    }
					    }
					    .w-nb-wrap{
					    	height:17px;
					    	overflow:hidden;
					    	transition-delay:1.5s;
					    	transition:0.5s ease;
					    	transform:translateY(100%);
					    	.w-nb-transform{
					    		transition-delay:1.5s;
					    		transition:0.5s ease;
					    		.w-nb{
						    		text-align:center;
						    		font-family:"Butler-Bold";
						    	}
						    	.w-viewcase{
						    		text-align:center;
						    		text-transform:uppercase;
						    		font-family:"Brandon-Regular";
						    		font-size:14px;
						    	}
					    	}
					    }
				    }
		    	}
		    }
		}
	}
}
/********************/
</style>