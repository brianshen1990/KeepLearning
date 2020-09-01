/**
949. Largest Time for Given Digits

Given an array of 4 digits, return the largest 24 hour time that can be made.

The smallest 24 hour time is 00:00, and the largest is 23:59.  Starting from 00:00, a time is larger if more time has elapsed since midnight.

Return the answer as a string of length 5.  If no valid time can be made, return an empty string.

 

Example 1:

Input: [1,2,3,4]
Output: "23:41"
Example 2:

Input: [5,5,5,5]
Output: ""
 

Note:

A.length == 4
0 <= A[i] <= 9

 */

/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function(A) {
    // permutation
    A.sort()
    let ret = -1;
    
    const helper = (index, path) => {
        if ( index === A.length ) {
            // judge
            // console.log( path );
            if ( Math.floor(path/100) < 24 && (path%100) < 60 ) {
                ret = Math.max(ret, path);
            }
            return;
        } 
        for ( let i = index ; i < A.length ; i++ ) {
            [ A[index], A[i] ]= [ A[i], A[index] ];
            helper( index+1, path * 10 + A[index] );
            [ A[index], A[i] ]= [ A[i], A[index] ];
        }
    }
    
    helper( 0, 0 );
    if ( ret < 0 ) {
        return "";
    }
    return Math.floor(ret/100).toString().padStart(2, '0') 
            + ":" 
            + (ret%100).toString().padStart(2, '0');
    
    
};

/**
[1,2,3,4]
[5,5,5,5]
[5,5,2,4]
[2,4,0,0]
[0,0,0,0]
[1,9,6,0]
 */