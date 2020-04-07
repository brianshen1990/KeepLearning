/*
30. Substring with Concatenation of All Words
Hard
392
700


You are given a string, s, and a list of words, words, that are all of the same length. Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters.

Example 1:

Input:
  s = "barfoothefoobarman",
  words = ["foo","bar"]
Output: [0,9]
Explanation: Substrings starting at index 0 and 9 are "barfoor" and "foobar" respectively.
The output order does not matter, returning [9,0] is fine too.
Example 2:

Input:
  s = "wordgoodstudentgoodword",
  words = ["word","student"]
Output: []
Accepted
112,998
Submissions
500,490

*/

const ArrayCompare = require('./helper/ListNode.js').ArrayCompare;

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    if(words.length <= 0){
      return [];
    }  
    if(s.length <= 0){
      return [];
    }
    let wdCollection = {};
    let empty = false;
    for(let i = 0; i< words.length; i++){
      let item = words[i];
      let tempLen = [];
      let tempPos = s.indexOf(item, 0);
      while(tempPos >=0 ){
        tempLen.push(tempPos);
        wdCollection[tempPos] = wdCollection[tempPos]  || {};
        wdCollection[tempPos][item] = true;
        tempPos = s.indexOf(item, tempPos+1);
      }
      if(tempLen.length === 0){
        empty = true;
        break;
      }
    }
    if(empty){
      return [];
    }

    let _helpersForward = function(_s, _pos, _seekArr, _wdCollection, _word){
      if(_seekArr.length === 0){
        return true;
      }
      if(_pos < _s.length && // Len OK
          _wdCollection[_pos] ){
        let arr = Object.keys(_wdCollection[_pos ] );
        for(let i = 0; i<arr.length ; i++ ){
          let item = arr[i];
          let index = _seekArr.indexOf(item);
          if( index >= 0){
            _seekArr.splice(index, 1);
            let _ret = _helpersForward(_s, _pos+item.length, _seekArr, _wdCollection, item);
            _seekArr.push(item);
            if(_ret){
              return true;
            }
          }
        }
      }
      return false;
    }

    let res = [];
    for(let i =0 ; i< s.length; i++){
      if( wdCollection[i] ){
        let tempRes = _helpersForward(s, i, words, wdCollection, "");
        if(tempRes){
          res.push(i);
        }
      }
    }
    return res;
};

let test = function () {
  console.log( ArrayCompare( findSubstring("barfoothefoobarman", ["foo","bar"]), [0,9] ));
  console.log( ArrayCompare( findSubstring("barfoothefoofoofoo", ["foo","foo", "foo"]), [9] ));
  console.log( ArrayCompare( findSubstring("barfoothefoofoofoo", ["foo","foo"]), [9,12] ));
  console.log( ArrayCompare( findSubstring("wordgoodstudentgoodword", ["word","student"]), [] )); 
}
test();