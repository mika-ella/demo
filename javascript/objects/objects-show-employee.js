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

// Expected output - PAT
// { name: "Edmond", salary: 80000, department: "HR" },
const findMatchDept = employees.filter(elements => {return elements.department === "HR";});
const matchFound = findMatchDept.find(element => {return element.name === "Edmond";});
console.log(matchFound);
// BONUS
// [
//   { department: 'HR', average: 71666 }
// ]
//using the same line of codes variable findMatchDept
//I'll get the average of salaries from HR department
let sum = 0;
length = findMatchDept.length;

findMatchDept.forEach(elements => {sum += elements.salary;});
const average = Math.floor(sum / length);
const expectedResult = [{department : "HR", average : average}];
console.log(expectedResult);