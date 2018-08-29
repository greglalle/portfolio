import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	routes: [{
		path: '/',
		component: require('./components/Hello.vue').default,
		name: 'root'
	},{
		path: '/PageA',
		component: require('./components/PageA.vue').default,
		name: 'a'

	},{
		path: '/PageB',
		component: require('./components/PageB.vue').default,
		name: 'b'

	}, {
		path: '*',
		redirect: '/'
	}],
	scrollBehavior (to, from, savedPosition) {
	  return new Promise((resolve, reject) => {
	    setTimeout(() => {
	      resolve({ x: 0, y: 0 })
	    }, 1000)
	  })
	}
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// // init controller
// var controller = new ScrollMagic.Controller({vertical: false});

// // build scene
// var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 500})
// 				.addTo(controller);
	

$(document).ready(function () {

	// // init controller
	// var controller = new ScrollMagic.Controller({vertical: false});

	// $(".w-section").each(function(i){
	//     var idS = i + 1;
	//     $(this).addClass("work0" + idS);
	// });

	// // build scene
	// var work01 = new ScrollMagic.Scene({triggerElement: ".work01"})
	// 				.addIndicators({name: "sect1", colorEnd: "#000000"}) // add indicators (requires plugin)
	// 				.addTo(controller);

	// var work02 = new ScrollMagic.Scene({triggerElement: ".work02"})
	// 				.addIndicators({name: "sect2", colorEnd: "#000000"}) // add indicators (requires plugin)
	// 				.setClassToggle(".w-current-wrap", "anim-work02")
	// 				.addTo(controller);

	// var work03 = new ScrollMagic.Scene({triggerElement: ".work03"})
	// 				.addIndicators({name: "sect3", colorEnd: "#000000"}) // add indicators (requires plugin)
	// 				.setClassToggle(".w-current-wrap", "anim-work03")
	// 				.addTo(controller);
	

	//Define wrapper width
	// var sectionL = $('.w-section').length;
	// $('#w-section-wrapper').css("width", "100" * sectionL + "vw");
	// $('.w-total').text("0" + sectionL);

	//Horizontal scroll with jquery-mousewheel
    // $('html, body').bind('mousewheel DOMMouseScroll MozMousePixelScroll', function(e, delta) {
    //     this.scrollLeft -= (delta);
    //     e.preventDefault();
    // });

    //Hover on work name
 //    $(".w-name").hover(function() {
	//   	$(".w-nb-transform").css("transform", "translateY(-21px)");
	//   	$(".w-line").css("transform", "translateY(-20%)");
	// }, function(){
	// 	$(".w-nb-transform").css("transform", "translateY(0)");
	// 	$(".w-line").css("transform", "translateY(0)");
	// });

	// var lineW = $(".w-line-wrap").width();
	// $(".w-line-wrap").css("right", "-" + lineW / 2 + "px");

	//Display work number
	// $(".w-nb").each(function(i){
	//     var id = i + 1;
	//     $(this).text("0" + id);
	//     $( ".w-current-wrap" ).append( '<span class="w-current-nb">0' + id + '</span>' );
	// });

	//If scrolling
	// $(window).on("scroll", function() {
	//   	$(".w-img").css("transform", "scale(0.8)");
	//   	$(".w-data-wrap, .w-line-wrap").fadeOut("slow");
	//   	$(".w-name").css("opacity","0");
	// });

	//Detect when stop scrolling
	$.fn.scrollStopped = function(callback) {
	  var that = this, $this = $(that);
	  $this.scroll(function(ev) {
	    clearTimeout($this.data('scrollTimeout'));
	    $this.data('scrollTimeout', setTimeout(callback.bind(that), 200, ev));
	  });
	};

	$(window).scrollStopped(function(ev){
	  $(".w-img").css("transform", "scale(1)");
	  setTimeout(
	  	function(){
	  		$(".w-data-wrap, .w-line-wrap").fadeIn("slow");
	  		$(".w-name").css("opacity","1");

	  		$('.ml7 .letters').each(function(){
				$(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
			});

			anime.timeline({loop: false})
			  .add({
			    targets: '.ml7 .letter',
			    opacity: 1,
			    rotateY: [-90, 0],
			    duration: 1300,
			    delay: function(el, i) {
			      return 45 * i;
			    }
			  }).add({
		  		});
	  	}, 800);
	});

	// // Change cursor
	// $(document).on('mousemove', function(event){
	//   	var x = event.clientX-25,
	//       	y = event.clientY-25;
	//   	$('.custom-mouse').offset({left: x,top: y});
	// });

	// $( "a, .w-name-wrap, .menu-link" )
	//   	.mouseover(function() {
	//     	$('.custom-mouse').addClass("onEnter");
	//   	})
	//   	.mouseout(function() {
	//   		$('.custom-mouse').removeClass("onEnter");
	//   	});

	// $(document).scroll(function() {
	//   	var scr = $(document).scrollLeft();
	// 	console.log(scr);

	// 	$('html, body').animate({
	// 	    scrollLeft: $(".w-section").next().offset().left
	// 	}, 1000);
	// });

	// var lastScrollLeft = 0;
	// $(document).scroll(function(event){
	//    	var st = $(this).scrollLeft();
	//    	if (st > lastScrollLeft){
	//        	// SCROLL RIGHT
	//        	console.log("scroll right");

	//        	$('html, body').animate({
	// 			scrollLeft: $(".w-section").next().offset().left
	// 		}, 1000);
	//    	} else if (st < lastScrollLeft){
	//    		// SCROLL LEFT
	//    		console.log("scroll left");

	//       	$('html, body').animate({
	// 			scrollLeft: $(".w-section").prev().offset().left
	// 		}, 1000);
	//    }
	//    lastScrollLeft = st;
	// });
	

	// var nbWork = 1;
	// var lastScrollLeft = 0;
	// var counter = 0;
	// $(document).mousewheel(function(event){
	// 	 var st = $(this).scrollLeft();
	// 	 if (st > lastScrollLeft){
	// 	 	counter += 1;
	// 	 	console.log("right : " + counter);
	// 		$("#w-section-wrapper").css("transform", "translateX(-" + 100 * counter + "vw)");
	// 		// SCROLL RIGHT
	// 		// if (nbWork < 4) {
	// 		// 	$("#w-section-wrapper").css("transform", "translateX(-100vw)");
	// 		// 	nbWork += 1;
	// 		// 	console.log("if : " + nbWork);
	// 		// } else{
	// 		// 	$("#w-section-wrapper").css("transform", "translateX(0)");
	// 		// 	nbWork = 1;
	// 		// 	console.log("else : " + nbWork);
	// 		// }
	// 	 } else if (st < lastScrollLeft){
	// 	 	counter -= 1;
	// 	 	console.log("left : " + counter);
	// 	 	$("#w-section-wrapper").css("transform", "translateX(+" + 100 * counter + "vw)");
	// 	// 	//SCROLL LEFT
	// 	// 	if (nbWork == 1) {
	// 	// 		$("#w-section-wrapper").css("transform", "translateX(0)");
	// 	// 		//nbWork = 1;
	// 	// 		console.log("if : " + nbWork);
	// 	// 	} else{
	// 	// 		$("#w-section-wrapper").css("transform", "translateX(+100vw)");
	// 	// 		nbWork += 1;
	// 	// 		console.log("else : " + nbWork);
	// 	// 	}
	// 	}
	// 	lastScrollLeft = st;
	// });
	// var timeStart = 0;

	// function wheely(e) {
	// 	var y = e.originalEvent.deltaY;
	// 	var timeStop = new Date().getTime();
	// 	var timeDiff = timeStop - timeStart;
	// 	if (timeDiff > 200) {
	// 		if (y > 0) {
	// 			nextSlide();
	// 		}
	// 		if (y < 0) {
	// 			prevSlide();
	// 		}
	// 	}
	// 	timeStart = timeStop;
	// }

	// var cPrev = 0;
	// var cNext = 0;

	// function prevSlide() {
	// 	cPrev += 1;
	// 	cNext -= 1;
	// 	//console.log("prev : " + cPrev);
	// 	//console.log("next : " + cNext);

	// 	if(cPrev >= 0){
	// 		$("#w-section-wrapper").css("transform", "translateX(0)");
	// 		cPrev = 0;
	// 		cNext = 0;
	// 		//console.log("stop cPrev : " + cPrev);
	// 	}
	// 	else{
	// 		$("#w-section-wrapper").css("transform", "translateX(" + 100 * cPrev + "vw)");
	// 	}
	// }

	// function nextSlide() {
	// 	cPrev -= 1;
	// 	cNext += 1;
	// 	//console.log("next : " + cNext);
	// 	//console.log("prev : " + cPrev);
		

	// 	if(cNext >= sectionL){
	// 		cNext = 3;
	// 		cPrev = -3;
	// 		//console.log("stop cNext : " + sectionL + " cPrev : " + cPrev);
	// 	}
	// 	else{
	// 		var sL = $(document).scrollLeft();
	// 		//console.log("scroll : " + sL);
	// 		$("#w-section-wrapper").css("transform", "translateX(-" + 100 * cNext + "vw)");
	// 	}
	// }

	// var dragDist, startPoint;

	// function dragStart(e) {
	// 	e.preventDefault();
	// 	if (e.type == 'touchstart') {
	// 		$(document).off('mousedown', dragStart);
	// 		startPoint = e.originalEvent.touches[0].pageX;
	// 	} else {
	// 		startPoint = e.pageX;
	// 	}
	// 	dragDist = 0;
	// 	$(document).on('touchmove mousemove', dragMove);
	// }

	// function dragMove(e) {
	// 	if (e.type == 'touchmove') {
	// 		var movePoint = e.originalEvent.touches[0].pageX;
	// 	} else {
	// 		var movePoint = e.pageX;
	// 	}
	// 	dragDist = (movePoint - startPoint) / $("body").width() * 100;

	// 	$('#w-section-wrapper').addClass('dragging');

	// 	if (dragDist < 0) {
	// 		$("#w-section-wrapper").css("transform", "translateX(" + dragDist * 3 + "%)");
	// 		//console.log(dragDist);

	// 	}

	// 	if (dragDist > 0) {
	// 		//console.log(dragDist);
	// 		$("#w-section-wrapper").css("transform", "translateX(" + dragDist / 2 + "%)");
	// 	}
	// }

	// function dragEnd() {
	// 	$(document).off('touchmove mousemove', dragMove);
	// 	//$('.slide, .bg').removeAttr('style');
	// 	if (dragDist > 10) {
	// 		prevSlide();
	// 	}
	// 	if (dragDist < -10) {
	// 		nextSlide();
	// 	}

	// 	setTimeout(function() {
	// 		$('.slider').removeClass('dragging');
	// 	}, 800);
	// }

	// $('.ml7 .letters').each(function(){
	// 	$(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
	// });

	// $( "body" )
	// 	// IF CLICK IS FINISHED
	//   	.mouseup(function() {
	//   		$(".custom-mouse").removeClass("clicked");
	// 		  setTimeout(
	// 		  	function(){
	// 		  		$(".w-img").css("transform", "scale(1)");
	// 		  		$(".w-name").css("opacity","1");
	// 		  		$(".w-line").css("transform", "translateY(0)");
	//   				$(".w-nb-wrap").css("transform", "translateY(0)");
	//   				$(".w-type").css("transform", "translateX(0)");
	//   				$(".w-year").css("transform", "translateX(0)");

	//   				$(".w-img").css("height", "100%");

	// 				anime.timeline({loop: false})
	// 				  .add({
	// 				    targets: '.ml7 .letter',
	// 				    translateY: ["1.1em", 0],
	// 				    translateX: ["0.55em", 0],
	// 				    translateZ: 0,
	// 				    rotateZ: [180, 0],
	// 				    duration: 750,
	// 				    easing: "easeOutExpo",
	// 				    delay: function(el, i) {
	// 				      return 50 * i;
	// 				    }
	// 				  }).add({
	// 			  		});
	// 		  	}, 1500);
	//   	})
	//   	// IF CLICK
	//   	.mousedown(function() {
	//   		$(".custom-mouse").addClass("clicked");
	//     	$(".w-img").css("transform", "scale(0.8)");
	//     	$(".w-img").css("height", "90%");

	//   		//$(".w-data-wrap, .w-line-wrap").fadeOut("slow");
	//   		$(".w-name").css("opacity","0");
	//   		$(".w-type").css("transform", "translateX(-100%)");
	//   		$(".w-year").css("transform", "translateX(100%)");
	//   		$(".w-line").css("transform", "translateY(-100%)");
	//   		$(".w-nb-wrap").css("transform", "translateY(100%)");

	//   	});

	// //$(document).on('mousewheel', wheely);
	// $(document).on('touchstart mousedown', dragStart);
	// $(document).on('touchend mouseup', dragEnd);

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
});