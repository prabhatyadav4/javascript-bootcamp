// While Loop

// Syntax:
//      intialization
//      while (condition) {
            //code
//      increment        
//      }

let index = 0
while(index < 10){
    console.log(`Value of index is: ${index}`)
    index += 2
}

// Print element of Array using While Loop

let myArray = ["Ironman", "Spiderman", "Hulk", "Thor"]

let arr = 0
while(arr < myArray.length){
    console.log(myArray[arr])
    arr++
}

// Do-While Loop

// Syntax:

//      initialization
//      do {
//          // code
//          condition
//      } while (condition);

let score = 1
do{
    console.log(`Score is ${score}`)
    score++;
}
while(score <= 10) 
 
// Do while loop runs at least once
let run = 100
do{
    console.log(`Current run is: ${run}`)
    run++;
}
while(run <= 80)