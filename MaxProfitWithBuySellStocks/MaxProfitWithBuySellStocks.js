function maxProfit(prices) {
    let maxProfit = 0;
    
    for (let i = 1; i < prices.length; i++) {
        // If the current price is greater than the previous one, we can make a profit
        if (prices[i] > prices[i - 1]) {
            maxProfit += prices[i] - prices[i - 1];
        }
    }
    
    return maxProfit;
}

const prices = [10, 20, 30, 15, 30, 60];
console.log(maxProfit(prices)); // Output: 45 (Buy at 10, sell at 30, buy at 15, sell at 60)
