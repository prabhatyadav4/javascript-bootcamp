// Class based Getter and Setter

class User {
    // In classes, JS scans the entire class first (hoisting),
    // so getters/setters are ready before constructor runs.

    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }

    set email(value) {
        this._email = value
    }

    get password() {
        return `${this._password}f4f4f4`
    }

    set password(value) {
        this._password = value
    }
}

const chai = new User("prabhat@gmail.com", "abc")
console.log(chai)
console.log(chai.email)
console.log(chai.password)

// defineProperty based Getter and Setter

function Client(email,password) {
    // In constructor functions, JS runs line by line,
    // so defineProperty must come BEFORE assignment.

    Object.defineProperty(this, 'email', {
        get: function() {
            return this._email.toUpperCase()
        },
        set: function(value) {
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function() {
            return `${this._password}f4f4f4`
        },
        set: function(value) {
            this._password = value
        }
    })

    this.email = email
    this.password = password
}

const user = new Client("prabhat@gmail.com", "123")
console.log(user)
console.log(user.email)
console.log(user.password)

// object based Getter and Setter

const Member = {
    _email : "prabhat@gmail.com",
    _password : "911",

    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value
    },

    get password() {
         return `${this._password}f4f4f4`
    },

    set password(value) {
        this._password = value
    }
}

console.log(Member)
console.log(Member.email)
console.log(Member.password)