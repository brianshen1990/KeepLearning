/**
1078. Occurrences After Bigram

Given words first and second, consider occurrences in some text of the form "first second third", where second comes immediately after first, and third comes immediately after second.

For each such occurrence, add "third" to the answer, and return the answer.

 

Example 1:

Input: text = "alice is a good girl she is a good student", first = "a", second = "good"
Output: ["girl","student"]
Example 2:

Input: text = "we will we will rock you", first = "we", second = "will"
Output: ["we","rock"]
 

Note:

1 <= text.length <= 1000
text consists of space separated words, where each word consists of lowercase English letters.
1 <= first.length, second.length <= 10
first and second consist of lowercase English letters.
*/


/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
 var findOcurrences = function(text, first, second) {
    let index = 0;
    const str = `${first} ${second} `;
    let ret = [];
    while ( index >=0 ) {
        index = text.indexOf(str, index);
        if ( index >= 0 ) {
            if ( index !== 0 && text[index-1] !== " " ) {
                index += str.length;
                continue;
            }
            index += str.length;
            let end = index;
            while ( end < text.length && text[end]!==" " ) {
                end++;
            }
            ret.push( text.substring(index, end) );
        }
    }
    return ret;
    
};


/**
"alice is a good girl she is a good student"
"a"
"good"
"we will we will rock you"
"we"
"will"
"alice is aa good girl she is a good student"
"a"
"good"
 */