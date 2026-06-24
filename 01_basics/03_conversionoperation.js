let score = undefined

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1

let isLoggedIn = "smaran"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

// 1 => true; 0=>false
// "" => false
// " smaran " => true

let somenumber = 33

let stringnumber = String(somenumber)
//console.log(stringnumber);
//console.log(typeof stringnumber);


// *********operations *******************//

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2 +2);
// console.log(2-2); 
// console.log(2*2);
// console.log(2**3);
// console.log(2/2);
// console.log(2%3); // remainder

let str1 = "smaran"
let str2 = " hello"

let str3 = str1 + str2
console.log(str3);

console.log(+true);
console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++
console.log(gameCounter);

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



