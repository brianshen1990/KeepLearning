/**
121. Best Time to Buy and Sell Stock

Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
Example 2:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.

*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if( prices.length === 0 ) {
        return 0;
    }
    
    let small = prices[0];
    let gap = 0;
    for( let i = 1; i< prices.length ; i++ ) {
        if ( prices[i] < small ) {
            small = prices[i];
        } else {
            let tempGap = prices[i] - small;
            if ( tempGap > gap ) {
                gap = tempGap;
            }
        }
    }
    return gap;
};


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitDP = function(prices) {
    if ( prices.length <= 0 ) {
        return 0;
    }
    
    // init
    let seq = new Array(prices.length).fill(0);
    
    // go dp 
    for ( let i = 1 ; i < prices.length; i++ ) {
        let max = 0;
        for ( let j = 0 ; j < i ; j++ ) {
            max = Math.max( prices[i]-prices[j], max );
        }
        seq[i] = max;
    }
    
    return Math.max(...seq)
};

/**
[7,1,5,3,6,4]
[7,6,4,3,1]
[]
[7]
[1,7]
 */