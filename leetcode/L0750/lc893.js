/**
899. Orderly Queue

A string S of lowercase letters is given.  Then, we may make any number of moves.

In each move, we choose one of the first K letters (starting from the left), remove it, and place it at the end of the string.

Return the lexicographically smallest string we could have after any number of moves.



Example 1:

Input: S = "cba", K = 1
Output: "acb"
Explanation:
In the first move, we move the 1st character ("c") to the end, obtaining the string "bac".
In the second move, we move the 1st character ("b") to the end, obtaining the final result "acb".
Example 2:

Input: S = "baaca", K = 3
Output: "aaabc"
Explanation:
In the first move, we move the 1st character ("b") to the end, obtaining the string "aacab".
In the second move, we move the 3rd character ("c") to the end, obtaining the final result "aaabc".


Note:

1 <= K <= S.length <= 1000
S consists of lowercase letters only.
 */



 /**
  * @param {string} S
  * @param {number} K
  * @return {string}
  */
 var orderlyQueue = function(S, K) {
     if ( K > 1 ) {
         return S.split("").sort( (a,b)=> a > b ? 1 : -1 ).join("");
     } else {
         let small = S[0];
         for ( let i = 0 ; i < S.length ; i++ ) {
             if ( S[i] < small ) small = S[i];
         }

         let ret = S;
         for ( let i = 0 ; i < S.length ;i++ ) {
             if ( S[i] === small ) {
                 let newStr = S.substr(i) + S.substr(0, i);
                 if ( newStr < ret ) ret = newStr;
             }
         }
         return ret;
     }
 };

/**
"cba"
1
"cbasadfwedwqaarqweasaqweqabcaaa"
1
"baaca"
3
"baaca"
2
"cbasadfwedwqaarqweasaqweqabcaaa"
2
 */
