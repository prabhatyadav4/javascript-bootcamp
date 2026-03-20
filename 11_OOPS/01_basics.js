// Object Literal

const user = {
    username: "Prabhat",
    loginCount: 2,
    isLoggedIn: true,

    getUserDetails: function(){
        console.log("Got user details.")
        console.log(`Username: ${this.username}`)
        console.log(this)
    }
}

console.log(user.username)
console.log(user.getUserDetails())
console.log(this)   // Node environment has {} but browser has everything

// Constructor

function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    return this;    // if not written, it stills print, it is implicitly defined
}

const newUser1 = new User("Prabhat", 20, true)  // new keyboard provide new instances
const newUser2 = new User("Mayank", 40, true)
console.log(newUser1)
console.log(newUser2)
console.log(newUser1.constructor)
console.log(newUser1 instanceof User)