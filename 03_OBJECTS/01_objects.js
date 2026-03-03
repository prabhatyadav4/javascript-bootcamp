// Object literals

const mySym = Symbol("key1")

const jsUser = {
    name : "Prabhat",
    "full name" : "Prabhat Kumar",
    [mySym] : "mykey1",
    age : 19,
    location : "Jaipur",
    email : "osrprabhatyadav4@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log(typeof jsUser[mySym])

jsUser.email = "prabhat@gmail.com"
console.log(jsUser.email)
// Object.freeze(jsUser)
console.log(jsUser.email)

jsUser.greeting1 = function() {
    console.log("Hello JS User")
}

jsUser.greeting2 = function() {
    console.log(`Hello JS user, I am ${this.name}`)
}

console.log(jsUser.greeting1())
console.log(jsUser.greeting2())