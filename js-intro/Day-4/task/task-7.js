const employees = [
    { name: "tamil", salary: 25000 },
    { name: "vicky", salary: 30000 },
    { name: "akash", salary: 28000 },
    { name: "bharathiun", salary: 35000 },
    { name: "Vijay", salary: 40000 }
];

const result = employees.filter((employee) => {
    return employee.salary >= 30000;
});

console.log(result);