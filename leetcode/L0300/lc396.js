/**
396. Rotate Function

Given an array of integers A and let n to be its length.

Assume Bk to be an array obtained by rotating the array A k positions clock-wise, we define a "rotation function" F on A as follow:

F(k) = 0 * Bk[0] + 1 * Bk[1] + ... + (n-1) * Bk[n-1].

Calculate the maximum value of F(0), F(1), ..., F(n-1).

Note:
n is guaranteed to be less than 105.

Example:

A = [4, 3, 2, 6]

F(0) = (0 * 4) + (1 * 3) + (2 * 2) + (3 * 6) = 0 + 3 + 4 + 18 = 25
F(1) = (0 * 6) + (1 * 4) + (2 * 3) + (3 * 2) = 0 + 4 + 6 + 6 = 16
F(2) = (0 * 2) + (1 * 6) + (2 * 4) + (3 * 3) = 0 + 6 + 8 + 9 = 23
F(3) = (0 * 3) + (1 * 2) + (2 * 6) + (3 * 4) = 0 + 2 + 12 + 12 = 26

So the maximum value of F(0), F(1), F(2), F(3) is F(3) = 26.
 */

 /**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction2ndMath = function(A) {
    if ( A.length <= 0 ) {
        return 0;
    }
    let sum = 0; 
    let ret = 0;
    A.map( (item, index) => {
        sum += item;
        ret += index * item;
    });
    // console.log( 0, sum, ret );
    let min = ret;
    for ( let i = 1 ; i < A.length ; i++ ) {
        ret = ret + sum - A.length * A[A.length-i]; 
        // console.log(i, ret);
        min = Math.max(ret, min);
    }
    
    
    return min;
};

/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function(A) {
    if ( A.length <= 0 ) {
        return 0;
    }
    const len = A.length;
    let ret = -Number.MAX_VALUE;
    
    for ( let i = 0; i < len ; i++ ) {
        let temp = 0;
        for ( let j = 0; j < len ; j++ ) {
            temp += j * A[ (j+i) % len ];
        }
        // console.log( i, temp );
        ret = Math.max( ret, temp );
    }
    
    return ret;
};

/** 
[]
[4, 3, 2, 6]
[4, 3, 2, 6,5,2,2,3,234,132]
[-2147483648,-2147483648]
*/
