
/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: 
(you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

P     I    N
A   L S  I G
Y A   H R
P     I
*/
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
let convert = function(s, numRows) {
    if( s.length<=0 || numRows <= 1){
        return s;
    }
    let _helper = function(s, numR, nearB){
        let ret = "";
        let index = 0;
        let tempV = numR*2*index;
        while( (tempV+nearB) < s.length || (tempV-nearB) < s.length ){
            if( nearB===0 || nearB ===numR ){
                if( (tempV+nearB)<s.length ){
                    ret += s[tempV+nearB];
                }
            }else{
                if( tempV-nearB >= 0  && tempV-nearB < s.length){
                    ret+= s[tempV-nearB];
                }
                if( tempV+nearB < s.length ){
                    ret += s[tempV+nearB];
                }
            }
            index++;
            tempV = numR*2*index;
        }

        return ret;
    }
    let ret = "";
    for( let i=0; i<numRows; i++){
        ret += _helper(s, numRows-1, i);
    }
    return ret;
};

let test = function(){
    console.log(convert("PAYPALISHIRING", 3) === "PAHNAPLSIIGYIR");
    console.log(convert("PAYPALISHIRING", 4) === "PINALSIGYAHRPI");
    console.log(convert("PAYPALISHIRING", 1) === "PAYPALISHIRING");
    console.log(convert("", 1) === "");
}

test();
