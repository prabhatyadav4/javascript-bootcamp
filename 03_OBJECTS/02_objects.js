// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser)

const regularUser = {
    email : "prabhat@gmail.com",
    fullName: {
        userFullName: {
            firstname: "Prabhat",
            lastname: "Kumar"
        }
    }
}

console.log(regularUser.fullName.userFullName.firstname)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 3: "d"}

const obj3 = {obj1, obj2}
console.log(obj3)

const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4)

const obj5 = {...obj1, ...obj2}
console.log(obj5)

const users = [
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 1,
        email: "p@gmail.com"
    }
]

console.log(users[1].email)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
    courseName: "JS Bootcamp",
    coursePrice: "$0",
    courseInstructor: "Hitesh"
}

const {courseInstructor: instructor} = course

console.log(instructor)