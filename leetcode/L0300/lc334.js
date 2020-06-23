/**
334. Increasing Triplet Subsequence

Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.

Formally the function should:

Return true if there exists i, j, k
such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.
Note: Your algorithm should run in O(n) time complexity and O(1) space complexity.

Example 1:

Input: [1,2,3,4,5]
Output: true
Example 2:

Input: [5,4,3,2,1]
Output: false

 */


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    if ( nums.length < 3 ) {
        return false;
    }
    
    const seq = new Array(nums.length).fill(0);
    seq[0] = 1;
    let found = false;
    
    for ( let i = 1 ; i < seq.length ; i++ ) {
        let max = 1;
        for ( let j = 0 ; j < i ; j++ ) {
            if ( nums[i] > nums[j] ) {
                max = Math.max( max, seq[j] + 1 );
                if ( max >= 3 ) {
                    found = true;
                    break;
                }
            } 
        }
        seq[i] = max;
        if ( max >= 3 ) {
            found = true;
            break;
        }
    }
    // console.log( seq );
    
    return found;
};


/** 
[1,2,3,4,5]
[5,4,3,2,1]
[1,4,3,2,5]
[]
[1,2,3]
[1,2]
[1,3,2]
*/