const user = {
    username: "prabhat",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to the website.`)
        console.log(this)
    }
}

user.welcomeMessage()
user.username = "sam"
// user.welcomeMessage()
console.log(this) 

function chai() {
    console.log(this)
}

chai()

function one() {
    let username = "prabhat"
    console.log(this.username)
}

one()

const two = function two() {
    let username = "prabhat"
    console.log(this.username)
}

two()

//-----------------------------------------ARROW FUNCTION--------------------------------------

const three = () => {
    let username = "prabhat"
    console.log(username)
}

three()

// Explicit return
const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(2, 4))

// Implicit return
const addThree = (num1, num2, num3) => (num1 + num2 + num3)
console.log(addThree(2, 4, 6))

const userName = () => ({username: "prabhat"})
console.log(userName())