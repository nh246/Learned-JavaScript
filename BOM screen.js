// The window.screen object contains information about the user's screen.
// Window Screen
// The window.screen object can be written without the window prefix.

// Properties:

screen.width
screen.height
screen.availWidth
screen.availHeight
screen.colorDepth
screen.pixelDepth

// The screen.width property returns the width of the visitor's screen in pixels.

// Example
// Display the width of the screen in pixels:

document.getElementById("demo").innerHTML =
"Screen Width: " + screen.width;
ocument.getElementById("demo").innerHTML =
"Available Screen Width: " + screen.availWidth;

document.getElementById("demo").innerHTML =
"Screen Color Depth: " + screen.colorDepth;

document.getElementById("demo").innerHTML =
"Screen Pixel Depth: " + screen.pixelDepth;