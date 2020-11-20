/**

1304. Find N Unique Integers Sum up to Zero

Given an integer n, return any array containing n unique integers such that they add up to 0.

 

Example 1:

Input: n = 5
Output: [-7,-1,1,3,4]
Explanation: These arrays also are accepted [-5,-1,1,2,3] , [-3,-1,2,-2,4].
Example 2:

Input: n = 3
Output: [-1,0,1]
Example 3:

Input: n = 1
Output: [0]
 

Constraints:

1 <= n <= 1000
 */


/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
    if ( n % 2 === 0 ) {
        return new Array(n/2).fill(0).map( (item, index) => index+1 ).map(item => [item, -item]).flat()
    } else {
        return [0, ...new Array(Math.floor(n/2)).fill(0).map( (item, index) => index+1 ).map(item => [item, -item]).flat()]
    }
};

/**
5
3
1
2
67
48
 */