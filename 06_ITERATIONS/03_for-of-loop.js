// for of Loop

// Syntax:
//      for (const element of object) {
//             // cdoe
//      }

const arr = [1, 2, 3, 4, 5]

for(const num of arr){
    console.log(num)
}

const greetings = "Hello World"
for(const greet of greetings){
    console.log(greet)
}

// Map

const map = new Map()
map.set('IN', "India")
map.set('AUS', "Australia")
map.set("FR", "France")

console.log(map)

for(const key of map){
    console.log(key)
}

for(const [key, value] of map){
    console.log(key, " :- ", value)
}

const myObject = {
    game1 : "PUBG",
    game2 : "Free Fire"
}

// for(const [key, value] of myObject){
//     console.log(key, " :- ", value)
// }