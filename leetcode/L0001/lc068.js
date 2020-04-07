/**
68. Text Justification

Given an array of words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

For the last line of text, it should be left justified and no extra space is inserted between words.

Note:

A word is defined as a character sequence consisting of non-space characters only.
Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
The input array words contains at least one word.
Example 1:

Input:
words = ["This", "is", "an", "example", "of", "text", "justification."]
maxWidth = 16
Output:
[
   "This    is    an",
   "example  of text",
   "justification.  "
]
Example 2:

Input:
words = ["What","must","be","acknowledgment","shall","be"]
maxWidth = 16
Output:
[
  "What   must   be",
  "acknowledgment  ",
  "shall be        "
]
Explanation: Note that the last line is "shall be    " instead of "shall     be",
             because the last line must be left-justified instead of fully-justified.
             Note that the second line is also left-justified becase it contains only one word.
Example 3:

Input:
words = ["Science","is","what","we","understand","well","enough","to","explain",
         "to","a","computer.","Art","is","everything","else","we","do"]
maxWidth = 20
Output:
[
  "Science  is  what we",
  "understand      well",
  "enough to explain to",
  "a  computer.  Art is",
  "everything  else  we",
  "do                  "
]
*/

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let ret = [];
    let tempArr = [];
    let tempLen = 0;
    for( let i = 0 ; i< words.length ; i++ ) {
        tempLen += words[i].length + 1;
        if ( tempLen > maxWidth + 1 ) {
            // cannot hold anymore
            ret.push( tempArr.slice(0) );
            tempArr = [];
            tempLen =  words[i].length + 1;
        }
        tempArr.push( words[i] );
    }
    ret.push( tempArr.slice(0) );
    console.log( ret  );
    let rRet = [];
    for(  let i = 0; i < ret.length -1 ; i++) {
        rRet.push( adjustNormal(ret[i], maxWidth) );
    }
    rRet.push(adjustLastLine ( ret[ret.length-1], maxWidth ) );
    return rRet;
};

var adjustNormal = function(words, maxWidth) {
    if( words.length === 1 ) {
        return words[0] + new Array( maxWidth - words[0].length ).fill(' ').join('');
    }
    let ret = '';
    let emptyLen = maxWidth - words.join('').length;
    let average = Math.floor( emptyLen / ( words.length - 1 ) );
    let averageStr = new Array( average ).fill(' ').join('');
    let extraEditOnes = emptyLen - average * ( words.length - 1 );
    let extraEditOnesStr = averageStr + ' ';
    for( let i = 0; i < extraEditOnes ; i++ ) {
        ret += words[i] + extraEditOnesStr;
    }
    for ( let i = extraEditOnes; i < words.length - 1; i++ ) {
        ret += words[i] + averageStr;
    }
    ret += words[words.length - 1];
    console.log( ret );
    return ret;
}

var adjustLastLine = function(words, maxWidth) {
    if( words.length === 1 ) {
        return words[0] + new Array( maxWidth - words[0].length ).fill(' ').join('');
    }
    
    let ret = words.join(' ');
    ret = ret + new Array(maxWidth - ret.length).fill(' ').join('');
    // console.log( ret );
    return ret;
}

let res = '';

console.log('----------------')
res = fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16);
console.log ( res.length === 3 );
console.log ( res[0] === "This    is    an" );
console.log ( res[1] === "example  of text" );
console.log ( res[2] === "justification.  " );

console.log('----------------')
res = fullJustify(["Science","is","what","we","understand","well","enough","to","explain",
"to","a","computer.","Art","is","everything","else","we","do"], 20)
console.log ( res.length === 6 );
console.log ( res[0] === "Science  is  what we" );
console.log ( res[1] === "understand      well" );
console.log ( res[2] === "enough to explain to" );
console.log ( res[3] === "a  computer.  Art is" );
console.log ( res[4] === "everything  else  we" );
console.log ( res[5] === "do                  " );
