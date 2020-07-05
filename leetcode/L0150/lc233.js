/**
233. Number of Digit One

Given an integer n, count the total number of digit 1 appearing in all non-negative integers less than or equal to n.

Example:

Input: 13
Output: 6 
Explanation: Digit 1 occurred in the following numbers: 1, 10, 11, 12, 13.

 */


/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    // init base count
    const N = `${n}`.length;
    let seqArr = new Array(N);
    let baseArr = new Array(N);
    seqArr[0] = 1;
    baseArr[0] = 1;
    let base = 10;
    for ( let i = 1; i < N ; i++ ) {
        seqArr[i] = seqArr[i-1] * 10 + base;
        baseArr[i] = base;
        base = base * 10;
    }
    // console.log( seqArr, baseArr );
    
    const helper = (num) => {
        if ( num <= 0 ) {
            return 0;
        }
        if ( num <= 9 ) {
            return 1;
        }
        let len = `${num}`.length;
        let dig = Math.floor( num / baseArr[len-1] );
        let ret = 0;
        for ( let i = 0 ; i < dig ; i++) {
            ret += seqArr[len-2];
            if ( i===1 ) {
                ret += baseArr[len-1];
            }
        }
        if ( dig === 1 ) {
            // handling start with 1 
            ret += num % baseArr[len-1] + 1;
        }
        const recRes = helper( num % baseArr[len-1] );
        // console.log( `handling num:${num}, base: ${baseArr[len-1]}, dig: ${dig}, tempRet ${ret}, recurNum: ${num % baseArr[len-1]}, recur: ${recRes}, ret: ${recRes+ret}` );
        return recRes + ret;
    }
    // return 0
    return helper(n);
};


/**
-1
0
1
9
10
13
998
999
1000
1001
9999
10000
10001
12424123
2345
 */
