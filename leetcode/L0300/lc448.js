/**
448. Find All Numbers Disappeared in an Array

Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]

 */


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    // console.log("----");
    let index = 0;
    while ( index < nums.length ) {
        if ( nums[index] !== index+1 ) {
            let putPos = nums[index];
            while ( nums[putPos-1] !== putPos ) {
                let nextPos = nums[ putPos-1 ];
                nums[ putPos-1 ] = putPos;
                putPos = nextPos;
            }
            // console.log( nums.join(",") );
            index++;
        } else {
            index++;
        }   
    }
    
    let ret = [];
    for ( let i = 0 ; i < nums.length ; i++ ) {
        if ( i+1 !== nums[i] ) {
            ret.push(i+1);
        }
    }
    
    return ret;
}; 


/** 
[4,3,2,7,8,2,3,1]
[4,3,5,7,8,2,3,1]
[1,1,2]
[1,1]
*/