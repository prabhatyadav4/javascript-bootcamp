// Stack (Primitive)    Heap(Non-Primitive)

let myYoutubeName = "hiteshchoudarydotcom"

let anotherName = myYoutubeName

anotherName = "ChaiAurCode"

console.log(myYoutubeName)
console.log(anotherName)

let userOne = {
    email: "chaiaurcode@gmail.com",
    upi: "user@upi"
}

let userTwo = userOne

userTwo.gmail = "hitesh@gmail.com"

console.log(userOne.gmail)
console.log(userTwo.gmail)