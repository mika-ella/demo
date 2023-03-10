
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant', 12, 15, 99, 87, 1];

//1. Expected output: Array [12, 15, 99, 87, 1]
console.log(animals.filter(item => typeof item === 'number'));

//2. Expected output: Array ['ant', 'bison', 'camel', 'duck', 'elephant', '12', '15', '99', '87', '1']
console.log(animals.map(item => {
    if (typeof item === 'number')
        return item.toString();
    return item;
}))

//3. Expected output: Array ['bison', 'camel', 'elephant']
console.log(animals.filter(item => typeof item === 'string' && item.length > 4));

// choose the appropriate array method to solve the problems.