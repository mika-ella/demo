const products = [
  { name: "Product A", price: 20, category: "Electronics" },
  { name: "Product E", price: 60, category: "Clothes" },
  { name: "Product G", price: 80, category: "Clothes" },
  { name: "Product H", price: 90, category: "Electronics" },
  { name: "Product C", price: 40, category: "Electronics" },
  { name: "Product D", price: 50, category: "Clothes" },
  { name: "Product B", price: 30, category: "Clothes" },
  { name: "Product F", price: 70, category: "Electronics" },
];

const employees = [
  { name: "Nadeth", salary: 75000, department: "HR" },
  { name: "Nikolai", salary: 65000, department: "IT" },
  { name: "Mika", salary: 50000, department: "IT" },
  { name: "Edmond", salary: 80000, department: "IT" },
  { name: "Carl", salary: 55000, department: "IT" },
  { name: "Edwin", salary: 70000, department: "IT" },
  { name: "Carlo", salary: 60000, department: "HR" },
  { name: "Edmond", salary: 80000, department: "HR" },
];

// Expected array output - MARVIN
// [
//   { name: "Product A", price: 20, category: "Electronics" }, 
//   { name: "Product C", price: 40, category: "Electronics" }, 
//   { name: "Product F", price: 70, category: "Electronics" },   
// ]

// Expected array output - JAYSON
// [
//    { name: "Product A", price: 30, category: "Electronics" },
//    { name: "Product E", price: 70, category: "Clothes" },
//    { name: "Product G", price: 90, category: "Clothes" },
//    { name: "Product H", price: 100, category: "Electronics" },
//    { name: "Product C", price: 50, category: "Electronics" },
//    { name: "Product D", price: 60, category: "Clothes" },
//    { name: "Product B", price: 40, category: "Clothes" },
//    { name: "Product F", price: 80, category: "Electronics" },
// ]

// Expected output - PAT
// { name: "Edmond", salary: 80000, department: "HR" },

// Expected array output - JEAN
// [
//   { department: "IT", totalSalary: 240000 },
//   { department: "HR", totalSalary: 215000 },
// ]

// Expected array output - RED
// [
//  { name: "Product A", price: 20, category: "Electronics" },
//  { name: "Product B", price: 30, category: "Clothes" },
//  { name: "Product C", price: 40, category: "Electronics" },
//  { name: "Product D", price: 50, category: "Clothes" },
//  { name: "Product E", price: 60, category: "Clothes" },
//  { name: "Product F", price: 70, category: "Electronics" },
//  { name: "Product G", price: 80, category: "Clothes" },
//  { name: "Product H", price: 90, category: "Electronics" },
// ]

// BONUS
// [
//   { department: 'HR', average: 71666 }
// ]


