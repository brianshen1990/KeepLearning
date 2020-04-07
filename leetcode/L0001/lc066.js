/**
66. Plus One

Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Example 2:

Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.

*/


/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  if( digits.length === 0 ) {
      return [1];
  }
  digits = digits.reverse();
  let overflow = 1;
  for( let i = 0; i< digits.length; i++ ) {
      digits[i] = digits[i] + overflow;
      if ( digits[i] >= 10 ) {
          digits[i] = digits[i] % 10;
          overflow = 1;
      } else {
          overflow = 0;
          break;
      }
  }
  if( overflow ) {
      digits.push(1);
  }
  return digits.reverse();
  
};
