function hello(){
    console.log("a")
}

hello()

function add(num1, num2){   ///num1, num2 are parametres
    console.log(num1+num2);
}

add(1, 2)   ///// 1,2 are argurments

function addition(x,y){
    // let result =x+y;
    // return result;

    return x+y
}



function message(username) {
    if(username == undefined) {
        console.log("Please enter username");
    } else {
        return `${username} just logged in`;
    }
}

console.log(message("Bhoopesh"));
