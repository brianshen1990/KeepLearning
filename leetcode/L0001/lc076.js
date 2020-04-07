/**
76. Minimum Window Substring

Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

Example:

Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
Note:

If there is no such window in S that covers all characters in T, return the empty string "".
If there is such window, you are guaranteed that there will always be only one unique minimum window in S.

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    if (s.length === 0 || t.length === 0 ) {
        return '';
    }
    if( t.length === 1 ) {
        if( s.indexOf(t) >= 0 ) {
            return t;
        } else {
            return '';
        }
    }
    // t should always be longer than 1
    
    let leftCountMap = {};
    for( let i = 0 ; i < t.length ; i++ ) {
        leftCountMap[t[i]] = leftCountMap[t[i]] || 0;
        leftCountMap[t[i]] = leftCountMap[t[i]] + 1;
    }
    const ConstLenMap = Object.assign({}, leftCountMap);
    
    let bestBeg = -1;
    let bestEnd = -1;
    let bestLen = s.length + 1;
    
    let beg = -1;
    let end = -1;
    let realtimeMap = {};  
    let arr = []; 
    for( let i = 0; i< s.length; i++ ) {
        // if this char in t 
        if( ConstLenMap[s[i]] ) { 
            arr.push(i);    // record the position
            // console.log(arr);
            if ( beg < 0 ) {
                beg = i;  // first position
            }
            // record all positions accroding to chars
            realtimeMap[s[i]] = realtimeMap[s[i]] || [];
            realtimeMap[s[i]].push( i );
            
            
            if( leftCountMap[s[i]] ) {
                // if not all chars occurs, so let's expect one less
                leftCountMap[s[i]] = leftCountMap[s[i]] - 1;
                if ( leftCountMap[s[i]] === 0  ) {
                    delete leftCountMap[s[i]];
                    // console.log( leftCountMap )
                }
                
                if ( Object.keys(leftCountMap).length === 0 ) {
                    // // finally, all chars occured, nothing left
                    end = i;
                    console.log("find one for all :",beg , end);
                    if( end - beg < bestLen ) {
                        // shorter than existing best, wow, record it
                        bestEnd = end;
                        bestBeg = beg;
                        bestLen = bestEnd - bestBeg;
                        console.log(`Shorter one:${bestBeg} ${bestEnd}`);
                    } 
                    // let's see if there is any chance to reduce length
                    // because there might be duplicate elements
                    // console.log(`Longer one: ${beg} ${end}`);
                    while( realtimeMap[ s[beg] ].length > ConstLenMap[ s[beg] ] ) {
                        // if the Longer one's first element can be deleted, and have no effect
                        realtimeMap[ s[beg] ].shift(); // popup one
                        beg = arr[1];
                        arr.shift();
                        console.log("Longer but can be deleted: ", beg , end);
                        if( end - beg < bestLen ) {
                            // shorter one
                            bestEnd = end;
                            bestBeg = beg;
                            bestLen = bestEnd - bestBeg;
                            console.log(`Shorter one after try delete duplicate:  ${bestEnd} ${bestBeg}`);
                        }
                    }
                                        
                    // whether we can a short one or not, 
                    // we need to go on to next match, so remove the first one 
                    // restore one the left to fin them; 
                    // We alos need to delete the record of it
                    leftCountMap[ s[arr[0]] ] = 1;
                    realtimeMap[ s[arr[0]] ] = realtimeMap[ s[arr[0]] ].slice(1);
                    beg = arr[1]; 
                    arr.shift(1);
                    
                }
            } else {
              // do nothing
            }
        } else {
            // not in T, do nothing
        }        
    }
    if( bestLen < s.length + 1 ) {
        return s.substring(bestBeg, bestEnd+1);
    } else {
        return '';
    }
};


console.log( minWindow( "ADOBECODEBANC", "ABC") === 'BANC' );
console.log( minWindow( "ADOBECODEasdqwrwqdscqwcewqewqweqadasBANC", "ABq") === "qadasBA" );
console.log( minWindow( "bba", "ab") === 'ba' );
console.log( minWindow( "bbbbbbbba", "ab") === 'ba' );