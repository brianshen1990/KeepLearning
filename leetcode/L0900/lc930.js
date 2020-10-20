/**
930. Binary Subarrays With Sum

In an array A of 0s and 1s, how many non-empty subarrays have sum S?

 

Example 1:

Input: A = [1,0,1,0,1], S = 2
Output: 4
Explanation: 
The 4 subarrays are bolded below:
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]
[1,0,1,0,1]
 

Note:

A.length <= 30000
0 <= S <= A.length
A[i] is either 0 or 1.

 */

/**
 * @param {number[]} A
 * @param {number} S
 * @return {number}
 */
var numSubarraysWithSum = function(A, S) {
    
    // maximum S  -  maxnium S-1
    
    const helper = (arr, max) => {
        if ( max < 0 ) return 0;
        let ret = 0;
        
        let beg = 0 ;
        for ( let end = 0; end < arr.length; end++ ) {
            if ( arr[end] === 1 ) max--; // if there is 1, minus 1
            while ( max < 0 ) {
                if ( arr[beg] === 1 ) max++; // or release 
                beg++;
            }
            ret += end + 1 - beg;    
        }
        return ret;
    }
    
    return helper( A, S ) - helper( A, S-1 );
    
    
    
};

/**
[1,0,1,0,1]
2
[0,0,0,0,1,1,0,0,0,0]
2
[0,0,0,0,0,0]
2
[1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1]
2
[0,0,0,0,0]
0
 */