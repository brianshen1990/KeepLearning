/**
169. Majority Element

Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2

 */


 /**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if ( nums.length === 1 ||   nums.length === 2 ) {
        return nums[0];
    }
    
    let ret = nums[0];
    let count = 1;
    
    for ( let i = 1; i < nums.length ; i++ ) {
        if ( count > 0 ) {
            if ( ret === nums[i] ) {
                count++;
            } else {
                count--;
            }
            
        } else {
            ret = nums[i];
            count = 1;
        }
        // console.log(ret);
    }
    return ret;
    
};



/**
[2,3,3]
[2,2,1,1,1,2,2]
[1]
[1,1]
[1,1,2]
[2,1,1]
[1,2,1]

 */