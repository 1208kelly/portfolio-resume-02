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

function titleAppear(){
    var scrollTitle = document.querySelector('.scroll-title');
    var titlePosition = scrollTitle.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    if(titlePosition < screenPosition){
        scrollTitle.classList.add('title-appear');
    }
}

window.addEventListener('scroll', titleAppear);