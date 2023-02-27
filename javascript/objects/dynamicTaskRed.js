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

const numberOfEmployeePerDept = [];
const totalSalaryPerDepartment = employees.reduce((salaryPerDept, employee) => {
  const index = salaryPerDept.findIndex(
    (dept) => dept.department === employee.department
  );
  if (index === -1) {
    salaryPerDept.push({
      department: employee.department,
      totalSalary: employee.salary,
    });
    numberOfEmployeePerDept[employee.department] = 1;
  } else {
    salaryPerDept[index].totalSalary += employee.salary;
    numberOfEmployeePerDept[employee.department] += 1;
  }
  return salaryPerDept;
}, []);

const averageSalaryPerDept = totalSalaryPerDepartment.map((dept) => {
  return {
    department: dept.department,
    average: Math.floor(
      dept.totalSalary / numberOfEmployeePerDept[dept.department]
    )
  };
});
const departmentWithHighestAverageSalary = averageSalaryPerDept.find(
  (dept) =>
    dept.average ===
    Math.max(...averageSalaryPerDept.map((dept) => dept.average))
);

console.log("Total Salary per Department:");
console.log(totalSalaryPerDepartment);
console.log("\nAverage Salary per Department:");
console.log(averageSalaryPerDept);
console.log("\nDepartment with Highest Average Salary:");
console.log(departmentWithHighestAverageSalary);
