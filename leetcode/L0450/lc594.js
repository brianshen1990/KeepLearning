/**

594. Longest Harmonious Subsequence

We define a harmounious array as an array where the difference between its maximum value and its minimum value is exactly 1.

Now, given an integer array, you need to find the length of its longest harmonious subsequence among all its possible subsequences.

Example 1:

Input: [1,3,2,2,5,2,3,7]
Output: 5
Explanation: The longest harmonious subsequence is [3,2,2,2,3].
 

Note: The length of the input array will not exceed 20,000.
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    nums = nums.sort( (a,b) => a-b );
    
    const map = {};
    nums.forEach( item => {
        map[item] = map[item] || 0;
        map[item]++;
    })
    
    let max = 0;
    let i = 1;
    while ( i < nums.length ) {
        if ( nums[i] === nums[i-1] + 1  ) {
            // got it;
            max = Math.max( max, map[nums[i]] + map[nums[i-1]] ) ;
        }
        i++;
    }
    
    return max;
};


/**
[1,3,2,2,5,2,3,7]
[1,3,2,2,5,2]
[]
[12,3,4,54,5,6,7,7,8,6,6,5,5,4,4,5,5,5,54,4,4,3,3,3,3,34,3,43]
[1]
[1,1]
 */