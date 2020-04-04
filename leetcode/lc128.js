/**
128. Longest Consecutive Sequence

Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

Your algorithm should run in O(n) complexity.

Example:

Input: [100, 4, 200, 1, 3, 2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.


*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let map = {};
    
    for ( let i = 0; i< nums.length ; i++ ) {
        map[nums[i]] = true;
    }
    // console.log( map );
    let retLen = 0;
    for ( let i = 0; i< nums.length ; i++ ) {
        // there is a number before it , just pass
        let prev = nums[i] - 1;
        if ( ! map[ prev ] ) {
            let tempLen = 1;
            let iter = nums[i];
            map[iter] = false;
            // console.log( iter );
            iter++;
            while( map[ iter ] ) {
                map[iter] = false;
                iter++;
                tempLen++;
            }
            
            if (tempLen > retLen) {
                retLen = tempLen ;
            }
        }
    }
    return retLen;
};

/**
[100,4,200,1,3,2]
[6,4,0,1,3,2]
[1]
[]
[4,3,2,1,19,18,17,16,15,14,13]
 */