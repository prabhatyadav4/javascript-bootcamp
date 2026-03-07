// For Each Loop

// Sytax:
//      array.forEach(element => {
    
//      });

const coding = ["JavaScript", "Python", "C++", "Ruby"]

coding.forEach( (val) => {
    console.log(val)
})

// OR

coding.forEach(function (val) {
    console.log(val)
})

// OR

function printMe(item){
    console.log(item)
}

coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr)
})

// Objects in Array

const myCoding = [
    {
        language: "JavaScipt",
        fileName: ".js"
    },
    {
        language: "Python",
        fileName: ".py"
    },
    {
        language: "C++",
        fileName: ".cpp"
    }
]

myCoding.forEach( (item) => {
    console.log(item.language, " :- ", item.fileName)
})