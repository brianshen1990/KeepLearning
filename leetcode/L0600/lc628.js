/**
628. Maximum Product of Three Numbers

Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

 

Example 1:

Input: nums = [1,2,3]
Output: 6
Example 2:

Input: nums = [1,2,3,4]
Output: 24
Example 3:

Input: nums = [-1,-2,-3]
Output: -6
 

Constraints:

3 <= nums.length <= 104
-1000 <= nums[i] <= 1000


 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    // better with K top to reduce time complexity
    nums.sort( (a,b) => a-b );
    // -3 -2 -1
    // -3 -2 -1 1
    // -3 -2 -1 1 5
    // -6 1 5 7
    const LEN = nums.length
    return Math.max( nums[LEN-1] * nums[LEN-2] * nums[LEN-3],
                   nums[0] * nums[1] * nums[LEN-1]);
    
};

/**
[1,2,3]
[1,2,3,4]
[-1,-2,-3]
[-3,-2,-1]
[-3,-2,-1,1]
[-3,-2,-1,1,5]
[-3,-2,-1,1,5,7]
[-6,1,5,7]
[-3,-2,-1,0]
[-3,-2,-1,0, 1]
[-3,-2,-1,1,5, 0]
[-3,-2,-1,1,5,7,0]
*/