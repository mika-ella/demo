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

    const GetHRemployees = employees.filter(employee => employee.department === 'HR');
    const TotalSalary = GetHRemployees.reduce((accumulator, currentValue) =>
     accumulator + currentValue.salary, 0);
    const HRaverageSalary= TotalSalary / GetHRemployees.length;
    const result = [{ department: 'HR', average: Math.floor (HRaverageSalary) }];
    
    console.log(result);