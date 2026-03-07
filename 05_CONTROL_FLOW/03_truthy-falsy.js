// Truthy and Falsy Values

// Truthy values: everything not listed below (including true, 1, "0", [], {}, "false", function() {}, )
// Falsy values: false, 0, -0, On, "", null, undefined, NaN

const userEmail = "prabhat@gmail.com"

if(userEmail){
    console.log("Got user email.")
}
else{
    console.log("Don't have user email.")
}

if(userEmail.length == 0){
    console.log("Array is empty.")
}

const emptyObj = {}
if(Object.keys(emptyObj).length == 0){
    console.log("Object is empty.")
}

// false == 0, true
console.log(false == 0)

// false == "", true
console.log(false == "")

// 0 == "", true
console.log(0 == "")