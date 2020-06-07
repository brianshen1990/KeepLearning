/**
216. Combination Sum III

Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.

Note:

All numbers will be positive integers.
The solution set must not contain duplicate combinations.
Example 1:

Input: k = 3, n = 7
Output: [[1,2,4]]
Example 2:

Input: k = 3, n = 9
Output: [[1,2,6], [1,3,5], [2,3,4]]

*/


/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    
    const helper = (leftK, beg, leftN, arr, res) => {
        // console.log( leftK, beg, leftN, arr, res )
        if ( leftK === 0 && leftN === 0 ) {
            res.push([...arr]);
            return;
        }
        if ( leftK <= 0 || leftN <= 0 ) {
            return;
        }
        
        // let end = ( leftN - beg * ( leftK - 1 ) );
        for ( let i = beg ; i <= 9 ; i++ ) {
            arr.push(i);
            helper( leftK-1, i+1, leftN-i, arr, res );
            arr.pop();
        }
    }
    
    const res = [];
    helper( k, 1, n, [], res );
    
    return res;
};



/**
3
7
3
9
4
23
8
100
*/