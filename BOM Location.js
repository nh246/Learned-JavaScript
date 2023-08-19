// select dom element
const href = document.getElementById("href");
const hostname = document.getElementById("hostname");
const pathname = document.getElementById("pathname");
const protocol = document.getElementById("protocol");
const port = document.getElementById("port");

// show window.location object property values
href.innerHTML = "Window href: " + location.href;
hostname.innerHTML = "Window hostname: " + location.hostname;
pathname.innerHTML = "Window pathname: " + location.pathname;
protocol.innerHTML = "Window protocol: " + location.protocol;
port.innerHTML = "Window port: " + location.port;

function loadW3s() {
    window.location.assign("https://www.w3schools.com");
}

// The window.location.assign() method loads a new document.

// Example
// Load a new document:


function newDoc() {
  window.location.assign("https://www.w3schools.com")
}

