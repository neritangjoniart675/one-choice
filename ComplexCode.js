/*
Filename: ComplexCode.js
Content: A complex JavaScript code demonstrating an online shopping system.
*/

// Define a class for products
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  calculateTotal() {
    return this.price * this.quantity;
  }

  displayProductDetails() {
    console.log(
      `Product: ${this.name}\nPrice: $${this.price}\nQuantity: ${this.quantity}`
    );
  }
}

// Define a class for the shopping cart
class ShoppingCart {
  constructor(customerName, currentDate) {
    this.customerName = customerName;
    this.currentDate = currentDate;
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  calculateTotal() {
    let total = 0;
    for (let product of this.products) {
      total += product.calculateTotal();
    }
    return total;
  }

  displayCartDetails() {
    console.log(`Customer Name: ${this.customerName}`);
    console.log(`Date: ${this.currentDate}`);
    console.log("Products in Cart:");
    for (let product of this.products) {
      product.displayProductDetails();
    }
    console.log(`Total: $${this.calculateTotal()}`);
  }
}

// Instantiate some products
let product1 = new Product("iPhone 12", 999, 1);
let product2 = new Product("AirPods Pro", 249, 2);
let product3 = new Product("Apple Watch", 399, 1);

// Create a shopping cart and add products
let cart = new ShoppingCart("John Doe", "2022-12-01");
cart.addProduct(product1);
cart.addProduct(product2);
cart.addProduct(product3);

// Display the cart details
cart.displayCartDetails();
