// Convert all floating numbers to an integer from an Array - MARVIN

//1. Create an array of Floating Points.
//2. Replace each index in the array by using the map() function.
//3. Round the elements of the index you mapped using the Math.round() function.
//4. Create a new variable and store the mapped elements in the new variable.
//5. Print the results.

//Sample code
//In this example, I used the atomic mass of elements in the periodic table from Hydrogen to Neon
//Create a variable named atomicMassPT
const atomicMassPT = [1.00797, 4.00260, 6.941, 9.01218, 10.81, 12.011, 14.0067, 15.9994, 18.998403, 20.179];
//create a new variable called roundedAtomicMass, an array that contains the rounded elements of the mapped atomicMassPT.
const roundedAtomicMass = atomicMassPT.map(element => Math.round(element));
//Print the result.
console.log(roundedAtomicMass);