/**
229. Majority Element II

Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

Note: The algorithm should run in linear time and in O(1) space.

Example 1:

Input: [3,2,3]
Output: [3]
Example 2:

Input: [1,1,1,3,3,2,2,2]
Output: [1,2]
 */


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    
    // find the 2 most ocuurance 
    let candicate1 = Number.MAX_VALUE, count1 = 0, candicate2 = Number.MAX_VALUE, count2 = 0;
    
    for ( let i = 0 ; i < nums.length ; i++ ) {
        if ( candicate1 === nums[i] ) {
            count1++;
        } else if ( candicate2 === nums[i] ) {
            count2++;
        } else if ( count1 === 0 ) {
            candicate1 = nums[i]; 
            count1  = 1;
        } else if ( count2 === 0 ) {
            candicate2 = nums[i];
            count2 = 1;
        } else {
            count1--;
            count2--;
        }
    }
    
    // console.log(candicate1, count1, candicate2, count2);
    
    const max = Math.floor( nums.length / 3 ) + 1;
    count1 = 0;
    count2 = 0;
    nums.map( item => {
        if ( item === candicate1 ) {
           count1++; 
        } 
        if ( item === candicate2 ) {
           count2++; 
        } 
    });
    const ret = [];
    if ( count1 >= max ) {
        ret.push(candicate1);
    } 
    if ( count2 >= max ) {
       ret.push(candicate2); 
    }
    return ret;
    
};


/**
[3,2,3]
[1,1,1,3,3,2,2,2]
[0,0,0]
 */