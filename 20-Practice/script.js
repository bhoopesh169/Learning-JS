const arr = [1,2,3,4,5,6,7,8,9,10];

// const newnum =  arr
// .map(num => num+10)
// .map(num=> num+10)

// console.log(arr);
// console.log(newnum);

const x=0
const i =arr.reduce((a,currentValue) => a+currentValue,x);
console.log(i);