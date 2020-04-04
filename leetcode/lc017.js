/*
Given a string containing digits from 2-9 inclusive, 
return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. 
Note that 1 does not map to any letters.

2=>abc
3=>def
4=>ghi
5=>jkl
6=>mno
7=>pqs
8=>tuv
9=>wxyz

Example:

Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:

Although the above answer is in lexicographical order, your answer could be in any order you want.

*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(digits.length === 0){
        return [];
    }
    let mappings = {
        "2": ["a","b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r",  "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"]
    };
    let retObj = {} ;
    mappings[digits[0]].map(item=>{
        retObj[item] = true;
    })

    for(let i = 1; i< digits.length;i++){
        tempObj = {};
        Object.keys(retObj).map(item=>{
            mappings[digits[i]].map(inItem=>{
                tempObj[item+inItem] = true;
            })
        });
        retObj = tempObj;
    }
    return Object.keys(retObj);
};


let test = function(){
    console.log( letterCombinations("23"));
    console.log( letterCombinations("23").length === 9 );
    console.log( letterCombinations("22") );
    console.log( letterCombinations("22").length === 6 );
    
    console.log( letterCombinations("232").length === 18 );
    console.log( letterCombinations("234").length === 27 );
    console.log( letterCombinations("239").length === 36 );
}
test();