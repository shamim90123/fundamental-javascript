let fruits = ["Apple", "Mango", "Banana", "Orange", "Grapes"];
console.log("fruits", fruits);
console.log("first fruit:- ", fruits[0]);
console.log("Last:- ", fruits[fruits.length - 1]);

fruits.push("Pineapple");
console.log("After Push:", fruits)


fruits.pop();
console.log("After Pop:", fruits)


fruits.unshift("Papaya");
console.log("After unshift:", fruits)

fruits.shift();
console.log("After shift:", fruits)

console.log(fruits.includes("Mango"));   // true
console.log(fruits.includes("Kiwi"));    // false


// Remove duplicates
let nums = [1, 2, 2, 3, 4, 4, 5];

let unique = [...new Set(nums)];

console.log(unique);  // [1, 2, 3, 4, 5]
