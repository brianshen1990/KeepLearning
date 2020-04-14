/**
166. Fraction to Recurring Decimal

Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.

If the fractional part is repeating, enclose the repeating part in parentheses.

Example 1:

Input: numerator = 1, denominator = 2
Output: "0.5"
Example 2:

Input: numerator = 2, denominator = 1
Output: "2"
Example 3:

Input: numerator = 2, denominator = 3
Output: "0.(6)"

 */

/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {
    let minus = false;
    if ( numerator * denominator < 0 ) {
        minus = true;
    }
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);

    let before = Math.floor(numerator / denominator);
    let remain = numerator % denominator;
    if (remain === 0) {
        return `${minus?"-":""}${before}`;
    }
    // exist decimals
    before = before;
    let mapping = {
       0: 0 
    }
    let already = [];
    // no repeat or repeat
    // console.log(remain)
    while ( remain !== 0 && (!(remain in mapping) ) ) {
        // console.log(remain)
        let tRemain = remain * 10;
        let tempCache = Math.floor( tRemain / denominator );
        mapping[remain] = tempCache;
        already.push( remain );
        remain = tRemain - tempCache * denominator;
    }
    
    if ( remain === 0 ) {
        return `${minus?"-":""}${before}.${already.map( item => mapping[item] ).join('')}`;
    } else {
        // console.log( already, mapping );
        let notRepeat = '';
        let i = 0;
        while( i< already.length && already[i] !== remain ) {
            notRepeat = `${notRepeat}${mapping[already[i]]}`;
            i++;
        }
        let repeat = '';
        while( i< already.length ) {
            repeat = `${repeat}${mapping[already[i]]}`;
            i++;
        }
        
        return `${minus?"-":""}${before}.${notRepeat}(${repeat})`;
    }
};


/**
4
3
2
1
2
3
1
9
1
999
1
998
1
997
0
2
2
87
-50
8
-50
-8

 */