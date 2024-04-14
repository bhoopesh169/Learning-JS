const useremail = "bhoopesh7838@gmail.com"

if(useremail){
    console.log("Got email")
}
else{
    console.log("No emai l")
}


//Falsey values
// 0, -0, NaN, null, BigInt, )n, null, undefined, false


const emptyobj = {}
 
if(Object.keys(emptyobj).length === 0){
    console.log("Object is empty")
}