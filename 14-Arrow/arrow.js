const user ={
    username: "Bhopesh",
    price: 200,

    welcomemessage: function(){
        console.log(`${this.username} , welcome to course`)
        console.log(this)
    }
}

user.welcomemessage()

user.username = "Hitesh"
user.welcomemessage()


// console.log(this)

// function chai() {
//     console.log(this)
// }
// chai()

// const hello = () => {
//     let username ="Bhoopesh"
//     console.log(this);
// }

const addtwo = (num1, num2) =>  (num1+num2)

// parenthisis()--- dontuse return
// { curly braces}  user return

console.log(addtwo(1,3))