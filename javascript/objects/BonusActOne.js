const employees = [
    { name: "Nadeth", salary: 75000, department: "HR" },
    { name: "Nikolai", salary: 65000, department: "IT" },
    { name: "Mika", salary: 50000, department: "IT" },
    { name: "Edmond", salary: 80000, department: "IT" },
    { name: "Carl", salary: 55000, department: "IT" },
    { name: "Edwin", salary: 70000, department: "IT" },
    { name: "Carlo", salary: 60000, department: "HR" },
    { name: "Edmond", salary: 80000, department: "HR" },
    { name: "Jayson", salary: 80000, department: "ACC" },
    { name: "Red", salary: 80000, department: "ACC" },
  ];

const result = employees.reduce((accumulator, currentValue) => {
    const departmentIndex = accumulator.findIndex(item => item.department === currentValue.department);
    if (departmentIndex !== -1) {
        accumulator[departmentIndex].totalSalary += currentValue.salary;
    } else {
        accumulator.push({ department: currentValue.department, totalSalary: currentValue.salary });
    }
    return accumulator;
  }, []);
  
  console.log(result);