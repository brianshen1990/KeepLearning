/**
67. Add Binary

Given two binary strings, return their sum (also a binary string).

The input strings are both non-empty and contains only characters 1 or 0.

Example 1:

Input: a = "11", b = "1"
Output: "100"
Example 2:

Input: a = "1010", b = "1011"
Output: "10101"

*/


/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    a = a.split('').reverse().join('');
    b = b.split('').reverse().join('');
    let len = Math.max(a.length, b.length);
    if( a.length > b.length ) {
        b = b + new Array( a.length - b.length ).fill('0').join('');
    } 
    if( b.length > a.length ) {
        a = a + new Array( b.length-a.length ).fill('0').join('');
    } 
    console.log( a, b );
    let res = [];
    let overflow = 0;
    for( let i = 0 ; i < len ;i++) {
        let temp = a[i].charCodeAt(0) + b[i].charCodeAt(0) - 48 * 2 + overflow;
        // console.log( temp )
        if( temp >= 2 ) {
            overflow = 1;
            temp = temp % 2;
        } else {
            overflow = 0;
        }
        res.push(temp);        
    }
    if( overflow ) {
        res.push(1);
    }
    return res.reverse().join('');
};

console.log( addBinary('11', '1') === '100'  );
console.log( addBinary('1010', '1011') === '10101'  );
console.log( addBinary('0', '1') === '1'  );
console.log( addBinary("1011101010101010100101000110", "1101001010010101011") === "1011101100010011110111110001");

console.log( addBinary('11', '11') === '110'  );
console.log( addBinary('0', '0') === '0'  );
console.log( addBinary('0', '1') === '1'  );