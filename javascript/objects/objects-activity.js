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
  
  
const departments = employees.reduce((dept, employee) => {
  if(!dept[employee.department]){
    dept[employee.department] = {department : employee.department, totalSalary : 0, numOfEmployees : 0, average : 0};
  }
  dept[employee.department].totalSalary += employee.salary;
  dept[employee.department].numOfEmployees += 1;
  dept[employee.department].average = dept[employee.department].totalSalary / dept[employee.department].numOfEmployees;
  return dept;

}, {});

const eachDepartment = Object.entries(departments).map(([key, value]) => ({
  department : value.department, 
  totalSalary : value.totalSalary,
}));

const departmentAverage = Object.entries(departments).map(([key, value]) => ({
  department : value.department, 
  average : Math.floor(value.average),
}));

const highestPayingDepartment = departmentAverage.reduce((highest, current) => {
  return (highest.average > current.average) ? highest : current;
},{});

console.log(eachDepartment);
console.log(highestPayingDepartment);