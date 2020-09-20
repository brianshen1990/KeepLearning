/**

1291. Sequential Digits

An integer has sequential digits if and only if each digit in the number is one more than the previous digit.

Return a sorted list of all the integers in the range [low, high] inclusive that have sequential digits.

 

Example 1:

Input: low = 100, high = 300
Output: [123,234]
Example 2:

Input: low = 1000, high = 13000
Output: [1234,2345,3456,4567,5678,6789,12345]
 

Constraints:

10 <= low <= high <= 10^9
 */


/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function(low, high) {
    const small = low.toString().length;
    const large = high.toString().length;
    // console.log( small, large );
    let ret = [];
    
    for ( let i = small ; i <= large ; i++ ) {
        for ( let j = 1 ; j <= 10-i; j++ ) {
            let num = 0;
            for ( let k = 0 ; k < i ; k++ ) {
                num = num * 10 + j+k;
            }
            // console.log( num );
            if ( num >= low && num <= high ) {
                ret.push( num );
            }
        }
    }
    return ret;
    
};


/**
100
300
1000
13000
10
100000
123
123
 */