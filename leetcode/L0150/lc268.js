/**
268. Missing Number

Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

Example 1:

Input: [3,0,1]
Output: 2
Example 2:

Input: [9,6,4,2,3,5,7,0,1]
Output: 8
Note:
Your algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?

 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    if ( nums === 0 ) {
        return 0;
    }
    let sum = nums[0];
    for ( let i = 1 ; i < nums.length ; i++ ) {
        sum = sum ^ nums[i];
        sum = sum ^ i;
    }
    sum = sum ^ nums.length;
    return sum;
};

/**
[3,0,1]
[9,6,4,2,3,5,7,0,1]
[]
[1]
[0]
 */