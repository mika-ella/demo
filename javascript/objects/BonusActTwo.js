const employees = [
    { name: "Nadeth", salary: 75000, department: "HR" },
    { name: "Nikolai", salary: 65000, department: "IT" },
    { name: "Mika", salary: 50000, department: "IT" },
    { name: "Edmond", salary: 80000, department: "IT" },
    { name: "Carl", salary: 55000, department: "IT" },
    { name: "Edwin", salary: 70000, department: "IT" },
    { name: "Carlo", salary: 60000, department: "HR" },
    { name: "Edmond", salary: 80000, department: "HR" },
    { name: "Jayson", salary: 100000, department: "ACC" },
    { name: "Red", salary: 120000, department: "ACC" },
    { name: "Jean", salary: 150000, department: "CSH" },
    { name: "Lawrence", salary: 160000, department: "GO" },
  ];

  const departmentAverageSalary = employees
  .reduce((acc, employee) => {
    if (!acc[employee.department]) { // if department is not yet in the accumulator
      acc[employee.department] = { // create a new department object
        department: employee.department,
        totalSalary: employee.salary,
        employeeCount: 1
      };
    } else { // if department is already in the accumulator
      acc[employee.department].totalSalary += employee.salary; // accumulate the salary
      acc[employee.department].employeeCount++; // increment the employee count
    }
    return acc;
  }, {});

const highestAverageSalaryDepartment = Object.values(departmentAverageSalary)
  .reduce((max, department) => max.average > department.totalSalary / department.employeeCount ? max : { department: department.department, average: department.totalSalary / department.employeeCount }, { department: "", average: 0 });

console.log(highestAverageSalaryDepartment); // output: { department: "CSH", average: 150000 }
