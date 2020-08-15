/**

485. Max Consecutive Ones

Given a binary array, find the maximum number of consecutive 1s in this array.

Example 1:
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
Note:

The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let ret = 0;
    let index = 0;
    while ( index < nums.length ) {
        if ( nums[index] === 1 ) {
            let nextIndex = index;
            while ( nextIndex < nums.length && nums[nextIndex] === 1 ) {
                nextIndex++;
            }
            ret = Math.max( ret, nextIndex - index );
            index = nextIndex;
        } else {
            index++;
        }
    }
    return ret;
    
};


/**
[1,0,1,1,0,1]
[0,0]
[0,0,1]
[1]
[]
[1,1,1,0,0,0,1,1,1,1,1]
 */