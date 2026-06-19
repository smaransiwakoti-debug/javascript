// # primitive data types

// 7 types of primitive data types in JavaScript
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

const score = 100
const scoreValue = 100.3


constbigNumber = 1234567890123456789012345678901234567890n


const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false


const heros = ["Batman", "Superman", "Wonder Woman"]

const person = {
  name: "Bruce",
  age: 35,
}


// reference (non primitive) data types
// 1. Object
// 2. Array
// 3. Function  
const myFunction = function() {
  console.log("Hello World");
}
console.log(typeof scoreValue); // bigint
