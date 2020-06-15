/**
287. Find the Duplicate Number

Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

Example 1:

Input: [1,3,4,2,2]
Output: 2
Example 2:

Input: [3,1,3,4,2]
Output: 3
Note:

You must not modify the array (assume the array is read only).
You must use only constant, O(1) extra space.
Your runtime complexity should be less than O(n2).
There is only one duplicate number in the array, but it could be repeated more than once.

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    if ( nums.length <= 0 ) {
        return -1;
    }
    
    let start = nums[0];
    let end = nums[start];
    
    // find a point in the circle
    while ( start !== end ) {
        start = nums[start];
        end = nums[ nums[end] ];
    }
    
    // circle len
    let len = 0;
    while( true ) {
        start = nums[start];
        end = nums[ nums[end] ];
        len++;
        if ( start === end ) {
            break;
        }
    }
    console.log(len);
    
    // same point
    start = nums[0];
    end = nums[0];
    while (len--) {
        end = nums[end];
    }
    while ( start !== end ) {
        start = nums[start];
        end = nums[end];
    }
    
    return start;
};


/**
[1,3,4,2,2]
[3,1,3,4,2]
[3,1,3,2,4]
[3,3,3,4,2]
 */