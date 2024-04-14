const arr =[1, 2, 3, 4, 5]

for(const i of arr){
    console.log(i);
}

const greetings ="Hello world"

for(const i of greetings){
    console.log(`Each element of greetings ${i}`);
}

////map

const map= new Map()

map.set('IN', "INdia")
map.set('CAN', "Canada")
map.set('AF', "Africa")

console.log(map)

for(const [i,value] of map){
    console.log(i,value);
}


const obj ={
    js: 'JavaScript',
    cpp: 'C++',
    py: 'python'
}

for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
    }
}

