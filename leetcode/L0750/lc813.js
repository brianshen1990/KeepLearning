/**

813. Largest Sum of Averages

We partition a row of numbers A into at most K adjacent (non-empty) groups, then our score is the sum of the average of each group. What is the largest score we can achieve?

Note that our partition must use every number in A, and that scores are not necessarily integers.

Example:
Input: 
A = [9,1,2,3,9]
K = 3
Output: 20
Explanation: 
The best choice is to partition A into [9], [1, 2, 3], [9]. The answer is 9 + (1 + 2 + 3) / 3 + 9 = 20.
We could have also partitioned A into [9, 1], [2], [3, 9], for example.
That partition would lead to a score of 5 + 2 + 6 = 13, which is worse.
 

Note:

1 <= A.length <= 100.
1 <= A[i] <= 10000.
1 <= K <= A.length.
Answers within 10^-6 of the correct answer will be accepted as correct.

 */

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var largestSumOfAverages = function(A, K) {
    
    
    const cache = {};
    
    const helper = ( beg, end, num ) => {
        const str = `${beg}_${end}_${num}`;
       
        if ( str in cache ) return cache[str];
        
        if ( num === 1 ) {
            cache[str] = A.slice(beg, end).reduce( (acc, ele) => acc + ele, 0) / ( end - beg);
            // console.log( str, "=>" , cache[str] );
            return cache[str];
        }
        
        let ret = 0 ;
        for ( let i = beg + 1 ; i <= end+1-num ; i++ ) {
            ret = Math.max( ret, 
                           A.slice(beg, i).reduce( (acc, ele) => acc + ele, 0) / (i-beg) + 
                           helper( i, end, num-1 ) );  
        }
        cache[str] = ret;
        // console.log( str, "=>" , ret );
        return ret;
    }
    
    return helper( 0, A.length, K );
    
    
};

/**
[9,1,2,3,9]
3
[9,1,2,3,9]
5
[9,1,2,3,9,9,1,2,3,9]
3
[9,1,2,3,9,9,1,2,3,9]
5
[9,1,2,3,9,9,1,2,3,9]
1
 */