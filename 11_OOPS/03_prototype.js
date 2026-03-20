let myName = "Prabhat       "
console.log(myName.trim().length)

let myHeroes = ["Thor", "Spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidey power is ${this.spiderman}`)
    }
}

Object.prototype.Prabhat = function () {
    console.log("Prabhat is present in all objects")
}

myHeroes.Prabhat()
heroPower.Prabhat()

Array.prototype.HeyPrabhat = function () {
    console.log("Prabhat says Hello")
}

myHeroes.HeyPrabhat()
// heroPower.HeyPrabhat()

// Inheritance

const User = {
    username: "Prabhat",
    email: "prabhat@gmail.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode      ";

String.prototype.trueLength = function() {
    console.log(`${this}`)
    console.log(`True Length is: ${this.trim().length}`)
}

anotherUsername.trueLength()
myName.trueLength()
"MAYANK     ".trueLength()