// if

// <, >, <=, >=, ==, !=, ===, !==

const isUserLoggedIn = true

if (2 != 3) {
    console.log("executed")
}

const temperature = 41

if(temperature <= 50){
    console.log("Temperature is lesser than 50.")
}
else{
    console.log("Temperature is greater than 50.")
}

// scope
const score = 200

if(score > 100){
    const power = "Fly"
    console.log(`User power: ${power}`)
}

// console.log(power)       // power is out of score

// Implicit scope
const balance = 1000

if(balance > 500)   console.log("Test1"),
console.log("Test2");

// Nesting: if, else if, else

const distance = 1020
if(distance < 500){
    console.log("Less than 500.")
}
else if(distance < 750){
    console.log("Less than 750.")
}
else if(distance < 1000){
    console.log("Less than 1000.")
}
else{
    console.log("Less than 1200")
}

// AND , OR

const debitCard = true
const userLoggedIn = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true
const guestLogin = false

if(debitCard && userLoggedIn){
    console.log("Allow to buy course.")
}
if(LoggedInFromGoogle || LoggedInFromEmail || guestLogin){
    console.log("User logged in.")
}