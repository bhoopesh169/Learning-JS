{function chai() {
    console.log("DB CONNECT")
}}
chai();

const addtwo = (num1, num2) => (num1+num2)

console.log(addtwo(1,3));

((name) => {
    console.log(`DB connected ${name}`);
})('Bhoopesh')