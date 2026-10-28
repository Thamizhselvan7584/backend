const products = [
    { id: 101, name: "Laptop", price: 50000 },
    { id: 102, name: "Mobile", price: 20000 },
    { id: 103, name: "Headphone", price: 1500 },
    { id: 104, name: "Keyboard", price: 1000 }
];

const result = products.findIndex((product) => {
    return product.id === 103;
});

console.log(result);