const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "Bhoopesh"
tinderuser.isLoggedIn = false
console.log(tinderuser);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 ={obj1, obj2}
console.log(obj3)

const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4);

console.table(obj4)

const users = [
    {
        id: 1,
        name: "Prateek",
        email: "abc@gmail",
        loggedin: false
    },
    {
        id: 2,
        name: "Bhoopesh",
        email: "xyz@gmail.com",
        loggedin: true
    }
]

users[1].email
console.table(users)
console.log(users[1])

console.log(Object.keys(users));
console.log(Object.values(users));
console.log(users.hasOwnProperty(users[1]));