/**
1023. Camelcase Matching

A query word matches a given pattern if we can insert lowercase letters to the pattern word so that it equals the query. (We may insert each character at any position, and may insert 0 characters.)

Given a list of queries, and a pattern, return an answer list of booleans, where answer[i] is true if and only if queries[i] matches the pattern.

 

Example 1:

Input: queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern = "FB"
Output: [true,false,true,true,false]
Explanation: 
"FooBar" can be generated like this "F" + "oo" + "B" + "ar".
"FootBall" can be generated like this "F" + "oot" + "B" + "all".
"FrameBuffer" can be generated like this "F" + "rame" + "B" + "uffer".
Example 2:

Input: queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern = "FoBa"
Output: [true,false,true,false,false]
Explanation: 
"FooBar" can be generated like this "Fo" + "o" + "Ba" + "r".
"FootBall" can be generated like this "Fo" + "ot" + "Ba" + "ll".
Example 3:

Input: queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern = "FoBaT"
Output: [false,true,false,false,false]
Explanation: 
"FooBarTest" can be generated like this "Fo" + "o" + "Ba" + "r" + "T" + "est".
 

Note:

1 <= queries.length <= 100
1 <= queries[i].length <= 100
1 <= pattern.length <= 100
All strings consists only of lower and upper case English letters.
 */


/**
 * @param {string[]} queries
 * @param {string} pattern
 * @return {boolean[]}
 */
 var camelMatch = function(queries, pattern) {
    const match = (word, pattern) => {
        let iPattern = 0;
        let iWord = 0;
        while ( iWord < word.length ) {
            if ( word[iWord] >= 'A' && word[iWord] <= 'Z' ) {
                if ( iPattern >= pattern.length ) return false;
                if ( pattern[iPattern] !== word[iWord]) return false;
                iPattern++;
                iWord++;
            } else {
                if ( pattern[iPattern] === word[iWord]) {
                    iPattern++;
                    iWord++;
                } else {
                    iWord++;
                }
            }
        }
        if ( iPattern < pattern.length ) {
            return false;
        }
        return true;
    }
    return queries.map( item => match(item, pattern) );
};

/**
["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"]
"FB"
["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"]
"FoBa"
["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"]
"FoBaT"
["aFB", "FB","FooBar","FooBarTest","aFooBarTest","FootBall","aFootBall","FrameBuffer","ForceFeedBack"]
"FB"
["CompetitiveProgramming","CounterPick","ControlPanel"]
"CooP"
["CompetitiveProgramming","CounterPick","ControlPanel","ControlPanelSss"]
"CooP"
["CompetitiveProgramming","CounterPick","ControlPanel","ControlPanelSss"]
"CooPwqeqweq"
["CompetitiveProgramming","CounterPick","ControlPanel","ControlPanelSss"]
"CooPQ"
["aksvbjLiknuTzqon","ksvjLimflkpnTzqn","mmkasvjLiknTxzqn","ksvjLiurknTzzqbn","ksvsjLctikgnTzqn","knzsvzjLiknTszqn"]
"ksvjLiknTzqn"
 */