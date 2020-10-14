/**
990. Satisfiability of Equality Equations

Given an array equations of strings that represent relationships between variables, each string equations[i] has length 4 and takes one of two different forms: "a==b" or "a!=b".  Here, a and b are lowercase letters (not necessarily different) that represent one-letter variable names.

Return true if and only if it is possible to assign integers to variable names so as to satisfy all the given equations.

 

Example 1:

Input: ["a==b","b!=a"]
Output: false
Explanation: If we assign say, a = 1 and b = 1, then the first equation is satisfied, but not the second.  There is no way to assign the variables to satisfy both equations.
Example 2:

Input: ["b==a","a==b"]
Output: true
Explanation: We could assign a = 1 and b = 1 to satisfy both equations.
Example 3:

Input: ["a==b","b==c","a==c"]
Output: true
Example 4:

Input: ["a==b","b!=c","c==a"]
Output: false
Example 5:

Input: ["c==c","b==d","x!=z"]
Output: true
 

Note:

1 <= equations.length <= 500
equations[i].length == 4
equations[i][0] and equations[i][3] are lowercase letters
equations[i][1] is either '=' or '!'
equations[i][2] is '='
 */



/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
    const cache = new Array(26).fill(0);
    let start = 1;
    const aCode = 'a'.charCodeAt(0);
    
    // handle ==
    for ( let i = 0 ; i < equations.length ; i++ ) {
        const item = equations[i];
        if ( item[1] === '=' ) {
            let [fir, sec] = item.split("==");
            fir = fir.charCodeAt(0) - aCode;
            sec = sec.charCodeAt(0) - aCode;
            if ( fir === sec ) continue;
            if ( cache[fir] === cache[sec] ) {
                if ( cache[fir] === 0 ) {
                    cache[fir] = start;
                    cache[sec] = start;
                    start++;
                }
            } else {
                if ( cache[fir] === 0 ) {
                    cache[fir] = cache[sec];
                } else if ( cache[sec] === 0 ) {
                    cache[sec] = cache[fir];
                } else {
                    // console.log("hit, not equal, adjust");
                    const replace = cache[sec];
                    for ( let j = 0 ; j < 26 ; j++ ) {
                        if ( cache[j] === replace ) {
                            cache[j] = cache[fir];
                        }
                    }   
                }
            }
            // console.log( cache )
        }
    }
    // console.log(cache);
    
    // handle != 
    for ( let i = 0 ; i < equations.length ; i++ ) {
        const item = equations[i];
        if ( item[1] === '!' ) {
            let [fir, sec] = item.split("!=");
            fir = fir.charCodeAt(0) - aCode;
            sec = sec.charCodeAt(0) - aCode;
            if ( fir === sec ) return false;
            if ( cache[fir] === cache[sec] && cache[fir] !== 0 ) {
                return false;
            }
        }
    }
    
    return true;
    
};



/**
["a==b","b!=a"]
["b==a","a==b"]
["a==b","b==c","a==c"]
["a==b","b!=c","c==a"]
["c==c","b==d","x!=z"]
["c==c","b==d","x!=z", "x==z"]
["a==b","x==y", "a==x"]
["a==b","x==y", "a==x", "b!=y"]
["a==b","x==y", "b!=y"]
 */