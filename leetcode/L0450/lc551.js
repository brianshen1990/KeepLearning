/**

551. Student Attendance Record I

You are given a string representing an attendance record for a student. The record only contains the following three characters:
'A' : Absent.
'L' : Late.
'P' : Present.
A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).

You need to return whether the student could be rewarded according to his attendance record.

Example 1:
Input: "PPALLP"
Output: True
Example 2:
Input: "PPALLL"
Output: False
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let existA = 0;
    for ( let i = 0 ; i < s.length ; i++ ) {
        if ( s[i] === 'A' ) {
            existA++;
            if ( existA >= 2 ) {
                return false;
            }
        }
        if ( s[i] === 'L' && i > 1 && s[i-1] === 'L'  && s[i-2] === 'L') {
            return false;
        }
    }
    return true;
};

/**
"PPALLP"
"PPALLLP"
"PPAAP"
"PPLLLP"
"PPALLL"
 */