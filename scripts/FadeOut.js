function fadeOut() {
    var el = document.getElementById(header);
    setInterval(function() {
       var opacity = el.style.opacity;
       if (opacity > 0) {
          opacity -= 0.1;
          el.style.opacity = opacity;
       }
    }, 50);
 }