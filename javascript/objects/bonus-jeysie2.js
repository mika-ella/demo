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
  
  const calculateTotalSalariesByDepartment = (employees) => {
    const departmentSalaries = [];
  
    employees.forEach((employee) => {
      const index = departmentSalaries.findIndex((departmentSalary) => departmentSalary.department === employee.department);
  
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