/**

1567. Maximum Length of Subarray With Positive Product

Given an array of integers nums, find the maximum length of a subarray where the product of all its elements is positive.

A subarray of an array is a consecutive sequence of zero or more values taken out of that array.

Return the maximum length of a subarray with positive product.

 

Example 1:

Input: nums = [1,-2,-3,4]
Output: 4
Explanation: The array nums already has a positive product of 24.
Example 2:

Input: nums = [0,1,-2,-3,-4]
Output: 3
Explanation: The longest subarray with positive product is [1,-2,-3] which has a product of 6.
Notice that we cannot include 0 in the subarray since that'll make the product 0 which is not positive.
Example 3:

Input: nums = [-1,-2,-3,0,1]
Output: 2
Explanation: The longest subarray with positive product is [-1,-2] or [-2,-3].
Example 4:

Input: nums = [-1,2]
Output: 1
Example 5:

Input: nums = [1,2,3,5,-6,4,0,10]
Output: 4
 

Constraints:

1 <= nums.length <= 10^5
-10^9 <= nums[i] <= 10^9

 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function(nums) {
    const seq = nums.map( item => {
        return { pos: item>0?1:0, zero:item===0?1:0, neg:item<0?1:0 };
    });
    
    let max = seq[0].pos;
    for ( let i = 1 ; i < nums.length ; i++ ) {
        if ( nums[i] === 0 ) {
            continue;
        };
        let tempPos = seq[i].pos;
        let tempNeg = seq[i].neg;
        // console.log( i, nums[i], seq[i-1] );
        if ( nums[i] > 0 && seq[i-1].pos > 0 ) {
            tempPos = Math.max( tempPos, seq[i-1].pos + 1 ); 
        }
        if ( nums[i] < 0 && seq[i-1].neg > 0 ) {
            tempPos = Math.max( tempPos, seq[i-1].neg + 1 ); 
        }
        if ( nums[i] > 0 && seq[i-1].neg > 0 ) {
            // console.log("hit", i)
            tempNeg = Math.max( tempNeg, seq[i-1].neg + 1 )
        } 
        if ( nums[i] < 0 && seq[i-1].pos > 0 ) {
            tempNeg = Math.max( tempNeg, seq[i-1].pos + 1 )
        }
        
        seq[i].pos = tempPos;
        seq[i].neg = tempNeg;
        
        max = Math.max( tempPos, max );
    }
    // console.log( ...seq )
    return max;
};


/**
[1,-2,-3,4]
[0,1,-2,-3,-4]
[-1,-2,-3,0,1]
[-1,2]
[-1]
[1]
[-1,1]
[1,2,3,5,-6,4,0,10]
[-16,0,-5,2,2,-13,11,8]
 */