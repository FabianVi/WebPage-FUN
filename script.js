let last_known_scroll_position = 0;
let ticking = false;

var pacman = document.getElementsByClassName("pacman")[0];

function doSomething(scroll_pos) {
  
    if(scroll_pos >= pacman.scrollHeight) {

      let n = Math.floor((scroll_pos-pacman.scrollHeight)/(pacman.clientHeight));
      let relative_pos = (scroll_pos - (pacman.scrollHeight + pacman.clientHeight*n));
      let factor = (pacman.clientWidth+120) / (pacman.clientHeight);

      pacman.style.top = 250 + 258*n + "px";


      if((n%2)==0)
      {
        pacman.style.left = relative_pos*factor - pacman.clientWidth-120 + "px";
        document.getElementsByClassName("pacman")[0].style.transform = "scaleX(1)";

      } else {
        document.getElementsByClassName("pacman")[0].style.transform = "scaleX(-1)";
        pacman.style.left = window.innerWidth+120-relative_pos*factor + "px";
      }

    } else {
      pacman.style.left = -pacman.clientWidth-120 + "px";
    }

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