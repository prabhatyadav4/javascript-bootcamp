const marvel_heroes = ["Ironman", "Spiderman", "Thor"]
const dc_heroes = ["Flash", "Superman", "Batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1])

const all_heroes = marvel_heroes.concat(dc_heroes)
console.log(all_heroes)

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
console.log(all_new_heroes)

const new_arr = [1, 2, 3, 4, [5, 6, 7], [8, [9, 10]]]
console.log(new_arr)
const real_new_arr = new_arr.flat(Infinity)
console.log(real_new_arr)

console.log(Array.isArray("Prabhat"))
console.log(Array.from("Prabhat"))
console.log(Array.from({name: "Prabhat"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))