/**
1079. Letter Tile Possibilities

You have n  tiles, where each tile has one letter tiles[i] printed on it.

Return the number of possible non-empty sequences of letters you can make using the letters printed on those tiles.

 

Example 1:

Input: tiles = "AAB"
Output: 8
Explanation: The possible sequences are "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".
Example 2:

Input: tiles = "AAABBC"
Output: 188
Example 3:

Input: tiles = "V"
Output: 1
 

Constraints:

1 <= tiles.length <= 7
tiles consists of uppercase English letters.
*/


/**
 * @param {string} tiles
 * @return {number}
 */
 var numTilePossibilities = function(tiles) {
    
    const arr = tiles.split("").sort( (a,b) => a < b ? -1: 1 );

    const helper = ( len, left ) => {
        if ( len === 1 ) {
            return new Set(left).size;        
        }
        
        const cLen = left.length;
        let ret = 0;
        for ( let i = 0 ; i < cLen ; i++ ) {
            if ( i === 0 || left[i] !== left[i-1]  ) {
                const ex = left[i];
                left.splice(i, 1);
                ret += helper(len-1, left);
                left.splice(i, 0, ex);
            }
        }
        return ret;
    }
    
    let res = 0 ;
    for ( let i = 1 ; i <= tiles.length ; i++ ) {
        const tempRes = helper( i, arr );    
        // console.log( "len", i, tempRes );
        res += tempRes;
    }
    
    return res;
};


/**
"AAB"
"AAABBC"
"V"
"ABCDEFG"
"AAAAAAA"
"AAAAAAB"
"CDC"
"AABAAAB"
 */