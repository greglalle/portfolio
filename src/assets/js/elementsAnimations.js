//Animate on scroll
//Cache reference to window and animation items
var $animation_elements = $('.title, .p, .p-img-right, .next-project-name > a, .next-project > p');
var $window = $(window);
var $text = $('.text-container');
var $title = $('.title');
var $paragraphe = $('.p');
var $imgRight = $('.p-img-right');
var $nextProject = $('.next-project-name');

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
      	//$text.addClass('text-in-view');
      	$element.addClass('visible');
  		// $title.addClass('visible');
  		// $paragraphe.addClass('visible');
    } else {
  		$element.removeClass('visible');
    }
  });
}