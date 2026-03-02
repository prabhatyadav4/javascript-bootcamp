/*
Primitive Data Types:
1. String
2. Number
3. Boolean
4. null
5. undefined
6. Symbol
7. BigInt

Non-Primitive Data Types:
1. Array
2. Objects
3. Functions
*/

const score = 100
const scoreValue = 100.3 

const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId)

const bigNumber = 12345678998765432123456789n

const hereos = ["IronMan", "Hulk", "DoctorStrange"]

let myObj = {
    name : "Prabhat",
    age : 20
}

const myFunction = function() {
    console.log("Hellow World")
}