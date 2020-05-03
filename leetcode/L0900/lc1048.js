/**
1048. Longest String Chain

Given a list of words, each word consists of English lowercase letters.

Let's say word1 is a predecessor of word2 if and only if we can add exactly one letter anywhere in word1 to make it equal to word2.  For example, "abc" is a predecessor of "abac".

A word chain is a sequence of words [word_1, word_2, ..., word_k] with k >= 1, where word_1 is a predecessor of word_2, word_2 is a predecessor of word_3, and so on.

Return the longest possible length of a word chain with words chosen from the given list of words.

 

Example 1:

Input: ["a","b","ba","bca","bda","bdca"]
Output: 4
Explanation: one of the longest word chain is "a","ba","bda","bdca".
 

Note:

1 <= words.length <= 1000
1 <= words[i].length <= 16
words[i] only consists of English lowercase letters.

 */



/**
 * @param {string[]} words
 * @return {number}
 */
var longestStrChain = function(words) {
  if ( words.length <= 1 ) {
      return words.length;
  }
  
  // pre handle inputs
  words = words.sort ( (a, b) => {
      if ( a.length > b.length ) {
          return 1;
      } else if ( a.length < b.length ) {
          return -1;
      } else {
          return 0;
      }
  });
  // console.log(words);
  
  // init 
  let seq = new Array(words.length).fill(1);
  // helper 
  const mapping = {};
  const checkChain = (a, b) => {
      if ( a.length !== b.length + 1 ) {
          return false;
      }
      // cache
      if ( mapping[a]  && mapping[a][b] ) {
          return mapping[a][b].val;
      }
      let chainDiff = 0;
      let indexB = 0;
      let indexA = 0;
      while ( indexB < b.length ) {
          if ( a[indexA] !== b[indexB] ) {
              chainDiff++;
              indexA++;
              if (chainDiff > 1) {
                  break;
              }
          } else {
              indexB++;
              indexA++;
          }
      }
      let ret = true;
      if ( chainDiff > 1 ) {
          ret = false;
      }
      
      mapping[a] = mapping[a] || {};
      mapping[a][b] = {
          val: ret 
      }
      return ret;
  }

  // go DP
  for ( let i = 1 ; i < words.length ; i++ ) {
      let max = 1;
      for ( let j = 0; j < i ; j++ ) {
          if ( words[i].length === words[j].length + 1 ) {
              // make sure length grater tahn 1
              if ( checkChain(words[i], words[j]) ) {
                  max = Math.max(max, seq[j]+1);   
              }
          }
      }
      seq[i] = max;
  }
  // console.log( checkChain('mv', "x") )
  // console.log( checkChain('abc', "ab") )
  // console.log( checkChain('bdca', "bda") )
  // console.log( checkChain('bdca', "bca") )
  // console.log( checkChain('bdca', "bac") )
  // console.log(seq);
  // console.log(mapping)
  
  return Math.max(...seq);
  
};


/**
["a","b","ba","bca","bda","bdca"]
["bda", "a","b","ba","bca","bdca"]
["ksqvsyq","ks","kss","czvh","zczpzvdhx","zczpzvh","zczpzvhx","zcpzvh","zczvh","gr","grukmj","ksqvsq","gruj","kssq","ksqsq","grukkmj","grukj","zczpzfvdhx","gru"]
["qyssedya","pabouk","mjwdrbqwp","vylodpmwp","nfyqeowa","pu","paboukc","qssedya","lopmw","nfyqowa","vlodpmw","mwdrqwp","opmw","qsda","neo","qyssedhyac","pmw","lodpmw","mjwdrqwp","eo","nfqwa","pabuk","nfyqwa","qssdya","qsdya","qyssedhya","pabu","nqwa","pabqoukc","pbu","mw","vlodpmwp","x","xr"]
 */