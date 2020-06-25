/**
357. Count Numbers with Unique Digits

Given a non-negative integer n, count all numbers with unique digits, x, where 0 ≤ x < 10n.

Example:

Input: 2
Output: 91 
Explanation: The answer should be the total numbers in the range of 0 ≤ x < 100, 
             excluding 11,22,33,44,55,66,77,88,99
 */

/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    
    let seq = new Array(n+1);
    seq[0] = 1;
    seq[1] = 1+9;
    
    if ( n > 10 ) {
        n = 10;
    }
    
    for ( let i = 2 ; i <= n ; i++ ) {
        let temp = 9;
        for ( let j = 9 ; j > 10 - i ; j-- )  {
            temp = temp * j;
        }
        seq[i] = seq[i-1] + temp;        
    }
    
    return seq[n];
    
};

/** 
0
1
2
3
4
5
6
7
9
10
11
12
13
1222
*/