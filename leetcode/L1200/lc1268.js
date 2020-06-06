/**

1268. Search Suggestions System

Given an array of strings products and a string searchWord. We want to design a system that suggests at most three product names from products after each character of searchWord is typed. Suggested products should have common prefix with the searchWord. If there are more than three products with a common prefix return the three lexicographically minimums products.

Return list of lists of the suggested products after each character of searchWord is typed. 

 

Example 1:

Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
Output: [
["mobile","moneypot","monitor"],
["mobile","moneypot","monitor"],
["mouse","mousepad"],
["mouse","mousepad"],
["mouse","mousepad"]
]
Explanation: products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"]
After typing m and mo all products match and we show user ["mobile","moneypot","monitor"]
After typing mou, mous and mouse the system suggests ["mouse","mousepad"]
Example 2:

Input: products = ["havana"], searchWord = "havana"
Output: [["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]
Example 3:

Input: products = ["bags","baggage","banner","box","cloths"], searchWord = "bags"
Output: [["baggage","bags","banner"],["baggage","bags","banner"],["baggage","bags"],["bags"]]
Example 4:

Input: products = ["havana"], searchWord = "tatiana"
Output: [[],[],[],[],[],[],[]]
 

Constraints:

1 <= products.length <= 1000
There are no repeated elements in products.
1 <= Σ products[i].length <= 2 * 10^4
All characters of products[i] are lower-case English letters.
1 <= searchWord.length <= 1000
All characters of searchWord are lower-case English letters.


 */


/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function(products, searchWord) {
  // build tire
  const tire = {};
  for ( let i = 0 ; i < products.length; i++ ) {
      let tempTire = tire;
      for ( let j = 0; j < products[i].length ; j++ ) {
          tempTire[ products[i][j] ] = tempTire[ products[i][j] ] || {
              val: false, 
              arr: {}
          }
          tempTire[ products[i][j] ].val = true;
          if ( j === products[i].length - 1 ) {
              tempTire[ products[i][j] ].word = true;
          }
          tempTire = tempTire[ products[i][j] ].arr;
      }
  }
  // console.log(tire);
  
  const dfs = (_tire, _base, _ret) => {
      if ( _ret.length >= 3 ) {
          return;
      }
      if ( _tire.word ) {
          _ret.push(_base);
      }
      
      const keys = Object.keys(_tire.arr).sort( (a,b) => a.charCodeAt(0) - b.charCodeAt(0) );
      // console.log( keys );
      for ( let i = 0; i < keys.length; i++ ) {
          dfs(_tire.arr[keys[i]], _base + keys[i], _ret);
          if ( _ret.length >= 3 ) {
              break;
          }
      }
      
  }
  
  const res = [];
  let tempTire = tire;
  for ( let i = 0; i < searchWord.length ; i++ ) {
      const char = searchWord[i];
      if ( tempTire[char] && tempTire[char].val ) {
          // DFS find first 3
          const tempRes = [];
          dfs( tempTire[char], searchWord.substr(0, i+1), tempRes );
          res.push( tempRes );
          tempTire = tempTire[char].arr;
      } else {
          // can't find any match one
          break;
      }
  }
  
  const remainLen = searchWord.length - res.length;
  for ( let i = 0; i< remainLen ; i++ ) {
      res.push( [] );
  }    
  return res;
};


/**
["mobile","mouse","moneypot","monitor","mousepad"]
"mouse"
["havana"]
"havana"
["bags","baggage","banner","box","cloths"]
"bags"
["havana"]
"tatiana"
 */