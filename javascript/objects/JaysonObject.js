const products = [
    { name: "Product A", price: 20, category: "Electronics" },
    { name: "Product E", price: 60, category: "Clothes" },
    { name: "Product G", price: 80, category: "Clothes" },
    { name: "Product H", price: 90, category: "Electronics" },
    { name: "Product C", price: 40, category: "Electronics" },
    { name: "Product D", price: 50, category: "Clothes" },
    { name: "Product B", price: 30, category: "Clothes" },
    { name: "Product F", price: 70, category: "Electronics" },
  ];
  
  // Expected array output - JAYSON
// [
//    { name: "Product A", price: 30, category: "Electronics" },
//    { name: "Product E", price: 70, category: "Clothes" },
//    { name: "Product G", price: 90, category: "Clothes" },
//    { name: "Product H", price: 100, category: "Electronics" },
//    { name: "Product C", price: 50, category: "Electronics" },
//    { name: "Product D", price: 60, category: "Clothes" },
//    { name: "Product B", price: 40, category: "Clothes" },
//    { name: "Product F", price: 80, category: "Electronics" },
// ]

const productNewPriceList = products.map((product) => {
    product.price += 10;
    return product;
  });

console.log(productNewPriceList);