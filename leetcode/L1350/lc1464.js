/**
1464. Maximum Product of Two Elements in an Array

Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).
 

Example 1:

Input: nums = [3,4,5,2]
Output: 12 
Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 
Example 2:

Input: nums = [1,5,4,5]
Output: 16
Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.
Example 3:

Input: nums = [3,7]
Output: 12
 

Constraints:

2 <= nums.length <= 500
1 <= nums[i] <= 10^3

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let max = [nums[0] > nums[1] ? nums[0] : nums[1], 
               nums[0] > nums[1] ? nums[1] : nums[0]];
    // console.log(max);
    for ( let i = 2 ; i < nums.length ; i++ ) {
        if ( nums[i] >= max[0] ) {
            max = [nums[i], max[0]];
        } else if ( nums[i] > max[1] ) {
            max = [max[0], nums[i]]
        }
        // console.log(max);
    }
    
    // console.log(max);
    return (max[0]-1) * (max[1]-1)
    
    
};

/**
[3,4,5,2]
[1,5,4,5]
[3,7]
[3,3,3,3,3,3,3]
 */