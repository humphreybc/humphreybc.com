checkHash = ->
  if window.location.hash is "#projects"
    showprojects()
  else
    hideprojects()

showprojects = ->
  $("#front-page").hide()
  $("body.main").css "background-color", "#c46d46"
  $("#projects").show()

hideprojects = ->
  $("#projects").hide()
  $("body.main").css "background-color", "#81ad45"
  $("#front-page").show()

darkTheme = ->
  $(".blog").removeClass "light"
  $(".blog").addClass "dark"

lightTheme = ->
  $(".blog").removeClass "dark"
  $(".blog").addClass "light"
  
$(document).ready ->
  checkHash()

$(window).on "hashchange", ->
  checkHash()

$("#dark-theme").click darkTheme
$("#light-theme").click lightTheme