/**

738. Monotone Increasing Digits

Given a non-negative integer N, find the largest number that is less than or equal to N with monotone increasing digits.

(Recall that an integer has monotone increasing digits if and only if each pair of adjacent digits x and y satisfy x <= y.)

Example 1:
Input: N = 10
Output: 9
Example 2:
Input: N = 1234
Output: 1234
Example 3:
Input: N = 332
Output: 299
Note: N is an integer in the range [0, 10^9].
 */

/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function(N) {
    let nArr = N.toString().split("").map( item => parseInt(item) );
    let pos = -1;
    for ( let i = 1 ; i < nArr.length ; i++ ) {
        if ( nArr[i] < nArr[i-1] ) {
            pos = i;
            break;
        }
    }
    if ( pos < 0) {
        return N;
    }
    
    // 126 5432 -> pos = 3
    //  -> 126 9999
    nArr = [...nArr.slice(0, pos), ... nArr.slice(pos).fill(9) ];
    pos = pos - 1;
    // console.log(pos, nArr);
    let needM = true;
    while ( pos >= 0 && needM ) {
        if ( needM ) {
            // console.log("hit");
            nArr[pos] = nArr[pos]-1;
            if ( pos > 0 && nArr[pos] < nArr[pos-1] ) {
                nArr[pos] = 9;
                pos--;
                continue;  
            }
            break;
        }
    }
    
    return parseInt(nArr.join(""));
    
};

/**
10
1234
332
1265432
4321
0
1000000000
 */