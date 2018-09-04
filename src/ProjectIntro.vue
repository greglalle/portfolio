<template>
	<div class="project-intro">
		<div class="project-img-wrap">
			<div class="project-img" :class="img[projectIndex]"></div>
		</div>
		<div class="project-name-wrap">
			<h1 class="project-name"><span class="wrap-l">{{ title[projectIndex] }}</span></h1>
		</div>
		<div class="project-data-wrap">
			<div class="scroll-down">
				<div class="scroll-down-line"></div>
			</div>
			<div class="data-container">
				<div class="project-type-wrap">
					<div class="project-type">{{ type[projectIndex] }}</div>
				</div>
				<div class="project-year-wrap">
					<div class="project-year">{{ date[projectIndex] }}</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
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

		})
	}
}
</script>