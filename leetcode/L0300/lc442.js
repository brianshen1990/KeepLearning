/**
442. Find All Duplicates in an Array

Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Could you do it without extra space and in O(n) runtime?

Example:
Input:
[4,3,2,7,8,2,3,1]

Output:
[2,3]
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const ret = [];
    for ( let i = 0 ; i < nums.length ; i++ ) {
        const data = Math.abs(nums[i]);
        if ( nums [ data-1 ] < 0 ) {
            ret.push( data );
        } else { 
            nums[ data-1 ] = - nums[ data-1 ];
        }
    }
    return ret;
    
};

/** 
[4,3,2,7,8,2,3,1]
[2,2]
[]
[4,4,3,2,7,8,2,3,1]
*/