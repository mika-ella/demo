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
const departments = employees.reduce((accumulator, employee) => {
  accumulator.add(employee.department);
  return accumulator;
}, new Set());

const newDepartment = Array.from(departments);

const expectedTotalSalaries = [];
const expectedAverage = [];
newDepartment.forEach(department => {
  const deptEmployees = employees.filter(employee => employee.department === department);
  const totalSalary = deptEmployees.reduce((totalSalaries, employee) => totalSalaries += employee.salary,0);
  expectedTotalSalaries.push({department: department, totalSalary: totalSalary });
});

console.log(expectedTotalSalaries);

// BONUS
// [
//   { department: 'HR', average: 71666 }
// ]
