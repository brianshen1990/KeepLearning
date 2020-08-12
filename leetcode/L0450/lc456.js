/**

456. 132 Pattern

Given a sequence of n integers a1, a2, ..., an, a 132 pattern is a subsequence ai, aj, ak such that i < j < k and ai < ak < aj. Design an algorithm that takes a list of n numbers as input and checks whether there is a 132 pattern in the list.

Note: n will be less than 15,000.

Example 1:
Input: [1, 2, 3, 4]

Output: False

Explanation: There is no 132 pattern in the sequence.
Example 2:
Input: [3, 1, 4, 2]

Output: True

Explanation: There is a 132 pattern in the sequence: [1, 4, 2].
Example 3:
Input: [-1, 3, 2, 0]

Output: True

Explanation: There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    if ( nums.length <= 2 ) {
        return false;
    }
    
    let smallest = nums[0];
    const leftSmall = []; // decreasing
    for ( let i = 0 ; i < nums.length ; i++ ) {
        smallest = Math.min(nums[i], smallest);
        leftSmall.push(smallest);
    }
    
    // look for this smallest, maxium, (sec-maxium)
    // console.log( leftSmall );
    
    let secMax = nums[nums.length-1];
    let secsecMax = leftSmall[nums.length-1]; // why need this, because if the most right if the biggest, if will cause problems
    for ( let i = nums.length-2 ; i >= 1 ; i-- ) {
        secMax = Math.max( secMax, nums[i+1] );
        if ( secMax !== nums[i+1] && nums[i+1] > leftSmall[i+1] && nums[i+1] > secsecMax) {
            secsecMax = nums[i+1];
        }
        if ( (nums[i] > secMax && secMax > leftSmall[i]) || 
                (nums[i] > secsecMax && secsecMax > leftSmall[i] )) {
            return true; // find one   
        }
    }
    return false;
};

/**
[1,2,3,4]
[3, 1, 4, 2]
[-1, 3, 2, 0]
[-1, 3, -2, 2]
[-1, 3, -2]
[-1, 3, -2,-1]
[-2,1,2,-2,1,2]
[-2,1,2,-2,1,2,2]
 */