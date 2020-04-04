
/*
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers 
within the 32-bit signed integer range: [−231,  231 − 1].  [-2147483648, 2147483647]
For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/
/**
 * @param {number} x
 * @return {number}
 */
let reverse = function(x) {
    let tempS = x.toString().split("");
    let minus = (tempS[0] === "-" ? "-" : "");
    if(minus === "-"){
        tempS.shift();
    }
    tempS = tempS.reverse();
    tempS = minus + tempS.join("");
    let intV =  parseInt(tempS);
    if(intV < -2147483648 || intV > 2147483647 ){
        intV = 0;
    }
    return intV;
};

let test = function(){
    console.log(reverse(123) === 321);
    console.log(reverse(-123) === -321);
    console.log(reverse(120) === 21);
    console.log(reverse(-2147483647) === 0);
    console.log(reverse(-2147483641) === -1463847412);
    console.log(reverse(2147483647) === 0);
    console.log(reverse(1463847412) === 2147483641);
}

test();
