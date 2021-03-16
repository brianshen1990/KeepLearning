/**
1399. Count Largest Group

Given an integer n. Each number from 1 to n is grouped according to the sum of its digits. 

Return how many groups have the largest size.

 

Example 1:

Input: n = 13
Output: 4
Explanation: There are 9 groups in total, they are grouped according sum of its digits of numbers from 1 to 13:
[1,10], [2,11], [3,12], [4,13], [5], [6], [7], [8], [9]. There are 4 groups with largest size.
Example 2:

Input: n = 2
Output: 2
Explanation: There are 2 groups [1], [2] of size 1.
Example 3:

Input: n = 15
Output: 6
Example 4:

Input: n = 24
Output: 5
 

Constraints:

1 <= n <= 10^4

 */

/**
 * @param {number} n
 * @return {number}
 */
 var countLargestGroup = function(n) {
    const cache = {};
    let max = 0;
    let count = 0;
    
    new Array(n).fill(0).forEach( (_, index) => {
        const sum = (index+1).toString().split("").map( item => parseInt(item) ).reduce( (acc, ele) => acc+ele, 0 );
        // console.log( index+1, sum );
        
        cache[sum] = cache[sum] || 0;
        cache[sum] += 1;
        
        if ( cache[sum] > max ) {
            max = cache[sum];
            count = 1;
        } else if ( cache[sum] === max ) {
            count++;
        }
        
    })
    // console.log(max,count,  cache);
    return count;
    
};

/**
13
2
15
24
1
10000
 */