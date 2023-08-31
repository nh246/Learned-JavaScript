// A common use of JSON is to exchange data to/from a web server.

// When receiving data from a web server, the data is always a string.

// Parse the data with JSON.parse(), and the data becomes a JavaScript object.

// Sending Data
// If you have data stored in a JavaScript object, you can convert the object into JSON, and send it to a server:

// Example
const myObj = {name: "John", age: 31, city: "New York"};
const myJSON = JSON.stringify(myObj);
window.location = "demo_json.php?x=" + myJSON;

// Receiving Data
// If you receive data in JSON format, you can easily convert it into a JavaScript object:

// Example
const myJSON = '{"name":"John", "age":31, "city":"New York"}';
const myObj = JSON.parse(myJSON);
document.getElementById("demo").innerHTML = myObj.name;

// SON From a Server
// You can request JSON from the server by using an AJAX request

// As long as the response from the server is written in JSON format, you can parse the string into a JavaScript object.

// Example
// Use the XMLHttpRequest to get data from the server:

const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myObj = JSON.parse(this.responseText);
  document.getElementById("demo").innerHTML = myObj.name;
};
xmlhttp.open("GET", "json_demo.txt");
xmlhttp.send();

// Array as JSON
// When using the JSON.parse() on JSON derived from an array, the method will return a JavaScript array, instead of a JavaScript object.

// Example
// JSON returned from a server as an array:

const xmlhttp = new XMLHttpRequest();
xmlhttp.onload = function() {
  const myArr = JSON.parse(this.responseText);
  document.getElementById("demo").innerHTML = myArr[0];
  }
}
xmlhttp.open("GET", "json_demo_array.txt", true);
xmlhttp.send();