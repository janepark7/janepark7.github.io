/* globals $, SC */

$(document).ready(function() {
	$(".up").click(function() {
		$('html, body').animate({ "scrollTop": $("#hero").offset().top }, 1000);
		return false;
	});
});
