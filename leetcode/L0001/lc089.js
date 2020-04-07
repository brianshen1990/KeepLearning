/**
89. Gray Code
The gray code is a binary numeral system where two successive values differ in only one bit.

Given a non-negative integer n representing the total number of bits in the code, print the sequence of gray code. A gray code sequence must begin with 0.

Example 1:

Input: 2
Output: [0,1,3,2]
Explanation:
00 - 0
01 - 1
11 - 3
10 - 2

For a given n, a gray code sequence may not be uniquely defined.
For example, [0,2,3,1] is also a valid gray code sequence.

00 - 0
10 - 2
11 - 3
01 - 1
Example 2:

Input: 0
Output: [0]
Explanation: We define the gray code sequence to begin with 0.
             A gray code sequence of n has size = 2n, which for n = 0 the size is 20 = 1.
             Therefore, for n = 0 the gray code sequence is [0].
*/

/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    if( n===0 ) {
        return [0];
    }
    if( n === 1 ) {
        return [0,1];
    }
    let retArr = [];
    let max = 1;
    for( let i = 0; i < n; i++ ) {
        max = max * 2;
    }
    for( let i = 0; i< max; i++ ) {
        retArr.push( i );
    }
    // console.log(retArr);
    
    swapLeftRight(retArr, 0, max);
    return retArr;
};
var swapSingle = function(retArr, fir, sec) {
    let temp = retArr[fir];
    retArr[fir] = retArr[sec];
    retArr[sec] = temp;
}
var swapDur = function(retArr, beg, middle, middle, end) {
    let dur = middle - beg;
    for( let i = 0; i < dur; i++ ) {
        swapSingle( retArr, beg+i, middle+i )
    }
}
var swapLeftRight = function(retArr, beg, end) {
    // console.log(retArr,  beg, end );
    if( end === beg + 4 ) {
        if( beg % 8 === 0 ) {
            swapSingle(retArr, end-1, end-2);
            return;
        } else {
            swapDur(retArr, beg, beg+2, beg+2, end);
            // swapSingle(retArr, beg, beg + 1);
            swapSingle(retArr, end-1, end-2);
            return;
        }
    } 
    let middle = (end + beg) / 2;
    if ( beg !== 0 ) {
        // important, when not to swap
        if( end - beg >= 8  && beg % ( ( end - beg ) * 2 ) == 0  ) { 
        }else{
            swapDur(retArr, beg, middle, middle, end);
        }
    } 
    // console.log( beg, end, middle );
    swapLeftRight( retArr, beg, middle );
    swapLeftRight( retArr, middle, end );    
}

grayCode(5);
