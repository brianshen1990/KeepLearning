/**
423. Reconstruct Original Digits from English

Given a non-empty string containing an out-of-order English representation of digits 0-9, output the digits in ascending order.

Note:
Input contains only lowercase English letters.
Input is guaranteed to be valid and can be transformed to its original digits. That means invalid inputs such as "abc" or "zerone" are not permitted.
Input length is less than 50,000.
Example 1:
Input: "owoztneoer"

Output: "012"
Example 2:
Input: "fviefuro"

Output: "45"
 */

/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function(s) {
    const arr = [
        {"z": "zero", "x": "six", "g": "eight", "u": "four"}, // 4
        { "w": "two", "h": "three", "f": "five" }, // 3
        { "o": "one", "v": "seven", "i": "nine" }, // 3
    ];
    const mapping = {
        "zero": 0,
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,   // 1 v
        "eight": 8,  // 1 g
        "nine": 9
    };
    
    const res = {};
    const cache = {};
    s.split("").map( item => {
        cache[item] = cache[item] || 0;
        cache[item] += 1;
    });
    // console.log(cache);
    
    arr.map( charArr => {
        // console.log('----', charArr);
        Object.keys(charArr).map( uniqueChar => {
            const charCount = cache[uniqueChar];
            if (  charCount > 0 ) {
                const numChar = mapping[ charArr[uniqueChar] ];
                const count = cache[uniqueChar];
                res[numChar] = res[numChar] || 0;
                res[numChar] += count;
                // console.log('minus', charArr[uniqueChar] );
                charArr[uniqueChar].split("").map( char => {
                    cache[char] -= count;
                });
            }
        });
        // console.log(res, cache);
    });
    // console.log(res, cache);
    
    return Object.keys( res ).sort( (a,b) => a>b?1:-1 ).map( item => new Array(parseInt(res[item])).fill(item).join("") ).join("");
};


/** 
"owoztneoer"
"fviefuro"
""
"zerofviefuroninenineninenine"
*/