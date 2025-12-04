
// Function declaration
function great() {
    console.log("welcome to JavaScript");
}
great();

// function with parameters
function sayHello(name) {
    console.log("Hello, ", name)
}
sayHello("Shamim Rza");


function add (a, b) {
    return a+b;
}

let result = add(901, 866);
console.log("sum = ", result)

// arrow function
const multiply = (x,y) => x *y;
console.log(multiply(4,6));


// default parameter
function getName(name = "Guest") {
    console.log("default parameter", name);
}
getName();
getName('Admin');

// function expression 
const square = function(num) {
    return num * num;
}

console.log(square(7));

// callback
function process(callback) {
  callback();   // calling callback
}

function showMessage() {
  console.log("Callback executed!");
}
process(showMessage);
// for details function_callback.js

