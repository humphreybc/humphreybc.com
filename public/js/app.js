$(document).ready(function() {
	checkHash();
});

$(window).on('hashchange',function() {
	checkHash();
});

$("#view-projects-link").click(showprojects);

function checkHash() {
    if (window.location.hash === "#projects") {
	    showprojects(); 
	} else {
		hideprojects();
	}
}

function showprojects() {
	$("#front-page").fadeOut(500);
	$("body").css("background-color", "#c46d46");
	$("#projects").delay(500).fadeIn(500);
}

function hideprojects() {
	$("#projects").fadeOut(500);
	$("body").css("background-color", "#81ad45");
	$("#front-page").delay(500).fadeIn(500);
}