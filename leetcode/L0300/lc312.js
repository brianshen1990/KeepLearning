/**
312. Burst Balloons

Given n balloons, indexed from 0 to n-1. Each balloon is painted with a number on it represented by array nums. You are asked to burst all the balloons. If the you burst balloon i you will get nums[left] * nums[i] * nums[right] coins. Here left and right are adjacent indices of i. After the burst, the left and right then becomes adjacent.

Find the maximum coins you can collect by bursting the balloons wisely.

Note:

You may imagine nums[-1] = nums[n] = 1. They are not real therefore you can not burst them.
0 ≤ n ≤ 500, 0 ≤ nums[i] ≤ 100
Example:

Input: [3,1,5,8]
Output: 167 
Explanation: nums = [3,1,5,8] --> [3,5,8] -->   [3,8]   -->  [8]  --> []
             coins =  3*1*5      +  3*5*8    +  1*3*8      + 1*8*1   = 167

 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    if ( nums.length === 0 ) {
        return 0;
    }
    if ( nums.length === 1 ) {
        return nums[0];
    }
    
    let res = 0;
    
    const cache = {};
    const len = nums.length;
    nums.unshift(1);
    nums.push(1);
    
    
    const helper = ( beg, end ) => {
        // not included (beg, end);
        if ( beg+1 === end ) {
            return 0;
        }
        if ( cache[`${beg},${end}`] ) {
            return cache[`${beg},${end}`];
        }
        if ( beg+2 === end ) {
            let ret = nums[beg] * nums[beg+1] * nums[beg+2];
            cache[`${beg},${end}`] = ret;
            return ret;
        }
        
        let max = 0;
        for ( let i = beg+1 ; i < end ; i++ ) {
            // i is the last one to pop   
            const left = helper( beg, i );
            const right = helper(i, end);
            let tempMax = nums[i] * nums[beg] * nums[end] + left + right;
            // console.log( beg, end, i, tempMax );
            max = Math.max( max, tempMax );
        }
        cache[`${beg},${end}`] = max;
        return max;
    }
    
    return helper(0, len+1);
    
};


/** 
[3,1,5,8]
[3,1,5,8,1,3,4]
[]
[3,1,5]
[3,4,5,6,7,8,7,6,5,4,3,2]
[1,2,3,4,5,4,3,2,3,4,5,6,7,8,9,8,7,6,7,8,9,10]
*/