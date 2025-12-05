// Basic callback
function great(name, callback) {
    console.log("Hello", name)
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

great("Shamim", sayGoodbye);


// Anonymous callback
function calculate(a, b, callback) {
  let result = a + b;
  callback(result);
}

calculate(10, 20, function(sum) {
  console.log("Sum is:", sum);
});


//MID Level Callback Function
// setTimeout callback (Async)
console.log("start")

setTimeout(() => {
  console.log("Hi, this ran after 2 seconds");
}, 2000)

console.log('end');