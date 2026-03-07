// For Loop

// Syntax:
//      for (let index = 0; index < array.length; index++) {
//          const element = array[index];  
//      }

for(let i = 0; i < 10; i++){
    const element = i;
    console.log(element)
    if(element == 5){
        console.log("5 is the best number")
    }
}

// Nested Loop

for(let i = 0; i < 5; i++){
    console.log(`Outer Loop: ${i}`)
    for(let j = 0; j < 5; j++){
        console.log(`   Inner Loop: ${j}`)
    }
    console.log("\n")
}

// Table from 1 to 5

for(let i = 1; i <= 5; i++){
    console.log(`Table of : ${i} \n`)
    for(let j = 1; j <= 10; j++){
        console.log(`   ${i} * ${j} = ${i * j}`)
    }
    console.log("\n")
}

// Print element of array

let myArray = ["Ironman", "Hulk", "Spiderman", "Thor"]

for(let i = 0; i < myArray.length; i++){
    console.log(myArray[i])
}

// Break, Continue

for(let i = 1; i <= 20; i++){
    if(i == 5){
        console.log("Detected 5")
        continue;
    }

    if(i == 10){
        console.log("Detected 10")
        break;
    }

    console.log(`Value of i is ${i}`)
}