/**
869. Reordered Power of 2

You are given an integer n. We reorder the digits in any order (including the original order) such that the leading digit is not zero.

Return true if and only if we can do this so that the resulting number is a power of two.

 

Example 1:

Input: n = 1
Output: true
Example 2:

Input: n = 10
Output: false
Example 3:

Input: n = 16
Output: true
Example 4:

Input: n = 24
Output: false
Example 5:

Input: n = 46
Output: true
 

Constraints:

1 <= n <= 109
*/


/**
 * @param {number} n
 * @return {boolean}
 */
 var reorderedPowerOf2 = function(n) {
    const cache = new Set();
    let index = 0 ;
    while ( true ) {
        const temp = Math.pow(2, index);
        if ( temp > 1000000000 ) break;
        const strCache = new Array(10).fill(0);
        temp.toString().split("").map( item => strCache[parseInt(item)] += 1 );
        cache.add(strCache.join("_"));
        index++;
    }
    
    const nStrCache = new Array(10).fill(0);
    const nStr = n.toString().split("").map( item => nStrCache[parseInt(item)] += 1 );
    return cache.has(nStrCache.join("_"));
};


/**
1
10
16
24
46
79217312
100000000
  */
