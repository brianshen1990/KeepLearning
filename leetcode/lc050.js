/**
50. Pow(x, n)

Implement pow(x, n), which calculates x raised to the power n (xn).

Example 1:

Input: 2.00000, 10
Output: 1024.00000
Example 2:

Input: 2.10000, 3
Output: 9.26100
Example 3:

Input: 2.00000, -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
Note:

-100.0 < x < 100.0
n is a 32-bit signed integer, within the range [−231, 231 − 1]

*/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  if( x === 0 ) {
    if( n >= 0 ) {
      return 0;
    } else {
      return Infinity;
    }
  }
  if( n === 0 ) {
    return 1;
  }
  const resShouldVers = n < 0;
  n = Math.abs(n);
  const resShouldMinus = ( x < 0 ) && ( n % 2 );
  x = Math.abs(x);

  const mapping = {
    1: x
  };
  let i = 1;
  while( i <= n && i * 2 <= n ){
    mapping[i*2] = mapping[i] * mapping[i];
    i = i * 2;
  }
  // return mapping;
  let result = 1;
  const keysArr = Object.keys(mapping).map( item => parseInt(item))
    .sort( (a,b) => b - a );
  for( let j = 0;  j < keysArr.length; j++) {
    if( n >= keysArr[j] ) {
      n = n - keysArr[j];
      result = result * mapping[`${keysArr[j]}`];
    }
    if ( n === 0) {
      break;
    }
  }
  if( resShouldVers ) {
    result = 1 / result;
  }
  if( resShouldMinus ) {
    result = -result;
  }
  return result;
};
console.log( myPow(2, 10) === 1024 );
console.log( myPow(2, 16) === 65536 );
console.log( myPow(2.1 , 3) === 9.261);
console.log( myPow(-2, -2) === 0.25 );
console.log( myPow(-2, -3) === -0.125 );
// console.log( myPow(2,10) === 1024 );
// console.log( myPow(2.1 , 3) === 9.261 );