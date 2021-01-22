/**
667. Beautiful Arrangement II

Given two integers n and k, you need to construct a list which contains n different positive integers ranging from 1 to n and obeys the following requirement:
Suppose this list is [a1, a2, a3, ... , an], then the list [|a1 - a2|, |a2 - a3|, |a3 - a4|, ... , |an-1 - an|] has exactly k distinct integers.

If there are multiple answers, print any of them.

Example 1:
Input: n = 3, k = 1
Output: [1, 2, 3]
Explanation: The [1, 2, 3] has three different positive integers ranging from 1 to 3, and the [1, 1] has exactly 1 distinct integer: 1.
Example 2:
Input: n = 3, k = 2
Output: [1, 3, 2]
Explanation: The [1, 3, 2] has three different positive integers ranging from 1 to 3, and the [2, 1] has exactly 2 distinct integers: 1 and 2.
Note:
The n and k are in the range 1 <= k < n <= 104.

 */

/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function(n, k) {
    // 1 -> 1 2 3 4 5 6
    // 2 -> 1 3 2 4 5 6
    // 3 -> 1 4 2 3 5 6
    
    let end = 1 + k;

    let flag = true;
    let ret = [1];
    for ( let i = k ; i >= 1 ; i-- ) {
        // console.log(ret[ret.length-1], i);
        ret.push( ret[ret.length-1] + (flag ? i : -i) );
        flag = !flag;
    }
    
    for ( let i = end+1; i <= n ; i++ ) {
        ret.push(i);
    }
    
    return ret;
};

/**
3
2
3
1
6
1
6
2
6
3
10000
23
10000
1
1000
10
*/