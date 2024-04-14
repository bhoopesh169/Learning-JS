//if
// >, <, <=, >=, ||, ==,!=,===
if(1==="1") {
    console.log("Not equal")
}

else {
    console.log("This aint same")
}

const score=200

if(score>100) {
    const power ="fly"
    console.log(`user power: ${power}`);
}
else {
    console.log("You are powerless")
}

const balance=1000

if(balance < 500){
    console.log("less than");
} else if(balance<800){
    console.log("less than 800")
}
/////////////////////////////////here the basic if else and nesting ends

const debitcard = true
const userloggedin = true
const loggedinfromgoogle = false
const loggedinfromemail = true
if(userloggedin && debitcard) {
    console.log("Allow to buy")
}

if(loggedinfromgoogle || loggedinfromemail){
    console.log("Allow Purchase")
}