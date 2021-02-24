/**
816. Ambiguous Coordinates

We had some 2-dimensional coordinates, like "(1, 3)" or "(2, 0.5)".  Then, we removed all commas, decimal points, and spaces, and ended up with the string S.  Return a list of strings representing all possibilities for what our original coordinates could have been.

Our original representation never had extraneous zeroes, so we never started with numbers like "00", "0.0", "0.00", "1.0", "001", "00.01", or any other number that can be represented with less digits.  Also, a decimal point within a number never occurs without at least one digit occuring before it, so we never started with numbers like ".1".

The final answer list can be returned in any order.  Also note that all coordinates in the final answer have exactly one space between them (occurring after the comma.)

Example 1:
Input: "(123)"
Output: ["(1, 23)", "(12, 3)", "(1.2, 3)", "(1, 2.3)"]
Example 2:
Input: "(00011)"
Output:  ["(0.001, 1)", "(0, 0.011)"]
Explanation: 
0.0, 00, 0001 or 00.01 are not allowed.
Example 3:
Input: "(0123)"
Output: ["(0, 123)", "(0, 12.3)", "(0, 1.23)", "(0.1, 23)", "(0.1, 2.3)", "(0.12, 3)"]
Example 4:
Input: "(100)"
Output: [(10, 0)]
Explanation: 
1.0 is not allowed.
 

Note:

4 <= S.length <= 12.
S[0] = "(", S[S.length - 1] = ")", and the other elements in S are digits.
 
 */


/**
 * @param {string} S
 * @return {string[]}
 */
var ambiguousCoordinates = function(S) {
    let ret = [];
    S = S.substr(1, S.length-2);
    // console.log(S);
    
    const helper = (str) => {
        if (str[0] === '0') {
            if ( str.length === 1 ) {
                return [str];
            }
            return [`0.${str.substr(1)}`];
        }
        if ( str[str.length-1] === '0' ) {
            return [str];
        }
        let res = [];
        for ( let i = 1 ; i < str.length ; i++ ) {
            res.push( `${str.substr(0,i)}.${str.substr(i)}` );
        }
        res.push(str);
        return res;
    }
    
    let index = 1;
    while ( index < S.length ) {
        if ( index > 1 && S[0] === '0' && S[index-1] === '0' ) {
            // 0xxxx0
            index++;
            continue;
        }
        if ( index < S.length-1 && S[index] === '0' && S[S.length-1] === '0' ) {
            index++;
            continue;
        }
        const left = helper( S.substr(0, index) );
        const right = helper( S.substr(index) );
        // console.log( left, right );
        left.forEach( l => {
            right.forEach( r => {
                ret.push(`(${l}, ${r})`);   
            })
        });
        index++;
    }
    
    return ret;
};


/**
"(123)"
"(0123)"
"(00011)"
"(100)"
"(100100)"
"(0000000001)"
 */