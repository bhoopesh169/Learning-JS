function one() {
    const username = "Bhoopesh"
    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);   outside the scope
    two()
}
// one()

if(true){
    const username ="Bhoopesh"
    if(username === "Bhoopesh"){
        const website = "Youtube"
        console.log(username+" "+website)
    }
}

function addone(num) {
    return num +1
}

console.log(addone(2))

const addtwo = function(num){
    return num+2
}

addtwo(5)