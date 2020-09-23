/**
1002. Find Common Characters

Given an array A of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

You may return the answer in any order.

 

Example 1:

Input: ["bella","label","roller"]
Output: ["e","l","l"]
Example 2:

Input: ["cool","lock","cook"]
Output: ["c","o"]
 

Note:

1 <= A.length <= 100
1 <= A[i].length <= 100
A[i][j] is a lowercase letter

 */



/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    const aCode = 'a'.charCodeAt(0);
    const matrix = [];
    A.forEach( item => {
        const ret = new Array(26).fill(0);
        item.split("").forEach( char => {
            ret[char.charCodeAt(0) - aCode] += 1;   
        });
        matrix.push(ret);
    });
    
    let res = [];
    for ( let i = 0 ; i < 26 ; i++ ) {
        const min = Math.min( ...matrix.map(item => item[i]) );
        if ( min > 0 ) {
            // console.log(i, min);
            res = res.concat( new Array(min).fill( String.fromCharCode(aCode+i) ) )
        }
    }
    return res;
};


/**
["bella","label","roller"]
["cool","lock","cook"]
 */