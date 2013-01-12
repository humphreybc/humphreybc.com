$(document).ready(function() {
	checkHash();
});

$(window).on('hashchange',function() {
 	checkHash();
 });

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
	$("#front-page").hide();
	$("body.main").css("background-color", "#c46d46");
	$("#projects").show();
}

function hideprojects() {
	$("#projects").hide();
	$("body.main").css("background-color", "#81ad45");
	$("#front-page").show();
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