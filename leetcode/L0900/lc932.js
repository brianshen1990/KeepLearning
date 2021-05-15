/**
932. Beautiful Array

For some fixed N, an array A is beautiful if it is a permutation of the integers 1, 2, ..., N, such that:

For every i < j, there is no k with i < k < j such that A[k] * 2 = A[i] + A[j].

Given N, return any beautiful array A.  (It is guaranteed that one exists.)

 

Example 1:

Input: 4
Output: [2,1,4,3]
Example 2:

Input: 5
Output: [3,1,2,5,4]
 

Note:

1 <= N <= 1000


 */

/**
 * @param {number} N
 * @return {number[]}
 */
 var beautifulArray = function(N) {
    // add , delete and multiple won;t change
    // combination of odd + even won;t change
    
    let arr = [1];
    while ( arr.length < N ) {
        let next = [];
        // combine
        for ( let i = 0 ; i < arr.length ; i++ ) {
            if ( 2 * arr[i] - 1 <= N ) { //  delete
                next.push( 2 * arr[i] - 1 ); // mutiple and add
            }
        } 
        for ( let i = 0 ; i < arr.length ; i++ ) {
            if ( 2 * arr[i] <= N ) { //  delete
                next.push( 2 * arr[i] );// mutiple and add 
            }
        } 
        arr = next;
    }
    return arr;
    
};


/**
1
4
10
877
1000
 */