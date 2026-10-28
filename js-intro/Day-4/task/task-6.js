const cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 500, quantity: 2 },
    { name: "Keyboard", price: 1000, quantity: 1 },
    { name: "Headphone", price: 1500, quantity: 2 }
];

const total = cart.reduce((sum, product) => {
    return sum + (product.price * product.quantity);
}, 0);

console.log("Shopping Cart Total:", total);