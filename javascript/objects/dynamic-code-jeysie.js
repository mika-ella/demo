const employees = [
    { name: "Nadeth", salary: 75000, department: "HR" },
    { name: "Nikolai", salary: 65000, department: "IT" },
    { name: "Mika", salary: 50000, department: "IT" },
    { name: "Edmond", salary: 80000, department: "IT" },
    { name: "Carl", salary: 55000, department: "IT" },
    { name: "Edwin", salary: 70000, department: "IT" },
    { name: "Carlo", salary: 60000, department: "HR" },
    { name: "Edmond", salary: 80000, department: "HR" },
    {name: "Jean", salary: 10000, department: "Intern"},
    {name: "Jayson", salary: 10000, department: "Intern"},
    {name: "Red", salary: 10000, department: "Intern"},
  ];
  
  const calculateTotalSalariesByDepartment = (employees) => {
    const departmentSalaries = [];
  
    employees.forEach((employee) => {
      const index = departmentSalaries.findIndex((departmentSalary) =>
       departmentSalary.department === employee.department);
  
      if (index !== -1) {
        departmentSalaries[index].totalSalary += employee.salary;
      } else {
        departmentSalaries.push({
          department: employee.department,
          totalSalary: employee.salary,
        });
      }
    });
  
    return departmentSalaries;
  };
  
  const departmentSalaries = calculateTotalSalariesByDepartment(employees);
  console.log(departmentSalaries);

  const highestAverageSalaryByDepartment = departmentSalaries.reduce((highest, departmentSalary) => {
  const employeesInDepartment = employees.filter(employee =>
     employee.department === departmentSalary.department);
     
  const salariesInDepartment = employeesInDepartment.map(employee => employee.salary);
  const averageSalary = Math.floor(salariesInDepartment.reduce
    ((total, salary) => total + salary, 0) / salariesInDepartment.length);

  if (averageSalary > highest.averageSalary) {
    return { department: departmentSalary.department, averageSalary };
  } else {
    return highest;
  }
}, { department: null, averageSalary: 0 });

console.log(highestAverageSalaryByDepartment);
