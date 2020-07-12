/**
416. Partition Equal Subset Sum

Given a non-empty array containing only positive integers, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.

Note:

Each of the array element will not exceed 100.
The array size will not exceed 200.
 

Example 1:

Input: [1, 5, 11, 5]

Output: true

Explanation: The array can be partitioned as [1, 5, 5] and [11].
 

Example 2:

Input: [1, 2, 3, 5]

Output: false

Explanation: The array cannot be partitioned into equal sum subsets.

 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    
    let sum = nums.reduce( (prev, cur) => prev+cur );
    if ( sum % 2 === 1 ) {
        return false;
    }
    sum = sum / 2;
    
    nums = nums.sort( (a,b) => b-a );
    let takeOne = nums.shift();
    
    const cache = {};
    const helper = ( val ) => {
        //  console.log( val, nums.join(",") );
        if ( val === 0 ) {
            return true;
        }
        if ( val < nums[nums.length-1] ) {
            return false;
        }
        if ( nums.join("_") in cache ) {
            // console.log("hit");
            return false;
        }
        const len = nums.length;
        for ( let i = 0 ; i < len ;) {
            if ( nums[i] === val ) {
                return true;
            } else if ( nums[i] < val ) {
                const keep = nums.splice(i, 1);
                if ( helper( val-nums[i] ) ) {
                    return true;
                }
                nums.splice(i, 0, keep);
                i++;
                while ( i > 0 && nums[i]===nums[i-1] ) {
                    i++;
                }
            }  else {
                i++
                continue;
            }
        }
        cache[nums.join("_")] = false;
        return false;
    }
    
    return helper( sum-takeOne ); 
};

/** 
[1,5,11,5]
[1,2,3,5]
[1,2,3,3,6,9]
[100,99,100,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1]
*/