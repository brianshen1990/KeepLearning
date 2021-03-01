/**
643. Maximum Average Subarray I

Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value. And you need to output the maximum average value.

Example 1:

Input: [1,12,-5,-6,50,3], k = 4
Output: 12.75
Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75
 

Note:

1 <= k <= n <= 30,000.
Elements of the given array will be in the range [-10,000, 10,000].

 */



/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    
    let temp = nums.slice(0, k).reduce((acc, item) => acc+item, 0);
    let max = temp;
    
    for ( let i = k ; i < nums.length ; i++ ) {
        temp = temp + nums[i] - nums[i-k];
        max = Math.max( max, temp );
    }
    
    return max / k;
    
};

/**
[1,12,-5,-6,50,3]
4
*/