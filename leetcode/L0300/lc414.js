/**
414. Third Maximum Number

Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

Example 1:
Input: [3, 2, 1]

Output: 1

Explanation: The third maximum is 1.
Example 2:
Input: [1, 2]

Output: 2

Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
Example 3:
Input: [2, 2, 3, 1]

Output: 1

Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let MAX3 = [ -Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE ];
    for ( let i = 0 ; i < nums.length ; i++ ) {
        // console.log( i, nums[i], MAX3 );
        if ( MAX3.indexOf( nums[i] ) >= 0 ) {
            continue;
        }
        let empty = false;
        for ( let j = 0 ; j < MAX3.length ; j++ ) {
            if ( MAX3[j] === -Number.MAX_VALUE ) {
                MAX3[j] = nums[i];
                empty = true;
                break;
            }
        }
        if ( empty ) {
            MAX3 = MAX3.sort( (a,b) => b-a );
            continue;
        }
        if ( nums[i] > MAX3[2] ) {
            MAX3[2] = nums[i];
            MAX3 = MAX3.sort( (a,b) => b-a );
        }
    }
    
    if ( MAX3[2] !== -Number.MAX_VALUE ) {
        return MAX3[2];
    } else {
        return MAX3[0];
    }
};

/** 
[3,2,1]
[2,2,3,1]
[1,2]
[5,2,4,1,3,6,0]
*/