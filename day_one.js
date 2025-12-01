// --------------------------------------
// Task 1: 10 Variables of Different Types
// --------------------------------------

// String
let firstName = "Shamim";

// Number
let age = 28;

// Boolean
const isStudent = true;

// Null
let middleName = null;

// Undefined
let futurePlan;

// Object
const user = {
  username: "shamim901",
  country: "Bangladesh"
};

// Array
let languages = ["JavaScript", "Python", "PHP"];

// Function
function greet() {
  return "Hello, JS learner!";
}

// BigInt
const bigNumber = 123456789012345678901234567890n;

// Symbol
const uniqueId = Symbol("id");

console.log("Task 1 Completed!");


// --------------------------------------
// Task 2: Student Object
// --------------------------------------

const student = {
  name: "Md Shamim Reza",
  age: 28,
  class: "Web Development",
  address: {
    street: "Mirpur Road",
    city: "Dhaka",
    country: "Bangladesh"
  },
  skills: ["JavaScript", "React", "Laravel"],
  
  getSummary: function () {
    return `${this.name} is ${this.age} years old and learning ${this.class}.`;
  }
};

console.log(student.getSummary());
console.log("Task 2 Completed!");


// --------------------------------------
// Task 3: Short Explanations
// --------------------------------------

// let: block scoped, can be reassigned
// const: block scoped, cannot be reassigned
// var: function scoped, can be used before declaration (hoisted)

// Primitive Types: stored by value (string, number, boolean, null, undefined, bigint, symbol)
// Reference Types: stored by reference (objects, arrays, functions)

console.log("Task 3 Completed!");



// --------------------------------------
// Bonus Task
// --------------------------------------
let a = { name: "A" };
let b = a;

b.name = "Changed";

console.log(a.name); // Output: "Changed"

// Explanation:
// a and b both point to the same memory location (reference type).
// Updating one affects the other.

console.log("Bonus Task Completed!");
