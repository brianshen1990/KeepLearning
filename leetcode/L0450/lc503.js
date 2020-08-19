/**

503. Next Greater Element II

Given a circular array (the next element of the last element is the first element of the array), print the Next Greater Number for every element. The Next Greater Number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, output -1 for this number.

Example 1:
Input: [1,2,1]
Output: [2,-1,2]
Explanation: The first 1's next greater number is 2; 
The number 2 can't find next greater number; 
The second 1's next greater number needs to search circularly, which is also 2.
Note: The length of given array won't exceed 10000.
 */


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const LEN = nums.length;
    const ret = new Array( LEN ).fill(-1);
    nums = [...nums, ...nums]; // for circle
    const stack = [];
    for ( let i = 0 ; i < nums.length ; i++ ) {
        while ( stack.length > 0 && nums[i] > stack[stack.length-1].val ) {
            ret[ stack.pop().index % LEN ] = nums[i];
        }
        stack.push( {
            val: nums[i],
            index: i
        });
    }
    return ret;
};

/**
[1,2,1]
[4,1,2]
[1,3,4,2]
[2,4]
[1,2,3,4]
 */