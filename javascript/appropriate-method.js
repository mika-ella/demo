const animals = ['ant', 'bison', 'camel', 'duck', 'elephant', 12, 15, 99, 87, 1];

//1. Expected output: Array [12, 15, 99, 87, 1]

//2. Expected output: Array ['ant', 'bison', 'camel', 'duck', 'elephant', '12', '15', '99', '87', '1']

//3. Expected output: Array ['bison', 'camel', 'elephant']

// choose the appropriate array method to solve the problems.

const integers =  animals.filter(animal => Number.isInteger(animal));

const listOfElements = animals.map( elementOfAnimals => elementOfAnimals.toString());

const animal =  animals.filter(animalName => animalName.length>=5);

console.log(integers);
console.log(listOfElements);
console.log(animal);