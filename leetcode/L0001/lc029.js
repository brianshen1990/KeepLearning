/*
29. Divide Two Integers
Medium
483
2285


Given two integers dividend and divisor, 
divide two integers without using multiplication, 
division and mod operator.

Return the quotient after dividing dividend by divisor.

The integer division should truncate toward zero.

Example 1:

Input: dividend = 10, divisor = 3
Output: 3
Example 2:

Input: dividend = 7, divisor = -3
Output: -2
Note:

Both dividend and divisor will be 32-bit signed integers.
The divisor will never be 0.
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 231 − 1 when the division result overflows.
Accepted
161,987
Submissions
1,027,273

*/


/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
  if(divisor === 0){
    return -1;
  }
  let res = 0;
  if( (dividend >= 0 && divisor >=0) || (dividend < 0 && divisor < 0)  ){
    res = Math.floor( dividend / divisor );
  }else{
    res =  Math.ceil( dividend / divisor );
  }
  if (res > 2147483647){
    res =  2147483647;
  }
  if(res < -2147483648){
    res = -2147483648;
  }
  return res;
};

let test = function () {
  console.log(divide(0, 3));
  console.log(divide(0, 3) === 0);
  console.log(divide(10, 3));
  console.log(divide(10, 3) === 3);
  console.log(divide(7, -3));
  console.log(divide(7, -3) === -2);
}
test();