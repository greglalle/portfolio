<template>
	<div class="global">
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
	    			<project-slides v-for="(slide, index) in slides" v-bind:key="slide.id" 
	    			:title="slide.title"
	    			:type="slide.type"
	    			:date="slide.date"
	    			:projectImg="slide.projectImg"
	    			:projectLink="slide.projectLink"></project-slides>
	    		</div>
	    	</div>
	    </div>
	    <slide-indicator></slide-indicator>
	</div>
</template>

<script>
import ProjectSlides from '../ProjectSlides.vue'
import SlideIndicator from '../SlideIndicator.vue'
const slides = require('../slides.json').slides

  	export default {
  		name:'home',
  		beforeCreate(){
			this.slides = slides
		},
	  	data () {
	      return {
	    	
	      }
	    },
	    beforeRouteLeave (to, from, next) {
			console.log('removed');
			function onPageLeave(){
				//$(".w-img").css("animation", "hideWork 1s"); //
				$("html").removeClass("noScroll");
				//$(".w-letter").css("transform","translateX(-100%)"); //
				$(".works-link, .contact-link").css("animation","leaveLink 1s");
				$(".w-counter").css("animation","leaveCounter 1s");
				$(".works-link, .contact-link, .w-counter").css("animation-play-state","running");
				//$(".w-line").css("transform", "translateY(-110%)"); //
				//$(".w-nb-wrap").css("transform", "translateY(100%)"); //
				$(".custom-mouse").css("display","none");
				//$(".w-type").css("transform","translateX(-100%)"); //
				//$(".w-year").css("transform","translateX(100%)"); //
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
		    	//$(".w-img").css("animation-play-state","running");
		    	$(".works-link, .contact-link").css("animation-play-state","running");
				$(".w-counter").css("animation-play-state","running");
				$(".custom-mouse").css("display","block");
				setTimeout(function(){
					//$(".w-letter").css("transform","translateX(0)");
					//$(".w-type").css("transform","translateX(0)");
					//$(".w-year").css("transform","translateX(0)");
					//$(".w-line").css("transform", "translateY(0)");
					//$(".w-nb-wrap").css("transform", "translateY(0)");
					$("body").css("position","fixed");
					$(".home-frame").css("border-width","25px");
				},1500)
				
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

				// init controller
				var controller = new ScrollMagic.Controller({vertical: false});

				// build scene
				var work01 = new ScrollMagic.Scene({triggerElement: ".work01"})
								.addIndicators({name: "sect1", colorEnd: "#000000"}) // add indicators (requires plugin)
								.addTo(controller);

				var work02 = new ScrollMagic.Scene({triggerElement: ".work02"})
								.addIndicators({name: "sect2", colorEnd: "#000000"}) // add indicators (requires plugin)
								.addTo(controller);

				var work03 = new ScrollMagic.Scene({triggerElement: ".work03"})
								.addIndicators({name: "sect3", colorEnd: "#000000"}) // add indicators (requires plugin)
								.addTo(controller);

				$( "body" )
					// IF CLICK IS FINISHED
				  	.mouseup(function() {
				  		$(".custom-mouse").removeClass("clicked");
				  		$(".fa-caret-left, .fa-caret-right").removeClass("showArrow");
						  setTimeout(
						  	function(){
						  		// $(".w-img").css("transform", "scale(1)");
						  		// //$(".w-img").css("height", "100%");
						  		// $(".w-line").css("transform", "translateY(0)");
				  				// $(".w-nb-wrap").css("transform", "translateY(0)");
				  				// $(".w-type").css("transform", "translateX(0)");
				  				// $(".w-year").css("transform", "translateX(0)");
				  				// $(".w-letter").css("transform","translateX(0)");
						  	}, 1500);
				  	})
				  	// IF CLICK
				  	.mousedown(function() {
				  		$(".custom-mouse").addClass("clicked");
				  		$(".fa-caret-left, .fa-caret-right").addClass("showArrow");

				  	});

			$("html").addClass("noScroll");
			onPageEnter();
		    console.log("monté");

		  })
		},
		components: {
			ProjectSlides,
			SlideIndicator
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
  		border:0px;
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
