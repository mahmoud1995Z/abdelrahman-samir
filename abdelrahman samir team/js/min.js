


/*********** start of sticky nav */


// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyNav()};


// Get the navbar
var navbar = document.getElementById("navBar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
   
  } else 
  {
    navbar.classList.remove("sticky");
  }
}

/*********** end of sticky nav */
/*** loading page */
$("document").ready(function(){

 $(".loader-cover").fadeOut(1000) });
  
  