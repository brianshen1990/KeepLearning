/**

1281. Subtract the Product and Sum of Digits of an Integer

Given an integer number n, return the difference between the product of its digits and the sum of its digits.
 

Example 1:

Input: n = 234
Output: 15 
Explanation: 
Product of digits = 2 * 3 * 4 = 24 
Sum of digits = 2 + 3 + 4 = 9 
Result = 24 - 9 = 15
Example 2:

Input: n = 4421
Output: 21
Explanation: 
Product of digits = 4 * 4 * 2 * 1 = 32 
Sum of digits = 4 + 4 + 2 + 1 = 11 
Result = 32 - 11 = 21
 

Constraints:

1 <= n <= 10^5
 */


/**
 * @param {number} n
 * @return {number}
 */
 var subtractProductAndSum = function(n) {
    const arr = n.toString().split("").map( item => parseInt(item) );
    
    return arr.reduce( (ele, acc) => acc * ele, 1) - arr.reduce( (ele, acc) => acc + ele, 0);
    
};

/**
234
4421
10
1
12
100000
 */