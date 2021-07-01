/**

1286. Iterator for Combination

Design the CombinationIterator class:

CombinationIterator(string characters, int combinationLength) Initializes the object with a string characters of sorted distinct lowercase English letters and a number combinationLength as arguments.
next() Returns the next combination of length combinationLength in lexicographical order.
hasNext() Returns true if and only if there exists a next combination.
 

Example 1:

Input
["CombinationIterator", "next", "hasNext", "next", "hasNext", "next", "hasNext"]
[["abc", 2], [], [], [], [], [], []]
Output
[null, "ab", true, "ac", true, "bc", false]

Explanation
CombinationIterator itr = new CombinationIterator("abc", 2);
itr.next();    // return "ab"
itr.hasNext(); // return True
itr.next();    // return "ac"
itr.hasNext(); // return True
itr.next();    // return "bc"
itr.hasNext(); // return False
 

Constraints:

1 <= combinationLength <= characters.length <= 15
All the characters of characters are unique.
At most 104 calls will be made to next and hasNext.
It's guaranteed that all calls of the function next are valid.
 */


/**
 * @param {string} characters
 * @param {number} combinationLength
 */
 var CombinationIterator = function(characters, combinationLength) {
    this.iterCache = new Array(combinationLength).fill(0).map( (_,index) => index );
    this.chars = characters;
    this.LEN = characters.length;
    this.nextFlag = true;
    // console.log("----------");
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function() {
    const { iterCache, chars, LEN, nextFlag } = this;
    // console.log( `before cache: ${iterCache}, flag:${this.nextFlag}` );
    if ( !nextFlag ) return "";
    
    const retStr = iterCache.map( item => chars[item] ).join("");
    let index = iterCache.length - 1;
    while ( index >= 0 ) {
        if ( iterCache[index] === LEN - 1 - ( iterCache.length - 1 - index ) ) {
            // need reset
            if ( index === 0 ) {
                // no more iteration
                this.nextFlag = false;
            }
            index--;   
        } else {
            // no need
            iterCache[index] += 1;
            for ( let i = index+1; i < iterCache.length ; i++ ) {
                iterCache[i] = iterCache[i-1] + 1;
            }
            break;
        }
    }
    // console.log( `after  cache: ${iterCache}, flag:${this.nextFlag},  retStr: ${retStr}` );
    
    return retStr;
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function() {
    return this.nextFlag;
};

/** 
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

/**
["CombinationIterator","next","hasNext","next","hasNext","next","hasNext"]
[["abc",2],[],[],[],[],[],[]]
["CombinationIterator","next","hasNext"]
[["abc",3],[],[]]
["CombinationIterator","next","hasNext"]
[["g",1],[],[]]
["CombinationIterator","next","hasNext","next","hasNext","next","hasNext","next","hasNext","next","hasNext"]
[["abcefg",2],[],[],[],[],[],[],[],[],[],[]]
["CombinationIterator","next","hasNext","next","hasNext","next","hasNext","next","hasNext","next","hasNext","next","hasNext","next","hasNext","next","hasNext","next","hasNext","next","hasNext","next","hasNext"]
[["abcefg",4],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
["CombinationIterator","next","hasNext","next","hasNext","next","hasNext","next","hasNext","next","hasNext","next","hasNext","next","hasNext","next","hasNext","next","hasNext","next","hasNext","next","hasNext","next","hasNext","next","hasNext","next","hasNext","next","hasNext"]
[["abcefg",4],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
["CombinationIterator","next","hasNext","next","hasNext","next","hasNext","next","hasNext","next","hasNext","next","hasNext","next","hasNext","next","hasNext","next","hasNext","next","hasNext","next","hasNext","next","hasNext","next","hasNext","next","hasNext","next","hasNext","next","hasNext","next","hasNext"]
[["hijklmno",4],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]]
["CombinationIterator","next","hasNext","next","hasNext","next","hasNext","next","hasNext"]
[["hijklmno",7],[],[],[],[],[],[],[],[]]
 */