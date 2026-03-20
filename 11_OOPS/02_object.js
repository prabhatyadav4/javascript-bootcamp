function multiplyBy5(num) {
    return num*5
}

const power = multiplyBy5.power = 2

console.log(multiplyBy5(5))
console.log(power)
console.log(multiplyBy5.prototype)

function createUser(username, score) {
    this.username = username 
    this.score = score
}

createUser.prototype.increment = function() {
    this.score++;
}

createUser.prototype.printMe = function() {
    console.log(`Score is ${this.score}`)
}

const chai = new createUser("chai", 25)
const coffee = new createUser("coffee", 250)

chai.printMe()
coffee.increment()
coffee.printMe()