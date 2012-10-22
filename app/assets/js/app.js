$(document).ready(function() {
	checkHash();
	// injectArticle();
});

$(window).on('hashchange',function() {
	checkHash();
});

$("#view-projects-link").click(showprojects);

$("#dark-theme").click(darkTheme);
$("#light-theme").click(lightTheme);

function checkHash() {
    if (window.location.hash === "#projects") {
	    showprojects(); 
	} else {
		hideprojects();
	}
}

function showprojects() {
	$("#front-page").fadeOut(500);
	$("body.main").css("background-color", "#c46d46");
	$("#projects").delay(500).fadeIn(500);
}

function hideprojects() {
	$("#projects").fadeOut(500);
	$("body.main").css("background-color", "#81ad45");
	$("#front-page").delay(500).fadeIn(500);
}

function darkTheme() {
	$(".blog").removeClass('light');
	$(".blog").addClass('dark');
}

function lightTheme() {
	$(".blog").removeClass('dark');
	$(".blog").addClass('light');
}

// function injectArticle() {
// 	if (window.location.pathname == "/blog.html") {
// 		$('#blog-posts').load('articles/test.html');
// 	}
// }