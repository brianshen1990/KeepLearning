/**
668. Kth Smallest Number in Multiplication Table

Nearly every one have used the Multiplication Table. But could you find out the k-th smallest number quickly from the multiplication table?

Given the height m and the length n of a m * n Multiplication Table, and a positive integer k, you need to return the k-th smallest number in this table.

Example 1:
Input: m = 3, n = 3, k = 5
Output: 
Explanation: 
The Multiplication Table:
1	2	3
2	4	6
3	6	9

The 5-th smallest number is 3 (1, 2, 2, 3, 3).
Example 2:
Input: m = 2, n = 3, k = 6
Output: 
Explanation: 
The Multiplication Table:
1	2	3
2	4	6

The 6-th smallest number is 6 (1, 2, 2, 3, 4, 6).
Note:
The m and n will be in the range [1, 30000].
The k will be in the range [1, m * n]
 */

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var findKthNumber = function(m, n, k) {
    // bsearch
    if ( k === 1 ) return 1;
    
    const helperCounterLessOrEqualThanVal = ( val , mm, nn ) => {
        let sum = 0;
        for ( let i = 1 ; i <= mm ; i++ ) {
            // per line
            sum += Math.min( Math.floor(val/i) , n );
        }
        return sum;
    }
    
    let beg = 0 ;
    let end = m * n; // maxValue
    
    while ( beg + 1 < end ) {
        const middle = Math.floor( (beg + end)/2 );
        const count = helperCounterLessOrEqualThanVal( middle, m, n );
        // console.log( count );
        
        if ( count >= k ) {
            end = middle; // that middle could be the value, let's try that
        } else {
            beg = middle + 1; // middle can't be the value, so add 1 
        } 
    }
    
    // check whether we should choose beg or end
    if ( helperCounterLessOrEqualThanVal( beg, m, n ) >= k ) {
        return beg;
    }
    return end;
    
    
};

/**
3
3
5
2
3
6
1
1
1
1
100000
500
10000
10000
21321412
*/