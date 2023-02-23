const animals = ['ant', 'bison', 'camel', 'duck', 'elephant', 12, 15, 99, 87, 1,];

//1. Expected output: Array [12, 15, 99, 87, 1]

//2. Expected output: Array ['ant', 'bison', 'camel', 'duck', 'elephant', '12', '15', '99', '87', '1']

// choose the appropriate array method to solve the problems.

const integers =  animals.filter(animal => Number.isInteger(animal));

const listOfElements = animals.map( index => index.toString());

console.log(integers);
console.log(listOfElements);

