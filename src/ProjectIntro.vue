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
	mounted: function () {
		this.$nextTick(function () {

			// Wrap every letters of project names in a span
			$('.wrap-l').each(function(){
				$(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='single-letter'><span class='letter'>$&</span></span>"));
			});

			// Parallax effect on project image and project name
			$(window).scroll(function() {
				var scroll = $(window).scrollTop();
				$(".project-name").css("transform","translateY(-" + scroll/5 + "px)");
				$(".project-img").css("transform","scale(1.2) translateY(-" + scroll/10 + "px)");
			});

			this.appearAnim() // Call the appearAnim method
		})
	},
	methods: {
		appearAnim(){
			var tl = new TimelineLite();
			tl.delay(0.75); // Delay before animations starts

			var projectLetters = $(".letter");

			tl.set(projectLetters, {x:-700})
				.set(this.$refs.projectImg, {width:"0"})
				.set([this.$refs.projectYear, this.$refs.projectType], {y:-200});

			tl.to(projectLetters, 1.5, {x:0, ease: Expo.easeOut})
				.to(this.$refs.projectImg, 1.5, {width:"100%", ease: Expo.easeOut})
				.to([this.$refs.projectYear, this.$refs.projectType], 1, {y:0, easeOut: Expo.ease});

			// tl.set(this.$refs.projectImg, {width:"0"});
			// tl.to(this.$refs.projectImg, 1, {width:"100%", ease: Expo.ease, immediateRender:false});

			// tl.set([this.$refs.projectYear, this.$refs.projectType], {y:-200});
			// tl.to([this.$refs.projectYear, this.$refs.projectType], 1, {y:0, ease: Expo.ease, immediateRender:false});

			console.log("appearAnim")
		}
	}
}
</script>
<style lang="scss">
	.project-name{
		opacity:1;
		transition: all .3s ease;
	}
	.project-name.v-enter, .project-name.v-leave{
		opacity:0;
	}
</style>