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

console.log(products.filter(product => product.category === 'Electronics' && product.price <= 70));

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

console.log(products.map((product) => {
  return { name: product.name, price: product.price + 10, category: product.category };
}));

// Expected output - PAT
// { name: "Edmond", salary: 80000, department: "HR" },

console.log(employees.find(employee => employee.name == 'Edmond' && employee.department == 'HR'));

// Expected array output - JEAN
// [
//   { department: "IT", totalSalary: 240000 },
//   { department: "HR", totalSalary: 215000 },
// ]

const totalSalaryPerDepartment = employees.reduce((salaryPerDept, employee) => {
  const index = salaryPerDept.findIndex(dept => dept.department === employee.department);
  if (index === -1) {
    salaryPerDept.push({ department: employee.department, totalSalary: employee.salary });
  }
  else {
    salaryPerDept[index].totalSalary += employee.salary;
  }
  return salaryPerDept;
}, []);

console.log(totalSalaryPerDepartment);

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
console.log(products?.sort((itemA, itemB) => itemA.price - itemB.price))

// BONUS
// [
//   { department: 'HR', average: 71666 }
// ]

const hrEmployee = employees.filter(employee => employee.department == 'HR');
const avgSalary = hrEmployee.reduce((sum, employee) => sum + employee.salary, 0) / hrEmployee.length;
console.log([{ department: hrEmployee[0].department, average: parseInt(avgSalary) }]);