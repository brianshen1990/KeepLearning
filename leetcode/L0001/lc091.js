/**
91. Decode Ways
A message containing letters from A-Z is being encoded to numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26
Given a non-empty string containing only digits, determine the total number of ways to decode it.

Example 1:

Input: "12"
Output: 2
Explanation: It could be decoded as "AB" (1 2) or "L" (12).
Example 2:

Input: "226"
Output: 3
Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

*/




/**
 * @param {string} s
 * @return {number}
 */
var numDecodingsTimeout = function(s) {
    if( s.length <= 0 ) {
        return 0;
    }
    let keepC = [0];
    helper(s, 0, keepC);
    return keepC[0];
    
};

var helper = function(s, beg, keepC) {
    if( beg === s.length - 1 ) {
        keepC[0]++;
        return;
    }
    if( beg === s.length - 2 ) {
        
        if( s[beg] === '1' ) {
            if ( s[beg+1] === '0' ) {
                // no 0 exist
                keepC[0] = keepC[0] + 1;
            } else {
                keepC[0] = keepC[0] + 2;
            }
        } else if ( s[beg] === '2' ) {
            if ( s[beg + 1] > '6' ) {
                keepC[0] = keepC[0] + 1;
            } else if ( s[beg + 1] === '0'  ){
                keepC[0] = keepC[0] + 1;
            } else {
                keepC[0] = keepC[0] + 2;
            }
        } else {
             keepC[0] = keepC[0] + 1;
        }
        return;
        
    }
    
    // beg  < s.lenbth - 2 
    if( s[beg] === '1' ) {
        if ( s[beg+1] === '0' ) { 
            // add 2 
            helper(s, beg + 1, keepC);
            helper(s, beg + 2, keepC);
        } else {
            helper(s, beg + 1, keepC);
        }
    } else if ( s[beg] === '2' ) {
        if ( s[beg + 1] > '6' ) {
            helper(s, beg + 1, keepC);
        } else if ( s[beg + 1] === '0'  ){
            helper(s, beg + 1, keepC);
        } else {
            helper(s, beg + 1, keepC);
            helper(s, beg + 2, keepC);
        }
    } else {
         helper(s, beg + 1, keepC);
    }
    return;
    
}

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if( s.length <= 0 ) {
        return 0;
    }
    
    let zeroPos = [];
    for( let i = 0; i< s.length; i++ ) {
        if (s[i] === '0') {
            zeroPos.push( i );
        }
    }
    for ( let i = zeroPos.length-1; i>=0 ; i-- ) {
        if( zeroPos[i] !== 0 && 
            ( s[zeroPos[i]-1] === '1' || s[zeroPos[i]-1] === '2') ) {
            s = s.substr(0, zeroPos[i]-1 ) + s.substr( zeroPos[i]+1 ); 
        } else {
            return 0;
        }    
    }
    // console.log( s );
    
    
    let mapp = {};
    mapp[s.length] = 1;
    mapp[s.length-1] = 1;
    
    for ( let i = s.length - 2 ; i >=0 ; i-- ) {
        if ( s[i] === '1' ) {
            mapp[i] = mapp[i+1] + mapp[i+2];
        }  else if ( s[i] === '2' ) {
            if ( s[i+1] > '6' ) {
                mapp[i] = mapp[i+2];
            } else {
                mapp[i] = mapp[i+1] + mapp[i+2];
            }
        } else {
             mapp[i] = mapp[i+1];
        }

        
    }
    return mapp[0];
};






console.log( numDecodings( "1230" ) === 0 )
console.log( numDecodings( "0" ) === 0 )
console.log( numDecodings( "1220" ) === 2 )
console.log( numDecodings( "8" ) === 1 )
console.log( numDecodings( "20" ) === 1 )
console.log( numDecodings( "12" ) === 2 )
console.log( numDecodings( "1212" ) === 5 )
console.log( numDecodings( "121212" ) === 13 )
console.log( numDecodings( "12251212" ) === 25 )
console.log( numDecodings( "12121220" ) === 13 )
console.log( numDecodings( "2912231020789" ) === 5  )
console.log( numDecodings( "222323232423423423923234234238923423296" ) === 20480 )
