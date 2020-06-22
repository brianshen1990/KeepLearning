/**
313. Super Ugly Number

Write a program to find the nth super ugly number.

Super ugly numbers are positive numbers whose all prime factors are in the given prime list primes of size k.

Example:

Input: n = 12, primes = [2,7,13,19]
Output: 32 
Explanation: [1,2,4,7,8,13,14,16,19,26,28,32] is the sequence of the first 12 
             super ugly numbers given primes = [2,7,13,19] of size 4.
Note:

1 is a super ugly number for any given primes.
The given numbers in primes are in ascending order.
0 < k ≤ 100, 0 < n ≤ 106, 0 < primes[i] < 1000.
The nth super ugly number is guaranteed to fit in a 32-bit signed integer.
 */


/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
var nthSuperUglyNumber = function(n, primes) {
    primes = primes.sort( (a,b) => a > b );
    // console.log( primes );
    
    let cacheIndex = new Array(primes.length).fill(0);
    // console.log(cache);
    
    let ret = [1];

    for ( let i = 1 ; i < n ; i++ ) {
        let prev = ret[ret.length-1];
        
        let temp = [...primes];
        for ( let j = 0 ; j < primes.length ; j++ ) {
            let okOne = primes[j] * ret[cacheIndex[j]];
            while ( okOne <= prev ) {
                cacheIndex[j] = cacheIndex[j] + 1;
                okOne = primes[j] * ret[ cacheIndex[j] ];
            }
            temp[j] = okOne;
        }
        
        // console.log( prev, temp, cacheIndex );
        
        let next = Math.min( ...temp );
        ret.push(next);
        // console.log( next, ret );
    }
    // console.log(ret);
    console.log( ret.length, cacheIndex )
    
    return ret[ret.length-1];
    
};


/** 
15
[2,7,13,19]
234
[2,7,13,19]
455
[2,7,13]
66
[3]
20
[3]
*/