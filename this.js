const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

// What is this?
// In JavaScript, the this keyword refers to an object.

// Which object depends on how this is being invoked (used or called).

// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

{/* <button onclick="this.style.display='none'">
  Click to Remove Me!
</button> */}


// function nh(){
//   let names ="nazmul";
// }

// nh()

// =============================== immiedately invoked funcion ================================

// putting the function in a paranthesis 
// exaple :


// wh use this to get rid of some global scope polution 
(function nhr(){
  console.log(`DM in demand`);
})();
// N:B = must use ; after the immediately invoked function because it dosent know when to stop 

// Example of arrow function 

(()=>{
  console.log("This is an example");
}

)();
