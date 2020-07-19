/**
421. Maximum XOR of Two Numbers in an Array

Given a non-empty array of numbers, a0, a1, a2, … , an-1, where 0 ≤ ai < 231.

Find the maximum result of ai XOR aj, where 0 ≤ i, j < n.

Could you do this in O(n) runtime?

Example:

Input: [3, 10, 5, 25, 2, 8]

Output: 28

Explanation: The maximum result is 5 ^ 25 = 28.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
    const tire = {};
    for ( let i = 0 ; i < nums.length ; i++ ) {
        let numStr = nums[i].toString(2).padStart(31, "0");
        // console.log(nums[i], numStr);
        let t = tire;
        for ( let j = 0 ; j < numStr.length ; j++ ) {
            t[numStr[j]] = t[numStr[j]] || {};
            t = t[numStr[j]];
        }
    }
    // console.log(tire);
    
    const helper = (l, r, path) => {
        if ( !l ) {
            // console.log( path, parseInt(path.substr(0, path.length-1), 2) );
            return parseInt(path.substr(0, path.length-1), 2);
        }
        // console.log( l, r );
        let max = -1;
        if (  ("1" in l && "0" in r)  || ( "0" in l && "1" in r)  ) {
            // console.log("add 1")
            if ( "1" in l && "0" in r ) {
                max = Math.max(max, helper( l['1'], r['0'], path+"1" ) );
            }
            if ( "0" in l && "1" in r ) {
                max = Math.max(max, helper( l[0], r[1], path+"1" ) );
            }
        } else {
            // console.log("add 0")
            if ( !("1" in l ) && !("1" in r) ) {
                 max = Math.max(max, helper( l[0], r[0], path+"0" ) );
            }
            if ( !("0" in l ) && !("0" in r) ) {
                 max = Math.max(max, helper( l[1], r[1], path+"0" ) );
            }
        }
        return max;
    }

    return helper(tire, tire, "0");
    // return 0;
    
};

/** 
[3,10,5,25,2,8]
[3,10,5,25,2,8,12312,123,12,123]
[3,3,3,3,3]
[0,1,2,3,3]
[3]
[45,43]
*/