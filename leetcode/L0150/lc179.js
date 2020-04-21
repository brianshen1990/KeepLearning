/**
179. Largest Number

Given a list of non negative integers, arrange them such that they form the largest number.

Example 1:

Input: [10,2]
Output: "210"
Example 2:

Input: [3,30,34,5,9]
Output: "9534330"
Note: The result may be very large, so you need to return a string instead of an integer.
 */

/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    let ret = nums.map( (item) => `${item}` ).sort( (a,b) => {
        return `${a}${b}` < `${b}${a}` ? 1 : -1; 
    }).join('');
    while ( ret.length > 1 && ret[0] === '0' ) {
        ret = ret.substring(1)
    }
    return ret;
};


/**
[10,2]
[3,30,34,5,9]
[3,30,34,5,9,33,35,36,32,31,321292]
[10]
[1,1]
[]
[0,0,1,2]
[0,0]
[824,938,1399,5607,6973,5703,9609,4398,8247]
 */