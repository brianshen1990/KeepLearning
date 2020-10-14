/**
996. Number of Squareful Arrays

Given an array A of non-negative integers, the array is squareful if for every pair of adjacent elements, their sum is a perfect square.

Return the number of permutations of A that are squareful.  Two permutations A1 and A2 differ if and only if there is some index i such that A1[i] != A2[i].

 

Example 1:

Input: [1,17,8]
Output: 2
Explanation: 
[1,8,17] and [17,8,1] are the valid permutations.
Example 2:

Input: [2,2,2]
Output: 1
 

Note:

1 <= A.length <= 12
0 <= A[i] <= 1e9
 */



/**
 * @param {number[]} A
 * @return {number}
 */
var numSquarefulPerms = function(A) {
    const isSquare = (a, b) => {
        const temp = Math.sqrt(a+b);
        return temp === Math.floor( temp );
    }
    if ( A.length === 1 ) return 1;
    
    let cnt = 0;

    
    const helper = (used, prev) => {
        if ( used === A.length )  {
            cnt++;
            return;
        }
        
        for ( let i = 0 ; i < A.length ; i++ ) {
            if ( A[i] === -1 ) continue;
            if ( i !== 0 && A[i] === A[i-1] ) continue; // escape duplicated
            
            if ( prev === -1 || isSquare(prev, A[i]) ) {
                let temp = A[i];
                A[i] = -1;
                helper( used+1, temp );
                A[i] = temp;
            }
        }
    }
    
    A.sort( (a, b) => a-b );
    helper( 0, -1 );
    return cnt;
};



/**
[1,17,8]
[1,17,8,1,17,8]
[2,2,2]
[0]
[1]
[2]
[7]
[0,1,8]
[0,1,8,1,2,3,6,5,3,9]
[0,9]
 */