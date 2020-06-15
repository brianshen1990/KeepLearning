/**
283. Move Zeroes

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations.

 */


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    let beg = 0, noZero = 0;
    while( beg < nums.length ) {
        if ( nums[beg] !== 0 ) {
            nums[noZero] = nums[beg];
            noZero++;
        }
        beg++;
    }
    while ( noZero < nums.length ) {
        nums[noZero] = 0;
        noZero++;
    }
    
};

/**
[0,1,0,3,12]
[]
[1]
[0]
[1,0]
[1,0]
 */