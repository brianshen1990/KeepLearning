/*

28. Implement strStr()
Easy
665
1025


Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. 
This is consistent to C's strstr() and Java's indexOf().

Accepted
340,186
Submissions
1,119,951

*/


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if(needle.length<=0){
    return 0;
  }
  if(needle.length > haystack.length){
    return -1;
  }

  let foundPos = -1;
  let end = haystack.length - needle.length;
  for( let i = 0 ; i <= end; i++ ){
    if( haystack[i] === needle[0]){
      let found = true;
      for(let j = 1; j< needle.length ; j++){
        if( needle[j] !== haystack[i+j]){
          found = false;
          break;
        }
      }
      if(found){
        foundPos = i;
        break;
      }
    }
  }
  return foundPos;
};


let test = function () {
  console.log(strStr("hello", "ll") === 2);
  console.log(strStr("hello", "") === 0);
  console.log(strStr("hell", "ll") === 2);
  console.log(strStr("jks", "ipweq") === -1);
  console.log(strStr("heasdsdewdqweqwell", "pw") === -1);
  console.log(strStr("aaaaa", "bba") === -1);
}
test();