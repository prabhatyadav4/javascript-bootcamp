function sayMyName(){
    console.log("P")
    console.log("R")
    console.log("A")
    console.log("B")
    console.log("H")
    console.log("A")
    console.log("T")
}

sayMyName()

function addTwoNumbers(number1, number2){
        console.log(number1 + number2)
}

const result = addTwoNumbers(2, 4)

console.log("Result: ", result)

function sumTwoNumbers(number1, number2){
    let ans = number1 + number2
    return ans
    console.log("Prabhat")  // Unreachable code
}

const ans = sumTwoNumbers(2, 4)

console.log("Result: ", ans)

function loginUserMessage(username){
    if(!username){
        console.log("Please enter the username")
        return
    }
    return `${username} just logged in.`
}

console.log(loginUserMessage("Prabhat"))

