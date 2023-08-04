// Method	Description
// new Map()	Creates a new Map
// set()	Sets the value for a key in a Map
// get()	Gets the value for a key in a Map
// delete()	Removes a Map element specified by the key
// has()	Returns true if a key exists in a Map
// forEach()	Calls a function for each key/value pair in a Map
// entries()	Returns an iterator with the [key, value] pairs in a Map
// Property	Description
// size	Returns the number of elements in a Map

// Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);

  // Difference between maps and objects
  
// Object	Map
// Iterable	Not directly iterable	Directly iterable
// Size	Do not have a size property	Have a size property
// Key Types	Keys must be Strings (or Symbols)	Keys can be any datatype
// Key Order	Keys are not well ordered	Keys are ordered by insertion
// Defaults	Have default keys	Do not have default keys
