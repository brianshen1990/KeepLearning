/**
905. Sort Array By Parity

Given an array of 4 digits, return the largest 24 hour time that can be made.
Given an array A of non-negative integers, return an array consisting of all the even elements of A, followed by all the odd elements of A.

You may return any answer array that satisfies this condition.

 

Example 1:

Input: [3,1,2,4]
Output: [2,4,3,1]
The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
 

Note:

1 <= A.length <= 5000
0 <= A[i] <= 5000

 */

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    return [ ...A.filter( item => item % 2 === 0 ), ...A.filter( item => item % 2 === 1 ) ] ;   
};


/**
[3,1,2,4]
[0]
[0,2,3]
[1,3,5]
 */