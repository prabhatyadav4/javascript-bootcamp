let score = "0"

console.log(typeof score);
console.log(typeof(score));

let valueNumber = Number(score)
console.log(typeof valueNumber);
console.log(valueNumber)

// "33"         => 33
// "33abc"      => NaN (NotaNumber)
// true/false   => 1/0
// "Prabhat"    => NaN

let isLoggedIn = "5"
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1            => true
// 0            => false
// "Prabhat"    => true
// ""           => false

let someNumber = 33
let StringNumber = String(someNumber)
console.log(StringNumber)
console.log(typeof StringNumber)