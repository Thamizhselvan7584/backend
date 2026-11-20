const Product = () => {
  const product = { id: 1, name: "18 pro Max", brand: "Apple", price: 20000, category: "phone" }
  return (
    <>
      <div  className="flex justify-center items-center flex-col ">
        <h1>{product.id}</h1>
        <h1>{product.name}</h1>
        <h1>Brand : {product.brand}</h1>
        <h1>Discount price : {product.price*0.9}</h1>
        <h1>Category : {product.category}</h1>
        <h1> Original price : {product.price}</h1>
        

      </div>
    </>
  );
};

export default Product;