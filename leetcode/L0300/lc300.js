/**
300. Longest Increasing Subsequence

Given an unsorted array of integers, find the length of longest increasing subsequence.

Example:

Input: [10,9,2,5,3,7,101,18]
Output: 4 
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 
Note:

There may be more than one LIS combination, it is only necessary for you to return the length.
Your algorithm should run in O(n2) complexity.
Follow up: Could you improve it to O(n log n) time complexity?
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if ( nums.length === 0 ) {
        return 0;
    }
    
    // init
    let seq = new Array( nums.length ).fill(1);
    seq[0] = 1;
    
    // go seq dp
    for ( let i = 1; i < nums.length ; i++ ) {
        let max = 1;
        for ( let j = 0; j < i ; j++ ) {
            if ( nums[i] > nums[j] ) {
                max = Math.max( max, seq[j] + 1 );
            }
        }
        seq[i] = max;
    }
    // console.log(seq);
    
    // res
    return Math.max(...seq);
};


/**
[10,9,2,5,3,7,101,18]
[]
[1]
[2,1]
[3,2,1,4,5,6]
[2,2]
 */