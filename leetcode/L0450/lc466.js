/**

466. Count The Repetitions

Define S = [s,n] as the string S which consists of n connected strings s. For example, ["abc", 3] ="abcabcabc".

On the other hand, we define that string s1 can be obtained from string s2 if we can remove some characters from s2 such that it becomes s1. For example, “abc” can be obtained from “abdbec” based on our definition, but it can not be obtained from “acbbe”.

You are given two non-empty strings s1 and s2 (each at most 100 characters long) and two integers 0 ≤ n1 ≤ 106 and 1 ≤ n2 ≤ 106. Now consider the strings S1 and S2, where S1=[s1,n1] and S2=[s2,n2]. Find the maximum integer M such that [S2,M] can be obtained from S1.

Example:

Input:
s1="acb", n1=4
s2="ab", n2=2

Return:
2
 */


/**
 * @param {string} s1
 * @param {number} n1
 * @param {string} s2
 * @param {number} n2
 * @return {number}
 */
 var getMaxRepetitions = function(s1, n1, s2, n2) {
    // abcabcabcabc
    // abab
    // just count
    
    let index1 = 0;
    let index2 = 0;
    let times = 0;
    let count = 0;
    while ( count < n1 ) {
        if ( s1[index1] === s2[index2] ) {
            index2++;
            if ( index2 >= s2.length ) {
                index2 = 0;
                times++;
            }
        } 
        index1++;
        if ( index1 >= s1.length ) {
            index1 = 0;
            count++;
        }
    }
    console.log( times, n2 );
    return Math.floor(times / n2);
    
    
};

/**
"baba"
11
"baab"
1
"acb"
4
"ab"
2
"acb"
4
"ab"
4
"acb"
4
"ab"
5
 */