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

  const hrEmployees = employees.filter(employee => employee.department === 'HR');
  const totalSalary = hrEmployees.reduce((sum, employee) => sum + employee.salary, 0);
  const hrAverageSalary = totalSalary / hrEmployees.length;
  const result = [{ department: 'HR', average: hrAverageSalary }];
  
  console.log(result);