class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username: ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`)
    }
}

const chai  = new Teacher("chai", "chai@gmail.com", "123")
chai.addCourse()

const MasalaChai = new User("MasalaChai")
MasalaChai.logMe()
chai.logMe()

console.log(chai == MasalaChai)
console.log(chai instanceof User)
console.log(chai instanceof Teacher)
console.log(MasalaChai instanceof Teacher)
console.log(MasalaChai instanceof User)