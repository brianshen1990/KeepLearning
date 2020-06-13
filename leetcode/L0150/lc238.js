/**
238. Product of Array Except Self

Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Constraint: It's guaranteed that the product of the elements of any prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).

Follow up:
Could you solve it with constant space complexity? (The output array does not count as extra space for the purpose of space complexity analysis.)

 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf2nd_On_O1 = function(nums) {
    
    const ret = new Array( nums.length ).fill(1);
    
    let prod = 1;
    for ( let i = 1; i < nums.length ; i++ ) {
        ret[i] = nums[i-1] * prod;
        prod = ret[i];
    }
    // console.log( ret );
    
    prod = 1;
    for ( let i = nums.length - 2 ; i >= 0 ; i-- ) {
        prod = prod * nums[i+1];
        ret[i] = ret [i] * prod;
    }
    // console.log( ret );
    
    return ret;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    
    let product = 1;
    let productZero = 1;
    let countZero = 0;
    for ( let i = 0; i < nums.length ; i++ ) {
        if ( nums[i] !== 0 ) {
            productZero = productZero * nums[i];
        } else {
            countZero++;
        }
        product = product * nums[i];
    }
    console.log( product, productZero );
    
    const ret =  new Array(nums.length).fill(1);
    for ( let i = 0; i < nums.length ; i++ ) {
        if ( nums[i] === 0 ) {
            if ( countZero === 1  ) {
                ret[i] = productZero;
            } else {
                ret[i] = 0;
            }
        } else {
           ret[i] = product / nums[i]; 
        }
    }
    return ret;
    
};

/**
[1,2,3,4]
[4,3,2,1]
[0,0]
[0,0,1]
[0,1]
 */

