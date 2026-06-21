// Declare a const for your name and a let for your age. console.log both.??
// const name = "smaran";        smaran 22
// let age = 22;
// console.log(name, age);


// Create a variable isRaining and set it to true. Print its type using typeof.
// let isRaining = true;
// console.log(typeof isRaining);     boolean


// Declare a variable city but don't give it a value. Print it. What does it show, and why?
// let city;
// console.log(typeof city); this prints undefined cause we have not assigned any value to the variable city

// Make a const called pi set to 3.14. Try to reassign it to 3.15 on the next line. Run it — what happens, and why?
// const pi = 3.14;
// pi = 3.15; // This will cause a TypeError
// SyntaxError: Identifier 'pi' has already been declared
//     at wrapSafe (node:internal/modules/cjs/loader:1638:18)
//     at Module._compile (node:internal/modules/cjs/loader:1680:20)
//     at Object..js (node:internal/modules/cjs/loader:1839:10)
//     at Module.load (node:internal/modules/cjs/loader:1441:32)
//     at Function._load (node:internal/modules/cjs/loader:1263:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:328:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:237:24)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:171:5)
//     at node:internal/main/run_main_module:36:49



// Create three variables: a string, a number, and a boolean. Print the typeof each.
// let name = "smaran";
// let age = 20;
// let isStudent = true;
// console.log(typeof name);so this prints string
// console.log(typeof age);so this prints number
// console.log(typeof isStudent);so this prints boolean
// console.log(typeof age);
// console.log(typeof isStudent);


// Declare let x = 5; then on the next line write x = "five";. Print typeof x before and after the change. What does this tell you about JavaScript compared to Python?
// let x = 5
// console.log(typeof x); SO THIS IS A NUMBER
// let x = "five";
// console.log(typeof x); // THIS IS A STRING
/* so type of numm prints the null value where as type of undefined prints the undefined value */


// Predict the output before running, then run to check: what does typeof null print? What does typeof undefined print? Were you right?
// let age = null;
// console.log(typeof null);  this prints an object
// let age;
// console.log(typeof age);   this prints undefined  cause value is not assigned to the variable age

// Create a variable emptyOnPurpose and a variable emptyByAccident that correctly demonstrate the difference between null and undefined. Print both, and print the typeof each. In a comment (// like this), explain in one line why one of them gives a surprising type.
// let emptyOnPurpose = null;    # so it prints null cause we have assigned the value null to the variable emptyOnPurpose
// let emptyByAccident;          # si it prints undefined cause we have not assigned any value to the variable emptyByAccident
// console.log(emptyOnPurpose, emptyByAccident);   
//console.log(typeof emptyOnPurpose, typeof emptyByAccident);  
// this prints object and undefined cause null is considered as an object in JavaScript which is a bit surprising and can lead to confusion for developers coming from other programming languages where null is not considered an object.


// This code has three mistakes. Find them, explain why each is wrong, and write the corrected version:
// javascriptconst userName = "Ravi"
// userName = "Ravi Kumar";
// let 1stPlace = "gold";
// console.log(userName, 1stPlace)
// const userName = "Ravi";
// // # the last (;) this was missing 
// userName = "Ravi Kumar";
// this is another  mistake as ravi is already declared as constant but in the username its again tryng to redisign the  const which is imposible
// // if we rellay want to  change the data for future we should avoid using const and start using the let 
// let userName = "Ravi";
// userName = "Ravi Kumar";
// let firstPlace = "gold"; // we cannot use number in the 1st sentence 
// console.log(userName, firstPlace);
// again in the last(;) this was missing                               ....  so this prins Ravi Kumar gold

