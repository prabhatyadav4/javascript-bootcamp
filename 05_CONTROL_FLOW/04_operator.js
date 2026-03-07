// Nullish Coalescing Operator (??): null undefined

let val1 = 5 ?? 10
console.log(val1)

let val2 = null ?? 10
console.log(val2)

let val3 = undefined ?? 10
console.log(val3)

let val4 = null ?? undefined ?? 5 ?? 10
console.log(val4)

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("More than 80") : console.log("Less than 80")