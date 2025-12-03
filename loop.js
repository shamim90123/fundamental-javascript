for (let i = 0; i <= 5; i++) {
    console.log("Printing 1 to 5, Now Showing", i)
}


for (let i =0; i <= 40; i++ ){
    if (i%2 === 0 && i > 0) {
        console.log("Even Number betweem 1 to 40", i);
    }
}


let sum = 0;
for (let i =0; i <= 100; i++ ){
    sum +=i;
}

console.log("sum is ", sum)

// WHILE loop: countdown from 10 to 1
let number = 10;

while(number > 0) {
    console.log('countdown from 10 to 1', number)
    number --;
}

// DO-WHILE: print numbers 1 to 5
let do_while = 1;

do {
    console.log('do_while', do_while);
    do_while++;
} while (do_while <= 5);


// FOR...OF: loop through an array
let fruits = ["Apple", "Mango", "Banana"];

for (let item of fruits) {
  console.log(item);
}

// FOR...IN: loop through an object
let person = {
  name: "Shamim",
  age: 28,
  city: "Dhaka"
};

for (let key in person) {
  console.log(key, ":", person[key]);
}

// Break & Continue
for(let i=1; i<=20; i++) {
    if (i === 10) {
        continue;
    }

    if (i === 15) {
        break;
    }

    console.log("Break & Continue", i)
}

console.log('last');
console.log('last');
console.log('last');


