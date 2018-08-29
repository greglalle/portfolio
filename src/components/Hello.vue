<template>
	<div class="global">
		<!-- <div>Hello Vue !</div> -->

	    <!-- <div class="link">
	      <router-link :to="{name: 'a'}">Page A</router-link>
	    </div>
	    <div class="link">
	      <router-link :to="{name: 'b'}">Page B</router-link>
	    </div> -->

	    <div class="menu-link works-link">
	        <router-link :to="{name: 'a'}">WORK</router-link>
	    </div>
	    <div class="menu-link contact-link">
	    	<router-link :to="{name: 'b'}">CONTACT</router-link>
	    </div>
	    <div class="menu-link burger-menu">
	        <span class="circle"></span>
	        <span class="circle"></span>
	        <span class="circle"></span>
	    </div>

	    <div class="work-menu">
	    	<div class="overlay-menu">
	    		<div class="menu-wrap">
	    			
	    		</div>
	    	</div>
	    </div>

	    <div id="works">
	    	<div id="my-w">
	    		<div class="home-frame"></div>
	    		<div id="w-section-wrapper">
	    			<div class="w-section">
	    				<div class="work-wrap">
	    					<div class="w-name-wrap">
	    						 <router-link :to="{name: 'a'}" class="w-name">
	    						 	<span class="letters">Cesu 21</span>
	    						 </router-link>
	    					</div>
	    					<div class="w-data-wrap">
	    						<div class="w-type">Website</div>
	    						<div class="w-year">2018</div>
	    					</div>
	    					<div class="w-img-wrap">
			    				<div class="w-img w-cesu">
			    					<div class="overlay"></div>
			    				</div>
			    			</div>
		    				</transition>
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
	    			<div class="w-section">
	    				<div class="work-wrap">
	    					<div class="w-name-wrap">
	    						 <router-link :to="{name: 'b'}" class="w-name">
	    						 	<span class="letters">Air Max 97</span>
	    						 </router-link>
	    					</div>
	    					<div class="w-data-wrap">
	    						<div class="w-type">Video Ad</div>
	    						<div class="w-year">2017</div>
	    					</div>
	    					<div class="w-img-wrap">
		    					<div class="w-img w-am97">
		    						<div class="overlay"></div>
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
	    			<div class="w-section">
	    				<div class="work-wrap">
	    					<div class="w-name-wrap">
	    						 <router-link :to="{name: 'a'}" class="w-name">
	    						 	<span class="letters">Cesu 21</span>
	    						 </router-link>
	    					</div>
	    					<div class="w-data-wrap">
	    						<div class="w-type">Website</div>
	    						<div class="w-year">2018</div>
	    					</div>
	    					<div class="w-img-wrap">
		    					<div class="w-img w-cesu">
		    						<div class="overlay"></div>
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
	    		</div>
	    	</div>
	    </div>
	    <div id="w-total-nb">
	    	<div class="w-counter">
	    		<div class="w-current">
	    			<div class="w-current-wrap">
	    				<!-- <span class="w-current-nb">01</span>
	    				<span class="w-current-nb">02</span>
	    				<span class="w-current-nb">03</span> -->
	    			</div>
	    		</div>
	    		<div class="w-total-line">
	    			<span class="w-progress-line"></span>
	    		</div>
	    		<span class="w-total"></span>
	    	</div>
	    </div>
	</div>
</template>

<script>
  	export default {
  		name:'home',
	  	data () {
	      return {
	      	show:true
	      }
	    },
	    beforeRouteLeave (to, from, next) {
			console.log('removed');
			function onPageLeave(){
				$(".w-img").css("animation", "hideWork 1s");
				$("html").removeClass("noScroll");
				$(".w-letter").css("transform","translateX(-100%)");
				$(".works-link, .contact-link").css("animation","leaveLink 1s");
				$(".w-counter").css("animation","leaveCounter 1s");
				$(".works-link, .contact-link, .w-counter").css("animation-play-state","running");
				$(".w-line").css("transform", "translateY(-110%)");
				$(".w-nb-wrap").css("transform", "translateY(100%)");
				$(".custom-mouse").css("display","none");
				$(".w-type").css("transform","translateX(-100%)");
				$(".w-year").css("transform","translateX(100%)");
				$("body").css("position","inherit");
				$("#my-w").css("margin","0");
				$(".home-frame").css("border-width","0");
			}
			onPageLeave();
			
			next();
		},
		mounted: function () {
		  this.$nextTick(function () {
		    // Ce code va être exécuté seulement
		    // une fois le rendu de la vue entière terminé
		    function onPageEnter(){
		    	$(".w-img").css("animation-play-state","running");
		    	$(".works-link, .contact-link").css("animation-play-state","running");
				$(".w-counter").css("animation-play-state","running");
				$(".custom-mouse").css("display","block");
				setTimeout(function(){
					$(".w-letter").css("transform","translateX(0)");
					$(".w-type").css("transform","translateX(0)");
					$(".w-year").css("transform","translateX(0)");
					$(".w-line").css("transform", "translateY(0)");
					$(".w-nb-wrap").css("transform", "translateY(0)");
					$("body").css("position","fixed");
					$(".home-frame").css("border-width","25px");
				},1000)
				
		    }
		    
		    $(".burger-menu").click(function(){
		    	$(".work-menu").css("transform","translateX(0)");
		    })

		    // Change cursor
		    var mouseX = 0, mouseY = 0, cursor = $('.custom-mouse'), cursorCenter;
			$(document).on('mousemove', function(e){
				cursorCenter = cursor.width() / 2;
			  	mouseX = e.clientX-cursorCenter,
			    mouseY = e.clientY-cursorCenter,
			  	cursor.css({left: mouseX,top: mouseY});

			  	if(0 != $(".menu-link:hover").length){
			  		cursor.addClass("expand");
			  	} else{
			  		cursor.removeClass("expand");
			  	}
			  	if(0 != $(".w-name-wrap:hover").length){
			  		cursor.addClass("onEnter");
			  	} else{
			  		cursor.removeClass("onEnter");
			  	}
			});


			// $( "a, .w-name-wrap, .menu-link" )
			//   	.mouseover(function() {
			//     	$('.custom-mouse').addClass("onEnter");
			//   	})
			//   	.mouseout(function() {
			//   		$('.custom-mouse').removeClass("onEnter");
			//   	});

			// init controller
				var controller = new ScrollMagic.Controller({vertical: false});

				$(".w-section").each(function(i){
				    var idS = i + 1;
				    $(this).addClass("work0" + idS);
				});

				// build scene
				var work01 = new ScrollMagic.Scene({triggerElement: ".work01"})
								.addIndicators({name: "sect1", colorEnd: "#000000"}) // add indicators (requires plugin)
								.addTo(controller);

				var work02 = new ScrollMagic.Scene({triggerElement: ".work02"})
								.addIndicators({name: "sect2", colorEnd: "#000000"}) // add indicators (requires plugin)
								//.setClassToggle(".w-current-wrap", "anim-work02")
								.addTo(controller);

				var work03 = new ScrollMagic.Scene({triggerElement: ".work03"})
								.addIndicators({name: "sect3", colorEnd: "#000000"}) // add indicators (requires plugin)
								//.setClassToggle(".w-current-wrap", "anim-work03")
								.addTo(controller);

			$(".w-name").hover(function() {
			  	$(".w-nb-transform").css("transform", "translateY(-21px)");
			  	$(".w-line").css("transform", "translateY(-20%)");
			  	$(".w-img").css("transform", "scale(1.1)");
			}, function(){
				$(".w-nb-transform").css("transform", "translateY(0)");
				$(".w-line").css("transform", "translateY(0)");
				$(".w-img").css("transform", "scale(1)");
			});

			var sectionL = $('.w-section').length;
				$('#w-section-wrapper').css("width", "100" * sectionL + "vw");
				$('.w-total').text("0" + sectionL);

		    $(".w-nb").each(function(i){
			    var id = i + 1;
			    $(this).text("0" + id);
			    $( ".w-current-wrap" ).append( '<span class="w-current-nb">0' + id + '</span>' );
			});

		    	var projectPercent = projectPercent = 100 / sectionL;
		    	$(".w-progress-line").css("width", projectPercent + "%");
				var cPrev = 0;
				var cNext = 0;
				var nbProject;

				function prevSlide() {
					cPrev += 1;
					cNext -= 1;
					
					//console.log("prev : " + cPrev);
					//console.log("next : " + cNext);

					if(cPrev >= 0){
						$("#w-section-wrapper").css("transform", "translateX(0)");
						cPrev = 0;
						cNext = 0;
						//console.log("stop cPrev : " + cPrev);
					}
					else{
						$("#w-section-wrapper").css("transform", "translateX(" + 100 * cPrev + "vw)");
					}

					nbProject = cNext + 1;
					//console.log("nbProject : " + nbProject);

					$(".w-current-wrap").css("transform","translateY(calc(21px * " + (-cNext) + "))");

					$(".w-progress-line").css("width", projectPercent * nbProject + "%");
				}

				function nextSlide() {
					cPrev -= 1;
					cNext += 1;
					
					console.log("next : " + cNext);
					//console.log("prev : " + cPrev);

					if(cNext >= sectionL){
						cNext = 2;
						cPrev = -2;
						//console.log("stop cNext : " + sectionL + " cPrev : " + cPrev);
					}
					else{
						//console.log("scroll : " + sL);
						$("#w-section-wrapper").css("transform", "translateX(-" + 100 * cNext + "vw)");
					}

					nbProject = cNext + 1;
					//console.log("nbProject : " + nbProject);

					$(".w-current-wrap").css("transform","translateY(calc(-21px * " + cNext + "))");
					
					$(".w-progress-line").css("width", projectPercent * nbProject + "%");
				}

				var dragDist, startPoint;

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

				function dragMove(e) {
					if (e.type == 'touchmove') {
						var movePoint = e.originalEvent.touches[0].pageX;
					} else {
						var movePoint = e.pageX;
					}
					dragDist = (movePoint - startPoint) / $("body").width() * 100;
					console.log(dragDist)

					$('#w-section-wrapper').addClass('dragging');

					//Skew effect when dragging
					$(".w-img-wrap").css("transform", "skewX(" + dragDist * 3 + "deg)");

					if (dragDist < 0) {
						$("#w-section-wrapper").css("transform", "translateX(" + dragDist * 2 + "%)");
						$(".fa-caret-right").addClass("dragLeft");
						//console.log(dragDist);
					}
					if (dragDist > 0) {
						//console.log(dragDist);
						$("#w-section-wrapper").css("transform", "translateX(" + dragDist / 2 + "%)");
						$(".fa-caret-left").addClass("dragRight");
					}
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

				function dragEnd() {
					$(document).off('touchmove mousemove', dragMove);
					$(".w-img-wrap").css("transform", "skewX(0deg)");
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
					}, 800);
				}

				$('.letters').each(function(){
					$(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='w-single-letter'><span class='w-letter'>$&</span></span>"));
				});

				$( "body" )
					// IF CLICK IS FINISHED
				  	.mouseup(function() {
				  		$(".custom-mouse").removeClass("clicked");
				  		$(".fa-caret-left, .fa-caret-right").removeClass("showArrow");
						  setTimeout(
						  	function(){
						  		$(".w-img").css("transform", "scale(1)");
						  		$(".w-img").css("height", "100%");
						  		$(".w-line").css("transform", "translateY(0)");
				  				$(".w-nb-wrap").css("transform", "translateY(0)");
				  				$(".w-type").css("transform", "translateX(0)");
				  				$(".w-year").css("transform", "translateX(0)");
				  				$(".w-letter").css("transform","translateX(0)");
						  	}, 1500);
				  	})
				  	// IF CLICK
				  	.mousedown(function() {
				  		$(".custom-mouse").addClass("clicked");
				    	// $(".w-img").css("transform", "scale(0.8)");
				    	// $(".w-img").css("height", "90%");
				  		// $(".w-line").css("transform", "translateY(-110%)");
				  		// $(".w-nb-wrap").css("transform", "translateY(100%)");
				  		// $(".w-type").css("transform", "translateX(-100%)");
				  		// $(".w-year").css("transform", "translateX(100%)");
				  		// $(".w-letter").css("transform","translateX(100%)");
				  		$(".fa-caret-left, .fa-caret-right").addClass("showArrow");

				  	});

				//$(document).on('mousewheel', wheely);
				$(document).on('touchstart mousedown', dragStart);
				$(document).on('touchend mouseup', dragEnd);
				
			// $(function(){
			// 	boxRollovers();
			// });
			
			// var XAngle, YAngle, Z;

			// function boxRollovers()
			// {
			// 	var selector = $(".work-wrap");
			// 	XAngle = 0;
			// 	YAngle = 0;
			// 	Z = 0;
				
			// 	selector.on("mousemove",function(e){
			// 		var $this = $(this);
			// 		var XRel = e.pageX - $this.offset().left;
			// 		var YRel = e.pageY - $this.offset().top;
			// 		var width = $this.width();
				
			// 		YAngle = -(0.5 - (XRel / width)) * 10; 
			// 		XAngle = (0.5 - (YRel / width)) * 10;
			// 		updateView($this);
			// 	});
				
			// 	selector.on("mouseleave",function(){
			// 		$(".work-wrap").css({"transform":"perspective(525px) translateZ(0) rotateX(0deg) rotateY(0deg)","transition":"all 150ms linear 0s","-webkit-transition":"all 150ms linear 0s"});
			// 		$(".work-wrap").find("strong").css({"transform":"perspective(525px) translateZ(0) rotateX(0deg) rotateY(0deg)","transition":"all 150ms linear 0s","-webkit-transition":"all 150ms linear 0s"});
			// 	});
			// }
			
			// function updateView(oLayer)
			// {
			// 	$(".work-wrap").css({"transform":"perspective(525px) translateZ(" + Z + "px) rotateX(" + XAngle + "deg) rotateY(" + YAngle + "deg)","transition":"none","-webkit-transition":"none"});
			// 	$(".work-wrap").find("strong").css({"transform":"perspective(525px) translateZ(" + Z + "px) rotateX(" + (XAngle / 0.66) + "deg) rotateY(" + (YAngle / 0.66) + "deg)","transition":"none","-webkit-transition":"none"});
			// }
			$("html").addClass("noScroll");
			onPageEnter();
		    console.log("monté");

		  })
		}
	}
</script>

<style lang="scss">

/********** WHITE FRAME **********/

.home-frame{
	position:absolute;
	top:0;
	left:0;
	right:0;
	bottom:0;
	border-color:white;
	border-style:solid;
	transition: border 0.75s ease;
	border-width:0;
}

/********************/

/********** MENU **********/
.open-menu{
	transform:translateX(0);
}
.work-menu{
	position:absolute;
	top:0;
	left:0;
	right:0;
	bottom:0;
	display:block;
	z-index:5;
	background-color:black;
	background-image: url(../assets/images/cesu.jpg);
	background-size:cover;
	background-repeat:no-repeat;
	background-position:center;
	transition:0.5s ease;
	transform:translateX(-100%);
	.overlay-menu{
		background-image: url(../assets/images/smoke-texture.png);
		background-size:cover;
		background-repeat:no-repeat;
		background-position:center;
		width:100%;
		height:100%;
		display:block;
		.menu-wrap{
			position:absolute;
			width:100%;
			height:100%;
			background-color:rgba(0,0,0,0.5);
		}
	}
}
/********************/

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/********** CUSTOM CURSOR **********/
.custom-mouse{
	transition:transform 0.2s ease;
  	height: 50px;
  	width: 50px;
  	background-color: inherit;
  	border:1px solid black;
  	border-radius: 50%;
  	position:absolute;
  	z-index:0;
  	&.expand{
  		transition:0.5s ease;
  		height:100px;
  		width:100px;
  		background-color:grey;
  		opacity:0.1;
  		border:none;
  		position:absolute;
  		left:50%;
  		top:50%;
  	}
  	.fa-caret-left{
  		position: absolute;
	    top: 50%;
	    transform: translate3d(9px, -50%, 0);
	    left: -10px;
	    opacity:0;
	    transition:0.5s ease;
  	}
  	.fa-caret-right{
  		position: absolute;
	    top: 50%;
	    transform: translate3d(-9px, -50%, 0);
	    opacity:0;
	    right: -10px;
	    transition:0.5s ease;
  	}
  	.showArrow{
  		opacity:1;
  		transform: translate3d(0, -50%, 0);
  	}
  	.dragLeft{
  		transform:translate3d(15px, -50%, 0);
  	}
  	.dragRight{
  		transform:translate3d(-15px, -50%, 0);
  	}
}
.clicked{
	transition:0.5s ease;
	opacity:0.7;
	transform:scale(0.8);
}

.initial{
	transform:scale(1);
}
.onEnter{
	opacity:0.5;
	transform:scale(0);
}

/********************/

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
    		.anim-work02{
    			transform:translateY(-21px);
    		}
    		.anim-work03{
    			transform:translateY(calc(-21px * 2));
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
										transition:.5s ease;
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
					    	transition:0.5s ease;
					    	font-family:"Brandon-Regular";
					    	font-size:30px;
					    	transform:translateX(-100%);
					    }
					    .w-year{
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
					    transition:transform 0.25s;
					    .w-img{
					    	position:relative;
					    	height:100%;
					    	animation: showWork 1s;
					    	animation-delay:1s;
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
				    .w-cesu{
				    	background-image:url('../assets/images/cesu.jpg');
				    }
				    .w-am97{
				    	background-image:url('../assets/images/am97.jpg');
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
						    	transition:0.5s ease;
						    	transform:translateY(-110%);
						    }
					    }
					    .w-nb-wrap{
					    	height:17px;
					    	overflow:hidden;
					    	transition:0.5s ease;
					    	transform:translateY(100%);
					    	.w-nb-transform{
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

.link{
	font-size:20px;
}

a{
	color:black;
	text-decoration:none;
}

.noScroll{
	max-width: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
}


/********** ANIMATIONS **********/

@keyframes hideWork {
    from {
        width:100%;
    }
    to {
        width:0;
    }
}

@keyframes showWork {
    from {
        width:0;
    }
    to {
        width:100%;
    }
}

@keyframes enterLetters {
    from {
        transform:translateX(-100%);
    }
    to {
        transform:translateX(0);
    }
}

@keyframes enterType {
    from {
        transform:translateX(-100%);
    }
    to {
        transform:translateX(0);
    }
}

@keyframes enterYear {
    from {
        transform:translateX(100%);
    }
    to {
        transform:translateX(0);
    }
}

@keyframes enterLink {
    from {
        transform:translateX(-20%);
        opacity:0;
    }
    to {
        transform:translateX(0);
        opacity:1;
    }
}

@keyframes leaveLink {
    from {
        transform:translateX(0);
        opacity:1;
    }
    to {
        transform:translateX(-20%);
        opacity:0;
    }
}

@keyframes enterCounter {
    from {
        transform:translateY(70%);
        opacity:0;
    }
    to {
        transform:translateY(0);
        opacity:1;
    }
}

@keyframes leaveCounter {
    from {
        transform:translateY(0);
        opacity:1;
    }
    to {
        transform:translateY(70%);
        opacity:0;
    }
}

</style>
