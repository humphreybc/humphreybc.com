function greeting(){
  var date = new Date();
  var current_hour = date.getHours();

  if(current_hour < 12) {
    return 'morning';
  }

  if(current_hour < 17) {
    return 'afternoon';
  }

  return 'evening';
}

  document.getElementById("time").textContent=greeting();

// Because Tumblr is stupid and doesn't allow 
// high res images in text posts
function highResImage() {
    $('.text.post img').each(function () {
        $(this).attr('src', $(this).attr('src').replace("500.png", "1280.png"));
        $(this).attr('src', $(this).attr('src').replace("500.jpg", "1280.jpg"));
    });
}

$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
        highResImage();
    }
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-45773157-1', 'humphreybc.com');
ga('send', 'pageview');

highResImage();