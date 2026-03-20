function setUsername(username) {
    this.username = username
    console.log("Called")
}

function createUser(username, email, password) {
    setUsername.call(this, username)
    this.email = email
    this.password = password
}

const chai = new createUser("Prabhat", "prabhat@gmail.com", 1234)
console.log(chai)