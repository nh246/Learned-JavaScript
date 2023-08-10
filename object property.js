// The block of code inside of the for...in loop will be executed once for each property.

// Looping through the properties of an object:

// Example
const person = {
  fname:" John",
  lname:" Doe",
  age: 25
};

for (let x in person) {
  txt += person[x]; //here the code is: txt= txt + person[x];
}

// Adding New Properties
// You can add new properties to an existing object by simply giving it a value.

// Assume that the person object already exists - you can then give it new properties:

// Example
person.nationality = "English";


// Deleting Properties
// The delete keyword deletes a property from an object:

// Example
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

delete person.age;

// or delete person["age"];

// Example
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

delete person["age"];

// Nested Arrays and Objects
// Values in objects can be arrays, and values in arrays can be objects:

// Example
const myObj = {
  name: "John",
  age: 30,
  cars: [
    {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
    {name:"BMW", models:["320", "X3", "X5"]},
    {name:"Fiat", models:["500", "Panda"]}
  ]
}
// To access arrays inside arrays, use a for-in loop for each array:

// Example
for (let i in myObj.cars) {
  x += "<h1>" + myObj.cars[i].name + "</h1>";
  for (let j in myObj.cars[i].models) {
    x += myObj.cars[i].models[j];
  }
}