/**
 * 
611. Valid Triangle Number

Given an array consists of non-negative integers, your task is to count the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.
Example 1:
Input: [2,2,3,4]
Output: 3
Explanation:
Valid combinations are: 
2,3,4 (using the first 2)
2,3,4 (using the second 2)
2,2,3
Note:
The length of the given array won't exceed 1000.
The integers in the given array are in the range of [0, 1000].
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
 var triangleNumber = function(nums) {
    nums.sort( (a,b) => a-b );
    // console.log(nums);
    let ret = 0;
    
    for ( let i = 0 ; i < nums.length ; i++ ) {
        for ( let j = i+1; j < nums.length ; j++ ) {
            for ( let k = j+1; k < nums.length; k++ ) {
                if ( nums[i] + nums[j] > nums[k] ) {
                    ret++;
                } else {
                    break;
                }
            }
        }
    }
    return ret;
    
};
/**
[2,2,3,4]
*/