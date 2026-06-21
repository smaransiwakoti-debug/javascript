// # primitive data types

// const { captureOwnerStack } = require("react");

// 7 types of primitive data types in JavaScript
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

// const score = 100
// const scoreValue = 100.3


// const bigNumber = 1234567890123456789012345678901234567890n


// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId); // false


// const heros = ["Batman", "Superman", "Wonder Woman"]

// const person = {
//   name: "Bruce",
//   age: 35,
// }


// reference (non primitive) data types
// 1. Object
// 2. Array
// 3. Function  
// const myFunction = function() {
//   console.log("Hello World");
// }
// console.log(typeof scoreValue); // bigint


// +++++++++++++++++++++++++++++++++


// stack(primitive data types) --> value is stored in the variable
// heap(reference data types) --> address is stored in the variable
let myYoutubename = "smaran"

let anothername = myYoutubename
anotherName = "smaran 22"

console.log(myYoutubename); // smaran
console.log(anotherName); // smaran 22

let userOne = {
  email: "smaran.siwakoti@gmail.com",
  upi: "smaran@okaxis",
}
/* so this shows that when we assign a primitive data type to another variable, it creates a copy of the value. So when we change the value of myYoutubename, it does not affect anotherName because it holds a copy of the original value. This is different from reference data types where both variables would point to the same object in memory, and changing one would affect the other. */

let userTwo = userOne

userTwo.email = "smaran22@gmail.com"
console.log(userOne.email); // smaran.siwakoti@gmail.com
console.log(userTwo.email); // smaran22@gmail.com

