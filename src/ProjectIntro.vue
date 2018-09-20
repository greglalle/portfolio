<template>
	<div class="project-intro">
		<div class="project-img-wrap">
			<div class="project-img" :class="img[projectIndex]" ref="projectImg"></div>
		</div>
		<div class="project-name-wrap">
			<h1 class="project-name" ref="projectName"><span class="wrap-l">{{ title[projectIndex] }}</span></h1>
		</div>
		<div class="project-data-wrap">
			<div class="scroll-down">
				<div class="scroll-down-line"></div>
			</div>
			<div class="data-container">
				<div class="project-type-wrap">
					<div class="project-type" ref="projectType">{{ type[projectIndex] }}</div>
				</div>
				<div class="project-year-wrap">
					<div class="project-year" ref="projectYear">{{ date[projectIndex] }}</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { TimelineLite, Expo } from "gsap/TweenMax";

export default {
	props: [ 'projectIndex' ],
	data(){
		return {
			id: ['cesu', 'am97'],
			title: ['Cesu 21', 'Air Max 97'],
			type: ['Website', 'Video Ad'],
			date: ['2018', '2017'],
			img: ['img__cesu', 'img__am97'],
		}
	},
	beforeDestroy () {
		this.leaveAnim();
	},
	mounted: function () {
		this.$nextTick(function () {

			// Wrap every letters of project names in a span
			$('.wrap-l').each(function(){
				$(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='single-letter'><span class='letter'>$&</span></span>"));
			});

			// Parallax effect on project image and project name
			$(window).scroll(function() {
				var scroll = $(window).scrollTop();
				$(".project-name").css("transform","translateY(-" + scroll / 2 + "px)");
				$(".project-img").css("transform","scale(1.2) translateY(-" + scroll/10 + "px)");
			});

			this.appearAnim() // Call the appearAnim method
		})
	},
	methods: {
		appearAnim(){
			var tl = new TimelineLite();
			tl.delay(2); // Delay before animations starts

			var projectSection = $(".section");
			var projectLetters = $(".letter");

			tl.set(projectLetters, {x:-150})
				.set(this.$refs.projectImg, {width:"0"})
				.set([this.$refs.projectYear, this.$refs.projectType], {y:-40})
				.set(projectSection, {opacity:0, y:0});

			tl.to(projectLetters, 1, {x:0, ease: Expo.easeIn})
				.to(this.$refs.projectImg, 1, {width:"100%", ease: Expo.easeOut})
				.to([this.$refs.projectYear, this.$refs.projectType], 1, {y:0, ease: Expo.easeOut}, '-=1')
				.set(projectSection, {opacity:1, y:0});

			console.log("appearAnim")
		},
		leaveAnim(){
			var tl = new TimelineLite();
			var projectSection = $(".section");
			var projectLetters = $(".letter");

			tl.set(projectLetters, {x:0})
			 	.set(this.$refs.projectImg, {width:"100%"})
			 	.set([this.$refs.projectYear, this.$refs.projectType], {y:0})
			 	.set(projectSection, {opacity:1, y:0, ease: Expo.easeIn});

			tl.to(projectLetters, 1, {x:-150, ease: Expo.easeIn, immediateRender:true}, 0)
				 .to(this.$refs.projectImg, 1, {width:"0", ease: Expo.easeOut})
				 .to([this.$refs.projectYear, this.$refs.projectType], 1, {y:40, ease: Expo.easeIn}, 0)
				 .to(projectSection, 1, {opacity:0, y:-300, ease: Expo.easeIn}, 0);

			console.log("leaveAnim")
		}
	}
}
</script>
<style lang="scss">

/* Project Introduction */ 
.project-intro{
	.project-img-wrap{
		width:35vw;
		height:100vh;
		transition:0.5s ease;
		overflow:hidden;
		.project-img{
			height:100vh;
			left:0;
			width:0;
			background-position:center;
			background-size:cover;
			background-repeat:no-repeat;
			transform:scale(1.2);
			&.project-img__cesu{
				background-image:url('assets/images/cesu.jpg');
			}
		}
	}
	.project-name-wrap{
		position:absolute;
		top:15%;
		left:25vw;
		.project-name{
			font-size:11em;
			font-family:"Gilroy-ExtraBold";
			opacity:1;
			.wrap-l{
				.single-letter{
					display: inline-block;
					overflow: hidden;
					.letter{
						display: inline-block;
						transition:.5s ease;
						animation: animLetters 1s;
						animation-delay:1.5s;
						animation-play-state: paused;
					}
				}
			}
		}
	}
	.project-data-wrap{
		position:absolute;
		top:70%;
		right:15vw;
		display:flex;
		.scroll-down{
			overflow:hidden;
			.scroll-down-line{
				display:block;
				width:2px;
				height:100%;
				background-color:black;
				margin-right:20px;
				animation: scrollDownLine 1s;
				animation-iteration-count: infinite;
				animation-timing-function: ease-out;
				opacity:1;
				transition:0.5s ease;
			}
		}
		.data-container{
			.project-year-wrap, .project-type-wrap{
		    	overflow:hidden;
		    	width:auto;
		    	height:auto;
		    }
			.project-type{
		    	font-family:"Brandon-Regular";
		    	font-size:40px;
		    	line-height:1em;
			}
			.project-year{
				text-align:right;
		    	font-family:"Brandon-Bold";
		    	font-size:35px;
		    	line-height:1em;
			}
		}
	}
}

	.project-name.v-enter, .project-name.v-leave{
		opacity:0;
	}
</style>