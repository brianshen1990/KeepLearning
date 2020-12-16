/**

537. Complex Number Multiplication

Given two strings representing two complex numbers.

You need to return a string representing their multiplication. Note i2 = -1 according to the definition.

Example 1:
Input: "1+1i", "1+1i"
Output: "0+2i"
Explanation: (1 + i) * (1 + i) = 1 + i2 + 2 * i = 2i, and you need convert it to the form of 0+2i.
Example 2:
Input: "1+-1i", "1+-1i"
Output: "0+-2i"
Explanation: (1 - i) * (1 - i) = 1 + i2 - 2 * i = -2i, and you need convert it to the form of 0+-2i.
Note:

The input strings will not have extra blank.
The input strings will be given in the form of a+bi, where the integer a and b will both belong to the range of [-100, 100]. And the output should be also in this form.

*/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
      
    const helper = (str) => str.split("+").map( (item, index) => {
        if (index === 0) return parseInt(item);
        return parseInt(item.substr(0, item.length-1))
    });
    const [a1, b1] = helper(a);
    const [a2, b2] = helper(b);

    // console.log(a1, b1, a2, b2);
    
    
    return `${a1*a2-b1*b2}+${a1*b2+a2*b1}i`;
    
};

/**
"1+1i"
"1+1i"
"1+-1i"
"1+-1i"
"1+-1i"
"0+0i"
 */