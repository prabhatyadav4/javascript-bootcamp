const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function(accumulator, currentValue) {
    console.log(`Accumulator: ${accumulator}, Current Value: ${currentValue}`)
    return accumulator + currentValue
}, 0)

console.log(myTotal)

// Using Arrow Function

const mySum = myNums.reduce( (accumulator, currentValue) => (accumulator + currentValue), 0)
console.log(mySum)

// Example 

const shoppingCart =  [
    {
        itemName : "JS Course",
        price : 2999
    },
    {
        itemName : "Java Course",
        price : 1999
    },
    {
        itemName : "DS Course",
        price : 3999
    },
    {
        itemName : "Python Course",
        price : 999
    },
    {
        itemName : "DSA Course",
        price : 4999
    }
]

const totalPrice = shoppingCart.reduce( (accumulator, item) => (accumulator + item.price), 0)
console.log(totalPrice)