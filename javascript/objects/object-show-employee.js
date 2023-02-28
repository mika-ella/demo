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
const findMatchDeptHR = employees.filter(elements => {return elements.department === "HR";});
const matchFound = findMatchDeptHR.find(elements => {return elements.name === "Edmond"});
console.log(matchFound);

// BONUS
// [
//   { department: "IT", totalSalary: 320000 },
//   { department: "HR", totalSalary: 215000 },
// ]

let sumOfAllHRSal = 0;
let sumOfAllITSal = 0;
const findMatchDeptIT = employees.filter(elements => {return elements.department === "IT"});
findMatchDeptHR.forEach(elements => {return sumOfAllHRSal += elements.salary});
findMatchDeptIT.forEach(elements => {return sumOfAllITSal += elements.salary});

let lengthHR = findMatchDeptHR.length;
const average = Math.floor(sumOfAllHRSal/lengthHR);

const totalITSalary = [{department: "IT", totalSalary: sumOfAllITSal}];
const totalHRSalary = [{department: "IT", totalITSalary: sumOfAllHRSal}];
console.log(totalITSalary);
console.log(totalHRSalary);

// BONUS
// [
//   { department: 'HR', average: 71666 }
// ]
const expectedResult = [{department: "HR", averageSalary: average}];
console.log(expectedResult);