// What is JSON ?
//     JSON stands for JavaScript Object Notation
// JSON is a lightweight data interchange format
// JSON is language independent *
//     JSON is "self-describing" and easy to understand
//         * The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only.Code for reading and generating JSON data can be written in any programming language.

{
    "employees" : [
        { "firstName": "John", "lastName": "Doe" },
        { "firstName": "Anna", "lastName": "Smith" },
        { "firstName": "Peter", "lastName": "Jones" }
    ]
}

let text = '{"employees":[' +
    '{"firstName":"John","lastName":"Doe" },' +
    '{"firstName":"Anna","lastName":"Smith" },' +
    '{"firstName":"Peter","lastName":"Jones" }]}';

const obj = JSON.parse(text);
document.getElementById("demo").innerHTML =
    obj.employees[1].firstName + " " + obj.employees[1].lastName;