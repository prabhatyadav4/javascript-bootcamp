const sayMyName = function(){
    console.log("Chai Aur Code")
}

setTimeout(sayMyName, 2000)

const changeText = function() {
    document.querySelector('h1').innerHTML = "Welcome to ChaiAurCode"
}

const changeMe = setTimeout(changeText, 3000)

document.querySelector("#stop").addEventListener("click", function() {
    clearTimeout(changeMe);
    console.log("STOPPED")
})

const sayDate = function(str) {
    console.log(str, Date.now())
}

let interval = 0
document.querySelector("#int-start").addEventListener("click", function(){
    console.log("Interval Started")
    interval = setInterval(sayDate, 1000, "Prabhat");
})

document.querySelector("#int-stop").addEventListener("click", function() {
    clearTimeout(interval);
    console.log("Interval Stopped")
})