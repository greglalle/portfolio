<template>
	<div class="w-section">
		<div class="work-wrap">
			<div class="w-name-wrap">
				 <router-link :to="{name: projectLink}" class="w-name">
				 	<span class="letters">{{ title }}</span>
				 </router-link>
			</div>
			<div class="w-data-wrap">
				<div class="w-type" ref="slideType">{{ type }}</div>
				<div class="w-year" ref="slideYear">{{ date }}</div>
			</div>
			<div class="w-img-wrap">
				<div class="w-img" ref="slideImg" v-bind:style="{ 'backgroundImage': 'url(' + projectImg + ')' }">
					<!-- <div class="overlay"></div> -->
				</div>
			</div>
			<div class="w-line-wrap">
				<div class="w-line-overflow">
					<div class="w-line" ref="slideLine"></div>
				</div>
				<div class="w-nb-wrap" ref="slideNumber">
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
import {EventBus} from './assets/commons/event-bus.js'
import { TimelineLite,  Power1, TweenMax } from "gsap/TweenMax"
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
	 			cNext: 0,
	 			cPrev: 0,
	 			nbProject: 0,
	 			startPoint: 0,
	 			dragDist: 0,
	 		}
	 	},
	 	mounted: function () {
		  	this.$nextTick(function () {
		  			// Init home slider
		  			this.homeSlider();

		  			// Effect when hover on project's names
			  		$(".w-name").hover(function() {
					  	$(".w-nb-transform").css("transform", "translateY(-21px)");
					  	$(".w-line").css("transform", "translateY(-20%)");
					  	$(".w-img").css("transform", "scale(1.03)");
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

				//$(document).on('touchstart mousedown', this.dragStart);
				//$(document).on('touchend mouseup', this.dragEnd);

				this.appearAnim();
		  	})
		},
		beforeDestroy: function() {
			this.leaveAnim();
		},
		methods: {
			homeSlider(){

				  var sliding = 0;
				  var currentSlide = 0;
				  var pixelOffset = 0;
				  var startPixelOffset = 0;
				  var startClientX = 0;
				  var slideCount = $('.w-section').length;
				  var projectPercent = 100 / slideCount;
				  
				  $('html').on('mousedown touchstart', slideStart);
				  $('html').on('mouseup touchend', slideEnd);
				  $('html').on('mousemove touchmove', slide);

				  /**
				  / Triggers when slide event started
				  */
				  function slideStart(event) {
				  	event.preventDefault();
				    // If it is mobile device redefine event to first touch point
				    if (event.originalEvent.touches)
				      	event = event.originalEvent.touches[0];
				    // If sliding not started yet store current touch position to calculate distance in future.
				    if (sliding == 0) {
				      	sliding = 1; // Status 1 = slide started.
				      	startClientX = event.clientX;
				    }
				  }
				  
				  /** Occurs when image is being slid.
				  */
				  function slide(event) {
				    event.preventDefault();
				    if (event.originalEvent.touches)
				      event = event.originalEvent.touches[0];
				    // Distance of slide.
				    var deltaSlide = event.clientX - startClientX;
				    // If sliding started first time and there was a distance.
				    if (sliding == 1 && deltaSlide != 0) {
				      sliding = 2; // Set status to 'actually moving'
				      startPixelOffset = pixelOffset; // Store current offset
				    }
				    
				    //  When user move image
				    if (sliding == 2) { 

				      	// Means that user slide 1 pixel for every 1 pixel of mouse movement.
				      	var touchPixelRatio = 0.5;

				      	// Move arrows in terms of the slide direction
				      	if(deltaSlide < 0){
				      		$(".fa-caret-right").addClass("dragLeft");
				      	} 
				      	else {
				      		$(".fa-caret-left").addClass("dragRight");
				      	}

				      // Check for user doesn't slide out of boundaries
				      if ((currentSlide == 0 && event.clientX > startClientX) ||
				         (currentSlide == slideCount - 1 && event.clientX < startClientX))
				        // Set ratio to 3 means image will be moving by 3 pixels each time user moves it's pointer by 1 pixel. (Rubber-band effect)
				        touchPixelRatio = 3;

				      	// Calculate move distance.
				      	pixelOffset = startPixelOffset + deltaSlide / touchPixelRatio;

				      	// Apply moving and remove animation class
				      	$('#w-section-wrapper').css('transform', 'translateX(' + pixelOffset + 'px').removeClass();

				      	$(".w-img, .w-line, .w-nb-wrap, .w-type, .w-year, .w-letter").addClass("transition-timing");

						// Effects while dragging
						$(".custom-mouse").addClass("clicked");
						$(".fa-caret-left, .fa-caret-right").addClass("showArrow");
						$(".w-img").css("transform", "scale(0.8)");
					   	$(".w-img").css("height", "90%");
					 	$(".w-line").css("transform", "translateY(-110%)");
					 	$(".w-nb-wrap").css("transform", "translateY(100%)");
					  	$(".w-type").css("transform", "translateX(-100%)");
					  	$(".w-year").css("transform", "translateX(100%)");
					  	$(".w-letter").css("transform","translateX(100%)");
				    }
				  }
				  
				  /** When user release pointer finish slide moving.
				  */
				  function slideEnd(event) {
				  	event.preventDefault();
				    if (sliding == 2){
				      	// Reset sliding.
				      	sliding = 0;
				      	// Calculate which slide need to be in view.
				      	currentSlide = pixelOffset < startPixelOffset ? currentSlide + 1 : currentSlide -1;
				      	// Make sure that unexisting slides weren't selected.
				      	currentSlide = Math.min(Math.max(currentSlide, 0), slideCount - 1);
				      	// Since in this example slide is full viewport width offset can be calculated according to it.
				      	pixelOffset = currentSlide * -$('.w-section').width();
				      	// pixelOffset = currentSlide * -$('body').width();

				      	// Remove style from DOM (look below)
				      	$('#temp').remove();
				      	// Add a translate rule dynamically and asign id to it
				      	$('<style id="temp">#w-section-wrapper.animate{transform:translateX(' + pixelOffset + 'px)}</style>').appendTo('head');
				      	// Add animate class to slider and reset transform prop of this class.
				      	$('#w-section-wrapper').addClass('animate').css('transform', '');

				      	$(".w-img, .w-line, .w-nb-wrap, .w-type, .w-year, .w-letter").addClass("transition-timing");

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

				      	// Remove effect on arrows
						$(".fa-caret-right").removeClass("dragLeft");
						$(".fa-caret-left").removeClass("dragRight");

						// Change project number in the slide indicator
						$(".w-current-wrap").css("transform","translateY(calc(-21px * " + currentSlide + "))");

						// Change the progress bar
						$(".w-progress-line").css("width", projectPercent * (currentSlide + 1) + "%");
				    }
				  }
				  
			},
			prevSlide(){
				var sectionL = $('.w-section').length;
				var projectPercent = 100 / sectionL;

				this.cPrev += 1;
				this.cNext -= 1;

				if(this.cPrev >= 0){
					$("#w-section-wrapper").css("transform", "translateX(0)");
					this.cPrev = 0;
					this.cNext = 0;
				}
				else{
					$("#w-section-wrapper").css("transform", "translateX(" + 100 * this.cPrev + "vw)");
				}

				this.nbProject = this.cNext + 1;

				// Change project number in the slide indicator
				$(".w-current-wrap").css("transform","translateY(calc(21px * " + (-this.cNext) + "))");

				// Change the progress bar
				$(".w-progress-line").css("width", projectPercent * this.nbProject + "%");
			},
			nextSlide(){
				var sectionL = $('.w-section').length;
				var projectPercent = 100 / sectionL;

				this.cPrev -= 1;
				this.cNext += 1;
				
				//console.log("next : " + cNext);

				if(this.cNext >= sectionL){
					this.cNext = 2;
					this.cPrev = -2;
				}
				else{
					$("#w-section-wrapper").css("transform", "translateX(-" + 100 * this.cNext + "vw)");
				}

				this.nbProject = this.cNext + 1;

				// Change project number in the slide indicator
				$(".w-current-wrap").css("transform","translateY(calc(-21px * " + this.cNext + "))");
				
				// Change the progress bar
				$(".w-progress-line").css("width", projectPercent * this.nbProject + "%");
			},
			dragStart(e){
				e.preventDefault();
				if (e.type == 'touchstart') {
					$(document).off('mousedown', this.dragStart);
					this.startPoint = e.originalEvent.touches[0].pageX;
				} else {
					this.startPoint = e.pageX;
				}
				this.dragDist = 0;

				$(document).on('touchmove mousemove', this.dragMove);
			},
			dragMove(e){
				if (e.type == 'touchmove') {
					var movePoint = e.originalEvent.touches[0].pageX;
				} else {
					var movePoint = e.pageX;
				}
				this.dragDist = (movePoint - this.startPoint) / $("body").width() * 100;

				// Add class when dragging
				$('#w-section-wrapper').addClass('dragging');

				// Skew effect when dragging
				//$(".w-img-wrap").css("transform", "skewX(" + dragDist * 3 + "deg)");

				if (this.dragDist < 0) { // Drag right (next slide)
					// Move project while dragging
					$("#w-section-wrapper").css("transform", "translateX(" + this.dragDist * 2 + "%)");

					// Move right arrow of the cursor
					$(".fa-caret-right").addClass("dragLeft");
				}

				if (this.dragDist > 0) { // Drag left (previous slide)
					// Move project while dragging
					$("#w-section-wrapper").css("transform", "translateX(" + this.dragDist / 2 + "%)");

					// Move left arrow of the cursor
					$(".fa-caret-left").addClass("dragRight");
				}
				$(".w-img, .w-line, .w-nb-wrap, .w-type, .w-year, .w-letter").addClass("transition-timing");
				// Effects while dragging
				$(".custom-mouse").addClass("clicked");
				$(".fa-caret-left, .fa-caret-right").addClass("showArrow");
				$(".w-img").css("transform", "scale(0.8)");
			   	$(".w-img").css("height", "90%");
			 	$(".w-line").css("transform", "translateY(-110%)");
			 	$(".w-nb-wrap").css("transform", "translateY(100%)");
			  	$(".w-type").css("transform", "translateX(-100%)");
			  	$(".w-year").css("transform", "translateX(100%)");
			  	$(".w-letter").css("transform","translateX(100%)");

				//TweenLite.delayedCall(1, this.dragMoveAnim); 
				//this.dragMoveAnim();
			},
			dragEnd(){
				$(document).off('touchmove mousemove', this.dragMove);

				// Remove skew effect
				//$(".w-img-wrap").css("transform", "skewX(0deg)");

				// Remove effect on arrows
				$(".fa-caret-right").removeClass("dragLeft");
				$(".fa-caret-left").removeClass("dragRight");

				if (this.dragDist > 0) {
					this.prevSlide()
				}

				if (this.dragDist < 0) {
					this.nextSlide()
				}

				$(".w-img, .w-line, .w-nb-wrap, .w-type, .w-year, .w-letter").addClass("transition-timing");

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

				//TweenLite.delayedCall(1, this.dragEndAnim);
				console.log("dragEnd");
				//this.dragEndAnim();
			},
			appearAnim(){
				var tl = new TimelineLite();
				tl.delay(1.5);

				var slideName = $(".w-letter"),
					lineHeight = - $(".w-line").height(),
					imgWidth = - $(".w-img").width();

				tl.set(this.$refs.slideType, {x:-100})
					.set(this.$refs.slideYear, {x:100})
					.set(this.$refs.slideNumber, {y:100})
					.set(this.$refs.slideLine, {y:lineHeight})
					.set(slideName, {x:-150})
					.set(this.$refs.slideImg, {x:imgWidth});


				tl.to(this.$refs.slideImg, 1, {x:0, ease: Power1.easeOut})
					.to([this.$refs.slideNumber,
					   this.$refs.slideLine,], 1, {y:0, ease: Power1.easeOut}, 0)
					.to([this.$refs.slideYear, 
					   this.$refs.slideType], 1, {x:0, ease: Power1.easeOut}, 0)
					.to(slideName, 1, {x:0, ease: Power1.easeOut}, 0);

				console.log("appearAnim called")
			},
			leaveAnim(){
				$(".w-img, .w-line, .w-nb-wrap, .w-type, .w-year, .w-letter").removeClass("transition-timing");

				var tl = new TimelineLite();
				//tl.delay(0);

				var slideName = $(".w-letter");

				tl.set(this.$refs.slideType, {x:0})
					.set(this.$refs.slideYear, {x:0})
					.set(this.$refs.slideNumber, {y:0})
					.set(this.$refs.slideLine, {y:0})
					.set(slideName, {x:0})
					.set(this.$refs.slideImg, {width:"100%"});


				tl.to(this.$refs.slideLine, 1, {y:-100, ease: Power1.easeIn})
					.to(this.$refs.slideNumber, 1, {y:100, ease: Power1.easeIn}, 0)
					.to(this.$refs.slideYear, 1, {x:150, ease: Power1.easeIn}, 0)
					.to(this.$refs.slideType, 1, {x:-150, ease: Power1.easeIn}, 0)
					.to(slideName, 1, {x:-150, ease: Power1.easeIn}, 0)
					.to(this.$refs.slideImg, 1, {width:"0", ease: Power1.easeIn}, 0);

				console.log("leaveAnim called")
			},
			dragEndAnim(){
				var tl = new TimelineLite();
				tl.delay(1);

				var slideName = $(".w-letter"),
					lineHeight = - $(".w-line").height();

				tl.fromTo(this.$refs.slideImg, 0.75, {height:"90%", scaleX:0.8, scaleY:0.8},{height:"100%", scaleX:1, scaleY:1, ease: Power1.easeOut}, 0)
					.fromTo(this.$refs.slideLine, 0.3, {y:lineHeight},{y:0, ease: Power1.easeOut}, 1)
					.fromTo(this.$refs.slideNumber, 0.75, {y:20},{y:0, ease: Power1.easeOut}, 1)
					.fromTo(this.$refs.slideType, 0.75, {x:-150},{x:0, ease: Power1.easeOut}, 0)
					.fromTo(this.$refs.slideYear, 0.75, {x:150},{x:0, ease: Power1.easeOut}, 0)
					.fromTo(slideName, 0.75, {x:-150},{x:0, ease: Power1.easeOut}, 0);

				console.log("dragEndAnim called")
			},
			dragMoveAnim(){
				var tl = new TimelineLite();

				var slideName = $(".w-letter"),
					lineHeight = - $(".w-line").height();

				tl.fromTo(this.$refs.slideImg, 0.75, {height:"100%", scaleX:1, scaleY:1},{height:"90%", scaleX:0.8, scaleY:0.8, ease: Power1.easeOut}, 0)
					.fromTo(this.$refs.slideLine, 0.3, {y:0},{y:lineHeight, ease: Power1.easeOut}, 0)
					.fromTo(this.$refs.slideNumber, 0.75, {y:0},{y:20, ease: Power1.easeOut}, 0)
					.fromTo(this.$refs.slideType, 0.75, {x:0},{x:-150, ease: Power1.easeOut}, 0)
					.fromTo(this.$refs.slideYear, 0.75, {x:0},{x:150, ease: Power1.easeOut}, 0)
					.fromTo(slideName, 0.75, {x:0},{x:-150, ease: Power1.easeOut}, 0);

				console.log("dragMoveAnim called")
			}
		},
	}
</script>
<style lang="scss">
.transition-timing{
	transition:0.5s ease;
}
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
			    						//transition-delay:1.5s;
										//transition:0.75s ease;
										transform: translate3d(-100%, 0, 0);
										//transform:translateX(-100%);
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
					    	//transition-delay:1.5s;
					    	//transition:0.5s ease;
					    	font-family:"Brandon-Regular";
					    	font-size:30px;
					    	transform:translateX(-100%);
					    }
					    .w-year{
					    	//transition-delay:1.5s;
					    	//transition:0.5s ease;
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
					    	width:100%;
					    	height:100%;
					    	//animation: showWork 1s;
					    	//animation-delay:1.5s;
					    	//animation-play-state: paused;
					    	//animation-fill-mode: forwards;
					    	//animation-timing-function: cubic-bezier(0.9, 0.01, 0.27, 1), ease;
					    	background-position:center;
					    	background-size:cover;
					    	background-repeat:no-repeat;
					    	transition: 0.5s ease;
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
						    	//transition-delay:1.5s;
						    	transition:0.5s ease;
						    	transform:translateY(-110%);
						    }
					    }
					    .w-nb-wrap{
					    	height:17px;
					    	overflow:hidden;
					    	//transition-delay:1.5s;
					    	//transition:0.5s ease;
					    	transform:translateY(100%);
					    	.w-nb-transform{
					    		//transition-delay:1.5s;
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