/**
410. Split Array Largest Sum

Given an array nums which consists of non-negative integers and an integer m, you can split the array into m non-empty continuous subarrays.

Write an algorithm to minimize the largest sum among these m subarrays.

 

Example 1:

Input: nums = [7,2,5,10,8], m = 2
Output: 18
Explanation:
There are four ways to split nums into two subarrays.
The best way is to split it into [7,2,5] and [10,8],
where the largest sum among the two subarrays is only 18.
Example 2:

Input: nums = [1,2,3,4,5], m = 2
Output: 9
Example 3:

Input: nums = [1,4,4], m = 3
Output: 4
 

Constraints:

1 <= nums.length <= 1000
0 <= nums[i] <= 106
1 <= m <= min(50, nums.length)
 */


/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
    let small = 1;
    let large = nums.reduce( (cur, prev) => cur+prev, 0 );
    
    const helper = ( middle ) => {
        let ret = 0;
        let index = 0;
        let sum = 0;
        while ( index < nums.length ) {
            if ( nums[index] > middle ) {
                return m+1; // too large 
            } else if ( sum + nums[index] > middle ) {
                ret++;
                sum = nums[index];
            } else {
                sum += nums[index];
            }
            index++;
        }
        
        if ( sum > 0 ) ret++;
        return ret;
    }
    
    while ( small + 1 < large ) {
        let middle = Math.floor( (small+large)/2 );
        if ( helper( middle ) <= m ) {
            large = middle;
        } else {
            small = middle+1;
        }
    }
    
    if ( helper(small) <= m ) {
        return small;
    }
    return large;
    
};


/** 
[7,2,5,10,8]
2
[1,2,3,4,5]
2
[1,4,4]
3
*/