/**
354. Russian Doll Envelopes

You have a number of envelopes with widths and heights given as a pair of integers (w, h). One envelope can fit into another if and only if both the width and height of one envelope is greater than the width and height of the other envelope.

What is the maximum number of envelopes can you Russian doll? (put one inside other)

Note:
Rotation is not allowed.

Example:

Input: [[5,4],[6,4],[6,7],[2,3]]
Output: 3 
Explanation: The maximum number of envelopes you can Russian doll is 3 ([2,3] => [5,4] => [6,7]).
 */

/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
    if ( envelopes.length <= 1 ) {
        return envelopes.length;
    }
    
    // first pre handle the data
    envelopes = envelopes.sort( (a, b) => {
        if ( a[0] > b[0] ) {
            return 1;
        } else if (a[0] < b[0]) {
            return -1;
        } else {
            return a[1] > b[1];
        }
    });
    
    // console.log(envelopes);
    // init 
    const seq = new Array(envelopes.length).fill(1);
    // console.log(seq);
    
    // go dp 
    for (let i = 1 ; i< envelopes.length ; i++) {
        let max = 1;
        for ( let j = 0; j < i ; j++ ) {
            if ( envelopes[i][0] > envelopes[j][0] && 
                    envelopes[i][1] > envelopes[j][1] ) {
                // can fit
                max = Math.max(max, seq[j] + 1 );
            }
        }
        seq[i] = max;
    }
    // console.log(seq);
    
    return Math.max(...seq);
    
};

/** 
[[5,4],[6,4],[6,7],[2,3]]
[[]]
[[5,4]]
[[5,4],[2,3]]
[[10,8],[1,12],[6,15],[2,18]]
*/