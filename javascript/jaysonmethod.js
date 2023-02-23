const animals = ['ant', 'bison', 'camel', 'duck', 'elephant', 12, 15, 99, 87, 1];

const num = animals.filter((value) => typeof value !== 'number');
const ftr = animals.filter((value) => typeof value !== 'number' && String(value).includes('e') || String(value).includes('i'));

console.log(num);
console.log(animals);
console.log(ftr);