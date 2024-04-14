// const arr = ["cpp,", "ruby", "python", "c", "js"]

// const values = arr.forEach( element => {
//     console.log(element);
// })

// console.log(values)


const arr = [1,2,3,4,5,6,7,8,9,10]
const a= arr.filter(num =>{
    return num>=6
})
console.log(a);

arrx =[]
arrx.forEach(num => {
    if(num>4){
        arrx.push(num)
    }
})
console.log(arrx)