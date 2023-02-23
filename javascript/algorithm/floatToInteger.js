// Convert all floating numbers to an integer from an Array - MARVIN

const atomicMass = [1.00797, 4.00260, 6.941, 9.01218, 10.81, 12.011, 14.0067, 15.9994, 18.998403, 20.179];
const roundedAtomicMass = atomicMass.map(element => Math.round(element));
console.log(roundedAtomicMass);