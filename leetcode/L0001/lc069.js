/**
69. Sqrt(x)

Implement int sqrt(int x).

Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

Example 1:

Input: 4
Output: 2
Example 2:

Input: 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since 
             the decimal part is truncated, 2 is returned.

*/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    
    if( x === 0 || x === 1) {
        return x;
    }
    let begin = 1; 
    let end  = x;
    let theOne = -1;
    while( begin < end - 1 ) {
        let middle = Math.floor( ( begin + end ) / 2 );
        // console.log(middle);
        let temp = middle * middle;
        if(temp === x) {
            theOne = middle;
            break;
        }
        if( temp > x ) {
            end = middle;
        }
        if ( temp < x ) {
            begin  = middle;
        }
    }
    if( theOne < 0 ) {
        if( end * end <= x ) {
            return end;
        } else {
            return begin;
        }
    }
    return theOne;
};

console.log( mySqrt(0) === 0 );
console.log( mySqrt(1) === 1 );
console.log( mySqrt(2) === 1 );
console.log( mySqrt(3) === 1 );
console.log( mySqrt(4) === 2 );
console.log( mySqrt(5) === 2 );
console.log( mySqrt(6) === 2 );
console.log( mySqrt(7) === 2 );
console.log( mySqrt(8) === 2 );
console.log( mySqrt(9) === 3 );
console.log( mySqrt(10) === 3 );
console.log( mySqrt(15) === 3 );
console.log( mySqrt(16) === 4 );
console.log( mySqrt(17) === 4 );
console.log( mySqrt(24) === 4 );
console.log( mySqrt(25) === 5 );
console.log( mySqrt(26) === 5 );
console.log( mySqrt(35) === 5 );
console.log( mySqrt(36) === 6 );
console.log( mySqrt(37) === 6 );
console.log( mySqrt(100000) === 316);