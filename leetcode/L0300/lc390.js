/**
390. Elimination Game

There is a list of sorted integers from 1 to n. Starting from left to right, remove the first number and every other number afterward until you reach the end of the list.

Repeat the previous step again, but this time from right to left, remove the right most number and every other number from the remaining numbers.

We keep repeating the steps again, alternating left to right and right to left, until a single number remains.

Find the last number that remains starting with a list of length n.

Example:

Input:
n = 9,
1 2 3 4 5 6 7 8 9
2 4 6 8
2 6
6

Output:
6
 */


/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function(n) {
    if ( n === 0 ) {
        return 0;
    }
    let dir = 1;
    let cur = [];
    while ( n > 1 ) {
        cur.push({
            val: n,
            dir: dir
        });
        dir = -dir;
        n = Math.floor(n/2) 
    }
    // console.log( cur );
    
    let num = 1;
    for ( let i = cur.length-1 ; i >= 0 ; i-- ) {
        // console.log( cur[i], num );
        if ( cur[i].dir === 1 ) {
            num = num * 2;
        } else if ( cur[i].dir === -1 ) {
            if ( cur[i].val % 2 === 0 ) {
                num = num * 2 - 1;
            } else {
                num = num * 2;
            }
        }
        // console.log( "after", num );
    }
    return num;
    return 1;
    
};


/** 
1
9
10
1000000
12341
*/