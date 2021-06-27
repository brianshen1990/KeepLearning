/**
698. Partition to K Equal Sum Subsets

Given an integer array nums and an integer k, return true if it is possible to divide this array into k non-empty subsets whose sums are all equal.

 

Example 1:

Input: nums = [4,3,2,3,5,2,1], k = 4
Output: true
Explanation: It's possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.
Example 2:

Input: nums = [1,2,3,4], k = 3
Output: false
 

Constraints:

1 <= k <= nums.length <= 16
1 <= nums[i] <= 104
The frequency of each element is in the range [1, 4].
 */


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
 var canPartitionKSubsets = function(nums, k) {
    const sum = nums.reduce( (ele, acc) => ele + acc, 0 );
    if ( sum % k !== 0 ) return false;
    const TARGET = sum / k;
    
    nums.sort( (a,b) => b-a );
    let visited = new Array( nums.length ).fill(0);
    
    
    const helper = (target, leftK ) => {
        if ( leftK === 0 ) return true;
        if ( target === TARGET ) {
            let index = visited.indexOf(0);
            if ( nums[index] > target ) return false;
            visited[index] = 1;
            if ( nums[index] === target ) {
                return helper( target, leftK - 1 );
            } else {
                return helper( target - nums[index], leftK )
            }
        }
        let index = -1;
        for ( let i = 0 ; i < visited.length; i++ ) {
            if ( visited[i] === 0 && nums[i] <= target ) {
                index = i;
                break;
            } 
        }
        if ( index < 0 ) return false;
        
        for ( let i = index; i < visited.length ; i++ ) {
            visited[i] = 1;
            if ( nums[i] === target ) {
                if ( helper(TARGET, leftK - 1) ) {
                    return true;
                }
            } else {
                if ( helper(target - nums[i], leftK) ) {
                    return true;
                }
            }
            visited[i] = 0;
        }
        return false;
        
    }
    
    return helper(TARGET, k);
    
};


/**
[4,3,2,3,5,2,1]
4
[1,2,3,4]
3
[4,3,2,3,5,2,1]
5
[4,3,2,3,5,2,1,4,3,2,3,5,2,1]
8
[4,3,2,3,5,2,1,4,3,2,3,5,2,1]
6
[4,3,2,3,5,2,1,4,3,2,3,5,2,1]
9
[1]
1
[1,2]
2
[2,2]
2
[100,100,100,100,99,99,99,99,98,98,98,1]
10
[3,3,2,2,2,2,1,1,1,1]
8
[1,1,1,1]
2
*/