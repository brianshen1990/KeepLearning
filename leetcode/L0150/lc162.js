/**
162. Find Peak Element

A peak element is an element that is greater than its neighbors.

Given an input array nums, where nums[i] ≠ nums[i+1], find a peak element and return its index.

The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.

You may imagine that nums[-1] = nums[n] = -∞.

Example 1:

Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.
Example 2:

Input: nums = [1,2,1,3,5,6,4]
Output: 1 or 5 
Explanation: Your function can return either index number 1 where the peak element is 2, 
             or index number 5 where the peak element is 6.
Note:

Your solution should be in logarithmic complexity.

 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    
    if ( nums.length === 0 ) {
        return -1;
    }
    if ( nums.length === 1 ) {
        return 0;
    }
    if ( nums.length === 2 ) {
        return nums[1] >= nums[0] ? 1 : 0;
    }
    
    let beg = 0;
    let end = nums.length;
    let mid = Math.floor( ( beg + end ) / 2 );
    let found = -1;
    
    while ( beg + 1 < end ) {
        if ( nums[mid] > nums[mid-1] && nums[mid] > nums[mid+1] ) {
            // top 
            found = mid;
            break;
        }
        if ( nums[mid] < nums[mid-1] && nums[mid] < nums[mid+1] ) {
            // button 
            beg = mid;
        } else if ( nums[mid-1] > nums[mid] && nums[mid] > nums[mid+1]  ) {
            // down
            end = mid;
        } else {
            // rise
            beg = mid;
        }
        mid = Math.floor( ( beg+ end ) / 2 );
    }
    if ( found >= 0 ) {
        return found;
    }
    let ret = beg;
    if ( nums[mid] > nums[ret] ) {
        ret = mid;
    }
    if ( nums[end] > nums[ret] ) {
        ret = end;
    }
    return ret;
    
    
    
};

/**

[2,1]
[1,2]
[3,2,1]
[1,2,3]
[1,2,3,1]
[1]
[1,2,1,3,5,6,4]
[1,2,1,3,5,6,4,5,6,7,8,6,5,4,3]

 */