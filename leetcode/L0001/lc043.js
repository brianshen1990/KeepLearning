/**
 * 
43. Multiply Strings

Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

Example 1:

Input: num1 = "2", num2 = "3"
Output: "6"
Example 2:

Input: num1 = "123", num2 = "456"
Output: "56088"
Note:

The length of both num1 and num2 is < 110.
Both num1 and num2 contain only digits 0-9.
Both num1 and num2 do not contain any leading zero, except the number 0 itself.
You must not use any built-in BigInteger library or convert the inputs to integer directly.

 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if( num1=== '0' || num2 === '0' ) {
    return '0';
  }
  let ret = '0';
  for( let i=num2.length-1; i>=0 ; i-- ) {
    let temp = multi(num1, num2[i]);
    ret = add(ret, `${temp}${(new Array( num2.length-1-i )).fill('0').join('') }` );
  }
  return ret;
};

function reverseString(str) {
  return str.split("").reverse().join("");
}

var multi = (num1, num2) => {
  num1 = reverseString(num1);
  num2 = reverseString(num2);
  const maxLen = num1.length;
  let op2 = (num2 - '0');
  let ret = '';
  let extra = 0;

  for( let i = 0; i < maxLen ; i++ ) {
    let op1 = (num1[i] - '0');
    let tempSum = op1 * op2 + extra;
    if( tempSum >= 10 ) {
      extra = Math.floor(tempSum/10);
    } else {
      extra = 0;
    }
    tempSum = tempSum % 10;
    ret = `${ret}${tempSum}`;
  }
  if(extra > 0) {
    ret = `${ret}${extra}`;
  }
  return reverseString(ret);
}

var add = (num1, num2) => {
  num1 = reverseString(num1);
  num2 = reverseString(num2);
  let ret = '';
  const maxLen = Math.max( num1.length, num2.length );
  let extra = 0;
  for( let i = 0; i < maxLen ; i++ ) {
    let op1 = i < num1.length ? (num1[i] - '0') :0;
    let op2 = i < num2.length ? (num2[i] - '0') :0;
    let tempSum = op1 + op2 + extra;
    if( tempSum >= 10 ) {
      extra = 1;
    } else {
      extra = 0;
    }
    tempSum = tempSum % 10;
    ret = `${ret}${tempSum}`;
  }
  if(extra >= 1) {
    ret = `${ret}1`;
  }
  return reverseString(ret);
}

// console.log( add( "2", "3" ) );
// console.log( multi( "2", "3" ) );
// console.log( multiply( "2", "3" ) );
// "6"

// console.log( add( "123", "458" ) );
// console.log( multi( "123", "8" ) );
console.log( multiply( "9", "9" ) === "81" );
console.log( multiply( "123", "456" ) === "56088" );
// 

// console.log( add( "99990", "9999" ) );
console.log( multiply( "121234124234213412", "35345436534543534" ) === "4285073043941356373739112960678008" );
