/**

1317. Convert Integer to the Sum of Two No-Zero Integers

Given an integer n. No-Zero integer is a positive integer which doesn't contain any 0 in its decimal representation.

Return a list of two integers [A, B] where:

A and B are No-Zero integers.
A + B = n
It's guarateed that there is at least one valid solution. If there are many valid solutions you can return any of them.

 

Example 1:

Input: n = 2
Output: [1,1]
Explanation: A = 1, B = 1. A + B = n and both A and B don't contain any 0 in their decimal representation.
Example 2:

Input: n = 11
Output: [2,9]
Example 3:

Input: n = 10000
Output: [1,9999]
Example 4:

Input: n = 69
Output: [1,68]
Example 5:

Input: n = 1010
Output: [11,999]
 

Constraints:

2 <= n <= 10^4


 */

/**
 * @param {number} n
 * @return {number[]}
 */
 var getNoZeroIntegers = function(n) {
    const intArr = n.toString().split("").map( item => parseInt(item) );
    
    let first = "";
    let second = "";
    
    let flag = false;
    for ( let i = intArr.length-1; i >= 0; i-- ) {
        let intVar = intArr[i];
        if ( i !== 0  ) {
            if ( intVar <= 2 ) {
                first = "3" + first;
                second = ( flag ? `${intVar + 10 -4}` : `${intVar + 10 -3}` ) + second;
                flag = true;
            } else {
                first = "1" + first;
                second = ( flag ? `${intVar-2}` : `${intVar-1}` ) + second;
                flag = false;
            }
        } else {
            if ( intVar === 1 && flag ) {
                continue;
            }
            first = "1" + first;
            second = ( flag ? `${intVar-2}` : `${intVar-1}` ) + second;
        }
    }
    return [ parseInt(first), parseInt(second) ];
    
    
};

/**
2
11
10000
1000
100
10
9999
5555
69
1010
 */