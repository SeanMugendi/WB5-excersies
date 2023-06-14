// Define the products array
let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    { product: "Peanut M&Ms", price: 2.89 },
    // TODO: Add 6 more candies with various price ranges
  ];
  
  // Search for candies that cost less than $4.00
  let candiesLessThan4 = [];
  for (let i = 0; i < products.length; i++) {
    let candy = products[i];
    if (candy.price < 4.00) {
      candiesLessThan4.push(candy.product);
    }
  }
  
  // Search for candies with "M&M" in their name
  let candiesWithMM = [];
  for (let i = 0; i < products.length; i++) {
    let candy = products[i];
    if (candy.product.includes("M&M")) {
      candiesWithMM.push(candy.product);
    }
  }
  
  // Check if we carry "Swedish Fish"
  let carrySwedishFish = false;
  for (let i = 0; i < products.length; i++) {
    let candy = products[i];
    if (candy.product === "Swedish Fish") {
      carrySwedishFish = true;
      break;
    }
  }
  
  // Print the results
  console.log("Candies that cost less than $4.00: " + candiesLessThan4.join(", "));
  console.log("Candies with 'M&M' in their name: " + candiesWithMM.join(", "));
  console.log("Do we carry 'Swedish Fish'? " + (carrySwedishFish ? "Yes" : "No"));
  