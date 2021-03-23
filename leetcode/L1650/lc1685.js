/**
1685. Sum of Absolute Differences in a Sorted Array

You are given an integer array nums sorted in non-decreasing order.

Build and return an integer array result with the same length as nums such that result[i] is equal to the summation of absolute differences between nums[i] and all the other elements in the array.

In other words, result[i] is equal to sum(|nums[i]-nums[j]|) where 0 <= j < nums.length and j != i (0-indexed).

 

Example 1:

Input: nums = [2,3,5]
Output: [4,3,5]
Explanation: Assuming the arrays are 0-indexed, then
result[0] = |2-2| + |2-3| + |2-5| = 0 + 1 + 3 = 4,
result[1] = |3-2| + |3-3| + |3-5| = 1 + 0 + 2 = 3,
result[2] = |5-2| + |5-3| + |5-5| = 3 + 2 + 0 = 5.
Example 2:

Input: nums = [1,4,6,8,10]
Output: [24,15,13,15,21]
 

Constraints:

2 <= nums.length <= 105
1 <= nums[i] <= nums[i + 1] <= 104
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var getSumAbsoluteDifferences = function(nums) {
    // 10 
    // 2 -> ( 0, 10 ) - 10 - 2 * 3
    // 3 => ( 2, 8 ) => |8 - 3*2| +  |2 - 3*1|
    // 5 => ( 5,5 ) => | 5 -5 | + | 5 - 5*2 | = 5
    
    
    let left = 0 ;
    let right = nums.reduce( (acc, ele) => acc + ele, 0);
    
    const ret = [];
    
    for ( let i = 0 ; i < nums.length ; i++ ) {
        ret.push( Math.abs(left - nums[i]*i) + Math.abs(right - nums[i] * (nums.length-i)) );
        left = left + nums[i];
        right = right - nums[i]
    }
    return ret;
};


/* 
[2,3,5]
[1,4,6,8,10]
[1,1]
[1,3]
[1,2,3,4,5,6,7,8,9]
*/