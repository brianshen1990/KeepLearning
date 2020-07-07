/**
377. Combination Sum IV

Given an integer array with all positive numbers and no duplicates, find the number of possible combinations that add up to a positive integer target.

Example:

nums = [1, 2, 3]
target = 4

The possible combination ways are:
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)

Note that different sequences are counted as different combinations.

Therefore the output is 7.
 

Follow up:
What if negative numbers are allowed in the given array?
How does it change the problem?
What limitation we need to add to the question to allow negative numbers?

Credits:
Special thanks to @pbrother for adding this problem and creating all test cases.

 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    nums = nums.sort( (a,b) => a-b );
    
    const cache = {};
    const helper = ( n ) => {
        if ( n === 0 ) {
            return 1;
        }
        if ( n < 0 ) {
            return 0;
        }
        if ( n in cache ) {
            return cache[n];
        }
        let ret = 0;
        for ( let i = 0 ; i < nums.length ; i++ ) {
            if ( nums[i] <= n ) {
                ret += helper( n - nums[i] );
            }
        }
        cache[n] = ret;
        return ret;
    }
    
    return helper(target);
    
    
};



/** 
[1,2,3]
4
[1,2,3,4]
10
[1,2,3,4]
18
*/