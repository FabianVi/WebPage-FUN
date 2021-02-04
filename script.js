let last_known_scroll_position = 0;
let ticking = false;

var pacman = document.getElementsByClassName("pacman");

function doSomething(scroll_pos) {
  
    if(scroll_pos>100)
        pacman[0].style.left = scroll_pos - 100 - 440 + "px";
    else
        pacman[0].style.left = -440  + "px";
}

document.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});