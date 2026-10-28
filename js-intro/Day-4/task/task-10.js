const employees = [
    { id: 1, name: "Tamil", salary: 25000 },
    { id: 2, name: "Vicky", salary: 35000 },
    { id: 3, name: "Akash", salary: 28000 },
    { id: 4, name: "Bharathi", salary: 45000 },
    { id: 5, name: "Vijay", salary: 30000 }
];

const result = employees.map((employee) => {
    return employee.name;
});

console.log(result);