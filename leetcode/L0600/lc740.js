/**

740. Delete and Earn

Given an array nums of integers, you can perform operations on the array.

In each operation, you pick any nums[i] and delete it to earn nums[i] points. After, you must delete every element equal to nums[i] - 1 or nums[i] + 1.

You start with 0 points. Return the maximum number of points you can earn by applying such operations.

 

Example 1:

Input: nums = [3,4,2]
Output: 6
Explanation: Delete 4 to earn 4 points, consequently 3 is also deleted.
Then, delete 2 to earn 2 points.
6 total points are earned.
Example 2:

Input: nums = [2,2,3,3,3,4]
Output: 9
Explanation: Delete 3 to earn 3 points, deleting both 2's and the 4.
Then, delete 3 again to earn 3 points, and 3 again to earn 3 points.
9 total points are earned.
 

Constraints:

1 <= nums.length <= 2 * 104
1 <= nums[i] <= 104

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var deleteAndEarn = function(nums) {
    const cache = {};
    nums.forEach( item => {
        cache[item] = cache[item] || 0;
        cache[item]++;
    });
    
    const arr = Object.keys(cache).map( item => parseInt(item) ).sort( (a,b) => b-a );
    // console.log( arr );
    // console.log(cache);
    
    const dpArr = new Array(arr.length);
    dpArr[0] = arr[0] * cache[arr[0]];
    for ( let i = 1 ; i < arr.length ; i++ ) {
        let temp = arr[i] * cache[arr[i]];
        for ( let j = 0 ; j < i ; j++ ) {
            if ( arr[j] !== arr[i] + 1 ) {
                temp = Math.max( temp, dpArr[j] + arr[i] * cache[arr[i]] );
            }
        }
        dpArr[i] = temp;
    }
    
    // console.log( dpArr );
    return Math.max(...dpArr);
};

/**
[3,4,2]
[2,2,3,3,3,4]
[2,2,3,3,3,4,5,6,7,8,9,2,2,2,2,2,23,3,4,5,5,4,4]
[1]
[2]
[1,1]
 */