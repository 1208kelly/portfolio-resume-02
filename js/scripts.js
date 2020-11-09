// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


//------- Text Slide In -------------------------------------------------------------------------------------------*/

var element = document.getElementsByClassName("panel-header");
element.addEventListener("animationstart", listener, false);
element.addEventListener("animationend", listener, false);
element.addEventListener("animationiteration", listener, false);

element.className = "slide-left";

function slideStart(event) {
  var l = document.createElement("li");
  switch(event.type) {
    case "animationstart":
      l.innerHTML = "Started: elapsed time is " + event.elapsedTime;
      break;
    case "animationend":
      l.innerHTML = "Ended: elapsed time is " + event.elapsedTime;
      break;
    case "animationiteration":
      l.innerHTML = "New loop started at time " + event.elapsedTime;
      break;
  }
  document.getElementById("output").appendChild(l);
}