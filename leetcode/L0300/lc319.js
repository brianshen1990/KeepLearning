/**
319. Bulb Switcher

There are n bulbs that are initially off. You first turn on all the bulbs. Then, you turn off every second bulb. On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on). For the i-th round, you toggle every i bulb. For the n-th round, you only toggle the last bulb. Find how many bulbs are on after n rounds.

Example:

Input: 3
Output: 1 
Explanation: 
At first, the three bulbs are [off, off, off].
After first round, the three bulbs are [on, on, on].
After second round, the three bulbs are [on, off, on].
After third round, the three bulbs are [on, off, off]. 

So you should return 1, because there is only one bulb is on.
 */


/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function(n) {
    if ( n === 0 ) {
        return 0;
    }
    
    let count = 1;
    for ( let i = 2 ; i <= n ; i++ ) {
        const max = Math.floor( Math.sqrt(i) );
        if ( max * max === i ) {
            count += 1;
        }
    }
    return count;
};


/** 
1
2
3
4
5
6
23
1231
0
*/