/**
844. Backspace String Compare

Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
Example 2:

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
Example 3:

Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
Example 4:

Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
Note:

1 <= S.length <= 200
1 <= T.length <= 200
S and T only contain lowercase letters and '#' characters.
Follow up:

Can you solve it in O(N) time and O(1) space?
 */


/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    let tt = [];
    for ( let i = T.length - 1; i >= 0 ;i-- ) {
        if ( T[i] === '#' ) {
            tt.push('#');
            continue;
        }
        // char
        if ( tt.length > 0 && tt[tt.length-1] === '#' ) {
                tt.pop();
        } else {
            tt.push(T[i]);
        }
    }
    
    let ss = [];
    for ( let i = S.length - 1; i >= 0 ;i-- ) {
        if ( S[i] === '#' ) {
            ss.push('#');
            continue;
        }
        // char
        if ( ss.length > 0 && ss[ss.length-1] === '#' ) {
            ss.pop();
        } else {
            ss.push(S[i]);
        }

    }
    let ttIndex = tt.indexOf("#");
    if ( ttIndex >= 0 ) {
        tt = tt.slice(0, ttIndex);
    }
    let ssIndex = ss.indexOf("#");
    if ( ssIndex >= 0 ) {
        ss = ss.slice(0, ssIndex);
    }
    
    console.log(ss.join(""), tt.join(""));
    return ss.join("") === tt.join("");
    
};


/**
"ab#c"
"ad#c"
"ab##"
"c#d#"
"a##c"
"#a#c"
"a#c"
"b"
"aa#a##b"
"b"
"aa#a###b"
"b"
 */