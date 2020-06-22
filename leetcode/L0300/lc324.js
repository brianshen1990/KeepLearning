/**
324. Wiggle Sort II

Given an unsorted array nums, reorder it such that nums[0] < nums[1] > nums[2] < nums[3]....

Example 1:

Input: nums = [1, 5, 1, 1, 6, 4]
Output: One possible answer is [1, 4, 1, 5, 1, 6].
Example 2:

Input: nums = [1, 3, 2, 2, 3, 1]
Output: One possible answer is [2, 3, 1, 3, 1, 2].
Note:
You may assume all input has valid answer.

Follow Up:
Can you do it in O(n) time and/or in-place with O(1) extra space?

 */


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function(nums) {
    if ( nums.length === 0 || nums.length === 1 ) {
        return;
    }
    
    let temp = [...nums].sort( (a,b) => a-b );
    // console.log( temp, nums );
    // if inplace, use a circle, like a circled link
    
    const middle = Math.ceil(nums.length / 2);
    let ret = [];
    for ( let i = 0 ; i < middle ; i++  ) {
        nums[2*i] = temp[i];
        if ( middle + i < nums.length ) {
            nums[2*i+1] = temp[middle + i];
        }
    }
    let samePos = -1;
    for ( let i = 1; i < nums.length ; i++ ) {
        if ( nums[i] === nums[i-1] ) {
            samePos = i;
            break;
        }
    }
    if ( samePos > 0 ) {
        console.log("hit");
        temp = [...nums];
        for ( let i = samePos ; i < temp.length ; i++ ) {
            nums[i-samePos] = temp[i];
        }
        for ( let i = 0 ; i < samePos ; i++ ) {
            nums[nums.length - samePos + i] = temp[i];
        }
    }

    // console.log(nums);
};

/** 
[1,5,1,1,6,4]
[1, 3, 2, 2, 3, 1]
[4,5,5,6]
*/