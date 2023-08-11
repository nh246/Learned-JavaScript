// JavaScript Object Constructors
// Example
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// It is considered good practice to name constructor functions with an upper-case first letter.

// About this
// In a constructor function this does not have a value. It is a substitute for the new object. The value of this will become the new object when a new object is created.

// Object Types (Blueprints) (Classes)
// The examples from the previous chapters are limited. They only create single objects.

// Sometimes we need a "blueprint" for creating many objects of the same "type".

// The way to create an "object type", is to use an object constructor function.

// In the example above, function Person() is an object constructor function.

// Objects of the same type are created by calling the constructor function with the new keyword:

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

// Adding a Property to an Object
// Adding a new property to an existing object is easy:

// Example
myFather.nationality = "English";

// The property will be added to myFather. Not to myMother. (Not to any other person objects).

// Adding a Method to an Object
// Adding a new method to an existing object is easy:

// Example
myFather.name = function () {
  return this.firstName + " " + this.lastName;
};
// The method will be added to myFather. Not to myMother. (Not to any other person objects).

