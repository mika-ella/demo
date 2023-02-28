console.log('Coding Principles')

// DRY PRINCIPLE
// 1. Marvin
// Without applying DRY
let numbers = [1.126, 277, 322, 42, 52];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);

// 2. Jayson
// Before DRY principle is applied
function even(num: number): boolean {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function odd(num: number): boolean {
  if (num % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

// 3. Jean
// Without applying DRY
let x = 5;
let y = 10;
if (x > y) {
  console.log(`${x} is greater than ${y}`);
} else {
  console.log(`${y} is greater than ${x}`);
}

x = 7;
y = 3;
if (x > y) {
  console.log(`${x} is greater than ${y}`);
} else {
  console.log(`${y} is greater than ${x}`);
}

// 4. Red
// Without applying DRY
let a = 7;
let b = 3;
let sum1 = x + y;
console.log(`The sum of ${a} and ${b} is ${sum1}`);

a = 7;
b = 3;
let minus = x - y;
console.log(`The difference of ${x} and ${y} is ${minus}`);

// 5. Pat
// Without applying DRY
let favoriteColors = [{
  name: 'Mika',
  favoriteColor: 'black'
}, {
  name: 'Carlo',
  favoriteColor: 'maroon'
}, {
  name: 'Marvin',
  favoriteColor: 'white'
}, {
  name: 'Marvin',
  favoriteColor: 'blue'
}];
console.log(`${favoriteColors[0].name} favorite color is ${favoriteColors[0].favoriteColor}`);
console.log(`${favoriteColors[0].name} favorite color is ${favoriteColors[0].favoriteColor}`);
console.log(`${favoriteColors[0].name} favorite color is ${favoriteColors[0].favoriteColor}`);
console.log(`${favoriteColors[0].name} favorite color is ${favoriteColors[0].favoriteColor}`);