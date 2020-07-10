/**
400. Nth Digit

Find the nth digit of the infinite integer sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...

Note:
n is positive and will fit within the range of a 32-bit signed integer (n < 231).

Example 1:

Input:
3

Output:
3
Example 2:

Input:
11

Output:
0

Explanation:
The 11th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a 0, which is part of the number 10.
 */


/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit = function(n) {
        
    if ( n <= 9 ) {
        return n;
    }
    let base = 1;
    let dig = 1;
    let preSum = 0;
    let sum = base * 9 * dig;
    
    while ( true ) {
        // console.log("iter", n, sum, preSum );
        if ( n < sum ) {
            // keep dig
            let num = n - preSum;
            let strIndex = ( (num-1+dig) % dig) ;
            let strNum = ( base - 1 + Math.ceil(num/dig) ).toString();
            // console.log("hit", n, preSum, num , dig, strNum, strIndex );
            
            return strNum[strIndex];
        }
        base = base * 10;
        dig++;
        preSum = sum;
        sum += base * 9 * dig;
    }
};


/** 
10
80
81
123
1213
1214
1215
2187123
123912312
123912313
123912314
*/
