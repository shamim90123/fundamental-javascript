
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