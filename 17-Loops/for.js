for (let index = 0; index <= 10; index++) {
    const element = index;
    if(element == 5){
        console.log("5 is the best");
    }
    console.log(element);
}

for(let i=0;i<=10;i++){
    console.log(`outer loop ${i}`)
    for(let j=0;j<=10;j++){
        console.log(`inner loop ${j}`)
    }
}


let myarray = ["ironman", "batman", "flash"]

for (let index = 0; index <= myarray.length; index++) {
    const element = myarray[index];
    console.log(element);
}


for (let index = 0; index <=20 ; index++) {
    if(index == 5){
        console.log("Here is 5");
        break;
    }
    console.log(index);   
}


for (let index = 0; index <=20 ; index++) {
    if(index == 5){
        console.log("Here is 5");
        continue;
    }
    console.log(index);   
}
