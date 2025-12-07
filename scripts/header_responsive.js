/* Taken from 'https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event' */

let lastKnownScrollPosition = 0;
let ticking = false;
let headerTag = document.getElementById('header')

function setHeaderBackground(scrollPos) {

  console.log(scrollPos)
  console.log(window.location.href)
  if (window.location.href.includes("/index.html")) {
    if (scrollPos > 500) {
      headerTag.style.backgroundColor = "black";
      headerTag.style.borderBottom = "2px";
      headerTag.style.borderColor = "white";
    } else {
      headerTag.style.backgroundColor = "rgba(0,0,0,0)";
      headerTag.style.borderBottom = "0px";
      headerTag.style.borderColor = "none";
    }
  } else {
    if (scrollPos > 10) {
      headerTag.style.backgroundColor = "black";
      headerTag.style.borderBottom = "2px";
      headerTag.style.borderColor = "white";
    } else {
      headerTag.style.backgroundColor = "rgba(0,0,0,0)";
      headerTag.style.borderBottom = "0px";
      headerTag.style.borderColor = "none";
    }
  }
  
}


document.addEventListener("scroll", (event) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    // Throttle the event to "do something" every 20ms
    setTimeout(() => {
      setHeaderBackground(lastKnownScrollPosition);
      ticking = false;
    }, 20);

    ticking = true;
  }
});