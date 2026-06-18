const accountId = 144553
let accountEmail = "smaran.siwakoti@gmail.com"
var accountPassword = "12345"
accountCity = "kathmandu"
let accountState;

//acoountId = 2 // not allowded

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Itahari"

console.log(accountId);

/*
prefer not to use var because of 
in block scope and functional scope 
*/
console.table([accountId, accountEmail, accountEmail, accountPassword, accountCity, accountState])