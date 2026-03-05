let a = 10
const b = 20
var c = 30

if(true){
    let a = 100
    const b = 200
    var c = 300
    
    console.log("Inner: ", a)
    console.log("Inner: ", b)
    console.log("Inner: ", c)
}

console.log("Outer: ", a)
console.log("Outer: ", b)
console.log("Outer: ", c)