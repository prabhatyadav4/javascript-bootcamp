// For In Loop

// Syntax:
//      for (const key in object) {
//          if (!Object.hasOwn(object, key)) continue;

//          const element = object[key];
//      }

const languages = {
    js : "JavaScipt",
    py : "Python",
    cpp : "C++",
    rb : "Ruby"
}

for(const key in languages){
    // console.log(key)
    // console.log(languages[key])
    console.log(`${key} is shortcut for ${languages[key]}`)
}

const programming = ["JavaScript", "Python", "C++", "Ruby"]

for(const key in programming){
    // console.log(key)
    console.log(programming[key])
}

const map = new Map()
map.set('IN', "India")
map.set('AUS', "Australia")
map.set("FR", "France")

// Not itirable
// for(const key in map){
//     console.log(key)
// }