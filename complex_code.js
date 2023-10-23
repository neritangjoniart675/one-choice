/* filename: complex_code.js */

// This code is a simulation of a stock trading system
// It generates random stock prices and performs advanced calculations

class Stock {
  constructor(symbol, initialPrice) {
    this.symbol = symbol;
    this.price = initialPrice;
    this.history = [initialPrice];
  }

  updatePrice() {
    const minChange = -0.1;
    const maxChange = 0.1;
    const change = Math.random() * (maxChange - minChange) + minChange;
    this.price += this.price * change;
    this.history.push(this.price);
  }

  getGraphData() {
    const graphData = [];
    let time = 0;
    for (let i = 0; i < this.history.length; i++) {
      graphData.push({ time, price: this.history[i] });
      time++;
    }
    return graphData;
  }
}

class StockMarket {
  constructor() {
    this.stocks = [];
  }

  addStock(stock) {
    this.stocks.push(stock);
  }

  simulateTrading(duration) {
    for (let i = 0; i < duration; i++) {
      for (let j = 0; j < this.stocks.length; j++) {
        const stock = this.stocks[j];
        stock.updatePrice();
      }
    }
  }
}

// Create stocks with random initial prices
const stock1 = new Stock("XYZ", Math.random() * 100);
const stock2 = new Stock("ABC", Math.random() * 100);
const stock3 = new Stock("DEF", Math.random() * 100);

// Create stock market and add stocks
const stockMarket = new StockMarket();
stockMarket.addStock(stock1);
stockMarket.addStock(stock2);
stockMarket.addStock(stock3);

// Simulate trading for 100 days
stockMarket.simulateTrading(100);

// Output graph data for each stock
for (let i = 0; i < stockMarket.stocks.length; i++) {
  const stock = stockMarket.stocks[i];
  console.log(`Stock ${stock.symbol} price history:`);
  console.log(stock.getGraphData());
}