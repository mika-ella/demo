// Without applying DRY
let a = 7;
let b = 3;
let sum1 = a + b;
console.log(`The sum of ${a} and ${b} is ${sum1}`);

a = 7;
b = 3;
let sum2 = a + b;
console.log(`The sum of ${a} and ${b} is ${sum2}`);

// DRY implementation

function add(a, b){
    console.log(`The sum of ${a} and ${b} is ${a + b}`);
}

add(7, 3);
add(14, 15);