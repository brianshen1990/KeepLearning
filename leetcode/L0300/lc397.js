/**
397. Integer Replacement

Given a positive integer n and you can do operations as follow:

If n is even, replace n with n/2.
If n is odd, you can replace n with either n + 1 or n - 1.
What is the minimum number of replacements needed for n to become 1?

Example 1:

Input:
8

Output:
3

Explanation:
8 -> 4 -> 2 -> 1
Example 2:

Input:
7

Output:
4

Explanation:
7 -> 8 -> 4 -> 2 -> 1
or
7 -> 6 -> 3 -> 2 -> 1
 */

/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(n) {
    const ret = 0;
    
    const cache = {};
    const helper = ( num ) => {
        if ( num === 1 ) {
            return 0;
        }
        if ( num in cache ) {
            return cache[num];
        }
        const numStr = num.toString(2);
        if (  numStr.split("").filter(item=>item==="1").length === 1 ) {
            cache[n] = numStr.length-1;
            return cache[n];
        }
        // console.log("before:", num )
        let ret = 0;
        while ( !(num & 1) ) {
            ret++;
            num = num / 2;
        }
        // console.log("after:", num, ret );
        const plus = helper( num+1 );
        const minus = helper( num-1 );
        ret += Math.min( plus, minus ) + 1;
        cache[num] = ret;
        return ret;
    }
    
    return helper(n);
};


/** 
8
1
2
3
4
5
6
7
1012
12342
123124
74532412
*/
