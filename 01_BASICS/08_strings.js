const firstName = "Prabhat"
const lastName = "Kumar"

console.log(firstName + lastName)

// String Interpolation

console.log(`Hello, my first name is ${firstName} and my last name is ${lastName}`)

const gameName = new String("Prabhat")

console.log(gameName)
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(6))
console.log(gameName.indexOf('a'))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-8, 4)
console.log(anotherString)

const trimString = "    Prabhat    "
console.log(trimString)
console.log(trimString.trim())

const url = "https://prabhat.com/prabhat%20kumar%20portfolio.com"
console.log(url.replaceAll("%20", "-"))
console.log(url.includes("prabhat"))

const splitString = "Name-Age-Class-Address"
console.log(splitString.split("-"))