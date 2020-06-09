/**

213. House Robber II

You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

Example 1:

Input: [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2),
             because they are adjacent houses.
Example 2:

Input: [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if ( nums.length === 0 ) {
        return 0;
    }
    if ( nums.length === 1 ) {
        return nums[0];
    }
    
    // init
    let arr = new Array( nums.length );
    let arrNo = new Array( nums.length );
    for ( let i = 0; i < nums.length ; i++ ) {
        arr[i] = { yes: -1, no: -1 };
        arrNo[i] = { yes: -1, no: -1 };
    }
    arr[0].yes = nums[0];
    arr[1].yes = nums[1]; // though no steal, still pretend steal
    arr[1].no = arr[0].yes;
    
    arrNo[0].no = 0;
    arrNo[1].yes = nums[1];
    arrNo[1].no = 0;
    
    
    // go dp
    for ( let i = 2; i <= arr.length - 1 ; i++ ) {
        if ( i === arr.length - 1 ) {
            arr[i].no = Math.max( arr[i-1].yes, arr[i-1].no);
            arr[i].yes = Math.max( arr[i-1].yes, arr[i-1].no);
            
            arrNo[i].yes = arrNo[i-1].no + nums[i];
            arrNo[i].no = Math.max( arrNo[i-1].yes, arrNo[i-1].no);
        } else {
            arr[i].yes = arr[i-1].no + nums[i];
            arr[i].no = Math.max( arr[i-1].yes, arr[i-1].no);
            arrNo[i].yes = arrNo[i-1].no + nums[i];
            arrNo[i].no = Math.max( arrNo[i-1].yes, arrNo[i-1].no);
        }
    }
    
    
    // res
    return Math.max(arrNo[arr.length-1].yes, arrNo[arr.length-1].no, 
                    arr[arr.length-1].yes, arr[arr.length-1].no);
};


/**
[2,3,2]
[1,2,3,1]
[2,3]
[1,2,3,4,5,6,7,3,31,1,23]
[]
[3]
[2,1]
 */