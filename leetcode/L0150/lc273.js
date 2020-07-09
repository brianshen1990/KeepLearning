/**
273. Integer to English Words

Convert a non-negative integer to its english words representation. Given input is guaranteed to be less than 231 - 1.

Example 1:

Input: 123
Output: "One Hundred Twenty Three"
Example 2:

Input: 12345
Output: "Twelve Thousand Three Hundred Forty Five"
Example 3:

Input: 1234567
Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
Example 4:

Input: 1234567891
Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"
 */

/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    // 2147483648
    if ( num === 0 ) {
        return "Zero";
    }
    
    const Empty = " ";
    const fixedPre = {
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine",
        10: "Ten",
        11: "Eleven",
        12: "Twelve",
        13: "Thirteen",
        14: "Fourteen",
        15: "Fifteen",
        16: "Sixteen",
        17: "Seventeen",
        18: "Eighteen",
        19: "Nineteen",
        20: "Twenty",
        30: "Thirty",
        40: "Forty",
        50: "Fifty",
        60: "Sixty",
        70: "Seventy",
        80: "Eighty",
        90: "Ninety",
        100: "Hundred"
    }
    const fixedArr = [ "", "Thousand", "Million", "Billion" ];
    num = `${num}`; 
    // console.log("----", num);
    let ret = [];
    let round = 0;
    while ( num.length > 0 ) {
        let handleStr = "";
        if ( num.length >= 3 ) {
            handleStr = num.substr(num.length-3);
            num = num.substr(0, num.length-3);
        } else {
            handleStr = num;
            num = "";
        }
        let tempNum = parseInt( handleStr );
        const tempArr = [];
        // console.log( "handling: ", tempNum );
        if ( tempNum === 0 ) {
            // nothing
        } else if ( tempNum <= 20 ) {
            tempArr.push(fixedPre[tempNum]);
        } else if ( tempNum <= 99 ) {
            let div = Math.floor(tempNum / 10);
            tempArr.push(fixedPre[div*10]);
            let mod = tempNum % 10;
            if ( mod !== 0 ) {
                tempArr.push(fixedPre[mod]);
            }
        } else { // <999
            let thou = Math.floor(tempNum / 100);
            tempArr.push(fixedPre[thou]);
            tempArr.push(fixedPre[100]);
            tempNum = tempNum % 100;
            
            if ( tempNum === 0 ) {
                // pass
            } else if ( tempNum < 20 ) {
                tempArr.push(fixedPre[tempNum]);
            } else {
                let div = Math.floor(tempNum / 10);
                tempArr.push(fixedPre[div*10]);
                let mod = tempNum % 10;
                if ( mod !== 0 ) {
                    tempArr.push(fixedPre[mod]);
                }
            }
        }
        if ( round > 0 && tempArr.length > 0 ) {
            tempArr.push(fixedArr[round]);
        }
        // console.log( tempArr );
        ret = [ ...tempArr, ...ret ]
        round++;
    }
    
    return ret.join(" ")
};

/**
111
0
1
9
10
12
99
100
101
123
999
1001
1234
9999
10001
12345
99999
100001
999999
1000221
1234567
1234567891
1200000890
 */