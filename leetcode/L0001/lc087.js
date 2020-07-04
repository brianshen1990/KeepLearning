/**
87. Scramble String

Given a string s1, we may represent it as a binary tree by partitioning it to two non-empty substrings recursively.

Below is one possible representation of s1 = "great":

    great
   /    \
  gr    eat
 / \    /  \
g   r  e   at
           / \
          a   t
To scramble the string, we may choose any non-leaf node and swap its two children.

For example, if we choose the node "gr" and swap its two children, it produces a scrambled string "rgeat".

    rgeat
   /    \
  rg    eat
 / \    /  \
r   g  e   at
           / \
          a   t
We say that "rgeat" is a scrambled string of "great".

Similarly, if we continue to swap the children of nodes "eat" and "at", it produces a scrambled string "rgtae".

    rgtae
   /    \
  rg    tae
 / \    /  \
r   g  ta  e
       / \
      t   a
We say that "rgtae" is a scrambled string of "great".

Given two strings s1 and s2 of the same length, determine if s2 is a scrambled string of s1.

Example 1:

Input: s1 = "great", s2 = "rgeat"
Output: true
Example 2:

Input: s1 = "abcde", s2 = "caebd"
Output: false

*/


/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScramble = function(s1, s2) {
    
    // console.log( "--------- ", s1, s2 );
    const cache = {};
    
    const helper = (str1, str2) => {
        // break condition
        if ( str1.length !== str2.length ) {
        return false;
        }
        if ( str1.length === 0 ) {
            return false;
        }
        if ( str1.length === 1 ) {
            return str1 === str2;
        }
        if ( str1 === str2 ) {
            return true;
        }
        if ( `${str1}_${str2}` in cache ) {
            return cache[`${str1}_${str2}`];
        }
        
        // recusive condition
        let match = false;
        let index = 0;
        for ( let index1 = 1 ; index1 < str1.length ; index1++ ) {
            // take index1 len
            let str1Left = str1.substr(0, index1);
            let str1Right = str1.substr(index1);
            
            let lenArr = [ index1, str1.length-index1 ]; 
            for ( let i = 0 ; i < 2 ; i++ ) {
                let str2Left = str2.substr(0, lenArr[i]);
                let str2Right = str2.substr(lenArr[i]); 
                if ( i === 1 ) {
                    let temp = str2Left;
                    str2Left = str2Right;
                    str2Right = temp;
                }
                // console.log("comapare:", str2Left, str2Right )
                let matchLeft = true;
                if ( str1Left.length > 0 ) {
                    matchLeft = helper( str1Left, str2Left );
                }
                if ( matchLeft ) {
                    let matchRight = true;
                    if ( str1Right.length > 0 ) {
                        matchRight = helper( str1Right, str2Right);
                    }
                    if ( matchRight ) {
                        match = true;
                        break; // find match one, fantastic!
                    }
                }
            }
            if ( match ) {
                break;
            }
        }
        
        cache[`${str1}_${str2}`] = match;
        // console.log(`${str1}_${str2}`, match)
        return match;
    }
   
    return helper(s1, s2);
    
};


/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScrambleBadTestCaseS = function(s1, s2) {
    
    // console.log( "--------- ", s1, s2 );
    const cache = {};
    
    const helper = (str1, str2) => {
        // break condition
        if ( str1.length !== str2.length ) {
        return false;
        }
        if ( str1.length === 0 ) {
            return false;
        }
        if ( str1.length === 1 ) {
            return str1 === str2;
        }
        if ( str1 === str2 ) {
            return true;
        }
        if ( `${str1}_${str2}` in cache ) {
            return cache[`${str1}_${str2}`];
        }
        
        
        // recusive condition
        
        let lookChar = str2[0];
        let index = str1.indexOf(lookChar);
        let match = false;
        while ( index >= 0 ) {
            let matchLen = 0;
            let indexStr2 = 0;
            let indexStr1 = index;
            while ( indexStr2+matchLen < str1.length && indexStr2+matchLen < str1.length 
                   && str1[indexStr1+matchLen] === str2[indexStr2+matchLen] ) {
                matchLen++;
            }
            
            for ( let j = 1 ; j <= matchLen ; j++ ) {
            
                let lenArr = [ index, str1.length-j-index ]; // 1, 3
                let str1Left = str1.substr(0, lenArr[0]);
                let str1Right = str1.substr(index+j, lenArr[1]);
                // console.log(`find index ${index}  ${str1Left} ( ${str1.substr(index, j)} ) ${str1Right}`);

                for ( let i = 0 ; i < 2 ; i++ ) {
                    let str2Left = str2.substr(j, lenArr[i]); // iter 1 -> 3
                    let str2Right = str2.substr(j+lenArr[i]); 
                    if ( i === 1 ) {
                        let temp = str2Left;
                        str2Left = str2Right;
                        str2Right = temp;
                    }

                    // console.log("comapare:", str2Left, str2Right )

                    let matchLeft = true;
                    if ( str1Left.length > 0 ) {
                        matchLeft = helper( str1Left, str2Left );
                    }
                    if ( matchLeft ) {
                        let matchRight = true;
                        if ( str1Right.length > 0 ) {
                            matchRight = helper( str1Right, str2Right);
                        }
                        if ( matchRight ) {
                            match = true;
                            break; // find match one, fantastic!
                        }
                    }
                }
                if ( match ) {
                    break;
                }
            }
            
            index = str1.indexOf(lookChar, index+1); // find next match point
        }
        cache[`${str1}_${str2}`] = match;
        // console.log(`${str1}_${str2}`, match)
        return match;
    }
   
    return helper(s1, s2);
    
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScrambleTimeLimitExceed = function(s1, s2) {
    if ( s1.length !== s2.length ) {
        return false;
    }
    if ( s1.length === 0 ) {
        return false;
    }
    if ( s1.length === 1 ) {
        return s1 === s2;
    }
    if ( s1 === s2 ) {
        return true;
    }
    
    // pre filter
    let cache1 = {}, cache2 = {};
    for ( let i = 0 ; i < s1.length ; i++ ) {
        cache1[s1[i]] = cache1[s1[i]] || 0;
        cache1[s1[i]] += 1;
        cache2[s2[i]] = cache2[s2[i]] || 0;
        cache2[s2[i]] += 1;
    }
    let firKeys = Object.keys(cache1);
    for ( let i = 0 ; i < firKeys.length ; i++ ) {
        if ( cache1[ firKeys[i] ] !== cache2[ firKeys[i] ] ) {
            return false;
        }
    }

    // top down dp
    const cache = {};
    const helper = (str) => {
        if ( str.length === 1 ) {
            return new Set([str]);
        }
        if ( cache[str] ) {
            return cache[str];
        }
        let ret = new Set();
        for ( let i = 1 ; i <= str.length -1 ; i++ ) {
            let fir = str.substr(0, i);
            let sec = str.substr(i)
            // console.log(fir, sec);
            let firRes = helper(fir);
            let secRes = helper(sec);
            
            firRes.forEach( itemF => {
                secRes.forEach( itemS => {
                    ret.add(`${itemF}${itemS}`);
                    ret.add(`${itemS}${itemF}`);
                });
            });
        }
        // console.log(ret);
        cache[str] = ret;
        return ret;
    }
    let res = helper(s1);
    console.log(res.size);
    
    return res.has(s2);
    
};



/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isScrambleStackError = function(s1, s2) {
    if( s1.length !== s2.length ) {
        return false;
    }
    let stack = [];
    let index = 0;
    let i = 0;
    while( i < s2.length && index < s2.length ) {
        let ch = s2[i];
        if( s1[index] === ch ) {
            index++;
            i++;
        } else {
            if ( stack.length > 0 && stack[ stack.length - 1 ] === ch ) {
                stack.pop();
                i++;
            } else {                
                stack.push( s1[index] );
                index++;
            }
        }
    }
    if( i === s2.length  ) {
        return true;
    }
    let notFound = false;
    while( i < s2.length ) {
        let ch = s2[i];
        if( index < s2.length && s2[index] === ch ) {
            i++;
            index++;
        }  else if( stack.length > 0 && stack[ stack.length - 1 ] === ch ) {
            stack.pop();
            i++;
        } else {
            break;
        }
    }
    
    if( i === s2.length  ) {
        return true;
    }
    
    return false
};




console.log( isScramble( "great", "rgtae" ) === true );
console.log( isScramble( "great", "rgeat" ) === true );
console.log( isScramble("abcde", "caebd" ) === false );