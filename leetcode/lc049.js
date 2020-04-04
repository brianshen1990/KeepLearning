/**
49. Group Anagrams

Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.

*/


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const mapping = {};
  let tempHash = "";
  for( let i = 0; i < strs.length; i++ ) {
    tempHash = helperHash(strs[i]);
    mapping[tempHash] = mapping[tempHash] || [];
    mapping[tempHash].push( strs[i] );
  }
  return Object.values( mapping );
};

const helperHash = function(str) {
  if( str.length === 0 ) {
    return '';
  }
  const mapping = new Array(26);
  mapping.fill(0);
  for( let i = 0 ; i < str.length ; i++ ) {
    mapping[ str[i].charCodeAt(0) -  97]++; 
  }
  return mapping.join('_');
};

console.log( groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]) ); 
