/**
665. Non-decreasing Array

Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most 1 element.

We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).

 

Example 1:

Input: nums = [4,2,3]
Output: true
Explanation: You could modify the first 4 to 1 to get a non-decreasing array.
Example 2:

Input: nums = [4,2,1]
Output: false
Explanation: You can't get a non-decreasing array by modify at most one element.
 

Constraints:

1 <= n <= 10 ^ 4
- 10 ^ 5 <= nums[i] <= 10 ^ 5

 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let count = 0 ;
    
    for ( let i = 0 ; i < nums.length-1 ; i++ ) {
        if ( nums[i] > nums[i+1] ) {
            count++;
            if ( count > 1 ) {
                return false;
            }
            
            // replace now
            if ( i > 0 && nums[i+1] < nums[i-1]  ) {
                // 2, 4* , 1 , 5
                nums[i+1] = nums[i];
            } else {
                // 1,4*,2,3 -> 1,2,2,3
                // 4*,2,3 -> 2,2,3
                nums[i] = nums[i+1];
            }
        }
    }
    return true;
    
};

/**
[4,2,3]
[4,2,1]
[1]
*/