// Method Reuse
// With the call() method, you can write a method that can be used on different objects.

// All Functions are Methods
// In JavaScript all functions are object methods.

// If a function is not a method of a JavaScript object, it is a function of the global object (see previous chapter).

// The example below creates an object with 3 properties, firstName, lastName, fullName.

// Example
const person = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

// This will return "John Doe":
// person.fullName();  
// In the example above, this refers to the person object.

// this.firstName means the firstName property of this.

// Same as:

// this.firstName means the firstName property of person.

// The JavaScript call() Method
// The call() method is a predefined JavaScript method.

// It can be used to invoke (call) a method with an owner object as an argument (parameter).

// With call(), an object can use a method belonging to another object.

// This example calls the fullName method of person, using it on person1:

// Example
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

// This will return "John Doe":
person.fullName.call(person1);

// This example calls the fullName method of person, using it on person2:

// Example
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

// This will return "Mary Doe"
person.fullName.call(person2);

// The call() Method with Arguments
// The call() method can accept arguments:

// Example
const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

person.fullName.call(person1, "Oslo", "Norway");

