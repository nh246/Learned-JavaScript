// Function Declarations
// Earlier in this tutorial, you learned that functions are declared with the following syntax:

function functionName(parameters) {
  // code to be executed
}
// Declared functions are not executed immediately. They are "saved for later use", and will be executed later, when they are invoked (called upon).

// Example
function myFunction(a, b) {
  return a * b;
}

// Function Expressions
// A JavaScript function can also be defined using an expression.

// A function expression can be stored in a variable:

// Example
const x = function (a, b) {return a * b};
After a function expression has been stored in a variable, the variable can be used as a function:

// Example
const x = function (a, b) {return a * b};
let z = x(4, 3);

// The function above is actually an anonymous function (a function without a name).

// Functions stored in variables do not need function names. They are always invoked (called) using the variable name.

// The function above ends with a semicolon because it is a part of an executable statement.

// Function Hoisting
// Earlier in this tutorial, you learned about "hoisting" (JavaScript Hoisting).

// Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.

// Hoisting applies to variable declarations and to function declarations.

// Because of this, JavaScript functions can be called before they are declared:

myFunction(5);

function myFunction(y) {
  return y * y;
}
// Functions defined using an expression are not hoisted.


// Self-Invoking Functions
// Function expressions can be made "self-invoking".

// A self-invoking expression is invoked (started) automatically, without being called.

// Function expressions will execute automatically if the expression is followed by ().

// You cannot self-invoke a function declaration.

// You have to add parentheses around the function to indicate that it is a function expression:

// Example
(function () {
  let x = "Hello!!";  // I will invoke myself
})();

// Arrow Functions
// Arrow functions allows a short syntax for writing function expressions.

// You don't need the function keyword, the return keyword, and the curly brackets.

// Example
// ES5
var x = function(x, y) {
  return x * y;
}

// ES6
const x = (x, y) => x * y;

// Arrow functions do not have their own this. They are not well suited for defining object methods.

// Arrow functions are not hoisted. They must be defined before they are used.

// Using const is safer than using var, because a function expression is always constant value.

// You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them:

// Example
const x = (x, y) => { return x * y };

