/* Toggle between adding and removing the "responsive" class to topnav when user clicks icon*/
function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
			x.className += "responsive";
	} else {
			x.className = "topnav";
	}
}

// Creates smooth scrolling for links
$('.smooth-scroll').click(function(){ // Creates a function for all links ("a") on the page
	// console.log($($(this).attr('href'))) Prints out lower property to view in console for troubleshooting
    $('html, body').animate({ // Animates elements within "body" and "html", but uses both for browser compatibility
        scrollTop: $( $(this).attr('href') ).offset().top // "scrollTop" is a selector property. "(this).attr('href')" just returns the string of the link. ".offset()" returns a new object with the "top" and "left" properties(location) of the element on the page. ".top" only returns the top properties 
    }, 500); // Sets the scroll speed in milliseconds
    return false;
});
