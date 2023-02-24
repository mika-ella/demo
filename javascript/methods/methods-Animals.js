const animals = ['ant', 'bison', 'camel', 'duck', 'elephant', 12, 15, 99, 87, 1];

//1. Expected output: Array [12, 15, 99, 87, 1]
const numbersInAnimalsList = animals.filter(numbers => typeof numbers === 'number');
console.log(numbersInAnimalsList);
//2. Expected output: Array ['ant', 'bison', 'camel', 'duck', 'elephant', '12', '15', '99', '87', '1']
const showAllInAnimalsList = animals.map(elements => {return elements.toString();});
console.log(showAllInAnimalsList);
//3. Expected output: Array ['bison', 'camel', 'elephant']
const animalsByLength = animals.filter(animal => {return animal.length === 5 || animal.length === 8;});
console.log(animalsByLength);
// choose the appropriate array method to solve the problems.
