/**
763. Partition Labels

A string S of lowercase English letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.

 

Example 1:

Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
 

Note:

S will have length in range [1, 500].
S will consist of lowercase English letters ('a' to 'z') only.
 */


/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  const cache = {};
  for ( let i = 0 ; i < S.length ; i++ ) {
      cache[S[i]] = cache[S[i]] || { beg: i, end:i };
      cache[S[i]].end = i;
  }
  
  let ret = [];
  for ( let i = 0 ; i < S.length ; ) {
      if ( cache[S[i]].beg === cache[S[i]].end ) {
          ret.push(1);
          i++;
          continue;
      } 
      // handle 
      let nextMax = cache[S[i]].end;
      // console.log("beg", i, nextMax );
      let nextIndex = i+1;
      while ( nextIndex <= nextMax && nextIndex < S.length ) {
          if ( cache[S[nextIndex]].end > nextMax ) {
              nextMax = cache[S[nextIndex]].end;
          }
          nextIndex++;
      }
      // console.log("end", i, nextMax );
      ret.push( nextMax - i + 1);
      i = nextMax + 1;
  }
  return ret;
};


/*
"ababcbacadefegdehijhklij"
"ababcbacadefegdehijhklijz"
"ababc"
"aaaa"
"abcda"
"b"
*/