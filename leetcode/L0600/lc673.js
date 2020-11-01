/**
673. Number of Longest Increasing Subsequence

Given an integer array nums, return the number of longest increasing subsequences.

 

Example 1:

Input: nums = [1,3,5,4,7]
Output: 2
Explanation: The two longest increasing subsequences are [1, 3, 4, 7] and [1, 3, 5, 7].
Example 2:

Input: nums = [2,2,2,2,2]
Output: 5
Explanation: The length of longest continuous increasing subsequence is 1, and there are 5 subsequences' length is 1, so output 5.

 

Constraints:

0 <= nums.length <= 2000
-106 <= nums[i] <= 106

 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function(nums) {
    // DP 
    if ( nums.length === 0 ) return 0;
    
    const seq = [];
    for ( let i = 0 ; i < nums.length ; i++ ) {
        seq.push( { max: 1, freq: 1 } );
    }
    
    for ( let i = 1 ; i < nums.length ; i++ ) {
        let ele = seq[i];
        for ( let j = 0 ; j < i ; j++ ) {
            if ( nums[i] > nums[j] ) {
                if ( ele.max === seq[j].max + 1 ) {
                    ele.freq += seq[j].freq; // hit max again
                } else if ( ele.max < seq[j].max + 1 ) {
                    ele = { max: seq[j].max + 1, freq: seq[j].freq }; // new max
                }
            }
        }
        seq[i] = ele;
    }
    // console.log( seq );
    // return 0;
    const MAX = Math.max( ...seq.map( item => item.max ) );
    return seq.filter( item => item.max === MAX ).reduce( (acc, cur) => acc + cur.freq , 0 );
    
};


/**
[1,3,5,4,7]
[1,3,5,4,7,2,4,5,8]
[1,3,5,4,7,4,3,2,1]
[2,2,2,2,2]
[]
[1]
[2,1]
*/