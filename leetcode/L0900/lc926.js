/**
926. Flip String to Monotone Increasing

A string of '0's and '1's is monotone increasing if it consists of some number of '0's (possibly 0), followed by some number of '1's (also possibly 0.)

We are given a string S of '0's and '1's, and we may flip any '0' to a '1' or a '1' to a '0'.

Return the minimum number of flips to make S monotone increasing.

 

Example 1:

Input: "00110"
Output: 1
Explanation: We flip the last digit to get 00111.
Example 2:

Input: "010110"
Output: 2
Explanation: We flip to get 011111, or alternatively 000111.
Example 3:

Input: "00011000"
Output: 2
Explanation: We flip to get 00000000.
 

Note:

1 <= S.length <= 20000
S only consists of '0' and '1' characters.
 */

/**
 * @param {string} S
 * @return {number}
 */
 var minFlipsMonoIncr = function(S) {
    const arr = S.split("");
    let leftZeros = arr.filter( item => item === '0' ).length;
    
    let tempRes = Number.MAX_VALUE;
    let ret = 0;
    let index = 0;
    while ( index < arr.length ) {
        if ( arr[index] === '0' ) {
            leftZeros--;
            index++;
            continue;
        }
        
        let one = index;
        while ( one < arr.length && arr[one] === '1' ) {
            one++;
        }
        if ( one >= arr.length ) {
            break;
        }
        let zero = one;
        while ( zero < arr.length && arr[zero] === '0' ) {
            zero++;
        }
        leftZeros = leftZeros - ( zero - one);
        if ( zero - one === one - index ) {
            ret += zero - one;
            // console.log(zero, "hit equal", ret);
        } else if ( zero - one > one - index ) {
            ret += one-index; // zero count > one count
            // console.log(zero, "hit once count < zero count", ret);
        } else {
            // one count > zero count 
            // if i mark all zero as one, then the result is one  zero count + left zero count
            tempRes = Math.min( tempRes,  ret + zero - one + leftZeros ); 
            // if I mark all one as zero, then it depends
            ret += one - index;
            // console.log(zero, "hit once count > zero count", tempRes, ret);
        }
        index = zero;
    }
    // console.log( tempRes, ret );
    return Math.min( tempRes, ret );
    
};

/**
"00110"
"010110"
"00011000"
"000111011"
"0001110111"
"00011101110"
"000111011110000000"
"0"
"1"
"01"
"000111011110000000000111011110000000000111011110000000000111011110000000000111011110000000"
"00001100110011001100"
"000011001100110011000"
"000011001100110011001"
"000011001100110011001111111101100110011001100"
 */