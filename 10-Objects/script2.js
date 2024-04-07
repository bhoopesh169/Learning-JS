const tinder = new Object()
const tinderuser = {
    fullname: {
        "first name": "Bhoopesh",
        "last name": "Chaudhary"
    },
    email: {
        name: "bhoopesh7838",
        domain: "@gmail.com"         
    }
}

console.log(tinderuser["fullname"]);
console.log(tinderuser.fullname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5:"e", 6:"f"}

const obj = {...obj1, ...obj2, ...obj3};

console.log(obj);
console.log(Object.keys(tinderuser))