/**
1493. Longest Subarray of 1's After Deleting One Element

Given a binary array nums, you should delete one element from it.

Return the size of the longest non-empty subarray containing only 1's in the resulting array.

Return 0 if there is no such subarray.

 

Example 1:

Input: nums = [1,1,0,1]
Output: 3
Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
Example 2:

Input: nums = [0,1,1,1,0,1,1,0,1]
Output: 5
Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
Example 3:

Input: nums = [1,1,1]
Output: 2
Explanation: You must delete one element.
Example 4:

Input: nums = [1,1,0,0,1,1,1,0,1]
Output: 4
Example 5:

Input: nums = [0,0,0]
Output: 0
 

Constraints:

1 <= nums.length <= 10^5
nums[i] is either 0 or 1.
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let ret = 0;
    let found = false;
    
    let index = 0;
    let prev1Len = 0;
    let prev0Len = 0;
    while ( index < nums.length ) {
        let sameIndex = index + 1;
        while ( sameIndex < nums.length && nums[sameIndex] === nums[index] ) {
            sameIndex++;
        } // len
        const curLen = sameIndex - index;
            
        if ( nums[index] === 0 ) { // 0 
            prev0Len = curLen;
            found = true;
        } else { // 1
            if ( prev0Len === 1 ) { // one 1, join them
                ret = Math.max( ret, curLen + prev1Len );
            } else { // no 0 ahead || many 0 ahead, so add only 1 len
                ret = Math.max( ret, curLen );   
            }
            prev1Len = curLen;
        }
        index = sameIndex;
    }
    if ( !found ) { // whether all 1
       ret = ret-1;  
    }
    return ret;
};


/**
[1,1,0,1]
[0,1,1,1,0,1,1,0,1]
[1,1,1]
[1,1,0,0,1,1,1,0,1]
[0,0,0]
[1]
[0]
[1,0]
[1,1]
 */