const object = {
    name : "Bhoopesh",
    age : 21,
    location : "Faridabad",
    lastloggedin : false,
    "full name" : "Bhoopesh Chaudhary"
};

object.greeting = function(){
    console.log("Hello JS user");
};

console.log(object.age); // Output: 21
console.log(object.location); // Output: Faridabad

object.greeting(); // Output: Hello JS user

object.greetingtwo = function(){
    console.log(`Hello JS user, ${this.name}`);
};

object.greetingtwo();