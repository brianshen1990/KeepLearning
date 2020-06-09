/**
198. House Robber

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

 

Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.
Example 2:

Input: nums = [2,7,9,3,1]
Output: 12
Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
             Total amount you can rob = 2 + 9 + 1 = 12.
 

Constraints:

0 <= nums.length <= 100
0 <= nums[i] <= 400
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if ( nums.length === 0 ) {
        return 0;
    }
    
    // init
    let arr = new Array( nums.length );
    for ( let i = 0; i < nums.length ; i++ ) {
        arr[i] = { yes: -1, no: -1 };
    }
    arr[0].yes = nums[0];
    arr[0].no = 0;
    
    // go dp
    for ( let i = 1; i < arr.length ; i++ ) {
        arr[i].yes = arr[i-1].no + nums[i];
        arr[i].no = Math.max( arr[i-1].yes, arr[i-1].no);
    }
    // console.log(arr);
    
    // res
    return Math.max(arr[arr.length-1].yes, arr[arr.length-1].no);
};


/**
[1,2,3,1]
[2,7,9,3,1]
[2]
[2,1,3,4,5,6,34,4,2,41]
[2,4]
[]
*/
