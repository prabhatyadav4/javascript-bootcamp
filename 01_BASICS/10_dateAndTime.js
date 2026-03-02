let myDate = new Date()

console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toLocaleString())
console.log(myDate.toTimeString())

console.log(typeof(myDate))

let myCreatedDate = new Date(2026, 2, 2)
console.log(myCreatedDate.toDateString())

let myDateAndTime = new Date(2026, 2, 2, 20, 54)
console.log(myDateAndTime.toLocaleString())

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreatedDate.getTime())

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())

let formattedDate = newDate.toLocaleString('default', {weekday: "long"})
console.log(formattedDate)