/**
338. Counting Bits

Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.

Example 1:

Input: 2
Output: [0,1,1]
Example 2:

Input: 5
Output: [0,1,1,2,1,2]
Follow up:

It is very easy to come up with a solution with run time O(n*sizeof(integer)). But can you do it in linear time O(n) /possibly in a single pass?
Space complexity should be O(n).
Can you do it like a boss? Do it without using any builtin function like __builtin_popcount in c++ or in any other language.

*/


/**
 * @param {number} num
 * @return {number[]}
 */
var countBits2nd_DP = function(num) {
    const seq = new Array( num + 1 ).fill(0);
    seq[0] = 0;
    
    for ( let i = 1 ; i <= num ; i++ ) {
        seq[i] = seq[i>>1];
        seq[i] += i&1;
        // console.log( i, i>>1, seq[i>>1], i&1 , seq[i]);
    }
    
    return seq;
    
};

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    if ( num === 0 ) {
        return [0];
    }
    
    const ret = new Array( num + 1 ).fill(0);
    const maxlen = num.toString(2).length;
    // console.log(maxlen);
    
    const helper = (len, prev, count, ret) => {
        // console.log(len, prev, count, ret);
        if ( prev.length >= len ) {
            const intVal = parseInt( "0" + prev, 2 );
            if ( intVal < ret.length ) {
                ret[ intVal ] = count;
            }
            return;
        }
        
        helper( len, prev + "0", count, ret );
        helper( len, prev + "1", count + 1, ret );
    }
    
    helper( maxlen, "", 0, ret);
    return ret;
};


/** 
0
1
2
5
8
12
1233
23456
*/