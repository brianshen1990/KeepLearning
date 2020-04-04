/**
 * 
44. Wildcard Matching

Given an input string (s) and a pattern (p), implement wildcard pattern matching with support for '?' and '*'.

'?' Matches any single character.
'*' Matches any sequence of characters (including the empty sequence).
The matching should cover the entire input string (not partial).

Note:

s could be empty and contains only lowercase letters a-z.
p could be empty and contains only lowercase letters a-z, and characters like ? or *.

Example 1:
Input:
s = "aa"
p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".

Example 2:
Input:
s = "aa"
p = "*"
Output: true
Explanation: '*' matches any sequence.

Example 3:
Input:
s = "cb"
p = "?a"
Output: false
Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.

Example 4:
Input:
s = "adceb"
p = "*a*b"
Output: true
Explanation: The first '*' matches the empty sequence, while the second '*' matches the substring "dce".

Example 5:
Input:
s = "acdcb"
p = "a*c?b"
Output: false


 */

   // simple compare without *, just to accelerate
  // if( false ) {
  //   let briefJudge = true;
  //   let sIndex = 0;
  //   let aIndex = 0;
  //   while(sIndex <= s.length && aIndex <= accelerate.length) {
  //     if( accelerate[aIndex] === '?' ) {
  //       aIndex++;
  //       sIndex++;
  //     } else {
  //       while( sIndex <= s.length && s[sIndex] !== accelerate[aIndex] ) {
  //         sIndex++;
  //       }
  //       if ( sIndex > s.length ) {
  //         // means not find
  //         briefJudge = false;
  //         break;
  //       }
  //       aIndex++;
  //     }
  //   }
  //   if( !briefJudge ) {
  //     return false;
  //   }
  //   if( accelerate.length === s.length && sIndex === s.length ) {
  //     return true;
  //   }
  //   if( accelerate.length === s.length && sIndex !== s.length ) {
  //     return false;
  //   }
  // }


/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

var isMatchV2 = function(s, p) {
  if ( s === p ) {
    return true;
  }
  // first remove *
  const accelerate = p.split('').map( (item) =>  item === '*' ? '' : item ).join('');
  
  // longer reg and short string, must be false
  if( accelerate.length > s.length ) {
    return false;
  }
  // if all is *, then match
  if( accelerate.length === 0 && p.length !== 0 ) {
    return true;
  }
  // if no *, and length not equal
  if( accelerate.length === p.length && p.length !== s.length ) {
    return false;
  }

  // simple compare without *, just to accelerate
  let sIndex = 0;

  let briefJudge = true;
  let aIndex = 0;
  while(sIndex <= s.length && aIndex <= accelerate.length) {
    if( accelerate[aIndex] === '?' ) {
      aIndex++;
      sIndex++;
    } else {
      while( sIndex <= s.length && s[sIndex] !== accelerate[aIndex] ) {
        sIndex++;
      }
      if ( sIndex > s.length ) {
        // means not find
        briefJudge = false;
        break;
      }
      aIndex++;
    }
  }
  if( !briefJudge ) {
    return false;
  }
  if( accelerate.length === s.length && sIndex === s.length && aIndex === accelerate.length) {
    return true;
  }
  if( accelerate.length === s.length && sIndex !== s.length ) {
    return false;
  }
  
  // Now handle
  sIndex = 0;
  let pIndex = 0;
  let Match = false;
  while( sIndex < s.length && pIndex < p.length ) {
    if( p[pIndex] !== '*' ) {
      // confirm
      if( p[pIndex] === '?' || p[pIndex] === s[sIndex] ) {
        sIndex++;
        pIndex++; 
        if ( sIndex === s.length && pIndex === p.length ) {
          Match = true;
        }
      } else {
        break;
      }
    } else {
      // recursive *, looking for next non *
      pIndex++;
      while( pIndex < p.length && p[pIndex] === '*'  ) {
        pIndex++;
      }
      if( pIndex === p.length ) {
        Match = true;
        break;
      } else {
        // must match reg's first non *
        while(sIndex < s.length) {
          if( p[pIndex] !== '?' && p[pIndex] !== s[sIndex] ) {
            sIndex++;
          } else {
            // find one , test match
            const tempRes = isMatch( s.slice(sIndex+1), p.slice(pIndex+1) );
            if( tempRes ) {
              Match = true;
              break;
            } else {
              sIndex++;
            }
          }
        }
        if( Match ) {
          break;
        }
      }
    }
  }
  if ( sIndex === s.length && pIndex < p.length ) {
    Match = isMatch('', p.slice(pIndex));
  }
  return Match;

};

var _isMatchHelper = function(str, match, beginPos) {
  if( match.indexOf('?') < 0 ) {
    // no char ? 
    return str.indexOf(match, beginPos);
  } else {
    str = str.slice(beginPos);
    if( str.length < match.length ){
      // not long enough
      return -1;
    }
    let firstChar = -1;
    let firstStr = '';
    let pos = 0;
    while( pos < match.length && match[pos] === '?' ){
      pos++;
    }
    if( pos !== match.length ) {
      firstChar = pos;
      while( pos < match.length && match[pos] !== '?' ){
        pos++;
      }
      firstStr = match.slice( firstChar, pos );
    } else {
      // all match chars are ?
      return beginPos;
    }
    // beginPos = beginPos - firstChar;
    match = match.slice(firstChar);
    str = str.slice(firstChar);
    let retPos = -1;
    let newPos = str.indexOf( firstStr ) ;
    let find = false;
    while( newPos >= 0 && !find) {
      // find
      if( str.length - newPos < match.length ) {
        break;
      }
      let i = 0;
      for( i = 0; i < match.length ; i++ ) {
        if( match[i] === '?' || match[i] === str[newPos + i] ) {
          // pass 
        } else {
          break;
        }
      }
      if( i === match.length ) {
        // find one
        find = true;
      } else {
        newPos = str.indexOf( firstStr, newPos + 1 );
      }
    }
    if ( find ) {
      retPos = newPos + beginPos ;
    }
    return retPos;
  }
}

var isMatch = function( str, reg ) {
  if(reg.length === 0 ) {
    return str === reg;
  }

  // trans to array
  const regArray = []; 
  reg.split('*').map( item => item ? regArray.push( item ): null );
  if ( regArray.length === 0 ) {
    // all reg chars are *
    return true;
  }
  const regRemoveStar = regArray.join('');
  if( regRemoveStar.length > str.length ) {
    // str cannot fill reg chars
    return false;
  }
  if( reg.indexOf('*') < 0 ) {
    // no * at all
    if( str.length !== reg.length ) {
      return false;
    } else {
      let ret = true;
      for ( let j = 0; j < reg.length ; j++ ) {
        if( reg[j] === str[j] || reg[j] === '?' ) {
          // pass
        } else {
          ret = false;
          break;
        }
      }
      return ret;
    }
  }

  let regIndex = 0;
  const posArray = [];
  let sIndex = _isMatchHelper(str, regArray[regIndex], 0);
  if( sIndex > 0 && reg[0] !== '*' ) {
    // reg begin with a char, 
    return false;
  }
  if( sIndex >= 0 ){
    posArray.push(sIndex); // save position
    regIndex++;
  }
  while(sIndex >= 0 && regIndex < regArray.length) {
    sIndex = _isMatchHelper(str, regArray[regIndex], sIndex + regArray[regIndex-1].length );
    if( sIndex >= 0 ){
      posArray.push(sIndex); // save position
      regIndex++;
    }
  }
  if( posArray.length === regArray.length ) {
    // find all
    // if not reach str end 
    if( posArray[posArray.length-1] + regArray[regArray.length-1].length  < str.length ) {
      if(reg[reg.length-1] === '*') {
        return true;
      } else if( ( regArray.length > 1 ||  ( reg[0] === '*' ||  regArray.length === 1 ) ) && 
        _isMatchHelper( str, regArray[regArray.length-1], str.length - regArray[regArray.length-1].length ) > 0 ) {
        // put the last one to 
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    // cannot find all
    return false;
  }
}

// '?' Matches any single character.
// '*' Matches any sequence of characters (including the empty sequence).
// The matching should cover the entire input string (not partial).

console.log( _isMatchHelper("aaaa", "a", 0) === 0 );
console.log( _isMatchHelper("aaaa", "b", 0) === -1 );
console.log( _isMatchHelper("aaaa", "??", 0) === 0 );
console.log( _isMatchHelper("aaaa", "?a", 0) === 0 );
console.log( _isMatchHelper("aaaa", "a?", 0) === 0 );
console.log( _isMatchHelper("aaba", "ab", 0) === 1 );
console.log( _isMatchHelper("aaba", "?b", 0) === 1 );
console.log( _isMatchHelper("aaba", "?b", 1) === 1 );
console.log('-------------');


// console.log( isMatch("abbabaaabbabbaababbabbbbbabbbabbbabaaaaababababbbabababaabbababaabbbbbbaaaabababbbaabbbbaabbbbababababbaabbaababaabbbababababbbbaaabbbbbabaaaabbababbbbaababaabbababbbbbababbbabaaaaaaaabbbbbaabaaababaaaabb",
// "**aa*****ba*a*bb**aa*ab****a*aaaaaa***a*aaaa**bbabb*b*b**aaaaaaaaa*a********ba*bbb***a*ba*bb*bb**a*b*bb") === false );

console.log( isMatch("aa", "aaaa") === false ); // false
console.log( isMatch("aa", "a") === false );  // false
console.log( isMatch("aa", "*") === true );  // true
console.log( isMatch("", "*") === true );  // true
console.log( isMatch("cb", "?a") === false );  // false 
console.log( isMatch("bb", "?b") === true );  // false 
console.log( isMatch("adceb", "*a*b" ) === true );  // true
console.log( isMatch("acdcb", "a*c?b" ) === false);  // false
console.log( isMatch("acdcbb", "a*c?b" ) === true );  // true
console.log( isMatch("acdcbc", "a*c?b" ) === false ); // false
console.log( isMatch("bbbbbbbbb", "*b*" ) === true ); // true
console.log( isMatch("bbbbbbbbb", "***b*" ) === true ); // true
console.log( isMatch("bbbbbbbbb", "b*" ) === true ); // true
console.log( isMatch("bbbbbbbbb", "*b" ) === true ); // true
console.log( isMatch("bbbbbbbbba", "*ba*" ) === true ); // true
console.log( isMatch("bbbbbbbbba", "*baa" ) === false ); // true
console.log( isMatch("bbbbbbbbba", "*ba*" ) === true ); // true
console.log( isMatch("c", "*?*" ) === true ); // true
console.log( isMatch("zacabz", "*a?b*" ) === false ); // true
console.log( isMatch("zacabz", "*ac?b*" ) === true ); // true
console.log( isMatch("hi", "*?" ) === true ); // true
console.log( isMatch("hi", "*?*" ) === true ); // true
console.log( isMatch("hi", "?" ) === false ); // true