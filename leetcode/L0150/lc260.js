/**
260. Single Number III

Given an array of numbers nums, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.

Example:

Input:  [1,2,1,3,2,5]
Output: [3,5]
Note:

The order of the result is not important. So in the above example, [5, 3] is also correct.
Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?
 */


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let sum = nums[0];
    for ( let i = 1 ; i < nums.length ; i++ ) {
        sum = (sum ^ nums[i]) ;
    }
    let n = 1;
    while ( true ) {
        // console.log( sum & n );
        if ( sum & n ) {
            break;
        } else {
            n = n * 2;
        }
    }
    // console.log( sum, n );
    sum = n;
    
    
    let sum1 = NaN;
    let sum2 = NaN;
    
    for ( let i = 0 ; i < nums.length ; i++ ) {
        if ( nums[i] & n ) {
            // first
            if ( isNaN( sum1 ) ) {
                sum1 = nums[i];
            } else {
                sum1 ^= nums[i];
            }
        } else {
            // second
            if ( isNaN( sum2 ) ) {
                sum2 = nums[i];
            } else {
                sum2 ^= nums[i];
            }
        }
    } 
    
    return [sum1, sum2];
};

/**
[1,2,1,3,2,5]
[3,5]
[2,3,2,5]
[1,2,1,3,2,5,4,4,6,6,6,6]
 */