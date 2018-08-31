<template>
	<div class="global">
		<router-link :to="{name: 'root'}" class="close-btn">
			<img src="../assets/images/close.png" alt="close" class="close-icon">
		</router-link>
		<project-intro projectIndex="1"></project-intro>
		<!-- <div class="project-intro">
			<div class="project-img-wrap">
				<div class="project-img project-img__am97"></div>
			</div>
			<div class="project-name-wrap">
				<h1 class="project-name"><span class="wrap-l">Air Max 97</span></h1>
			</div>
			<div class="project-data-wrap">
				<div class="scroll-down">
					<div class="scroll-down-line"></div>
				</div>
				<div class="data-container">
					<div class="project-type-wrap">
						<div class="project-type">Video Ad</div>
					</div>
					<div class="project-year-wrap">
						<div class="project-year">2017</div>
					</div>
				</div>
			</div>
		</div> -->
		<div class="section">
			<div class="s-left s-left-text s-left-img">
				<div class="text-container">
					<h2 class="title">A great project</h2>
					<p class="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas nec erat ut sollicitudin. Donec scelerisque congue tempor. Cras viverra risus ac mauris auctor, eu aliquet neque varius. Etiam eu velit et leo tincidunt ornare quis eu risus. Nulla cursus metus ut elementum congue. Ut vitae ex orci. Suspendisse nec consequat eros, sit amet condimentum nulla.</p>
				</div>
			</div>
			<div class="s-right s-right-text s-right-img">
				<div class="p-img p-img-right">
				</div>
			</div>
		</div>
		<div class="section case-background padding-b">
			<div class="s-center">
				<h5 class="title">Typography</h5>
				<div class="typo-example">
					<div class="typo-name">MONTSERRAT</div>
					<img src="../assets/images/typo-example/montserrat-ex.svg" class="typo-svg">
				</div>
			</div>
		</div>
		<div class="section">
			<div class="project-screenshot-fullscreen to-top">
				<img src="../assets/images/projects/cesu/cesu-home.jpg">
			</div>
		</div>
		<div class="next-project-container">
			<div class="next-project-wrap">
				<div class="next-project">
					<p>Next Project</p>
				</div>
				<div class="next-project-name">
					<router-link :to="{name: 'a'}">Cesu 21</router-link>
				</div>
			</div>
		</div>
		<div class="scroll-line-wrap">
			<div class="scroll-line"></div>
		</div>
	</div>
</template>

<script>
	export default {
  		name:'w-cesu',
	  	data () {
	      return {
	      	show:true
	      }
	    },
	    beforeRouteLeave (to, from, next) {
			console.log('removed');

			function leavePage(){
				$(".project-img-wrap").css("width","0");
				$(".letter").css("transform","translateX(100%)");
				$(".project-type, .project-year").css("animation","leaveData 1s");
				$(".project-type, .project-year").css("animation-fill-mode","forwards");
				$(".close-btn").removeClass("btn-appear");
				$(".scroll-down-line").css("opacity","0");
				$(".next-project-wrap").css("transform","translateY(-150%)");
				$(".next-project-name > a, .next-project > p").css("transform","translateY(-100%)");
				$(".next-project-name > a, .next-project > p").css("opacity","0");
				$(window).scrollTop() == 0;
			}
			leavePage();

			next();
		},
		mounted: function () {
			this.$nextTick(function () { 
				
				$('.wrap-l').each(function(){
					$(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='single-letter'><span class='letter'>$&</span></span>"));
				});
				function enterPage(){
					$(".project-img").css("animation-play-state","running");
					$(".letter").css("animation-play-state","running");
					$(".project-type, .project-year").css("animation-play-state","running");
					$(".custom-mouse").css("display","none");
					$(".project-name").css("transform","translateY(0)");
					setTimeout(function(){
						$(".close-btn").addClass("btn-appear");
						//resetAnim();
					},1000)
				}
				

				//Animate on scroll
				//Cache reference to window and animation items
				var $animation_elements = $('.title, .p, .p-img-right, .next-project-name > a, .next-project > p');
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

				enterPage();

				function resetAnim(){
					$imgRight.removeClass('visible');
				  	$title.removeClass('visible');
				  	$paragraphe.removeClass('visible');
				}
				
				// function get(){
				//   //var test = $('.next-project-container').offset().top - $(window).scrollTop();
				//   //console.log(test);
				//   $('.next-project-container').offset().top = 0;
				//   if(test <= 0){
				//   	//console.log("OK");
				//   };
				// }

				// if($nextProject.hasClass('ok')){
				// 	get();
				// }

				
				// $(window).scroll(get);

				//capture scroll any percentage
				$(window).scroll(function(){
					var wintop = $(window).scrollTop(), docheight = $(document).height(), winheight = $(window).height();
	 				var scrolled = (wintop/(docheight-winheight))*100;
	  				$('.scroll-line').css('height', (scrolled + '%'));
				});

				$(window).scroll(function() {
  					var scroll = $(window).scrollTop();
  					//console.log("scroll : " + scroll);
  					$(".project-name").css("transform","translateY(-" + scroll/5 + "px)");
  					$(".project-img").css("transform","scale(1.2) translateY(-" + scroll/10 + "px)");
  					//$(".project-screenshot-fullscreen").css("transform","translateY(" + scroll/20 + "px)");
  					//$(".next-project-wrap").css("margin-top", scroll/20 + "px");
				});

				var lastScrollTop = 0;
				$(window).scroll(function(event){
				   var st = $(this).scrollTop();
				   if (st > lastScrollTop){
				       // downscroll code
				       $(".close-btn").removeClass("btn-appear");
				   } else {
				      // upscroll code
				      $(".close-btn").addClass("btn-appear");
				   }
				   lastScrollTop = st;
				});

				//Effect on fullscreen images on scroll
				var section = $(".project-screenshot-fullscreen");
				let currentPixel = window.pageXOffset;
				console.log(currentPixel);

				const looper = function () {
					const newPixel = window.pageYOffset;
					const diff = newPixel - currentPixel;
					const speed = diff * 0.15;

					section.css("transform", "skewY(" + speed + "deg)");

					currentPixel = newPixel;

					requestAnimationFrame(looper);
				}
				looper();

				//Split text in lines
				$(".p").each(function(){
					var t = $(this);
					var e = t.text().split(" ")
			          , i = 0
			          , n = 0;
			        t.html("");
			        for (var r = 0; r < e.length; r++) {
			            var o = e[r];
			            if ("" !== o) {
			                var s = $('<span class="js-word">').text(o);
			                t.append(s).append(" "),
			                s.position().top > i && (i = s.position().top,
			                n++),
			                s.addClass("is-line-" + n)
			            }
			        }
				})

			})
		}
	}
</script>

<style lang="scss">
@import '../assets/css/project.scss';
	.img__am97{
		background-image:url('../assets/images/am97.jpg');
	}
	// .scroll-line-wrap{
	// 	position:fixed;
	// 	left:0;
	// 	top:0;
	// 	width:5px;
	// 	height:100vh;
	// 	.scroll-line{
	// 		width:100%;
	// 		background-color:black;
	// 	}
	// }

	// .close-btn{
	// 	position:fixed;
	// 	top:-50px;
	// 	left:25px;
	// 	background-color:rgba(255,255,255,0.2);
	// 	padding:10px;
	// 	border-radius:50px;
	// 	display:flex;
	// 	justify-content:center;
	// 	align-items:center;
	// 	box-shadow: none;
	// 	transition:0.7s ease;
	// 	visibility:hidden;
	// 	box-shadow: 0 0 30px 0 rgba(0,0,0,.1);
	// 	.close-icon{
	// 		width:15px;
	// 	}
	// }
	// .btn-appear{
	// 	visibility:visible;
	// 	top:25px;
	// }

	// .project-intro{
	// 	.project-img-wrap{
	// 		width:35vw;
	// 		height:100vh;
	// 		transition:0.5s ease;
	// 		.project-img{
	// 			height:100vh;
	// 			left:0;
	// 			background-position:center;
	// 			background-size:cover;
	// 			background-repeat:no-repeat;
	// 			transition:0.5s ease;
	// 			animation: leave 1s;
	// 			animation-delay:1s;
	// 			animation-play-state: paused;
	// 			&.project-img__am97{
	// 				background-image:url('../assets/images/am97.jpg');
	// 			}
	// 		}
	// 	}
	// 	.project-name-wrap{
	// 		position:absolute;
	// 		top:15%;
	// 		left:25vw;
	// 		.project-name{
	// 			font-size:11em;
	// 			font-family:"Gilroy-ExtraBold";
	// 			transition:0.2s ease;
	// 			.wrap-l{
	// 				.single-letter{
	// 					display: inline-block;
	// 					overflow: hidden;
 //    					.letter{
 //    						display: inline-block;
	// 						transition:.5s ease;
	// 						animation: animLetters 1s;
	// 						animation-delay:1s;
	// 						animation-play-state: paused;
 //    					}
	// 				}
	// 			}
	// 		}
	// 	}
	// 	.project-data-wrap{
	// 		position:absolute;
	// 		top:70%;
	// 		right:15vw;
	// 		display:flex;
	// 		.scroll-down{
	// 			overflow:hidden;
	// 			.scroll-down-line{
	// 				display:block;
	// 				width:2px;
	// 				height:100%;
	// 				background-color:black;
	// 				margin-right:20px;
	// 				animation: scrollDownLine 1s;
	// 				animation-iteration-count: infinite;
	// 				animation-timing-function: ease-out;
	// 				opacity:1;
	// 				transition:0.5s ease;
	// 			}
	// 		}
	// 		.data-container{
	// 			.project-year-wrap, .project-type-wrap{
	// 		    	overflow:hidden;
	// 		    	width:auto;
	// 		    	height:auto;
	// 		    }
	// 			.project-type{
	// 				transition:0.5s ease;
	// 		    	font-family:"Brandon-Regular";
	// 		    	font-size:40px;
	// 		    	line-height:1em;
	// 		    	animation: enterData 1s;
	// 				animation-delay:1s;
	// 				animation-play-state: paused;
	// 				animation-fill-mode: forwards;
	// 			}
	// 			.project-year{
	// 				text-align:right;
	// 				transition:0.5s ease;
	// 		    	font-family:"Brandon-Bold";
	// 		    	font-size:35px;
	// 		    	line-height:1em;
	// 		    	animation: enterData 1s;
	// 				animation-delay:1s;
	// 				animation-play-state: paused;
	// 				animation-fill-mode: forwards;
	// 			}
	// 		}
	// 	}
	// }

	// Background color of content
	.case-background{
		//background-color:#0B132B;
		//background-color:#111111;
		background-color:#F9F9F9;
	}

	.section{
	// 	padding-top:5%;
	// 	padding-bottom:5%;
	// 	display:flex;
	// 	flex-direction:row;
	// 	justify-content:center;
	// 	&.padding-b{
	// 		padding-bottom:300px;
	// 	}
	// 	&.padding-t{
	// 		padding-top:300px;
	// 	}
	// 	.s-center{
	// 		width:80%;
	// 	}
	// 	.s-left{
	// 		width:50%;
	// 		&.s-left-text{
	// 			display:flex;
	// 		}
	// 	}
	// 	.s-right{
	// 		width:50%;
	// 		&.s-right-img{
	// 			position:relative;
	// 			height:70vh;
	// 		}
	// 		.p-img-right{
	// 			transform: translateY(-50%);
	// 		    position: absolute;
	// 		    right: 0;
	// 		    top: 50%;
	// 		    width: 0;
	// 		    height: 100%;
	// 		    background-image: url(/dist/cesu.jpg?dd7de3a…);
	// 		    background-position: center;
	// 		    background-size: cover;
	// 		    transition:1.2s ease;
	// 			transition-delay:0.5s;
	// 		    &.imgR-in-view{
	// 		    	width: 60%;
	// 		    }
	// 		}
	// 	}
	// 	.text-container{
	// 		display:block;
	// 		width:65%;
	// 		margin:auto;
	// 		transition:1.2s ease;
	// 		transition-delay:0.5s;
	// 		opacity:0;
	// 		transform:translateX(-25%);
	// 		&.text-in-view{
	// 			opacity:1;
	// 			transform:translateX(0);
	// 		}
	// 	}
	// 	.title{
	// 		color:black;
	// 		//font-family:"Gilroy-Extrabold";
	// 		margin-top:20px;
	// 		margin-bottom:20px;
	// 	}
	// 	.title-white{
	// 		color:white;
	// 		//font-family:"Gilroy-Extrabold";
	// 		margin-top:20px;
	// 		margin-bottom:20px;
	// 	}
	// 	.p{
	// 		color:black;
	// 		font-family:"Brandon-Regular";
	// 		font-size:19px;
	// 	}
		// .p-white{
		// 	color:white;
		// 	font-family:"Brandon-Regular";
		// 	font-size:19px;
		// }
		.typo-example{
			width:75%;
			background-color:rgba(255, 255, 255, 0.05);
			padding:30px;
			box-shadow: 0 0 30px 0 rgba(0,0,0,.1);
			margin-top:40px;
			margin-bottom:40px;
			.typo-name{
				font-size:16px;
				font-family:"Brandon-Regular";
				color:rgba(0, 0, 0, 0.7);
				margin-bottom:15px;
			}
			.typo-svg{
				width:65%;
			}
		}

		.project-screenshot-fullscreen{
			width: 65%;
    		margin: auto;
    		display: block;
    		box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.1);
    		&.to-top{
    			margin-top: -290px;
    		}
    		img{
    			width:100%;
    		}
		}
	}

	//Next Project Section
	// .next-project-container{
	// 	display:block;
	// 	height:100%;
	// 	width:100%;
	// 	//overflow:hidden;
	// 	.next-project-wrap{
	// 		height:100vh;
	// 		display:flex;
	// 		flex-direction:column;
	// 		justify-content:center;
	// 		align-items:center;
	// 		background-color:#212121;
	// 		transition-duration:0.8s;
	// 		transition-delay:0.3s;
	// 		transition-timing-function: cubic-bezier(0.49, 0.01, 0.27, 1), ease;
	// 		.next-project{
	// 			overflow:hidden;
	// 			font-size:14px;
	// 			font-family:"Brandon-Regular";
	// 			color:rgba(255,255,255,0.75);
	// 			text-transform:uppercase;
	// 			margin-bottom:10px;
	// 			p{
	// 				margin:0;
	// 				display:block;
	// 				transition:0.5s ease;
	// 			}
	// 		}
	// 		.next-project-name{
	// 			overflow:hidden;
	// 			position:relative;
	// 			&::after{
	// 				content:'';
	// 				height:51px;
	// 				display:block;
	// 				position:absolute;
	// 				left:0;
	// 				bottom:0;
	// 				background-color:white;
	// 				transition:1s ease;
	// 				cursor:pointer;
	// 			}
	// 			&:hover::after{
	// 				width:100%;
	//     			transform: translate3d(102%, 0, 0);
	// 			}
	// 			a{
	// 				display:block;
	// 				font-size:50px;
	// 				font-family:"Gilroy-Extrabold";
	// 				color:white;
	// 				text-decoration:none;
	// 				position:relative;
	// 				transition-delay:0.3s;
	// 				transition:0.5s ease;
	// 				&:hover{
	// 					color:transparent;
	// 					-webkit-text-stroke: 0.5px white;
	// 				}
	// 			}	
	// 		}
	// 	}
	// }

	h2{
		font-size:60px;
		font-family:"Gilroy-Extrabold";
	}
	h3{
		font-size:50px;
		font-family:"Gilroy-Extrabold";
	}
	h4{
		font-size:40px;
		font-family:"Gilroy-Extrabold";
	}
	h5{
		font-size:25px;
		font-family:"Gilroy-Regular";
		letter-spacing: 3px;
	}


	// @keyframes leave {
 //        from {
 //            width:0;
 //        }
 //        to {
 //            width:100%;
 //        }
 //    }

 //    @keyframes scrollDownLine {
 //        0% {
 //            transform:translateY(-100%);
 //        }
 //        40% {
 //            transform:translateY(0);
 //        }
 //        100% {
 //            transform:translateY(100%);
 //        }
 //    }

 //    @keyframes animLetters {
 //        from {
 //            transform:translateX(-100%);
 //        }
 //        to {
 //            transform:translateX(0);
 //        }
 //    }
 //    @keyframes enterData{
 //        from {
 //            transform:translateY(-100%);
 //        }
 //        to {
 //            transform:translateY(0);
 //        }
 //    }

 //    @keyframes leaveData{
 //        from {
 //            transform:translateY(0);
 //        }
 //        to {
 //            transform:translateY(100%);
 //        }
 //    }
</style>
