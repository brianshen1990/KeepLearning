/**
413. Arithmetic Slices

A sequence of numbers is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.

For example, these are arithmetic sequences:

1, 3, 5, 7, 9
7, 7, 7, 7
3, -1, -5, -9
The following sequence is not arithmetic.

1, 1, 2, 5, 7
 
A zero-indexed array A consisting of N numbers is given. A slice of that array is any pair of integers (P, Q) such that 0 <= P < Q < N.

A slice (P, Q) of the array A is called arithmetic if the sequence:
A[P], A[P + 1], ..., A[Q - 1], A[Q] is arithmetic. In particular, this means that P + 1 < Q.

The function should return the number of arithmetic slices in the array A.

 
Example:

A = [1, 2, 3, 4]

return: 3, for 3 arithmetic slices in A: [1, 2, 3], [2, 3, 4] and [1, 2, 3, 4] itself.
 */

/**
 * @param {number[]} A
 * @return {number}
 */
var numberOfArithmeticSlices = function(A) {

    const helper = (arr) => {
        if ( arr.length < 3 ) {
            return 0;
        }
        let ret = 0;
        for ( let i = 0 ; i <= arr.length - 3; i++ ) {
            const diff = arr[i+1] - arr[i];
            let index = 2;
            while ( arr[index+i] - arr[index+i-1] === diff ) {
                index++;
            }
            // console.log( i, index-2 );
            ret += index-2;
        }
        return ret;
    }
    
    return helper(A);
    
};

/** 
[1,2,3,4]
[1,2,3,4,5]
[1,2,3,4,5,6,7,8,9,10]
[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5]
[1, 1, 2, 5, 7]
[7, 7, 7, 7]
[3, -1, -5, -9]
*/