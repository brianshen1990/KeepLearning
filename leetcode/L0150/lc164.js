/**
164. Maximum Gap
Given an unsorted array, find the maximum difference between the successive elements in its sorted form.

Return 0 if the array contains less than 2 elements.

Example 1:

Input: [3,6,9,1]
Output: 3
Explanation: The sorted form of the array is [1,3,6,9], either
             (3,6) or (6,9) has the maximum difference 3.
Example 2:

Input: [10]
Output: 0
Explanation: The array contains less than 2 elements, therefore return 0.
Note:

You may assume all elements in the array are non-negative integers and fit in the 32-bit signed integer range.
Try to solve it in linear time/space.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    if ( nums.length === 0 || nums.length === 1 ) {
        return 0;
    }
    
    nums = nums.sort( (a,b) => { return a-b } );
    // console.log(nums)
    
    let gap = nums[1] - nums[0];
    for ( let i = 2; i < nums.length ; i++ ) {
        if ( gap < nums[i] - nums[i-1] ) {
            gap = nums[i] - nums[i-1];
        }
    }
    return gap;
    
};


/**

[3,6,9,1]
[]
[10]
[1,3,100]

 */