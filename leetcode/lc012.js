/*
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, 
just two one's added together. 
Twelve is written as, XII, which is simply X + II. 
The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. 
However, the numeral for four is not IIII. 
Instead, the number four is written as IV. 
Because the one is before the five we subtract it making four. 
The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given an integer, convert it to a roman numeral. Input is guaranteed to be within the range from 1 to 3999.

Example 1:

Input: 3
Output: "III"
Example 2:

Input: 4
Output: "IV"
Example 3:

Input: 9
Output: "IX"
Example 4:

Input: 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
Example 5:

Input: 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/

/**
 * @param {number} num
 * @return {string}
 */
let intToRoman = function(num) {
    let ret = "";

    let handleThousands = function(num){
        let ret = '';
        if( num >= 1000 ){
            let cir = Math.floor( num / 1000 );
            while(cir > 0){
                ret += 'M';
                cir--;
            }
            return ret;
        }
        return '';
    }
    let handleHundred = function(num){
        let ret = '';
        if(num >= 900){
            ret += "CM";
            num = num-900;
        }
        if(num >= 500){
            ret += "D";
            num = num-500;
        }
        if(num >= 400){
            ret += "CD";
            num = num-400;
        }
        let cir = Math.floor( num / 100 );
        while(cir > 0){
            ret += 'C';
            cir--;
        }
        return ret;
    }
    let handleTen = function(){
        let ret = '';
        if(num >= 90){
            ret += "XC";
            num = num-90;
        }
        if(num >= 50){
            ret += "L";
            num = num-50;
        }
        if(num >= 40){
            ret += "XL";
            num = num - 40;
        }
        let cir = Math.floor( num / 10 );
        while(cir > 0){
            ret += 'X';
            cir--;
        }
        return ret;
    }
    let handleNum = function(){
        let ret = '';
        if(num >= 9){
            ret += "IX";
            num = num-9;
        }
        if(num >= 5){
            ret += "V";
            num = num-5;
        }
        if(num >= 4){
            ret += "IV";
            num = num - 4;
        }
        let cir = num ;
        while(cir > 0){
            ret += 'I';
            cir--;
        }
        return ret;
    }

    ret = handleThousands(num);
    num = num % 1000;
    ret += handleHundred(num);
    num = num % 100;
    ret += handleTen(num);
    num = num % 10;
    ret += handleNum(num);
    return ret;

};

let test = function(){
    console.log(intToRoman(3) === 'III');
    console.log(intToRoman(4) === 'IV');
    console.log(intToRoman(9) === 'IX');
    console.log(intToRoman(58) === 'LVIII');
    console.log(intToRoman(1994) === 'MCMXCIV');
}
test();