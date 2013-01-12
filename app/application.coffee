checkHash = ->
  if window.location.hash is "#projects"
    showprojects()
  else
    hideprojects()

showprojects = ->
  $("#front-page").hide()
  $("#projects").show()

hideprojects = ->
  $("#projects").hide()
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