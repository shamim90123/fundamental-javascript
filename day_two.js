let a = 20;
let b = 6;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);


console.log("10 == 10:", "10" == 10);     // true (type conversion)
console.log("10 === 10:", "10" === 10);   // false (type different)

console.log("0 == false:", 0 == false);   // true
console.log("0 === false:", 0 === false); // false

let age2 = 22;
let hasNID = true;

// AND
console.log("AND:", age2 >= 18 && hasNID);  // true

// OR
console.log("OR:", age2 >= 18 || hasNID);   // true

// NOT
console.log("NOT:", !hasNID);               // false

let x = 10;

x += 5;  // 15
x -= 3;  // 12
x *= 2;  // 24
x /= 4;  // 6

console.log("Final x =", x);

let num = 689;

if (num%2 === 0) {
    console.log("Even Number");
} else {
    console.log("Odd number")
}