/**
171. Excel Sheet Column Number

Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
    ...
Example 1:

Input: "A"
Output: 1
Example 2:

Input: "AB"
Output: 28
Example 3:

Input: "ZY"
Output: 701

 */


/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let ret = 0;
    let base = 1;
    const ACode = 'A'.charCodeAt(0);
    for ( let i = s.length - 1 ; i >=0 ; i-- ) {
        ret = ret + ( s[i].charCodeAt(0) + 1 - ACode ) * base;
        base = base * 26;
    }
    return ret;
};


/**
"A"
"Z"
"AA"
"AB"
"ZY"
"ZYHSJ"
 */