/*
821. Shortest Distance to a Character

Given a string S and a character C, return an array of integers representing the shortest distance from the character C in the string.

Example 1:

Input: S = "loveleetcode", C = 'e'
Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]


Note:

S string length is in [1, 10000].
C is a single character, and guaranteed to be in string S.
All letters in S and C are lowercase.

*/


/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
    let ret = new Array( S.length ).fill( Number.MAX_VALUE );

    let next = [] ;
    for (let i = 0 ; i < S.length ; i++ ) {
        if ( S[i] === C ) {
            ret[i] = 0 ;
            next.push( i );
        }
    }

    while ( next.length > 0 ) {
        // console.log( ...next )
        let nextNext = [];
        for ( let i = 0 ; i < next.length ; i++ ) {
            const pos = next[i];
            if ( pos > 0 && ret[pos-1] === Number.MAX_VALUE ) {
                ret[pos-1] = ret[pos] + 1;
                nextNext.push(pos-1);
            }
            if ( pos < S.length-1 && ret[pos+1] === Number.MAX_VALUE ) {
                ret[pos+1] = ret[pos] + 1;
                nextNext.push(pos+1);
            }
        }

        next = nextNext;
    }
    return ret;

};


/*

"loveleetcode"
"e"
"loveleetcwode"
"e"
"loveleetcowqeqwdqwdqwde"
"e"
"eeeee"
"e"
"aaaaae"
"e"

*/
