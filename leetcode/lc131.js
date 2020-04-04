/**
131. Palindrome Partitioning

Given a string s, partition s such that every substring of the partition is a palindrome.

Return all possible palindrome partitioning of s.

Example:

Input: "aab"
Output:
[
  ["aa","b"],
  ["a","a","b"]
]

*/


/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let ret = [];
    if ( s.length <= 0 ) {
        return [ret];
    }
    helper([], s, ret);
    return ret;
};

var helper = function (arr, s, ret) {
    // console.log(arr, s, ret );
    if( s.length === 1 ) {
        ret.push(arr.concat([s]));
        return;
    }
    if ( isPalindrome(s) ) {
        ret.push( arr.concat([s]) );
    }
    for ( let i = 1 ; i < s.length ;i++ ) {
        let str = s.substr(0, i);
        if ( isPalindrome(str) ) {
            arr.push( str );
            helper( arr, s.substr(i), ret );
            arr.pop();
        }   
    }
}

var isPalindrome = function(s) {
    let reS = s.split('').reverse().join('');
    return s === reS;
}




/**
 * 
""
"a"
"aab"
"bbbbb"
"bbbbabb"
"bbbcacbbb"
"bbbcacbb"
 */