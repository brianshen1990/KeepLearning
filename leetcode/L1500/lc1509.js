/**

1509. Minimum Difference Between Largest and Smallest Value in Three Moves

Given an array nums, you are allowed to choose one element of nums and change it by any value in one move.

Return the minimum difference between the largest and smallest value of nums after perfoming at most 3 moves.

 

Example 1:

Input: nums = [5,3,2,4]
Output: 0
Explanation: Change the array [5,3,2,4] to [2,2,2,2].
The difference between the maximum and minimum is 2-2 = 0.
Example 2:

Input: nums = [1,5,0,10,14]
Output: 1
Explanation: Change the array [1,5,0,10,14] to [1,1,0,1,1]. 
The difference between the maximum and minimum is 1-0 = 1.
Example 3:

Input: nums = [6,6,0,1,1,4,6]
Output: 2
Example 4:

Input: nums = [1,5,6,14,15]
Output: 1
 

Constraints:

1 <= nums.length <= 10^5
-10^9 <= nums[i] <= 10^9

 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
    if ( nums.length <= 4 ) {
        return 0; // we can do this
    }
    
    const cache = {};
    nums.forEach( item => {
        cache[item] = cache[item] || 0;
        cache[item]++;
    });
    nums = Object.keys(cache).map(item => parseInt(item)).sort( (a,b) => a-b );
    // console.log( nums );
    const LEN = nums.length;
    if ( LEN === 1 ) {
        return 0; // all same
    }
    // LEFT 3 RIGHT 0
    // LEFT 2 RIGHT 1
    // LEFT 1 RIGHT 2
    // LEFT 0 RIGHT 3
    let minDiff = nums[LEN-1] - nums[0];
    
    for ( let i = 3 ; i >= 0 ; i-- ) {
        // left
        let remainLeft = i; 
        let leftIndex = 0;
        while ( remainLeft > 0 ) {
            remainLeft -= cache[ nums[leftIndex] ];
            if ( remainLeft >= 0 ) {
                leftIndex++;
            }
        }
        
        // right
        let remainRight = 3 - i ;
        let rightIndex = LEN-1;
        while ( remainRight > 0 ) {
            remainRight -= cache[ nums[rightIndex] ];
            if ( remainRight >= 0 ) {
                rightIndex--;
            }
        }
        // console.log("Taking left ",  i, "The res is ",nums[rightIndex], nums[leftIndex]   )
        minDiff = Math.min( minDiff, nums[rightIndex] - nums[leftIndex]  );
    }
    return minDiff;
    
};


/**
[5,3,2,4]
[1,5,0,10,14]
[6,6,0,1,1,4,6]
[1,5,6,14,15]
[1,5,6,14,15,123,234,2,35,23,5,34,52,312,3,123,12,312,4,12,412,4,14,12]
[1,1,1,1,1,1,1]
[1,1,1,1,1,1,1,2,2]
[1,1,1,1,1,1,1,2,2,2,2,2]
[1,1,1,1,1,1,1,2,3,3,3,3]
 */