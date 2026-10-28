const employees = [
    { name: "tamil", salary: 25000 },
    { name: "vicky", salary: 30000 },
    { name: "akash", salary: 28000 },
    { name: "bharathiun", salary: 35000 },
    { name: "Vijay", salary: 40000 }
];

const totalSalary = employees.reduce((sum, employee)=> {
return sum + employee.salary;
}, 0);
console.log(totalSalary);