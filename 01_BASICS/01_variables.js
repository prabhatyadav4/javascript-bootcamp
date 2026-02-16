const accountId = 13445
let accountEmail = "prabhat@gmail.com"
var accountPassword = "12345"
accountCity = "Muzaffarpur"

// accountId = 2 // not allowed

/*
Prefer not to use 'var' because of issue in block scope and functional scope.
*/

accountEmail = "kumar@gmail.com"
accountPassword = "4321"
accountCity = "Bhopal"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity])