/**
201. Bitwise AND of Numbers Range

Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.

Example 1:

Input: [5,7]
Output: 4
Example 2:

Input: [0,1]
Output: 0
 */


/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
    let str = m.toString(2);
    for ( let i = 0 ; i < str.length ; i++ ) {
        if ( str[i] === '1' ) {
            const nextStr = "0" + ( parseInt("0" + str.substr(0, i+1) ,2) + 1).toString(2) 
                + new Array( str.length - i - 1 ).fill("0").join("");
            const next = parseInt(nextStr, 2);
            // console.log(i, next, str.length - i, nextStr );
            if ( n >= next ) {
                // console.log("hit", i)
                str = str.substr(0, i) + new Array( str.length - i ).fill("0").join("");
                break;   
            }
        }   
    }
    return parseInt(str, 2);
};


/**
5
7
0
1
2
2
2
7892323
1
2
600000000
2147483645
600000000
1003741824
600000000
703741824
600000000
703741824
3
3
3
4
3
1900
600000000
600000001
600000000
600000018
*/
