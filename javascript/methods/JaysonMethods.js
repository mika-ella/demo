const animals = ['ant', 'bison', 'camel', 'duck', 'elephant', 12, 15, 99, 87, 1];

const number = animals.filter((value) => typeof value !== 'string');

const convertedAnimals = animals.map(animal => {
  if (typeof animal === 'number') {
    return String(animal);
  }
  return animal;
});

const filteredAnimals = animals.filter(animal => typeof animal === 'string' && animal.length >= 3);

console.log(number);
console.log(convertedAnimals);
console.log(filteredAnimals);