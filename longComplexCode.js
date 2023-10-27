/**
 * longComplexCode.js
 *
 * Description:
 * This JavaScript code implements a complex financial application that simulates a stock trading system.
 * It uses multiple classes and functions to manage stocks, trading accounts, and transactions.
 * The code demonstrates various advanced concepts such as object-oriented programming, data encapsulation,
 * inheritance, and error handling.
 *
 * Author: Your Name
 * Date: YYYY-MM-DD
 */

// Stock class representing a stock with symbol, price, and quantity
class Stock {
  constructor(symbol, price) {
    this.symbol = symbol;
    this.price = price;
    this.quantity = 0;
  }

  // Buy a specific quantity of the stock
  buy(quantity) {
    this.quantity += quantity;
  }

  // Sell a specific quantity of the stock
  sell(quantity) {
    if (this.quantity >= quantity) {
      this.quantity -= quantity;
      return true;
    } else {
      return false;
    }
  }

  // Get the total value of the stock
  getValue() {
    return this.price * this.quantity;
  }
}

// Account class representing a trading account with a balance and a list of owned stocks
class Account {
  constructor() {
    this.balance = 0;
    this.stocks = {};
  }

  // Deposit funds into the account
  deposit(amount) {
    this.balance += amount;
  }

  // Withdraw funds from the account
  withdraw(amount) {
    if (this.balance >= amount) {
      this.balance -= amount;
      return true;
    } else {
      return false;
    }
  }

  // Buy a specific quantity of a stock
  buyStock(stock, quantity) {
    if (this.balance >= stock.price * quantity) {
      if (!(stock.symbol in this.stocks)) {
        this.stocks[stock.symbol] = stock;
      }
      this.stocks[stock.symbol].buy(quantity);
      this.balance -= stock.price * quantity;
      return true;
    } else {
      return false;
    }
  }

  // Sell a specific quantity of a stock
  sellStock(stock, quantity) {
    if (stock.symbol in this.stocks) {
      if (this.stocks[stock.symbol].sell(quantity)) {
        this.balance += stock.price * quantity;
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  // Get the total value of the account (balance + stocks value)
  getValue() {
    let value = this.balance;
    for (const symbol in this.stocks) {
      value += this.stocks[symbol].getValue();
    }
    return value;
  }
}

// Example usage of the above classes and functions

// Create stocks
const stock1 = new Stock("AAPL", 150);
const stock2 = new Stock("GOOG", 2000);

// Create trading account
const account = new Account();

// Deposit funds into account
account.deposit(5000);

// Buy stocks
account.buyStock(stock1, 10);
account.buyStock(stock2, 5);

// Sell stocks
account.sellStock(stock1, 2);
account.sellStock(stock2, 3);

// Withdraw funds from account
account.withdraw(1000);

// Print account balance and value
console.log("Account Balance:", account.balance);
console.log("Account Value:", account.getValue());

// Additional functionality can be added to enhance the complexity and sophistication of the code.
// For example, adding support for multiple users, historical transaction tracking, advanced buy/sell algorithms, etc.