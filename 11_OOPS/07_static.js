class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`)
    }

    createId() {            // static createId(): prevents to access this method
        return "123"
    }
}

const chai = new User("Prabhat") 
console.log(chai.createId())

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const coffee = new Teacher("Hitesh", "hitesh@gmail.com")
coffee.logMe()
console.log(coffee.createId())