/**
374. Guess Number Higher or Lower

We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I'll tell you whether the number is higher or lower.

You call a pre-defined API guess(int num) which returns 3 possible results (-1, 1, or 0):

-1 : My number is lower
 1 : My number is higher
 0 : Congrats! You got it!
Example :

Input: n = 10, pick = 6
Output: 6

 */


/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    
    let beg = 1;
    let end = n;
    
    while ( beg + 1 < end ) {
        
        const middle = Math.floor( (beg+end) / 2 );
        // console.log(beg, middle, end);
        const res = guess(middle);
        if ( res === 0 ) {
            return middle;
        }
        if ( res === -1 ) {
            end = middle;
        } else {
            beg = middle;
        }
    }
    
    // console.log(beg, end);
    if ( guess(beg) === 0) {
        return beg;
    } else {
        return end;
    }
    
};


/** 
10
6
10
1
10
10
10
8
*/