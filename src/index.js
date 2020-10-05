import { choice, remove } from './helpers';
import foods from './foods';

let fruits = foods;
let randFruit = fruits[choice(fruits)];

console.log(`I'd like one ${randFruit}, please.`);
console.log(`Here you go: ${randFruit}`);
console.log(`Delicious! May I have another?`);
remove(fruits, randFruit);
console.log(`I'm sorry, we're all out. We have ${fruits.length} left.`);
