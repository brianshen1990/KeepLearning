/**
309. Best Time to Buy and Sell Stock with Cooldown

Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times) with the following restrictions:

You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)
Example:

Input: [1,2,3,0,2]
Output: 3 
Explanation: transactions = [buy, sell, cooldown, buy, sell]

 */


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if ( prices.length < 1 ) {
        return 0;
    }
    
    const seq = [] ;
    // init 
    for ( let i = 0; i < prices.length; i++ ) {
        seq.push({
            sell: 0,
            sellable: false,
            buy: 0,
            noaction: 0,
        });
    }    
    // go DP 
    for ( let i = 1; i < prices.length ; i++ ) {
        const temp = {
            sell: 0,
            sellable: false,
            buy: seq[i-1].noaction,   // if you must buy, try best base with no action 
            noaction: Math.max(seq[i-1].noaction, seq[i-1].sell),
        }
        for ( let j = 0; j < i ; j++  ) {
            // action from j -> i 

            // if you must sell, try best sell 
            if ( prices[i] > prices[j] ) {
                // can sell 
                temp.sellable = true; 
                temp.sell = Math.max( temp.sell, seq[j].buy + prices[i] - prices[j] ); 
            }
        }
        if ( temp.sellable === false ) {
            temp.sell = seq[i-1].sell; // use last time 
        }
        seq[i] = temp;
    }
    
    // console.log(seq)
    
    return Math.max( seq[prices.length-1].noaction, seq[prices.length-1].sell );
};

/** 
[1,2,3,0,2]
[1,2,5,0,2]
[6,5,4,3,2,1,76,2,3,4,5,2,1,4,5,6,7,8]
[4,3,2,1]
[]
[1]
[1,2]
*/