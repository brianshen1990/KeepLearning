/**
395. Longest Substring with At Least K Repeating Characters

Find the length of the longest substring T of a given string (consists of lowercase letters only) such that every character in T appears no less than k times.

Example 1:

Input:
s = "aaabb", k = 3

Output:
3

The longest substring is "aaa", as 'a' is repeated 3 times.
Example 2:

Input:
s = "ababbc", k = 2

Output:
5

The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.

 */


/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(str, k) {
    // greedy
    const speed = {};
    
    const helper = (s) => {  
        const keep = s;
        if ( s.length <= 0 ) {
            return s;
        }
        if ( s in speed ) {
            return speed[s];
        }
        
        // console.log("handling", s);
        const cache = {};
        for ( let i = 0 ; i < s.length ; i++ ) {
            cache[ s[i] ] = cache[ s[i] ] || 0;
            cache[ s[i] ] += 1;
        }
        
        while ( true ) {
            const toDelete = new Set( Object.keys(cache).filter( item => cache[item] < k ) );
            if ( toDelete.size === 0 ) {
                // console.log("hit", s);
                break; // all staisfide
            }
            if ( toDelete.size === Object.keys(cache).length ) {
                s = "";
                break;
            }
            // console.log( ...toDelete, s[0], s[s.length-1] );

            let found = false;
            if ( toDelete.has(s[0]) || toDelete.has(s[s.length-1]) ) {
                // console.log("remove head or tal", s[0], s[s.length-1]);
                found = true;
                let rem = s[0];
                if ( !toDelete.has(s[0]) ) {
                    rem = s[s.length-1];
                    cache[ rem ] -= 1;
                    if ( cache[ rem ] <= 0 ) {
                        delete cache[ rem ];
                    }
                    s = s.substr(0, s.length-1);
                } else {
                    cache[ rem ] -= 1;
                    if ( cache[ rem ] <= 0 ) {
                        delete cache[ rem ];
                    }
                    s = s.substr(1);
                }
                // console.log("after removing", s);
                continue;
            }

            // head and tail can't be deleted
            if ( ! found ) {
                // console.log( "handle nested", s );
                const left = helper(s.substr(1));
                const right = helper(s.substr(0, s.length-1));
                s = left.length > right.length ? left : right;
                // console.log( "handle nested end", s );
                break;
            }
        }
        speed[keep] = s;
        return s;
    }
    const res = helper(str);
    // console.log(res);
    return res.length;
    
};

/** 
"aaabb"
3
"aaabb"
2
"aaabb"
4
"ababbc"
2
"baacb"
2
"zzzzzzzzzzaaaaaaaaabbbbbbbbhbhbhbhbhbhbhicbcbcibcbccccccccccbbbbbbbbaaaaaaaaafffaahhhhhiaahiiiiiiiiifeeeeeeeeee"
10
*/
