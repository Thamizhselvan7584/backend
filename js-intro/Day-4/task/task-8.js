const students = [
    { id: 101, name: "tamil", department: "BCA" },
    { id: 102, name: "vicky", department: "BSc CS" },
    { id: 103, name: "akash", department: "BCA" },
    { id: 104, name: "bharathiun", department: "BCom" }
];

const result = students.find((student) => {
    return student.id === 104;
});

console.log(result);