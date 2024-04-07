let mydate = new Date()
console.log(mydate);

 let date = String(mydate)

console.log(date);

let specific = new Date(2023, 10 ,23)
let a= String(specific)
console.log(a)
console.log(specific.getDate());
console.log(specific.getDay());


let timestamp= Date.now()
console.log(timestamp.toString());