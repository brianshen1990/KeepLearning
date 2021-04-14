/**

464. Can I Win

In the "100 game" two players take turns adding, to a running total, any integer from 1 to 10. The player who first causes the running total to reach or exceed 100 wins.

What if we change the game so that players cannot re-use integers?

For example, two players might take turns drawing from a common pool of numbers from 1 to 15 without replacement until they reach a total >= 100.

Given two integers maxChoosableInteger and desiredTotal, return true if the first player to move can force a win, otherwise return false. Assume both players play optimally.

 

Example 1:

Input: maxChoosableInteger = 10, desiredTotal = 11
Output: false
Explanation:
No matter which integer the first player choose, the first player will lose.
The first player can choose an integer from 1 up to 10.
If the first player choose 1, the second player can only choose integers from 2 up to 10.
The second player will win by choosing 10 and get a total = 11, which is >= desiredTotal.
Same with other integers chosen by the first player, the second player will always win.
Example 2:

Input: maxChoosableInteger = 10, desiredTotal = 0
Output: true
Example 3:

Input: maxChoosableInteger = 10, desiredTotal = 1
Output: true
 

Constraints:

1 <= maxChoosableInteger <= 20
0 <= desiredTotal <= 300

 */


/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
 var canIWin = function(maxChoosableInteger, desiredTotal) {
    if ( desiredTotal === 0 ) {
        return true;
    }
    if ( desiredTotal <= maxChoosableInteger ) {
        return true;
    }
    if ( (1+maxChoosableInteger) * maxChoosableInteger / 2 < desiredTotal ) {
        return false;
    }
    
    
    const free = new Array( maxChoosableInteger + 1 ).fill(1);
    const cache = {};
    
    const helper = ( des ) => {
        if ( des <=  0 ) {
            return false;
        }
        const str = free.join("");
        if ( str in cache ) {
            return cache[str];
        }
        
        let ret = false;
        
        for ( let i = 1 ; i < free.length ; i++ ) {
            if ( free[i] === 1 ) {
                free[i] = 0;
                // if one opponnet fail, i can win
                if ( !helper(des - i) ) {
                    ret = true;
                    // console.log("hit");
                    free[i] = 1;
                    break;
                }
                free[i] = 1;
            }
        }
        // console.log(str, des, ret);
        cache[str] = ret;
        return ret;
    }
    
    return helper( desiredTotal );
};

/**
10
11
10
0
10
1
13
300
20
103
 */