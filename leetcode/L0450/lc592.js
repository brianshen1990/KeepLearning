/**

592. Fraction Addition and Subtraction

Given a string representing an expression of fraction addition and subtraction, you need to return the calculation result in string format. The final result should be irreducible fraction. If your final result is an integer, say 2, you need to change it to the format of fraction that has denominator 1. So in this case, 2 should be converted to 2/1.

Example 1:
Input:"-1/2+1/2"
Output: "0/1"
Example 2:
Input:"-1/2+1/2+1/3"
Output: "1/3"
Example 3:
Input:"1/3-1/2"
Output: "-1/6"
Example 4:
Input:"5/3+1/3"
Output: "2/1"
Note:
The input string only contains '0' to '9', '/', '+' and '-'. So does the output.
Each fraction (input and output) has format ±numerator/denominator. If the first input fraction or the output is positive, then '+' will be omitted.
The input only contains valid irreducible fractions, where the numerator and denominator of each fraction will always be in the range [1,10]. If the denominator is 1, it means this fraction is actually an integer in a fraction format defined above.
The number of given fractions will be in the range [1,10].
The numerator and denominator of the final result are guaranteed to be valid and in the range of 32-bit int.

 */


/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function(expression) {
    let enums = [];
    let index = 0;
    let multiply = 1;
    while ( index < expression.length ) {
        if ( index === 0 || expression[index] === '+' || expression[index] === '-'  ) {
            let upperIndex = index;
            while ( expression[upperIndex] !== '/' ) {
                upperIndex++;
            }
            let lowerIndex = upperIndex;
            while( lowerIndex < expression.length && 
                  ( expression[lowerIndex] !== '+' && expression[lowerIndex] !== '-' ) ) {
                lowerIndex++;
            }
            const tempRes =  {
                op: expression[index] === '-' ? "-" : "+",
                upper: parseInt( expression.substring(
                    ( (expression[index] === '+' || expression[index] === '-') ? index : -1 ) + 1, 
                    upperIndex) ),
                lower: parseInt( expression.substring(upperIndex+1, lowerIndex) )
            };
            multiply = multiply * tempRes.lower;
            enums.push( tempRes );
            index = lowerIndex;
        }
    }
    // console.log( enums );
    
    let upperRes = 0;
    enums.forEach( item => {
        if ( item.op === '+' ) {
            upperRes += item.upper * multiply / item.lower;
        } else {
            upperRes -= item.upper * multiply / item.lower;
        };
    });
    if ( upperRes === 0 ) {
        return "0/1"
    } else {
        // console.log( upperRes, "/" , multiply );
        let tempUpper = Math.abs(upperRes);
        let tempLower = Math.abs(multiply);
        while ( true ) {
            if ( tempLower % tempUpper === 0 ) {
                break;
            } else {
                const temp = tempUpper;
                tempUpper = tempLower % tempUpper;
                tempLower = temp;
            }
        }
        return `${upperRes/tempUpper}/${multiply/tempUpper}`;
    }
};


/**
"-1/2+1/2"
"-1/2+1/2+1/3"
"1/3-1/2"
"5/3+1/3"
"5/3"
""
 */