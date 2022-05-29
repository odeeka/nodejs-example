
let max = 100.0000;
let min = 1.000;
let counter = 2;
console.log("Random number with 'for' loop");
for (let i = 0; i < counter; i++) {
  console.log(getRandom(min, max));
}

console.log("Random numbe with 'for in' loop");
const numbers = [1,2,3,4,5];
for (let x in numbers) {
  console.log(getRandom(min, max));
}

console.log("Random number with 'while' loop");
let i = 0;
while (i < counter){
  console.log(getRandom(min, max));
  i++;
}

console.log("Random number with 'do while' loop");
i = 0;
do {
  console.log(getRandom(min, max));
  i++;
}while(i < counter);

// Generic function to create random
function getRandom(min, max) {
  let rnd = Math.random() * max + min;
  let str = "Base: " + rnd + " => Fixed: " + rnd.toFixed(5) + " => Floor: " + Math.floor(rnd) + " => Ceil: " + Math.ceil(rnd);

  return str;
}