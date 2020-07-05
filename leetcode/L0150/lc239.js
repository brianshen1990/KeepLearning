/**
239. Sliding Window Maximum

Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right. You can only see the k numbers in the window. Each time the sliding window moves right by one position. Return the max sliding window.

Follow up:
Could you solve it in linear time?

Example:

Input: nums = [1,3,-1,-3,5,3,6,7], and k = 3
Output: [3,3,5,5,6,7] 
Explanation: 

Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7
 */


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {

    // brute force 
    let ret = [];
    for ( let i = k-1 ; i < nums.length ; i++ ) {
        let max = -Number.MAX_VALUE;
        for ( let j = i - k + 1 ; j <= i ; j++ ) {
            max = Math.max( max, nums[j] );
        }
        ret.push( max );
    }    
    return ret;
    
};


/**
[1,3,-1,-3,5,3,6,7]
3
[1,3,-1,-3,5,3,6,7]
4
[1,3,-1,-3,5,3,6,7]
1
 */

