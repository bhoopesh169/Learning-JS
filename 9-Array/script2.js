const marvel = ["Thor", "Spiderman", "Ironman"];
const DC = ["Joker", "Batman", "Wonderwoman"];

marvel.push(DC);

console.log(DC);
console.log(marvel);

x=marvel.concat(DC)
console.log(x);

const y = [...marvel, ...DC];
console.log(y)

console.log(Array.from("Bhoopesh"))
console.log(Array.of(DC,marvel))