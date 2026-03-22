console.log(Math.PI);

Math.PI = 5;
console.log(Math.PI);

const newPI = Math.PI;
console.log(newPI);

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);

// Object.defineProperty(Math, 'PI', {
//     value: 5,
//     writable: true,
//     configurable: true
// });

// console.log(Math.PI); // Error

/*
Once a property is locked with configurable: false, there is no way to unlock it. It is permanent and intentional to protect built-in properties like Math.PI.
So the cleanest and safest solution is always Option 1 — just use your own variable.

 */

const chai = {
    name: "Ginger",
    price: 250,
    isAvailable: true
}

console.log(chai)

console.log(Object.getOwnPropertyDescriptor(chai, "name"))

Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false
})

chai.name = "Lemon"
console.log(chai.name)

// enumerable

const user = {
    name: "Prabhat",
    age: 25,
    city: "Siwan"
}

Object.defineProperty(user, 'age', {
    enumerable: false
})

for (let key in user) {
    console.log(`${key} : ${user[key]}`)
}

// Output:
// name : Prabhat
// city : Siwan
// age is hidden 