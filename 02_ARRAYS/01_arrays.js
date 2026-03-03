const myArr1 = [0, 1, 2, 3, 4, 5]
const myHeroes = ["Ironman", "Hulk", "Spiderman"]

console.log(myArr1)
console.log(myHeroes[0])

const myArr2 = new Array(1, 2, 3, 4, 5)
console.log(myArr2)

// Array methods

myArr1.push(6)
myArr1.push(7)
myArr1.push(7)
myArr1.pop()

console.log(myArr1)

myArr1.unshift(9)
myArr1.shift()
console.log(myArr1)

console.log(myArr1.includes(9))
console.log(myArr1.indexOf(9))

const myArr3 = myArr1.join()
console.log(myArr3)
console.log(typeof myArr3)

// slice, splice

console.log("A: ", myArr1)
const Arr1 = myArr1.slice(1, 3)
console.log(Arr1)
console.log("B: ", myArr1)
const Arr2 = myArr1.splice(1, 3)
console.log(Arr1)
console.log("C: ", myArr1)