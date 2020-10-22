/**
984. String Without AAA or BBB

Given two integers A and B, return any string S such that:

S has length A + B and contains exactly A 'a' letters, and exactly B 'b' letters;
The substring 'aaa' does not occur in S;
The substring 'bbb' does not occur in S.
 

Example 1:

Input: A = 1, B = 2
Output: "abb"
Explanation: "abb", "bab" and "bba" are all correct answers.
Example 2:

Input: A = 4, B = 1
Output: "aabaa"
 

Note:

0 <= A <= 100
0 <= B <= 100
It is guaranteed such an S exists for the given A and B.
 */



/**
 * @param {number} A
 * @param {number} B
 * @return {string}
 */
var strWithout3a3b = function(A, B) {
    let arr = [];
    while ( A > 0 && B > 0 ) {
        arr.push("a");
        arr.push("b");
        A--;
        B--;
    }
    if ( A > 0 ) {
        arr.push("a");A--;
        
        let nextIndex = 0;
        while ( A > 0 ) {
            arr.splice(nextIndex, 0, "a");
            A--;
            while ( nextIndex < arr.length && arr[nextIndex] === "a" ) {
                nextIndex++;
            }
            nextIndex++;
        }
    }
    if ( B > 0 ) {
        arr.unshift("b"); B--;
        
        let nextIndex = 0;
        while ( B > 0 ) {
            arr.splice(nextIndex, 0, "b");
            B--;
            while ( nextIndex < arr.length && arr[nextIndex] === "b" ) {
                nextIndex++;
            }
            nextIndex++;
        }
    }
    
    return arr.join("");
    
};



/**
1
2
4
1
1
4
2
5
5
2
10
10
10
22
0
2
2
0
0
0
1
1
1
2
9
18
 */