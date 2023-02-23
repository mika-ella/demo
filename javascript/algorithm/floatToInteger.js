// Convert all floating numbers to an integer from an Array - MARVIN

const atomicMass = [1.0079, 4.00280, 6.941, 9.01218, 10.811, 12.001, 14.00674, 15.9094, 18.998403, 20.1797]

const wholeNumbers = atomicMass.map( element => Math.round(element));

console.log(wholeNumbers);