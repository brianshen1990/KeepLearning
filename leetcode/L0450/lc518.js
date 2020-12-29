/**

518. Coin Change 2

You are given coins of different denominations and a total amount of money. Write a function to compute the number of combinations that make up that amount. You may assume that you have infinite number of each kind of coin.

 

Example 1:

Input: amount = 5, coins = [1, 2, 5]
Output: 4
Explanation: there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1
Example 2:

Input: amount = 3, coins = [2]
Output: 0
Explanation: the amount of 3 cannot be made up just with coins of 2.
Example 3:

Input: amount = 10, coins = [10] 
Output: 1
 

Note:

You can assume that

0 <= amount <= 5000
1 <= coin <= 5000
the number of coins is less than 500
the answer is guaranteed to fit into signed 32-bit integer

 */



/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    if ( amount === 0 ) {
        return 1;
    }
    
    coins = coins.sort( (a,b) => b-a );
    // console.log( coins );
    
    const cache = {};
    
    const helper = ( left, beg ) => {
        if ( left === 0 ) {
            return 1;
        }
        if ( beg >= coins.length || left < 0) return 0;
        
        const str = `${left}_${beg}`;
        if ( str in cache ) return cache[str];
        
        let ret = 0;
        for ( let i = beg ; i < coins.length ; i++ ) {
            if ( left >= coins[i] ) {
                if ( i === coins.length-1 ) {
                    if ( left % coins[coins.length-1] === 0 ) {
                        ret++;
                    }
                } else {
                    let cnt = 1 ;
                    while ( cnt * coins[i] <= left ) {
                        ret += helper(left - cnt * coins[i], i+1);
                        cnt++;
                    }
                }
            }
        }
        cache[str] = ret;
        return ret;
    }
    let ret = helper( amount, 0);
    return ret;
};



/**
5000
[1,2,3,4]
5
[1,1,1]
5
[1,1,2,5]
5
[1,2,5]
3
[2]
10
[10]
0
[1,2]
 */