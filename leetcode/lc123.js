/**
123. Best Time to Buy and Sell Stock III

Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete at most two transactions.

Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

Example 1:

Input: [3,3,5,0,0,3,1,4]
Output: 6
Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
             Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.
Example 2:

Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.
Example 3:

Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.

*/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if ( prices.length === 0 ) {
        return 0;
    }
    
    let endArr = [];
    let begArr = [];
    let pCopy = Object.assign( [], prices);
    for ( let i = 0; i< prices.length ; i++) {
        endArr.push( helper(pCopy) );
        pCopy.shift();
    }
    pCopy = Object.assign( [], prices);
    // console.log( pCopy );
    for ( let i = 0; i< prices.length ; i++ ) {
        begArr.push( helper(pCopy) );
        pCopy.pop();
    }
    begArr = begArr.reverse();
    
    // caculate once, so that it can be used many times
    let biggestArray = []; 
    for ( let i=prices.length-1 ; i >= 0 ; i--) {
        if( i === prices.length-1 ) {
            biggestArray.push( endArr[prices.length-1] );
        } else {
            if ( endArr[i] >= biggestArray[0] ) {
                biggestArray.unshift(endArr[i]);
            } else {
                biggestArray.unshift( biggestArray[0]); 
            }
        }
    }
    // console.log( endArr );
    // console.log( begArr );
    // console.log( biggestArray );
    
    let max = biggestArray[0];
    for ( let i = 0; i < prices.length-2 ; i++ ) {
        if (begArr[i] >= 0 ) {
            let tempSum = begArr[i] + biggestArray[i+1];
            if ( tempSum > max ) {
                max = tempSum;
            }
        }
    }
    return max;
};
var helper = function(prices) {
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
[3,3,5,0,0,3,1,4]
[1,2,3,4,5]
[1,2,3,4,5,6,7,8,0,1,2,4,5,657,8,9,0,3,3,4]
[]
[1]
[1,2]
[2,1]
[1,2,3]
[1,3,2]
[1,2,3,4]
 */