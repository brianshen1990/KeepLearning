/**
187. Repeated DNA Sequences

All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.

Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.

Example:

Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"

Output: ["AAAAACCCCC", "CCCCCAAAAA"]

 */

/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    if ( s.length <= 10 ) {
        return [];
    }
    const mapping = {};
    for ( let i = 0; i <= s.length - 10; i++  ) {
        const temp = s.substr(i, 10);
        if ( mapping[temp] ) {
            mapping[temp]++;
        } else {
            mapping[temp] = 1;
        }
    }
    const ret = [];
    Object.keys( mapping ).map( item => {
        if ( mapping[item] > 1 ) {
            ret.push( item );
        } 
    })
    return ret;
};


/**
"AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
"AAAAACCCCCAAAAACCC"
""
"AAAAA"
"AAAAAAAAAAA"
 */