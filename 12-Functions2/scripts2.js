function calculateprice(...num1) 
{
    return num1
}
console.log(calculateprice(200, 300, 400))

const user = {
    username: "Bhoopesh",
    price: 199
}

function handleobject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

handleobject(user)

const array =[200, 300, 400, 500]
function returnvalue(getarray){
    return getarray[1]
}
console.log(returnvalue(array))

const arrayX = [
    {
        name: "Bhoopesh",
        price: 199
    },
    {
        name: "Hitesh",
        price: 200
    }
]
function manage(allobjects) {
    console.log(allobjects.name)
}

manage(arrayX)