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

// error first callback (Node.js)
function getUser(id, callback) {
  if (!id) {
    return callback("ID id require", null)
  }

  const user = { id, name: "Shamim Reza" };
  callback(null, user)
}

getUser(null, (err, user) => {
  if (err) return console.error("Error", err);
  console.log('User:', user)
});


const numbers = [1,2,3,4,5];

numbers.forEach(n => {
  console.log(n*2);
})

const doubled = numbers.map(n => n *2)
console.log(doubled)

const evens = numbers.filter(n => n % 2 === 0);
console.log(evens);

