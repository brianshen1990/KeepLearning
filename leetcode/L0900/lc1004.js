/**
1004. Max Consecutive Ones III

Given an array A of 0s and 1s, we may change up to K values from 0 to 1.

Return the length of the longest (contiguous) subarray that contains only 1s. 

 

Example 1:

Input: A = [1,1,1,0,0,0,1,1,1,1,0], K = 2
Output: 6
Explanation: 
[1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1.  The longest subarray is underlined.
Example 2:

Input: A = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], K = 3
Output: 10
Explanation: 
[0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1.  The longest subarray is underlined.
 

Note:

1 <= A.length <= 20000
0 <= K <= A.length
A[i] is 0 or 1 
 */



/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnes = function(A, K) {
    if ( K >= A.length ) return A.length;
    
    let beg = 0;
    let end = 0;
    let count = 0 ;
    let ret = 0;
    
    while ( end < A.length ) {
        // console.log("beg", beg, end, count, ret);
        
        if ( count <= K ) {
            // span the window
            while ( count <= K && end < A.length ) {
                if ( A[end] === 0 ) {
                    count++;
                }
                end++;
            }
            ret = Math.max( ret, (count<=K?end:end-1)-beg ); //now, beg is the not qualified one
        } else {
            // no shrink, just move to see any span chance
            if ( A[beg++] === 0 ) {
                count--;
            }
            if ( A[end++] === 0 ) {
                count++;   
            }
            if ( count <= K ) {
               ret = Math.max( ret, end-beg ); 
            }
        }
        // console.log("end", beg, end, count, ret);
    }
    
    return ret;
    
};


/**
[1,1,1,0,0,0,1,1,1,1,0]
2
[0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1]
3
[1]
2
[0,0,0,0]
2
[1,1,1,0,0,0,1,1,1,1]
0
[1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1]
8
 */