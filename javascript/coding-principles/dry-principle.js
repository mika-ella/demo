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

//Application of DRY Principle
console.log('DRY PRINCIPLE')

numbers.forEach(number => console.log(number));