/**
659. Split Array into Consecutive Subsequences

You are given an integer array nums that is sorted in non-decreasing order.

Determine if it is possible to split nums into one or more subsequences such that both of the following conditions are true:

Each subsequence is a consecutive increasing sequence (i.e. each integer is exactly one more than the previous integer).
All subsequences have a length of 3 or more.
Return true if you can split nums according to the above conditions, or false otherwise.

A subsequence of an array is a new array that is formed from the original array by deleting some (can be none) of the elements without disturbing the relative positions of the remaining elements. (i.e., [1,3,5] is a subsequence of [1,2,3,4,5] while [1,3,2] is not).

 

Example 1:

Input: nums = [1,2,3,3,4,5]
Output: true
Explanation: nums can be split into the following subsequences:
[1,2,3,3,4,5] --> 1, 2, 3
[1,2,3,3,4,5] --> 3, 4, 5
Example 2:

Input: nums = [1,2,3,3,4,4,5,5]
Output: true
Explanation: nums can be split into the following subsequences:
[1,2,3,3,4,4,5,5] --> 1, 2, 3, 4, 5
[1,2,3,3,4,4,5,5] --> 3, 4, 5
Example 3:

Input: nums = [1,2,3,4,4,5]
Output: false
Explanation: It is impossible to split nums into consecutive increasing subsequences of length 3 or more.
 

Constraints:

1 <= nums.length <= 104
-1000 <= nums[i] <= 1000
nums is sorted in non-decreasing order.
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var isPossible = function(nums) {
    // console.log("=========");
    let temp = -1;
    let arr = [];
    
    let index = 0;
    while ( index < nums.length ) {
        let nIndex = index;
        while ( nIndex < nums.length && nums[nIndex] === nums[index] ) {
            nIndex++;
        }
        const len = nIndex - index;
        if ( arr.length === 0 ) {
            // fresh start
            // console.log("hit refresh", temp, nums[index])
            arr = new Array(len).fill(1);
        } else {
            if ( temp + 1 === nums[index] ) {
                // console.log("hit continue", temp, nums[index], len)
                if ( nIndex - index < arr.length ) {
                    if ( arr[len] < 3 ) return false;
                    for ( let i = 0 ; i < len; i++ ) {
                        arr[i] += 1;
                    }
                    arr = arr.slice( 0, len );
                } else {
                    arr = [ ...new Array(len -arr.length ).fill(1), ...arr.map(item => item + 1)];   
                }     
            } else {
                // not continue
                // console.log("hit not continue")
                if ( arr[0] < 3 ) {
                    return false; // can't continue
                }
                temp = nums[index];
                arr = new Array(len).fill(1);
            }
        }
        temp = nums[index];
        // console.log(temp, arr );
        index = nIndex;
    }
    
    if ( arr[0] < 3 ) return false;
    return true;
    
};

/**
[1,2,3,3,4,5]
[1,2,3,3,4,4,5,5]
[1,2,3,4,4,5]
[1,2,3,3,4,4,4,5,5,5,6]
[1,2,3,3,4,4,4,5,5,6]
[1,2,3,3,4,4,4,5,5,5,6,8,9,10,11]
[1,2,3,3,4,4,4,5,5,5,6,8,9]
[-1000,0,1000]
[-1000,-999,999]
[-1000,-999,-998]
[1,2,3,3,4,4,5,5,6,7,7,8,8,9]
[1,2,3,5,6,7]
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
[3,4,4,5,6,7,8,9,10,11]
*/