let ProductPrice = 5000;
let Discount = 10;

const priceCalculation = new Promise((resolve, reject) => {
    if(Discount > 0 ) {
        const discountedPrice = (ProductPrice * Discount) / 100;
         let finalPrice = ProductPrice - discountedPrice;
        resolve(finalPrice);
    } else {
        reject("Invalid input values");
    }
});

priceCalculation.then((result)=>{
    console.log("Final Price after discount: " + result);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log("Price calculation completed");
})