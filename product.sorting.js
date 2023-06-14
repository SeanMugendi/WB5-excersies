// Define the products array
let products = [
    { id: 1, name: "iPhone", price: 999 },
    { id: 2, name: "MacBook Pro", price: 1999 },
    { id: 3, name: "iPad", price: 799 },
    { id: 4, name: "Apple Watch", price: 399 },
    { id: 5, name: "AirPods", price: 199 }
  ];
  
  // Sort the products array by product name
  products.sort(function(a, b) {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    
    if (nameA < nameB) {
      return -1;
    } else if (nameA > nameB) {
      return 1;
    } else {
      return 0;
    }
  });
  
  // Display the sorted list of products by name
  console.log("Sorted Products by Name:");
  for (let i = 0; i < products.length; i++) {
    console.log(products[i].name);
  }
  
  // Draw a long dashed line
  console.log("--------------------");
  
  // Sort the products array by descending price
  products.sort(function(a, b) {
    return b.price - a.price;
  });
  
  // Display the sorted list of products by descending price
  console.log("Sorted Products by Descending Price:");
  for (let i = 0; i < products.length; i++) {
    console.log(products[i].name);
  }
  