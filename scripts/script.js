/* globals $, SC */

$(document).ready(function() {
	$("body").hide().fadeIn(2000);
	$("span").on('mouseenter',function() {
		$(".icon").fadeIn(1000);
		$("span").fadeOut(1000);
	});
	$(".icon").on('mouseleave', function() {
		$("span").fadeIn(1000);
		$(".icon").fadeOut(1000);
	});
});
