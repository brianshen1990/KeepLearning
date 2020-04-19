/**
168. Excel Sheet Column Title

Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 
    ...
Example 1:

Input: 1
Output: "A"
Example 2:

Input: 28
Output: "AB"
Example 3:

Input: 701
Output: "ZY"

 */


/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    if ( n === 0) {
        return '';
    }
    const _mapping = {};
    "ZABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map( (item, index) => {
        _mapping[index] = item;
    });
    
    let ret = '';
    while( n > 0 ) {
        let _remain = n % 26;
        // console.log(_remain)
        ret = `${_mapping[_remain]}${ret}`;
        if ( _remain === 0 ) {
            _remain = 26;
        }
        n = n - _remain;
        if ( n >= 26 ) {
            n = Math.floor( n / 26 );
            // console.log(n)
        } else {
            n = 0;
        }
    }
    return ret;
};




/**
52
26
27
28
1
0
701
1238
9876

 */