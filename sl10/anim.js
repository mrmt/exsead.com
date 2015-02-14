var scrollSpeed = 50; 		// Speed in milliseconds
var step = 1; 			// How many pixels to move per step
var imageWidth = 2769;		// Background image width
var headerWidth = 1280;		// How wide the header is.
var current = 0;			// The current pixel row
var current2 = -700;
			
// The pixel row where to start a new loop
var restartPosition = -(imageWidth - headerWidth);
			
function scrollBg(){
    // Go to next pixel row.
    current -= step;
    current2 -= step;

    // If at the end of the image, then go to the top.
    if (current == restartPosition){ current = 0; }
    if (current2 == restartPosition){ current2 = 0; }

    // Set the CSS of the header.
    $('#banner').css("background-position",current+"px 0");
    $('#banner3').css("background-position",current+"px 0");
    $('#banner2').css("background-position",current2+"px 0");
}
			
// Calls the scrolling function repeatedly
var init = setInterval("scrollBg()", scrollSpeed);
