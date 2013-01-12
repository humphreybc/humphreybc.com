var checkHash, darkTheme, hideprojects, lightTheme, showprojects;

checkHash = function() {
  if (window.location.hash === "#projects") {
    return showprojects();
  } else {
    return hideprojects();
  }
};

showprojects = function() {
  $("#front-page").hide();
  return $("#projects").show();
};

hideprojects = function() {
  $("#projects").hide();
  return $("#front-page").show();
};

darkTheme = function() {
  $(".blog").removeClass("light");
  return $(".blog").addClass("dark");
};

lightTheme = function() {
  $(".blog").removeClass("dark");
  return $(".blog").addClass("light");
};

$(document).ready(function() {
  return checkHash();
});

$(window).on("hashchange", function() {
  return checkHash();
});

$("#dark-theme").click(darkTheme);

$("#light-theme").click(lightTheme);
