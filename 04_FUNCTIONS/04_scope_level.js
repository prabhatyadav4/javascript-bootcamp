function one(){
    const username = "Prabhat"

    function two(){
        const website = "Youtube"
        console.log(username)
    }
    
    // console.log(website);

    two()
}

one()

if(true) {
    const username = "Prabhat"
    if(username === "Prabhat"){
        const website = " Youtube"
        console.log(username + website)
    }
    // console.log(website)
}


//-----------------------------------------HOISTING----------------------------------------------

// console.log(username)
console.log(addOne(4))

function addOne(num){
    return num + 1
}

// console.log(addTwo(4))

const addTwo = function(num){
    return num + 2
}