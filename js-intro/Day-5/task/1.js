let price = 5000;

const discount = new Promise((resolve, reject) => {
    if (price > 0) {
        let discountAmount = (price * 10) / 100;
        let finalPrice = price - discountAmount;

        resolve(finalPrice);
    } else {

         reject("Invalid Price");
    }
});

discount
    .then((result) => {
        console.log("Discounted Price:", result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Discount Calculation Completed");
    });
