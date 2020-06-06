/**
209. Minimum Size Subarray Sum

Given an array of n positive integers and a positive integer s, find the minimal length of a contiguous subarray of which the sum ≥ s. If there isn't one, return 0 instead.

Example: 

Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: the subarray [4,3] has the minimal length under the problem constraint.
Follow up:
If you have figured out the O(n) solution, try coding another solution of which the time complexity is O(n log n). 

 */

/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
    if ( !(nums && nums.length > 0) ) {
        return 0;
    }
    let minLen = Number.MAX_VALUE;
    let beg = 0, end = 0, sum = nums[0];
    // [beg, end], include
    while ( beg < nums.length && end < nums.length ) {
        // console.log( `iter ${beg}, ${end}, ${sum}` );
        if ( sum >= s ) {
            if ( minLen > (end - beg + 1)  ) {
                // console.log(`hit ${end}, ${beg}`);
                minLen = end - beg + 1;
            }
            // skip and release 1
            sum -= nums[beg];
            beg++;
        } else {
            // add 1
            end++;
            if ( end < nums.length ) {
                sum += nums[end];
            }
        }
    }
    if ( minLen === Number.MAX_VALUE ) {
        minLen = 0;
    }
    return minLen;
    
};

/**
7
[2,3,1,2,4,3]
8
[2,3,1,2,4,3]
100
[2,3,1,2,4,3]
2
[2,3,1,2,4,3]
2
[]
1
[2,3,1,2,4,3]
 */