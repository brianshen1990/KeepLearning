/**
137. Single Number II

Given a non-empty array of integers, every element appears three times except for one, which appears exactly once. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

Example 1:

Input: [2,2,3,2]
Output: 3
Example 2:

Input: [0,1,0,1,0,1,99]
Output: 99
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    
    let x2 = 0, x1 = 0, mask = 0;
    
    for ( let i = 0; i < nums.length ; i++ ) {
        x2 ^= x1 & nums[i];
        x1 ^= nums[i];
        
        mask = ~ ( x1 & x2 );
        
        x2 = x2 & mask;
        x1 = x1 & mask;
    }
    
    return ( x1 | x2 );
};


/**
[2,2,3,2]
[0,1,0,1,0,1,99]
[1,1,1,3]
[3]
[3,3,3,4,4,4,5]
 */