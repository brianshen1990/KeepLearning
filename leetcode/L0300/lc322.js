/**
322. Coin Change

You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

Example 1:

Input: coins = [1, 2, 5], amount = 11
Output: 3 
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Note:
You may assume that you have an infinite number of each kind of coin.

 */


/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if ( amount === 0 ) {
        return 0;
    }
    if ( coins.length === 0 ) {
        return -1;
    }
    // pre handle
    coins = coins.sort( (a,b) => a - b );
    // console.log(coins);
    
    // init
    const seq = new Array( amount+1 ).fill(-1);
    for ( let i = 0; i < coins.length ; i++ ) {
        if ( coins[i] <= amount ) {
            seq[ coins[i] ] = 1;
        }
    }
    // console.log(seq);
    
    // go DP
    for ( let i = 1 ; i <= amount ; i++ ) {
        if ( seq[i] === 1 ) {
            continue;
        }
        let temp = Number.MAX_VALUE;
        for ( let j = 1 ; j < i ; j++ ) {
            if ( seq[j] === -1 || seq[i-j] === -1 ) {
                continue; // can't
            } else {
                // console.log( i, i-j, temp, seq[i], seq[i-j] )
                temp = Math.min( temp, seq[j] + seq[i-j] );
            }
        }
        if ( temp !== Number.MAX_VALUE ) {
            seq[i] = temp;
        } else {
            seq[i] = -1;
        }
    }
    // console.log( seq );
    
    // result
    return seq[amount];
    
};

/** 
[1,2,5]
11
[2]
3
[2]
4
[1,2,3,4,5,6,7,8,9]
712
[]
1
[]
0
[1]
0
*/